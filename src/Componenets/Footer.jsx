import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="bg-black p-5 text-center">
      <div className="flex justify-between items-center my-5 mx-auto md:max-w-screen-md">
        <div className="flex gap-2">
          <FaFacebook className="text-3xl text-white cursor-pointer" />
          <AiOutlineInstagram className="text-3xl text-white cursor-pointer" />
          <FaWhatsapp className="text-3xl text-white cursor-pointer" />
        </div>
        <button className="bg-white text-emerald px-3 py-2 rounded-full font-bold cursor-pointer">
              Download Sermons
            </button>
      </div>
      <p className="text-white mt-15">
        Copyrights &copy; {date}. All rights reserved (Developed by Black Bobs)
      </p>
    </section>
  );
};

export default Footer;
