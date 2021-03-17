import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MassmutualIQ(props){
    const [filter, setFilter] = useState("Financial advisor");
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
              className={decideClassName(filter, "Financial advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial advisor")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Customer services representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer services representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Project manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Project manager")}
          >
              PM
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Financial advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial advisor</p>
                    <p className="companydata-text2"><li>Why would you be a good fit for MassMutual?</li></p>
                    <p className="companydata-text2"><li>In your opinion, what is the critical role of a financial advisor for life insurance?</li></p>
                    <p className="companydata-text2"><li>How will you bring clients in?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a financial advisor?</li></p>
                    <p className="companydata-text2"><li>What do you like to do in your free time?</li></p>
                    <p className="companydata-text2"><li>What are you looking to get from MassMutual?</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>Hypothetically speaking, how would you go about explaining to a client that their market portfolio tanked and they lost more than 50% of their principal?</li></p>
                    <p className="companydata-text2"><li>How would you like to work from home and make over $100k a year and still be able to attend your children's activities and make your schedule?</li></p>
                    <p className="companydata-text2"><li>What are your long-term life goals?</li></p>
                    <p className="companydata-text2"><li>Why have you not been as successful as you wanted in past positions?</li></p>
                    <p className="companydata-text2"><li>What was a time where you had to demonstrate leadership?</li></p>
                    <p className="companydata-text2"><li>How comfortable are you with face to face community?</li></p>
                    <p className="companydata-text2"><li>How will you react to a prospect saying no?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to give someone negative feedback.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time things didn't go according to plan</li></p>
                    <p className="companydata-text2"><li>Describe how you would start your own business.</li></p>
                    <p className="companydata-text2"><li>Describe your sales experience.</li></p>
                </div>
            );
        case "Customer services representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer services representative</p>
                    <p className="companydata-text2"><li>Tell us about a time you handled a demanding boss or customer</li></p>
                    <p className="companydata-text2"><li>Are you comfortable with change?</li></p>
                    <p className="companydata-text2"><li>Name a time when you were beyond the call of duty.</li></p>
                    <p className="companydata-text2"><li>What do you use to organize your business day?</li></p>
                    <p className="companydata-text2"><li>What is the most outstanding example of customer service that you have performed?</li></p>
                    <p className="companydata-text2"><li>How would you tell someone who has never driven a car how to go over the telephone?</li></p>
                    <p className="companydata-text2"><li>What was your most outstanding achievement to date?</li></p>
                    <p className="companydata-text2"><li>How would you deal with an escalated situation?</li></p>
                </div>
            );
        case "Project manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Project manager</p>
                    <p className="companydata-text2"><li>Describe the most significant project you have managed, how many people on the team and the cost?</li></p>
                    <p className="companydata-text2"><li>How would you motivate an employee who did not share your goals or the goals of a project?</li></p>
                    <p className="companydata-text2"><li>What were my career aspirations?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when motivating a team was difficult, and the success of your job depended on it.</li></p>
                </div>
            );
    }
};
