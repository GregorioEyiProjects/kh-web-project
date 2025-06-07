function Plans({ name, price, features, buttonText }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg justify-center items-center p-6 sm:w-80  md:h-[380px] lg:h-[480px]  ">
      <p className="mb-5">{name}</p>
      <h2 className="font-bold text-2xl">{price}</h2>

      <div className="flex flex-col w-full items-start mt-4 mb-10 flex-1">
        <div className="flex flex-col items-start">
          {features.map((feature, index) => (
            <div className="flex flex-row  justify-center" key={index}>
              <span className="mx-3">✔️</span>
              <p className="">{feature}</p>
            </div>
          ))}
        </div>
        {/* 
        <div className="flex flex-row  justify-center">
          <span className="mx-3">✔️</span>
          <p>5 Regular Nail Polish Colors</p>
        </div>
        <div className="flex flex-row  justify-center">
          <span className="mx-3">✔️</span>
          <p>Free shipping</p>
        </div>
        <div className="flex flex-row justify-center">
          <span className="mx-3">✔️</span>
          <p>Montly supscription</p>
        </div> */}
      </div>

      {/* Button */}
      <button className="bg-pink-500 cursor-pointer text-white font-bold py-2 px-4 rounded mt-auto hover:bg-pink-900 transition duration-300 ease-in-out">
        {buttonText}
      </button>
    </div>
  );
}

export default Plans;
