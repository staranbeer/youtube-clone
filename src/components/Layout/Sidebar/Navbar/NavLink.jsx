import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ children, icon, to, onClick }) => {
  return (
    <li
      onClick={onClick}
      className=" text-sm   hover:bg-youtube-500 text-gray-200 hover:text-white"
    >
      <Link to={to} className="items-center  flex gap-7 px-4 py-2">
        <span>{icon}</span>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export default NavLink;
