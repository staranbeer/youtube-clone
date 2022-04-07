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
  const [currentPage, setCurrentPage] = useState("");

  function handleClick() {
    closeMenu();
    setCurrentPage(window.location.pathname);
  }
  console.log(window.location.pathname);

  return (
    <nav className="mt-6 space-y-1 text-sm  w-full">
      {pages.map((i) => {
        return (
          <Link
            onClick={handleClick}
            to={i.route}
            className={`flex py-2 pl-7 hover:bg-youtube-600 items-center gap-7 transition-colors ease-in ${
              currentPage === i.route ? "bg-youtube-500" : ""
            }`}
            key={i.name}>
            <div className="w-6">{i.icon}</div>
            <span>{i.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
