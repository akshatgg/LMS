function Carouserslide({ title, description, slideNumber, image }) {
  return (
    <div id={slideNumber} className="">
      <div className="text-white ">
        <div className="flex justify-center ">
          <img
            src={image}
            className="rounded-full max-h-[180px] border-gray-500 border-2"
            alt={title}
            style={{ fontWeight: "semibold" }}
          />
        </div>

        <div className="flex justify-center font-serif text-xl mt-[2%]">
          {description}
        </div>
        <div className="flex justify-center font-semibold text-2xl mt-[3%]">
          {title}
        </div>
      </div>
    </div>
  );
}

export default Carouserslide;
