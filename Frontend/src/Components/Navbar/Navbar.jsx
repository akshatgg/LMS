import "./Navbar.css";

import { Link } from "react-router-dom";

import OpenLMSLogo from "../../assets/351264.svg";
function Navbar() {
  return (
    <nav className="bg-[#1D232A]">
      <div className="flex justify-between item">
        <div>
          <img
            src={OpenLMSLogo}
            alt="Open LMS Logo"
            className="w-auto h-20 text-white" // Tailwind classes for width and height
          />
        </div>
        <div>
          <div className="flex justify-between text-white text-[23px] items-center mr-7 mt-2">
            <Link to="" className="des mx-6">
              Home
            </Link>
            <Link to="/About" className="des mx-6">
              About
            </Link>
            <Link to="/Courses" className="des mx-6">
              Courses
            </Link>
            <Link to="/Contact" className="des mx-6">
              Contact
            </Link>
          </div>
          <div className="text-white text-center items-center flex justify-center mt-3 font-medium">
            <div className="pl-7 pr-7 rounded-md bg-[#6419E6] hover:bg-[#6419e6d8] text-[18px] mr-3">
              <Link to="Signup">Sign up</Link>
            </div>
            <div className="pl-7 pr-7 rounded-md text-[18px]  hover:bg-[#d926a9d8] bg-[#D926A9]">
              <Link to="Signin">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
