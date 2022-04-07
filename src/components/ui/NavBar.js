import React, { useEffect, useState } from "react";
import { MdHistory, MdHome, MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", route: "/", icon: <MdHome size={24} /> },
  { name: "History", route: "/history", icon: <MdHistory size={24} /> },
  {
    name: "Watch Later",
    route: "/watchlater",
    icon: <MdWatchLater size={24} />,
  },
];
function NavBar({ closeMenu }) {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  function handleClick(e) {
    e.preventDefault();
    closeMenu();
    setCurrentPage(window.location.pathname);
  }
  return (
    <nav className="mt-6  text-sm  w-full">
      {pages.map((i) => {
        return (
          <button onClick={handleClick} className="block w-full">
            <Link
              to={i.route}
              className={`flex py-2 pl-7 hover:bg-youtube-600 items-center gap-7 transition-colors ease-in ${
                currentPage === i.route ? "bg-youtube-500" : ""
              }`}
              key={i.name}>
              <span className="w-6">{i.icon}</span>
              <span>{i.name}</span>
            </Link>
          </button>
        );
      })}
    </nav>
  );
}

export default NavBar;
