import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ADPIQ(props){
    const [filter, setFilter] = useState("Outside Sales Representative");
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
              className={decideClassName(filter, "Outside Sales Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Outside Sales Representative")}
          >
              OSR
          </button>
          <button
              className={decideClassName(filter, "Client Support Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client Support Specialist")}
          >
              CSS
          </button>
          <button
              className={decideClassName(filter, "District Manager")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("District Manager")}
          >
              DM
          </button>
          <button
              className={decideClassName(filter, "Account Executive")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Account Executive")}
          >
              AE
          </button>
          <button
              className={decideClassName(filter, "Project Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Project Manager")}
          >
              PM
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Outside Sales Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Outside Sales Representative</p>
                    <p className="companydata-text2"><li>How well do you handle rejection? Give an example</li></p>
                    <p className="companydata-text2"><li>What do you like to do in your spare time?</li></p>
                    <p className="companydata-text2"><li>What motivates you? What are some personal goals you have?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself/your experiences</li></p>
                    <p className="companydata-text2"><li>Do you feel comfortable with a cold-calling job role?</li></p>
                    <p className="companydata-text2"><li>What past experiences do you have that make you well suited for sales?</li></p>
                    <p className="companydata-text2"><li>What is the most important thing your parents taught you?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you faced a difficult situation and had to work with others to resolve it.</li></p>
                    <p className="companydata-text2"><li>How do you accelerate yourself in your project/teamwork?</li></p>
                    <p className="companydata-text2"><li>What three values would you bring to ADP?</li></p>
                    <p className="companydata-text2"><li>How do you feel about meeting new people?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in outside sales versus inside sales?</li></p>
                </div>
            );
        case "Client Support Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client Support Specialist</p>
                    <p className="companydata-text2"><li>how do you deal with an escalated client?</li></p>
                    <p className="companydata-text2"><li>Explain a time you had to give a customer bad news?</li></p>
                    <p className="companydata-text2"><li>Explain a time you had to learn a new process and how did you adjust</li></p>
                    <p className="companydata-text2"><li>Will you be willing to work extra without compensation to make personal or team goals?</li></p>
                    <p className="companydata-text2"><li>What were your responsibilities in your previous/current position?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to explain to a client that the problem they thought they were experiencing was not the actual problem.</li></p>
                    <p className="companydata-text2"><li>If you have multiple essential assignments with the same deadline, how do you prioritize them?</li></p>
                    <p className="companydata-text2"><li>Name when you had to work with someone very different from you, and how did you overcome those differences?</li></p>
                    <p className="companydata-text2"><li>What three things do you feel are essential qualities for a customer service agent to possess?</li></p>
                </div>
            );
        case "District Manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: District Manager</p>
                    <p className="companydata-text2"><li>What is your prospecting process?</li></p>
                    <p className="companydata-text2"><li>What qualifications or training do you have that make you think you will be successful in our company and our industry?</li></p>
                    <p className="companydata-text2"><li>How do you plan on being successful in the role?</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you fell short of your quota, and how did you respond?</li></p>
                    <p className="companydata-text2"><li>Give me an example of the most critical feedback that you have received?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you had to go the extra mile to close a deal</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you failed to achieve something</li></p>
                    <p className="companydata-text2"><li>What made you successful in your previous roles?</li></p>
                    <p className="companydata-text2"><li>How did you upsell/retain clients in your previous role?</li></p>
                </div>
            );
        case "Account Executive":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Account Executive</p>
                    <p className="companydata-text2"><li>What are three things that motivate you?</li></p>
                    <p className="companydata-text2"><li>What are three aspects you like about sales?</li></p>
                    <p className="companydata-text2"><li>What is your ideal upper management?</li></p>
                    <p className="companydata-text2"><li>What’s a challenge you think you may come across in your first month in this position?</li></p>
                    <p className="companydata-text2"><li>What do you think this position entails? Describe in your own words.</li></p>
                    <p className="companydata-text2"><li>What two words would your best friends use to describe you?</li></p>
                    <p className="companydata-text2"><li>Can you handle a very fast-paced environment?</li></p>
                    <p className="companydata-text2"><li>What differentiates you from other candidates?</li></p>
                    <p className="companydata-text2"><li>Explain a time where you took a negative customer experience or sale and turned it into a positive one.</li></p>
                    <p className="companydata-text2"><li>Tell me about two of your strengths and two weaknesses.</li></p>
                    <p className="companydata-text2"><li>Rank in order of importance: recognition, compensation, career growth, etc.</li></p>
                    <p className="companydata-text2"><li>What is/was your reason for wanting to leave your previous or current employer?</li></p>
                    <p className="companydata-text2"><li>Do you prefer calling on completely competitive accounts or existing ones?</li></p>
                </div>
            );
        case "Project Manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Project Manager</p>
                    <p className="companydata-text2"><li>What is your most significant accomplishment? Describe a situation when you did something above and beyond.</li></p>
                    <p className="companydata-text2"><li>Tell me about your background in project management.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you used data to solve a user issue.</li></p>
                    <p className="companydata-text2"><li>How would you convince the management to adopt agile practices?</li></p>
                    <p className="companydata-text2"><li>Can you talk about a project when something went wrong that was not your fault and how you handled it?</li></p>
                    <p className="companydata-text2"><li>How would you handle a problematic interpersonal conflict?</li></p>
                    <p className="companydata-text2"><li>How do you handle stressful situations at work?</li></p>
                    <p className="companydata-text2"><li>Name when a project went off the rails, and what did you do to get it back on?</li></p>
                    <p className="companydata-text2"><li>What was your favorite project, and why?</li></p>
                    <p className="companydata-text2"><li>Describe the type of projects you currently manage. Do you use a specific framework? How do you manage risks? How do you escalate issues?</li></p>
                </div>
            );
    }
};
