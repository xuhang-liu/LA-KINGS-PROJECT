import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function WFIQ(props){
    const [filter, setFilter] = useState("Teller");
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
              className={decideClassName(filter, "Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Teller")}
          >
              Teller
          </button>
          <button
              className={decideClassName(filter, "Financial Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Analyst")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Investment Banking Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Investment Banking Analyst")}
          >
              IBA
          </button>
          <button
              className={decideClassName(filter, "Software Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Developer")}
          >
              SDE
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Teller":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe when you disappointed a client, what happened, and what you have to do?</li></p>
                    <p className="companydata-text2"><li>What is an objective that you wanted to accomplish during a busy time, and how did you achieve it?</li></p>
                    <p className="companydata-text2"><li>Please tell us about what interests you in this position.</li></p>
                    <p className="companydata-text2"><li>Describe a time you had to handle a difficult customer.</li></p>
                    <p className="companydata-text2"><li>Please tell me a time you were in a difficult situation, and how did you overcome it?</li></p>
                    <p className="companydata-text2"><li>Please tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>Please tell me about a time that you provided great customer service.</li></p>
                    <p className="companydata-text2"><li>Discuss a time you dealt with an unhappy customer and turned their mood into a positive.</li></p>
                    <p className="companydata-text2"><li>What qualifies you for this position?</li></p>
                </div>
            );
        case "Investment Banking Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Analyst</p>
                    <p className="companydata-text2"><li>Walk me through the three financial statements.</li></p>
                    <p className="companydata-text2"><li>Walk me through a DCF.</li></p>
                    <p className="companydata-text2"><li>If Restaurant A wanted to acquire Restaurant B, what would A have to consider before acquiring?</li></p>
                </div>
            );
        case "Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Developer</p>
                    <p className="companydata-text2"><li>Immutable class.</li></p>
                    <p className="companydata-text2"><li>The lowest common ancestor of the Binary tree.</li></p>
                    <p className="companydata-text2"><li>Split array in 2 parts with equal sums.</li></p>
                    <p className="companydata-text2"><li>Hashmap internals.</li></p>
                    <p className="companydata-text2"><li>Stream vs. Collections.</li></p>
                    <p className="companydata-text2"><li>What will happen if you delete @springbootapplication.</li></p>
                    <p className="companydata-text2"><li>Name the argument used to change GC algo.</li></p>
                    <p className="companydata-text2"><li>Name the property to acknowledge the kafka message.</li></p>
                    <p className="companydata-text2"><li>What are the four pillars of OOP, and explain them?</li></p>
                    <p className="companydata-text2"><li>Write code for bubble sort.</li></p>
                    <p className="companydata-text2"><li>Write a program to print the count of unique BSTs given “n” nodes (0-n values in the nodes).</li></p>
                    <p className="companydata-text2"><li>Difference between Java and C++</li></p>
                    <p className="companydata-text2"><li>What happens when a URL is typed in a browser? (Request flow)</li></p>
                    <p className="companydata-text2"><li>What is a semaphore?</li></p>
                    <p className="companydata-text2"><li>What is trie?</li></p>
                </div>
            );
    }
};
