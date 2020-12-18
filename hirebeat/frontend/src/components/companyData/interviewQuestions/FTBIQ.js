import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function FTBIQ(props){
    const [filter, setFilter] = useState("Customer Services Representative");
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
              className={decideClassName(filter, "Customer Services Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Services Representative")}
          >
              CSR
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Customer Services Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Services Representative</p>
                    <p className="companydata-text2"><li>Would you tell us a little bit about yourself?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you had to deal with an angry customer. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 3-5 years?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to tell difficult information to a customer. What did you do?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you suggested a change at your previous job.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you witnessed coworker dishonesty, and what did you do?</li></p>
                    <p className="companydata-text2"><li>How did your last job entail sales? Give an example of how you sold something.</li></p>
                    <p className="companydata-text2"><li>Can you tell me about a time you had a conflict with a team member or coworker?</li></p>
                    <p className="companydata-text2"><li>Have you ever been asked to do something you disagreed with? What did you do? How did it turn out?</li></p>
                    <p className="companydata-text2"><li>How would you sell a bank product to a customer who says no?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you over someone else?</li></p>
                    <p className="companydata-text2"><li>Have you ever had to refer a customer to another line or company to suit their needs better?</li></p>
                    <p className="companydata-text2"><li>Can you tell me a time when you had to do something unexpected?</li></p>
                    <p className="companydata-text2"><li>What is your best qualification for this position?</li></p>
                    <p className="companydata-text2"><li>What makes good customer service?</li></p>
                    <p className="companydata-text2"><li>How would you communicate your disagreements with your manager?</li></p>
                    <p className="companydata-text2"><li>How do you feel about networking?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you didn't agree with a specific policy or procedure. What did you do?</li></p>
                    <p className="companydata-text2"><li>Can you describe a time when you provided exceptional service?</li></p>
                    <p className="companydata-text2"><li>Do you have any experience selling credit cards?</li></p>
                </div>
            );
    }
};
