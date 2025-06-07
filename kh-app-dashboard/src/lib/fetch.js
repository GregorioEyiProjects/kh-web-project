import API from "./axio";
import useAuthStore from "../store/authStore";
import useDashboardStore from "../store/dashboardStore";

const getWebsiteDetails = async () => {
  console.log("Fetching website details...");
  try {
    const response = await API.get(`/home`);

    console.log("Response from getWebsiteDetails:", response);

    if (response.status === 200) {
      /* console.log("Website details fetched successfully:", response.data);
      console.log("Webs headerText", response.data.data["headerText"]); */
      if (!response.data || !response.data.data) {
        console.error("Invalid response structure:", response.data);
        return {
          error: "Invalid response structure",
        };
      }
      //console.log("Website details fetched successfully:", response.data.data);
      return response.data.data;
    } else {
      console.error(
        "Failed to fetch website details, status code:",
        response.status
      );
      return {
        error: "Failed to fetch website details",
      };
    }
  } catch (error) {
    console.error("Error in getWebsiteDetails:", error);
    return {
      error: "Failed to fetch website details",
    };
  }
};

const handleUpdateHeaderAndSubHeader = async (headerValue, subHeaderValue) => {
  console.log("Updating header and sub-header in backend...");
  console.log("Header Value:", headerValue);
  console.log("Sub-header Value:", subHeaderValue);

  try {
    const data = {
      headerText: headerValue,
      subHeaderText: subHeaderValue,
    };

    const userToken = localStorage.getItem("token");
    console.log("User Token:", userToken);
    //const userToken2 = useAuthStore.getState().token;

    const response = await API.post("/update/headerAndSubheader", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    //console.log("Response from backend:", response);

    if (response.status === 200) {
      console.log("Header and sub-header updated successfully:", response.data);

      //This is when you want to update the Zustand store directly outside of a React component
      useDashboardStore.getState().setDashboardDetails(response.data.data);

      //This is only for React component
      /* const setDashboardDetails = useDashboardStore(
        (state) => state.setDashboardDetails
      ); 
      setDashboardDetails(response.data.data);*/
      alert("Header and sub-header updated successfully!");
    } else {
      console.log(
        "Failed to update header and sub-header, status code:",
        response.status
      );
      alert("Failed to update header and sub-header.");
    }
  } catch (error) {
    console.log("Error updating header and sub-header:", error);
  }
};

const handleUpdateLocationInfo = async (locationData) => {
  console.log("Updating location in backend...");
  console.log("Location Data:", locationData);

  try {
    const userToken = localStorage.getItem("token");
    //console.log("User Token:", userToken);
    const response = await API.post("/update/location", locationData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    //console.log("Response from backend:", response);

    if (response.status === 200) {
      console.log("Location info updated successfully:", response.data);

      //This is when you want to update the Zustand store directly outside of a React component
      useDashboardStore.getState().setDashboardDetails(response.data.data);

      /*//This is only for React component
       const setDashboardDetails = useDashboardStore((state) => state.setDashboardDetails); 
      setDashboardDetails(response.data.data);*/
      alert("Location info updated successfully!");
    } else {
      console.log(
        "Failed to update location info, status code:",
        response.status
      );
      alert("Failed to update location info.");
    }
  } catch (error) {
    console.log("Error updating location info:", error);
  }
};

//export default handleUpdateHeaderAndSubHeader;
export {
  getWebsiteDetails,
  handleUpdateHeaderAndSubHeader,
  handleUpdateLocationInfo,
};
