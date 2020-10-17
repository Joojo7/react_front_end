import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Book your Flights, Hotels &amp; SNAP</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
        <Button
          className="btnn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          BOOK NOW
        </Button>
        <Button
          className="btnn"
          buttonStyle="btn--homcolor"
          buttonSize="btn--large"
        >
          CHECK PLACES <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
