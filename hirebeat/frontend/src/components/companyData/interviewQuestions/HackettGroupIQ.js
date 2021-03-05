import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function HackettGroupIQ(props){
    const [filter, setFilter] = useState("Consultant");
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
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Director")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Director")}
          >
              Director
          </button>
          <button
              className={decideClassName(filter, "Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to become a consultant?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you when you have no consulting experience?.</li></p>
                    <p className="companydata-text2"><li>How long have you been working in consulting?</li></p>
                    <p className="companydata-text2"><li>The most critical feedback received from your manager/team members.</li></p>
                    <p className="companydata-text2"><li>Tell us the Implementation experience which you did in your previous company? What are the challenges you faced during the Implementation?</li></p>
                    <p className="companydata-text2"><li>What are the business processes you mapped as part of the projects?</li></p>
                    <p className="companydata-text2"><li>Why Hackett?</li></p>
                    <p className="companydata-text2"><li>Tell me three words by which I should remember you.</li></p>
                    <p className="companydata-text2"><li>Explain a time you overcame a challenge at work.</li></p>
                    <p className="companydata-text2"><li>Pricing procedure in SAP.</li></p>
                    <p className="companydata-text2"><li>How did the Glass-Steagall Act affect recovery during the Great Depression?</li></p>
                </div>
            );
        case "Director":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time you put the customer’s needs ahead of your own.</li></p>
                    <p className="companydata-text2"><li>Are you willing to travel?</li></p>
                    <p className="companydata-text2"><li>Please explain a situation where you had to deliver an unpleasant message to a client and how you communicated it.</li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your ideal job?</li></p>
                    <p className="companydata-text2"><li>Walk a client through a mock "usage summary.”</li></p>
                </div>
            );
    }
};
