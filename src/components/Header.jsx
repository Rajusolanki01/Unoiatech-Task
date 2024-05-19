import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo, Button, Facebook, Instagram, Linkedin } from "../assets";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const menuItems = [
    "HOME",
    "ABOUT US",
    "OUR SERVICES",
    "OUR EXPERIENCE",
    "RESOURCES",
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-customPink w-full h-8 lg:h-14 flex items-center justify-center">
        <h2 className="font-plusjakarta lg:font-montserratalt tracking-widest lg:tracking-wider text-white lg:text-[#FFFFFFBF] font-normal lg:font-extrabold uppercase text-xs lg:text-base">
          TURNING UNCERTAINTY INTO YOUR ADVANTAGE
        </h2>
      </div>
      <div className="mt-1 lg:py-0">
        <div className="p-4 xl:w-[96%] xxl:w-[89%] m-auto flex items-center justify-between">
          <img src={Logo} alt="Company Logo" />
          <div className="hidden lg:block">
            <ul className="mr-6 w-[700px] flex items-center justify-between gap-5 font-montserratalt font-extrabold text-[#292929BF] text-base tracking-wider cursor-pointer">
              {menuItems.map((item, index) => (
                <li key={index} className="group relative inline-block">
                  <Link
                    to="#"
                    className="relative inline-block text-[#292929BF] transition-colors duration-300"
                  >
                    {item}
                    <div className="absolute left-0 bottom-0 w-0 h-1 bg-customPink group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-between gap-4 font-montserratalt cursor-pointer">
            <img src={Button} alt="Contact"  />
            <img src={Facebook} alt="Facebook"  />
            <img src={Instagram} alt="Instagram"  />
            <img src={Linkedin} alt="Linkedin"  />
          </div>
          <div className="lg:hidden flex gap-6 cursor-pointer">
            <IoSearch className="w-8 h-8" />
            <FiMenu className="w-8 h-8" onClick={toggleMenu} />
          </div>
        </div>
        <div
          className={`lg:hidden bg-white p-1 shadow-md transition-max-height duration-500 overflow-hidden ${
            showMenu ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 font-montserrat font-bold text-[#0e0e0ebf] text-sm tracking-wider cursor-pointer">
            {menuItems.map((item, index) => (
              <li key={index} className="group relative inline-block">
                <Link
                  to="#"
                  className="py-3 text-center relative block text-[#131313bf] transition-colors duration-300"
                >
                  {item}
                  <div className="absolute left-28 bottom-0 w-0 h-1 bg-customPink group-hover:w-2/5 transition-all duration-300"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
