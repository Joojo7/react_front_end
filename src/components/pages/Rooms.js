import React, { useState, useEffect, Component } from "react";
import Footer from "../Footer";
import axios from "axios";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import CardItem from "../../components/CardItem";
import "../../components/pagesCss/Rooms.css";

import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

import "../../components/pagesCss/SignUp.css";

function Rooms(props) {
  console.log("props:", props);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    axios
      .get(
        `https://hotel-room-booking-system.herokuapp.com/api/v1.0/hotels/${props.match.params.id}`,
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
        let roomRow = [];
        let allRooms = [];
        let formatedRooms = [];

        for (let i = 0; i < res.data.data.rooms.length; i++) {
          formatedRooms.push(
            <CardItem
              linkClass="room_cards__item__link"
              picWrapClass="room_cards__item__pic-wrap"
              key={res.data.data.rooms[i].room_id}
              src={res.data.data.rooms[i].room_image}
              value={res.data.data.rooms[i].room_name}
              text={res.data.data.rooms[i].room_name}
              roomAmount={res.data.data.rooms[i].price}
              label="PROMO"
              path="/services"
            />
          );
        }

        let i,
          j,
          temparray,
          chunk = 5;
        for (i = 0, j = formatedRooms.length; i < j; i += chunk) {
          temparray = formatedRooms.slice(i, i + chunk);
          allRooms.push(temparray);
        }

        setRooms(
          allRooms.map((roomRow, index) => (
            <ul key={index} className="cards__items">
              {roomRow}
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
        <div className="roomCards">
          <h1>Choose from these rooms</h1>
          <div className="cards__container">
            <div className="cards__wrapper">{rooms}</div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Rooms;
