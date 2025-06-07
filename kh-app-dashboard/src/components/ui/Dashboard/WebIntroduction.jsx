import { FiEdit } from "react-icons/fi";
import Modal from "./Modal";
import useDashboardStore from "../../../store/dashboardStore";
import { handleUpdateHeaderAndSubHeader } from "../../../lib/fetch";

function WebIntroduction() {
  //const [isOpen, setIsOpen] = useState(false);

  //NOTE:  Hook it directly inside your component to subscribe to state changes
  const isModalOpen = useDashboardStore((state) => state.isModalOpen);
  const openModal = useDashboardStore((state) => state.openModal);
  const dashboardDetails = useDashboardStore((state) => state.dashboardDetails);

  const handleSubmit = async (headerValue, subHeaderValue) => {
    console.log("Submitted values:", headerValue, subHeaderValue);

    await handleUpdateHeaderAndSubHeader(headerValue, subHeaderValue);

    // Close the modal after submission
    useDashboardStore.setState({ isModalOpen: false });
  };

  const handleCloseModal = () => {
    console.log("---Close modal---");
    useDashboardStore.setState({ isModalOpen: false });
  };

  return (
    <div className="flex items-center w-full p-2 border-b border-gray-200 ">
      <div className="flex flex-col flex-1 ">
        <h1 className="text-sm font-bold text-black mb-1">
          {dashboardDetails.headerText}
        </h1>
        <p className="text-xs text-black">{dashboardDetails.subHeaderText}</p>
      </div>
      <span>
        <FiEdit
          onClick={openModal}
          className="text-xl text-blue-600 cursor-pointer hover:text-blue-800 transition duration-300"
        />
      </span>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        headerText={dashboardDetails.headerText}
        subHeaderText={dashboardDetails.subHeaderText}
      />
    </div>
  );
}
export default WebIntroduction;
