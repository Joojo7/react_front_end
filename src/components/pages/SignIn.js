import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import "../../components/pagesCss/SignUp.css";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      email: "",
      loading: false,
      username: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  signInAPiAcess(email, password) {
    this.setState({ loading: true });
    axios
      .post(
        "https://hotel-room-booking-system.herokuapp.com/api/v1.0/user/signin",
        {
          email_phone: email,
          password: password,
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
        console.log(res.data);
        this.setState({ loading: false });
        this.setState({
          username: res.data.data
            ? res.data.data.username
              ? res.data.data.username
              : ""
            : "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.signInAPiAcess(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
              <label>Email address</label>
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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            {this.state.loading ? (
              <div class="text-center">
                <div
                  class="spinner-border spinner-border-sm text-primary"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            )}

            {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p> */}
            <p className="forgot-password text-left">
              <a href="#">Forgot password </a>
              Dont have an account ?<a href="/sign-up"> sign up!</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
