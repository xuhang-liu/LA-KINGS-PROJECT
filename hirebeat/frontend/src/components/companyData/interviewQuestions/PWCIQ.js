import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function PWCIQ(props){
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
                    <p className="companydata-text2"><li>How would you explain the management consulting industry to someone who is unfamiliar?</li></p>
                    <p className="companydata-text2"><li>Who are our clients at PricewaterhouseCoopers?</li></p>
                    <p className="companydata-text2"><li>As a management consultant, who is your ideal client?</li></p>
                    <p className="companydata-text2"><li>At PricewaterhouseCoopers, we use leading-edge technology. Which management tools have you used in your career?</li></p>
                    <p className="companydata-text2"><li>In your opinion, why do companies need consultants?</li></p>
                    <p className="companydata-text2"><li>How do you keep up to date on the changes in our industry, from regulations to tech?</li></p>
                    <p className="companydata-text2"><li>In consulting, much of your growth will come from feedback on client projects. How do you accept and implement feedback?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>Who are the biggest competitors of PricewaterhouseCoopers, and how do we stand out from the rest?</li></p>
                    <p className="companydata-text2"><li>WOur best consultants continually grow and learn. What have you done to expand your knowledge in the past three months?</li></p>
                    <p className="companydata-text2"><li>How would you make PricewaterhouseCoopers more profitable?</li></p>
                    <p className="companydata-text2"><li>How do you exercise logic?</li></p>
                    <p className="companydata-text2"><li>How do you learn the company culture of a new client, when taking on their project?</li></p>
                    <p className="companydata-text2"><li>How do you manage the lifecycle of your projects, ensuring on-time deliverables, and deadlines?</li></p>
                    <p className="companydata-text2"><li>What steps do you take when researching a new market or industry?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you react when your team misses a deadline?</li></p>
                    <p className="companydata-text2"><li>In your opinion, what makes you a great problem solver?</li></p>
                    <p className="companydata-text2"><li>How do you prioritize multiple projects when they all seem equally important?</li></p>
                    <p className="companydata-text2"><li>What do you believe is the most important service we offer at PricewaterhouseCoopers?</li></p>
                    <p className="companydata-text2"><li>Have you ever supervised or trained junior consultants?</li></p>
                    <p className="companydata-text2"><li>PricewaterhouseCoopers works with clients across many industries. Which of our clients' industries interests you the most?</li></p>
                    <p className="companydata-text2"><li>What do you think makes a good management consultant?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>What will be the greatest challenges faced in this job? How will you overcome these challenges?</li></p>
                    <p className="companydata-text2"><li>What do you believe are the most critical KPIs for a management consulting firm to consider?</li></p>
                    <p className="companydata-text2"><li>What is the most challenging client issue you have faced this year? How did you overcome the situation?</li></p>
                    <p className="companydata-text2"><li>Do you consider yourself a persuasive person?</li></p>
                    <p className="companydata-text2"><li>What are the components of a successful, and effective, presentation?</li></p>
                    <p className="companydata-text2"><li>How does a career in management consulting fulfill and satisfy you?</li></p>
                    <p className="companydata-text2"><li>How can PricewaterhouseCoopers motivate you?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you had to collaborate with a colleague with whom you did not see eye-to-eye. How did you ensure that you got along well enough to make it a success?</li></p>
                </div>
            );
    }
};
