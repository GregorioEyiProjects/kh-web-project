import profileImage from "../../assets/images/temporal-image-removebg.png";
import banner from "../../assets/images/banner.jpg";

function InfoAndBanner({ headerText, subHeaderText }) {
  return (
    <>
      <div className="relative flex justify-center items-center w-full">
        <div className="flex flex-col justify-center w-full items-center">
          {/* Banner image */}
          <img
            src={banner}
            alt="banner"
            className="w-full h-[480px] rounded-2xl object-cover"
          />

          {/* Overlay text centered on the banner */}
          <div className="absolute inset-0 flex flex-col justify-center w-full items-center p-10 ">
            <div className="bg-pink-50 bg-opacity-75 rounded-3xl p-4 mb-5">
              <h1 className=" text-2xl font-bold text-black text-center sm:text-3xl md:text-4xl">
                {headerText}
              </h1>
            </div>
            <div className="bg-pink-50 ">
              <p className=" text-sm font-light text-black sm:text-base md:text-xl text-center">
                {subHeaderText}
              </p>
            </div>
            {/* Contact button here */}
            <div>
              <button className="bg-pink-300 cursor-pointer text-black font-bold py-2 px-4 rounded-full mt-4 hover:bg-pink-500 transition-all duration-200  hover:scale-105">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoAndBanner;
