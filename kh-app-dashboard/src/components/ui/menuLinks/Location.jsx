import PlaceComponent from "./PlaceComponent";
import nawaminImage from "../../../assets/images/nawamim.jpeg";
import nightMarketImage from "../../../assets/images/night_market.jpeg";
import useDashboardStore from "../../../store/dashboardStore";

//
function Location() {
  const dashboardDetails = useDashboardStore((state) => state.dashboardDetails);
  /*   console.log(
    "Location dashboardDetails:",
    dashboardDetails.location[0]?.locationImage
  ); */
  return (
    <div className="flex  p-4 justify-center h-full">
      <div className="grid grid-cols-2 gap-4">
        {dashboardDetails.location.map((location, index) => (
          <PlaceComponent
            key={index}
            locationName={location.locationName}
            image={location.locationImage}
            imagePlaceholder={location.locationName}
            address={location.locationText}
            phone={location.locationContact}
            info="Visit us at our physical store location."
            locationInMap={location.locationLink}
          />
        ))}
        ;
        {/*  <PlaceComponent
          image={dashboardDetails.location[0]?.locationImage}
          imagePlaceholder={dashboardDetails.location[0]?.locationName}
          address={dashboardDetails.location[0]?.locationText}
          phone={dashboardDetails.location[0]?.locationContact}
          info="Visit us at our physical store location."
          locationInMap={dashboardDetails.location[0]?.locationLink}
        />
        <PlaceComponent
          image={dashboardDetails.location[1]?.locationImage}
          imagePlaceholder={dashboardDetails.location[1]?.locationName}
          address={dashboardDetails.location[1]?.locationText}
          phone={dashboardDetails.location[1]?.locationContact}
          info="Visit us at our physical store location."
          locationInMap={dashboardDetails.location[1]?.locationLink}
        /> */}
      </div>
    </div>
  );
}
export default Location;

/*  */
