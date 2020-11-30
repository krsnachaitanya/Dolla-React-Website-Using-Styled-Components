import React from "react";
import HeroSection from "../../components/hero-section";
import InfoSection from "../../components/info-section";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../../components/info-section/data";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default HomePage;
