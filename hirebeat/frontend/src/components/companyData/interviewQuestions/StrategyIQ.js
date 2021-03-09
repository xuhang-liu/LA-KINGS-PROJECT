import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function StrategyIQ(props){
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
              className={decideClassName(filter, "Senior Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Senior Associate")}
          >
              SA
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Intern")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Intern")}
          >
              Intern
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Market sizing of lubricant used for electrical purposes.</li></p>
                    <p className="companydata-text2"><li>Why strategy&?</li></p>
                    <p className="companydata-text2"><li>Why is it strategy consulting?</li></p>
                    <p className="companydata-text2"><li>What other careers did you look into?</li></p>
                    <p className="companydata-text2"><li>Would you invest in this company?</li></p>
                    <p className="companydata-text2"><li>How would you market X product?</li></p>
                    <p className="companydata-text2"><li>What are the growth drivers of this industry?</li></p>
                    <p className="companydata-text2"><li>How would you decide which country to expand this company into?</li></p>
                    <p className="companydata-text2"><li>How would your friend describe you?</li></p>
                    <p className="companydata-text2"><li>Tell us about yourself in short.</li></p>
                    <p className="companydata-text2"><li>Market sizing on electronic boards.</li></p>
                    <p className="companydata-text2"><li>What current technology in the new have you heard?</li></p>
                </div>
            );
        case "Senior Associate":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Senior Associate</p>
                    <p className="companydata-text2"><li>Tell me something about you that is not on your CV.</li></p>
                    <p className="companydata-text2"><li>The profitability of a public infrastructure company has plateaued. Tell me why and the next steps to overcome this.</li></p>
                    <p className="companydata-text2"><li>Your friend wants to open a new shop in NYC, what do you tell him?</li></p>
                    <p className="companydata-text2"><li>How would you reduce the cost for the company manufacturing doors and windows?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you faced a conflict</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Why Strategy&?</li></p>
                    <p className="companydata-text2"><li>Why consulting?</li></p>
                    <p className="companydata-text2"><li>If your life was a book, which would be the title?</li></p>
                    <p className="companydata-text2"><li>Why do you want to become a consultant?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you went above and beyond what was asked of you.</li></p>
                    <p className="companydata-text2"><li>If you would open a hot dog stand, how much rent would be demanded from you?</li></p>
                    <p className="companydata-text2"><li>How many people are entering Dubai airport per year?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>How do synergies affect EBITDA?</li></p>
                    <p className="companydata-text2"><li>Develop a five-year growth strategy for a hospital.</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>What was something you learned from one of your classes that you've applied in the real world?</li></p>
                    <p className="companydata-text2"><li>What is the annual revenue of a specific park in Disneyland?</li></p>
                </div>
            );
    }
};
