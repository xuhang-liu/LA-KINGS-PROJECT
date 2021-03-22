import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function SunLifeFinancialIQ(props){
    const [filter, setFilter] = useState("Financial advisor");
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
              className={decideClassName(filter, "Financial advisor")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Financial advisor")}
          >
              FA
          </button>
          <button
              className={decideClassName(filter, "Business analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business analyst")}
          >
              BA
          </button>
          <button
              className={decideClassName(filter, "Actuarial analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Actuarial analyst")}
          >
              AA
          </button>
          <button
              className={decideClassName(filter, "Rotational leadership development program")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Rotational leadership development program")}
          >
              RLD
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Financial advisor":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Financial advisor</p>
                    <p className="companydata-text2"><li>Tell me about the company. Why do you want the position?</li></p>
                    <p className="companydata-text2"><li>Do you like unlimited earning potential?</li></p>
                    <p className="companydata-text2"><li>Would you prefer a job with a fixed but average income or an appointment with a floating payment that has no ceiling and floors?</li></p>
                    <p className="companydata-text2"><li>How do you perceive a career in sales?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a financial adviser?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself after ten years?</li></p>
                    <p className="companydata-text2"><li>Tell me about a situation where you had to make a hard decision.</li></p>
                    <p className="companydata-text2"><li>What are three of your worst qualities? What are three of your best rates?</li></p>
                    <p className="companydata-text2"><li>How do you describe yourself?</li></p>
                </div>
            );
        case "Business analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business analyst</p>
                    <p className="companydata-text2"><li>What experience do you have with agile projects?</li></p>
                    <p className="companydata-text2"><li>What's the biggest lie you tell?</li></p>
                    <p className="companydata-text2"><li>How would you go about counting how many donuts were sold in your city today?</li></p>
                    <p className="companydata-text2"><li>Do you operate better in a structured or unstructured environment?</li></p>
                    <p className="companydata-text2"><li>Tell us a time that you led a team and what the results were.</li></p>
                    <p className="companydata-text2"><li>What is one thing you're nervous about for this job or an area that you think will be a challenge?</li></p>
                    <p className="companydata-text2"><li>Tell me why you are a good candidate for this job.</li></p>
                </div>
            );
        case "Actuarial analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Actuarial analyst</p>
                    <p className="companydata-text2"><li>Explain an actuarial concept, whether from work or school.</li></p>
                    <p className="companydata-text2"><li>What is an actuarial reserve?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you worked as a team to complete a project</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you stand out as a leader even though you are not assigned.</li></p>
                    <p className="companydata-text2"><li>Describe a challenging group situation. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you had to approach a familiar problem differently.</li></p>
                    <p className="companydata-text2"><li>What are your extracurricular activities in university?</li></p>
                    <p className="companydata-text2"><li>What is essential to know as an actuary?</li></p>
                    <p className="companydata-text2"><li>How do you manage your time between school, work, and extracurricular activities?</li></p>
                </div>
            );
        case "Rotational leadership development program":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Rotational leadership development program</p>
                    <p className="companydata-text2"><li>When was a time that you went above and before for a client or team?</li></p>
                    <p className="companydata-text2"><li>Name a time when you made a difference for a team.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you faced a change in responsibilities and how you handled it.?</li></p>
                    <p className="companydata-text2"><li>Tell us about a time you took a risk</li></p>
                    <p className="companydata-text2"><li>What does diversity mean to you?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you failed leading a team.</li></p>
                </div>
            );
    }
};
