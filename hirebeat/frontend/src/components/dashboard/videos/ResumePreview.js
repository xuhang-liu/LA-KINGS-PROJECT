import React from "react";
import { OverallScore } from "./../DashboardComponents";

export const ResumePreview = (props) => {
  return (
      <div className="container d-flex justify-content-start" style={{marginTop:"2%"}}>
        <div className="col-2">
          <OverallScore percent={props.percent} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
        </div>
        <div className="col-10" style={{fontFamily: "Poppins" }}>
          <div>
            <h3>{props.jobTitle}</h3>
          </div>
          <div className="row">
            <div className="col-9">
              <p style={{color:"#7D7D7D"}}>{props.jdText}</p>
            </div>
            <div className="col-3" style={{color:"#7D7D7D", borderLeft:"outset"}}>
              <p>{props.createdAt}</p>
            </div>
          </div>
          <div>
            {
              props.reviewed ? (
              <button onClick={props.vieResult} className="reviewed text-15 resume-btn">
                View Result
              </button>) : (
              <button className="under-review text-15 resume-btn" disabled={true}>
                Ready in 2 min
              </button>)
            }
          </div>
        </div>
      </div>
  );
};