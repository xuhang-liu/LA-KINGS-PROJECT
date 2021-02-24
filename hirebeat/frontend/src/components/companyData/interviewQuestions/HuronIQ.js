import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function HuronIQ(props){
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
              className={decideClassName(filter, "Healthcare Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Healthcare Analyst")}
          >
              HA
          </button>
          <button
              className={decideClassName(filter, "Consulting Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consulting Analyst")}
          >
              CA
          </button>
          <button
              className={decideClassName(filter, "Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>What experience do you have? Salary expectations?</li></p>
                    <p className="companydata-text2"><li>Challenges of the pharmaceutical industry.</li></p>
                    <p className="companydata-text2"><li>How would you calculate drug revenue?</li></p>
                    <p className="companydata-text2"><li>Why Huron and not Accenture?</li></p>
                    <p className="companydata-text2"><li>On a scale of 1-10, how familiar are you with excel?</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you had to motivate a team.</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you went the extra mile. How did you find the time?</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you used data to face a challenging problem.</li></p>
                    <p className="companydata-text2"><li>What is your experience/understanding of Excel formulas?</li></p>
                    <p className="companydata-text2"><li>You have two tasks that each take 2 hours; both are equally important, you only have three hours. What is your plan?</li></p>
                    <p className="companydata-text2"><li>What is your interest in consulting? Why Huron? What are your expectations of the job? Why Huron versus other companies?</li></p>
                    <p className="companydata-text2"><li>Describe to me a time you exhibited leadership.</li></p>
                    <p className="companydata-text2"><li>If you had a company, what would your three values be?</li></p>
                    <p className="companydata-text2"><li>What have you done in the past when things seem to go wrong in a team environment?</li></p>
                    <p className="companydata-text2"><li>When was a time you were not in a position of power and persuaded a group of people?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you’ve had to manage stress and multiple deadlines.</li></p>
                    <p className="companydata-text2"><li>What would you look into if a hospital was having difficulties with its call wait time?</li></p>
                </div>
            );
        case "Healthcare Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Healthcare Analyst</p>
                    <p className="companydata-text2"><li>What challenges do you expect for this role?</li></p>
                    <p className="companydata-text2"><li>What is your weakness?</li></p>
                    <p className="companydata-text2"><li>If you had two tasks, each would take 2 hours to complete and are of equal importance, yet have only 3 hours to complete the job, how would you prioritize or how would you tackle this issue?</li></p>
                    <p className="companydata-text2"><li>If you were to start a business, what would three of its values be?</li></p>
                    <p className="companydata-text2"><li>How would you define consulting?</li></p>
                    <p className="companydata-text2"><li>What made you interested in consulting?</li></p>
                    <p className="companydata-text2"><li>Why Huron? How do you feel about traveling?</li></p>
                    <p className="companydata-text2"><li>What is a weakness that you have, and how do you fix it?</li></p>
                    <p className="companydata-text2"><li>Tell me about your experience in healthcare.</li></p>
                    <p className="companydata-text2"><li>What are you going to do between now and your start date to prepare for this job?</li></p>
                    <p className="companydata-text2"><li>What is a situation in which you had more than one task to complete and not enough time to meet both of them, and both of them were of equal importance? How did you handle it?</li></p>
                    <p className="companydata-text2"><li>How are your values aligned with the companies?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to take on a leadership role when you weren't prepared for it.</li></p>
                </div>
            );
        case "Consulting Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Consulting Analyst</p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>How to prioritize two tasks when they're both dues simultaneously and take the same amount of time?</li></p>
                    <p className="companydata-text2"><li>What are the five most important qualities you have that you think will make you successful in this role?</li></p>
                    <p className="companydata-text2"><li>If you started a company today, what are three characteristics you would build it on?</li></p>
                    <p className="companydata-text2"><li>What questions do you have about the firm?</li></p>
                    <p className="companydata-text2"><li>What Excel formulas do you know, and walk me through how you would use them.</li></p>
                    <p className="companydata-text2"><li>If you were starting a company, what values would you focus on?</li></p>
                    <p className="companydata-text2"><li>If you had to explain what consulting is to your family, what would you say?</li></p>
                    <p className="companydata-text2"><li>Describe a challenge you have faced and how to overcome it?</li></p>
                    <p className="companydata-text2"><li>Tell me a time that there was a conflict in a group, and how did you handle it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time your group had low morale, and what did you do about it?</li></p>
                    <p className="companydata-text2"><li>How would you increase revenues for a parking lot that is by a university but independent of it?</li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>What are you passionate about?</li></p>
                    <p className="companydata-text2"><li>Describe a difficult situation you faced that required a response.</li></p>
                    <p className="companydata-text2"><li>Provide an example of a professional goal you set and accomplished.</li></p>
                    <p className="companydata-text2"><li>Tell me how you would solve this problem using a pivot table.</li></p>
                    <p className="companydata-text2"><li>What will you contribute to our company?</li></p>
                    <p className="companydata-text2"><li>Please tell us when you worked on a project team and dealt with a team member who was not doing their share of the project. Talk about the project, how you handled that situation and the outcome</li></p>
                </div>
            );
    }
};
