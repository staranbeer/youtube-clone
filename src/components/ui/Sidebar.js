import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import NavBar from "./NavBar";
import logo from "./../../images/yt_dark.png";

function Sidebar({ isMenuOpen, closeMenu }) {
  return (
    <>
      <motion.div
        animate={{
          width: isMenuOpen ? 240 : 0,
          translateX: isMenuOpen ? 80 : -80,
        }}
        transition={{ bounce: false, ease: "easeInOut", delay: 0.03 }}
        className="py-2  fixed top-0 -left-20 z-20 min-h-screen text-white bg-youtube-800 overflow-hidden">
        {/* sidebar header */}

        <div className="flex items-center px-5 gap-5">
          <button
            onClick={closeMenu}
            className="focus:bg-youtube-500 rounded-full p-2">
            <MdMenu className="text-white " size={24} color="white" />
          </button>
          <Link to={"/"} onClick={closeMenu}>
            <img src={logo} alt="" className="h-5" />
          </Link>
        </div>

        {/* navbar */}

        <NavBar closeMenu={closeMenu} />
      </motion.div>

      {/* sidebar backdrop */}

      {isMenuOpen && (
        <motion.div
          animate={{ opacity: 0.6 }}
          className="overlay fixed h-screen w-screen top-0 left-0 bg-black  z-10 opacity-0"
          onClick={closeMenu}></motion.div>
      )}
    </>
  );
}

export default Sidebar;
