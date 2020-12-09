import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function MDIQ(props){
    const [filter, setFilter] = useState("Financial Data Analyst");
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
              className={decideClassName(filter, "Financial Data Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial Data Analyst")}
          >
              FDA
          </button>
          <button
              className={decideClassName(filter, "Associate Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate Analyst")}
          >
              AA
          </button>
          <button
              className={decideClassName(filter, "Associate Analyst III")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate Analyst III")}
          >
              AA III
          </button>
          <button
              className={decideClassName(filter, "GQ")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("GQ")}
          >
              GQ
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Financial Data Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial Data Analyst</p>
                    <p className="companydata-text2"><li>Can you walk me through the Cash Flow Statement? </li></p>
                    <p className="companydata-text2"><li>What is the difference between the direct and indirect method? </li></p>
                    <p className="companydata-text2"><li>What is the bottom line of the CFS? </li></p>
                    <p className="companydata-text2"><li>What are the accounting standards?  </li></p>
                    <p className="companydata-text2"><li>What is the accounting equation? </li></p>
                    <p className="companydata-text2"><li>If you have two companies, one uses LIFO and the other FIFO, which of the two has the most income and which has the most expenses?  </li></p>
                    <p className="companydata-text2"><li>How does a convertible bond that turns into equity affect the three financial statements?  </li></p>
                    <p className="companydata-text2"><li>What's the difference between an operating lease and a financial lease? </li></p>
                    <p className="companydata-text2"><li>What is your past experience, and how it translates to this role?</li></p>
                </div>
            );
        case "Associate Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Associate Analyst</p>
                    <p className="companydata-text2"><li>What are the three financial statements, and how are they related? </li></p>
                    <p className="companydata-text2"><li>Tell me about a time you faced adversity and overcame it. </li></p>
                    <p className="companydata-text2"><li>How would a union strike affect the underlying rating of an issuer?  </li></p>
                    <p className="companydata-text2"><li>Why do you want to work at a rating agency, specifically Moody's?  </li></p>
                    <p className="companydata-text2"><li>Tell me about your background.</li></p>
                    <p className="companydata-text2"><li>Give me some specific details that you did in your previous job</li></p>
                    <p className="companydata-text2"><li>Why choosing us instead of academia? </li></p>
                    <p className="companydata-text2"><li>Are you flexible and able to work long hours and on weekends?</li></p>
                    <p className="companydata-text2"><li>How would you assess the credit risk of a golf course?  </li></p>
                    <p className="companydata-text2"><li>Tell me how you get to Cash Flow from Operations departing from Net Income in a Cash Flow statement</li></p>
                    <p className="companydata-text2"><li>Why did you study for your MS.c. Finance degree?  </li></p>
                    <p className="companydata-text2"><li>What do you know about Moody’s CFG?  </li></p>
                    <p className="companydata-text2"><li>Tell me about your past positions and how those skills pertain to the job you are interviewing for. </li></p>
                    <p className="companydata-text2"><li>Why should we hire you instead of the other candidates?  </li></p>
                    <p className="companydata-text2"><li>Tell me about your credit training experience at JP Morgan.</li></p>
                    <p className="companydata-text2"><li>Why are you suitable for your job?</li></p>
                    <p className="companydata-text2"><li>What is net interest income?</li></p>
                    <p className="companydata-text2"><li>How would you analyze a bank?  </li></p>
                    <p className="companydata-text2"><li>What is the biggest concern in European banking today?  </li></p>
                    <p className="companydata-text2"><li>What would stand out in an income statement for a bank?   </li></p>
                    <p className="companydata-text2"><li>How do you deal with deadlines?</li></p>
                    <p className="companydata-text2"><li>Give us an example of a time when your ideas were criticized.</li></p>
                    <p className="companydata-text2"><li>Do you know how a rating committee is organized?  </li></p>
                    <p className="companydata-text2"><li>What are the key qualitative and quantitative factors that you would use to analyze a company's financial performance?  </li></p>
                    <p className="companydata-text2"><li>What do you do when you miss deadlines? </li></p>
                    <p className="companydata-text2"><li>How do you meet deadlines? How do you prioritize assignments? (Give an example)</li></p>
                </div>
            );
        case "Associate Analyst III":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Associate Analyst III</p>
                    <p className="companydata-text2"><li>What are some of the risks of funding through equity and funding through debt?</li></p>
                    <p className="companydata-text2"><li>How would you approach doing research/rating?</li></p>
                    <p className="companydata-text2"><li>What has a higher interest in rates-used cars or older cars?</li></p>
                    <p className="companydata-text2"><li>What do you know about (insert industry group you're interviewing for)?</li></p>
                    <p className="companydata-text2"><li>Tell me about your biggest accomplishment</li></p>
                    <p className="companydata-text2"><li>Describe the line items on an income statement.</li></p>
                    <p className="companydata-text2"><li>What is the difference between free cash flow and EBITDA? </li></p>
                    <p className="companydata-text2"><li>How do you derive an interest rate?</li></p>
                    <p className="companydata-text2"><li>Tell me where it is profitable to exercise a call option</li></p>
                    <p className="companydata-text2"><li>How are your writing skills and research skills?</li></p>

                    <p className="companydata-text2"><li>How would you go about researching a company?</li></p>
                    <p className="companydata-text2"><li>What's an example of something you have written in the past?</li></p>
                    <p className="companydata-text2"><li>You're the lead analyst for a company, and you're in a meeting with the CFO and CEO. You can only ask 3 questions. What would you ask?  </li></p>
                    <p className="companydata-text2"><li>What would you bring to Moody's? </li></p>
                    <p className="companydata-text2"><li>What happens to LTV when home prices increase?</li></p>
                    <p className="companydata-text2"><li>What skills can you bring to the job? What do you want to learn?  </li></p>
                    <p className="companydata-text2"><li>What do you know about credit research? </li></p>
                    <p className="companydata-text2"><li>Have you analyzed high yield debt before? Give me an example.  </li></p>
                    <p className="companydata-text2"><li>What are some of the factors that you would want to consider in rating security?  </li></p>
                    <p className="companydata-text2"><li>Where do you get your assumptions from for DCF? Describe the process </li></p>
                    <p className="companydata-text2"><li>What is your favorite company? After you answer, they ask you, "If you were CEO of said company, what would be one thing you would do to improve it. </li></p>
                    <p className="companydata-text2"><li>What important components should an airline company include in their CF?  </li></p>
                    <p className="companydata-text2"><li>Why are you pursuing a different employment opportunity?  </li></p>
                    <p className="companydata-text2"><li>Please describe how you would assess credit risks associated with a structured product</li></p>
                </div>
            );
        case "GQ":
            return(
                <div>
                    <p className="companydata-text2">Job Title: General Questions</p>
                    <p className="companydata-text2"><li>What do you see as the challenge for you in this position?  </li></p>
                    <p className="companydata-text2"><li>Tell me about an accomplishment.</li></p>
                    <p className="companydata-text2"><li>How did you hear about Moody's?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you faced adversity, and how did you overcome it?</li></p>
                    <p className="companydata-text2"><li>What do you know about Moody's work?</li></p>
                </div>
            );
    }
};