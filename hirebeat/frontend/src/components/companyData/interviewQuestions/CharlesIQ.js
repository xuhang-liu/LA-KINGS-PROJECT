import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CharlesIQ(props){
    const [filter, setFilter] = useState("Software Engineer");
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
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Senior Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Senior Manager")}
          >
              SM
          </button>
          <button
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
          <button
              className={decideClassName(filter, "Associate Financial Service")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate Financial Service")}
          >
              AFS
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>Tell me about your recent project.</li></p>
                    <p className="companydata-text2"><li>What are the four fundamentals of OOP?</li></p>
                    <p className="companydata-text2"><li>What are your technical preferences?</li></p>
                    <p className="companydata-text2"><li>What are you looking for at your next job?.</li></p>
                    <p className="companydata-text2"><li>Do you know about stack and heap?</li></p>
                    <p className="companydata-text2"><li>Do you know about garbage collection?</li></p>
                    <p className="companydata-text2"><li>From a software engineering perspective, what do you think is essential when working with a client?</li></p>
                    <p className="companydata-text2"><li>Do you know what ETL testing is?</li></p>
                </div>
            );
        case "Senior Manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Senior Manager</p>
                    <p className="companydata-text2"><li>What do you know about Schwab’s culture?</li></p>
                    <p className="companydata-text2"><li>How would you / how have you dealt with an ambiguous situation or project request?</li></p>
                    <p className="companydata-text2"><li>Imagine that you have an idea for a project / new product – you’ve done some research. What would you do next?</li></p>
                    <p className="companydata-text2"><li>When you think about presenting your recommendation to an EVP, what would be your approach to convincing them that it needs to be implemented?</li></p>
                    <p className="companydata-text2"><li>You have two projects going on. You know that one is going to miss the deadline. How would you handle it?</li></p>
                    <p className="companydata-text2"><li>Think about a time when you had 2 or 3 avenues for tackling the same problem. Which one did you choose and why?</li></p>
                    <p className="companydata-text2"><li>Tell us why we should hire you.</li></p>
                </div>
            );
        case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>What experience do you have that would make you qualified for the position?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you received excellent customer service.</li></p>
                    <p className="companydata-text2"><li>What was your philosophy of Customer Service?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 10 years?</li></p>
                    <p className="companydata-text2"><li>Name a time where a customer was upset, and how you handled the situation.</li></p>
                    <p className="companydata-text2"><li>What accomplishment are you most proud of in your career?</li></p>
                    <p className="companydata-text2"><li>How would you convince someone to invest their money in a particular way?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself/ your passion for finance?</li></p>
                    <p className="companydata-text2"><li>If company XYZ stock goes down 5%, they will replace their CEO. If the stocks stay the same, they will keep the CEO. They replaced the CEO in May. Did the company stock go down 5%?</li></p>
                    <p className="companydata-text2"><li>What do you anticipate might be challenging for you in this position?</li></p>
                </div>
            );
        case "Associate Financial Service":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Associate Financial Service</p>
                    <p className="companydata-text2"><li>How do you think you’ll transition to being in a call center environment?</li></p>
                    <p className="companydata-text2"><li>Tell me about your leadership experience.</li></p>
                    <p className="companydata-text2"><li>What do you know about Charles Schwab (why do you want to work here)?</li></p>
                    <p className="companydata-text2"><li>Name a time where you received constructive criticism and how you responded to it.</li></p>
                    <p className="companydata-text2"><li>Name a time where you "failed.”</li></p>
                    <p className="companydata-text2"><li>What do you know about investing and the licensing exams?</li></p>
                    <p className="companydata-text2"><li>Name a time you had to go out of your way to help someone else succeed.</li></p>
                </div>
            );
    }
};
