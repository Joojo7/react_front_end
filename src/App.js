import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Hotels from './hotels.component'
import "./App.css";
import reactRouterDom from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import HotelRooms from "./components/pages/HotelRooms";
import Rooms from "./components/pages/Rooms";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/hotel-rooms" component={HotelRooms} />
          <Route path="/rooms/:id" component={Rooms} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
