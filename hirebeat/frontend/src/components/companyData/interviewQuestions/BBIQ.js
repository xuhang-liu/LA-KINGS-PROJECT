import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BBIQ(props){
    const [filter, setFilter] = useState("Financial Sales and Analytics");
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
              className={decideClassName(filter, "Financial Sales and Analytics")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Sales and Analytics")}
          >
              Sales
          </button>
          <button
              className={decideClassName(filter, "Financial Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Software Engineer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Global data analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Global data analyst")}
          >
              DA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Financial Sales and Analytics":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your greatest achievement?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you demonstrated flexibility.</li></p>
                    <p className="companydata-text2"><li>Why would a corporate group need BB instead of Reuters? What advantages does Bloomberg have over its competitors?</li></p>
                    <p className="companydata-text2"><li>How would you sell the BB Terminal to the developing market?</li></p>
                    <p className="companydata-text2"><li>What makes you successful in sales?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you experienced failure - how did you handle it, and what did you do afterward?</li></p>
                    <p className="companydata-text2"><li>How do you deal with an impatient client?</li></p>
                    <p className="companydata-text2"><li>How do you follow the markets or financial news?</li></p>
                    <p className="companydata-text2"><li>Do you have any previous experience in providing customer service? What steps did you take, and what was the result?</li></p>
                    <p className="companydata-text2"><li>What are the core advantages and disadvantages of Bloomberg?</li></p>
                    <p className="companydata-text2"><li>What is the Customer Service value at Bloomberg? </li></p>
                    <p className="companydata-text2"><li>Name three characteristics to describe yourself.</li></p>
                    <p className="companydata-text2"><li>Can you describe a good experience you have had with a customer support team?</li></p>
                    <p className="companydata-text2"><li>What is the most important part of a successful business?</li></p>
                    <p className="companydata-text2"><li>Can you share the past work experience that has prepared you most for this job?</li></p>
                </div>
            );
        case "Financial Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Given a list of ones and zeros, how would you sort the list efficiently, so the zeros are in the front and the ones are in the second half? </li></p>
                    <p className="companydata-text2"><li>How do you obtain the running average of a group of numbers?</li></p>
                    <p className="companydata-text2"><li>What would you do to check if a string has matching parentheses?</li></p>
                    <p className="companydata-text2"><li>If you were to receive an offer from Google and Bloomberg, what could we do to get you?</li></p>
                    <p className="companydata-text2"><li>How do you find the middle of a linked list, rounding up in the case of an odd number of items but with no differentiation between an even or odd number?  </li></p>
                    <p className="companydata-text2"><li>What is the difference between stack and heap memory?</li></p>
                    <p className="companydata-text2"><li>How do you design a system to deliver the newest price of stocks to users?</li></p>
                    <p className="companydata-text2"><li>What if your manager goes against your decision? Who will you consult,  and what is the best thing to do if you think that you are right in this case?</li></p>
                    <p className="companydata-text2"><li>If you have two huge integers, how do you calculate the product if it is too large to be represented by your computer program?</li></p>
                    <p className="companydata-text2"><li>What is the greatest challenge of providing financial information to customers?</li></p>
                    <p className="companydata-text2"><li>What challenges do you foresee working as a technical support representative over the phone?</li></p>
                </div>
            );
        case "Global data analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Analyst</p>
                    <p className="companydata-text2"><li>How do you obtain your background knowledge?</li></p>
                    <p className="companydata-text2"><li>What do you look for when you invest in a company?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you used technology to improve the process during a project.</li></p>
                    <p className="companydata-text2"><li>What are your suggestions to improve Bloomberg’s workflow?</li></p>
                    <p className="companydata-text2"><li>Can you describe how our clients use our products?</li></p>
                    <p className="companydata-text2"><li>Do you think programming skills are important in your work?</li></p>
                    <p className="companydata-text2"><li>What is the most interesting dataset you have worked with? What significant results did you gain from there?</li></p>
                    <p className="companydata-text2"><li>Why did the stocks go up immediately after the news about the end of the government shutdown?</li></p>
                    <p className="companydata-text2"><li>If you could fix one thing about the Bloomberg Terminal, what would it be?</li></p>
                    <p className="companydata-text2"><li>How would you explain a vending machine to someone who hasn‘t seen or used one before?</li></p>
                    <p className="companydata-text2"><li>How would you improve this business process to make the data cleaning more efficient?</li></p>
                </div>
            );
    }
};
