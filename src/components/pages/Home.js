import "../../App.css";
import HeroSection from "../HeroSection";
import React from "react";
import Cards from "../Cards";
import Footer from "../Footer";
import AddBanner from "../AddBanner";
import ServicePanel from "../ServicePanel";

function Home() {
  return (
    <>
      <HeroSection />
      <AddBanner/>
      <Cards />
      <ServicePanel/>
      <Footer />
    </>
  );
}

export default Home;
