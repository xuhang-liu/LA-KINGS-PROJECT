import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function VanguardIQ(props){
    const [filter, setFilter] = useState("Customer Service Representative");
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
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Client Relationship Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client Relationship Associate")}
          >
              CRA
          </button>
          <button
              className={decideClassName(filter, "Financial Advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Advisor")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Software Developer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Developer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Data Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Data Analyst")}
          >
              DA
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>What was your most challenging test, and how did it go?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you encountered an unhappy individual, and what did you do to fix the situation?</li></p>
                    <p className="companydata-text2"><li>What’s a challenge you’ve overcome?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you settled a customer complaint.</li></p>
                    <p className="companydata-text2"><li>Explain how you stay organized.</li></p>
                    <p className="companydata-text2"><li>What makes Vanguard's investment philosophy different from the rest?</li></p>
                </div>
            );
        case "Client Relationship Associate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client Relationship Associate</p>
                    <p className="companydata-text2"><li>What was your most challenging test, and how did it go?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work at Vanguard?</li></p>
                    <p className="companydata-text2"><li>Tell us of a time when a situation didn't go as expected. What did you do to resolve it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had a problem at work and were not able to fix it. What did you do?</li></p>
                    <p className="companydata-text2"><li>Name a time where you had to solve a complex problem. What did you do?</li></p>
                    <p className="companydata-text2"><li>When was a time you had to work with a bad teammate, and how did you work through this situation?</li></p>
                    <p className="companydata-text2"><li>Name a time when you could not assist a client, and explain how you handled the situation and its outcome.</li></p>
                    <p className="companydata-text2"><li>Give an example of when you needed to learn something new on the fly, and how you went about doing so.</li></p>
                    <p className="companydata-text2"><li>How have you dealt with different types of clients?</li></p>
                    <p className="companydata-text2"><li>What type of leader are you?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you had to redo something from scratch. How did you go about it?</li></p>
                    <p className="companydata-text2"><li>What do you do to motivate yourself?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you had to change your way of doing something, so your audience understood you. Or times where you had to tailor the approach taken with different individuals.</li></p>
                    <p className="companydata-text2"><li>Did you talk to any of the recruiters? / What did you talk about?</li></p>
                </div>
            );
        case "Financial Advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Advisor</p>
                    <p className="companydata-text2"><li>How would your biggest fans and most prominent critics describe you?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and your background.</li></p>
                    <p className="companydata-text2"><li>What are some of Vanguard's main expenses and revenues?</li></p>
                    <p className="companydata-text2"><li>What is Net Asset Value (NAV)?</li></p>
                    <p className="companydata-text2"><li>What are assets, liability, and equity?</li></p>
                    <p className="companydata-text2"><li>Difference between an ETF and a mutual fund?</li></p>
                    <p className="companydata-text2"><li>Can you give me some names of different stocks?</li></p>
                </div>
            );
        case "Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Developer</p>
                    <p className="companydata-text2"><li>Tell me about one challenge you had recently.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you questioned a position of authority.</li></p>
                    <p className="companydata-text2"><li>Tell me why you want to work at Vanguard.</li></p>
                    <p className="companydata-text2"><li>Please tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to convince a co-worker or employer about something.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had a disagreement with a co-worker or group member at school. How did you handle the conflict? What was the outcome?</li></p>
                    <p className="companydata-text2"><li>Give me a scenario where you learned from a past mistake and applied it to a project or task</li></p>
                    <p className="companydata-text2"><li>What is a stack?</li></p>
                    <p className="companydata-text2"><li>What is cloud computing?</li></p>
                    <p className="companydata-text2"><li>What is polymorphism? Can you give an example?</li></p>
                    <p className="companydata-text2"><li>How do you prioritize having to do a lot and possibly not enough time?</li></p>
                    <p className="companydata-text2"><li>What are your career goals?</li></p>
                    <p className="companydata-text2"><li>Is there anything you do outside of your professional life that makes you a better developer?</li></p>
                    <p className="companydata-text2"><li>What was your first programming project?</li></p>
                    <p className="companydata-text2"><li>Give me a situation where you had to work with an underperforming teammate.</li></p>
                    <p className="companydata-text2"><li>What is list comprehension? What is a decorator? What are the generators? What is JDBC in Python?</li></p>
                    <p className="companydata-text2"><li>What have you worked on in the past?</li></p>
                </div>
            );
        case "Data Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Analyst</p>
                    <p className="companydata-text2"><li>Can you go through your resume?</li></p>
                    <p className="companydata-text2"><li>How many years of experience do you have in SQL?</li></p>
                    <p className="companydata-text2"><li>If you want to take a range of SQL numbers, what is the keyword you should use?</li></p>
                    <p className="companydata-text2"><li>What is the equation of z-score?</li></p>
                </div>
            );

    }
};
