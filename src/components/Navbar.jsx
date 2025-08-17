import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navItems } from "../constants";
import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span id="logo" className="text-xl tracking-tight">
              <Link to="">KrishiMitraAnkesh</Link>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="tel:8815383639"
              className="relative py-2 px-6 rounded-md border border-blue-600 text-blue-600 font-medium 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-400 hover:text-white 
             hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            >
              Call
            </a>
            <a
              href="https://www.google.com/maps/place/Kabir+krishi+Kendra/@22.1401266,79.753714,17z/data=!3m1!4b1!4m6!3m5!1s0x3a2a9952b8f353b9:0x3218f8781794e191!8m2!3d22.1401217!4d79.7562889!16s%2Fg%2F11lc9gdg0p?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
              className="relative py-2 px-6 rounded-md border border-green-600 text-green-600 font-medium 
             transition-all duration-300 ease-in-out
             hover:bg-gradient-to-r hover:from-green-300 hover:to-green-400 hover:text-white 
             hover:shadow-lg hover:shadow-green-500/50 hover:scale-105"
            >
              Get location!
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.href} onClick={() => setMobileDrawerOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-600 to-blue-200"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
