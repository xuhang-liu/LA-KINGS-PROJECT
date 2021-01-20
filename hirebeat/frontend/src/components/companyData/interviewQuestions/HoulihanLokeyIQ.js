import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function HoulihanLokeyIQ(props){
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
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Q1":
            return(
                <div>
                    <p className="companydata-text2"><li>What's the one piece of feedback you've received from previous managers?</li></p>
                    <p className="companydata-text2"><li>Why have you chosen Houlihan Lokey? </li></p>
                    <p className="companydata-text2"><li>What three words are people going to use to describe you?</li></p>
                    <p className="companydata-text2"><li>Why would you like to go to investment banking?</li></p>
                    <p className="companydata-text2"><li>What would make a company distressed?</li></p>
                    <p className="companydata-text2"><li>Why would a company with positive cash flows go bankrupt?</li></p>
                    <p className="companydata-text2"><li>What is the restructuring, and what are the steps? </li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What are the methods used to value a company?</li></p>
                    <p className="companydata-text2"><li>Can you walk me through your resume?</li></p>
                    <p className="companydata-text2"><li>What are the different valuation methods?</li></p>
                    <p className="companydata-text2"><li>What's the structure of your current team you're working on?</li></p>
                    <p className="companydata-text2"><li>What has attracted you to apply for this role?</li></p>
                    <p className="companydata-text2"><li>How would you manage stakeholders in difficult situations?</li></p>
                    <p className="companydata-text2"><li>What do you know of Houlihan Lokey?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>What have been your performance ratings for the last three years?</li></p>
                    <p className="companydata-text2"><li>Tell me about the restructuring process you've been following.</li></p>
                    <p className="companydata-text2"><li>What is the difference between a company with high beta and a low beta company?</li></p>
                    <p className="companydata-text2"><li>Tell me how your experience impacts your thinking on a specific industry.</li></p>
                    <p className="companydata-text2"><li>What do you see as the most significant challenge facing your industry?</li></p>
                    <p className="companydata-text2"><li>Describe the time you've been fighting and why.</li></p>
                    <p className="companydata-text2"><li>Describe how you would translate your previous work experience to our team.</li></p>
                    <p className="companydata-text2"><li>Why do we need to hire you and not the other qualified candidates? </li></p>
                </div>
            );
    }
};
