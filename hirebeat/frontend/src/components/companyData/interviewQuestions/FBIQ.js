import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function FBIQ(props){
    const [filter, setFilter] = useState("Q1");
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
              className={decideClassName(filter, "Q1")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q1")}
          >
              Q1
          </button>
          <button
              className={decideClassName(filter, "Q2")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q2")}
          >
              Q2
          </button>
          <button
              className={decideClassName(filter, "Q3")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q3")}
          >
              Q3
          </button>
          <button
              className={decideClassName(filter, "Q4")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q4")}
          >
              Q4
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Q1":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to be part of the Facebook team?</li></p>
                    <p className="companydata-text2"><li>What do you do on your best day at work?</li></p>
                    <p className="companydata-text2"><li>Tell me about an instance where you lost track of time in the best possible way.</li></p>
                    <p className="companydata-text2"><li>How do you plan to contribute to Facebook's mission and values?</li></p>
                    <p className="companydata-text2"><li>Name for me the best business feature you have seen Facebook roll out this year.</li></p>
                    <p className="companydata-text2"><li>Facebook purchased Instagram for $1 Billion. What do you believe is Instagram's best feature?</li></p>
                    <p className="companydata-text2"><li>At Facebook, how will you stand out in a sea of exceptional talent?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>People are at the heart of every connection we build. How will you establish relationships with your new co-workers?</li></p>
                    <p className="companydata-text2"><li>At Facebook, we give you new problems to solve on a daily basis. What is your problem-solving approach?</li></p>
                    <p className="companydata-text2"><li>What are Facebook's five core values, and what do they mean to you?</li></p>
                    <p className="companydata-text2"><li>What are your top 3 core values, and how do they influence your work?</li></p>
                    <p className="companydata-text2"><li>Facebook encourages employees to be authentic and unique. What makes you authentically you?</li></p>
                    <p className="companydata-text2"><li>Creativity and innovation are key competencies on Facebook. What does the word 'innovation' mean to you?</li></p>
                    <p className="companydata-text2"><li>How do you like to be recognized for your accomplishments?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Change is par for the course with Facebook. When have you had to adapt to change?</li></p>
                    <p className="companydata-text2"><li>Facebook emphasizes hiring people who fit into our workplace culture. How would you describe your personality?</li></p>
                    <p className="companydata-text2"><li>Facebook celebrates diversity. In which ways do you honor those different from you?</li></p>
                    <p className="companydata-text2"><li>Tell me about the best team collaboration in your career, so far.</li></p>
                    <p className="companydata-text2"><li>How do you prevent burnout and remain highly motivated?</li></p>
                    <p className="companydata-text2"><li>What would you have done if we did not show up to this interview, today?</li></p>
                    <p className="companydata-text2"><li>What is the kindest thing your current boss has ever said about you?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>What do you believe are the biggest challenges Facebook will encounter this year?</li></p>
                    <p className="companydata-text2"><li>Name for me one skill mentioned in our job posting, that you do not possess. How will you gain that skill?</li></p>
                    <p className="companydata-text2"><li>The environment is fast-paced and challenging on Facebook. How do you determine priorities when you have multiple projects due?</li></p>
                    <p className="companydata-text2"><li>What role do you usually take in team projects?</li></p>
                    <p className="companydata-text2"><li>What advice would you give to a colleague who was stressed out?</li></p>
                    <p className="companydata-text2"><li>Would you consider yourself a creative person?</li></p>
                    <p className="companydata-text2"><li>Facebook is committed to supporting your career growth. How could we further develop you in the next 6 months?</li></p>
                    <p className="companydata-text2"><li>What is the riskiest decision you have ever made in your career?</li></p>
                </div>
            );
    }
};
