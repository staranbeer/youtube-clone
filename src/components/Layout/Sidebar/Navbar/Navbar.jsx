import React from "react";
import NavLink from "./NavLink";
import { MdHistory, MdOutlineHome, MdOutlineThumbUp } from "react-icons/md";

const navLinks = [
  { name: "Home", path: "/", icon: <MdOutlineHome size={28} /> },
  { name: "History", path: "/history", icon: <MdHistory size={28} /> },
  {
    name: "Liked videos",
    path: "/liked",
    icon: <MdOutlineThumbUp size={28} />,
  },
];
const Navbar = ({ closeSidebar }) => {
  return (
    <nav className="mt-3">
      <ul>
        {navLinks.map(({ name, icon, path }) => (
          <NavLink onClick={closeSidebar} to={path} key={name} icon={icon}>
            {name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
