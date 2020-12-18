import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MTBIQ(props){
    const [filter, setFilter] = useState("Management Development Program");
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
              className={decideClassName(filter, "Management Development Program")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Management Development Program")}
          >
              MDP
          </button>
          <button
              className={decideClassName(filter, "Relationship Banker")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Relationship Banker")}
          >
              RB
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Management Development Program":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Management Development Program</p>
                    <p className="companydata-text2"><li>Tell me about when you were involved in a group project, and someone was not pulling their weight. How did you handle the situation?</li></p>
                    <p className="companydata-text2"><li>How would you be a brand ambassador for the bank?</li></p>
                    <p className="companydata-text2"><li>What leadership experience do you bring with you?</li></p>
                    <p className="companydata-text2"><li>How would you balance your time at your home branch and outside the branch for training?</li></p>
                    <p className="companydata-text2"><li>What is the function of a commercial bank?</li></p>
                    <p className="companydata-text2"><li>What is the function of a commercial bank?</li></p>
                    <p className="companydata-text2"><li>What are some characteristics of people that you dislike?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in this particular program?</li></p>
                    <p className="companydata-text2"><li>What would you do to motivate people?</li></p>
                    <p className="companydata-text2"><li>Who was your role model growing up?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you faced a conflict in your workplace?</li></p>
                    <p className="companydata-text2"><li>What is it that M&T Bank does that is different from others?</li></p>
                    <p className="companydata-text2"><li>What was the most complex data analysis you've ever had to do?</li></p>
                    <p className="companydata-text2"><li>Name a time when you have to give a presentation but was asked a question you could not answer. What did you do?</li></p>
                    <p className="companydata-text2"><li>What characteristics do you think a good leader should possess?</li></p>
                </div>
            );
        case "Relationship Banker":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Relationship Banker</p>
                    <p className="companydata-text2"><li>What’s your objective for obtaining this job? Do you see yourself here for an extended period?</li></p>
                    <p className="companydata-text2"><li>How did you deal with a disgruntled customer, and was the customer satisfied as a result?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you offered someone something, they declined and then had to persuade them/offer them something else. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you felt you went above and beyond for a client.</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses in terms of customer service?</li></p>
                </div>
            );
    }
};
