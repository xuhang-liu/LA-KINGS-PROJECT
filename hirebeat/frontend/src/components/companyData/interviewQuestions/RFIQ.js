import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function RFIQ(props){
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
              Teller
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
                    <p className="companydata-text2"><li>Was there ever a time when you or someone worked with cut corners at work, which impacted the quality of service?</li></p>
                    <p className="companydata-text2"><li>How did you solve a problem in your previous job? Please give an example. </li></p>
                    <p className="companydata-text2"><li>Tell me about an example of how you turned a negative experience into a positive experience for an upset customer.</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your current job?</li></p>
                    <p className="companydata-text2"><li>Have you had any money-related disciplinary action at your previous employer?</li></p>
                    <p className="companydata-text2"><li>What are your daily duties at your current job?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you set a goal and how you managed to achieve it.</li></p>
                    <p className="companydata-text2"><li>Explain a time you felt it was necessary to build a customer’s repertoire and how you did so.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you handled a stressful time in your life.</li></p>
                    <p className="companydata-text2"><li>Why should we hire you? Why do you think you would be a good fit for this company?</li></p>
                    <p className="companydata-text2"><li>What is something that you could work on improving?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Was there a time you were put in a situation where it would be easier to break the rules, but you didn't?</li></p>
                    <p className="companydata-text2"><li>Are you a competitive person?</li></p>
                    <p className="companydata-text2"><li>Have you ever had to speak to someone about their quality of work?</li></p>
                    <p className="companydata-text2"><li>Are you comfortable with sales being one of the top priorities of the job?</li></p>
                    <p className="companydata-text2"><li>What are three things that motivate you at work?</li></p>
                    <p className="companydata-text2"><li>What is one part of a job you would never want to do again?</li></p>
                    <p className="companydata-text2"><li>Have you ever helped your coworker to achieve his/her goal? How?</li></p>
                    <p className="companydata-text2"><li>What does a Teller mean to you?</li></p>
                </div>
            );
    }
};
