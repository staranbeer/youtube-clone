import React, { useState } from "react";
import {
  MdHistory,
  MdHome,
  MdMenu,
  MdMic,
  MdSearch,
  MdWatchLater,
} from "react-icons/md";
import { motion } from "framer-motion";
import logo from "./../../images/yt_dark.png";
import { RiVideoAddLine } from "react-icons/ri";
import { BsGrid3X3Gap, BsBell } from "react-icons/bs";
import Tags from "./Tags";

const pages = [
  { name: "Home", route: "/", icon: <MdHome size={24} /> },
  { name: "History", route: "/history", icon: <MdHistory size={24} /> },
  {
    name: "Watch Later",
    route: "/watchLater",
    icon: <MdWatchLater size={24} />,
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuOpen(e) {
    setIsOpen((i) => !i);
  }
  return (
    <div>
      <header className="py-2 px-5 text-white bg-youtube-800 flex items-center justify-between border-b border-gray-700 relative">
        <div className="left flex items-center gap-5 ">
          <button
            onClick={handleMenuOpen}
            className="focus:bg-youtube-500 rounded-full p-2">
            <MdMenu className="text-white " size={24} color="white" />
          </button>
          <img src={logo} alt="" className="h-5" />
        </div>

        <motion.div
          animate={{ width: isOpen ? 240 : 0, translateX: isOpen ? 80 : -80 }}
          transition={{ bounce: false, ease: "easeInOut" }}
          className="py-2  fixed top-0 -left-20 min-h-screen text-white bg-youtube-800 overflow-hidden">
          <div className="flex items-center px-5 gap-5">
            <button
              onClick={handleMenuOpen}
              className="focus:bg-youtube-500 rounded-full p-2">
              <MdMenu className="text-white " size={24} color="white" />
            </button>
            <img src={logo} alt="" className="h-5" />
          </div>
          <nav className="mt-6 space-y-1 text-sm  w-full">
            {pages.map((i) => {
              return (
                <a
                  href="#"
                  className="flex py-2 pl-7 hover:bg-youtube-500 items-center gap-7 transition-colors ease-in"
                  key={i.name}>
                  <div className="w-6">{i.icon}</div>
                  <span>{i.name}</span>
                </a>
              );
            })}
          </nav>
        </motion.div>

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
