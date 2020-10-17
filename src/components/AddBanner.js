import React from "react";
import "./AddBanner.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function AddBanner() {
  return (
    <div className="AddBanner-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner2.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner4.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AddBanner;
