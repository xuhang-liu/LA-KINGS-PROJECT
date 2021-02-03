import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ATKearneyIQ(props){
    const [filter, setFilter] = useState("Associate Consultant");
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
              className={decideClassName(filter, "Associate Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate Consultant")}
          >
              AC
          </button>
          <button
              className={decideClassName(filter, "Business Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Analyst")}
          >
              BA
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
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
        default: case "Associate Consultant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Associate Consultant</p>
                    <p className="companydata-text2"><li>Why do you want to work in consulting?</li></p>
                    <p className="companydata-text2"><li>Why did you choose Kearney over others?</li></p>
                    <p className="companydata-text2"><li>What was your role on a team?</li></p>
                    <p className="companydata-text2"><li>How to improve the procurement processes and generate savings for the category of 'labels.'</li></p>
                </div>
            );
        case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>What is your favorite book?</li></p>
                    <p className="companydata-text2"><li>Tell me about a leadership experience in a dysfunctional team.</li></p>
                    <p className="companydata-text2"><li>What are your key strengths?</li></p>
                    <p className="companydata-text2"><li>What are your key weaknesses?</li></p>
                    <p className="companydata-text2"><li>Tell me something about yourself.</li></p>
                    <p className="companydata-text2"><li>Strategy to improve the supply chain management process for a logistics company.</li></p>
                    <p className="companydata-text2"><li>Why do you want to join Kearney?</li></p>
                    <p className="companydata-text2"><li>What was a class outside of your major you enjoyed, and what did you learn from it that you can take into the workplace?</li></p>
                    <p className="companydata-text2"><li>Run a background introduction for yourself</li></p>
                    <p className="companydata-text2"><li>Why would you leave your current job for us?</li></p>
                    <p className="companydata-text2"><li>Walk me through your experience and highlight what you think is relevant for us.</li></p>
                    <p className="companydata-text2"><li>Give an example where you showed leadership.</li></p>
                    <p className="companydata-text2"><li>In a local election, votes were cast for Mr. Dyer, Ms. Frau, and Mr. Borak in the ratio of 4:3:2. If there were no other candidates and none of the 1,800 voters cast more than one vote, how many options did Ms. Frau receive?</li></p>
                    <p className="companydata-text2"><li>Explain your previous job roles.</li></p>
                    <p className="companydata-text2"><li>Tell me about the internship experience? And what challenges did you take before?</li></p>
                    <p className="companydata-text2"><li>Private-label has become a threat for a large cookie manufacturer - how would you advise them?</li></p>
                    <p className="companydata-text2"><li>Global appliances companies (think kitchen appliances) are experiencing weakening profitability in the LATAM - what should we consider to increase profitability?</li></p>
                    <p className="companydata-text2"><li>Tell me something that is not on your resume.</li></p>
                    <p className="companydata-text2"><li>What is the market for Camel Milk in Saudi Arabia?</li></p>
                    <p className="companydata-text2"><li>What are your long-term objectives?</li></p>
                    <p className="companydata-text2"><li>Do you have any international experience?</li></p>
                    <p className="companydata-text2"><li>How can you estimate the number of traffic lights in Jeddah?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>How would you recommend the client to enter into a new market?</li></p>
                    <p className="companydata-text2"><li>How do you build relationships with stakeholders?</li></p>
                    <p className="companydata-text2"><li>Calculate the market size of laptops in Delhi NCR.</li></p>
                    <p className="companydata-text2"><li>Give me an example of when you disagreed with a work colleague and how you resolved the situation.</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about a recent presentation you gave.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you took the initiative.</li></p>
                </div>
            );
    }
};
