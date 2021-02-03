import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function OliverWymanIQ(props){
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
                    <p className="companydata-text2"><li>A gym is looking to expand its memberships. How should they go about this? </li></p>
                    <p className="companydata-text2"><li>Tell me about a time you showed leadership.</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Tell me about a challenge you faced with a team.</li></p>
                    <p className="companydata-text2"><li>Describe the factors a hotel company might consider when implementing a rewards program.</li></p>
                    <p className="companydata-text2"><li>What do you like about the firm?</li></p>
                    <p className="companydata-text2"><li>Name a time when you worked with someone you didn't get along with.</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What is the difference between OW and Mc Kinsey?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to convince a group to do something when you had no official authority over them. </li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to prioritize your commitments.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 20 years? </li></p>
                    <p className="companydata-text2"><li>When was the time that you worked in a team and faced a challenge?</li></p>
                    <p className="companydata-text2"><li>How do you work in a team?</li></p>
                    <p className="companydata-text2"><li>We have x red balls and x blue balls in a bag. The probability of getting two red balls in succession is 2/9. What's x?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>What would you do when facing too many tasks?</li></p>
                    <p className="companydata-text2"><li>What was one goal you set for yourself, and how did you overcome it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had many things to manage and how you handled them?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to convince others of something in a presentation. </li></p>
                    <p className="companydata-text2"><li>How many ATMs are there in New York City?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to change someone's opinion.</li></p>
                    <p className="companydata-text2"><li>How do you feel working with Senior people in other companies?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell us about a time where you added value to an organization.</li></p>
                    <p className="companydata-text2"><li>What is the team you had to work in?</li></p>
                    <p className="companydata-text2"><li>Describe a scheduling conflict and how you dealt with it.</li></p>
                    <p className="companydata-text2"><li>How would you hedge a call option?</li></p>
                    <p className="companydata-text2"><li>What is a couple’s chance to have a daughter if they already have a son and two daughters?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you failed to do something.</li></p>
                    <p className="companydata-text2"><li>Why do you think you'd be a good fit at Oliver Wyman.</li></p>
                </div>
            );
        case "Q5":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your greatest weakness?</li></p>
                    <p className="companydata-text2"><li>What is a time you overcame something you didn't know you could?</li></p>
                    <p className="companydata-text2"><li>Do you see this role as a career opportunity? </li></p>
                    <p className="companydata-text2"><li>What is your desired management style?</li></p>
                    <p className="companydata-text2"><li>How to estimate the amount of the flight that will take off per day in NY? </li></p>
                    <p className="companydata-text2"><li>Your client is the IRS, taxing 2.4T in revenue per year. You can audit 1% of American taxpayers to get back revenue. How do you decide who to audit?</li></p>
                    <p className="companydata-text2"><li>How do you prioritize when you have multiple tasks? </li></p>
                </div>
            );
        case "Q6":
            return(
                <div>
                    <p className="companydata-text2"><li>What leadership experience do you have?</li></p>
                    <p className="companydata-text2"><li>What has been your biggest accomplishment? </li></p>
                    <p className="companydata-text2"><li>How have you developed yourself, whether it be professionally, academically, etc.?</li></p>
                    <p className="companydata-text2"><li>Why OW? </li></p>
                    <p className="companydata-text2"><li>How do you book travel?</li></p>
                    <p className="companydata-text2"><li>Given machines with a failure rate of 1%, the cluster size is such that we achieve a failure rate of at least one device per day.</li></p>
                    <p className="companydata-text2"><li>How do you work in an environment of ambiguity?</li></p>
                    <p className="companydata-text2"><li>If you realized that your boss or your colleague has a flawed hypothesis, what would you do? </li></p>
                    <p className="companydata-text2"><li>What role do you take when you're working with a team? </li></p>
                    <p className="companydata-text2"><li>What is the difference between our company vs. competitors?</li></p>
                    <p className="companydata-text2"><li>Design a way to choose a random sample of 10 data units of an infinite stream. </li></p>
                </div>
            );
    }
};
