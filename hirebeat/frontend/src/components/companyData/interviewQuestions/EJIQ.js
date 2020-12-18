import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function EJIQ(props){
    const [filter, setFilter] = useState("Service Specialist");
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
              className={decideClassName(filter, "Service Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Service Specialist")}
          >
              Specialist
          </button>
          <button
              className={decideClassName(filter, "Branch Office Administrato")}
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Branch Office Administrato")}
          >
              Administrator
          </button>
          <button
              className={decideClassName(filter, "Financial Advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Advisor")}
          >
              FA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Service Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Service Specialist</p>
                    <p className="companydata-text2"><li>Please tell me about an example of an experience where your understanding of a client’s needs exceeded their needs? How did you exceed the client’s needs, and what was the result?</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time when you experienced change.</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time you dealt with a difficult situation.</li></p>
                </div>
            );
        case "Branch Office Administrator":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Branch Office Administrator</p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>What would you like to see for the future of Edward Jones?</li></p>
                    <p className="companydata-text2"><li>Describe a difficult workplace situation and describe how you handled it. </li></p>
                    <p className="companydata-text2"><li>Describe a time you had to set goals for your company, and how did you help achieve them.</li></p>
                    <p className="companydata-text2"><li>How many accounts do you have in collections, what is the amount, and what type of account is it?</li></p>
                    <p className="companydata-text2"><li>Name a difficulty at your previous job, and how did you overcome it.</li></p>
                    <p className="companydata-text2"><li>Describe something that you made more efficient.</li></p>
                    <p className="companydata-text2"><li>What did you like most about your previous job?</li></p>
                    <p className="companydata-text2"><li>Why do you want this position?</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time when you made a mistake, and how you corrected it.</li></p>
                    <p className="companydata-text2"><li>How did you overcome a negative experience with a customer in your previous job?</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>Who is someone that has made the biggest impact in your life, and why? What did they say that stuck to you?</li></p>
                </div>
            );
        case "Financial Advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Advisor</p>
                    <p className="companydata-text2"><li>What do you know about/ why are you interested in the company?</li></p>
                    <p className="companydata-text2"><li>Please tell us about a time when you had to provide constructive criticism to a colleague. How did they react, and was there a change moving forward? (Not verbatim)</li></p>
                    <p className="companydata-text2"><li>Why are you choosing here versus a competitor?</li></p>
                    <p className="companydata-text2"><li>Please tell us a time when you had to do the right thing while everyone else wasn’t.</li></p>
                    <p className="companydata-text2"><li>What challenges did you overcome in your last position?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a Financial Advisor?</li></p>
                    <p className="companydata-text2"><li>Can you discuss a time you had to deal with a difficult person? How did you handle the situation?</li></p>
                    <p className="companydata-text2"><li>What do you know about the financial services industry?</li></p>
                    <p className="companydata-text2"><li>How did you feel about building your client base?</li></p>
                    <p className="companydata-text2"><li>Please tell me why you believe you'd be a good fit at Edward Jones.</li></p>
                    <p className="companydata-text2"><li>Do you have a sales background?</li></p>
                    <p className="companydata-text2"><li>Can you sit down and have a cup of coffee with someone?</li></p>
                    <p className="companydata-text2"><li>Are you able to study and learn new things?</li></p>
                    <p className="companydata-text2"><li>What do you think of the culture of the company?</li></p>
                    <p className="companydata-text2"><li>What is your most important reason for wishing to pursue a career as a Financial Advisor?</li></p>
                    <p className="companydata-text2"><li>What was something you did to go above and beyond with a client or customer?</li></p>
                    <p className="companydata-text2"><li>Have you thought about where you would like to open your business?</li></p>
                    <p className="companydata-text2"><li>How would you go about conveying complex information to someone?</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time you worked on a project that didn't go as planned? What did you learn?</li></p>
                    <p className="companydata-text2"><li>What do you know about our financial advisor program?</li></p>
                    <p className="companydata-text2"><li>How will you prospect clients?</li></p>
                    <p className="companydata-text2"><li>When sales are not going well, what was your source of strength to feel confident about your work?</li></p>
                    <p className="companydata-text2"><li>xxiii.When you had a confrontation with your manager, how did you approach him or her, and what was the outcome?</li></p>
                </div>
            );
    }
};
