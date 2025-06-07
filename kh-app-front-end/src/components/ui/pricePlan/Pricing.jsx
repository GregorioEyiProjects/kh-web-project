import Plans from "./Plans";

function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 ">
      <p className="my-2 text-center mx-4 text-sm">
        Select from our range of nail polish plans to keep your nails looking
        fabulous. 💅🏻
      </p>
      <h1 className=" text-xl sm:text-4xl text-center">
        Choose the Perfect Plan for Your Nails
      </h1>

      <div className="grid grid-cols-1 gap-3 my-5 p-4 justify-center items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-2 lg:p-0 ">
        {/* Basic plan */}
        <Plans
          name="Basic plan"
          price="1999.0 THB"
          features={[
            "5 Regular Nail Polish Colors",
            "Free shipping",
            "Monthly subscription",
          ]}
          buttonText="Subscribe"
        />

        {/* Premium plan */}
        <Plans
          name="Basic plan"
          price="2999.0 THB"
          features={[
            "10 Premium Nail Polish Colors",
            "Exclusive Nail Art Designs",
            "Bi-Monthly Subscription",
            "Feature text goes here",
          ]}
          buttonText="Subscribe"
        />

        {/* Luxury plan */}
        <Plans
          name="Luxury plan"
          price="3999.0 THB"
          features={[
            "15 Luxury Nail Polish Colors",
            "Custom Nail Designs Service",
            "Quarterly Subscription",
            "Feature text goes here",
            "Feature text goes here",
          ]}
          buttonText="Subscribe"
        />
      </div>
    </div>
  );
}
export default Pricing;
