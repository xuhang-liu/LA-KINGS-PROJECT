import React, { useState } from "react";
import VideoPreviewList from "./VideoPreviewList";

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected" : "btn-unselected";
};

export const Interview = () => {
  const [filter, setFilter] = useState("bq");
  return (
    <div>
      <div style={{marginBottom: "20px"}} className="container d-flex justify-content-start">
        <button
          className={decideClassName(filter, "bq")}
          style = {{outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("bq")}
        >
          Behavior Questions
        </button>
        <button
          className={decideClassName(filter, "tq")}
          style = {{outline: "none", borderRadius: "5px"}}
          onClick={() => setFilter("tq")}
        >
          Technique Questions
        </button>
      </div>
      <VideoPreviewList filter={filter} />
    </div>
  );
};
