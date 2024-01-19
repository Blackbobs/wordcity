import { useState } from "react";
import ShowcaseImg from "../Images/showcase.jpg";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="bg-gradient-to-tl from-black to-dark h-screen w-full relative scroll-smooth">
      <img
        src={ShowcaseImg}
        alt="Worship of God"
        className="w-full h-full object-cover absolute mix-blend-overlay"
      />

      <div className="absolute w-full border-b-2 border-white z-10">
        <div className="flex items-center justify-between h-16 px-5 bg-opacity-20 bg-black">
          <div className="flex items-center text-white text-3xl font-bold font-sans">
            Wordcity
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <a href="#about" className="text-xl p-2 text-white cursor-pointer">
              About
            </a>
            <a href="#Events" className="text-xl p-2 text-white cursor-pointer">
              Events
            </a>
            <a
              href="#!"
              className="bg-white text-emerald px-3 py-2 rounded-full font-bold cursor-pointer"
            >
              Download Sermons
            </a>
          </div>

          <div className="md:hidden">
            {toggleMenu ? (
              <IoClose
                size={25}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <FaBars
                size={25}
                className="text-white md:hidden cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="absolute bg-white flex flex-col p-10 top-20 right-10 rounded-md max-h-fit z-10 text-right">
                <a
                  href="#about"
                  className="font-medium text-2xl leading-20 py-2"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </a>
                <a
                  href="#Events"
                  className="font-medium text-2xl leading-20 py-2"
                  onClick={() => setToggleMenu(false)}
                >
                  Events
                </a>
                <a
                  href="#!"
                  className="my-5 bg-emerald text-white p-3 rounded-md"
                >
                  Download Sermons
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center absolute h-5/6 w-full px-1">
        <section className="flex flex-col items-center justify-center py-20">
          <h1 className="text-white text-5xl text-center font-black md:text-6xl">
            Worship With Us Every Sunday
          </h1>

          <p className="text-white text-center py-2 text-lg my-3">
            Come and Encounter Christ in another dimension with the teachings of
            the spirit
          </p>
          <button className="bg-white text-emerald px-3 py-2 rounded-full font-bold cursor-pointer">
            Download Sermons
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
