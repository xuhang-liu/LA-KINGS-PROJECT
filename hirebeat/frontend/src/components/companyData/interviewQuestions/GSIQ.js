import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function GSIQ(props){
    const [filter, setFilter] = useState("swe");
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
              className={decideClassName(filter, "Operations Analyst")}
              style = {{width: "200px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Operations Analyst")}
          >
              Operations Analyst
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Why did you choose Goldman Sachs?</li></p>
                    <p className="companydata-text2"><li>Can you recall an example of a time where something was run badly/inefficiently, and what did you do to make it better?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you used your analytical skills to solve a problem.</li></p>
                    <p className="companydata-text2"><li>How well do you work in a diverse team?</li></p>
                    <p className="companydata-text2"><li>Why do you want to join the financial industry?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you showed leadership</li></p>
                    <p className="companydata-text2"><li>You are an engineering manager, and you have to tell the stakeholders the project is delayed. How would you do it?</li></p>
                    <p className="companydata-text2"><li>Your friend went out partying and couldn’t finish the homework on time. They asked you to lie to the teacher that they were sick. How would you handle this situation? What would you tell your friend? And your teacher?</li></p>
                    <p className="companydata-text2"><li>What’s your ideal work situation?</li></p>
                    <p className="companydata-text2"><li>What are the three ways to value a company?</li></p>
                    <p className="companydata-text2"><li>How do you keep up with the current news?</li></p>
                    <p className="companydata-text2"><li>At school, if you overloaded your schedule and have two big value assignments due at the same time. You are unable to complete all your required tasks within the time frame. What would you do to overcome this situation?</li></p>
                    <p className="companydata-text2"><li>Have you seen anything interesting happened in the market lately? Is there any financial news that caught your attention recently?</li></p>
                    <p className="companydata-text2"><li>What is something you read today, and how does it affect the market?</li></p>
                    <p className="companydata-text2"><li>Can you talk about a time when you worked in a group with diverse individuals? How was the experience?</li></p>
                    <p className="companydata-text2"><li>What would you do if your co-workers have different workflows?</li></p>
                </div>
            );
        case "Operations Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a time where you could not complete the job you had been asked to do, and why weren‘t you able to complete it on time? What did you learn from this experience?</li></p>
                    <p className="companydata-text2"><li>Are you more of a team player or more individual-focused?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you minimized risk or make a process more efficient.</li></p>
                    <p className="companydata-text2"><li>A classmate is unable to finish a project due to a personal situation. It looks like you might not be able to finish in time without him/her finishing the part. What would you do under this situation? What would your process be?</li></p>
                    <p className="companydata-text2"><li>Can you recall a time when you had a sudden change to what you were doing? How did you deal with it? What was the result? Do you think if you chose the right path?</li></p>
                    <p className="companydata-text2"><li>Can you recall an example of a time you were sorting through a lot of data, and what was your process and the outcome?  </li></p>
                    <p className="companydata-text2"><li>If we give you client data concerning client complaints, what will you do/ how will you analyze them?</li></p>
                    <p className="companydata-text2"><li>Your business manager is going away on a trip and leaves you to communicate with the client alone. What would you do to get your manager to trust you?</li></p>
                    <p className="companydata-text2"><li>What is risk management?</li></p>
                    <p className="companydata-text2"><li>If you had to choose to give Boeing or Apple a loan, who would you choose and why?</li></p>
                    <p className="companydata-text2"><li>What is your career plan?</li></p>
                    <p className="companydata-text2"><li>You’re working on a private project with a manager, and another manager wants to see the project. How do you handle the situation?</li></p>
                    <p className="companydata-text2"><li>Your classmate was very sick and could not make it to class/study. They tell you they have access to a copy of the final exam you are about to take. What would you do?</li></p>
                    <p className="companydata-text2"><li>What would you do to figure out what students were struggling with the most at your college campus?</li></p>
                    <p className="companydata-text2"><li>If you see your boss doing something that is conflicting with your integrity or a company‘s integrity, what is your thought process, and what would you do?</li></p>
                    <p className="companydata-text2"><li>Describe a time you had to decide on a changing environment. How did you make it? Was it the best decision?</li></p>
                </div>
            );
    }
};
