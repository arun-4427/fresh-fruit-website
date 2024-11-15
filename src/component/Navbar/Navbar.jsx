import React from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Navbar items
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/product",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact", // Update link to use "/contact"
  },
];

const Navbar = () => {
  // State to manage whether the mobile menu is open or not
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Function to close menu when a menu item is clicked
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className=" bg-white sticky top-0 scroll-a shadow-md z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4"
        >
          {/* Logo section */}
          <div className="text-2xl flex gap-2 items-center font-bold uppercase">
            <p className="text-primary">FRUIT</p>
            <p className="text-secondary">STORE</p>
            <FaLeaf className="text-green-600" />
          </div>

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-xl">
                  {/* Use Link component for internal navigation */}
                  <Link
                    to={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Menu Toggle Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;
