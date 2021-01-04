import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ABSAIQ(props){
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
                    <p className="companydata-text2"><li>Talk about a time where you felt overwhelmed by your job duties. What did you do to stay organized and on track with everything happening? </li></p>
                    <p className="companydata-text2"><li>Tell me about your experience in the banking industry.</li></p>
                    <p className="companydata-text2"><li>How would you rate your comfort level receiving money and counting back many to our customers here at Absa Bank?</li></p>
                    <p className="companydata-text2"><li>The clients of a financial firm like Absa Bank can display an arrangement of emotions when they work with our Client Services team. How would you handle a situation where a client was very angry? </li></p>
                    <p className="companydata-text2"><li>How would you respond to a customer complaint?</li></p>
                    <p className="companydata-text2"><li>As a Personal Banker with Absa Bank, why is providing tailored customer service important? How would you make this a priority if hired for this role?</li></p>
                    <p className="companydata-text2"><li>Talk about a time you had to communicate with a colleague or customer that was unhappy. What were the keys to making the situation better for all involved?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What experience do you have working on an advanced phone system and what skills do you have that you feel would be essential to work with our clients over the phone?</li></p>
                    <p className="companydata-text2"><li>How do you build rapport with those that you work closely with?</li></p>
                    <p className="companydata-text2"><li>Here at Absa Bank, part of your job will entail talking to our customers about sensitive and confidential information. How will you handle these situations if offered this position?</li></p>
                    <p className="companydata-text2"><li>Tell me about your favorite manager. What did you enjoy most about working with them?</li></p>
                    <p className="companydata-text2"><li>Have you ever operated a currency counting machine or a coin counter?</li></p>
                    <p className="companydata-text2"><li>As a Personal Banker at Absa Bank, how would you select products to suggest to our customers?</li></p>
                    <p className="companydata-text2"><li>Talk about a time you had to handle failure at any point in your career. How did you handle that situation and move forward with confidence?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Why would our clients here at Absa Bank want you to be their financial advisor?</li></p>
                    <p className="companydata-text2"><li>What interests you about this position?</li></p>
                    <p className="companydata-text2"><li>Talk about your experiences working with both fellow Analysts and Accountants within your own firm and with external partners. How do you feel that you will be effective in working with our external candidates in this role here at Absa Bank? </li></p>
                    <p className="companydata-text2"><li>If you were on the job here at Absa Bank and a customer came to you with a very odd request that you did not know the answer to or how to solve, how would you handle that situation?</li></p>
                    <p className="companydata-text2"><li>We pride ourselves on teamwork here at Absa Bank and this role in Client Services relies on teamwork. What are the top qualities you would bring to a team based atmosphere here?</li></p>
                    <p className="companydata-text2"><li>How do you check your work for accuracy?</li></p>
                    <p className="companydata-text2"><li>At Absa Bank, we are building a very team-based culture. If hired for this position, what would you be able to contribute to this team-based culture?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time when you demonstrated you were trustworthy.</li></p>
                    <p className="companydata-text2"><li>How do you work in environments with people who are different from you?</li></p>
                    <p className="companydata-text2"><li>If a customer at Absa Bank had increased savings as their main personal financial goal, what steps would you take with them to get them started down the right path?</li></p>
                    <p className="companydata-text2"><li>Absa Bank strives for client loyalty to keep us running strong into the future. What do you feel are the keys to retaining clients for the long haul?</li></p>
                    <p className="companydata-text2"><li>In this role as a Risk Analyst with Absa Bank, you will be expected to be the expert on changes in financial regulations that impact our business. How do you keep yourself up to speed on these changes currently?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you showed integrity in your work.</li></p>
                </div>
            );
    }
};
