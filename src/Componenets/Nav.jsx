import { useState } from "react";
import NavList from "./NavList";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="absolute w-full border-b-2 border-white">
      <div className="flex items-center justify-between h-16 px-5 bg-opacity-20 bg-black">
        <Logo />
        <NavList />
        <div className="md:hidden">
          {toggleMenu ? (
            <IoClose
              size={30}
              className="text-white md:hidden"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FaBars
              size={30}
              className="text-white md:hidden"
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
