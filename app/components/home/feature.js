import React from "react";

const Feature = () => {
  return (
    <div className="lg:py-[130px] py-[60px]">
      <div className="container">
        <div className="header-2 text-[#404040] text-center pb-[50px]">
          Common Features of This App
          <div className="relative max-w-[114px] mx-auto mt-[16px]">
            <div className="w-[114px] h-[1px] bg-primary absolute"></div>
            <div className="flex justify-center items-center">
              <div className="w-[53px] h-[3px] bg-primary absolute  "></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[24px] md:gap-y-[73px] sm:gap-y-[100px] gap-y-[160px]">
          <div className=" relative md:h-[274px] ">
            <div className="md:max-w-[424px]  absolute w-full h-auto md:h-[274px] rounded-xl border border-primary bg-red-300 px-[20px] pb-[40px] shadow_custom2 mt-[83px] !z-50  ">
              <div className="flex flex-col items-center justify-center p-4 relative z-40">
                <h3 className="text-[#0B204C] font-normal text-center lg:max-w-[312px] text-[24px] mt-[28px] mb-[26px] capitalize">
                  Service1{" "}
                </h3>
                <p className="text-[#888AA0] font-normal text-center">
                Both travelers and drivers can sign up with a cabme app, by entering their personal details. Besides, we ensure that your app users can make registration with a few steps.
                </p>
              </div>
            </div>
            <div className="relative top-[2rem]  h-[200px] flex justify-start ms-[24px] ">
              <div className=" absolute  z-10 rounded-full shadow_custom2 h-[97.59px] w-[100px] border-6 border   border-primary"></div>
              <div className="bg-white h-[97.59px] w-[100px] rounded-full absolute  z-50   flex justify-center items-center ">
                <img
                  src="/service1.png"
                  className=" w-[50px] h-[50px]   "
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
