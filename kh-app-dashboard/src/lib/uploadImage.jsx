import React, { use, useEffect, useRef, useState } from "react";
import API from "./axio";
import useDashboardStore from "../store/dashboardStore";

function UploadImage({ tag, onClose, extra }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (success) {
      console.log("Image uploaded successfully!");
      alert("Image uploaded successfully!");
      //Update the dashboard store with the new image
      setSuccess(false); // Reset after alert
      onClose(); // Close the modal after successful upload
    }
  }, [success]);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCustomClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitting form with file:", file.name);
    console.log("Tag:", tag);
    console.log("Extra data:", extra);

    if (!file || !tag) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("tag", tag);
    formData.append("extra", extra || "default"); // Optional extra data

    API.post("/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      },
    })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data.data);
        // Update the dashboard store with the new image
        useDashboardStore.getState().setDashboardDetails(response.data.data);
        setSuccess(true);
        setPreview(URL.createObjectURL(file));
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* Hide the default file input */}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          name="image"
          onChange={handleChange}
        />
        {/* Custom button */}
        <button
          type="button"
          className="text-sm text-white bg-indigo-500 px-3 py-1 rounded mr-2 cursor-pointer"
          onClick={handleCustomClick}
        >
          Choose Image
        </button>

        {/* Show selected file name */}
        <span className="text-sm text-gray-700">
          {file ? file.name : "No file chosen"}
        </span>

        {/* Submit button */}
        <div className="flex justify-end mt-5">
          <button
            className="text-sm text-indigo-600 px-3  hover:underline hover:bg-indigo-100 py-1 rounded cursor-pointer"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="text-sm text-indigo-600 px-3  hover:underline hover:bg-indigo-100 py-1 rounded cursor-pointer"
            type="submit"
          >
            Upload Image
          </button>
        </div>
      </form>

      {/* Preview the selected image */}

      {/* {preview && (
        <div>
          <img src={preview} alt="Preview" />
        </div>
      )} */}
    </div>
  );
}

export default UploadImage;
