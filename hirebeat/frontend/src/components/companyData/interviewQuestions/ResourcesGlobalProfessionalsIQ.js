import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ResourcesGlobalProfessionalsIQ(props){
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
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Project Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Project Consultant")}
          >
              PC
          </button>
          <button
              className={decideClassName(filter, "Client Services Director")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Client Services Director")}
          >
              CSD
          </button>
          <button
              className={decideClassName(filter, "Human Resources")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Human Resources")}
          >
              HR
          </button>
          <button
              className={decideClassName(filter, "Supply Chain Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Supply Chain Consultant")}
          >
              SCC
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your standard skill set?</li></p>
                    <p className="companydata-text2"><li>In what areas are you most qualified to add value to our clients?</li></p>
                    <p className="companydata-text2"><li>What is the experience in previous jobs in project management?</li></p>
                    <p className="companydata-text2"><li>What is the typical life cycle of a private equity fund?</li></p>
                    <p className="companydata-text2"><li>Describe a scenario where you have been a change agent, you have encountered hostility, and what you have done to facilitate change?</li></p>
                    <p className="companydata-text2"><li>What do you consider your greatest strength?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you needed to get a project completed and are not getting help internally.</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and how your professional experience relates to our business.</li></p>
                    <p className="companydata-text2"><li>How did you handle a difficult situation with a coworker?</li></p>
                    <p className="companydata-text2"><li>Tell me three adjectives that your co-workers would use to describe you.</li></p>
                </div>
            );
        case "Project Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Project Consultant</p>
                    <p className="companydata-text2"><li>How do you handle receiving confusing instructions from your supervisor?</li></p>
                    <p className="companydata-text2"><li>Tell us about project experiences at your former employer.</li></p>
                    <p className="companydata-text2"><li>Describe a time when you had a challenging project and how you recovered from it</li></p>
                    <p className="companydata-text2"><li>Tell me about your weaknesses.</li></p>
                </div>
            );
        case "Client Services Director":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Client Services Director</p>
                    <p className="companydata-text2"><li>Tell me about what you like about your job.</li></p>
                    <p className="companydata-text2"><li>Why are you interested in joining RGP?</li></p>
                    <p className="companydata-text2"><li>How to go about building a business in a very challenging space/market?</li></p>
                    <p className="companydata-text2"><li>How would you go about learning and mastering a particular market you know nothing about?</li></p>
                    <p className="companydata-text2"><li>How do you prepare for a meeting?</li></p>
                </div>
            );
        case "Human Resources":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Human Resources</p>
                    <p className="companydata-text2"><li>Tell me about a problematic recruiting experience and how you resolved it for your client.</li></p>
                    <p className="companydata-text2"><li>How do you think your background fits into that?</li></p>
                    <p className="companydata-text2"><li>How do you develop business leads?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to overcome an obstacle to implementing a new idea/approach.</li></p>
                </div>
            );
        case "Supply Chain Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Supply Chain Consultant</p>
                    <p className="companydata-text2"><li>How would you describe the ideal process in Sourcing, and what would be my contribution to that process?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you failed.</li></p>
                    <p className="companydata-text2"><li>What is your background in supply chain management working in a FAR / DFAR regulatory environment?</li></p>
                    <p className="companydata-text2"><li>Describe how you function in a team environment and what you do if there is a problem team member</li></p>
                </div>
            );
    }
};
