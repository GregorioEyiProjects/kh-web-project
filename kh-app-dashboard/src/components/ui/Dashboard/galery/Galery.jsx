import { FiDelete, FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ImagesGrid from "./ImagesGrid";
import UploadImage from "../../../../lib/uploadImage";

import Image1 from "../../../../assets/images/image_1.jpg";
import Image2 from "../../../../assets/images/image_2.jpg";
import Image3 from "../../../..//assets/images/image_3.jpg";
import Image4 from "../../../../assets/images/image_4.jpg";
import Image5 from "../../../../assets/images/image_5.jpg";
import Image6 from "../../../../assets/images/image_6.jpg";
import Image7 from "../../../../assets/images/image_7.jpg";
import Image8 from "../../../../assets/images/image_8.jpg";
import Image9 from "../../../../assets/images/image_10.jpg";
import { useState } from "react";
import useDashboardStore from "../../../../store/dashboardStore";

function Galery() {
  const dashboardDetails = useDashboardStore((state) => state.dashboardDetails);

  const images = dashboardDetails.images || [];
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
  const editvalue = "Add a new image";
  const deleteValue = "Delete an image";

  const [showUpload, setShowUpload] = useState(false);

  const handleImageClick = (image) => {
    console.log("Image clicked:", image);
  };

  return (
    <div className="flex flex-col mt-4 p-2">
      <div className=" flex justify-end items-center gap-2">
        <Buttons
          icon={FiEdit}
          title={editvalue}
          onTap={() => setShowUpload(true)}
        />
        <Buttons icon={AiOutlineDelete} title={deleteValue} />
      </div>
      {showUpload && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-lg">
            <UploadImage
              tag={"imageField"}
              onClose={() => setShowUpload(false)}
            />
          </div>
        </div>
      )}
      <ImagesGrid images={images} onImageClick={handleImageClick} />
    </div>
  );
}

const Buttons = ({ icon: Icon, title, onTap }) => (
  <div
    title={title}
    onClick={onTap}
    className=" text-white p-2 rounded-lg bg-indigo-400  hover:bg-indigo-900 transition-colors duration-200 cursor-pointer "
  >
    {Icon && <Icon />}
  </div>
);

export default Galery;
