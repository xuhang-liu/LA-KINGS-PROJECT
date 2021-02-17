import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function GartnerIQ(props){
    const [filter, setFilter] = useState("Associate");
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
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Executive")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Executive")}
          >
              Executive
          </button>
          <button
              className={decideClassName(filter, "Research Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Research Specialist")}
          >
              RS
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
                    <p className="companydata-text2"><li>What interested you in sales, and why you would be useful in the role?</li></p>
                    <p className="companydata-text2"><li>Describe your current role.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Tell me what you know about Gartner.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>Should this company enter the electronic car business?</li></p>
                    <p className="companydata-text2"><li>What does the company Gartner do?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you went above and beyond for a customer.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had a disagreement with a manager and how you handled it. </li></p>
                </div>
            );
        case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell us about a time you were managing a project.</li></p>
                    <p className="companydata-text2"><li>What do you know about Gartner?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to deal with a team member conflict and how you resolved it.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you were challenged.</li></p>
                    <p className="companydata-text2"><li>What scares you about sales? </li></p>
                    <p className="companydata-text2"><li>What makes you think you'll succeed in sales?</li></p>
                    <p className="companydata-text2"><li>What is some feedback that you've received during previous interview rounds?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself, but only in two sentences.</li></p>
                    <p className="companydata-text2"><li>What are some of the challenges you have faced?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to influence a stakeholder.</li></p>
                </div>
            );
        case "Executive":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to work for Gartner?</li></p>
                    <p className="companydata-text2"><li>What was your most significant achievement in your career so far?</li></p>
                    <p className="companydata-text2"><li>Are you a hunter or a farmer? </li></p>
                    <p className="companydata-text2"><li>Tell me a little bit about yourself.</li></p>
                    <p className="companydata-text2"><li>Why sales? </li></p>
                    <p className="companydata-text2"><li>Describe a time you didn’t achieve a goal.</li></p>
                    <p className="companydata-text2"><li>Describe your ability to sell something that is "nice to have" and not a "need to have.”</li></p>
                    <p className="companydata-text2"><li>What is your current quota, and how are you performing on it?</li></p>
                    <p className="companydata-text2"><li>What are the Gartner values?</li></p>
                    <p className="companydata-text2"><li>Describe a time you acted on feedback at work.</li></p>
                    <p className="companydata-text2"><li>What do you think is the biggest challenge on the mind of the CFO?</li></p>
                    <p className="companydata-text2"><li>What was your previous ACV? </li></p>
                    <p className="companydata-text2"><li>What do you aim to get from this interview?</li></p>
                    <p className="companydata-text2"><li>How have you applied this knowledge after?</li></p>
                </div>
            );
        case "Research Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Research Specialist</p>
                    <p className="companydata-text2"><li>Tell me about a time where you disagreed with your peers, and how did you convince them?</li></p>
                    <p className="companydata-text2"><li>What is a cool idea you have encountered recently?</li></p>
                    <p className="companydata-text2"><li>A problematic situation where your client was upset, and you turned things around.</li></p>
                    <p className="companydata-text2"><li>What have you learned recently from the news or something you read?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Why are you interested in the position?</li></p>
                    <p className="companydata-text2"><li>Difference between relational and non-relational databases.</li></p>
                    <p className="companydata-text2"><li>What’s one time where you influenced a supervisor’s final decision on a work matter?</li></p>
                    <p className="companydata-text2"><li>How would you explain regression to your grandfather?</li></p>
                    <p className="companydata-text2"><li>What do you like the most about Gartner?</li></p>
                </div>
            );
    }
};
