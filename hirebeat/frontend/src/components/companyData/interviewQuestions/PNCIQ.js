import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function PNCIQ(props){
    const [filter, setFilter] = useState("Bank Teller");
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
              className={decideClassName(filter, "Bank Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Bank Teller")}
          >
              BT
          </button>
          <button
              className={decideClassName(filter, "Software Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Developer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Mortgage Underwriter")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Mortgage Underwriter")}
          >
              MU
          </button>
          <button
              className={decideClassName(filter, "Asset Management Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Asset Management Analyst")}
          >
              AMA
          </button>
          <button
              className={decideClassName(filter, "Mortgage Loan Processor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Mortgage Loan Processor")}
          >
              MLP
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Bank Teller":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Bank Teller</p>
                    <p className="companydata-text2"><li>What is your experience with handling cash?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for PNC?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you dealt with differences of opinion within a team.</li></p>
                    <p className="companydata-text2"><li>Cash handling experience.</li></p>
                    <p className="companydata-text2"><li>How do you deal with customers?</li></p>
                </div>
            );
        case "Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Developer</p>
                    <p className="companydata-text2"><li>Introduce yourself.</li></p>
                    <p className="companydata-text2"><li>Why do you have an interest in this job?</li></p>
                    <p className="companydata-text2"><li>Describe the four pillars of OOP.</li></p>
                    <p className="companydata-text2"><li>Please tell me about yourself and what your interests are</li></p>
                </div>
            );
        case "Mortgage Underwriter":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Mortgage Underwriter</p>
                    <p className="companydata-text2"><li>How do you prioritize tasks?</li></p>
                    <p className="companydata-text2"><li>What do you do if you have an urgent task to do and how do you re-prioritize?</li></p>
                    <p className="companydata-text2"><li>Describe your experience at your previous job.</li></p>
                </div>
            );
        case "Asset Management Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Asset Management Analyst</p>
                    <p className="companydata-text2"><li>Explain the current trends in Asset Management.</li></p>
                    <p className="companydata-text2"><li>Why PNC, and how does it differentiate itself from the competition?</li></p>
                    <p className="companydata-text2"><li>What are the pillars of customer service?</li></p>
                </div>
            );
        case "Mortgage Loan Processor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Mortgage Loan Processor</p>
                    <p className="companydata-text2"><li>How would you handle a situation where the loan won’t be closing on time, and the borrower is facing homelessness?</li></p>
                    <p className="companydata-text2"><li>How would you handle having your own high urgency assignments that you must complete and having another coworker’s additional high urgency assignments added to your workload?</li></p>
                    <p className="companydata-text2"><li>How do you handle staying disciplined and engaged while working remotely?</li></p>
                    <p className="companydata-text2"><li>What were productivity metrics used in your previous loan processor job? What were the goals that needed to be met?</li></p>
                    <p className="companydata-text2"><li>Explain what you believe the job description of this role to be.</li></p>
                    <p className="companydata-text2"><li>Walk me through the day as a loan processor at your previous job.</li></p>
                    <p className="companydata-text2"><li>Being that this is a remote position, are you the type of person doing laundry during downtime?</li></p>
                    <p className="companydata-text2"><li>What is your strength/weakness?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you had to deal with an irate customer?</li></p>
                    <p className="companydata-text2"><li>What stuck out to you about PNC and made you interested in applying?</li></p>
                </div>
            );
    }
};
