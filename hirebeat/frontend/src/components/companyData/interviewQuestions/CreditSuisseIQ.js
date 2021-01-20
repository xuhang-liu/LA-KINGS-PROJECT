import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CreditSuisseIQ(props){
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
                    <p className="companydata-text2"><li>Credit Suisse strives for client loyalty to keep us running strong into the future. What do you feel are the keys to retaining clients for the long haul?</li></p>
                    <p className="companydata-text2"><li>Here at Credit Suisse, we are expecting someone with strong leadership skills to take this role. How would you describe your management style?</li></p>
                    <p className="companydata-text2"><li>What is your familiarity with debt-to-equity ratios and what would you consider a good debt-to-equity ratio?</li></p>
                    <p className="companydata-text2"><li>Why would our clients here at Credit Suisse want you to be their financial advisor?</li></p>
                    <p className="companydata-text2"><li>How do you believe your coworkers would describe you?</li></p>
                    <p className="companydata-text2"><li>The clients of a financial firm like Credit Suisse can display an arrangement of emotions when they work with our Client Services team. How would you handle a situation where a client was very angry?</li></p>
                    <p className="companydata-text2"><li>Are you familiar with KYC and how it impacts our business at Credit Suisse?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>We pride ourselves on our interdepartmental teamwork here at Credit Suisse. If hired for this role, what kind of team player could we expect you to be?</li></p>
                    <p className="companydata-text2"><li>Our customers rely on our services outside of normal business hours. Are you able to work a flexible schedule if hired for this position?</li></p>
                    <p className="companydata-text2"><li>If you joined the team here at Credit Suisse, how would you build relationships with those that you would be working closely with?</li></p>
                    <p className="companydata-text2"><li>Discuss a time that you worked a client through a difficult financial situation. What were the keys to making it a success for the client?</li></p>
                    <p className="companydata-text2"><li>We want our advising team at Credit Suisse to be happy and healthy. How do you manage the day to day stress of being a financial advisor?</li></p>
                    <p className="companydata-text2"><li>List the top 3 skills that you have acquired in your last role.</li></p>
                    <p className="companydata-text2"><li>In this role as a Risk Analyst with Credit Suisse, you will be expected to be the expert on changes in financial regulations that impact our business. How do you keep yourself up to speed on these changes currently?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Think back over your career up to today and tell me about the most difficult day on the job you encountered. What made the day difficult and how did you handle that situation?</li></p>
                    <p className="companydata-text2"><li>What software programs do you use in your current work and how adaptable would you say that you are in learning and using new programs?</li></p>
                    <p className="companydata-text2"><li>To help us understand your need for initial training and orientation in this role with Credit Suisse, can you tell me what financial software you have familiarity working on?</li></p>
                    <p className="companydata-text2"><li>How do you feel that your education and career to this point has prepared you to work in the international tax realm here at Credit Suisse?</li></p>
                    <p className="companydata-text2"><li>At Credit Suisse, we expect our advisors to be available to speak with clients in person, over the phone and through email. What are your experiences in working with clients through different communication methods?</li></p>
                    <p className="companydata-text2"><li>In this role with Credit Suisse, we will rely on your analytical reporting skills on a regular basis. Why do you feel analytical reporting is important in the financial field?</li></p>
                    <p className="companydata-text2"><li>The day-to-day life at Credit Suisse can be hectic and stressful at times. If hired for this role, how would you keep yourself motivated when working with stressed colleagues and pushy clients?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>At Credit Suisse, our clients look to us to help find new and creative ways to save tax dollars. Have you ever had a unique situation where you helped an organization save tax dollars through your work and insight?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you had to analyze information in order to make a recommendation.</li></p>
                    <p className="companydata-text2"><li>What tools do you currently use to help you be a more efficient and effective Business Analyst?</li></p>
                    <p className="companydata-text2"><li>One huge philosophy that we believe in at Credit Suisse is professional development. How have you worked to develop yourself professionally throughout your career?</li></p>
                    <p className="companydata-text2"><li>If hired to this role here at Credit Suisse, what do you see as one initial hurdle you will have to overcome in your first weeks on the job?</li></p>
                    <p className="companydata-text2"><li>At Credit Suisse, we expect our Business Analysts to put extra emphasis into the risk management aspects of their project work. How have you performed risk mitigation and risk avoidance in your previous roles as a Business Analyst?</li></p>
                </div>
            );
    }
};
