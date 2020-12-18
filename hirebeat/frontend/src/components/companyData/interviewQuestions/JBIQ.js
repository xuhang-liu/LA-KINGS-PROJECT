import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JBIQ(props){
    const [filter, setFilter] = useState("General Questions");
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
              className={decideClassName(filter, "General Questions")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("General Questions")}
          >
              General
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "General Questions":
            return(
                <div>
                    <p className="companydata-text2">Job Title: General Questions</p>
                    <p className="companydata-text2"><li>What makes you a good fit for our team?</li></p>
                    <p className="companydata-text2"><li>Can you explain how your teammates would describe you? </li></p>
                    <p className="companydata-text2"><li>What experience have you been able to gain while working on projects?</li></p>
                    <p className="companydata-text2"><li>What would you do if someone comes to your desk yelling at you?</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your present employer?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 10 years?</li></p>
                    <p className="companydata-text2"><li>How does a portfolio consist of? And what are the most important stats to include?</li></p>
                    <p className="companydata-text2"><li>What are your hobbies?</li></p>
                    <p className="companydata-text2"><li>Why did you apply for this role?</li></p>
                    <p className="companydata-text2"><li>What were some challenges you faced in your previous job?</li></p>
                    <p className="companydata-text2"><li>What does the bank architecture look like to you?</li></p>
                    <p className="companydata-text2"><li>What are you hoping for from this job?</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and your past experiences.</li></p>
                </div>
            );
    }
};
