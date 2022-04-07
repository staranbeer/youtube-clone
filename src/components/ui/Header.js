import React, { useState } from "react";
import { MdMenu, MdMic, MdSearch } from "react-icons/md";
import Sidebar from "./Sidebar";

import logo from "./../../images/yt_dark.png";
import { RiVideoAddLine } from "react-icons/ri";
import { BsGrid3X3Gap, BsBell } from "react-icons/bs";
import Tags from "./Tags";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuOpen() {
    setIsOpen((i) => !i);
  }

  return (
    <div className="fixed top-0 left-0 right-0">
      {/* upper header */}

      <header className="py-2 px-5 text-white bg-youtube-800 flex items-center justify-between border-b border-gray-700  ">
        <div className="left flex items-center gap-5 ">
          <button
            onClick={handleMenuOpen}
            className="focus:bg-youtube-500 rounded-full p-2">
            <MdMenu className="text-white " size={24} color="white" />
          </button>
          <Link to={"/"}>
            <img src={logo} alt="" className="h-5" />
          </Link>{" "}
        </div>

        <div className="right flex gap-5 items-center">
          <MdSearch size={24} />
          <MdMic size={24} />
          <RiVideoAddLine size={24} />
          <BsGrid3X3Gap size={22} />
          <BsBell size={22} />
          <div className="h-8 w-8 bg-violet-600 rounded-full"></div>
        </div>
      </header>

      {/* lower header */}

      <Tags />

      {/* sidebar */}

      <Sidebar isMenuOpen={isOpen} closeMenu={handleMenuOpen} />
    </div>
  );
}

export default Header;
