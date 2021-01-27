import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BCGIQ(props){
    const [filter, setFilter] = useState("Administrative Assistant");
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
                  className={decideClassName(filter, "Administrative Assistant")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Administrative Assistant")}
              >
                  AA
              </button>
              <button
                  className={decideClassName(filter, "Consultant")}
                  style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Consultant")}
              >
                  Consultant
              </button>
              <button
                  className={decideClassName(filter, "Associate")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Associate")}
              >
                  Associate
              </button>
              <button
                  className={decideClassName(filter, "Data Scientist")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Data Scientist")}
              >
                  DS
              </button>
          </div>
          <div className="container d-flex justify-content-start">
              <button
                  className={decideClassName(filter, "Area Coordinator")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Area Coordinator")}
              >
                  AC
              </button>
              <button
                  className={decideClassName(filter, "Intern")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Intern")}
              >
                  Intern
              </button>
              <button
                  className={decideClassName(filter, "Business Analyst")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Business Analysty")}
              >
                  BA
              </button>
              <button
                  className={decideClassName(filter, "Knowledge Analyst")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Knowledge Analyst")}
              >
                  KA
              </button>
          </div>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Administrative Assistant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Administrative Assistant</p>
                    <p className="companydata-text2"><li>What was your favorite job, and why? </li></p>
                    <p className="companydata-text2"><li>What was a time you made a mistake and fixed it?</li></p>
                    <p className="companydata-text2"><li>Why a AA position?</li></p>
                    <p className="companydata-text2"><li>How do you work with conflicting deadlines and managers? .</li></p>
                    <p className="companydata-text2"><li>Describe how you measure the average time taken to queue at an airport check-in counter?</li></p>
                    <p className="companydata-text2"><li>How do you stay organized?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Why consulting and this office?</li></p>
                    <p className="companydata-text2"><li>What made you go into the consulting field?</li></p>
                    <p className="companydata-text2"><li>What is the best leadership experience you had?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you assembled a team.</li></p>
                    <p className="companydata-text2"><li>Describe one time you worked in a team and held a leadership role.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had a conflict with someone at work.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to change course and change your strategy.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to change someone's mind to lead to a different outcome.</li></p>
                    <p className="companydata-text2"><li>How should this company respond to its competitor's pricing change?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe a time you changed the mind of someone in an organization.</li></p>
                    <p className="companydata-text2"><li>What was one time you achieved a goal?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you received criticism and how you responded to it.</li></p>
                    <p className="companydata-text2"><li>Name a time you brought out the best in your teammates?</li></p>
                    <p className="companydata-text2"><li>How to build credibility with clients?</li></p>
                    <p className="companydata-text2"><li>What type of project would you like to work on?</li></p>
                </div>
            );
        case "Data Scientist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Scientist</p>
                    <p className="companydata-text2"><li>What is BCG Gamma, and what motivated you to apply for us?</li></p>
                </div>
            );
        case "Area Coordinator":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Area Coordinator</p>
                    <p className="companydata-text2"><li>What are your salary expectations?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in this role? </li></p>
                    <p className="companydata-text2"><li>Would entrepreneurial spirit fit into the company? They seemed to think not.</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>What is something you are proud of?</li></p>
                    <p className="companydata-text2"><li>When's the time you've stepped up as a leader?</li></p>
                    <p className="companydata-text2"><li>Name a time when you had to switch directions.</li></p>
                </div>
            );
        case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>What is the most formative experience on your resume?</li></p>
                    <p className="companydata-text2"><li>What is your worst quality?</li></p>
                </div>
            );
        case "Knowledge Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Knowledge Analyst</p>
                    <p className="companydata-text2"><li>What would you tell a CEO who asks how he/she can make his organization agile?</li></p>
                    <p className="companydata-text2"><li>What is agile? </li></p>
                </div>
            );
    }
};
