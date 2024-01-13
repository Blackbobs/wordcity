import Button from "./Button";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <ul className="hidden items-center space-x-8 md:flex">
      <NavItem title="About" />
      <NavItem title="Events" />
      <Button title="Download Sermons" />
    </ul>
  );
};

export default NavList;
