import React from "react";
import { IconText } from "../DashboardComponents";
//import {PanelSelect} from "../DashboardComponents";
import { Link } from "react-router-dom";
import MediaQuery from 'react-responsive';

function ButtonPanel(props) {
  // video & audio save left
  var save_limit = props.profile.save_limit;
  var saved_video = props.profile.saved_video_count;
  var saves_left = 0;
  if(Number(save_limit)>900){
    saves_left = "unlimited";
  }else{
    if((Number(save_limit) - Number(saved_video))>0){
      saves_left = Number(save_limit) - Number(saved_video);
    }
  }

  // resume save left
  var cv_save_limit = props.profile.save_resume_limit;
  var saved_resume = props.profile.saved_resume_count;
  var cv_saves_left = 0;
  if (Number(cv_save_limit) > 900) {
      cv_saves_left = "unlimited";
  } else {
      if((Number(cv_save_limit) - Number(saved_resume)) > 0){
          cv_saves_left = Number(cv_save_limit) - Number(saved_resume);
      }
  }

  var selectColor = "#090D3A";
  var defaultColor = "#7d7d7d";
  var selectDecoration = "underline";
  var defaultDecoration = "none";
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
      <button
        type="button"
        className="panel-button"
        onClick={props.renderVideos}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Interview"}
          iconName={"bx bx-slideshow 1 bx-md"}
          iconMargin={"4px"}
          textColor={props.subpage == "videos" ? selectColor : defaultColor}
          textDecoration={props.subpage == "videos" ? selectDecoration : defaultDecoration}
        />
      </button>
      <br />
      {/* <button
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
      <br /> */}
      <button
        type="button"
        className="panel-button"
        onClick={props.renderResume}
        style={{outline: "none", margin:"1%"}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Resume"}
          iconName={"bx bx-file 1 bx-md"}
          iconMargin={"4px"}
          textColor={props.subpage == "resume" ? selectColor : defaultColor}
          textDecoration={props.subpage == "resume" ? selectDecoration: defaultDecoration}
        />
      </button>
      <br />
      {props.subpage == 'videos' &&
        <Link to="/practice">
          <a className="default-btn" 
          style={{color:"white", backgroundColor:"#090D3A"}}>
            <i className="bx bxs-hot"></i> 
            New Practice
            <span></span>
          </a>
        </Link>
      }

      {props.subpage == 'resume' &&
        <Link to="#">
          <a className="default-btn" 
          style={{color:"white", backgroundColor:"#090D3A", marginLeft:"4%"}}>
            <i className="bx bxs-hot"></i> 
            New Scan
            <span></span>
          </a>
        </Link>
      }

      {props.profile.membership == 'Regular' &&
        <div className="col-12">
          <div className="row">
            <div className="col-5" style={{padding:"0%"}}>
              {props.subpage == "videos" ? <p style={{color:"#7D7D7D", fontSize:"12px"}}>Saves Left: {saves_left}</p> : null}
              {props.subpage == "resume" ? <p style={{color:"#7D7D7D", fontSize:"12px"}}>Saves Left: {cv_saves_left}</p> : null}
            </div>

            <div className="col-6" style={{padding:"0%"}}>
              <Link to="/pricing" style={{textDecoration: "none"}}>
                <p style={{color:"#FF6B00", fontSize:"12px"}}>Upgrade -></p>
              </Link>
            </div>
          </div>
        </div>
      }
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1223}>
      <button
        type="button"
        onClick={props.renderVideos}
        style={{outline: "none", margin:"1%", backgroundColor:'white', border:"none", cursor:'pointer', textAlign:'center', paddingBottom:'1.5rem'}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Interview"}
          iconName={"bx bx-slideshow 1 bx-md"}
          iconMargin={"4px"}
          textColor={props.subpage == "videos" ? selectColor : defaultColor}
          textDecoration={props.subpage == "videos" ? selectDecoration : defaultDecoration}
        />
      </button>
      <button
        type="button"
        onClick={props.renderResume}
        style={{outline: "none", margin:"1%", backgroundColor:'white', border:"none", cursor:'pointer', textAlign:'center', paddingBottom:'1.5rem'}}
      >
        <IconText
          textSize={"18px"}
          textDisplayed={"Resume"}
          iconName={"bx bx-file 1 bx-md"}
          iconMargin={"4px"}
          textColor={props.subpage == "resume" ? selectColor : defaultColor}
          textDecoration={props.subpage == "resume" ? selectDecoration: defaultDecoration}
        />
      </button>
      </MediaQuery>
    </div>
  );
}

export default ButtonPanel;
