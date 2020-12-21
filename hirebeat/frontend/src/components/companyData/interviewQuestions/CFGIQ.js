import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CFGIQ(props){
    const [filter, setFilter] = useState("Personal Banker");
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
              className={decideClassName(filter, "Personal Banker")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Personal Banker")}
          >
              Banker
          </button>
          <button
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Capital Markets Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Capital Markets Analyst")}
          >
              CMA
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
          <button
              className={decideClassName(filter, "Bank Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Bank Teller")}
          >
              Teller
          </button>
          <button
              className={decideClassName(filter, "Commercial Banking Development")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Commercial Banking Development")}
          >
              CBD
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Personal Banker":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Personal Banker</p>
                    <p className="companydata-text2"><li>Why does Citizens bank interest you?</li></p>
                    <p className="companydata-text2"><li>Describe a time you had to make a difficult decision.</li></p>
                    <p className="companydata-text2"><li>Why Citizens?</li></p>
                    <p className="companydata-text2"><li>Explain a customer service issue you had to resolve in the past.</li></p>
                    <p className="companydata-text2"><li>What type of sales background do you have?</li></p>
                    <p className="companydata-text2"><li>When talking with a customer about their outside investments, if the customer said they were all set, how would you overcome this objection?</li></p>
                    <p className="companydata-text2"><li>Why are you looking for a career in Banking?</li></p>
                    <p className="companydata-text2"><li>Why do you want to get into the industry?</li></p>
                    <p className="companydata-text2"><li>What’s your goals, and how this position would help you to accomplish them?</li></p>
                    <p className="companydata-text2"><li>Name a time where you had to have more than normal patience with someone (it could be with your experience inside and outside of sales).</li></p>
                </div>
            );
        case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>What is your relevant background experience?</li></p>
                    <p className="companydata-text2"><li>Do you have prior sales experience?</li></p>
                    <p className="companydata-text2"><li>How has your past experience prepared you for this role?</li></p>
                </div>
            );
        case "Capital Markets Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Capital Markets Analyst</p>
                    <p className="companydata-text2"><li>What is one thing you've worked to improve over the course of several years?</li></p>
                    <p className="companydata-text2"><li>Explain what a leveraged buyout is.</li></p>
                    <p className="companydata-text2"><li>Why Citizens?</li></p>
                    <p className="companydata-text2"><li>Do you prefer working in teams or by yourself?</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time you had multiple projects to do, and how you went about completing them?</li></p>
                    <p className="companydata-text2"><li>What did the Fed most recently say about raising rates?</li></p>
                    <p className="companydata-text2"><li>When going from EBIT to EBITDA, which financial statement would you use to find Depreciation?</li></p>
                    <p className="companydata-text2"><li>What was the most recent action taken by the Fed, and how did the markets receive that?</li></p>
                    <p className="companydata-text2"><li>ix.How do you collaborate with other teams?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>How has the federal reserve handled COVID 19?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in Banking?</li></p>
                    <p className="companydata-text2"><li>What frustrates you?</li></p>
                </div>
            );
        case "Bank Teller":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Bank Teller</p>
                    <p className="companydata-text2"><li>Please tell me about a time you went over and beyond for a customer.</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time you took a risk at work, and how did it turn out?</li></p>
                    <p className="companydata-text2"><li>What do you like about yourself?</li></p>
                    <p className="companydata-text2"><li>How many years of customer service experience do you have?</li></p>
                    <p className="companydata-text2"><li>How would you handle an irate customer</li></p>
                    <p className="companydata-text2"><li>If you come across a problem, would you try to solve it yourself or ask for help?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Citizens Bank?</li></p>
                </div>
            );
        case "Commercial Banking Development":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Commercial Banking Development</p>
                    <p className="companydata-text2"><li>How many Starbucks are there in the US?</li></p>
                    <p className="companydata-text2"><li>Sell me the university/college you attend.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years??</li></p>
                    <p className="companydata-text2"><li>Why commercial banking?</li></p>
                </div>
            );
    }
};
