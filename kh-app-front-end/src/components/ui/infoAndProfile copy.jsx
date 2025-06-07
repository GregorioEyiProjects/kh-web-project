import profileImage from "../../assets/images/temporal-image-removebg.png";

function InfoAndProfile() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl font-bold text-black">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl font-light text-black mt-4">
            Explore my projects and skills
          </p>
          {/* Contact button here */}
          <div>
            <button className="bg-pink-200 text-black font-bold py-2 px-4 rounded-full mt-4 hover:bg-pink-300 transition-all duration-200  hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>

        {/* Profile image here 'flex flex-col items-end' */}
        <div className="flex justify-center items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-lg rounded-full shadow-lg transition-transform duration-200 transform hover:scale-105"
          />
        </div>
      </div>
    </>
  );
}

export default InfoAndProfile;
