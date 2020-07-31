import React, { useState } from "react";
import VideoPreviewList from "./VideoPreviewList";

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected" : "btn-unselected";
};

export const Analytics = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className="container d-flex justify-content-start">
        <button
          className={decideClassName(filter, "all")}
          style = {{width: "77px", height: "42px"}}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={decideClassName(filter, "expert")}
          style = {{width: "196px", height: "42px"}}
          onClick={() => setFilter("expert")}
        >
          Expert Analytics
        </button>
        <button
          className={decideClassName(filter, "ai")}
          style = {{width: "150px", height: "42px"}}
          onClick={() => setFilter("ai")}
        >
          AI Analytics
        </button>
      </div>
      <VideoPreviewList filter={filter} />
    </div>
  );
};
