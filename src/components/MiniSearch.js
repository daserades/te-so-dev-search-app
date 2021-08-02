import React from "react";
import "../styles/miniSearch.css";

const MiniSearch = ({ show, searchArray }) => {
  return (
    <>
      <div className={`container mt-3 ${show ? "" : "d-none"}`}>
        <div className="row">
          <div className="col-md-10 searchArea">
            <ul>
              {searchArray.slice(0, 3).map((item, index) => {
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniSearch;
