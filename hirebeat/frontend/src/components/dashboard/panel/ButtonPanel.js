import React from "react";
import { IconText } from "../DashboardComponents";

function ButtonPanel(props) {
  var selectColor = "#538af2";
  var defaultColor = "#7d7d7d";
  return (
    <div>
      <button
        type="button"
        className="panel-button"
        onClick={props.renderVideos}
        style={{outline: "none"}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Interviews"}
          iconName={"video_library"}
          iconMargin={"4px"}
          textColor={props.subpage == "videos" ? selectColor : defaultColor}
        />
      </button>
      <br />
      <button
        type="button"
        className="panel-button"
        onClick={props.renderAnalytics}
        style={{outline: "none"}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Analytics"}
          iconName={"track_changes"}
          iconMargin={"4px"}
          textColor={props.subpage == "analytics" ? selectColor : defaultColor}
        />
      </button>
      <br />
      <button
        type="button"
        className="panel-button"
        onClick={props.renderResume}
        style={{outline: "none"}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Resume"}
          iconName={"text_snippet"}
          iconName={"portrait"}
          iconMargin={"4px"}
          textColor={props.subpage == "resume" ? selectColor : defaultColor}
        />
      </button>
      <br />
    </div>
  );
}

export default ButtonPanel;
