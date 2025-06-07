import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import UploadImage from "../../../lib/uploadImage";
import Modal2 from "../Dashboard/Modal2";
import useDashboardStore from "../../../store/dashboardStore";
import { handleUpdateLocationInfo } from "../../../lib/fetch";

function PlaceComponent({
  locationName,
  image,
  imagePlaceholder,
  address,
  phone,
  info,
  locationInMap,
}) {
  const [showUpload, setShowUpload] = useState(false);
  //const [showEditModal, setShowEditModal] = useState(false);
  /*   const isModalOpen = useDashboardStore((state) => state.isModalOpen);
  const openModal = useDashboardStore((state) => state.openModal); */
  const [modal, setModal] = useState({ open: false, value: "", field: "" });

  const handleEditImage = () => {
    console.log("Edit image clicked");
    setShowUpload(true);
  };

  const handleCloseModal = () => {
    console.log("---Close modal---");
    setModal({ open: false, value: "" });
    //useDashboardStore.setState({ isModalOpen: modal.open });
    //setTextValue("");
  };

  const handleOnSubmit = async (title, value) => {
    /* console.log("Submitted value:", value); */
    // console.log("Location Name:", locationName);
    //console.log("Submitted title:", title);

    const field = modal.field;

    const locationData = {
      locationName: locationName,
      locationImage: image,
      locationText: address,
      locationLink: locationInMap,
      locationContact: phone,
    };

    switch (field) {
      case "address":
        console.log("Updating address:", value);
        locationData.locationText = value;
        break;
      case "phone":
        console.log("Updating phone:", value);
        locationData.locationContact = value;
        break;
      case "locationInMap":
        console.log("Updating location link:", value);
        locationData.locationLink = value;
        break;
      default:
        // Handle unknown field title
        console.log("Unknown field title:", title);
    }

    //console.log("Location Data after update:", locationData);

    // Update the location data based on the field being edited
    await handleUpdateLocationInfo(locationData);

    // Close the modal after submission
    setModal({ open: false, value: "" });
  };

  return (
    <>
      <div className="flex flex-col items-start text-black">
        {/* Image */}
        <div className="relative mb-4 ">
          <span
            onClick={handleEditImage}
            className="absolute top-2 right-2 text-2xl text-gray-600 bg-white rounded-2xl p-1 shadow cursor-pointer hover:scale-75 transition-transform duration-300"
          >
            <FiEdit className=" hover:text-blacl" />
          </span>
          <img className="rounded-xl h-96" src={image} alt={imagePlaceholder} />
        </div>

        {/* Address  */}
        <div className="flex w-full justify-between items-center">
          <h1 className="">
            <span className="font-bold">Address</span>: {address}
          </h1>
          <span
            onClick={() => {
              //setTextValue(address);
              setModal({ open: true, value: address, field: "address" });
              //setTimeout(() => openModal(), 200);
            }}
            className=" p-1 text-xl hover:text-xl  hover:bg-indigo-300 hover:rounded-xl  cursor-pointer  transition-transform duration-300"
          >
            <FiEdit className="text-gray-600 hover:text-black" />
          </span>
        </div>

        {/* Contact */}
        <div className="flex w-full mt-4 justify-between items-center ">
          <h1 className="">
            <span className="font-bold">Contact</span>: {phone}
          </h1>
          <span
            onClick={() => {
              //setTextValue(address);
              setModal({ open: true, value: phone, field: "phone" });
              //setTimeout(() => openModal(), 200);
            }}
            className=" p-1 text-xl hover:text-xl   hover:bg-indigo-300 hover:rounded-xl  cursor-pointer  transition-transform duration-300"
          >
            <FiEdit className="text-gray-600 hover:text-black " />
          </span>
        </div>

        {/* Location */}
        <div className="flex w-full mt-4 justify-between items-center ">
          <a
            href={locationInMap}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-cyan-700 hover:text-pink-300 hover:underline "
          >
            {locationInMap}
          </a>
          <span
            onClick={() => {
              //setTextValue(address);
              setModal({
                open: true,
                value: locationInMap,
                field: "locationInMap",
              });
              //setTimeout(() => openModal(), 200);
            }}
            className=" p-1 text-xl hover:text-xl   hover:bg-indigo-300 hover:rounded-xl  cursor-pointer  transition-transform duration-300"
          >
            <FiEdit className="text-gray-600 hover:text-black " />
          </span>
        </div>

        {/* Show Uploade an image component */}
        {showUpload && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded shadow-lg">
              <UploadImage
                tag={"locationField"}
                extra={"Night Market"}
                onClose={() => setShowUpload(false)}
              />
            </div>
          </div>
        )}

        {/* Show Edit Field Modal */}
        {modal.open && (
          <Modal2
            isOpen={modal.open}
            title={modal.value}
            onClose={handleCloseModal}
            onSubmit={handleOnSubmit}
          />
        )}

        {/* Info */}
      </div>
    </>
  );
}

export default PlaceComponent;
