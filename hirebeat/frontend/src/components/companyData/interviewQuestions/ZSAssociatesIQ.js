import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ZSAssociatesIQ(props){
    const [filter, setFilter] = useState("Business Analyst");
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
              className={decideClassName(filter, "Business Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Analyst")}
          >
              BA
          </button>
          <button
              className={decideClassName(filter, "Decision Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Decision Analyst")}
          >
              DA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>How can your BTech degree help in a business operation analyst position?</li></p>
                    <p className="companydata-text2"><li>Why do you want to join ZS?</li></p>
                    <p className="companydata-text2"><li>Why you?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and why ZS?</li></p>
                    <p className="companydata-text2"><li>How will we be able to profit from you?</li></p>
                    <p className="companydata-text2"><li>How did you help your peers in learning?</li></p>
                </div>
            );
        case "Decision Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Decision Analyst</p>
                    <p className="companydata-text2"><li>How did you hear of ZS? </li></p>
                    <p className="companydata-text2"><li>Why you specifically? </li></p>
                    <p className="companydata-text2"><li>Tell me about your experience.</li></p>
                    <p className="companydata-text2"><li>Can you talk about your past analytics projects?</li></p>
                    <p className="companydata-text2"><li>What was the biggest challenge you faced in one of your projects, and how did you overcome it?</li></p>
                    <p className="companydata-text2"><li>One policy that you would change if you were the prime minister of the company?</li></p>
                    <p className="companydata-text2"><li>Describe a situation in which you felt that your Manager/ teacher was a good role model.</li></p>
                    <p className="companydata-text2"><li>What was an Extreme situation you faced; how did you tackle it?</li></p>
                    <p className="companydata-text2"><li>What did you do in stressed situations, how do you deal with it?</li></p>
                    <p className="companydata-text2"><li>What is the number of cabs at a Delhi airport?</li></p>
                    <p className="companydata-text2"><li>When things did not go your way or according to your plan, what happened, what did you do?</li></p>
                    <p className="companydata-text2"><li>Are you a person who would follow others’ plans or likes to plan or work things out along the way?</li></p>
                    <p className="companydata-text2"><li>Describe a situation while working in a team in which you went abroad and beyond?</li></p>
                    <p className="companydata-text2"><li>Describe a situation in which, while working in a team, you could not meet deadlines?</li></p>
                    <p className="companydata-text2"><li>How many traffic lights are there in a particular city(based on the cities you have visited in college or school or are currently staying in)?</li></p>
                    <p className="companydata-text2"><li>What would you consider when designing a subway system?</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you were an example of other people.</li></p>
                </div>
            );
    }
};
