import Nav from "./Nav";
import Showcase from "./Showcase";
import ShowcaseImg from "../Images/showcase.jpg";

const Header = () => {
  return (
    <header className="bg-gradient-to-tl from-black to-dark h-screen w-full relative">
      <img
        src={ShowcaseImg}
        alt="Worship of God"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />
      <Nav />
      <Showcase />
    </header>
  );
};

export default Header;
