import { use, useEffect, useState } from "react";
import SideBar from "../components/ui/SlideBar/SideBar";
import Dashboard from "../components/ui/Dashboard/Dashboard";
import useDashboardStore from "../store/dashboardStore";
import { getWebsiteDetails } from "../lib/fetch";

export default function Home() {
  // Using Zustand store to the info coming from the API
  const setDashboardDetails = useDashboardStore(
    (state) => state.setDashboardDetails
  );

  // NEW: Track selected content
  const [selectedContent, setSelectedContent] = useState("dashboard");

  useEffect(() => {
    const fetchWebsiteDetails = async () => {
      const response = await getWebsiteDetails();
      if (response) {
        setDashboardDetails(response);
      } else {
        console.error("Failed to fetch website details");
      }
    };

    fetchWebsiteDetails();
  }, [setDashboardDetails]);

  return (
    <main className="grid grid-cols-[220px_1fr] gap-4 p-4 max-w-full h-screen bg-stone-100">
      {/* SideBard */}
      <SideBar
        onSelect={setSelectedContent}
        selectedContent={selectedContent}
      />

      {/* SideBar */}
      <Dashboard selectedContent={selectedContent} />
    </main>
  );
}

// This is a simple React component that serves as the home page of an application.
