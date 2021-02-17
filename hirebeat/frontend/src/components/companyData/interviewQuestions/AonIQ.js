import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AonIQ(props){
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
              className={decideClassName(filter, "Consulting")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consulting")}
          >
              Consulting
          </button>
          <button
              className={decideClassName(filter, "Actuarial")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Actuarial")}
          >
              Actuarial
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>What’s a challenger you’ve faced working in a team setting?</li></p>
                    <p className="companydata-text2"><li>What type of team member are you?</li></p>
                    <p className="companydata-text2"><li>What interests you about the position?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you?</li></p>
                    <p className="companydata-text2"><li>Name a time you worked in a group setting.</li></p>
                    <p className="companydata-text2"><li>Tell us about yourself and go through your resume.</li></p>
                    <p className="companydata-text2"><li>Describe a time that you had a conflict with a team member.</li></p>
                </div>
            );
        case "Consulting":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a time you worked with multiple deadlines during a short time.</li></p>
                    <p className="companydata-text2"><li>How do you manage several competing priorities?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>Name a time when you had to take charge of a given situation.</li></p>
                    <p className="companydata-text2"><li>What approach would you take to establishing and maintaining client and colleague relationships? </li></p>
                    <p className="companydata-text2"><li>How would you decide on whether to improve a process in the workplace?</li></p>
                    <p className="companydata-text2"><li>What is the best way to ensure that you deliver high-quality work?</li></p>
                    <p className="companydata-text2"><li>What do you enjoy about working in a changing environment? Including different people and a variety of tasks?</li></p>
                    <p className="companydata-text2"><li>Please tell us why you have chosen Aon and the particular role?</li></p>
                </div>
            );
        case "Actuarial":
            return(
                <div>
                    <p className="companydata-text2"><li>Give us your thoughts on the coronavirus pandemic.</li></p>
                    <p className="companydata-text2"><li>Give an example of how you added accuracy and efficiency to a process.</li></p>
                    <p className="companydata-text2"><li>Consider your strengths and experience; what can you bring to Aon? </li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you have multiple deadlines. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>How would you establish and maintain relationships in a work environment? </li></p>
                    <p className="companydata-text2"><li>Describe a complex idea/theory that you've learned at university in simple words.</li></p>
                    <p className="companydata-text2"><li>Two possible factors are disrupting the industry.</li></p>
                    <p className="companydata-text2"><li>Tell me a time you solved a problem.</li></p>
                    <p className="companydata-text2"><li>Describe yourself in three words.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in the field?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>Why are you interested in this position?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to solve a problem using data and what steps you took.</li></p>
                    <p className="companydata-text2"><li>What value do you think you can bring?</li></p>
                    <p className="companydata-text2"><li>What do you know about the position?</li></p>
                    <p className="companydata-text2"><li>How comfortable are you with manipulating data?</li></p>
                </div>
            );
    }
};
