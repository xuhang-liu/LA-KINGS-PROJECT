import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BancoSIQ(props){
    const [filter, setFilter] = useState("Customer Services Advisor");
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
              className={decideClassName(filter, "Customer Services Advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Services Advisor")}
          >
              CSA
          </button>
          <button
              className={decideClassName(filter, "Personal Banker")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Personal Banker")}
          >
              PB
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Customer Services Advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Services Advisor</p>
                    <p className="companydata-text2"><li>Tell me about a time you offered good customer service.</li></p>
                    <p className="companydata-text2"><li>Can you describe a time where you went above and beyond for a customer?</li></p>
                    <p className="companydata-text2"><li>Can you tell me when you have identified risk at work and how have you dealt with it?</li></p>
                    <p className="companydata-text2"><li>What targets have you been set, and how have you met them?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Santander?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to make a difficult decision. </li></p>
                    <p className="companydata-text2"><li>Tell me a time you had to take leadership, but your team wasn’t happy about it. What did you do?</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you build a relationship with a customer.</li></p>
                    <p className="companydata-text2"><li>What appeals to you about the customer advisor role?</li></p>
                    <p className="companydata-text2"><li>Describe a challenge you faced in your work life. How did you overcome it?</li></p>
                    <p className="companydata-text2"><li>Tell me when you have had to work with someone you didn't get along with. How did you overcome it?</li></p>
                    <p className="companydata-text2"><li>Why did you apply for this particular role, and what skills do you have for it?</li></p>
                    <p className="companydata-text2"><li>What does risk mean to you?</li></p>
                </div>
            );
        case "Personal Banker":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Personal Banker</p>
                    <p className="companydata-text2"><li>Can you tell me about the products Santander offers?</li></p>
                    <p className="companydata-text2"><li>What was your most tremendous success in your previous role?</li></p>
                    <p className="companydata-text2"><li>Explain a time you felt under pressure. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>How do you handle an upset customer?</li></p>
                    <p className="companydata-text2"><li>What makes you ideal for this position?</li></p>
                    <p className="companydata-text2"><li>Can you give an example of you using lateral thinking?</li></p>
                    <p className="companydata-text2"><li>What are your long-range and short-range career goals?</li></p>
                </div>
            );
    }
};
