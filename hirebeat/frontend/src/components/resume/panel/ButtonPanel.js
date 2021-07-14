import React from "react";
import { IconText1 } from "../Components";
//import { Link } from "react-router-dom";

export function ButtonPanel(props) {
  var selectColor = "#ffffff";
  var defaultColor = "#090D3A";
  //var selectWeight = "600";
  //var defaultWeight = "normal";
  return (
    <div>
      <button
        type="button"
        className={props.subpage == "atsFindings" ? "resume-panel-btn1" : "resume-panel-btn"}
        onClick={props.renderATS}
        style={{marginBottom:"0", borderRadius:"10px 10px 0px 0px"}}
      >
        <IconText1
          textSize={"15px"}
          textDisplayed={"ATS Findings"}
          textColor={props.subpage == "atsFindings" ? selectColor : defaultColor}
          textWeight={props.subpage == "atsFindings" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className={props.subpage == "recFindings" ? "resume-panel-btn1" : "resume-panel-btn"}
        onClick={props.renderRCF}
        style={{marginTop:"-2px", marginBottom:"0"}}
      >
        <IconText1
          textSize={"15px"}
          textDisplayed={"Recruiter Findings"}
          textColor={props.subpage == "recFindings" ? selectColor : defaultColor}
          textWeight={props.subpage == "recFindings" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className={props.subpage == "hardSkills" ? "resume-panel-btn1" : "resume-panel-btn"}
        onClick={props.renderHSM}
        style={{marginTop:"-2px", marginBottom:"0"}}
      >
        <IconText1
          textSize={"15px"}
          textDisplayed={"Industry Knowledge"}
          textColor={props.subpage == "hardSkills" ? selectColor : defaultColor}
          textWeight={props.subpage == "hardSkills" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className={props.subpage == "softSkills" ? "resume-panel-btn1" : "resume-panel-btn"}
        onClick={props.renderSSM}
        style={{marginTop:"-2px", marginBottom:"0"}}
      >
        <IconText1
          textSize={"15px"}
          textDisplayed={"Tools and Techs"}
          textColor={props.subpage == "softSkills" ? selectColor : defaultColor}
          textWeight={props.subpage == "softSkills" ? selectColor : defaultColor}
        />
      </button>
      <button
        type="button"
        className={props.subpage == "keywords" ? "resume-panel-btn1" : "resume-panel-btn"}
        onClick={props.renderOKW}
        style={{marginTop:"-2px", borderRadius:"0px 0px 10px 10px"}}
      >
        <IconText1
          textSize={"15px"}
          textDisplayed={"Other Skills"}
          textColor={props.subpage == "keywords" ? selectColor : defaultColor}
          textWeight={props.subpage == "keywords" ? selectColor : defaultColor}
        />
      </button>
    </div>
  );
};
