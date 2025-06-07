import nawaminImage from "../../../assets/images/nawamim.jpeg";
import nightMarketImage from "../../../assets/images/night_market.jpeg";
import useWebStore from "../../../store/webStore";
import PlaceComponent from "./PlaceComponent";

function ContactMe({ location }) {
  //const websiteDetails = useWebStore((state) => state.websiteDetails);

  console.log("Website details:", location);

  return (
    <div className="container mx-auto sm:p-15 ">
      <h2 className="mb-4 text-3xl font-bold">Get in touch</h2>
      <p className="mb-4">
        Feel free to reach out to me for any inquiries or to book an
        appointment!
      </p>

      <div className="grid grid-cols-2 gap-4">
        {location.map((location, index) => (
          <PlaceComponent
            key={index}
            image={location.locationImage}
            imagePlaceholder={location.locationName}
            address={location.locationText}
            phone={location.locationContact}
            info="Visit us at our physical store location."
            locationInMap={location.locationLink}
          />
        ))}

        {/* <PlaceComponent
          image={location[0]?.locationImage}
          imagePlaceholder={location[0]?.locationName}
          address={location[0]?.locationText}
          phone={location[0]?.locationContact}
          info="Visit us at our physical store location."
          locationInMap={location[0]?.locationLink}
        />
        <PlaceComponent
          image={location[1]?.locationImage}
          imagePlaceholder={location[1]?.locationName}
          address={location[1]?.locationText}
          phone={location[1]?.locationContact}
          info="Visit us at our physical store location."
          locationInMap={location[1]?.locationLink}
        /> */}
      </div>
    </div>
  );
}
export default ContactMe;
