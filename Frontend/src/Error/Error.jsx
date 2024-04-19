import Lottie from "lottie-react";
import { useEffect } from "react";

import error from "../assets/Error.json";
function Error() {
  useEffect(() => {
    // Apply styles to the body to hide overflow
    document.body.style.overflowY = "hidden";

    // Clean up function to remove styles when component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="bg-[#1D232A] h-screen">
      
        <Lottie
          animationData={error}
          loop={true}
          autoPlay={true}
          className="h-[400px]"
        />
      
      <div className="flex justify-center text-[50px] text-[#b36642]">
        Error
      </div>
      <div className="flex justify-center text-[40px] text-[#b36642]">404</div>
    </div>
  );
}

export default Error;
