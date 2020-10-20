import React, { Component } from "react";
import "../../components/pagesCss/SignUp.css";
import axios from "axios";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      loading: false,
      username: "",
      phone: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showToast = this.showToast.bind(this);
  }

  showToast(text) {
    toast(text, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  signUpAPIAccess(email, password, phone, username) {
    this.setState({ loading: true });
    axios
      .post(
        "https://hotel-room-booking-system.herokuapp.com/api/v1.0/user/signup",
        {
          email,
          password,
          phone,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            languageId: "1",
            "Client-key": "4!R_45!4_T37K",
          },
        }
      )
      .then((res) => {
        this.setState({ loading: false });

        console.log(res.data);
        if (res.data.code === "0013") {
          this.showToast(res.data.message);
        }
        if (res.data.code === "0000") {
          this.showToast(`welcome ${res.data.username}`);
        }
        this.setState({
          username: res.data.data
            ? res.data.data.username
              ? res.data.data.username
              : ""
            : "",
        });
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.signUpAPIAccess(
      this.state.email,
      this.state.password,
      this.state.phone,
      this.state.username
    );
  }

  render() {
    return (
      <div className="auth-wrapper">
        <>
          <ToastContainer />
        </>
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Enter Username"
              />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-mail" /> Email address{" "}
              </label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label> Phone number</label>
              <input
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                type="phone"
                className="form-control"
                placeholder="Enter phone"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            {this.state.loading ? (
              <div className="text-center">
                <div
                  className="spinner-border spinner-border-sm text-primary"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            )}
            <p className="forgot-password text-right">
              Already registered
              <a href="/sign-in"> sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
