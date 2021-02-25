import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function PerficientIQ(props){
    const [filter, setFilter] = useState("Technical Consultant");
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
              className={decideClassName(filter, "Technical Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Technical Consultant")}
          >
              TC
          </button>
          <button
              className={decideClassName(filter, "Business Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Consultant")}
          >
              BC
          </button>
          <button
              className={decideClassName(filter, "Software Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Developer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Business Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Analyst")}
          >
              BA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Technical Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Technical Consultant</p>
                    <p className="companydata-text2"><li>What is your best quality?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in consulting?</li></p>
                    <p className="companydata-text2"><li>Write a function that determines if a string is a palindrome.</li></p>
                    <p className="companydata-text2"><li>Write a function that determines if strings are anagrams.</li></p>
                    <p className="companydata-text2"><li>What is ElasticSearch?</li></p>
                    <p className="companydata-text2"><li>Please code the standard "Fibonacci Sequence" challenge solution on the whiteboard with your language of choice.</li></p>
                    <p className="companydata-text2"><li>What are you looking for in this position?</li></p>
                    <p className="companydata-text2"><li>Differences between Selenium and UFT.</li></p>
                    <p className="companydata-text2"><li>What is RTM?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Perficient?</li></p>
                    <p className="companydata-text2"><li>What would your ideal role on a client project be?</li></p>
                    <p className="companydata-text2"><li>McDonald’s has an Mc Nuggets offer. How will you ensure they do not get into loss by packing too many nuggets together in the box?</li></p>
                    <p className="companydata-text2"><li>Your nephew is running a lemonade stand during his spring break. The frame will only be open for the five days of his spring break. On Monday, he only sold 3 cups of lemonade. He asks you for help to increase sales, what do you do?</li></p>
                </div>
            );
        case "Business Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Consultant</p>
                    <p className="companydata-text2"><li>What do you see yourself doing in the next few years?</li></p>
                    <p className="companydata-text2"><li>What's a time things didn't work out the way you were planning, and what did you do about that?</li></p>
                    <p className="companydata-text2"><li>Given two arrays of numbers, how would you sort them as quickly as possible?</li></p>
                    <p className="companydata-text2"><li>What's the coolest product you've used recently?</li></p>
                    <p className="companydata-text2"><li>If the client disagrees with you and states that the solution is not appropriate, how would you handle the situation?</li></p>
                    <p className="companydata-text2"><li>What is your biggest weakness? Give me an example of that weakness? Can you give me another example of that weakness?</li></p>
                    <p className="companydata-text2"><li>What is your leadership style? How have you used that style in the past?</li></p>
                    <p className="companydata-text2"><li>Would you be able to act quickly on my feet when the client would request something out of the ordinary?</li></p>
                    <p className="companydata-text2"><li>How did you handle a Business requirement from an Executive?</li></p>
                </div>
            );
        case "Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Developer</p>
                    <p className="companydata-text2"><li>Why are you leaving your current company?</li></p>
                    <p className="companydata-text2"><li>What is your work experience?</li></p>
                    <p className="companydata-text2"><li>What was one hardship you encountered when working on a project?</li></p>
                    <p className="companydata-text2"><li>You need to unit test Class A. Class A uses a Service Class B. How can you unit test Class A?</li></p>
                    <p className="companydata-text2"><li>If you have 9 pennies and one of them is fake based on it weighing less than the real ones, use a balance scale to find which penny is the fake.</li></p>
                    <p className="companydata-text2"><li>What are the basic OOPS concepts?</li></p>
                </div>
            );
        case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>Tell me about your background.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>What do you know about this company?</li></p>
                    <p className="companydata-text2"><li>What skills have you picked up in school?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a Business Analyst?</li></p>
                    <p className="companydata-text2"><li>If you can modify a vending machine, how would you do it?</li></p>
                </div>
            );
    }
};
