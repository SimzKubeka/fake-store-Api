import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
 } from "react";
 import { Product } from "../types/Product";
 
 //@desc: Defines the structure of items in the cart
 interface CartItem extends Product {
  quantity: number;
 }
 
 //@desc: Defines the state structure for the cart
 interface CartState {
  cartItems: CartItem[];
  isSidebarVisible: boolean;
 }
 
 //@desc: Types of actions that can be performed on the cart state
 type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number }; }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number }; }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "CLEAR_CART" };
 
 //@desc: Context type definitions for cart operations
 interface CartContextType {
  cartItems: CartItem[];
  isSidebarVisible: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  clearCart: () => void;
 }
 
 //@desc: Creates the cart context with undefined initial value
 const CartContext = createContext<CartContextType | undefined>(undefined);
 
 //@desc: Reducer function for handling cart actions
 const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
   case "ADD_ITEM":
    const existingCartItem = state.cartItems.find(
     (item) => item.id === action.payload.id
    );
    if (existingCartItem) {
     // If item exists, update the quantity
     return {
      ...state,
      cartItems: state.cartItems.map((item) =>
       item.id === action.payload.id
        ? { ...item, quantity: item.quantity + action.payload.quantity }
        : item
      ),
     };
    }
    // If item does not exist, add to cart
    return { ...state, cartItems: [...state.cartItems, action.payload] };
   case "REMOVE_ITEM":
    return {
     ...state,
     cartItems: state.cartItems.filter(
      (item) => item.id !== action.payload.id
     ),
    };
   case "UPDATE_QUANTITY":
    return {
     ...state,
     cartItems: state.cartItems.map((item) =>
      item.id === action.payload.id
       ? { ...item, quantity: action.payload.quantity }
       : item
     ),
    };
   case "TOGGLE_SIDEBAR":
    return { ...state, isSidebarVisible: !state.isSidebarVisible };
   case "CLOSE_SIDEBAR":
    return { ...state, isSidebarVisible: false };
   case "CLEAR_CART":
    return { ...state, cartItems: [] };
   default:
    return state;
  }
 };
 
 //@desc: Provider component that encapsulates children with cart context
 const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], isSidebarVisible: false }, initCart);
 
  useEffect(() => {
   // Persist cart state to localStorage
   localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);
 
  //@desc: Initializes cart from localStorage
  function initCart() {
   const savedCart = localStorage.getItem("cart");
   return savedCart ? JSON.parse(savedCart) : { cartItems: [], isSidebarVisible: false };
  }
 
  //@desc: Context functions to manipulate the cart
  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id: number) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const updateQuantity = (id: number, quantity: number) => dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const toggleSidebar = () => dispatch({ type: "TOGGLE_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });
 
  return (
   <CartContext.Provider value={{ cartItems: state.cartItems, isSidebarVisible: state.isSidebarVisible, addItem, removeItem, updateQuantity, toggleSidebar, closeSidebar, clearCart }}>
    {children}
   </CartContext.Provider>
  );
 };
 
 //@desc: Custom hook to use the cart context
 const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
   throw new Error("useCart must be used within a CartProvider");
  }
  return context;
 };
 
 export { CartProvider, useCart };
 