import API from "./axio";

const getWebsiteDetails = async () => {
  console.log("Fetching website details...");
  try {
    const response = await API.get(`/home`);

    //console.log("Response from getWebsiteDetails:", response);

    if (response.status === 200) {
      /* console.log("Website details fetched successfully:", response.data);
      console.log("Webs headerText", response.data.data["headerText"]); */
      if (!response.data || !response.data.data) {
        console.log("Invalid response structure:", response.data);
        return {
          error: "Invalid response structure",
        };
      }
      //console.log("Website details fetched successfully:", response.data.data);
      return response.data.data;
    } else {
      console.log(
        "Failed to fetch website details, status code:",
        response.status
      );
      return {
        error: "Failed to fetch website details",
      };
    }
  } catch (error) {
    console.log("Error in getWebsiteDetails:", error);
    return {
      error: "Failed to fetch website details",
    };
  }
};

export default getWebsiteDetails;
