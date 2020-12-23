import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function FIIQ(props){
    const [filter, setFilter] = useState("Software Engineer");
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
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Customer Relationship Advocate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Relationship Advocate")}
          >
              CRA
          </button>
          <button
              className={decideClassName(filter, "Full-Stack Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Full-Stack Developer")}
          >
              FS
          </button>
          <button
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>What other programming language do you know similar to Java?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Fidelity?</li></p>
                    <p className="companydata-text2"><li>Talk about your experience with java, as fidelity uses java a lot as oop.</li></p>
                    <p className="companydata-text2"><li>Draw an architecture diagram of a parking garage.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you faced a new challenge. How did you handle it, and what did you learn from it?</li></p>
                    <p className="companydata-text2"><li>How would you design a binary search tree?</li></p>
                    <p className="companydata-text2"><li>Create a REST API that takes in a list of JSON objects and returns the summary input.</li></p>
                </div>
            );
        case "Customer Relationship Advocate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Relationship Advocate</p>
                    <p className="companydata-text2"><li>Why did you choose Fidelity?</li></p>
                    <p className="companydata-text2"><li>What did you like about a previous manager?</li></p>
                    <p className="companydata-text2"><li>How did you handle the feedback you disagreed with?</li></p>
                    <p className="companydata-text2"><li>How would you handle an upset customer?</li></p>
                    <p className="companydata-text2"><li>Describing your day from an 80/20 perspective, what good things constitute as your 80? What are undesirable things described as 20?</li></p>
                    <p className="companydata-text2"><li>What is the purpose of the position?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you had to have your work critiqued?</li></p>
                    <p className="companydata-text2"><li>What are your study habits?</li></p>
                    <p className="companydata-text2"><li>Can you give an example of when you provided excellent customer service?</li></p>
                    <p className="companydata-text2"><li>Can you give an example of when you dealt with a demanding customer?</li></p>
                    <p className="companydata-text2"><li>How did you receive criticism, and how did you implement it in your goals?</li></p>
                    <p className="companydata-text2"><li>Describe a principle of Java OOP.</li></p>
                    <p className="companydata-text2"><li>Fidelity is highly regulated, and often that means saying no. How would you handle saying no to a customer?</li></p>
                    <p className="companydata-text2"><li>Describe your skills and abilities which are useful to this job.</li></p>
                    <p className="companydata-text2"><li>What do you know about fidelity investments?</li></p>
                    <p className="companydata-text2"><li>Would you like to add anything about your skills and abilities?</li></p>
                    <p className="companydata-text2"><li>How do you manage feedback?</li></p>
                    <p className="companydata-text2"><li>Who/what is your biggest inspiration?</li></p>
                    <p className="companydata-text2"><li>How would you balance school and work life?</li></p>
                    <p className="companydata-text2"><li>What do you know about series seven and series 63?</li></p>
                </div>
            );
        case "Full-Stack Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Full-Stack Developer</p>
                    <p className="companydata-text2"><li>Explain one of your projects to me.</li></p>
                    <p className="companydata-text2"><li>When was one time you had an issue? How did you solve it? </li></p>
                    <p className="companydata-text2"><li>Describe how you would handle a disagreement with a teammate.</li></p>
                    <p className="companydata-text2"><li>Explain a time you had a problem, and how you overcame it?</li></p>
                    <p className="companydata-text2"><li>Can you explain how to use SQL Inner join?</li></p>
                </div>
            );
        case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>Why is fidelity the right choice for you?</li></p>
                    <p className="companydata-text2"><li>What is your most vital skill or ability?</li></p>
                    <p className="companydata-text2"><li>What would you like most about the position?</li></p>
                    <p className="companydata-text2"><li>What are some problems you have solved in your current position?</li></p>
                    <p className="companydata-text2"><li>What kind of culture would you expect from the team you'd join?</li></p>
                </div>
            );
    }
};
