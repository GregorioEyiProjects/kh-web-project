import { useEffect, useState } from "react";

function Modal2({ isOpen, title, onClose, onSubmit }) {
  if (!isOpen) return null;

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(title || "");
  }, [title, isOpen]);

  //console.log("Title in Modal2:", title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-xl ">
        <h2 className="text-lg font-bold text-black  mb-4">
          Enter new details
        </h2>
        <input
          className="border text-sm p-2 mb-2 w-full text-black placeholder:text-gray-950"
          placeholder={title}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-red-400 rounded cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-2 py-2 bg-indigo-500 text-white rounded cursor-pointer"
            onClick={() => onSubmit(title, value)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal2;
