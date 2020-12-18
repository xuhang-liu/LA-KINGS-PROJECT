import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function LazardIQ(props){
    const [filter, setFilter] = useState("Investment Banking Analyst");
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
              className={decideClassName(filter, "Investment Banking Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Investment Banking Analyst")}
          >
              IBA
          </button>
          <button
              className={decideClassName(filter, "Financial Advisory Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Advisory Analyst")}
          >
              FAA
          </button>
          <button
              className={decideClassName(filter, "M&A")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("M&A")}
          >
              M&A
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Investment Banking Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Analyst</p>
                    <p className="companydata-text2"><li>Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>How do the 3 financial statements relate?</li></p>
                    <p className="companydata-text2"><li>Business M&A case study.</li></p>
                    <p className="companydata-text2"><li>Pitch me a stock.</li></p>
                    <p className="companydata-text2"><li>What are recent industry trends that interest you?</li></p>
                    <p className="companydata-text2"><li>Walk me through an LBO.</li></p>
                    <p className="companydata-text2"><li>A company with 20 P/E acquires a company 10 P/E in an all-scrip deal. All else held constant, is the deal accretive/dilutive?</li></p>
                    <p className="companydata-text2"><li>Walk me through a DCF Model.</li></p>
                    <p className="companydata-text2"><li>How would you calculate a risk-free rate for Argentina?</li></p>
                    <p className="companydata-text2"><li>If your firm's revenues increased, would you rather have that as a result of an increase in quantity or a price increase?</li></p>
                    <p className="companydata-text2"><li>Do you have any concerns about potentially coming in as an analyst?</li></p>
                    <p className="companydata-text2"><li>What is a company that you are following? What is their competitive positioning?</li></p>
                    <p className="companydata-text2"><li>List the valuation of the company from highest to lowest using the four valuation techniques.</li></p>
                    <p className="companydata-text2"><li>What is an industry you think is in trouble? </li></p>
                    <p className="companydata-text2"><li>Walk me UL FCF?</li></p>
                    <p className="companydata-text2"><li>How would you value this company? Why?.</li></p>
                    <p className="companydata-text2"><li>What is WACC?</li></p>
                    <p className="companydata-text2"><li>Teach me something interesting you learned in one of your classes?</li></p>
                    <p className="companydata-text2"><li>Name a recent deal and walk me through the dynamics.</li></p>
                    <p className="companydata-text2"><li>What happens to your 3 financial statements if you increase US$100 M in CapEx</li></p>
                    <p className="companydata-text2"><li>Multiples (P/E vs. EV/EBITDA)</li></p>
                    <p className="companydata-text2"><li>Drivers of a financial model to a specific industry</li></p>
                    <p className="companydata-text2"><li>Mathematical questions without paper (1/16=? 17x17=?)</li></p>
                    <p className="companydata-text2"><li>Why is a firm with high EBITDA worthless?</li></p>
                </div>
            );
        case "Financial Advisory Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Advisory Analyst</p>
                    <p className="companydata-text2"><li>How would you go about starting the acquisition process?</li></p>
                    <p className="companydata-text2"><li>When did you show leadership/teamwork?</li></p>
                    <p className="companydata-text2"><li>What is an example that helped you learn your strengths and weaknesses?</li></p>
                    <p className="companydata-text2"><li>What makes Lazard special?</li></p>
                </div>
            );
        case "M&A":
            return(
                <div>
                    <p className="companydata-text2"><li>How does Private Equity make money?</li></p>
                    <p className="companydata-text2"><li>Define Success.</li></p>
                    <p className="companydata-text2"><li>Walk me through your CV.</li></p>
                </div>
            );
    }
};
