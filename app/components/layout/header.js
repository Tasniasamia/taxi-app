"use client";
import { Drawer, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose} from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      label: (
        <Link
          onClick={onClose}
          href="/"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <span className="">Home</span>
        </Link>
      ),
      key: "1",
    },
    {
        label: (
          <Link
            onClick={onClose}
            href="/"
            className="flex gap-2 items-center hover:!text-primary cursor-pointer"
          >
            <span className="">About</span>
          </Link>
        ),
        key: "2",
      },
      {
        label: (
          <Link
            onClick={onClose}
            href="/"
            className="flex gap-2 items-center hover:!text-primary cursor-pointer"
          >
            <span className="">Privacy Policy</span>
          </Link>
        ),
        key: "3",
      },
      {
        label: (
          <Link
            onClick={onClose}
            href="/"
            className="flex gap-2 items-center hover:!text-primary cursor-pointer"
          >
            <span className="">Privacy & Terms</span>
          </Link>
        ),
        key: "4",
      },
  ];
  return (
    <div className="bg-black lg:py-[32px] py-[16px] relative bottom-[-32px]">
      <div className="container  flex justify-between ">
        <Link href="/">
          <img src="/logo.png" className="h-[50px] w-[164px] " alt="logo" />
        </Link>
        <div className="lg:flex hidden gap-x-[80px] items-center">
          <div className="flex gap-x-[40px] items-center">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-primary" : "text-white"
              } hover:text-primary duration-300 ease-in-out`}
            >
              Home
            </Link>
            <Link
              href="/"
              className={`${
                pathname === "/about" ? "text-primary" : "text-white"
              } hover:text-primary duration-300 ease-in-out`}
            >
              About Us
            </Link>
            <Link
              href="/"
              className={`${
                pathname === "/privacy" ? "text-primary" : "text-white"
              } hover:text-primary duration-300 ease-in-out`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className={`${
                pathname === "/terms" ? "text-primary" : "text-white"
              } hover:text-primary duration-300 ease-in-out`}
            >
              Terms & Conditions
            </Link>
          </div>
          <button className="bg-primary text-white px-[28px] py-[12px] rounded border-primary">
            Help Center
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <GiHamburgerMenu
            style={{ color: "white" }}
            size={28}
            onClick={showDrawer}
          />
        </div>
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        closeIcon={false}
        placement="left"
        className="!bg-bgdark"
      >
       <div className="w-full flex flex-col gap-5 pb-2 border-b border-gray-600 ">
          <div className=" w-full flex items-center justify-between ">
            <div className="text-primary text-3xl font-normal uppercase leading-loose">
              Taxi App
            </div>
            <IoMdClose onClick={onClose} className="text-2xl cursor-pointer text-white" />
          </div>
        </div>
        <div className="mt-2 flex flex-col text-xl  lg:gap-8 gap-4  mobile-menu">
          <Menu style={{ width: "100% " }} mode="vertical" items={items}  />
        </div>
    
      </Drawer>
    </div>
  );
};

export default Header;
