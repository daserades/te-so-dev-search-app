import React from "react";
import "../styles/miniSearch.css";

const MiniSearch = ({ show, searchArray, searchQuery }) => {
  console.log(searchArray);

  let filteredSearchArray = searchArray.filter((item) => {
    return item[0].toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });

  return (
    <>
      <div className={`container mt-3 ${show ? "" : "d-none"}`}>
        <div className="row">
          <div className="col-md-10 searchArea">
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
            <p className="text-center">
              <strong>Show more ...</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniSearch;
