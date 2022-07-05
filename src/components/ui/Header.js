import React, { useState } from "react";
import { MdMenu, MdMic, MdSearch } from "react-icons/md";
import Sidebar from "./SidebarMobile";

import logo from "./../../images/yt_dark.png";
import { RiVideoAddLine } from "react-icons/ri";
import { BsGrid3X3Gap, BsBell } from "react-icons/bs";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import Input from "../utility/Input";
import Search from "../utility/Search";

function Header({ toggleSidebar, toggleMobileSidebar }) {
  return (
    <div className="">
      <header className="py-2 px-5 text-white bg-youtube-800 flex items-center justify-center border-b border-gray-700  ">
        <div className="left flex-1 flex items-center gap-5 basis-2/5">
          {/* Sidebar Toggle for mobile */}
          <button
            onClick={() => toggleMobileSidebar((i) => !i)}
            className="focus:bg-youtube-500 rounded-full p-2 youtubeSidebarMobile:hidden"
          >
            <MdMenu className="text-white " size={24} color="white" />
          </button>
          {/* Sidebar Toggle for desktop */}
          <button
            onClick={() => toggleSidebar((i) => !i)}
            className="focus:bg-youtube-500 rounded-full p-2 "
          >
            <MdMenu className="text-white " size={24} color="white" />
          </button>
          <Link to={"/"} className="shrink-0">
            <img src={logo} alt="" className="h-5 " />
          </Link>{" "}
        </div>
        <div className="center flex-1 basis-1/2">
          <Search />
        </div>

        <div className="right justify-end flex gap-5 items-center flex-1 basis-2/5">
          <MdSearch size={24} />
          <MdMic size={24} />
          <RiVideoAddLine size={24} />
          <BsGrid3X3Gap size={22} />
          <BsBell size={22} />
          <div className="h-8 w-8 bg-violet-600 rounded-full"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
