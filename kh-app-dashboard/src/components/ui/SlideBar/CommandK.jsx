import { Command, CommandGroup } from "cmdk";
import { useEffect, useState } from "react";
import { FiEdit, FiLock, FiLogOut } from "react-icons/fi";

const CommandMenu = ({ open, setOpen }) => {
  // State to manage the input value
  const [valueEntered, setValueEntered] = useState("");
  // Toggle the menu when ⌘K is pressed

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      onClick={() => setOpen(false)}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl border border-stone-200 overflow-hidden w-full mt-12 mx-auto max-w-lg"
      >
        <Command.Input
          placeholder="Type to search"
          value={valueEntered}
          onValueChange={setValueEntered}
          className="relative border border-stone-200 p-3 text-lg w-full focus:outline-none placeholder:text-stone-400  "
        />
        <Command.List>
          <Command.Empty>
            <span className="text-fuchsia-400">"{valueEntered}" </span>
            {""}
            not found.
          </Command.Empty>

          <CommandGroup
            heading="Navigation"
            className="text-sm mb-4 mt-1 text-stone-400"
          >
            <Command.Item
              className="flex items-center gap-2 p-2 text-sm hover:bg-stone-100 cursor-pointer transition-colors rounded "
              onSelect={() => {
                setOpen(false);
                // Navigate to dashboard
                console.log("Navigating to Dashboard");
              }}
            >
              <FiLock /> Password
            </Command.Item>
            <Command.Item
              className="flex items-center gap-2 p-2 mb-3 text-sm hover:bg-stone-100 cursor-pointer transition-colors rounded "
              onSelect={() => {
                setOpen(false);
                // Navigate to dashboard
                console.log("Navigating to Dashboard");
              }}
            >
              <FiEdit /> Edit
            </Command.Item>

            <Command.Item className="flex items-center gap-2 p-2 text-sm text-stone-50 bg-stone-950 hover:bg-stone-600 cursor-pointer transition-colors rounded ">
              <FiLogOut /> Sign out
            </Command.Item>
          </CommandGroup>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
