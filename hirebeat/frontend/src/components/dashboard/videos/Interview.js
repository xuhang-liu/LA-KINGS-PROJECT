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
          className={decideClassName(filter, "bq")}
          style = {{outline: "none", borderRadius: "2px"}}
          onClick={() => setFilter("bq")}
        >
          Behavioral Questions
        </button>
        <button
          className={decideClassName(filter, "tq")}
          style = {{outline: "none", borderRadius: "2px"}}
          onClick={() => setFilter("tq")}
        >
          Technical Questions
        </button>
        </div>
        <div className="col-3">
        <Link to="/practice">
        <button className="default-btn float-xl-right">
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
