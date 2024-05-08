"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { VscSend } from "react-icons/vsc";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="!bg-bgdark relative">
      <div className="container  md:flex flex md:flex-row flex-col sm:grid grid-cols-2 justify-items-stretch   md:h-[422px]">
        <div className="md:w-[35%] w-full flex   md:justify-start">
          <div className=" md:pt-[110px] pt-[50px] w-[359px]">
            <Link href="/">
              <img src="/logo.png" className="h-[50px] w-[164px] " alt="logo" />
            </Link>
            <p className="mt-[10px] font-normal text-white text-opacity-[60%]">
              Stay updated by connecting with us on social media and other
              websites.
            </p>
            <div className="mt-[32.05px]">
              <div className="flex gap-x-4">
                <p className="text-white">Android APKs :</p>
                <p className="text-primary">User App</p>
                <p className="text-primary">Driver App</p>
              </div>
              <div className="flex gap-x-4">
                <p className="text-white">iOS TestFlight :</p>
                <p className="text-primary">User App</p>
                <p className="text-primary">Driver App</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full text-white  flex md:justify-center sm:justify-end justify-start md:pt-[110px] pt-[50px] lg:border-y-0 lg:border-x border-x-0  lg:border-[#919BB3] lg:border-opacity-[30%]">
          <div className="flex-col  md:text-start sm:text-center text-start ">
            <h3 className="header-5 text-white font-semibold mb-[24px] ">
              QUICK LINKS
            </h3>
            <ul className="flex-col space-y-[24px]  ">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-primary" : "text-white"
                  } hover:text-primary duration-300 ease-in-out`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "text-primary" : "text-white"
                  } hover:text-primary duration-300 ease-in-out`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className={`${
                    pathname === "/privacy" ? "text-primary" : "text-white"
                  } hover:text-primary duration-300 ease-in-out`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`${
                    pathname === "/terms" ? "text-primary" : "text-white"
                  } hover:text-primary duration-300 ease-in-out`}
                >
                  Terms & Conditons
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-[35%] w-full text-white sm:col-span-2  pb-10 md:pb-0  h-auto flex md:justify-end  ">
          <div className="md:pt-[110px] pt-[50px] md:w-[359px] ">
            <h5 className="header-5 font-semibold text-white mb-[24px]">
              Subscribe
            </h5>
            <p className="text-white text-opacity-[60%] font-normal  ">
              Stay connected with us for regular updates by providing your email
              address
            </p>
            <div className="subscribe relative mt-[20px]">
              <input
                type="text"
                placeholder="Your email"
                className="w-full rounded-full bg-transparent border border-white border-opacity-[50%] focus:outline-none  h-[50px] ps-[24px] "
              />
              <div className="w-[68px] h-[50px] bg-primary absolute right-0 top-0 flex justify-center items-center rounded-e-full">
                <VscSend className=" text-white  " size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px] pb-[24px] text-white border-t border-[#919BB3] border-opacity-[30%]">
        <div className="container flex md:flex-row flex-col md:justify-between justify-center">
          <p className="md:text-start text-center md:pb-0 pb-6">&copy; 2024 All rights reserved by appstick</p>
          <div className="text-[12px] flex gap-x-3 items-center justify-center">
            <p className="flex gap-2 items-center">
              <FaPhone size={16} />
              <span>+880 1254 542 22</span>
            </p>
            <p className="flex gap-2 items-center">
              <TfiEmail size={16} />
              <span>contact@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <img src="/car2.png"className="w-[241px] h-[128px] absolute bottom-[65px] left-[10px]"alt="car"/>
    </div>
  );
};

export default Footer;
