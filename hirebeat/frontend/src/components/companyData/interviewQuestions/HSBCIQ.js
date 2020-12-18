import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function HSBCIQ(props){
    const [filter, setFilter] = useState("b.Investment Banking Analyst");
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
              className={decideClassName(filter, "Investment Banking Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Investment Banking Analyst")}
          >
              IBA
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
          <button
              className={decideClassName(filter, "Data Scientist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Data Scientist")}
          >
              DS
          </button>
          <button
              className={decideClassName(filter, "Personal Banker")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Personal Banker")}
          >
              Banker
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Investment Banking Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Analyst</p>
                    <p className="companydata-text2"><li>What would you do if your boss told you that a client wants to expand in the European market telecom?</li></p>
                    <p className="companydata-text2"><li>What would you do to create trust?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>Why did you apply for the position?</li></p>
                    <p className="companydata-text2"><li>What is one of your strengths?</li></p>
                    <p className="companydata-text2"><li>Can you describe a difficult situation where you showed leadership?</li></p>
                    <p className="companydata-text2"><li>What would you decide to do if there was an important project to be delivered, but legally you should have waited for some legal approval first which required time?</li></p>
                    <p className="companydata-text2"><li>How will you establish a client relationship as the company's original manager leaves and you are taking over?</li></p>
                    <p className="companydata-text2"><li>Would you rather complete a task quickly, always meet the deadline, or spend more time on it to provide higher quality work?</li></p>
                    <p className="companydata-text2"><li>Where would you like to travel?</li></p>
                    <p className="companydata-text2"><li>How would you act if your team has a conflict?</li></p>
                    <p className="companydata-text2"><li>Coworker on parental leave, how to handle new clients?</li></p>
                    <p className="companydata-text2"><li>What information do you need to analyze large data sets?</li></p>
                    <p className="companydata-text2"><li>Give a self-introduction under 3 mins.</li></p>
                    <p className="companydata-text2"><li>Name one place you would want to visit right now.</li></p>
                </div>
            );
        case "Data Scientist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Scientist</p>
                    <p className="companydata-text2"><li>What would you do in XYZ situation?</li></p>
                    <p className="companydata-text2"><li>When was the time you took the initiative to achieve a goal?</li></p>
                    <p className="companydata-text2"><li>What is your biggest strength, and how does it apply to HSBC?</li></p>
                    <p className="companydata-text2"><li>Please tell us about a time you worked in a team?</li></p>
                </div>
            );
        case "Personal Banker":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Personal Banker</p>
                    <p className="companydata-text2"><li>Why do you want to work at HSBC?</li></p>
                    <p className="companydata-text2"><li>Reasons for leaving your last job?</li></p>
                    <p className="companydata-text2"><li>Why do you think we should hire you?</li></p>
                </div>
            );
    }
};
