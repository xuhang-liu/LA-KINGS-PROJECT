import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AnalysisGroupIQ(props){
    const [filter, setFilter] = useState("Litigation Support Specialist");
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
              className={decideClassName(filter, "Litigation Support Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Litigation Support Specialist")}
          >
              LSS
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Litigation Support Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Litigation Support Specialist</p>
                    <p className="companydata-text2"><li>Tell me about a time you made a mistake and what you did to resolve it.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had a different work style than a coworker and what you did to overcome it.</li></p>
                    <p className="companydata-text2"><li>Why is litigation consulting?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to work at Cornerstone?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in economic consulting?</li></p>
                    <p className="companydata-text2"><li>What is your favorite book?</li></p>
                    <p className="companydata-text2"><li>How would you think about fraudulent cryptocurrency trading and estimate the costs of it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a research project you’re working on.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you worked with data?</li></p>
                    <p className="companydata-text2"><li>Tell me about your dissertation.</li></p>
                    <p className="companydata-text2"><li>What's your favorite module at university?</li></p>
                    <p className="companydata-text2"><li>Tell me something about you that's not on your CV.</li></p>
                    <p className="companydata-text2"><li>What would you say is one of your weaknesses, and how do you work to overcome it?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you led a team and how you did it.</li></p>
                    <p className="companydata-text2"><li>How would you spot collusion?</li></p>
                    <p className="companydata-text2"><li>Tell us about your research experience.</li></p>
                    <p className="companydata-text2"><li>What other positions are you applying for?</li></p>
                    <p className="companydata-text2"><li>Talked with me about a case involving a car company being sued for higher than advertised emissions on eco-friendly vehicles. </li></p>
                    <p className="companydata-text2"><li>Could you tell me a bit about yourself?</li></p>
                    <p className="companydata-text2"><li>Why is economics consulting over management consulting?</li></p>
                    <p className="companydata-text2"><li>How would you determine if there was collusion in the X industry?</li></p>
                    <p className="companydata-text2"><li>How do you see Cornerstone fits in your long-term goal?</li></p>
                    <p className="companydata-text2"><li>Our client's shareholders sued our client because stocks went down and didn't disclose crucial negative information. What data would you look for to try to attribute the drop in supplies to other factors, and how would we calculate the but-for?</li></p>
                    <p className="companydata-text2"><li>What are some risks associated with this company move?</li></p>
                    <p className="companydata-text2"><li>Highlight something on your resume you want to discuss.</li></p>
                    <p className="companydata-text2"><li>Describe your most challenging experience in economics or statistics.</li></p>
                </div>
            );
    }
};
