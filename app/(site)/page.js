import React from "react";
import Banner from "../components/home/banner";
import About from "../components/home/about";
import Download from "../components/home/download";
import Feature from "../components/home/feature";

const page = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Download/>
      <Feature/>
    </div>
  );
};

export default page;
