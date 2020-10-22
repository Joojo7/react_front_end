import React, { useState, useEffect, Component } from "react";

import axios from "axios";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import CardItem from "../../components/CardItem";
import "../../components/pagesCss/HotelRooms.css";

import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

import "../../components/pagesCss/SignUp.css";

function HotelRooms() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    axios
      .get(
        "https://hotel-room-booking-system.herokuapp.com/api/v1.0/hotels?pageSize=50",
        {
          headers: {
            "Content-Type": "application/json",
            languageId: "1",
            "Client-key": "4!R_45!4_T37K",
          },
        }
      )
      .then((res) => {
        setLoad(false);
        let hotelRow = [];
        let allHotelRooms = [];
        let formatedHotels = [];

        for (let i = 0; i < res.data.data.hotels.length; i++) {
          formatedHotels.push(
            <CardItem
              linkClass="hotel_cards__item__link"
              picWrapClass="hotel_cards__item__pic-wrap"
              key={res.data.data.hotels[i].hotel_id}
              src={res.data.data.hotels[i].hotel_image}
              value={res.data.data.hotels[i].hotel_name}
              text={res.data.data.hotels[i].hotel_name}
              roomAmount={res.data.data.hotels[i].number_of_rooms}
              label="PROMO"
              hotelStars={res.data.data.hotels[i].stars}
              path="/services"
            />
          );
        }

        let i,
          j,
          temparray,
          chunk = 5;
        for (i = 0, j = formatedHotels.length; i < j; i += chunk) {
          temparray = formatedHotels.slice(i, i + chunk);
          allHotelRooms.push(temparray);
        }

        setHotels(
          allHotelRooms.map((hotelRow, index) => (
            <ul key={index} className="cards__items">
              {hotelRow}
            </ul>
          ))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   handleSubmit(e) {
  //     e.preventDefault();
  //     this.signInAPiAcess(this.state.email, this.state.password);
  //   }

  return (
    <div>
      {loading ? (
        <div class="text-center">
          <div
            class="spinner-border spinner-border-sm text-primary"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="cards">
          <h1>Choose from these hotels</h1>
          <div className="cards__container">
            <div className="cards__wrapper">{hotels}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default HotelRooms;
