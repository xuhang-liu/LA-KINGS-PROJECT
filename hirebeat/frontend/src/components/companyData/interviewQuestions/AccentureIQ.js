import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AccentureIQ(props){
    const [filter, setFilter] = useState("Manager");
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
      <div style={{marginBottom: "5px"}} >
        <div className="container d-flex justify-content-start">
          <button
              className={decideClassName(filter, "Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager")}
          >
              Manager
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Receptionist")}
              style = {{width: "110px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Receptionist")}
          >
              Receptionist
          </button>
        </div>
        <div className="container d-flex justify-content-start">
          <button
              className={decideClassName(filter, "Software Engineer")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineer")}
          >
              SWE
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Technology")}
              style = {{width: "110px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Technology")}
          >
              Technology
          </button>
        </div>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Manager":
            return(
                <div>
                    <p className="companydata-text2"><li>What can you tell me about Accenture?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Accenture?</li></p>
                    <p className="companydata-text2"><li>What experience do you have in project management?</li></p>
                    <p className="companydata-text2"><li>Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>Tell me how you deal with conflict.</li></p>
                    <p className="companydata-text2"><li>Tell me a time where you had a difficult client and how you dealt with it.</li></p>
                    <p className="companydata-text2"><li>Walk me through a day at your current position. What do you do?</li></p>
                    <p className="companydata-text2"><li>Mostly behavioral questions</li></p>
                    <p className="companydata-text2"><li>How do you deal with conflict?</li></p>
                    <p className="companydata-text2"><li>How would a previous employer or current employer describe your work/attitude?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a time you failed.</li></p>
                    <p className="companydata-text2"><li>Explain a time when you worked in a team and your role within the group.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you overcame a problem within a group.</li></p>
                    <p className="companydata-text2"><li>A time you faced a challenge and how you overcame it.  </li></p>
                    <p className="companydata-text2"><li>Tell me about your background.</li></p>
                    <p className="companydata-text2"><li>How do you deal with stress?</li></p>
                    <p className="companydata-text2"><li>What sets Accenture apart?</li></p>
                    <p className="companydata-text2"><li>What do you value most about your job?</li></p>
                    <p className="companydata-text2"><li>What is your understanding of what we do here at Accenture?</li></p>
                    <p className="companydata-text2"><li>Tell me a time you thought differently than a manager or leader and how you confronted them about it.</li></p>
                    <p className="companydata-text2"><li>Describe a time when you struggled to build a relationship with someone important. How did you eventually overcome that?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>A client invites you to a social/networking event this evening, but you have work due tomorrow for another project. What do you do?</li></p>
                    <p className="companydata-text2"><li>How would you approach solving a complex problem?</li></p>
                </div>
            );
        case "Receptionist":
            return(
                <div>
                    <p className="companydata-text2"><li>What do you do when you've finished all your work?</li></p>
                </div>
            );
        case "Software Engineer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>What do you know about Accenture?</li></p>
                    <p className="companydata-text2"><li>Difference between Interface and inheritance.</li></p>
                    <p className="companydata-text2"><li>What are some extracurriculars that you've been a part of?</li></p>
                    <p className="companydata-text2"><li>What are your academic interests?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>What is a time you used communication skills to help a client?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>How would you provide a consultative improvement?</li></p>
                    <p className="companydata-text2"><li>What are some challenges you might face when launching the product?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in working at Accenture?</li></p>
                </div>
            );
        case "Technology":
            return(
                <div>
                    <p className="companydata-text2"><li>What technology are you familiar with?</li></p>
                    <p className="companydata-text2"><li>Why are you applying for this role?</li></p>
                    <p className="companydata-text2"><li>Tell me about when two people on your team did not get along and how you handled the situation?</li></p>
                </div>
            );
    }
};
