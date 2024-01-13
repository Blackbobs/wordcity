import React from "react";

const NavItem = ({ title, id }) => {
  return (
    <li className="text-xl p-2 text-white list-none cursor-pointer">{title}</li>
  );
};

export default NavItem;
