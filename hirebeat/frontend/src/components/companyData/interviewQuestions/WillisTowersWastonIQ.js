import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function WillisTowersWastonIQ(props){
    const [filter, setFilter] = useState("Analyst");
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
              className={decideClassName(filter, "Manager")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
          <button
              className={decideClassName(filter, "Trainee")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Trainee")}
          >
              Trainee
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "110px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>How many people are using a phone at any given moment? </li></p>
                    <p className="companydata-text2"><li>What will you do if you have an exam on Saturday and a client meeting on Friday?</li></p>
                    <p className="companydata-text2"><li>Why do you choose WTW? Why do you choose this department?</li></p>
                    <p className="companydata-text2"><li>Tell us more about parts of your CV.</li></p>
                    <p className="companydata-text2"><li>Understanding of the job description.</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and why this position?</li></p>
                    <p className="companydata-text2"><li>Tell us a time when you were part of a high performing team.</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you used a new way to perform an old task and the result.</li></p>
                    <p className="companydata-text2"><li>Tell me a little bit about yourself.</li></p>
                    <p className="companydata-text2"><li>Describe a skill that you have to learn fast.</li></p>
                    <p className="companydata-text2"><li>How will your skills and experiences contribute to the graduate scheme?</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your current job?</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you suggested an improvement to a product or service.</li></p>
                    <p className="companydata-text2"><li>What was your most formidable professional challenge during your time at X?</li></p>
                    <p className="companydata-text2"><li>What will you do if you have an exam on Saturday and a client meeting on Friday?</li></p>
                    <p className="companydata-text2"><li>What is your ideal role?</li></p>
                    <p className="companydata-text2"><li>What are the payouts in an annuity?</li></p>
                    <p className="companydata-text2"><li>What do you know about this job?</li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>State a time you had to overcome an obstacle with an internal employee. How was this resolved?</li></p>
                    <p className="companydata-text2"><li>What would be the one thing that you would change about yourself?</li></p>
                    <p className="companydata-text2"><li>What's your career plan? Where do you want to be in 5 years?</li></p>
                    <p className="companydata-text2"><li>Why look for a change?</li></p>
                    <p className="companydata-text2"><li>Explain how you handled a situation where your expectations didn’t meet customers.</li></p>
                    <p className="companydata-text2"><li>What attracted you to Towers Watson?</li></p>
                    <p className="companydata-text2"><li>When was a time you had to work with someone who intimidates you, and how did you overcome it?</li></p>
                </div>
            );
        case "Trainee":
            return(
                <div>
                    <p className="companydata-text2"><li>What does diversity mean to you?</li></p>
                    <p className="companydata-text2"><li>How do you feel about studying for qualifications while you work?</li></p>
                    <p className="companydata-text2"><li>How much salary do you expect?</li></p>
                    <p className="companydata-text2"><li>Where have you been a leader in a situation?</li></p>
                    <p className="companydata-text2"><li>Why are you suited for the position?</li></p>
                    <p className="companydata-text2"><li>Name a time when you have shown leadership skills.</li></p>
                    <p className="companydata-text2"><li>What are your greatest strengths?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Draw an org chart for a Pharma company.</li></p>
                    <p className="companydata-text2"><li>What are some of the skills which you have that would value-add to this position?</li></p>
                    <p className="companydata-text2"><li>What are some of the challenges you have faced regarding people management in your current job?</li></p>
                    <p className="companydata-text2"><li>What was the most challenging part of my previous job?</li></p>
                    <p className="companydata-text2"><li>Describe your current role and how it will help carry over into the position applying for?</li></p>
                    <p className="companydata-text2"><li>Describe previous jobs and industry-related experience.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you were working on a project, and something unexpected happened.</li></p>
                    <p className="companydata-text2"><li>Provide an overview of your experience so far, and describe how it prepares you for this position.</li></p>
                </div>
            );
    }
};
