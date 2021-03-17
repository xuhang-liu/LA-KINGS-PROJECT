import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function WorkdayIQ(props){
    const [filter, setFilter] = useState("Software engineer");
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
              className={decideClassName(filter, "Software engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software engineer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Applications developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Applications developer")}
          >
              AD
          </button>
          <button
              className={decideClassName(filter, "Product manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Product manager")}
          >
              PM
          </button>
          <button
              className={decideClassName(filter, "Engagement manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Engagement manager")}
          >
              EM
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
        default: case "Software engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software engineer</p>
                    <p className="companydata-text2"><li>Tell us about some of your past experiences working in this field.</li></p>
                    <p className="companydata-text2"><li>Talk about yourself and how you would fit this role.</li></p>
                    <p className="companydata-text2"><li>What is polymorphism?</li></p>
                    <p className="companydata-text2"><li>Explain distributed microservices? </li></p>
                    <p className="companydata-text2"><li>Explain how services scale?</li></p>
                    <p className="companydata-text2"><li>How is performance monitoring done?</li></p>
                    <p className="companydata-text2"><li>Describe a previous project.</li></p>
                </div>
            );
        case "Applications developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Applications developer</p>
                    <p className="companydata-text2"><li>How can you reverse a string without dynamic memory allocation or temporary variables (aside from indexer)?</li></p>
                    <p className="companydata-text2"><li>Assume you have an app that collects user data, draw some SQL tables that you could use to store this data.</li></p>
                    <p className="companydata-text2"><li>What are some examples of collections?</li></p>
                    <p className="companydata-text2"><li>What's your favorite data structure and why?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work at Workday?</li></p>
                </div>
            );
        case "Product manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Product manager</p>
                    <p className="companydata-text2"><li>What is a primary characteristic of a good Project Manager?</li></p>
                    <p className="companydata-text2"><li>After selecting a product to discuss the primary personas, how you would grow the product, how you prioritize the growth</li></p>
                    <p className="companydata-text2"><li>Talk me through your background/experience. </li></p>
                    <p className="companydata-text2"><li>Tell me about something that didn't go right.</li></p>
                    <p className="companydata-text2"><li>What interests you about the role?</li></p>
                    <p className="companydata-text2"><li>What was a situation in which you handled tradeoffs?</li></p>
                    <p className="companydata-text2"><li>What is Design Thinking?</li></p>
                    <p className="companydata-text2"><li>Give an example of a time when you were asked to do something that you disagreed with. How did you go about your task, and what was the outcome?</li></p>
                    <p className="companydata-text2"><li>What are some of your favorite applications? If you were a PM for that app, what would you change about it?</li></p>
                    <p className="companydata-text2"><li>How do you engage customers in the product development process?</li></p>
                    <p className="companydata-text2"><li>What is your favorite app, and why?</li></p>
                </div>
            );
        case "Engagement manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Engagement manager</p>
                    <p className="companydata-text2"><li>Give an example of an end-to-end project you’re running.</li></p>
                    <p className="companydata-text2"><li>What are you currently doing for work?</li></p>
                    <p className="companydata-text2"><li>When was the last time you led a project?</li></p>
                    <p className="companydata-text2"><li>What would your coworkers say about you?</li></p>
                    <p className="companydata-text2"><li>How do you stay organized?</li></p>
                    <p className="companydata-text2"><li>Do you have any experience in implementing HRS software systems?</li></p>
                    <p className="companydata-text2"><li>What did you do to prepare for your trip to interview with us?</li></p>
                </div>
            );
        case "Consultant ":
            return(
                <div>
                    <p className="companydata-text2"><li>How familiar are you with specialized software?</li></p>
                    <p className="companydata-text2"><li>What kind of projects have you worked on?</li></p>
                    <p className="companydata-text2"><li>Describe yourself in three words.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Which area do you have a preference for?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you were presented with a technical issue and how you resolved it.</li></p>
                    <p className="companydata-text2"><li>Describe a time that you wish you would've done things differently.</li></p>
                    <p className="companydata-text2"><li>What are something you would like to do more of and something you would like to do less?</li></p>
                    <p className="companydata-text2"><li>What do you think your chances are of getting this job?</li></p>
                    <p className="companydata-text2"><li>Tell me about how you deal with demanding customers.</li></p>
                    <p className="companydata-text2"><li>Tell us a time when you had to figure out a blocker in the project? How did you handle it in detailed steps?</li></p>
                </div>
            );
    }
};
