import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";


const HomeScreen = () => {
  //@desc: Fetch products and loading status from the ProductContext
  const { products, loading } = useProducts();

  return (
    //@desc: Container for the home screen elements
    <div className="container mx-auto py-4">
      {/* Displays the hero image carousel at the top of the page */}
      <HeroCarousel />

      {/* Conditional rendering based on product loading status */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Map through the products array and render a ProductCard for each product */}
          {products.map((product) => (
            <ProductCard
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;

