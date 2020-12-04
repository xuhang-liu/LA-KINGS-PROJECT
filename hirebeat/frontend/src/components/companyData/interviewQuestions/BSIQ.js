import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BSIQ(props){
    const [filter, setFilter] = useState("swe");
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
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
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
        default: case "Analyst":
            return (
                <div>
                  <p className="companydata-text2"><li>Why would an investor prefer to invest in secondary private equity over traditional private equity?</li></p>
                  <p className="companydata-text2"><li>What are the drivers of return in an LBO?</li></p>
                  <p className="companydata-text2"><li>Can you tell me about a deal you have worked on?</li></p>
                  <p className="companydata-text2"><li>Have you ever encountered a situation that was challenging to you, and if so, how did you work through it?</li></p>
                  <p className="companydata-text2"><li>How do you rank the following three sites/assets in terms of most risky to least? (undeveloped plot of land, an office building in Chicago, a strip mall in Texas)</li></p>
                  <p className="companydata-text2"><li>What’s your opinion on the hotel industry in New York City?</li></p>
                  <p className="companydata-text2"><li>If you could be any animal, which animal would you be? </li></p>
                  <p className="companydata-text2"><li>What’s your outlook for real estate? which REITs would you invest in?</li></p>
                  <p className="companydata-text2"><li>If two neighboring buildings had the same cap rate but different NOIs, what factors would cause those buildings to have the same cap rate?</li></p>
                  <p className="companydata-text2"><li>How would you design a news application?</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Given an array of prices for one stock in chronological order, find the time to buy and sell to maximize profit.</li></p>
                    <p className="companydata-text2"><li>Given 2 arrays, return an array consisting of everything in Array 1 that isn‘t in Array 2.</li></p>
                    <p className="companydata-text2"><li>Write a function to evaluate an arithmetic expression, structured as a tree where each node is a number or an operator and the operands are the child nodes.</li></p>
                    <p className="companydata-text2"><li>Given a list of general development tools like git, SQL, etc., pick one and write as much as you can about how it works and why it is useful.</li></p>
                    <p className="companydata-text2"><li>Given an array of lights, how would you (most efficiently) toggle a range of lights on and off when given two numbers representing the beginning and end of the range respectively? </li></p>
                </div>
            );
    }
};
