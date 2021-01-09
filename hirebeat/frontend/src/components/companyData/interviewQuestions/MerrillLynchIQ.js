import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MerrillLynchIQ(props){
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
                    <p className="companydata-text2"><li>Merrill Lynch provides fundamental insights and analysis for clients in the equity, fixed income, currency, and commodities markets. Which areas of research are most important to you?</li></p>
                    <p className="companydata-text2"><li>How does Merrill Lynch keep its clients informed on critical finance-related topics?</li></p>
                    <p className="companydata-text2"><li>What can you do for Merrill Lynch that other candidates cannot?</li></p>
                    <p className="companydata-text2"><li>Talk to me about one piece of financial news you are currently following.</li></p>
                    <p className="companydata-text2"><li>Where do you see the economy going this year?</li></p>
                    <p className="companydata-text2"><li>What are the three most important traits for a high-end wealth management professional to possess?</li></p>
                    <p className="companydata-text2"><li>If you advised a client to hedge against risk in their portfolio, but they wanted to take an alternate action that could hurt their long-term goals, what would you do?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your professional mission statement?</li></p>
                    <p className="companydata-text2"><li>If you helped someone make their first investment, what are the first steps you would take?</li></p>
                    <p className="companydata-text2"><li>What is your professional mission statement?</li></p>
                    <p className="companydata-text2"><li>If you helped someone make their first investment, what are the first steps you would take?</li></p>
                    <p className="companydata-text2"><li>Merrill Lynch wants to ensure that you are a strategic fit. Tell me more about your investing strategy.</li></p>
                    <p className="companydata-text2"><li>Tell me about your professional designations, and how you aim to further your education in the next three years.</li></p>
                    <p className="companydata-text2"><li>Name for me one significant deal or accomplishment by Merrill Lynch in the last 12 months.</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>What differentiates Merrill Lynch from other high-end wealth management firms?</li></p>
                    <p className="companydata-text2"><li>Tell me about a stock you follow. Why should I buy them?</li></p>
                    <p className="companydata-text2"><li>Merrill Lynch wealth managers work independently. What makes you an entrepreneurial minded professional?</li></p>
                    <p className="companydata-text2"><li>Please define CAPM for me.</li></p>
                    <p className="companydata-text2"><li>Give me an example of someone in the finance industry with a lot of integrity.</li></p>
                    <p className="companydata-text2"><li>Do you consider yourself analytically minded, or more creatively driven?</li></p>
                    <p className="companydata-text2"><li>If hired at Merrill Lynch how will you show our clients that you are a trusted resource?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>What factors most significantly impact the wealth management industry, today?</li></p>
                    <p className="companydata-text2"><li>Think about a demanding boss, client, or co-worker. How did you learn to interact with this individual?</li></p>
                    <p className="companydata-text2"><li>At Merrill Lynch you will be presented with new information every day. Talk to me about your preferred learning style.</li></p>
                    <p className="companydata-text2"><li>Tell me about your biggest failure and how you recovered.</li></p>
                    <p className="companydata-text2"><li>The wealth management industry is highly competitive. When it comes to your performance, would you say you 'love to win,' or you 'hate to lose?'</li></p>
                    <p className="companydata-text2"><li>Have you ever bent or broken any policies to make a client happy?</li></p>
                    <p className="companydata-text2"><li>How would you sell an investment product you did not believe in?</li></p>
                    <p className="companydata-text2"><li>Are you applying for jobs with any Merrill Lynch direct competitors?</li></p>
                    <p className="companydata-text2"><li>What questions do you have for me on this job, and working for Merrill Lynch?</li></p>
                </div>
            );
    }
};
