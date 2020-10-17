import React from "react";
import "./ServicePanel.css";
import ServicePanelItem from "./ServicePanelItem";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function ServicePanel() {
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__wrapper">
          <h1>Travel</h1>

          <ul className="service__items">
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/flight_flat.svg"
              text="Flight"
              label="PROMO"
              path="/services"
            />

            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/snap_flat.svg"
              text="Land marks"
              label="PROMO"
              path="/services"
            />

            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/hotel_flat.svg"
              text="Hotels"
              label="PROMO"
              path="/services"
            />
            <ServicePanelItem
              src=" https://a.staticaa.com/images/misc/product-tiles/deals_flat.svg"
              text="Geals &amp; Promos"
              label="PROMO"
              path="/services"
            />
          </ul>
          <ul className="service__items"></ul>
          <h1>Finance</h1>
          <ul className="service__items">
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/bigpay_flat.svg"
              text="Big Pay"
              label="PROMO"
              path="/services"
            />

            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/insurance_flat.svg"
              text="Insurance"
              label="PROMO"
              path="/services"
            />
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/bigxchange_flat.svg"
              text="Big Exchange"
              label="PROMO"
              path="/services"
            />
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/bigloyalty_flat.svg"
              text="Big Royalty"
              label="PROMO"
              path="/services"
            />
          </ul>
          <ul className="service__items"></ul>
          <h1>Food</h1>
          <ul className="service__items">
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/ourfood_flat.svg"
              text="Food"
              label="PROMO"
              path="/services"
            />
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/fresh_flat.svg"
              text="Fresh Food"
              label="PROMO"
              path="/services"
            />
            <ServicePanelItem
              src="https://a.staticaa.com/images/misc/product-tiles/ourshop_flat.svg"
              text="Shop"
              label="PROMO"
              path="/services"
            />
          </ul>
          <ul className="service__items"></ul>
        </div>
      </div>
    </div>
  );
}

export default ServicePanel;
