import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JFIQ(props){
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
              className={decideClassName(filter, "Sales & Trader")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Sales & Trader")}
          >
              S&T
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
        default: case "Investment Banking Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Investment Banking Analyst</p>
                    <p className="companydata-text2"><li>Why do you want to do investment banking? </li></p>
                    <p className="companydata-text2"><li>What are the main valuation methods? How would you rank them?</li></p>
                    <p className="companydata-text2"><li>What are the three financial statements?</li></p>
                    <p className="companydata-text2"><li>What are the 3/4 valuation methods? Can you rank them by highest to lowest predicted value? </li></p>
                    <p className="companydata-text2"><li>What energy vertical would be the best for an LBO </li></p>
                    <p className="companydata-text2"><li>Cash on Cash return scenario in an LBO </li></p>
                    <p className="companydata-text2"><li>What does the WACC look like on a graph? </li></p>
                    <p className="companydata-text2"><li>When would you use an Enterprise Value / Net Income multiple? </li></p>
                    <p className="companydata-text2"><li>What are the three financial statements, and how do they connect?</li></p>
                    <p className="companydata-text2"><li>What makes a merger accretive or dilutive?</li></p>
                    <p className="companydata-text2"><li>If you change beta by a factor of 2, how does that affect the CAPM model? </li></p>
                    <p className="companydata-text2"><li>Tell me about a project where you had to do complex analysis.</li></p>
                    <p className="companydata-text2"><li>Take me through the three financial statements, how to value a company, if depreciation increases by 10%- how does each financial information change? Enterprise value? </li></p>
                    <p className="companydata-text2"><li>What capital structure do you use when calculating WACC in M&A transactions?</li></p>
                    <p className="companydata-text2"><li>Please walk me through how the three financial statements are connected</li></p>
                    <p className="companydata-text2"><li>How would you value a company?</li></p>
                    <p className="companydata-text2"><li>How many ping pong balls do you need to fit in a 747?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Jefferies?</li></p>
                    <p className="companydata-text2"><li>If I were to talk to your previous manager, what would he say about your strengths? </li></p>
                    <p className="companydata-text2"><li>What are your five most significant weaknesses?</li></p>
                    <p className="companydata-text2"><li>Why don't you have a 4.0 GPA?</li></p>
                    <p className="companydata-text2"><li>Tell me how to calculate the WACC.</li></p>
                    <p className="companydata-text2"><li>Could you walk me through a DCF?</li></p>
                    <p className="companydata-text2"><li>What is the Yen trading at?  </li></p>
                    <p className="companydata-text2"><li>If a firm with a lower P/E buys a firm with a high P/E, is it accretive or dilutive? </li></p>
                    <p className="companydata-text2"><li>What function does the (1-t) play in the calculation of the WACC?  </li></p>
                    <p className="companydata-text2"><li>What happens if FCF's are negative in your terminal year? </li></p>
                    <p className="companydata-text2"><li>Could you walk me through a merger model?</li></p>
                    <p className="companydata-text2"><li>How do you value a bank compared to a widget company? </li></p>
                    <p className="companydata-text2"><li>What is a problematic situation that you resolved?</li></p>
                    <p className="companydata-text2"><li>Tell me about your working experiences</li></p>
                    <p className="companydata-text2"><li>Could you walk me through a comparable valuation of a company?</li></p>
                    <p className="companydata-text2"><li>If D&A went up by x%, how would that affect the rest of the financial statements? Please walk me through each line that would be affected</li></p>
                    <p className="companydata-text2"><li>Why do you choose this division?</li></p>
                    <p className="companydata-text2"><li>How would your friends describe your greatest strength and weakness?</li></p>
                    <p className="companydata-text2"><li>Why is the FTSE up?</li></p>
                    <p className="companydata-text2"><li>What do you think you'll be doing day-to-day?</li></p>
                    <p className="companydata-text2"><li>Can you tell me what is in a pitch book?</li></p>
                    <p className="companydata-text2"><li>What if the tractor was bought by issuing debt or equity</li></p>
                    <p className="companydata-text2"><li>What does the WACC look like on a graph?</li></p>
                    <p className="companydata-text2"><li>If you change beta by a factor of 2, how does that affect the CAPM model?</li></p>
                    <p className="companydata-text2"><li>What do you do for fun?</li></p>
                    <p className="companydata-text2"><li>Do you like books or movies? </li></p>
                    <p className="companydata-text2"><li>How do you calculate EBITDA?</li></p>
                </div>
            );
        case "Sales & Trader":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Sales & Trader</p>
                    <p className="companydata-text2"><li>Why did you apply to Jefferies? </li></p>
                    <p className="companydata-text2"><li>What are the current events and your stance on how it will affect markets?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Could you walk me through your resume? </li></p>
                    <p className="companydata-text2"><li>Please walk me through a deal you've worked on. What do you think of it? </li></p>
                    <p className="companydata-text2"><li>Tell me about a project where you had to do complex analysis. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>What is the difference between DDM and DCF? </li></p>
                    <p className="companydata-text2"><li>What are the 3/4 valuation methods? Can you rank them by highest to lowest predicted value? </li></p>
                </div>
            );
    }
};

