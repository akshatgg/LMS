import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white fixed mx-auto right-0 bottom-0 left-0 w-full max-w-[1440px] h-20">
      <div className="flex justify-around items-center h-full px-4">
        <div>Copyright 2024 | All rights reserved</div>

        <div className="flex mr-10">
          <div className="ml-4 text-2xl hover:text-[#EAB308]">
            <FaFacebook />
          </div>
          <div className="ml-4 text-2xl hover:text-[#EAB308]">
            <BsInstagram />
          </div>
          <div className="ml-4 text-2xl hover:text-[#EAB308]">
            <FiTwitter />
          </div>
        </div>

        <div className="flex flex-col">
          <Link to="/About">
            <div className="underline hover:text-[#EAB308]">About</div>
          </Link>
          <Link to="/Contact">
            <div className="underline hover:text-[#EAB308]">Contact</div>
          </Link>
          <Link to="/Courses">
            <div className="underline hover:text-[#EAB308]">Courses</div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
