function PlaceComponent({
  image,
  imagePlaceholder,
  address,
  phone,
  info,
  locationInMap,
}) {
  return (
    <>
      <div className="flex flex-col items-start">
        <img className="rounded-xl h-96" src={image} alt={imagePlaceholder} />
        <h1 className="mt-2 ">
          <span className="font-bold">Address</span>: {address}
        </h1>
        <p className="mt-2">
          <span className="font-bold">Contact</span>: {phone}
        </p>
        <p className="mt-2">{info}</p>
        <a
          href={locationInMap}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-cyan-700 hover:text-pink-300 hover:underline "
        >
          See in map
        </a>
      </div>
    </>
  );
}

export default PlaceComponent;
