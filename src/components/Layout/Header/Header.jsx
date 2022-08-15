import { useState } from "react";
import {
  MdDoorbell,
  MdMenu,
  MdMic,
  MdSearch,
  MdVideoLibrary,
} from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import Tags from "../Tags/Tags";
import logo from "./../../../images/yt_dark.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen((i) => !i);
  }
  return (
    <div className="fixed w-full">
      <header className=" bg-youtube-800 border-b border-gray-700 flex justify-between px-4 ">
        <div className="left flex gap-7 items-center">
          <button onClick={() => setIsOpen((i) => !i)}>
            <MdMenu size={24} className="" />
          </button>
          <div className="py-[18px]">
            <img src={logo} alt="logo" className="h-5 w-[90px]" />
          </div>
        </div>
        <div className="center"></div>
        <div className="right flex gap-5 items-center">
          <MdSearch size={24} />
          <MdMic size={24} />
          <MdVideoLibrary size={24} />
          <MdDoorbell size={24} />
          <div className="w-8 h-8 rounded-full bg-blue-400"></div>
        </div>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      </header>
      <Tags />
    </div>
  );
};

export default Header;
