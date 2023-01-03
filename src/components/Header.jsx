import React, { useState } from "react";

import { RiSettingsLine, RiTornadoFill, RiCloseLine } from "react-icons/ri";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-beetween xl:justify-start w-full p-6 h-[15vh] z-50">
      <div className="xk:w-1/4  text-center">
        <a href="#" className="text-3xl font-bold relative p-2 bg-white">
          Tu ayuda Espiritual <span className="text-primary text-4xl">.</span>
          <RiSettingsLine className=" absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
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
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
        <RiTornadoFill />
      </button>
    </header>
  );
};

export default Header;
