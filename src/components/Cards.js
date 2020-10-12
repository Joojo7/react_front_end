import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these spots</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the Jungle and its beatiful waterfall. Its hidden deep in the amazon"
              label="PROMO"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Beautiful IsLand"
              label="10% OFF"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Mountain Scape"
              label="50% OFF"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Deep blue"
              label="30% OFF"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Tennis on the rocks"
              label="PROMO"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
