import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MastercardIQ(props){
    const [filter, setFilter] = useState("Associate Consultant");
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
              className={decideClassName(filter, "Associate Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate Consultant")}
          >
              AC
          </button>
          <button
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SE
          </button>
          <button
              className={decideClassName(filter, "Marketing")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Marketing")}
          >
              Marketing
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Associate Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Associate Consultant</p>
                    <p className="companydata-text2"><li>What’s a time when you failed at something?</li></p>
                    <p className="companydata-text2"><li>Tell about project management experience.</li></p>
                    <p className="companydata-text2"><li>How would you fit from a culture POV?</li></p>
                    <p className="companydata-text2"><li>How do you perform under pressure?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time there was disagreement on a team you worked on. How did you get them to see things from your side?</li></p>
                    <p className="companydata-text2"><li>Describe a time you had to persuade a coworker.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to deal with difficulty within a group?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you experienced failure?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to learn a new skill?</li></p>
                    <p className="companydata-text2"><li>If Mastercard's CEO and the CEO of a bank are having a meeting, tell me how to plan it.</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Please tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>What's the difference between a JSON and an XML object?</li></p>
                    <p className="companydata-text2"><li>In your favorite programming language (Python or PHP preferred):a. Write code that will find a duplicate value in an array. b. Do the same for dictionaries.</li></p>
                    <p className="companydata-text2"><li>What do you do when you are stuck on a problem?</li></p>
                    <p className="companydata-text2"><li>Given a step of the bread-making process, describe how you would test the quality of bread and scale it to larger production.</li></p>
                    <p className="companydata-text2"><li>What is your favorite data structure and why?</li></p>
                    <p className="companydata-text2"><li>How do you allocate memory in C?</li></p>
                    <p className="companydata-text2"><li>Explain binary trees in detail.</li></p>
                    <p className="companydata-text2"><li>Explain what is software testing</li></p>
                    <p className="companydata-text2"><li>What is the difference between unit, functional, and acceptance testing?</li></p>
                    <p className="companydata-text2"><li>Name some code refactoring techniques.</li></p>
                    <p className="companydata-text2"><li>How would you evaluate someone’s code?</li></p>
                    <p className="companydata-text2"><li>What are the tenets of Object-oriented programming, and give some examples?</li></p>
                    <p className="companydata-text2"><li>What are the salient points of Restful web services?</li></p>
                    <p className="companydata-text2"><li>Describe a CI Pipeline that you worked with and the difficulty you faced with it.</li></p>
                    <p className="companydata-text2"><li>What tools could you use for restful testing?</li></p>
                    <p className="companydata-text2"><li>Compare JUnit and TestNG essential features.</li></p>
                </div>
            );
        case "Marketing":
            return(
                <div>
                    <p className="companydata-text2"><li>How would your current co-workers describe you?</li></p>
                    <p className="companydata-text2"><li>Give us your definition of [insert marketing terminology].</li></p>
                    <p className="companydata-text2"><li>Tell us about a time when a project didn't go well and how you handled it?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>What do you know about Mastercard?</li></p>
                    <p className="companydata-text2"><li>What would be the benefits of an internship at Mastercard for you?</li></p>
                    <p className="companydata-text2"><li>Name a time you had to fill in for someone in a job.</li></p>
                </div>
            );
    }
};
