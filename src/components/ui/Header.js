import React from "react";
import { MdMenu, MdMic, MdSearch } from "react-icons/md";
import logo from "./../../images/yt_dark.png";
import { RiVideoAddLine } from "react-icons/ri";
import { BsGrid3X3Gap, BsBell } from "react-icons/bs";
import Tags from "../../Tags";
function Header() {
  return (
    <div>
      <header className="py-3 px-6 text-white bg-youtube-800 flex items-center justify-between border-b border-gray-700">
        <div className="left flex items-center gap-7 ">
          <nav>
            <MdMenu className="text-white " size={24} color="white" />
          </nav>
          <img src={logo} alt="" className="h-5" />
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
      <Tags />
    </div>
  );
}

export default Header;
