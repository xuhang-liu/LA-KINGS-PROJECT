import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JacobsIQ(props){
    const [filter, setFilter] = useState("Engineer");
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
              className={decideClassName(filter, "Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Engineer")}
          >
              Engineer
          </button>
          <button
              className={decideClassName(filter, "Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Engineer":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to work at Jacobs?</li></p>
                    <p className="companydata-text2"><li>Why did you choose this role in particular?</li></p>
                    <p className="companydata-text2"><li>Would you preferably travel to the past or future?</li></p>
                    <p className="companydata-text2"><li>What is your most significant achievement up to date? </li></p>
                    <p className="companydata-text2"><li>What is the biggest challenge in this role?</li></p>
                    <p className="companydata-text2"><li>What can you bring to Jacobs?</li></p>
                    <p className="companydata-text2"><li>Describe a typical biopharmaceutical process.</li></p>
                    <p className="companydata-text2"><li>What is your most significant work accomplishment?</li></p>
                    <p className="companydata-text2"><li>Why have you chosen to apply for this role and to Jacobs?</li></p>
                    <p className="companydata-text2"><li>What do you think will be the most challenging part of the role? </li></p>
                    <p className="companydata-text2"><li>What could you bring to the company?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in a consultancy?</li></p>
                    <p className="companydata-text2"><li>Draw the SF and BM diagrams for these beams.</li></p>
                    <p className="companydata-text2"><li>Have you ever missed a work-related deadline? What is your approach to meeting deadlines?</li></p>
                    <p className="companydata-text2"><li>Talk more about your experience.</li></p>
                    <p className="companydata-text2"><li>Tell us about your work history.</li></p>
                    <p className="companydata-text2"><li>What are your best skills, in your opinion?</li></p>
                    <p className="companydata-text2"><li>List 10 things to do with a brick and a monkey.</li></p>
                    <p className="companydata-text2"><li>What do you do when you have to work with someone you do not get along with?</li></p>
                    <p className="companydata-text2"><li>Why did you choose to apply to Jacobs?</li></p>
                    <p className="companydata-text2"><li>What is your biggest weakness?</li></p>
                    <p className="companydata-text2"><li>What did you learn during your internship? </li></p>
                    <p className="companydata-text2"><li>Where do you want to see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Describe the three modes of heat transfer.</li></p>
                    <p className="companydata-text2"><li>What was your favorite subject and why?</li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>Are you familiar with X, Y, Z project manager tools?</li></p>
                    <p className="companydata-text2"><li>What part of the company would I want to go into?</li></p>
                    <p className="companydata-text2"><li>How do you adapt to a new environment?</li></p>
                    <p className="companydata-text2"><li>If handed an assignment after it had already started, what do you do when you receive it?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell us about a time where you had to use teamwork to solve a problem.</li></p>
                    <p className="companydata-text2"><li>What is your biggest weakness?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself. </li></p>
                    <p className="companydata-text2"><li>Why did you choose electrical engineering?</li></p>
                    <p className="companydata-text2"><li>What’s your favorite movie?</li></p>
                    <p className="companydata-text2"><li>What do you know about Jacobs?</li></p>
                    <p className="companydata-text2"><li>What do you like to do?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>What sets you apart from others?</li></p>
                    <p className="companydata-text2"><li>Experience with MS Office.</li></p>
                    <p className="companydata-text2"><li>Name a time you implemented safety on a project.</li></p>
                    <p className="companydata-text2"><li>When have you worked well in a group?</li></p>
                    <p className="companydata-text2"><li>When have you found an innovative solution to a problem?</li></p>
                    <p className="companydata-text2"><li>Describe when you have handled large volumes of data.</li></p>
                </div>
            );
    }
};
