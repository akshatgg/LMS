import "./Navbar.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import OpenLMSLogo from "../../assets/351264.svg";

function Navbar() {
  const [showButtons, setShowButtons] = useState(false);
 
  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  
  return (
    <nav className="bg-[#1D232A] min-h-[110px]">
      <div className="flex justify-between item">
        <div>
          <img
            src={OpenLMSLogo}
            alt="Open LMS Logo"
            className="w-auto h-20 text-white"
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
            {showButtons && (
              <>
                <div className="pl-7 pr-7 rounded-md bg-[#6419E6] hover:bg-[#6419e6d8] text-[18px] mr-3">
                  <Link to="Signup">Sign up</Link>
                </div>
                <div className="pl-7 pr-7 rounded-md text-[18px]  hover:bg-[#d926a9d8] bg-[#D926A9]">
                  <Link to="Signin">Sign in</Link>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center item-center">
            <button onClick={toggleButtons}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
