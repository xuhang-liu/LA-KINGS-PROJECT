import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function SEBIQ(props){
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
                    <p className="companydata-text2"><li>What data entry skills have you accumulated throughout your career and earlier education?</li></p>
                    <p className="companydata-text2"><li>Do you have any experience working with banking teller software?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you demonstrated you were trustworthy.</li></p>
                    <p className="companydata-text2"><li>Tell me about your experience in the banking industry.</li></p>
                    <p className="companydata-text2"><li>Give an example of a primary job duty you held that required excellent organizational skills. What did you learn from that experience that you'll be able to bring the team here at AB SEB Bank?</li></p>
                    <p className="companydata-text2"><li>If you were having an interaction with a client here at AB SEB Bank and you weren't able to answer their question or solve their problem on your own, how would you handle that situation?</li></p>
                    <p className="companydata-text2"><li>Talk about your experience in mortgage loan closing. How would this experience be beneficial to our team here at AB SEB Bank?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>How would you deal with an irate customer?</li></p>
                    <p className="companydata-text2"><li>Accuracy is of the most important to the customers here at AB SEB Bank. Have you ever had a time where you had to admit to a mistake on the job surrounding accuracy?</li></p>
                    <p className="companydata-text2"><li>If a customer at AB SEB Bank had increased savings as their primary personal financial goal, what steps would you take with them to get them started down the right path?</li></p>
                    <p className="companydata-text2"><li>Out of all of our AB SEB Bank products, which one would you be most likely to use? Why?</li></p>
                    <p className="companydata-text2"><li>As a Personal Banker with AB SEB Bank, why is providing tailored customer service important? How would you make this a priority if hired for this role?</li></p>
                    <p className="companydata-text2"><li>Do you have any experience in handling and working with large amounts of money?</li></p>
                    <p className="companydata-text2"><li>What are your top three strengths? How will you use them to make an impact at AB SEB Bank?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>If you were on the job here at AB SEB Bank and noticed that a change in process or procedure could be beneficial, how would you approach that with your supervisor?</li></p>
                    <p className="companydata-text2"><li>If a customer posed a problem that you could not solve on your own, how would you handle that situation?</li></p>
                    <p className="companydata-text2"><li>Why would our clients here at AB SEB Bank want you to be their financial advisor?</li></p>
                    <p className="companydata-text2"><li>At AB SEB Bank, we pride ourselves on providing the best overall customer experience. Talk about your customer service experience and explain why it will help our clients here.</li></p>
                    <p className="companydata-text2"><li>Tell me about a written project you had to tackle during your career. What skills did you use to ensure that your writing was error-free?</li></p>
                    <p className="companydata-text2"><li>Take a couple of minutes to sell this notepad to me.</li></p>
                    <p className="companydata-text2"><li>In your opinion, what are the benefits of banking with AB SEB Bank?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>In the banking industry, customer service is essential. Give me an example of a time when you provided excellent customer service.</li></p>
                    <p className="companydata-text2"><li>What is one way that you would help provide great customer service in our branch here at AB SEB Bank?</li></p>
                    <p className="companydata-text2"><li>Give me an example of how you keep track of details while engaging in conversation.</li></p>
                    <p className="companydata-text2"><li>Talk about a time you had to work with a difficult team member. How did you handle that situation, and what was the key for you to make things work with them?</li></p>
                    <p className="companydata-text2"><li>If hired for this role with AB SEB Bank, how would you handle a large workload of clients working through a mortgage process?</li></p>
                    <p className="companydata-text2"><li>We want our advising team at AB SEB Bank to be happy and healthy. How do you manage the day to day stress of being a financial advisor?</li></p>
                </div>
            );
    }
};
