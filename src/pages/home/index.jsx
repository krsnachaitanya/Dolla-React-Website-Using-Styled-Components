import React from "react";
import HeroSection from "../../components/hero-section";
import InfoSection from "../../components/info-section";
import { homeObjOne } from "../../components/info-section/data";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
    </>
  );
};

export default HomePage;
