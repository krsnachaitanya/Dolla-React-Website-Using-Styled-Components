import React from "react";
import HeroSection from "../../components/hero-section";
import InfoSection from "../../components/info-section";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../../components/info-section/data";
import Navbar from "../../components/navbar";
import Services from "../../components/services";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default HomePage;
