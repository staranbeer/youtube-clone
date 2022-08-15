import { motion } from "framer-motion";
import logo from "./../../../images/yt_dark.png";
import { MdMenu } from "react-icons/md";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      <motion.div
        className="z-[100000] fixed left-0 top-0 -translate-x-full w-[240px] bg-youtube-800 h-screen"
        animate={{ translateX: isOpen ? 0 : "-100%" }}
        transition={{ duration: "0.3" }}
      >
        <header className="pl-4 ">
          <div className="left flex gap-7 items-center">
            <button onClick={closeSidebar}>
              <MdMenu size={28} className="" />
            </button>
            <Link to={"/"} onClick={closeSidebar} className="py-[18px]">
              <img src={logo} alt="logo" className="h-5 w-[90px]" />
            </Link>
          </div>
        </header>
        <Navbar closeSidebar={closeSidebar} />
      </motion.div>

      <motion.div
        animate={{
          opacity: isOpen ? 0.6 : 0,
          pointerEvents: isOpen ? "all" : "none",
        }}
        onClick={closeSidebar}
        className="overlay fixed h-screen w-screen bg-black overflow-hidden opacity-50 left-0 z-10 top-0"
      ></motion.div>
    </>
  );
};

export default Sidebar;
