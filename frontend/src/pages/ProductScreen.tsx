import React, {
  useState,
  useEffect,
 } from "react";
 import { useParams } from "react-router-dom";
 import { useProducts } from "../context/ProductContext";
 import { useCart } from "../context/CartContext";
 import { Product } from "../types/Product";
 
 const ProductScreen: React.FC = () => {
  //@desc: State to store the current product details
  const [product, setProduct] = useState<Product | null>(null);
  //@desc: State to manage loading status
  const [loading, setLoading] = useState(true);
  //@desc: State to manage quantity of the product to add to cart
  const [quantity, setQuantity] = useState(1);
  //@desc: Hook to access product retrieval functionality
  const { getProduct } = useProducts();
  //@desc: Cart context for adding items and toggling sidebar
  const { addItem, toggleSidebar } = useCart();
  //@desc: Extract product ID from URL parameters
  const { id } = useParams<{ id: string }>();
 
  //@desc: Effect to fetch product details based on product ID
  useEffect(() => {
   const fetchProduct = async () => {
    const result = await getProduct(parseInt(id));
    setProduct(result);
    setLoading(false);
   };
   fetchProduct();
  }, [id, getProduct]);
 
  //@desc: Display loading message while data is fetching
  if (loading)
   return (
    <div className="text-center py-10">
     Loading...
    </div>
   );
  //@desc: Display error if no product is found
  if (!product)
   return (
    <div className="text-center py-10 text-xl text-red-500">
     Product not found.
    </div>
   );
 
  //@desc: Function to handle quantity changes
  const handleQuantityChange = (newQuantity: number) => {
   setQuantity(newQuantity < 1 ? 1 : newQuantity);
  };
 
  //@desc: Function to handle adding product to the cart and opening the sidebar
  const handleAddToCart = () => {
   if (product) {
    addItem({
     ...product,
     quantity: quantity,
    });
    toggleSidebar();
   }
  };
 
  return (
   //@desc: Main container for the product display
   <div className="container min-h-screen mx-auto mb-4">
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start p-4 bg-white shadow-lg rounded-lg">
     
     <img
      src={product.image}
      alt={product.title}
      className="w-full md:w-1/2 h-[450px] rounded-lg object-contain p-4"
     />
     
     <div className="flex flex-col items-center md:items-start md:ml-6 p-4">
      <h1 className="text-4xl font-bold text-gray-900">
       {product.title}
      </h1>
      <p className="text-2xl font-semibold text-gray-700 mt-2">
       R{product.price.toFixed(2)}
      </p>
      <p className="mt-4 text-gray-600 text-center md:text-left">
       {product.description}
      </p>
      
      <div className="flex items-center mt-4">
       <button
        onClick={() => handleQuantityChange(quantity - 1)}
        className="text-xl w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center"
       >
        -
       </button>
       <span className="mx-4 text-xl">
        {quantity}
       </span>
       <button
        onClick={() => handleQuantityChange(quantity + 1)}
        className="text-xl w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center"
       >
        +
       </button>
      </div>
      
      <button
       onClick={handleAddToCart}
       className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
       Add to Cart
      </button>
     </div>
    </div>
   </div>
  );
 };
 
 export default ProductScreen;
 