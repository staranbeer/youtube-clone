import React from "react";
import NavLink from "./NavLink";
import { MdHistory, MdOutlineHome, MdOutlineThumbUp } from "react-icons/md";

const navLinks = [
  { name: "Home", path: "/", icon: <MdOutlineHome size={24} /> },
  { name: "History", path: "/history", icon: <MdHistory size={24} /> },
  {
    name: "Liked videos",
    path: "/liked",
    icon: <MdOutlineThumbUp size={24} />,
  },
];
const Navbar = () => {
  return (
    <nav className="mt-3 ">
      {navLinks.map(({ name, icon, path }) => (
        <NavLink to={path} key={name} icon={icon}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
