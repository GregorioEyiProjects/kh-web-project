import reactLogo from "../../assets/svgs/react.svg";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center sm:p-3 ">
          {/* Logo Image */}
          <a href="#home">
            <img
              src={logo}
              className="w-8 h-8 rounded-2xl hover:scale-125 transition-transform duration-300"
              alt="logo"
            />
          </a>

          {/* Hamburger button (mobile only) */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>

          {/* Navigatio links (Desktop) */}
          <ul className="hidden sm:flex justify-around gap-x-20 text-black font-extralight ">
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

        {/* Mobile dropdown menu */}
        {isOpen && (
          <ul className="flex flex-col gap-y-4 mt-2 text-black font-extralight sm:hidden bg-white rounded-xl shadow-lg p-4">
            <li>
              <a
                href="#home"
                className="block py-1 px-2 hover:bg-pink-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#myWork"
                className="block py-1 px-2 hover:bg-pink-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                My work
              </a>
            </li>
            <li>
              <a
                href="#plans"
                className="block py-1 px-2 hover:bg-pink-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-1 px-2 hover:bg-pink-100 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default NavBar;
