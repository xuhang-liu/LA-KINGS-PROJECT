import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BMIQ(props){
    const [filter, setFilter] = useState("Operations Executive Interview");
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
      <div style={{marginBottom: "5px"}} className="container">
          <div className="row">
              <button
                  className={decideClassName(filter, "Operations Executive Interview")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Operations Executive Interview")}
              >
                  OEI
              </button>
              <button
                  className={decideClassName(filter, "Analyst")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Analyst")}
              >
                  Analyst
              </button>
              <button
                  className={decideClassName(filter, "Associate")}
                  style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Associate")}
              >
                  Associate
              </button>
              <button
                  className={decideClassName(filter, "Business Analyst")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Business Analyst")}
              >
                  BA
              </button>
          </div>
          <div className="row">
              <button
                  className={decideClassName(filter, "Summer Analyst Program")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Summer Analyst Program")}
              >
                  SAP
              </button>
              <button
                  className={decideClassName(filter, "Operations Analyst")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Operations Analyst")}
              >
                  OA
              </button>
              <button
                  className={decideClassName(filter, "Software Developer")}
                  style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
                  onClick={() => setFilter("Software Developer")}
              >
                  SDE
              </button>
          </div>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Operations Executive Interview":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Operations Executive Interview</p>
                    <p className="companydata-text2"><li>Are you comfortable with rotational shifts?</li></p>
                    <p className="companydata-text2"><li>What are mutual funds?</li></p>
                    <p className="companydata-text2"><li>Can you explain the difference between investing in Mutual funds & equity shares?</li></p>
                    <p className="companydata-text2"><li>What do you know about Investment Banking? What services are provided by an investment bank?  </li></p>
                    <p className="companydata-text2"><li>Tell me an incident where you failed, and how did you overcome the situation?</li></p>
                    <p className="companydata-text2"><li>Apart from your academic interests, what are your hobbies?</li></p>
                    <p className="companydata-text2"><li>Can you explain asset servicing and asset management? </li></p>
                    <p className="companydata-text2"><li>Why do you want to relocate from your current location?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Can you tell me a little bit about a project or deliverable that had less than favorable results, and how did you handle it?  </li></p>
                    <p className="companydata-text2"><li>What is a recent team project that you've worked on in school?</li></p>
                    <p className="companydata-text2"><li>Give me an example of how you manage offshore work and track it.</li></p>
                    <p className="companydata-text2"><li>How do you communicate with your customer if they ask tough requirements?  </li></p>
                    <p className="companydata-text2"><li>Are you ready to work in a contractual role? What makes you think that you’re ready?</li></p>
                    <p className="companydata-text2"><li>What makes you most excited about this program?  </li></p>
                    <p className="companydata-text2"><li>Before doing any data analysis, what aspects of data would you look to?</li></p>
                    <p className="companydata-text2"><li>What would you do to improve the data quality?</li></p>
                    <p className="companydata-text2"><li>Tell me about your former experience in change management.</li></p>
                    <p className="companydata-text2"><li>Do you have any experience with internal systems? If so, please give an example. </li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Describe your flaws. </li></p>
                    <p className="companydata-text2"><li>What would you do in a situation when you disagree with your boss?  </li></p>
                    <p className="companydata-text2"><li>What skills can you transfer from your current position that will allow you to succeed in this role?  </li></p>
                    <p className="companydata-text2"><li>What can you tell us about our company, history-wise?  </li></p>
                    <p className="companydata-text2"><li>What is a rolling settlement?  </li></p>
                    <p className="companydata-text2"><li>How many times can one buy and sell within a settlement cycle?</li></p>
                    <p className="companydata-text2"><li>What settlement are details required on the delivery instruction slip?</li></p>
                    <p className="companydata-text2"><li>What is Depository? Who is a Depository Participant?</li></p>
                    <p className="companydata-text2"><li>What are the benefits of participation in a depository?</li></p>
                    <p className="companydata-text2"><li>What is Insider Trading?</li></p>
                </div>
            );
        case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>Before doing any data analysis, what aspects of data would you look to?</li></p>
                    <p className="companydata-text2"><li>How to improve the data quality?</li></p>
                    <p className="companydata-text2"><li>What makes you an ideal candidate for this role?</li></p>
                    <p className="companydata-text2"><li>What makes you most excited about the program?</li></p>
                    <p className="companydata-text2"><li>Why didn't the last place you applied to hire you?</li></p>
                </div>
            );
        case "Summer Analyst Program":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Summer Analyst Program</p>
                    <p className="companydata-text2"><li>Why BNY Mellon? Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>What technical skills do you have?</li></p>
                    <p className="companydata-text2"><li>Please tell me a time when you had difficulty working in a group.</li></p>
                    <p className="companydata-text2"><li>What did you do to overcome a failure?</li></p>
                    <p className="companydata-text2"><li>v.Please tell me about a time you didn't know how to do something.</li></p>
                    <p className="companydata-text2"><li>How would you explain your major to someone not in your field?</li></p>
                </div>
            );
        case "Operations Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Operations Analyst</p>
                    <p className="companydata-text2"><li>What motivates you to wake up every morning?</li></p>
                    <p className="companydata-text2"><li>Describe a project you completed from start to finish</li></p>
                    <p className="companydata-text2"><li>Please tell me about a stretch goal you have for yourself, and how you accomplished it/plan on working towards it?</li></p>
                    <p className="companydata-text2"><li>Please tell me a time you had a crisis at work.</li></p>
                </div>
            );
        case "Software Developer":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Developer</p>
                    <p className="companydata-text2"><li>Stock BUY and Sell, Detect Loop in a linked list.</li></p>
                    <p className="companydata-text2"><li>Find a loop in a link list.</li></p>
                    <p className="companydata-text2"><li>When would you use ArrayList and when LinkedList?</li></p>
                    <p className="companydata-text2"><li>i.Rotate an array in-place by n places; sort array using any algorithm; binary search on the same array; design patterns and collections; discussion about projects in your previous company.</li></p>
                    <p className="companydata-text2"><li>Convert a list to Map Based on Gender in EMP class.</li></p>
                    <p className="companydata-text2"><li>Find the highest salary from EMP class.</li></p>
                </div>
            );
    }
};
