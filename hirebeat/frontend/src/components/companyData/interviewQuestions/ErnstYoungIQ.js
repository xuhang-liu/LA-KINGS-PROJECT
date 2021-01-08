import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ErnstYoungIQ(props){
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
                    <p className="companydata-text2"><li>List the top 3 skills that you have acquired in your last role.</li></p>
                    <p className="companydata-text2"><li>If you joined the team here at Ernst and Young, how would you build relationships with those that you would be working closely with?</li></p>
                    <p className="companydata-text2"><li>If you were asked to review a colleague's code that they had written, what key things would you look for?</li></p>
                    <p className="companydata-text2"><li>In your experience as a Financial Analyst, what do you feel is the best metric to gauge a company's future stock performance?</li></p>
                    <p className="companydata-text2"><li>As we work with clients on assessing potentials mergers and/or acquisition, valuation is an important skills to possess. How would you go about placing a value on an organization for a client?</li></p>
                    <p className="companydata-text2"><li>Here at Ernst and Young, we are expecting someone with strong leadership skills to take this role. How would you describe your management style?</li></p>
                    <p className="companydata-text2"><li>At Ernst and Young, we take security risks very importantly in our products. In your experience, what are the biggest security risks in software and what is your experience in any prevention methods?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>How would you define what working capital is for a company and what does its measurement mean?</li></p>
                    <p className="companydata-text2"><li>Among the common issues that are faced by Data Analysts in their work, which one or two problems do you feel really challenge analysts in the financial industry?</li></p>
                    <p className="companydata-text2"><li>The day-to-day life at Ernst and Young can be hectic and stressful at times. If hired for this role, how would you keep yourself motivated when working with stressed colleagues and pushy clients?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you had to analyze information in order to make a recommendation.</li></p>
                    <p className="companydata-text2"><li>We pride ourselves on our interdepartmental teamwork here at Ernst and Young. If hired for this role, what kind of team player could we expect you to be?</li></p>
                    <p className="companydata-text2"><li>Think back over your career up to today and tell me about the most difficult day on the job you encountered. What made the day difficult and how did you handle that situation?</li></p>
                    <p className="companydata-text2"><li>If hired to this role here at Ernst and Young, what do you see as one initial hurdle you will have to overcome in your first weeks on the job?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Can you think of a situation where raising debt over equity would be beneficial?</li></p>
                    <p className="companydata-text2"><li>How do you believe your coworkers would describe you?</li></p>
                    <p className="companydata-text2"><li>If hired for this position at Ernst and Young, what factors would you consider part as part of an organization's long-term liability?</li></p>
                    <p className="companydata-text2"><li>What statistical analysis tools do you have experience working with?</li></p>
                    <p className="companydata-text2"><li>What programming languages would you consider yourself fluent in?</li></p>
                    <p className="companydata-text2"><li>If you noticed that a company's balance sheet was showing increased amounts of accounts receivables, what future impacts to that company would you consider to be feasible?</li></p>
                    <p className="companydata-text2"><li>Here at Ernst and Young, we strive for continuous delivery and continuous deployment with our software. Are you familiar with these processes in your current work?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Are you familiar with KYC and how it impacts our business at Ernst and Young?</li></p>
                    <p className="companydata-text2"><li>In working with financial data here at Ernst and Young, what are the steps you would take in the data validation process as part of your work?</li></p>
                    <p className="companydata-text2"><li>What software programs do you use in your current work and how adaptable would you say that you are in learning and using new programs?</li></p>
                    <p className="companydata-text2"><li>What SDLC models are you familiar in working with?</li></p>
                    <p className="companydata-text2"><li>One huge philosophy that we believe in at Ernst and Young is professional development. How have you worked to develop yourself professionally throughout your career?</li></p>
                    <p className="companydata-text2"><li>In this role here at Ernst and Young, we will rely on you to conduct thorough presentations with clients. How would your rate your overall presentation skills and why would you give yourself that rating?</li></p>
                </div>
            );
    }
};
