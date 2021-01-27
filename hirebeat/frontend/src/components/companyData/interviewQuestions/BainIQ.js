import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BainIQ(props){
    const [filter, setFilter] = useState("Manager Assistant");
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
              className={decideClassName(filter, "Manager Assistant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Manager Assistant")}
          >
              MA
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
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
        default: case "Manager Assistant":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Manager Assistant</p>
                    <p className="companydata-text2"><li>How would you handle a difficult travel situation?</li></p>
                    <p className="companydata-text2"><li>Describe to me a time when you had to manage a complicated travel arrangement.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you walked out of an interview because they had no clue what to ask or what they were doing.</li></p>
                    <p className="companydata-text2"><li>When was the time you had to improvise? </li></p>
                    <p className="companydata-text2"><li>What do you like to do for fun?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to work at Bain?</li></p>
                    <p className="companydata-text2"><li>What questions do you have?</li></p>
                    <p className="companydata-text2"><li>Tell me about yourself and an experience that impacted you.</li></p>
                    <p className="companydata-text2"><li>Why do you want to pursue a career in consulting?</li></p>
                    <p className="companydata-text2"><li>Describe a time you overcame a challenge.</li></p>
                    <p className="companydata-text2"><li>What are the most important factors when considering your summer plans, and how does Bain fit into those?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in Management Consulting? </li></p>

                    <p className="companydata-text2"><li>Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>Tell me about the previous experience working with ambiguity.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in this location?</li></p>
                    <p className="companydata-text2"><li>What would you do if a piece of information your manager wants you to look for is not available?</li></p>
                    <p className="companydata-text2"><li>What are you most proud of?</li></p>
                    <p className="companydata-text2"><li>How would you go about scaling a baby clothing company?</li></p>
                    <p className="companydata-text2"><li>What's the market size?</li></p>
                    <p className="companydata-text2"><li>Can you talk more about what you did in this position?</li></p>
                    <p className="companydata-text2"><li>What do you like to do in your free time?</li></p>
                    <p className="companydata-text2"><li>What made you apply to Bain?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Think of a moment where you failed and how did you handle it.</li></p>
                    <p className="companydata-text2"><li>What is the size of the market for athletic shoes in the US? </li></p>
                    <p className="companydata-text2"><li>Why are you interested in a career in consulting?</li></p>
                    <p className="companydata-text2"><li>How many new tires are bought each year?</li></p>
                    <p className="companydata-text2"><li>How to determine if a Dunkin Donuts store should open a new location?</li></p>
                    <p className="companydata-text2"><li>How much salsa is consumed in the US in a given year?</li></p>
                    <p className="companydata-text2"><li>Calculate how much oil was being used during the pandemic.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you dealt with a difficult team member.</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>How to deal with high pressure and unexpected situations?</li></p>
                    <p className="companydata-text2"><li>Why is the profit of a retail bank falling?</li></p>
                    <p className="companydata-text2"><li>How would you train a linear regression model?</li></p>
                    <p className="companydata-text2"><li>How can you determine which features are useful in a model?</li></p>
                    <p className="companydata-text2"><li>Which technology area is most interesting to you?</li></p>
                </div>
            );
    }
};
