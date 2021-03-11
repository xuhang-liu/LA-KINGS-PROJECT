import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ICGInternationalIQ(props){
    const [filter, setFilter] = useState("Research Assistant");
    return(
        <div style={{marginTop: '5%'}}>
            <h3 className="companydata-text1">Interview Questions</h3>
            {SwitchButton(filter, setFilter)}
            {renderContent(filter)}
            <div className="row" style={{marginTop: "0.5rem"}}>
                <div className="col-lg-7 col-md-7 align-center">
                    <p className="companydata-text5">View more and prepare your answer</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <Link to="/practice">
                        <a className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A"}}>
                            <i className="bx bxs-hot"></i>
                            Practice Now
                            <span></span>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="row" style={{marginTop: "0.5rem"}}>
                <div className="col-lg-7 col-md-7 align-center">
                    <p className="companydata-text5">Improve your resume matching rate</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <Link to="/resume">
                        <a className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A"}}>
                            <i className="bx bxs-hot"></i>
                            Optimize Now
                            <span></span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
};

const SwitchButton = (filter, setFilter)=>{
  return(
      <div style={{marginBottom: "5px"}} className="container d-flex justify-content-start">
          <button
              className={decideClassName(filter, "Research Assistant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Research Assistant")}
          >
              RA
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Manager")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Research Assistant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Research Assistant</p>
                    <p className="companydata-text2"><li>Explain your research background.</li></p>
                    <p className="companydata-text2"><li>When have you been outside of your comfort zone, and what did you do?</li></p>
                    <p className="companydata-text2"><li>Name one experience where you worked on a team, and it was challenging.</li></p>
                    <p className="companydata-text2"><li>Why are you interested in working here?</li></p>
                    <p className="companydata-text2"><li>How do you manage your time?</li></p>
                    <p className="companydata-text2"><li>Give an example of how you overcame a challenging situation or failure.</li></p>
                    <p className="companydata-text2"><li>How does your experience relate to this line of work?</li></p>
                    <p className="companydata-text2"><li>How do you manage to work on different projects?</li></p>
                    <p className="companydata-text2"><li>What are the weaknesses when it comes to the workplace?</li></p>
                    <p className="companydata-text2"><li>What are three things you bring to the team that is different from other candidates?</li></p>
                    <p className="companydata-text2"><li>Tell me about an experience you had with a difficult coworker.</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>What skills do you apply to your work?</li></p>
                    <p className="companydata-text2"><li>What is one word you would use to describe yourself?</li></p>
                    <p className="companydata-text2"><li>How would you evaluate your success over the next year if you were in this position?</li></p>
                    <p className="companydata-text2"><li>Describe a time you resolved a challenge for a client.</li></p>
                    <p className="companydata-text2"><li>Have you ever experienced issues with a manager in the past, and why?</li></p>
                    <p className="companydata-text2"><li>Do you have any interest in the policies surrounding our contract?</li></p>
                    <p className="companydata-text2"><li>How do you handle working under pressure?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>What are three strengths and three weaknesses?</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your current position?</li></p>
                    <p className="companydata-text2"><li>How do you approach a research project?</li></p>
                    <p className="companydata-text2"><li>How do you handle challenges with upper management?</li></p>
                    <p className="companydata-text2"><li>How did you handle a challenging work environment, and how would you have handled it differently?</li></p>
                    <p className="companydata-text2"><li>How to design a complete end-to-end optimization system with solver tools and database design?</li></p>
                    <p className="companydata-text2"><li>How long are you willing to fail at this job before you succeed?</li></p>
                    <p className="companydata-text2"><li>How could you best contribute to the firm?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>What motivates you to seek this position?</li></p>
                    <p className="companydata-text2"><li>What do you know about the company?</li></p>
                    <p className="companydata-text2"><li>What are you going to miss the most from your previous job?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe your experience with business development/managing proposals.</li></p>
                    <p className="companydata-text2"><li>Describe a difficulty or challenge you faced in previous employment and how you overcame the challenge?</li></p>
                    <p className="companydata-text2"><li>What is your management style like?</li></p>
                    <p className="companydata-text2"><li>What is the future for the industry?</li></p>
                    <p className="companydata-text2"><li>How do you see yourself balancing work and home life and prioritizing work responsibilities: project management, business development, and staff development?</li></p>
                </div>
            );
    }
};
