import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AllstateIQ(props){
    const [filter, setFilter] = useState("Q1");
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
              className={decideClassName(filter, "Q1")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q1")}
          >
              Q1
          </button>
          <button
              className={decideClassName(filter, "Q2")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q2")}
          >
              Q2
          </button>
          <button
              className={decideClassName(filter, "Q3")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q3")}
          >
              Q3
          </button>
          <button
              className={decideClassName(filter, "Q4")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Q4")}
          >
              Q4
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Q1":
            return(
                <div>
                    <p className="companydata-text2"><li>Insurance contracts can be detailed and lengthy. How do you help your clients to understand their Insurance contracts?</li></p>
                    <p className="companydata-text2"><li>Rate your communication skills from 1-10 with proper examples backing your given rating.</li></p>
                    <p className="companydata-text2"><li>Tell me about an error or mistake you made because of a breakdown in communication from you or one of your team members.</li></p>
                    <p className="companydata-text2"><li>How would you describe your relationship with your customers or clients? </li></p>
                    <p className="companydata-text2"><li>What leadership qualities do you possess?</li></p>
                    <p className="companydata-text2"><li>Do you think honesty is always the best policy?</li></p>
                    <p className="companydata-text2"><li>How often do you take work home with you?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me about your post-secondary experience and how it prepared you for a career with Allstate?</li></p>
                    <p className="companydata-text2"><li>Do you consider yourself a creative thinker in the workplace or do you prefer to follow a predetermined set of rules?</li></p>
                    <p className="companydata-text2"><li>Have you obtained any Insurance related certifications or licenses?</li></p>
                    <p className="companydata-text2"><li>When it comes to Insurance, would you rather work face to face with clients, or in the background in a research and analysis based role?</li></p>
                    <p className="companydata-text2"><li>At Allstate we prefer to hire individuals with longevity in mind. Where do you see your career 5 years from now?</li></p>
                    <p className="companydata-text2"><li>Do you prefer to work with clients on their business/commercial insurance needs, or health/life insurance needs? Why?</li></p>
                    <p className="companydata-text2"><li>The Insurance industry boasts new trends and developments quite frequently. How do you stay on top of these changes?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you feel globalization has affected the Insurance industry?</li></p>
                    <p className="companydata-text2"><li>Since beginning your career in Insurance, what do you feel has been the most significant industry change?</li></p>
                    <p className="companydata-text2"><li>In your most recent position, what was the size of your client portfolio? Was that manageable for you?</li></p>
                    <p className="companydata-text2"><li>Within Allstate many of our positions require a Bachelors or Masters Degree. Have you considered furthering your education in order to advance your career?</li></p>
                    <p className="companydata-text2"><li>How do you like to be recognized for your accomplishments?</li></p>
                    <p className="companydata-text2"><li>Have you ever worked in a cross-functional environment?</li></p>
                    <p className="companydata-text2"><li>When have you had to think quickly in response to sudden change?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>What type of work environment allows you to be the most productive?</li></p>
                    <p className="companydata-text2"><li>What do you know about the culture at Allstate?</li></p>
                    <p className="companydata-text2"><li>How do you respond to feedback?</li></p>
                    <p className="companydata-text2"><li>What causes you to feel dissatisfied on the job?</li></p>
                    <p className="companydata-text2"><li>When have you shown great integrity at work?</li></p>
                    <p className="companydata-text2"><li>Do you feel performance should be rewarded over experience?</li></p>
                </div>
            );
    }
};
