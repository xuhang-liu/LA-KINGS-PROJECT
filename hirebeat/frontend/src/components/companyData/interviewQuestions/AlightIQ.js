import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AlightIQ(props){
    const [filter, setFilter] = useState("Client specialist");
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
              className={decideClassName(filter, "Client specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client specialist")}
          >
              CS
          </button>
          <button
              className={decideClassName(filter, "Customer services representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer services representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Health professional consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Health professional consultant ")}
          >
              HPC
          </button>
          <button
              className={decideClassName(filter, "Financial analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial analyst")}
          >
              FA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Client specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client specialist</p>
                    <p className="companydata-text2"><li>Name a time when you made a mistake and how did you handle it.</li></p>
                    <p className="companydata-text2"><li>Why do you think you would be a good fit at alight?</li></p>
                    <p className="companydata-text2"><li>What skill would help you succeed in this role?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to overcome an issue.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you were given information, and it was up to you to decide if you passed along that information or not. And what was the result of your decision?</li></p>
                    <p className="companydata-text2"><li>Describe a time you displayed our core value of Excellence Every Day.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you managed a conflict in a group setting?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you creatively solved a problem.</li></p>
                    <p className="companydata-text2"><li>How do you prioritize multiple project deadlines?</li></p>
                    <p className="companydata-text2"><li>What was one challenge you've had working in teams, and how did you overcome that?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you gave a peer evaluation.</li></p>
                </div>
            );
        case "Customer services representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer services representative</p>
                    <p className="companydata-text2"><li>How do you stay organized when completing a project?</li></p>
                    <p className="companydata-text2"><li>How do the core values relate to you, and how have you demonstrated them?</li></p>
                    <p className="companydata-text2"><li>In what situation have you had to set a schedule to meet a goal?</li></p>
                    <p className="companydata-text2"><li>What are your weaknesses and strengths?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you had to deal with a demanding customer.</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you went above and beyond for a customer.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you made a mistake, but it turned out to be a reasonable mistake.</li></p>
                    <p className="companydata-text2"><li>I talked about the five company values and asked about a time you displayed that value.</li></p>
                    <p className="companydata-text2"><li>What was the biggest mistake you ever made at a place of employment? How did it work in your favor?</li></p>
                    <p className="companydata-text2"><li>Name a time in your previous employment that you took the lead on a project, and what were the steps you took and the outcome?</li></p>
                </div>
            );
        case "Health professional consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Health professional consultant</p>
                    <p className="companydata-text2"><li>Describe a time you used data to prove a point.</li></p>
                    <p className="companydata-text2"><li>Describe a time you handled conflict with a coworker</li></p>
                    <p className="companydata-text2"><li>Describe your preferred learning style and a time where a manager used a different learning style than you were used to.</li></p>
                    <p className="companydata-text2"><li>What advice would you give to your previous manager?</li></p>
                    <p className="companydata-text2"><li>How did you come to hear about the company?</li></p>
                    <p className="companydata-text2"><li>What qualities would you look for if you were hiring someone for this position?</li></p>
                    <p className="companydata-text2"><li>What drives you to succeed?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you had a manager you did not prefer? What was the manager like, and how did you overcome your differences?</li></p>
                </div>
            );
        case "Financial analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial analyst</p>
                    <p className="companydata-text2"><li>Please describe an example where you were asked to take on new responsibilities on top of the work you were already doing.</li></p>
                    <p className="companydata-text2"><li>What is the best mistake you've ever made?</li></p>
                </div>
            );
    }
};
