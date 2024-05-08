import React from "react";

const Download = () => {
  return (
    <div className="bg-[url('/download-bg.png')] bg-cover bg-no-repeat md:py-[100px] py-[60px]">
      <div className="container">
        <div className="header-2 text-white text-center">
          Download App
          <div className="relative max-w-[114px] mx-auto mt-[16px]">
            <div className="w-[114px] h-[1px] bg-primary absolute"></div>
            <div className="flex justify-center items-center">
              <div className="w-[53px] h-[3px] bg-primary absolute  "></div>
            </div>
          </div>
        </div>
        <h5 className="text-white header-5 font-medium mt-[24px] mb-[40px] text-center">
          Examine the App's Features and Demo.
        </h5>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[80px] lg:gap-y-0 gap-y-[80px] mx-auto lg:px-[46px] px-0">
          <div className="pt-[40px] px-[32px] bg-white rounded-2xl custom-shadow ">
            <h2 className="header-2 text-naviblue">Android</h2>
            <h5 className="header-5 mt-[12px] font-medium pb-[40px] text-[#656565]">
              Download free app from play store
            </h5>
            <div className="flex lg:flex-row flex-wrap items-center gap-x-[40px] gap-y-[40px] pb-[41px]">
              <img
                src="/google-play.png"
                className="w-[178px] h-[52px]"
                alt="google play"
              />
              <h5 className="text-primary border-b-2 border-primary inline-block header-5 font-medium">
                User App
              </h5>
              <h5 className="text-primary border-b-2 border-primary inline-block header-5 font-medium">
                Driver App
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="md:max-w-[430px] md:max-h-[458px]">
                <img
                  src="/android.png"
                  className="h-full w-auto"
                  alt="android"
                />
              </div>
            </div>
            <div></div>
          </div>
          <div className="pt-[40px] px-[32px] bg-white rounded-2xl custom-shadow ">
            <h2 className="header-2 text-naviblue">IOS</h2>
            <h5 className="header-5 mt-[12px] font-medium pb-[40px] text-[#656565]">
              Download free app from app store
            </h5>
            <div className="flex lg:flex-row flex-wrap items-center gap-x-[40px] gap-y-[40px] pb-[41px]">
              <img
                src="/apple.png"
                className="w-[178px] h-[52px]"
                alt="google play"
              />
              <h5 className="text-primary border-b-2 border-primary inline-block header-5 font-medium">
                User App
              </h5>
              <h5 className="text-primary border-b-2 border-primary inline-block header-5 font-medium">
                Driver App
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="md:max-w-[430px] md:max-h-[458px]">
                <img
                  src="/iphone.png"
                  className="h-full w-auto"
                  alt="android"
                />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
