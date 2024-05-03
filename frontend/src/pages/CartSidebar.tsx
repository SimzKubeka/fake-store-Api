import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaTrash } from "react-icons/fa";

const CartSidebar: React.FC = () => {
 const {
  cartItems,
  removeItem,
  updateQuantity,
  isSidebarVisible,
  closeSidebar,
  clearCart,
 } = useCart();

 //@desc: Do not render the component if the sidebar is not visible
 if (!isSidebarVisible) return null;

 //@desc: Calculate subtotal, VAT, shipping, and total costs
 const subtotal = cartItems.reduce(
  (total, item) =>
   total + item.price * item.quantity,
  0
 );
 const vat = subtotal * 0.15;
 const shipping = subtotal < 500 ? 100 : 0;
 const total = subtotal + vat + shipping;

 return (
  //@desc: Main container for the cart sidebar with fixed positioning
  <div className="fixed right-0 top-0 w-1/4 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto flex flex-col">
   <div>
    <button
     onClick={closeSidebar}
     className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-gray-900"
    >
     <FaTimes />
    </button>

    <h2 className="font-bold text-xl mb-4">
     Cart
    </h2>
   </div>

   <div className="flex-grow bg-gray-100 rounded-lg p-4">
    {cartItems.length === 0 && (
     //@desc: Message displayed when the cart is empty
     <p className="text-center">
      Your cart is empty
     </p>
    )}
    {cartItems.map((item) => (
     //@desc: Displays each cart item with options to modify quantity or remove item
     <div
      key={item.id}
      className="mb-4 flex justify-between items-center"
     >
      <img
       src={item.image}
       alt={item.title}
       className="w-20 h-20 object-contain rounded mr-2"
      />
      <div className="flex-grow pl-2">
       <h3 className="text-lg flex justify-between">
        {item.title}:{" "}
        <span className="font-bold">
         R{item.price.toFixed(2)}
        </span>
       </h3>
       <div className="flex items-center font-semibold">
        <button
         onClick={() =>
          updateQuantity(
           item.id,
           item.quantity - 1
          )
         }
         className="px-2 py-1 border-gray-500 border rounded-l hover:bg-gray-200 transition"
        >
         -
        </button>

        <p className="px-4 py-1 border-t border-b border-gray-500 bg-white">
         {item.quantity}
        </p>

        <button
         onClick={() =>
          updateQuantity(
           item.id,
           item.quantity + 1
          )
         }
         className="px-2 py-1 border-gray-500 border rounded-r hover:bg-gray-200 transition"
        >
         +
        </button>

        <button
         onClick={() => removeItem(item.id)}
         className="text-red-500 ml-2 my-auto hover:text-red-700"
        >
         <FaTrash />
        </button>
       </div>
      </div>
     </div>
    ))}
   </div>
   {/* Summary section displaying subtotal, VAT, shipping, and total */}
   <div className="w-full p-4 text-lg flex flex-col">
    <div className="flex justify-between mb-1">
     <strong>Subtotal:</strong>
     <span>R{subtotal.toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-1">
     <strong>VAT (15%):</strong>
     <span>R{vat.toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-1">
     <strong>Shipping:</strong>
     <span>R{shipping.toFixed(2)}</span>
    </div>
    <div className="flex justify-between font-bold">
     <strong>Total:</strong>
     <span>R{total.toFixed(2)}</span>
    </div>
   {/* Buttons for further actions */}
    <div className="flex flex-col space-y-2 mt-4">
     <button className="bg-transparent border border-gray-800 rounded-lg py-2 hover:bg-gray-200">
      <a href="/">Continue Shopping</a>
     </button>
     <button
      onClick={clearCart}
      className="bg-transparent border border-gray-800 rounded-lg py-2 hover:bg-gray-200"
     >
      Clear Cart
     </button>
     <button className="bg-green-500 rounded-lg text-white py-2 hover:bg-green-600">
      Checkout
     </button>
    </div>
   </div>
  </div>
 );
};

export default CartSidebar;
