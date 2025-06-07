import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

function Menu({ onSelect, selectedContent }) {
  return (
    <div className="flex flex-col gap-2">
      <Route
        selected={selectedContent === "dashboard"}
        icon={FiHome}
        title="Dashboard"
        onClick={() => {
          onSelect("dashboard");
        }}
      />
      <Route
        selected={selectedContent === "location"}
        icon={TbLocation}
        title="Location"
        onClick={() => {
          onSelect("location");
        }}
      />
      <Route
        selected={selectedContent === "invoice"}
        icon={FiPaperclip}
        title="Invoice"
        onClick={() => {
          onSelect("invoice");
        }}
      />
      <Route
        selected={selectedContent === "interogance"}
        icon={FiLink}
        title="Interogance"
        onClick={() => {
          onSelect("interogance");
        }}
      />
      <Route
        selected={selectedContent === "finance"}
        icon={FiDollarSign}
        title="Finance"
        onClick={() => {
          onSelect("finance");
        }}
      />
    </div>
  );
}

const Route = ({ selected, icon: Icon, title, onClick }) => {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 cursor-pointer rounded-lg text-left transition-colors duration-200 ${
        selected
          ? "bg-indigo-400 text-white"
          : "text-gray-700 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      {" "}
      {Icon && <Icon className="w-5 h-5" />}
      {title && <span className="text-sm">{title}</span>}
    </button>
  );
};

export default Menu;
