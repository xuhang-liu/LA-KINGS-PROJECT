import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function NTIQ(props){
    const [filter, setFilter] = useState("Analyst");
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
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
          <button
              className={decideClassName(filter, "Financial Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Analyst")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Java Software Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Java Software Developer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Operations Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Operations Analyst")}
          >
              OA
          </button>
          <button
              className={decideClassName(filter, "Client Service Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client Service Analyst")}
          >
              CSA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Why did you choose this bank? Are you flexible to work at night shift?</li></p>
                    <p className="companydata-text2"><li>Derivatives and their features/types.</li></p>
                    <p className="companydata-text2"><li>Hedging</li></p>
                    <p className="companydata-text2"><li>Economy current.</li></p>
                    <p className="companydata-text2"><li>GDP defined</li></p>
                    <p className="companydata-text2"><li>Share Market</li></p>
                    <p className="companydata-text2"><li>Do you have any experience in leading a project in my previous role?</li></p>
                    <p className="companydata-text2"><li>Corporate Actions, Derivatives, Swaps.</li></p>
                    <p className="companydata-text2"><li>Why NT and not Credit Suisse or BNY Mellon?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you and not others out there?</li></p>
                    <p className="companydata-text2"><li>What do you know about financial markets, capital markets, derivatives, etc.?</li></p>
                    <p className="companydata-text2"><li>Tell me something about yourself, your favorite subject, and all.</li></p>
                    <p className="companydata-text2"><li>Explain Bonds, Dividends, Derivatives, and other concepts</li></p>
                    <p className="companydata-text2"><li>How do you handle routine work?</li></p>
                    <p className="companydata-text2"><li>What are Derivatives? What are the types of derivatives?</li></p>
                </div>
            );
        case "Financial Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Analyst</p>
                    <p className="companydata-text2"><li>What are derivatives?</li></p>
                    <p className="companydata-text2"><li>What is a Total Return Swap?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>Are you ready to work 24/7?</li></p>
                    <p className="companydata-text2"><li>What is asset management?</li></p>
                </div>
            );
        case "Java Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Java Software Developer</p>
                    <p className="companydata-text2"><li>How to know whether we have received the file in our remote directory?</li></p>
                    <p className="companydata-text2"><li>How to acknowledge the received file?</li></p>
                    <p className="companydata-text2"><li>MCQ on Hibernate configuration, Spring, DB, Core Java</li></p>
                </div>
            );
        case "Operations Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Operations Analyst</p>
                    <p className="companydata-text2"><li>What makes me the best fit for this position?</li></p>
                    <p className="companydata-text2"><li>What classes have you taken that will help you in this role?</li></p>
                    <p className="companydata-text2"><li>Give an example of a time you were not able to work with a non-cooperative team member? What was the problem? What was the result?</li></p>
                    <p className="companydata-text2"><li>Name a time where you had to pay particular attention to detail</li></p>
                </div>
            );
        case "Client Service Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client Service Analyst</p>
                    <p className="companydata-text2"><li>What would you find most difficult about this role?</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>One achievement you are proud of.</li></p>
                </div>
            );
    }
};
