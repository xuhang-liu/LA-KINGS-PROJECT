import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AIGIQ(props){
    const [filter, setFilter] = useState("Business Analyst");
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
              className={decideClassName(filter, "Business Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Analyst")}
          >
              BA
          </button>
          <button
              className={decideClassName(filter, "Technology Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Technology Analyst")}
          >
              TA
          </button>
          <button
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Actuarial")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Actuarial")}
          >
              Actuarial
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>What is the difference between R squared and R squared Adjusted?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>What did you learn from your previous company?</li></p>
                    <p className="companydata-text2"><li>How do you communicate with Developers and Testers?</li></p>
                    <p className="companydata-text2"><li>What is your skill level of proficiency in MS Office?</li></p>
                    <p className="companydata-text2"><li>How do you keep yourself organized?</li></p>
                    <p className="companydata-text2"><li>Tell me about your previous experience of working as a Business Analyst. </li></p>
                    <p className="companydata-text2"><li>What would you do to increase revenues?</li></p>
                    <p className="companydata-text2"><li>Have you ever done a cost-benefit analysis for an organization?</li></p>
                    <p className="companydata-text2"><li>What was the most challenging assignment you failed to deliver?</li></p>
                </div>
            );
        case "Technology Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Technology Analyst</p>
                    <p className="companydata-text2"><li>Tell me about a time when you had two important conflicting things happening at the same time. How did you resolve it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to admit something, and explain the ramifications of what happened? </li></p>
                    <p className="companydata-text2"><li>What is your proudest accomplishment so far?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time, either academically or personally where you used Excel/VBA for a project. </li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you were in a group while someone was slacking off. How did you handle the situation?</li></p>
                    <p className="companydata-text2"><li>What technology do you currently like the most?</li></p>
                    <p className="companydata-text2"><li>What is the difference between a negative flow and an alternate flow in a use case diagram?</li></p>
                </div>
            );
        case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>Have you worked in a job where your performance is monitored/measured?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to go above and beyond for your company.</li></p>
                    <p className="companydata-text2"><li>What do you think will be the hardest part of going back to the call center from retail?</li></p>
                    <p className="companydata-text2"><li>What do you think the three most important traits of a leader should be?</li></p>
                    <p className="companydata-text2"><li>How do you handle difficult customers?</li></p>
                    <p className="companydata-text2"><li>Is there a time at your previous employer when you exhibited an exemplary attitude?</li></p>
                </div>
            );
        case "Actuarial":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell us a time when you overcame adversity. What did you do?</li></p>
                    <p className="companydata-text2"><li>What is your process of studying for your exams?  </li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to work with a group of people, and you faced some challenges working together. What did you do?</li></p>
                    <p className="companydata-text2"><li>What could you do to improve the profitability of travel insurance?</li></p>
                    <p className="companydata-text2"><li>Describe a time where you did something innovative that relates to the position you’re applying for. </li></p>
                    <p className="companydata-text2"><li>What would you do to address a problem in a new and innovative way? </li></p>
                    <p className="companydata-text2"><li>If you are given a project with a tight deadline with limited information or guidance, what would you do?</li></p>
                </div>
            );
    }
};
