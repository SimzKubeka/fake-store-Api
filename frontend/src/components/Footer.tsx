import { Link } from "react-router-dom";

const Footer = () => {
 return (
  //@desc: Main footer container with background color, text color, and padding styling
  <footer className="bg-gray-700 text-white py-4">
   <div className="container mx-auto px-4 flex justify-between">
    {/* Container for navigation links */}
    <div>
     <Link
      to="/about"
      className="mr-4 hover:underline"
     >
      About Us
     </Link>
     <Link to="#" className="hover:underline">
      Terms & Conditions
     </Link>
    </div>
    {/* Container for copyright text displaying dynamically updated year */}
    <div>
     <p>
      © {new Date().getFullYear()} E-Com Shop, All
      rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
