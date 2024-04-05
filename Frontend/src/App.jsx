import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Courses from "./Components/Courses/Courses";
import Home from "./Components/Home/Home";
import OutletP from "./Outlet/OutletP";



function App() {


  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path="" element={<OutletP />} >
            <Route path="" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Courses" element={<Courses/>}/>

          </Route>
        </Routes>
        {/* </Router> */}
    </>
  );
}

export default App;
