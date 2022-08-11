import { motion } from "framer-motion";
import logo from "./../../../images/yt_dark.png";
import { MdMenu } from "react-icons/md";
import Navbar from "./Navbar/Navbar";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <motion.div
        className="z-20 fixed left-0 inline-block top-0 -translate-x-full w-[240px] bg-youtube-800 h-screen"
        animate={{ translateX: isOpen ? 0 : "-100%" }}
        transition={{ duration: "0.3" }}
      >
        <header className="pl-4 ">
          <div className="left flex gap-7 items-center">
            <button onClick={toggleSidebar}>
              <MdMenu size={24} className="" />
            </button>
            <div className="py-[18px]">
              <img src={logo} alt="logo" className="h-5 w-[90px]" />
            </div>
          </div>
        </header>
        <Navbar />
      </motion.div>

      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="overlay fixed h-screen w-screen bg-black overflow-hidden opacity-50 left-0 z-10 top-0"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
