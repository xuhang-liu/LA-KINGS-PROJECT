import React, { useState } from "react";
import VideoPreviewList from "./VideoPreviewList";
import { Link } from "react-router-dom";

const decideClassName = (filter, text) => {
  return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const Interview = () => {
  const [filter, setFilter] = useState("bq");
  return (
    <div>
      <div style={{marginBottom: "20px"}} className="container-xl justify-content-start pl-0">
        <div className="row">
        <div className="col-9">
        <button
          data-tut="reactour-bq"
          className={decideClassName(filter, "bq")}
          style = {{outline: "none", borderRadius: "2px", marginRight:"2rem"}}
          onClick={() => setFilter("bq")}
        >
          Behavioral Questions
        </button>
        <button
          data-tut="reactour-tq"
          className={decideClassName(filter, "tq")}
          style = {{outline: "none", borderRadius: "2px"}}
          onClick={() => setFilter("tq")}
        >
          Technical Questions
        </button>
        </div>
        <div className="col-3">
        <Link to="/practice">
        <button className="default-btn float-xl-right" data-tut="reactour-practice">
            <i className="bx bx-plus"></i> 
             New Practice
            <span></span>
        </button>
        </Link>
        </div>
        </div>
      </div>
      <VideoPreviewList filter={filter}/>
    </div>
  );
};
