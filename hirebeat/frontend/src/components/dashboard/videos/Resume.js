import React, { useState } from "react";

export const Resume = () => {
  return (
    <React.Fragment>
    <div>
      <div className="container d-flex justify-content-start">
      <p style={{fontSize: "1.6rem", marginLeft: "20%", marginTop: "5%"}}>Feature is coming soon!</p>
      </div>
    </div>
    <div style={{marginTop:"5%", marginLeft:"3%"}}>
                <h3>Let's Start Your Resume Match</h3>

                <form id="contactForm">
                    <div className="row">
                    <textarea type="text" name="resume" id="resume" style={{height: "10rem"}} className="form-control" placeholder="Copy and Paste your Resume text here" required />
                    </div>
                    <div className="row">
                    <textarea type="text" name="jobd" id="jobd" style={{height: "10rem"}} className="form-control" placeholder="Copy and Paste the Job Description text here" required />
                    </div>
                    <button className="default-btn" style={{marginTop: "2%"}}>
                    <i className="bx bxs-hot"></i>
                      Start Match Now
                    <span></span>
                  </button>
                </form>
     </div>
                  
    </React.Fragment>
  );
};
