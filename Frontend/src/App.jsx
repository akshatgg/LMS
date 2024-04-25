import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      <Routes>
        <Route path="/" element={<OutletP />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
