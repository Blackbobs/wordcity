import NavList from "./NavList";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="absolute w-full border-b-2 border-white">
      <div className="flex items-center justify-between h-16 px-5 bg-opacity-20 bg-black">
        <Logo />
        <NavList />
        <FaBars size={30} className="text-white md:hidden" />
      </div>
    </div>
  );
};

export default Nav;
