import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function SelectQuoteIQ(props){
    const [filter, setFilter] = useState("Manager");
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
              className={decideClassName(filter, "Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
          <button
              className={decideClassName(filter, "Sales Agent")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Sales Agent")}
          >
              SA
          </button>
          <button
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Enrollment Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Enrollment Specialist")}
          >
              ES
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>What would someone say about you if you were given an award?</li></p>
                    <p className="companydata-text2"><li>Can you work a flexible schedule?</li></p>
                    <p className="companydata-text2"><li>Why are you interviewing for this position?</li></p>
                    <p className="companydata-text2"><li>How would you handle a response that they need to consult their spouse first before making a decision? </li></p>
                    <p className="companydata-text2"><li>What is CRM?H</li></p>
                    <p className="companydata-text2"><li>Are you the top performer at your current job?</li></p>
                </div>
            );
        case "Sales Agent":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Sales Agent</p>
                    <p className="companydata-text2"><li>Tell me about a time when you successfully overcome objections.</li></p>
                    <p className="companydata-text2"><li>How would your co-workers describe you?</li></p>
                    <p className="companydata-text2"><li>What makes you think you would be a good fit for the job?</li></p>
                    <p className="companydata-text2"><li>What can you tell me about yourself that is not on your resume?</li></p>
                    <p className="companydata-text2"><li>What do you like about sales/why are you in sales?</li></p>
                    <p className="companydata-text2"><li>Rank the importance to you of the following: money, recognition, promotion.</li></p>
                    <p className="companydata-text2"><li>What made you look for a job with SelectQuote?</li></p>
                    <p className="companydata-text2"><li>What is your overall philosophy about life insurance?</li></p>
                    <p className="companydata-text2"><li>Why should I hire you?</li></p>
                    <p className="companydata-text2"><li>What do you drive?</li></p>
                    <p className="companydata-text2"><li>Do you have an active P&C license for insurance?</li></p>
                    <p className="companydata-text2"><li>Why would you be a good fit?</li></p>
                    <p className="companydata-text2"><li>What challenges do you see with making sales over the phone?</li></p>
                    <p className="companydata-text2"><li>Three things that would help you be successful, with examples.</li></p>
                    <p className="companydata-text2"><li>Are you comfortable talking to people over 65?</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>How do you use React's "useEffect" hook?</li></p>
                    <p className="companydata-text2"><li>How would you render a list of users alphabetically?</li></p>
                    <p className="companydata-text2"><li>How do you determine where to store your app state? </li></p>
                    <p className="companydata-text2"><li>What kinds of things do you look for in PRs?</li></p>
                    <p className="companydata-text2"><li>When did you work your hardest?</li></p>
                </div>
            );
        case "Enrollment Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Enrollment Specialist</p>
                    <p className="companydata-text2"><li>How would previous coworkers describe you?</li></p>
                    <p className="companydata-text2"><li>What are three adjectives to describe your customer service skills?</li></p>
                    <p className="companydata-text2"><li>What are your career goals?</li></p>
                    <p className="companydata-text2"><li>If you were offered another job with the same pay and benefits, why would you choose Select Quote?</li></p>
                </div>
            );
    }
};
