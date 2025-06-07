import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout button clicked");
    useAuthStore.getState().logout();
    navigate("/login", { replace: true });
  };

  return (
    <div
      className="flex flex-col border-t sticky overflow-y-scroll "
      onClick={handleLogout}
    >
      <div className="flex items-center gap-2 px-4 py-2 mt-0.5 rounded-lg text-gray-700 text-left cursor-pointer transition-colors duration-200 bg-gray-300 hover:bg-indigo-400 hover:text-white">
        <FiLogOut />
        <span className="text-sm">Logout</span>
      </div>
    </div>
  );
}
export default Logout;
// This component can be styled further to match the application's design
