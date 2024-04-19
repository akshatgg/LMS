import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Courses from "./Components/Courses/Courses";
import Home from "./Components/Home/Home";
import Error from "./Error/Error";
import OutletP from "./Outlet/OutletP";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";



function App() {


  return (
    <>
      {/* <Router> */}
        <Routes>
          <Route path="" element={<OutletP />} >
            <Route path="" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Error/>}/>
            <Route path="/Courses" element={<Courses/>}/>
          

          </Route>
          <Route path="/Signin" element={<Signin/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        {/* </Router> */}
    </>
  );
}

export default App;
