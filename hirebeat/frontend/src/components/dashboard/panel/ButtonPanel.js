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
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Resume"}
          iconName={"resume"}
          textColor={props.subpage == "resume" ? selectColor : defaultColor}
        />
      </button>
      <br />
    </div>
  );
}

export default ButtonPanel;
