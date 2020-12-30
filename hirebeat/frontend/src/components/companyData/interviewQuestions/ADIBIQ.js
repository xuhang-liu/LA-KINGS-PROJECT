import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ADIBIQ(props){
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
                    <p className="companydata-text2"><li>What has been the most stressful situation that you faced in the workplace and what did you do to ensure that you navigated that situation successfully?</li></p>
                    <p className="companydata-text2"><li>How would you rate your ability to learn new software programs on a scale of 1 to 10? </li></p>
                    <p className="companydata-text2"><li>How do you respond to problems that require a quick solution? </li></p>
                    <p className="companydata-text2"><li>As a Personal Banker at Abu Dhabi Islamic Bank, how would you select products to suggest to our customers?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in five years?</li></p>
                    <p className="companydata-text2"><li>Take a couple of minutes to sell this notepad to me. </li></p>
                    <p className="companydata-text2"><li>At Abu Dhabi Islamic Bank, we pride ourselves on providing the best overall customer experience. Talk about your customer service experience and explain why it will help our clients here.</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>What customer service experience do you have that would greatly benefit the customers at Abu Dhabi Islamic Bank? </li></p>
                    <p className="companydata-text2"><li>Abu Dhabi Islamic Bank strives for client loyalty to keep us running strong into the future. What do you feel are the keys to retaining clients for the long haul? </li></p>
                    <p className="companydata-text2"><li>If a customer at Abu Dhabi Islamic Bank had increased savings as their main personal financial goal, what steps would you take with them to get them started down the right path? </li></p>
                    <p className="companydata-text2"><li>How would you handle communication with a customer that was visibly upset? </li></p>
                    <p className="companydata-text2"><li>What is the greatest challenge you have faced in your career so far? How did you overcome it?</li></p>
                    <p className="companydata-text2"><li>Discuss a time that you worked a client through a difficult financial situation. What were the keys to making it a success for the client?</li></p>
                    <p className="companydata-text2"><li>On the finance side of Abu Dhabi Islamic Bank, we expect our representatives to be ingrained in our sales focused culture. If hired for this role, how would you learn and embrace our sales process?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>How do you define success?</li></p>
                    <p className="companydata-text2"><li>Due to the continued explosion of the digital world, Abu Dhabi Islamic Bank is becoming more virtual on a day to day basis. What job duties would you see as being fluent in this role as a Teller with us? </li></p>
                    <p className="companydata-text2"><li>We pride ourselves on teamwork here at Abu Dhabi Islamic Bank and this role in Client Services relies on teamwork. What are the top qualities you would bring to a team based atmosphere here?  </li></p>
                    <p className="companydata-text2"><li>The banking industry is built on trust and this is no different at Abu Dhabi Islamic Bank. Do other people you have worked closely with consider you to be trustworthy? </li></p>
                    <p className="companydata-text2"><li>Describe a difficult problem and how you approached it.</li></p>
                    <p className="companydata-text2"><li>If a client here at Abu Dhabi Islamic Bank were to be denied the financing that they desire, how would you handle that situation?</li></p>
                    <p className="companydata-text2"><li>Have you ever had to work with a difficult colleague? How did you handle that situation? </li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>If you were having an interaction with a client here at Abu Dhabi Islamic Bank and you weren't able to answer their question or solve their problem on your own, how would you handle that situation?</li></p>
                    <p className="companydata-text2"><li>The banking industry can be stressful. Tell me about a time when you worked in a high-pressure situation.</li></p>
                    <p className="companydata-text2"><li>What is the highest level of mathematics that you completed during any of your schooling?</li></p>
                    <p className="companydata-text2"><li>What experience do you have in multitasking different duties in any of your prior work experiences?</li></p>
                    <p className="companydata-text2"><li>If hired for this role here at Abu Dhabi Islamic Bank, how would you manage your daily tasks on the job to ensure that your work is completed in a timely and efficient manner?</li></p>
                    <p className="companydata-text2"><li>What is one unique skill that you will bring to our loan processing team here at Abu Dhabi Islamic Bank?</li></p>
                </div>
            );
    }
};
