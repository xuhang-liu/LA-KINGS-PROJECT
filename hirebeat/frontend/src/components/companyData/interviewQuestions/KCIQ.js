import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function KCIQ(props){
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
              className={decideClassName(filter, "Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Teller")}
          >
              Teller
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
                    <p className="companydata-text2"><li>Can you name a time you had a difficult client? And how did you deal with it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you overcame a difficult situation. What did you do?</li></p>
                    <p className="companydata-text2"><li>How do you handle conflicts with coworkers?</li></p>
                    <p className="companydata-text2"><li>How would you build a good relationship of trust with a customer/client?</li></p>
                    <p className="companydata-text2"><li>What is a challenge you've faced, and how did you handle it?</li></p>
                    <p className="companydata-text2"><li>What do you enjoy doing outside of work?</li></p>
                    <p className="companydata-text2"><li>What would you do to improve financial wellness?</li></p>
                    <p className="companydata-text2"><li>Tell me about your responsibilities as a branch manager</li></p>
                    <p className="companydata-text2"><li>How do you feel about the teller line?</li></p>
                    <p className="companydata-text2"><li>What motivates you to be successful and achieve your goals?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for KeyCorp?</li></p>
                    <p className="companydata-text2"><li>Explain a time you had to sell something that a customer didn't come in for initially.?</li></p>
                    <p className="companydata-text2"><li>What interested you in this position?</li></p>
                    <p className="companydata-text2"><li>What is your greatest weakness?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you received feedback that you disagreed with. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>How would you present yourself to a customer who comes in for CD Rates when the bank next door has a better rate?</li></p>
                </div>
            );
        case "Teller":
            return(
                <div>
                    <p className="companydata-text2"><li>Do you have any prior cash handling experience?</li></p>
                    <p className="companydata-text2"><li>What do you know about KeyBank and our products and services?</li></p>
                    <p className="companydata-text2"><li>What would you like to gain out of this position?</li></p>
                    <p className="companydata-text2"><li>How long do you see yourself working for this company?</li></p>
                </div>
            );
    }
};
