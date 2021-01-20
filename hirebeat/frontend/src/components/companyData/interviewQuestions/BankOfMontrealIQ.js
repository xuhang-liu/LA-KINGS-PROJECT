import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BankOfMontrealIQ(props){
    const [filter, setFilter] = useState("Q1");
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
              className={decideClassName(filter, "Q1")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q1")}
          >
              Q1
          </button>
          <button
              className={decideClassName(filter, "Q2")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q2")}
          >
              Q2
          </button>
          <button
              className={decideClassName(filter, "Q3")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q3")}
          >
              Q3
          </button>
          <button
              className={decideClassName(filter, "Q4")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q4")}
          >
              Q4
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Q1":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a time when your work was criticized.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you failed.</li></p>
                    <p className="companydata-text2"><li>What is your availability?</li></p>
                    <p className="companydata-text2"><li>What was your most rewarding experience working with a team?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you?</li></p>
                    <p className="companydata-text2"><li>How do you handle stress?</li></p>
                    <p className="companydata-text2"><li>How well do you work under pressure?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a goal you achieved. What steps did you take to get there?</li></p>
                    <p className="companydata-text2"><li>How do you respond to a customer complaint?</li></p>
                    <p className="companydata-text2"><li>What is your greatest accomplishment so far?</li></p>
                    <p className="companydata-text2"><li>How do you build relationships when you join a new team?</li></p>
                    <p className="companydata-text2"><li>Out of all of our products, which one would you be most likely to use? Why?</li></p>
                    <p className="companydata-text2"><li>In your opinion, what are the benefits of banking with the Bank of Montreal?</li></p>
                    <p className="companydata-text2"><li>How do you stay up to date in the banking industry?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a significant change that occurred in a job that you held. How did you adapt to this change?</li></p>
                    <p className="companydata-text2"><li>How would you deal with a conflict with your coworker?</li></p>
                    <p className="companydata-text2"><li>How do you keep yourself motivated?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to learn a new skill in a short time.</li></p>
                    <p className="companydata-text2"><li>Tell me about your education.</li></p>
                    <p className="companydata-text2"><li>Give me an example of a time you demonstrated your integrity.</li></p>
                    <p className="companydata-text2"><li>Tell us how you keep your job knowledge current with ongoing changes in the industry.</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Think about a demanding boss, professor, or another person. What made him or her difficult? How did you successfully interact with this person?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when your listening skills helped you solve a problem.</li></p>
                    <p className="companydata-text2"><li>What is your mission statement?</li></p>
                    <p className="companydata-text2"><li>What do you know about the Bank of Montreal?</li></p>
                </div>
            );
    }
};
