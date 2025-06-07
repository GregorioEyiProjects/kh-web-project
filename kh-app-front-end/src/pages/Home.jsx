import NavBar from "../components/ui/NavBar";
import getWebsiteDetails from "../lib/fetch";
import useWebStore from "../store/webStore";

import InfoAndBanner from "../components/ui/infoAndBanner";
import MyWork from "../components/ui/MyWork";
import Pricing from "../components/ui/pricePlan/Pricing";
import ContactMe from "../components/ui/contactMe/ContactMe";
import SocialMedia from "../components/ui/SocialMedia";
import Image1 from "../assets/images/image_1.jpg";
import Image2 from "../assets/images/image_2.jpg";
import Image3 from "../assets/images/image_3.jpg";
import Image4 from "../assets/images/image_4.jpg";
import Image5 from "../assets/images/image_5.jpg";
import Image6 from "../assets/images/image_6.jpg";
import Image7 from "../assets/images/image_7.jpg";
import Image8 from "../assets/images/image_8.jpg";
import Image9 from "../assets/images/image_10.jpg";
import { useEffect } from "react";

function Home() {
  // Get website details from the store
  const websiteDetails = useWebStore((state) => state.websiteDetails);

  // Function to set website details in the store
  const setWebsiteDetails = useWebStore((state) => state.setWebsiteDetails);

  // Fetch website details when the component mounts
  useEffect(() => {
    const fetchWebsiteDetails = async () => {
      const response = await getWebsiteDetails();
      if (response) {
        setWebsiteDetails(response);
      } else {
        console.error("Failed to fetch website details");
      }
    };
    fetchWebsiteDetails();
  }, [setWebsiteDetails]);

  const images = websiteDetails.images || [];

  const location = websiteDetails.location || [];
  //console.log("Website details images:", images);

  /*   const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ]; */

  return (
    <div className="container mx-auto h-screen max-w-7xl">
      {/* Header */} {/* bg-green-100 bg-pink-200 */}
      <header className="mb-5 mt-4 p-6 bg-pink-200 rounded md:mx-4 lg:mx-4">
        <NavBar />
      </header>
      {/* Main content */}
      <main id="home" className="mb-4 mx-4 ">
        {/* Info and profile section */}
        <section className="mb-20">
          <InfoAndBanner
            headerText={websiteDetails.headerText}
            subHeaderText={websiteDetails.subHeaderText}
          />
        </section>

        {/* My work section */}
        <section id="myWork" className="mb-10 sm:mx-4">
          <MyWork images={images} />
        </section>

        {/* Pricing section */}
        <section id="plans" className="md:mx-4 lg:mx-4">
          <Pricing />
        </section>

        {/* Testimonials section */}

        {/* Get in touch */}
        <section id="contact" className="mx-4">
          <ContactMe location={location} />
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 font-light">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <SocialMedia />
        </section>

        {/* About me section */}
      </main>
      {/* Footer section */}
      {
        <footer className="md:mx-4 lg:mx-4">
          <div className="flex justify-center items-center h-20 bg-pink-200">
            <p className="text-black font-extralight">
              &copy; 2025 - All rights reserved - Nail Polish - GP
            </p>
          </div>
        </footer>
      }
    </div>
  );
}
export default Home;
