import React, { useState } from "react";
import VideoPreviewList from "./VideoPreviewList";

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected" : "btn-unselected";
};

export const Interview = () => {
  const [filter, setFilter] = useState("bq");
  return (
    <div>
      <div style={{marginBottom: "20px"}} className="container d-flex justify-content-start pl-0">
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
      <VideoPreviewList filter={filter}/>
    </div>
  );
};
