import React from "react";
import SearchBar from "./SearchBar";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function UserAccount() {
  return (
    <>
      <div className="border-b mb-1 border-stone-300">
        <button className="flex p-0.5 mb-1 hover:bg-gray-300 rounded transition-colors relative gap-2 w-full items-center cursor-pointer">
          <img
            src="https://api.dicebear.com/9.x/bottts/svg"
            alt="avatar"
            className="size-10 rounded shrink-0 bg-indigo-400 shadow"
          />
          <div className="text-start">
            <span className="text-sm font-bold block">Emulator Device</span>
            <span className="text-stone-500 text-xs block">
              emulatorD@gmail.com
            </span>
          </div>
          {/* 
            NOTE: translate-y-[cal(-50%+4px)]: Applies a custom vertical translation using CSS.
            Normally, you’d use translate-y-1/2 for 50%, but here, [cal(-50%+4px)] is a custom value.
            It means: move the icon up by 50% of its height, then down by 4px 
          */}
          <FiChevronDown className="absolute right-2 top-1/2 translate-y-[cal(-50%+4px)] text-xs" />
          <FiChevronUp className="absolute right-2 top-1/3 translate-y-[cal(-50%-4px)] text-xs" />
        </button>
      </div>
    </>
  );
}

export default UserAccount;
