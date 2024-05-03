import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext"; 

//@desc: Static data for menu links
const MenuLinks = [
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 2,
    title: "Blogs",
    url: "#",
  },
];

const Navbar = () => {
  //@desc: Hooks for managing cart and product context
  const { toggleSidebar, cartItems } = useCart();
  const { products } = useProducts(); 

  //@desc: State hooks for search term and focus status
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  //@desc: Calculate total items in the cart
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  //@desc: Update search term based on user input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //@desc: Set focus state to true when input is focused
  const handleFocus = () => {
    setIsFocused(true);
  };

  //@desc: Reset focus state to false after a delay when input is blurred
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  //@desc: Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container py-4 flex justify-between w-full items-center z-10 mb-4">
        <div>
          <a href="/" className="text-primary font-semibold text-2xl uppercase tracking-widest sm:text-3xl">
            E-Com Shop
          </a>
        </div>

        <div className="flex items-center py-2">
          {/* Search input with lazy loading, handles focus and blur events */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-lg mr-1"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <IoMdSearch className="text-gray-500 text-2xl" />
        </div>

        <div className="flex">
          <div className="hidden lg:block">
            <ul className="items-center flex">
              {MenuLinks.map((data, index) => (
                <li key={index} className="inline-block mx-4 py-2">
                  {/* Menu links */}
                  <a href={data.url} className="text-gray-500 hover:text-gray-800 font-semibold">
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart button that toggles the sidebar and displays total items in the cart */}
          <button className="ml-2 relative p-3" onClick={toggleSidebar}>
            <FaCartShopping className="text-lg text-gray-600" />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-primary text-white rounded-full px-2 text-xs">
              {totalItems}
            </span>
          </button>
        </div>
      </div>

      {/* Displaying filtered search results only when search term is present and input is focused */}
      {searchTerm && isFocused && (
        <div className="bg-white shadow-md rounded p-3 absolute w-full mt-1 max-h-64 overflow-auto z-50">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex border-b border-gray-300 last:border-b-0 p-2 hover:bg-gray-100">
              <img src={product.image} alt={product.title} className="w-20 h-20 object-contain rounded mr-4" />
              <div className="flex-grow">
                <h5 className="font-semibold">{product.title}</h5>
                <p className="text-blue-950 font-bold">R{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
