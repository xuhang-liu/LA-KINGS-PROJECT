import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MetLifeIQ(props){
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
                    <p className="companydata-text2"><li>How would you sell insurance?</li></p>
                    <p className="companydata-text2"><li>Do you love to win or hate to lose?</li></p>
                    <p className="companydata-text2"><li>What are you passionate about?</li></p>
                    <p className="companydata-text2"><li>If I were to call your past employers, what would they say about you?</li></p>
                    <p className="companydata-text2"><li>How do you handle a customer who only focuses on price?</li></p>
                    <p className="companydata-text2"><li>What was your more significant achievement?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had difficulty working on a team.</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time you failed.</li></p>
                    <p className="companydata-text2"><li>What is a decision tree?</li></p>
                    <p className="companydata-text2"><li>Tell me about the technologies you've worked on in the past.</li></p>
                    <p className="companydata-text2"><li>How did you hear about Metlife?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for MetLife?</li></p>
                    <p className="companydata-text2"><li>How do you deal with an irate customer?</li></p>
                    <p className="companydata-text2"><li>What is an example of the constructive feedback you have received? </li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>What are your most significant skills, and how will these skills benefit the position?</li></p>
                    <p className="companydata-text2"><li>What do you do in your free time?</li></p>
                    <p className="companydata-text2"><li>What are your five years, ten years, and ultimate career goals?</li></p>
                    <p className="companydata-text2"><li>How do you handle a difficult customer?</li></p>
                    <p className="companydata-text2"><li>What is your best and worst quality?</li></p>
                    <p className="companydata-text2"><li>Have you managed independent contractors?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you helped others reach their sales goals.</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Can you handle working across different time zones and connecting with people through technology?</li></p>
                    <p className="companydata-text2"><li>What is one of your strengths?</li></p>
                    <p className="companydata-text2"><li>What risk have you taken?</li></p>
                </div>
            );
    }
};
