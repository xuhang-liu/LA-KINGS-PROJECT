import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function SSIQ(props){
    const [filter, setFilter] = useState("Fund Accountant");
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
              className={decideClassName(filter, "Fund Accountant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Fund Accountant")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Data Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Data Analyst")}
          >
              DA
          </button>
          <button
              className={decideClassName(filter, "Vice President")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Vice President")}
          >
              VP
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SDE
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Fund Accountant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Fund Accountant</p>
                    <p className="companydata-text2"><li>What do you know about State Streets?</li></p>
                    <p className="companydata-text2"><li>Why State Street</li></p>
                    <p className="companydata-text2"><li>Which department would you rather work in, t/a or fund accounting?</li></p>
                    <p className="companydata-text2"><li>Did I ever have difficulty with a customer or client in a previous  job?</li></p>
                    <p className="companydata-text2"><li>What is a fund? Which EXcel function do you know?</li></p>
                    <p className="companydata-text2"><li>Motivation for the job and future goals.</li></p>
                    <p className="companydata-text2"><li>What is an investment fund?</li></p>
                    <p className="companydata-text2"><li>What are derivatives, NAV, equities?</li></p>
                    <p className="companydata-text2"><li>What is an interest rate swap? For which risk it can be used to hedge the position</li></p>
                    <p className="companydata-text2"><li>Difference between the Balance Sheet and Income Statement.</li></p>
                    <p className="companydata-text2"><li>Why do you want to leave the current company?</li></p>
                    <p className="companydata-text2"><li>What are the skills you possess that make you think you could be a fit?</li></p>
                    <p className="companydata-text2"><li>What are outstanding shares?</li></p>
                    <p className="companydata-text2"><li>What is the NAV formula?</li></p>
                </div>
            );
        case "Data Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Analyst</p>
                    <p className="companydata-text2"><li>Spark broadcast variable- with example and scenario.</li></p>
                    <p className="companydata-text2"><li>Reason for a job change.</li></p>
                    <p className="companydata-text2"><li>How to estimate the total number of cars in Boston?</li></p>
                </div>
            );
        case "Vice President":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Vice President</p>
                    <p className="companydata-text2"><li>Example of a challenging situation and how you resolved it.</li></p>
                    <p className="companydata-text2"><li>How to handle difficult situations?</li></p>
                    <p className="companydata-text2"><li>What has been your greatest failure?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>What's the difference between a mutual and a hedge fund?</li></p>
                    <p className="companydata-text2"><li>Which level is your Excel, what advanced functions you know?</li></p>
                    <p className="companydata-text2"><li>How do you get motivated when you feel stressed?</li></p>
                    <p className="companydata-text2"><li>What are navs?</li></p>
                    <p className="companydata-text2"><li>Describe a time you overcame a challenge in the workplace.</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Provide an example of where you brought creativity to solving a problem.</li></p>
                    <p className="companydata-text2"><li>What is the difference between a class and an object?</li></p>
                    <p className="companydata-text2"><li>The time complexity of collections.</li></p>
                </div>
            );
    }
};
