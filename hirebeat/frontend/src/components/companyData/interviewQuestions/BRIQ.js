import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BRIQ(props){
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
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
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
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Portfolio Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Portfolio Analyst")}
          >
              PA
          </button>
          <button
              className={decideClassName(filter, "Aladdin Client Services")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Aladdin Client Services")}
          >
              ACS
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Name a time you worked in a group setting and the challenges</li></p>
                    <p className="companydata-text2"><li>Please tell me about yourself and walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>Please tell me about a recent news story, and how it related to BlackRock. </li></p>
                    <p className="companydata-text2"><li>What is the most difficult situation you have ever faced, and how did you overcome it? </li></p>
                    <p className="companydata-text2"><li>What made you choose BlackRock, and why did you choose this particular division?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you for this job? </li></p>
                    <p className="companydata-text2"><li>What do you think makes BlackRock different?</li></p>
                    <p className="companydata-text2"><li>How would you adapt to challenging situations? =</li></p>
                    <p className="companydata-text2"><li>What are some market conditions that interest you?</li></p>
                    <p className="companydata-text2"><li>Can you tell me about a time where you leveraged technology in school or work?</li></p>
                    <p className="companydata-text2"><li>How do you stay on top of the markets? </li></p>
                    <p className="companydata-text2"><li>What do you like to do in your free time? </li></p>
                    <p className="companydata-text2"><li>Can you describe a problem you have faced that forced you to change your perspective to find a solution?</li></p>
                    <p className="companydata-text2"><li>Why did you choose your major, and how will it help you in your career?</li></p>
                    <p className="companydata-text2"><li>What have you been doing to increase your knowledge in the financial services industry?</li></p>
                    <p className="companydata-text2"><li>Would you rather be effective or creative?</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Why do you want to be a software engineer?</li></p>
                    <p className="companydata-text2"><li>What is react? What is redux? What is the difference between reacting and angular?</li></p>
                    <p className="companydata-text2"><li>What is the difference between inheritance and interface?</li></p>
                    <p className="companydata-text2"><li>What data structure would you use to build a parking lot?</li></p>
                    <p className="companydata-text2"><li>How would you make SQL read faster?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Can you share what makes you a good fit for this role?</li></p>
                    <p className="companydata-text2"><li>Given a business issue and dataset, how would you analyze the data to resolve the business issue?</li></p>
                    <p className="companydata-text2"><li>What would you do to design a system to track job failures? </li></p>
                    <p className="companydata-text2"><li>Can you tell us about a time when you worked very hard for something but could not achieve the goal?</li></p>
                    <p className="companydata-text2"><li>Please describe the trade lifecycle.</li></p>
                </div>
            );
        case "Portfolio Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Portfolio Analyst</p>
                    <p className="companydata-text2"><li>What was the last book you read?</li></p>
                    <p className="companydata-text2"><li>What previous experiences do you have? What have you learned from them? </li></p>
                    <p className="companydata-text2"><li>What do you do to stay up to date with the financial markets?</li></p>
                    <p className="companydata-text2"><li>What’s your favorite subject in your school? And why?</li></p>
                    <p className="companydata-text2"><li>If I gave you $10,000 to invest somewhere, where would it be? Why? </li></p>
                </div>
            );
        case "Aladdin Client Services":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Aladdin Client Services</p>
                    <p className="companydata-text2"><li>Describe one of your good and bad experience with client services.</li></p>
                    <p className="companydata-text2"><li>How would you explain using an iPhone to an elderly person who has never used a smartphone before?  </li></p>
                    <p className="companydata-text2"><li>Tell us about a time you were entrepreneurial, or you built something yourself.  </li></p>
                    <p className="companydata-text2"><li>Tell us about a time you were innovative.</li></p>
                    <p className="companydata-text2"><li>How would you describe a database to a 10-year-old?  </li></p>
                    <p className="companydata-text2"><li>Can you tell me about one time when you had to say no? </li></p>
                    <p className="companydata-text2"><li>How would you invest 1 million dollars?</li></p>
                </div>
            );
    }
};
