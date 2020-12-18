import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function RCIQ(props){
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
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Investment Banking Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Analyst</p>
                    <p className="companydata-text2"><li>How do you see the US recovering from COVID compared to China?</li></p>
                    <p className="companydata-text2"><li>How do you value a company? </li></p>
                    <p className="companydata-text2"><li>What factors do you look at in private equity when assessing whether to do a deal?</li></p>
                    <p className="companydata-text2"><li>How do you calculate the cost of equity and the cost of debt?</li></p>
                    <p className="companydata-text2"><li>What would you use as the discount rate in a DCF?</li></p>
                    <p className="companydata-text2"><li>Why is minority interest significant in calculating enterprise value?</li></p>
                    <p className="companydata-text2"><li>How is Rothschild different from its competitors?</li></p>
                    <p className="companydata-text2"><li>How do you come up with assumptions for each step of a DCF? (walk to FCF line by line, talking about assumptions for each step).</li></p>
                    <p className="companydata-text2"><li>Given an interest rate of 2% and the tax rate of 40%, what are the effects on the financial statements for a piece of equipment costing $50,000 bought using $100,000 of debt? What is the immediate impact, and what would be the impact one year later?</li></p>
                    <p className="companydata-text2"><li>What is the minimum number of times you need to cut a cake to have eight equal pieces?</li></p>
                    <p className="companydata-text2"><li>Can you explain the purpose of trading / trans comps? How do you perform them? What are their advantages/disadvantages?</li></p>
                    <p className="companydata-text2"><li>What is the best business to invest in currently?</li></p>
                    <p className="companydata-text2"><li>Why did you choose investment banking?</li></p>
                    <p className="companydata-text2"><li>What are the competition firms for our company? Please explain why. </li></p>
                    <p className="companydata-text2"><li>How would your friends describe you?</li></p>
                    <p className="companydata-text2"><li>Can you walk me through a DCF?</li></p>
                    <p className="companydata-text2"><li>How do you value a company based on its free cash flow? Can you walk me through the steps?</li></p>
                    <p className="companydata-text2"><li>Can you explain why a private equity firm might acquire an airport baggage service company rather than a high technology or hyped pharm-tech startup?</li></p>
                    <p className="companydata-text2"><li>If revenue doubles, what happens to everything else on the three financial statements?</li></p>
                    <p className="companydata-text2"><li>Which company has a higher cost of capital, WalMart, or Apple? Why?</li></p>
                </div>
            );
    }
};
