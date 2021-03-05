import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function NavigantConsultingIQ(props){
    const [filter, setFilter] = useState("Consultant");
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
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Senior Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Senior Consultant")}
          >
              SC
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
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
        default: case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a team experience you had.</li></p>
                    <p className="companydata-text2"><li>Why this job?</li></p>
                    <p className="companydata-text2"><li>What do you do if a client gets upset because a project is taking too long to complete? Do you deliver an unfinished product? How do you go about the situation?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you made a mistake in a group setting. How did you reconcile that mistake with the group members?</li></p>
                    <p className="companydata-text2"><li>Talk about a positive group experience and a negative one. What did you learn?</li></p>
                    <p className="companydata-text2"><li>How do you maintain a good relationship with your client?</li></p>
                    <p className="companydata-text2"><li>Describe how you resolved a group conflict.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 3 years?</li></p>
                    <p className="companydata-text2"><li>Any problematic situations you have been in, and how have you handled them.</li></p>
                    <p className="companydata-text2"><li>What current trends in the healthcare space are you interested in?</li></p>
                    <p className="companydata-text2"><li>Tell us a time you lead a project..</li></p>
                </div>
            );
        case "Senior Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Senior Consultant</p>
                    <p className="companydata-text2"><li>The time that you overcome a challenge to succeed.</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Why Navigant?</li></p>
                    <p className="companydata-text2"><li>Do you know what we do?</li></p>
                    <p className="companydata-text2"><li>How comfortable are you with excel?</li></p>
                    <p className="companydata-text2"><li>Tell me about an experience where you had to use data and analytical skills to solve a problem.</li></p>
                    <p className="companydata-text2"><li>Why are you leaving your company?</li></p>
                    <p className="companydata-text2"><li>Why are you searching to change jobs?</li></p>
                    <p className="companydata-text2"><li>What gets you up in the morning?</li></p>
                    <p className="companydata-text2"><li>Why are you here? </li></p>
                    <p className="companydata-text2"><li>What is private banking?</li></p>
                    <p className="companydata-text2"><li>What would cause you to leave consulting/Navigant?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>What is the worst feedback you've received?</li></p>
                    <p className="companydata-text2"><li>Why are Life Sciences consulting?</li></p>
                    <p className="companydata-text2"><li>What do you like to do in your free time?</li></p>
                    <p className="companydata-text2"><li>What was one time you had to convince another person of something important to you?</li></p>
                    <p className="companydata-text2"><li>Why would you join Navigant and enter into the consulting profession?</li></p>
                    <p className="companydata-text2"><li>Tell me about a problem you did and found out a mistake during it. What actions did you take to correct it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a difficult situation and how you managed it.</li></p>
                    <p className="companydata-text2"><li>What's your experience with SQL and Access?</li></p>
                    <p className="companydata-text2"><li>Name three strengths and three weaknesses.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to work with incomplete data and arrive at the result.</li></p>
                    <p className="companydata-text2"><li>What do you know about litigation consulting, and why would you want to work in the field?</li></p>
                    <p className="companydata-text2"><li>Why do you think you didn't do well in the classes you had lower grades in?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>Give me your elevator pitch.</li></p>
                    <p className="companydata-text2"><li>How did you learn about Navigant?</li></p>
                    <p className="companydata-text2"><li>What is your favorite book?</li></p>
                    <p className="companydata-text2"><li>Why does this specific practice within Navigant interest you?</li></p>
                    <p className="companydata-text2"><li>What was the last book you read?</li></p>
                    <p className="companydata-text2"><li>Why Life Sciences?</li></p>
                    <p className="companydata-text2"><li>Tell me something you are interested in learning in this Internship?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you were told to redo an assignment. How did you improve it?</li></p>
                    <p className="companydata-text2"><li>What was the most difficult analytic problem you've had to solve?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had difficulty working in a team.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you lead a team in coming up with a solution to a problem.</li></p>
                    <p className="companydata-text2"><li>Name a time when you showed leadership.</li></p>
                </div>
            );
    }
};
