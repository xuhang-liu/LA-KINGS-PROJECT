import React from "react";
import { IconText } from "../Components";
//import { Link } from "react-router-dom";

export function ButtonPanel(props) {
  var selectColor = "#090D3A";
  var defaultColor = "#7d7d7d";
  var selectDecoration = "underline";
  var defaultDecoration = "none";
  //var selectWeight = "600";
  //var defaultWeight = "normal";
  return (
    <div>
      <button
        type="button"
        className="resume-panel-btn"
        onClick={props.renderATS}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"15px"}
          textDisplayed={"ATS Findings"}
          textColor={props.subpage == "atsFindings" ? selectColor : defaultColor}
          textDecoration={props.subpage == "atsFindings" ? selectDecoration : defaultDecoration}
          textWeight={props.subpage == "atsFindings" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className="resume-panel-btn"
        onClick={props.renderRCF}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"15px"}
          textDisplayed={"Recruiter Findings"}
          textColor={props.subpage == "recFindings" ? selectColor : defaultColor}
          textDecoration={props.subpage == "recFindings" ? selectDecoration: defaultDecoration}
          textWeight={props.subpage == "recFindings" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className="resume-panel-btn"
        onClick={props.renderHSM}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"15px"}
          textDisplayed={"Hard Skills Match"}
          textColor={props.subpage == "hardSkills" ? selectColor : defaultColor}
          textDecoration={props.subpage == "hardSkills" ? selectDecoration: defaultDecoration}
          textWeight={props.subpage == "hardSkills" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className="resume-panel-btn"
        onClick={props.renderSSM}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"15px"}
          textDisplayed={"Soft Skills Match"}
          textColor={props.subpage == "softSkills" ? selectColor : defaultColor}
          textDecoration={props.subpage == "softSkills" ? selectDecoration: defaultDecoration}
          textWeight={props.subpage == "softSkills" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className="resume-panel-btn"
        onClick={props.renderOKW}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"15px"}
          textDisplayed={"Other Keywords"}
          textColor={props.subpage == "keywords" ? selectColor : defaultColor}
          textDecoration={props.subpage == "keywords" ? selectDecoration: defaultDecoration}
          textWeight={props.subpage == "keywords" ? selectColor : defaultColor}
        />
      </button>
    </div>
  );
};
