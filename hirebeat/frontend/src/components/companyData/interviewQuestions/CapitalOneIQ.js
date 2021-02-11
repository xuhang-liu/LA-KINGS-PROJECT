import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CapitalOneIQ(props){
    const [filter, setFilter] = useState("Technology");
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
              className={decideClassName(filter, "Technology")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Technology")}
          >
              Technology
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
          <button
              className={decideClassName(filter, "Design Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Design Associate")}
          >
              DA
          </button>
          <button
              className={decideClassName(filter, "Big Data Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Big Data Engineer")}
          >
              DE
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Technology":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time when you had to learn something completely new.</li></p>
                    <p className="companydata-text2"><li>Describe a project you're proud of.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you had to explain a technical concept to someone, not technical.</li></p>
                    <p className="companydata-text2"><li>Pros and cons of a bank acquisition.</li></p>
                    <p className="companydata-text2"><li>What is your experience with Database Systems?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a time when you have to work with your teammates to overcome a challenging problem.</li></p>
                    <p className="companydata-text2"><li>What are your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>What are some values to consider to determine whether it will be profitable for the food delivery service to expand to this new location?</li></p>
                    <p className="companydata-text2"><li>Pick a favorite product and describe how you could improve it.</li></p>
                    <p className="companydata-text2"><li>A co-worker approaches you for help when you already have lots of work on your plate. How do you react?</li></p>
                    <p className="companydata-text2"><li>Tell us about a technology you know of?</li></p>
                    <p className="companydata-text2"><li>What do you think about  Amazon Prime drone deliveries and how that would affect the market.</li></p>
                    <p className="companydata-text2"><li>How would you improve on the Salt and Pepper Shaker? Give five different ways.</li></p>
                    <p className="companydata-text2"><li>Describe a time when you helped someone else.</li></p>
                    <p className="companydata-text2"><li>If you have a 1-minute elevator pitch about your research, what would you say?</li></p>
                    <p className="companydata-text2"><li>What would you do if a coworker asked you for help resolving a conflict?</li></p>
                    <p className="companydata-text2"><li>Name ten different uses for a water bottle.</li></p>
                </div>
            );
        case "Design Associate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Design Associate</p>
                    <p className="companydata-text2"><li>If you were a design lead, given you've received context from your client, How would you lead your team?</li></p>
                    <p className="companydata-text2"><li>Walk me through your design-thought process.</li></p>
                    <p className="companydata-text2"><li>Can you give me a time where you had disagreed with your team on a design decision?</li></p>
                </div>
            );
        case "Big Data Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Big Data Engineer</p>
                    <p className="companydata-text2"><li>Can you join together these two tables using SQL?</li></p>
                    <p className="companydata-text2"><li>What situation have you been in that you had a tough time getting through?</li></p>
                    <p className="companydata-text2"><li>Create a python script that reads this CSV file, puts it into a panda data frame, and does not use group by group column a.</li></p>
                    <p className="companydata-text2"><li>What’s your opinion about mobile banking and how to improve it?</li></p>
                </div>
            );
    }
};
