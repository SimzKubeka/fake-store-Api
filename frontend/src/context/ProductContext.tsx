import React, {
  createContext,
  useContext,
  useEffect,
  useState,
 } from "react";
 import { Product } from "../types/Product";
 
 //@desc: Defines the type of context for product management
 interface ProductContextType {
  products: Product[];
  loading: boolean;
  getProduct: (id: number) => Promise<Product | undefined>;
 }
 
 //@desc: Create a context for product management
 const ProductContext = createContext<ProductContextType | undefined>(undefined);
 
 //@desc: Provider component that encapsulates children components to provide them product data
 const ProductProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
 
  //@desc: Fetch all products on component mount
  useEffect(() => {
   fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
     setProducts(data);
     setLoading(false);
    });
  }, []);
 
  //@desc: Function to fetch a single product by ID from the local state or API if not found
  const getProduct = async (id: number): Promise<Product | undefined> => {
   const foundProduct = products.find((product) => product.id === id);
   if (foundProduct) {
    return foundProduct;
   } else {
    // Fetch the specific product if not found in the context
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
   }
  };
 
  return (
   <ProductContext.Provider value={{ products, loading, getProduct }}>
    {children}
   </ProductContext.Provider>
  );
 };
 
 //@desc: Custom hook to use the product context
 const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
   throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
 };
 
 export { ProductProvider, useProducts };
 