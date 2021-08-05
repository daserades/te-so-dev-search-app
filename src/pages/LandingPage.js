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
      document.querySelector(".error-message").innerHTML = "";
    } else {
      document.querySelector(".error-message").innerHTML =
        '<p class="text-danger">You must enter at least 3 letters to search.</p>';
    }
  };

  // Min. Letter Control
  useEffect(() => {
    if (searchQuery.length >= 3) {
      document.querySelector(".error-message").innerHTML = "";
      setShowMiniSearch(true);
    } else {
      document.querySelector(".error-message").innerHTML =
        '<p class="text-danger">You must enter at least 3 letters to search.</p>';
      setShowMiniSearch(false);
    }
  }, [searchQuery]);

  const handleSearchWord = (e) => {
    setSearchQuery(e.target.value);
  };

  // Fetch mockData.json
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios("mockData.json");
      setSearchArray(res.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <img
            className="tesodev-logo-lg mx-auto col-12"
            src={tesodevLogo}
            alt="Tesodev"
          />
        </div>
        <div className="row mt-3 ">
          <div className="d-flex">
            <input
              className="col-md-9 my-1 search-input rounded-3"
              placeholder="Search by name ... (ex: 'bre', 'vin')"
              type="searh"
              minLength="3"
              id="search"
              onChange={handleSearchWord}
            />
            <button
              type="submit"
              onClick={handleMiniSearch}
              className="col-md-2 btn my-1 rounded-3 ms-3 float-end search-button"
            >
              Search
            </button>
          </div>
        </div>
        <div className="error-message"></div>
        <div className="mb-4">
          <MiniSearch
            searchArray={searchArray}
            show={showMiniSearch}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
