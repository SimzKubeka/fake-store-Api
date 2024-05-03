// Interface for a single product
export interface Product {
 id: number;
 title: string;
 price: number;
 category: string;
 description: string;
 image: string;
}

// Define the type for the cart item
export interface CartItem extends Product {
 quantity: number;
}

// Define the type for the cart context state
export interface CartState {
 cartItems: CartItem[];
 isSidebarVisible: boolean;
}
