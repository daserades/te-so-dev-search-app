import React, { useState, useEffect } from "react";
import tesodevLogo from "../images/tesodev_lg.png";
import "../styles/landingPage.css";
import MiniSearch from "../components/MiniSearch";
import axios from "axios";

const LandingPage = () => {
  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchArray, setSearchArray] = useState([]);

  const handleMiniSearch = () => {
    if (searchQuery.length >= 3) {
      setShowMiniSearch(true);
      document.querySelector(".error-message").innerHTML = "";
    } else
      document.querySelector(".error-message").innerHTML =
        '<p class="text-danger">You must enter at least 3 letters to search.</p>';
  };

  const handleSearhWord = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    axios("mockData.json").then((res) => setSearchArray(res.data.data));
  }, []);

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
          <input
            className="col-md-10 my-1 search-input rounded-3"
            placeholder="Search by name ..."
            type="searh"
            minLength="3"
            id="search"
            onChange={handleSearhWord}
          />
          <button
            type="submit"
            onClick={handleMiniSearch}
            className="col-md-2 btn my-1 rounded-3 float-end search-button"
          >
            Search
          </button>
          <div className="error-message"></div>
        </div>
      </div>
      <MiniSearch searchArray={searchArray} show={showMiniSearch} searchQuery={searchQuery} />
    </>
  );
};

export default LandingPage;
