import tree from "../../assets/aboutMainImage.png";
function About() {
  return (
    <>
      <div className="h-screen bg-[#1D232A]">
        <div className="flex justify-center items-center max-h-[700px]">
          <div className="">
            <p className="text-[#EAB308] text-5xl font-semibold font-serif">
              Affordable and quality education
            </p>
            <p className="text-white font-serif mt-8 text-xl">
              Our goal is to provide the afoordable and quality education to the
              world. We are providing the platform
              <br /> for the aspiring teachers and students to share their
              skills, creativity and knowledge to each other to
              <br /> empower and contribute in the growth and wellness of
              mankind.
            </p>
          </div>
          <div className="">
            <img
              src={tree}
              alt="tree"
              
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
