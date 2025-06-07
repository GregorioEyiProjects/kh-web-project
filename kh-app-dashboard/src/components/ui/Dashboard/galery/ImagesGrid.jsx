import { FiDelete, FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

function ImagesGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onClick={() => onImageClick(image)}
        >
          <span className="absolute top-2 right-2 rounded-2xl p-1 shadow cursor-pointer hover:text-xl hover:text-white hover:bg-red-500 hover:scale-125 transition-transform duration-300">
            {" "}
            <AiOutlineDelete className="" />
          </span>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-[350px] object-cover rounded-lg shadow"
          />
          {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {image.title}
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default ImagesGrid;
