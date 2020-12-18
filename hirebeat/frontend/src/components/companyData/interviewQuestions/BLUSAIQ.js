import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BLUSAIQ(props){
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
              className={decideClassName(filter, "Client Service Officer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client Service Officer")}
          >
              CSO
          </button>
          <button
              className={decideClassName(filter, "Business Relationship Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Relationship Manager")}
          >
              BRM
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time you worked in a team. How was the experience?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you made a mistake. How did you solve it?</li></p>
                    <p className="companydata-text2"><li>What’s the last book you read?</li></p>
                    <p className="companydata-text2"><li>Please tell us what you know about our organization.</li></p>
                    <p className="companydata-text2"><li>Describe a time where you made an existing process more efficient in your previous role.</li></p>
                </div>
            );
        case "Client Service Officer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client Service Officer</p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>What is your experience, and how is it relevant for this job?</li></p>
                    <p className="companydata-text2"><li>Discuss an experience where you came across a complicated interaction with a client.  Please explain how you resolved it.</li></p>
                    <p className="companydata-text2"><li>Discuss an experience where you were able to improve a process or system.</li></p>
                    <p className="companydata-text2"><li>If a customer calls you (and he/she is angry) having difficulties with a wire transfer, how would you deal with such a situation？</li></p>
                    <p className="companydata-text2"><li>How do you handle high volume fast-paced work that often requires immediate action and follow-up?</li></p>
                </div>
            );
        case "Business Relationship Manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Relationship Manager</p>
                    <p className="companydata-text2"><li>Describe in detail how you would originate new business</li></p>
                    <p className="companydata-text2"><li>What would your current/previous employer say about you?</li></p>
                    <p className="companydata-text2"><li>Describe your current position and how it would translate to this job.</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>What do you want yourself to be remembered at the end of the internship？</li></p>
                    <p className="companydata-text2"><li>What is an accomplishment that makes you proud of yourself?</li></p>
                    <p className="companydata-text2"><li>What type of work environment do you thrive in?</li></p>
                    <p className="companydata-text2"><li>Is there any task you don’t like working on? If so, what’s it, and why?</li></p>
                    <p className="companydata-text2"><li>Do you think you are a perfectionist when it comes to nitty details, or do you like to focus on the big picture?</li></p>
                    <p className="companydata-text2"><li>What is a goal you have accomplished recently?</li></p>
                </div>
            );
    }
};
