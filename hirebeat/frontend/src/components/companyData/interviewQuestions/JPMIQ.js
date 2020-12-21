import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JPMIQ(props){
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
              className={decideClassName(filter, "Sales & Trading Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Sales & Trading Analyst")}
          >
              STA
          </button>
          <button
              className={decideClassName(filter, "Technology Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Technology Analyst")}
          >
              TA
          </button>
          <button
              className={decideClassName(filter, "Wealth Management Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Wealth Management Analyst")}
          >
              WMA
          </button>
          <button
              className={decideClassName(filter, "Teller")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Teller")}
          >
              Teller
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
                    <p className="companydata-text2"><li>What are the methods of valuing a company?</li></p>
                    <p className="companydata-text2"><li>Why do you choose JPMorgan? </li></p>
                    <p className="companydata-text2"><li>Why do you choose Investment Banking?  </li></p>
                    <p className="companydata-text2"><li>What is going on in the current market right now that has interested you and why?  </li></p>
                    <p className="companydata-text2"><li>Tell me about yourself without citing anything from your resume.  </li></p>
                    <p className="companydata-text2"><li>Walk me through a depreciation expense in year 0 and then in year 1 of a $100,000 purchase of a building.</li></p>
                    <p className="companydata-text2"><li>Can you tell me about some leverage ratios you may use to value the company's balance sheet?</li></p>
                    <p className="companydata-text2"><li>Can you walk me through a DCF?</li></p>
                    <p className="companydata-text2"><li>Describe a situation where you encountered a demanding customer.  </li></p>
                </div>
            );
        case "Sales & Trading Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Sales & Trading Analyst</p>
                    <p className="companydata-text2"><li>What is something you're following in the news, and how does it impact our clients?</li></p>
                    <p className="companydata-text2"><li>How would you sell something you are passionate about?</li></p>
                    <p className="companydata-text2"><li>Suppose a lily pad doubles in size every minute. It takes one hour for the lily pad to cover an entire pond. How long did it take for the lily pad to cover only a quarter of the pond?</li></p>
                    <p className="companydata-text2"><li>How would you invest $5K?</li></p>
                    <p className="companydata-text2"><li>Tell me about the recent Europe QE.</li></p>
                    <p className="companydata-text2"><li>How do you think the exchange rate of RMB and the US dollar will be in the long future?</li></p>
                    <p className="companydata-text2"><li>Do you think you are a good leader or a good teammate?</li></p>
                </div>
            );
        case "Technology Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Technology Analyst</p>
                    <p className="companydata-text2"><li>Describe a challenge you faced, and how did you overcome it?.</li></p>
                    <p className="companydata-text2"><li>What's the difference between a parameter passed by value and a parameter passed by reference?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to work on a team project.</li></p>
                    <p className="companydata-text2"><li>What is the difference between an integer and a double?  </li></p>>
                </div>
            );
        case "Wealth Management Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Wealth Management Analyst</p>
                    <p className="companydata-text2"><li>Why do you choose wealth management?</li></p>
                    <p className="companydata-text2"><li>If a goldfish doubles in size every minute, how long will it take to fill the room?</li></p>
                    <p className="companydata-text2"><li>How would you introduce wealth management to a five-year-old boy?</li></p>
                    <p className="companydata-text2"><li>When would you not use a DCF to evaluate a company?</li></p>
                    <p className="companydata-text2"><li>What are the three most important concerns they should address?</li></p>
                    <p className="companydata-text2"><li>How should they allocate their funds/investments?</li></p>
                    <p className="companydata-text2"><li>What are the three most crucial Q's to ask about their situation?</li></p>
                    <p className="companydata-text2"><li>What factors have impacted the financial market in recent months, and how would you respond to these to best help our clients? </li></p>
                    <p className="companydata-text2"><li>What was the Shanghai stock price?</li></p>
                    <p className="companydata-text2"><li>How do you keep track of current events and stay up to date on the market? </li></p>
                    <p className="companydata-text2"><li>What is some recent news that you follow?</li></p>
                    <p className="companydata-text2"><li>What experience on your resume do you most regret?</li></p>
                    <p className="companydata-text2"><li>Your client has been in the jungle for the past year. Can you tell them a 5 minutes summary of what is happening in the world?</li></p>
                    <p className="companydata-text2"><li>Is there a particular stock you have been following?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in finance?  </li></p>
                    <p className="companydata-text2"><li>What is your opinion about the USA's economy now?  </li></p>
                    <p className="companydata-text2"><li>How would you sell me this pen?</li></p>
                    <p className="companydata-text2"><li>What is 7 to the power of 4 (no pen, paper, or calculator was allowed)?</li></p>
                    <p className="companydata-text2"><li>Tell me about a recent news segment</li></p>
                    <p className="companydata-text2"><li>What was your process to test the design and effectiveness of a control?</li></p>
                    <p className="companydata-text2"><li>How do you interact with your business partners?</li></p>
                    <p className="companydata-text2"><li>Provide a step-by-step example of your day, providing specific examples of your interaction with your partners and what improvements have been made through your review</li></p>
                    <p className="companydata-text2"><li>Are deposits an asset or liability for a bank?</li></p>
                    <p className="companydata-text2"><li>What much do you know about auto loans?</li></p>
                    <p className="companydata-text2"><li>What do you know about EAR, BPV, DV01?</li></p>
                    <p className="companydata-text2"><li>In what situations would you use v-lookup in excel?  </li></p>
                </div>
            );
         case "Teller":
            return(
                <div>
                    <p className="companydata-text2"><li>Tell me what you know about our bank.</li></p>
                    <p className="companydata-text2"><li>How would you handle irate customers?  </li></p>
                    <p className="companydata-text2"><li>What would you say to a customer who has 100000 depositing it to a current account to upsell her?</li></p>
                    <p className="companydata-text2"><li>How are you going to balance this part-time job with the rest of your busy schedule? (since I'm a business owner)</li></p>
                    <p className="companydata-text2"><li>How do you describe yourself in one sentence?  </li></p>
                    <p className="companydata-text2"><li>What do you love about Customer Service?  </li></p>
                    <p className="companydata-text2"><li>Why are you a good fit for this position?  </li></p>
                    <p className="companydata-text2"><li>What kind of technology do you use for your daily life or finances?</li></p>
                    <p className="companydata-text2"><li>Share an example of a time that you taught someone about technology. What was the result?  </li></p>
                    <p className="companydata-text2"><li>How can you help customers during the peak-service time or standard service time?  </li></p>
                    <p className="companydata-text2"><li>Share an example of a time you had to follow guidelines or procedures at a previous job. What did you do? </li></p>
                    <p className="companydata-text2"><li>What is your experience with handling cash?  </li></p>
                    <p className="companydata-text2"><li>Why are you willing to leave the job you have now for us?  </li></p>
                    <p className="companydata-text2"><li>Name a time where you went beyond to provide a customer and exceptional outcome. What did you do? </li></p>
                    <p className="companydata-text2"><li>What would you consider to be your weakness?  </li></p>
                    <p className="companydata-text2"><li>What regulations do you know of as they pertain to tellers or commercial banks? </li></p>
                    <p className="companydata-text2"><li>Think of a time you helped a friend/relative learn new technology and how it benefited them.</li></p>
                    <p className="companydata-text2"><li>Are you flexible with our hours? </li></p>
                    <p className="companydata-text2"><li>Tell me about your background.</li></p>
                    <p className="companydata-text2"><li>Do you know about Chase's new technology?</li></p>
                    <p className="companydata-text2"><li>If a customer is talking with you and another customer comes up to you and asks you a question, how do you respond. </li></p>
                    <p className="companydata-text2"><li>As a teller, how would bring and help bring sales or new accounts to the bankers?  </li></p>
                    <p className="companydata-text2"><li>What experience do you have that you believe will help you in this position?</li></p>
                </div>
            );
    }
};
