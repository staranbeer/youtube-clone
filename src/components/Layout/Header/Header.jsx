import { useState } from "react";
import {
  MdDoorbell,
  MdMenu,
  MdMic,
  MdSearch,
  MdVideoLibrary,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import logo from "./../../../images/yt_dark.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }
  function openSidebar() {
    setIsOpen(true);
  }
  return (
    <header className="fixed w-full z-10 bg-youtube-800 border-b border-gray-700 flex justify-between px-4 ">
      <div className="left flex gap-7 items-center">
        <button onClick={openSidebar}>
          <MdMenu size={28} className="" />
        </button>
        <Link to={"/"} className="py-[18px]">
          <img src={logo} alt="logo" className="h-5 w-[90px]" />
        </Link>
      </div>
      <div className="center"></div>
      <div className="right flex gap-5 items-center">
        <MdSearch size={24} />
        <MdMic size={24} />
        <MdVideoLibrary size={24} />
        <MdDoorbell size={24} />
        <div className="w-8 h-8 rounded-full bg-blue-400"></div>
      </div>
      <Sidebar closeSidebar={closeSidebar} isOpen={isOpen} />
    </header>
  );
};

export default Header;
