import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function KPMGIQ(props){
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
                    <p className="companydata-text2"><li>Would you say that you are a goal-oriented person on the job? Why would you say that?</li></p>
                    <p className="companydata-text2"><li>Give an example of a finance project that you worked on during your career. What was the project, what role did you play on the project team, and what was the outcome of the project?</li></p>
                    <p className="companydata-text2"><li>Talk about a time that you successfully educated another individual or group in your area of expertise. What made your educational experience effective?</li></p>
                    <p className="companydata-text2"><li>Being successful in consulting and working here at KPMG Australia requires the ability to work effectively with Type A personalities. What are your experiences in working with this personality and how did you make the relationships a success?</li></p>
                    <p className="companydata-text2"><li>At KPMG Australia, you will have the opportunity to work with high-level executives and leaders from the companies we contract with. What experience do you have in working with people at these levels?</li></p>
                    <p className="companydata-text2"><li>Talk about a time you had to work with a very difficult person. What was the situation and how did you handle it?</li></p>
                    <p className="companydata-text2"><li>We have a wide range of services at KPMG Australia. Have you ever used any of our services?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What tools and programs are you comfortable and experienced working on that would help you in this role with KPMG Australia?</li></p>
                    <p className="companydata-text2"><li>What is the riskiest decision you have ever made in your career?</li></p>
                    <p className="companydata-text2"><li>A key component to success here at KPMG Australia is building solid relationships with new clients. How do you effectively get to know new people and lay the groundwork for a long-lasting relationship?</li></p>
                    <p className="companydata-text2"><li>An often difficult part about working for KPMG Australia and our clients is the need to be fluent and adaptable to the cultures of our clients. Why would you say that you'd be able to handle this aspect of the job with ease?</li></p>
                    <p className="companydata-text2"><li>In what ways would our clients here at KPMG Australia benefit from your knowledge and services?</li></p>
                    <p className="companydata-text2"><li>Being successful in the consulting industry requires adaptability and the ability to learn a business fast. What would be your approach to help you learn the ins and outs of a new client?</li></p>
                    <p className="companydata-text2"><li>Have you ever worked in a cross-functional environment?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you prevent burnout and remain highly motivated?</li></p>
                    <p className="companydata-text2"><li>If you are hired for this position here at KPMG Australia, what do you think the biggest hurdle for you would be from the start?</li></p>
                    <p className="companydata-text2"><li>What two to three traits do you have that will lead to success in a consulting role with KPMG Australia?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time where you had to analyze a set of data and then make a recommendation.</li></p>
                    <p className="companydata-text2"><li>What roles are you comfortable assuming in working as part of a larger team?</li></p>
                    <p className="companydata-text2"><li>As a consultant with KPMG Australia, you will be relied upon to build trust with our clients as you work with them on financial stability and well-being. What would be your tactics to build trust from the start with a new client?</li></p>
                    <p className="companydata-text2"><li>Working with our clients here at KPMG Australia often involves some initial conflict with our clients. How would you rate your ability to handle conflict or disagreements in the workplace?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>KPMG Australia often introduces new tools. Have you ever helped to implement a new tool or program?</li></p>
                    <p className="companydata-text2"><li>Talk about a time you had to use conflict resolution skills in a business setting. What were the situation and the outcome and how did you positively influence that outcome?</li></p>
                    <p className="companydata-text2"><li>What interests you in joining the business consulting world here at KPMG Australia?</li></p>
                    <p className="companydata-text2"><li>How do you stay organized and on track when working on a long-term project?</li></p>
                    <p className="companydata-text2"><li>Strong time management is important at KPMG Australia. How do you manage your time, even on the busiest days?</li></p>
                    <p className="companydata-text2"><li>How do you ensure accuracy and completeness in accounting records?</li></p>
                    <p className="companydata-text2"><li>In this role with KPMG Australia, how would you evaluate a new client's financial position?</li></p>
                    <p className="companydata-text2"><li>In our world here at KPMG Australia, our clients rely on real-world analytical data versus assumptions and guesswork. What analytical skills would you bring to the table here for our clients?</li></p>
                </div>
            );
    }
};
