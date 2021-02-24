import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ForresterResearchIQ(props){
    const [filter, setFilter] = useState("Research Associate");
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
              className={decideClassName(filter, "Research Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Research Associate")}
          >
              RA
          </button>
          <button
              className={decideClassName(filter, "Account Executive")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Account Executive")}
          >
              AE
          </button>
          <button
              className={decideClassName(filter, "Account Development Manager")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Account Development Manager")}
          >
              ADM
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Research Associate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Research Associate</p>
                    <p className="companydata-text2"><li>How do you manage up? </li></p>
                    <p className="companydata-text2"><li>Why do you want to work at Forrester?</li></p>
                    <p className="companydata-text2"><li>What type of people do you work best with?</li></p>
                    <p className="companydata-text2"><li>What are your learnings from your past work experiences?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself positioned in the next few years? </li></p>
                    <p className="companydata-text2"><li>What are your recommendations for the growing concern of smoke and pollution in Delhi?</li></p>
                    <p className="companydata-text2"><li>What technology are you passionate about?</li></p>
                    <p className="companydata-text2"><li>What is your project management experience?</li></p>
                    <p className="companydata-text2"><li>What's the Age of the Customer?</li></p>
                    <p className="companydata-text2"><li>Name some disruptive technologies you know.</li></p>
                    <p className="companydata-text2"><li>Why do you want to join the company?</li></p>
                    <p className="companydata-text2"><li>What do you think about the impact of technology on today's world?</li></p>
                    <p className="companydata-text2"><li>Examples of you showing initiative.</li></p>
                    <p className="companydata-text2"><li>Examples of "going the extra mile.</li></p>
                    <p className="companydata-text2"><li>What kind of role do you typically have within a group?</li></p>
                </div>
            );
        case "Account Executive":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Account Executive</p>
                    <p className="companydata-text2"><li>How do you understand Forrester’s business?</li></p>
                    <p className="companydata-text2"><li>Can you handle consultative selling with C-level people?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work here?</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you failed?</li></p>
                    <p className="companydata-text2"><li>What motivates you?</li></p>
                    <p className="companydata-text2"><li>Tell me about how you work with others within your organization?</li></p>
                    <p className="companydata-text2"><li>What are your strengths?</li></p>
                    <p className="companydata-text2"><li>Tell me about your sales style.</li></p>
                    <p className="companydata-text2"><li>Detail your plan for the first six months as to how you would achieve against your targets, what metrics/KPIs you would give yourself.</li></p>
                    <p className="companydata-text2"><li>What can you tell me about the ecosystem of analysts and sales?</li></p>
                    <p className="companydata-text2"><li>How would you safeguard the client relationship from an analyst?</li></p>
                    <p className="companydata-text2"><li>What is the elevator pitch you would give about AoC (Age of Customer)? What does this mean to you?</li></p>
                </div>
            );
        case "Account Development Manager":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Account Development Manager</p>
                    <p className="companydata-text2"><li>Elaborately explain cases you have faced at previous employers.</li></p>
                    <p className="companydata-text2"><li>Why do you think you fit the job?</li></p>
                    <p className="companydata-text2"><li>What do you bring to the table?</li></p>
                    <p className="companydata-text2"><li>Why would you like to work for Forrester?</li></p>
                    <p className="companydata-text2"><li>Describe a time you made a mistake and what you did about it.</li></p>
                    <p className="companydata-text2"><li>When have you experienced conflict at work?</li></p>
                    <p className="companydata-text2"><li>The job you are applying for is similar to the job you have now, why are you looking to move?</li></p>
                    <p className="companydata-text2"><li>What book are you reading right now?</li></p>
                    <p className="companydata-text2"><li>What characteristics do you think you will bring to the role from your current position?</li></p>
                    <p className="companydata-text2"><li>After the initial six months of training, what will you do to stand out? To keep challenging yourself?</li></p>
                    <p className="companydata-text2"><li>What are three words your friends would use to describe me?</li></p>
                    <p className="companydata-text2"><li>What steps will you take when attrition happens?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Run me through your resume.</li></p>
                    <p className="companydata-text2"><li>What are your project management skills like?</li></p>
                    <p className="companydata-text2"><li>What's the market opportunity for video communication in APAC?</li></p>
                    <p className="companydata-text2"><li>Can you tell me how your skills and experience match the job requirements?</li></p>
                    <p className="companydata-text2"><li>What salary are you looking for?</li></p>
                    <p className="companydata-text2"><li>Describe previous jobs and industry-related experience.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you were working on a project, and something unexpected happened.</li></p>
                    <p className="companydata-text2"><li>Provide an overview of your experience so far, and describe how it prepares you for this position.</li></p>
                </div>
            );
    }
};
