import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function DeloitteIQ(props){
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
          <button
              className={decideClassName(filter, "Q5")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q5")}
          >
              Q5
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Q1":
            return(
                <div>
                    <p className="companydata-text2"><li>We put a great deal of pride in our customer service at Deloitte Consulting. How will you contribute to our high customer service standards?</li></p>
                    <p className="companydata-text2"><li>Deloitte Consulting seeks to hire those with above average communication skills. Describe your communication style to me.</li></p>
                    <p className="companydata-text2"><li>Our industry is a competitive one. Why do you specifically want to work for Deloitte Consulting?</li></p>
                    <p className="companydata-text2"><li>Give me an example of a time when you had to be extra diligent in order to meet a deadline.</li></p>
                    <p className="companydata-text2"><li>How do you make tough decisions knowing they will affect your entire team?</li></p>
                    <p className="companydata-text2"><li>Tell me something about yourself that I wouldn't know from reading your resume.</li></p>
                    <p className="companydata-text2"><li>What characteristics or events have contributed towards your success as a leader?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you evaluate success among your team members?</li></p>
                    <p className="companydata-text2"><li>Describe to me your ideal employer.</li></p>
                    <p className="companydata-text2"><li>Do you always double check or proofread your work?</li></p>
                    <p className="companydata-text2"><li>When have you had to change a major component of your project due to new information being presented?</li></p>
                    <p className="companydata-text2"><li>When you suffer a setback, how does that emotionally affect you and your work?</li></p>
                    <p className="companydata-text2"><li>How would your most recent manager describe you?</li></p>
                    <p className="companydata-text2"><li>When have you worked amongst a diverse group of people?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>What type of manager brings out the best in you?</li></p>
                    <p className="companydata-text2"><li>Have you progressed in your career as you have expected?</li></p>
                    <p className="companydata-text2"><li>If you were hired today, what would you accomplish first?</li></p>
                    <p className="companydata-text2"><li>How would you make Deloitte Management Consulting more profitable?</li></p>
                    <p className="companydata-text2"><li>How do you learn the company culture of a new client, when taking on their project?</li></p>
                    <p className="companydata-text2"><li>How do you manage the lifecycle of your projects, ensuring on-time deliveries, and deadlines?</li></p>
                    <p className="companydata-text2"><li>What steps do you take when researching a new market or industry?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you react when your team misses a deadline?</li></p>
                    <p className="companydata-text2"><li>In your opinion, what makes you a great problem solver?</li></p>
                    <p className="companydata-text2"><li>How do you prioritize multiple projects when they all seem equally important?</li></p>
                    <p className="companydata-text2"><li>What do you believe is the most important service we offer at Deloitte Management Consulting?</li></p>
                    <p className="companydata-text2"><li>What will be the greatest challenges faced in this job? How will you overcome these challenges?</li></p>
                    <p className="companydata-text2"><li>What have you done in the last few months to strengthen your professional network?</li></p>
                    <p className="companydata-text2"><li>What is the most challenging client issue you have faced this year? How did you overcome the situation?</li></p>
                </div>
            );
        case "Q5":
            return(
                <div>
                    <p className="companydata-text2"><li>Do you consider yourself a persuasive person?</li></p>
                    <p className="companydata-text2"><li>What are the components of a successful, and effective, presentation?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you had to collaborate with a colleague with whom you did not see eye-to-eye. How did you ensure that you got along well enough to make it a success?</li></p>
                </div>
            );
    }
};
