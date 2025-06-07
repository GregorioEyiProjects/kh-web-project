import TopBar from "./TopBar";
import WebIntroduction from "./WebIntroduction";
import Galery from "./galery/Galery";
import Location from "../menuLinks/Location";

function Dashboard({ selectedContent }) {
  return (
    <div className="rounded-lg bg-white shadow h-calc[100vh-32px] overflow-y-auto p-4">
      <TopBar />

      {/* Conditional rendering based on selected content */}
      {selectedContent === "dashboard" && (
        <>
          <WebIntroduction />
          <Galery />
        </>
      )}

      {/* Loaction */}
      {selectedContent === "location" && <Location />}

      {/* Default content */}
    </div>
  );
}
export default Dashboard;
