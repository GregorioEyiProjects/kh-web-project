import { useEffect, useState } from "react";

function Modal({ isOpen, onClose, onSubmit, headerText, subHeaderText }) {
  const [headerTextValue, setHeaderTextValue] = useState("");
  const [subHeaderTextValue, setSubHeaderTextValue] = useState("");

  useEffect(() => {
    setHeaderTextValue(headerText || "");
    setSubHeaderTextValue(subHeaderText || "");
  }, [isOpen, headerText, subHeaderText]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6  ">
        <h2 className="text-lg font-bold text-black  mb-4">
          Enter new details
        </h2>
        <input
          className="border text-sm p-2 mb-2 w-full text-black"
          placeholder={headerText}
          value={headerTextValue}
          onChange={(e) => setHeaderTextValue(e.target.value)}
        />
        <input
          className="border text-sm p-2 mb-4 w-full text-black"
          placeholder={subHeaderText}
          value={subHeaderTextValue}
          onChange={(e) => setSubHeaderTextValue(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-red-500 rounded cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-2 py-2 bg-indigo-500 text-white rounded cursor-pointer"
            onClick={() => onSubmit(headerTextValue, subHeaderTextValue)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
