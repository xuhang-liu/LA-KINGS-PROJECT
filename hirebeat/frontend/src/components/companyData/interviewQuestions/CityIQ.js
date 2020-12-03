import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CityIQ(props){
    const [filter, setFilter] = useState("swe");
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
              className={decideClassName(filter, "Personal Banker")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Personal Banker")}
          >
              Banker
          </button>
          <button
              className={decideClassName(filter, "Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Teller")}
          >
              Teller
          </button>
          <button
              className={decideClassName(filter, "Vice President")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Vice President")}
          >
              VP
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe credit risk quantitatively and qualitatively.</li></p>
                    <p className="companydata-text2"><li>Why are you looking to leave your current position?</li></p>
                    <p className="companydata-text2"><li>What is the expectation and variance of normal distribution?</li></p>
                    <p className="companydata-text2"><li>Tell me what an interface is. What’s an abstract class? Please explain to me how they‘re different from each other.</li></p>
                    <p className="companydata-text2"><li>How do you see yourself fitting into what we do?</li></p>
                    <p className="companydata-text2"><li>Can you explain what bond duration is?</li></p>
                    <p className="companydata-text2"><li>What is the difference between UNION and UNION ALL in SQL?</li></p>
                    <p className="companydata-text2"><li>Describe the shortest path between two arbitrary points on a cube’s surface.</li></p>
                    <p className="companydata-text2"><li>What do you want to do in five years?</li></p>
                    <p className="companydata-text2"><li>How do you value a company?</li></p>
                    <p className="companydata-text2"><li>What was your proudest moment?</li></p>
                    <p className="companydata-text2"><li>What makes a good leader?</li></p>
                    <p className="companydata-text2"><li>Can you tell us about a time when you had to make quick decisions under a lot of pressure?</li></p>
                    <p className="companydata-text2"><li>Can you talk about current market trends given the covid-19 situation?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you took accountability for someone else‘s actions.</li></p>
                </div>
            );
        case "Personal Banker":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you deal with an irate client?</li></p>
                    <p className="companydata-text2"><li>How do you sell to someone who isn‘t interested in what you offer?</li></p>
                    <p className="companydata-text2"><li>Would you mind starting as a teller to incorporate you with the banking system here?</li></p>
                    <p className="companydata-text2"><li>Describe a situation when the customer was upset about your answer, and how did you solve the problem?</li></p>
                    <p className="companydata-text2"><li>If a customer is coming in with a checking account and online banking......how would you help this client? What would that conversation sound like?</li></p>
                    <p className="companydata-text2"><li>How was your sales approach like to your clients in your previous job?</li></p>
                    <p className="companydata-text2"><li>Why did you choose to be a personal banker?</li></p>
                </div>
            );
        case "Teller":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you handle stress at work?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a teller? </li></p>
                    <p className="companydata-text2"><li>What was something you liked and didn‘t like about your previous job?</li></p>
                    <p className="companydata-text2"><li>Do you know what our Citibank profit was?</li></p>
                    <p className="companydata-text2"><li>Do you understand what banking is?</li></p>
                    <p className="companydata-text2"><li>What kind of difficult customer service situation have you ever had in a work-related setting?  </li></p>
                    <p className="companydata-text2"><li>Please elaborate regarding your previous cash handling experience.</li></p>
                    <p className="companydata-text2"><li>Have you ever had a problem arising between you and a fellow employee?</li></p>
                    <p className="companydata-text2"><li>What does customer service mean to you?</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses, and describe a situation in which these were applied?</li></p>
                    <p className="companydata-text2"><li>Do you agree that the teller is the foundation of the company and is the most important position in the company and that the tellers are solely responsible for the success or failure of our bank?</li></p>
                    <p className="companydata-text2"><li>If you were to have a full-time job lined up for you in a couple of months, would you take it?</li></p>
                    <p className="companydata-text2"><li>What do you think your supervisors should expect from you?</li></p>
                </div>
            );
        case "Vice President":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Vice President</p>
                    <p className="companydata-text2"><li>What would keep you from getting bored?</li></p>
                    <p className="companydata-text2"><li>How did you get buy-in from the business when you suggested process improvements?</li></p>
                    <p className="companydata-text2"><li>What is your management philosophy?</li></p>
                    <p className="companydata-text2"><li>What international working experience do you have?  </li></p>
                    <p className="companydata-text2"><li>How would you feel working in a global matrix environment?</li></p>
                    <p className="companydata-text2"><li>Describe your experiences dealing with Senior Management.</li></p>
                </div>
            );
    }
};