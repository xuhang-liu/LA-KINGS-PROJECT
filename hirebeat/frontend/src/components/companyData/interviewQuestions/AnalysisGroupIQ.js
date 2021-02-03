import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AnalysisGroupIQ(props){
    const [filter, setFilter] = useState("Associate");
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
              className={decideClassName(filter, "Associate")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Analyst")}
          >
              Analyst
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Why did you choose AG?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you analyzed a lot of data.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work at Analysis Group?</li></p>
                    <p className="companydata-text2"><li>What is your experience in working with difficult team members?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a data-driven project that you have conducted.</li></p>
                    <p className="companydata-text2"><li>Walk me through a quantitative project you've done.</li></p>
                    <p className="companydata-text2"><li>What role do you play on a team?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you worked with a messy dataset.</li></p>
                    <p className="companydata-text2"><li>Why do you choose our company?</li></p>
                    <p className="companydata-text2"><li>What's your future career plan?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you deal with a lot of pressure.</li></p>
                    <p className="companydata-text2"><li>Give an example of a statistics-oriented project you have worked on in the past.</li></p>
                    <p className="companydata-text2"><li>Why did you choose the model you did?</li></p>
                    <p className="companydata-text2"><li>How did you deal with an incomplete dataset?</li></p>
                    <p className="companydata-text2"><li>Have you got any experience with a large real-world dataset?</li></p>
                    <p className="companydata-text2"><li>Describe in detail a project that you have done in the past.</li></p>
                    <p className="companydata-text2"><li>Describe the quantitative methods you used towards any research or data analytics project you worked on.</li></p>
                    <p className="companydata-text2"><li>What interested you in this position?</li></p>
                    <p className="companydata-text2"><li>What is a time you were challenged, and how did you recover?</li></p>
                    <p className="companydata-text2"><li>What has been your experience working in teams?</li></p>
                    <p className="companydata-text2"><li>Difficulty in the research project.</li></p>
                    <p className="companydata-text2"><li>Describe a difficulty you had when working as part of a team. How did you respond, and what came of it?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in economic consulting, and why are you interested in Analysis Group specifically?</li></p>
                    <p className="companydata-text2"><li>What is an example of a time you learned something challenging?</li></p>
                    <p className="companydata-text2"><li>What is something not on your resume?</li></p>
                    <p className="companydata-text2"><li>What kind of work environment do you prefer?</li></p>
                    <p className="companydata-text2"><li>Have you ever presented or shared technical information with non-technical people?</li></p>
                    <p className="companydata-text2"><li>Explain a concept from your favorite economics class as if I were a "layperson.”</li></p>
                    <p className="companydata-text2"><li>Tell me about a group project that you worked on that did not go well.</li></p>
                </div>
            );
    }
};
