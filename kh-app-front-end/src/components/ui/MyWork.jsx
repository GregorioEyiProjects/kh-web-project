import { useState } from "react";

function MyWork({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="my-work">
      <h2 className="mb-4 text-lg sm:text-3xl  font-light ">
        Explore my recent work
      </h2>

      {/* Gallery of images */}
      <div className="grid grid-cols-2 gap-2  sm:grid-cols-3 sm:gap-4  text-xl font-light text-black">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Work - ${index}`}
            className="w-full h-[250px] sm:h-[380px] object-cover cursor-pointer rounded shadow hover:scale-105"
            onClick={() => {
              console.log("was clicked");
              setSelectedImage(img);
            }}
          />
        ))}
      </div>

      {/* Modal overlay  */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-25 "
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close modal btn */}
            <button
              className="absolute top-2 right-2 cursor-pointer text-white text-2xl bg-white bg-opacity-50 rounded-full px-2 py-1 hover:bg-black"
              onClick={() => setSelectedImage(null)}
            >
              ✖️
            </button>

            {/* Enlarged image */}
            <img
              src={selectedImage}
              alt="Enlarged work"
              className="max-w-[90vw] max-h-[90vh] rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default MyWork;
