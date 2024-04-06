function Carouserslide({ title, description, slideNumber, image }) {
  return (
    <div
      id={slideNumber}
      className=""
    >

      <div className="text-white ">
        <div className="flex justify-center">
        <img src={image} className="rounded-full max-h-[200px]" alt={title} />
        </div>

        <div className="flex justify-center">{description}</div>
        <div className="flex justify-center">{title}</div>
      </div>
    </div>
  );
}

export default Carouserslide;
