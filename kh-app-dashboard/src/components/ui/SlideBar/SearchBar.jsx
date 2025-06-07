import { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import CommandMenu from "./CommandK";

function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center bg-stone-200 mb-4 px-2 py-1.5 rounded text-sm">
        <FiSearch className="text-gray-500  mr-2" />
        <input
          type="text"
          placeholder="Search"
          onFocus={() => setOpen(true)}
          className="w-full placeholder:text-stone-400 bg-transparent focus:outline-none "
        />
        <span className="p-1 text-xs flex item-center gap-0.5 shadow rounded absolute right-1.5 top-4 -translate-y-1/2 bg-stone-50">
          <FiCommand className="translate-y-0.5" />K
        </span>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default SearchBar;
