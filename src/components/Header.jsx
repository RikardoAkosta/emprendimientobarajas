import React, { useState } from "react";

import { RiBlazeFill, RiAlignJustify, RiCloseLine } from "react-icons/ri";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-beetween xl:justify-start w-full py-4 px-8 h-[15vh] z-50">
      <div className="xk:w-1/4  text-center -mt-4">
        <a href="#" className="flex text-2xl font-bold relative p-1 bg-white">
        Your spiritual help <span className="text-primary  text-4xl">.</span>{" "}
          <RiBlazeFill className=" absolute -left-3 -bottom-5 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[70%] md:w-[30%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}
      >
      

        <a href="#" className="text-secundary">
          Home
        </a>
        <a href="#" className="text-secundary">
          About Us
        </a>
        <a href="#" className="text-secundary">
          Services
        </a>
        <a href="#" className="text-secundary">
          Products
        </a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-3xl p-14">
        {showMenu ? <RiCloseLine/> : <RiAlignJustify/>}
        
      </button>
    </header>
  );
};

export default Header;
