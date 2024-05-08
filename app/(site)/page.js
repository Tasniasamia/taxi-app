import React from "react";
import Banner from "../components/home/banner";
import About from "../components/home/about";
import Download from "../components/home/download";

const page = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Download/>
    </div>
  );
};

export default page;
