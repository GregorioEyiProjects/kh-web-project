import reactLogo from "../../assets/svgs/react.svg";
import logo from "../../assets/images/logo.jpg";

function NavBar() {
  return (
    <>
      <div className="container mx-auto">
        <nav className=" flex justify-between items-center p-3 ">
          {/* Logo Image */}
          <a href="#home">
            <img
              src={logo}
              className="w-8 h-8 rounded-2xl hover:scale-125 transition-transform duration-300"
              alt="logo"
            />
          </a>

          {/* Navigatio links */}
          <ul className="flex justify-around gap-x-20 text-black font-extralight ">
            <li className="hover:underline hover:bg-pink-500 hover:rounded-lg hover:px-2 transition-all duration-200">
              <a href="#home" className="font-light">
                Home
              </a>
            </li>

            <li className="hover:underline hover:bg-pink-500 hover:rounded-lg hover:px-2 transition-all duration-200">
              <a href="#myWork" className="font-light">
                {" "}
                My work
              </a>
            </li>
            <li className="hover:underline hover:bg-pink-500 hover:rounded-lg hover:px-2 transition-all duration-200">
              <a href="#plans" className="font-light">
                Plans
              </a>
            </li>
            <li className="hover:underline hover:bg-pink-500 hover:rounded-lg hover:px-2 transition-all duration-200">
              <a href="#contact" className="font-light">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
