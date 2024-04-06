import tree from "../../assets/aboutMainImage.png";
import { Celeberation } from "../../Constants/Celeberation";
import Carouserslide from "./Carouserslide";

function About() {
  return (
    <>
      <div className="h-screen bg-[#1D232A]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center max-h-[700px]">
            <div className="">
              <p className="text-[#EAB308] text-5xl font-semibold font-serif">
                Affordable and quality education
              </p>
              <p className="text-white font-serif mt-8 text-xl">
                Our goal is to provide the affordable and quality education to
                the world. We are providing the platform
                <br /> for the aspiring teachers and students to share their
                skills, creativity and knowledge to each other to
                <br /> empower and contribute in the growth and wellness of+
                mankind.
              </p>
            </div>
            <div className="">
              <img src={tree} alt="tree" />
            </div>
          </div>


          <div className="flex justify-center items-center">
            <div>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </div>

            <div className="">
              {Celeberation &&
                Celeberation.map((celebrity) => (
                  <Carouserslide key={celebrity.slideNumber} {...celebrity} />
                ))}
            </div>

            <div>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
