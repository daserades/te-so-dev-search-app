import React from "react";
import tesodevLogo from "../images/tesodev_lg.png";
import "../styles/landingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <img
            className="tesodev-logo mx-auto col-12"
            src={tesodevLogo}
            alt="Tesodev"
          />
        </div>
        <div className="row mt-3 d-flex">
          <input className="col-md-10 my-1 search-input" type="search" />
          <button className="col-md-2  btn my-1 float-end search-button">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
