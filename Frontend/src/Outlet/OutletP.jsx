import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer/Footer.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";

function OutletP() {
  return (
    <>
     <Navbar/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default OutletP;
