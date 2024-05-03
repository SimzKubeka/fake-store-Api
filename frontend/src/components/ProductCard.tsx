import React from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

const ProductCard: React.FC<{
 product: Product;
}> = ({ product }) => {
 const { addItem } = useCart();

 //@desc: Handles adding the product to the cart with a quantity of 1
 const handleAddToCart = () => {
  addItem({
   ...product,
   quantity: 1,
  });
 };

 return (
  //@desc: Main container for the product card with hover effect to scale up
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white group transition relative hover:scale-105">
   <div className="relative w-full h-60">
    {/* @desc: Product image with lazy loading and object containment for styling */}
    <img
     className="w-[200px] h-[200px] mt-4 mx-auto object-contain object-center transition-transform"
     src={product.image}
     alt={product.title}
     loading="lazy"
    />
    {/* @desc: Button for adding product to cart, styled to appear over the image */}
    <button
     className="absolute top-7 right-7 bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"
     onClick={handleAddToCart}
     style={{ transform: "translate(50%, -50%)" }}
    >
     <BsPlus />
    </button>
   </div>

   {/* @desc: Link to the product detail page */}
   <Link
    to={`/product/${product.id}`}
    className="block overflow-hidden"
   >
    {/* @desc: Container for product title and price */}
    <div className="hover:bg-slate-200 px-6 py-4">
     <div className="font-bold text-lg mb-2 truncate">
      {product.title}
     </div>
     <p className="text-gray-700 text-base items-center">
      R{product.price.toFixed(2)}
     </p>
    </div>
   </Link>
  </div>
 );
};

export default ProductCard;
