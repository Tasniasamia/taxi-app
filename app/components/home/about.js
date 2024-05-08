import React from "react";

const About = () => {
  return (
    <div className="lg:py-[143px] py-[60px]">
      <div className="container grid xl:grid-cols-2 grid-cols-1">
        <div className="xl:max-w-[595px] xl:max-h-[424px] ">
          <img src="/group.png" alt="group" className="h-full w-full" />
        </div>
        <div>
          <div className="header-5 text-primary font-semibold mb-[16px] lg:inline-block lg:text-start text-center">
            About Our 247taxapp
             {/* line bar */}
            <div className="relative max-w-[114px] mx-auto mt-[16px]">
            <div className="w-[114px] h-[1px] bg-primary absolute"></div>
            <div className="flex justify-center items-center">
            <div className="w-[53px] h-[3px] bg-primary absolute  "></div>
            </div>
          </div>
          </div>
         

          {/* <div className="relative max-w-[114px] ">
            <div className="w-[114px] h-[1px] bg-primary absolute"></div>
            <div className="flex justify-center items-center">
              <div className="w-[53px] h-[3px] bg-primary absolute  "></div>
            </div>
          </div> */}

          <h3 className="header-3 mt-[16px] text-[#191D31]">
            "Drive Your Dreams: Your Trusted Car Rental Destination"
          </h3>
          <p className="mt-[24px] font-normal text-[#2B2B2B]">
            Welcome to 247taxapp, where your journey takes center stage. At
            Rentify, we pride ourselves on delivering a seamless and
            personalized car rental experience. With a commitment to customer
            satisfaction, our diverse fleet offers a range of vehicles to cater
            to every travel need, from compact cars to spacious SUVs and
            luxurious rides. We believe in transparency, ensuring clear and
            upfront pricing without hidden fees, making the booking process
            straightforward and stress-free. Our user-friendly website and
            mobile app empower you to easily browse, book, and manage your
            rentals. At the heart of Rentify is a dedicated customer support
            team, available 24/7 to assist you at every step of your rental
            journey. Whether you’re embarking on a business trip,
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
