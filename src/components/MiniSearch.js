import React from "react";
import "../styles/miniSearch.css";
import {Link} from "react-router-dom"

const MiniSearch = ({ show, searchArray, searchQuery }) => {

  let filteredSearchArray = searchArray.filter((item) => {
    return item[0].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  return (
    <>
      <div className={`container mt-3 ${show ? "" : "d-none"}`}>
        <div className="row">
          <div className="col-md-9 ms-1 searchArea">
            <ul>
              {filteredSearchArray.slice(0, 3).map((item, index) => {
                return (
                  <li key={index}>
                    <p className="mt-2">
                      <strong>{item[0]}</strong>
                    </p>{" "}
                    <p className="d-inline float-end">{item[2]}</p>
                    <p>{item[1]}</p>
                    <p className="d-inline">
                      {item[4]} / {item[5]}
                    </p>
                    <p className="float-end">
                      <i>{item[3]}</i>
                    </p>
                    <hr />
                  </li>
                );
              })}
            </ul>
            <Link to={{
              pathname:"/results",
              state:{
                searchFilteredArray : filteredSearchArray
              }
            }}>
              <p className="text-center">
                <strong>Show more ...</strong>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniSearch;
