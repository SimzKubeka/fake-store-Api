import {
 BrowserRouter as Router,
 Routes,
 Route,
} from "react-router-dom";

// Import screens
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

// Import components
import Navbar from "./components/Navbar";
import CartSidebar from "./pages/CartSidebar";
import { CartProvider } from "./context/CartContext";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";

//@desc: The main application component that sets up routing and global context
function App() {
 return (
  //@desc: Root div with global background and overflow settings
  <div className="overflow-hidden bg-[#f1f1f1]">
   <CartProvider>
    <Router>
     <Navbar />
     <CartSidebar />
     <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
       path="/product/:id"
       element={<ProductScreen />}
      />
      <Route
       path="/about"
       element={<AboutUs />}
      />
     </Routes>
     <Footer />
    </Router>
   </CartProvider>
  </div>
 );
}

export default App;
