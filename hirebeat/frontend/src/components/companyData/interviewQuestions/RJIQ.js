import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function RJIQ(props){
    const [filter, setFilter] = useState("Investment Banking Associate");
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
              className={decideClassName(filter, "Investment Banking Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Investment Banking Associate")}
          >
              IBA
          </button>
          <button
              className={decideClassName(filter, "Software Support Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Support Specialist")}
          >
              Specialist
          </button>
          <button
              className={decideClassName(filter, "Financial Advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Advisor")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Equity Research Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Equity Research Analyst")}
          >
              ERA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Investment Banking Associate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Associate</p>
                    <p className="companydata-text2"><li>Describe an LBO process in detail.</li></p>
                    <p className="companydata-text2"><li>Can you explain how the financial statements are connected?</li></p>
                    <p className="companydata-text2"><li>Why do you want to do investment banking?</li></p>
                    <p className="companydata-text2"><li>Walk me through a DCF.</li></p>
                    <p className="companydata-text2"><li>What is a downside to using the precedent transaction technique of valuing a company?</li></p>
                    <p className="companydata-text2"><li>What are some ways you would evaluate a hotel?</li></p>
                    <p className="companydata-text2"><li>How do you run a sell-side process?</li></p>
                    <p className="companydata-text2"><li>What is the cost of debt?</li></p>
                </div>
            );
        case "Software Support Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Support Specialist</p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Know the different storage structures.</li></p>
                    <p className="companydata-text2"><li>Know the difference between array list and linked list.</li></p>
                </div>
            );
        case "Financial Advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Advisor</p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your current job? Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you encountered a difficult situation, and how you resolved it?</li></p>
                    <p className="companydata-text2"><li>Are you familiar with using Dataphile and Microsoft office?</li></p>
                    <p className="companydata-text2"><li>Do you have your IA license?</li></p>
                    <p className="companydata-text2"><li>Do you handle client account opening at your current job?</li></p>
                    <p className="companydata-text2"><li>Describe a time a teammate disagreed with you.</li></p>
                    <p className="companydata-text2"><li>How much does a coffee shop profit per year?</li></p>
                    <p className="companydata-text2"><li>Name 10 people you've talked to about potentially doing business with you and their financial experiences.</li></p>
                    <p className="companydata-text2"><li>Are you looking at other firms? What set Raymond James apart from those other firms?</li></p>
                    <p className="companydata-text2"><li>How my current work would transfer over to working in the world of finance?</li></p>
                    <p className="companydata-text2"><li>What type of activities do you currently do to prospect?</li></p>
                </div>
            );
        case "Equity Research Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Equity Research Analyst</p>
                    <p className="companydata-text2"><li>If an advisor was upset about one of your write-ups because they felt you showed a preference for one political party, how would you handle that?</li></p>
                    <p className="companydata-text2"><li>Why do you think you're a great candidate for this role?</li></p>
                    <p className="companydata-text2"><li>Recommend which stocks are best to go long/short on right now and justify your answer.</li></p>
                    <p className="companydata-text2"><li>What stock would you have researched?</li></p>
                </div>
            );
    }
};
