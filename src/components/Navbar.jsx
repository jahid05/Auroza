import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import user from "../assets/icons/user.png";
import cart from "../assets/icons/cart.png";
import search from "../assets/icons/search.png";
import menu from "../assets/icons/menu-bar.png";
import close from "../assets/icons/menu-close.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img className="w-36" src={logo} alt="Auroza" />
      <ul className="hidden sm:flex gap-5 text-md text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <Link to="/collection">
          <img className="w-5 cursor-pointer" src={search} alt="Search" />
        </Link>
        <div className="group relative">
          <img className="w-5 cursor-pointer" src={user} alt="Profile" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-2">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-sm text-gray-500 rounded-md">
              <p className="cursor-pointer hover:text-gray-800">My Profile</p>
              <p className="cursor-pointer hover:text-gray-800">Order</p>
              <p className="cursor-pointer hover:text-gray-800">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img className="w-5 cursor-pointer" src={cart} alt="Cart" />
          <div className="absolute w-4 h-4 -top-2 left-4 badge text-[8px] bg-theme-1 border-transparent text-black badge-sm">
            10
          </div>
        </Link>
        <button className="text-xl md:hidden" onClick={() => setIsOpen(true)}>
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Small Device Menu */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${
          isOpen ? "w-full z-10" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-5 pt-6">
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-black"
            >
              <IoClose />
            </button>
          </div>
          <NavLink onClick={()=>setIsOpen(false)} to="/" className="flex flex-col items-center gap-1 py-2">
            <p>Home</p>
            <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
          </NavLink>
          <hr />
          <NavLink onClick={()=>setIsOpen(false)} to="/collection" className="flex flex-col items-center gap-1 py-2">
            <p>Collection</p>
            <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
          </NavLink>
          <hr />
          <NavLink onClick={()=>setIsOpen(false)} to="/about" className="flex flex-col items-center gap-1 py-2">
            <p>About</p>
            <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
          </NavLink>
          <hr />
          <NavLink onClick={()=>setIsOpen(false)} to="/contact" className="flex flex-col items-center gap-1 py-2">
            <p>Contact</p>
            <hr className="w-1/2 border-none h-[2px] bg-theme-1 hidden" />
          </NavLink>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
