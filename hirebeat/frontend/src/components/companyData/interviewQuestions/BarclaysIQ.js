import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BarclaysIQ(props){
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
                    <p className="companydata-text2"><li>How would you define what working capital is for a company and what does its measurement mean?</li></p>
                    <p className="companydata-text2"><li>Among the common issues that are faced by Data Analysts in their work, which one or two problems do you feel really challenge analysts in the financial industry?</li></p>
                    <p className="companydata-text2"><li>Give an example of a time that you had to resolve a difficult situation with a client or customer. What were the keys to coming to a successful solution?</li></p>
                    <p className="companydata-text2"><li>At Barclays Leveraged Finance, our Financial Analysts have to often work under a tight deadline. Talk about a time you had to work under a tight deadline in the past. How did you handle that situation and what made it a success?</li></p>
                    <p className="companydata-text2"><li>This position at Barclays Leveraged Finance has generated a lot of interest from applicants. What do you feel is the one quality that sets you apart from others we are speaking with about this position?</li></p>
                    <p className="companydata-text2"><li>If you noticed that a company's balance sheet was showing increased amounts of accounts receivables, what future impacts to that company would you consider to be feasible?</li></p>
                    <p className="companydata-text2"><li> Barclays Leveraged Finance is looking for employees who are dedicated to their clients. How often do you take work home with you?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>Can you think of a situation where raising debt over equity would be beneficial?</li></p>
                    <p className="companydata-text2"><li>If hired for this role at Barclays Leveraged Finance, I want to be sure that I'm hiring a motivated individual. What motivates you in your daily work and your career?</li></p>
                    <p className="companydata-text2"><li>If hired for this position at Barclays Leveraged Finance, what factors would you consider part as part of an organization's long-term liability?</li></p>
                    <p className="companydata-text2"><li>Give me an example of a time that you had to solve a problem without having all of the necessary information at hand to do so. How did you handle that situation?</li></p>
                    <p className="companydata-text2"><li>We want our advising team at Barclays Leveraged Finance to be happy and healthy. How do you manage the day to day stress of being a financial advisor?</li></p>
                    <p className="companydata-text2"><li>How can Barclays Leveraged Finance motivate you on the job?</li></p>
                    <p className="companydata-text2"><li>When have you shown a willingness to learn a new method or new approach to solving a problem?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Barclays Leveraged Finance strives for client loyalty to keep us running strong into the future. What do you feel are the keys to retaining clients for the long haul?</li></p>
                    <p className="companydata-text2"><li>In your experience as a Financial Analyst, what do you feel is the best metric to gauge a company's future stock performance?</li></p>
                    <p className="companydata-text2"><li>At Barclays Leveraged Finance, we are building a massive machine learning program and your role as a Data Scientist will be an integral part of that project. What experiences will you bring to that side of this job?</li></p>
                    <p className="companydata-text2"><li>At Barclays Leveraged Finance, our clients are the lifeblood of our business and we do everything in our power to make them happy. What does the term customer service mean to you in your work?</li></p>
                    <p className="companydata-text2"><li>Take a couple of minutes to sell this notepad to me.</li></p>
                    <p className="companydata-text2"><li>In working with financial data here at Barclays Leveraged Finance, what are the steps you would take in the data validation process as part of your work?</li></p>
                    <p className="companydata-text2"><li>List the top 3 skills that you have acquired in your last role.</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>We are looking for the most motivated individuals to join the team here at Barclays Leveraged Finance. Where would you like your career to take you in the next five to ten years?</li></p>
                    <p className="companydata-text2"><li>What statistical models are you familiar with and which do you feel would best apply to the financial field here at Barclays Leveraged Finance?</li></p>
                    <p className="companydata-text2"><li>In this role with Barclays Leveraged Finance, we will rely on your organized and methodical approach to provide financial analysis reporting. What does your current reporting process consist of?</li></p>
                    <p className="companydata-text2"><li>What is the most attractive thing in your eyes about this role with Barclays Leveraged Finance?</li></p>
                    <p className="companydata-text2"><li>Talk to me about a challenging situation you had to handle on the job that involved another colleague. How did you handle that situation?</li></p>
                    <p className="companydata-text2"><li>What statistical analysis tools do you have experience working with?</li></p>
                </div>
            );
    }
};
