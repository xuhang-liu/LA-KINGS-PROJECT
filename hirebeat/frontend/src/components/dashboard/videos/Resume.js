import React, { useState } from "react";
import resume_match from "../../../assets/resume-match.png";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function comingAlert () {
  confirmAlert({
    title: 'Feature is coming soon',
    buttons: [
      {
        label: 'Ok'
      }
    ]
    });
  };

export const Resume = () => {
  return (
    <React.Fragment>
      <div className="container d-flex justify-content-start" style={{marginTop:"2%"}}>
        <div className="col-2">
          <img src={resume_match} alt="image" />
        </div>
        <div className="col-10" style={{fontFamily: "Poppins" }}>
          <div className="row">
            <h3>Product Designer</h3>
          </div>
          <div className="row">
            <div className="col-9">
              <p style={{color:"#7D7D7D"}}>Job Description: At Lyft, our mission is to improve people’s lives...</p>
            </div>
            <div className="col-2" style={{color:"#7D7D7D", borderLeft:"outset"}}>
              <p>May 30</p>
            </div>
          </div>
          <div className="row">
            <button onClick={comingAlert} className="reviewed text-15" style={{width:"8rem", color:'#FFFFFF', marginTop:"2%",display:"inline-block"}}>
              View Result  
            </button>
          </div>
        </div>
      </div>                  
    </React.Fragment>
  );
};
