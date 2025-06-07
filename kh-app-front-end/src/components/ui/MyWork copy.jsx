function MyWork() {
  return (
    <div className="my-work">
      {/*  <h1 className="flex justify-center font-bold text-4xl text-black">
        My Work
      </h1> */}
      <div className="grid grid-cols-3 gap-4  text-xl font-light text-black">
        {[...Array(9)].map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/300/200?random=${index}`}
            alt={`Random image ${index}`}
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
export default MyWork;
