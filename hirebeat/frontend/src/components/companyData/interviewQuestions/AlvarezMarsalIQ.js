import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AlvarezMarsalIQ(props){
    const [filter, setFilter] = useState("Consultant");
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
        default: case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your experience with litigation?</li></p>
                    <p className="companydata-text2"><li>Walk me through your CV.</li></p>
                    <p className="companydata-text2"><li>What is your ideal consulting engagement?</li></p>
                    <p className="companydata-text2"><li>Why did you choose to consult?</li></p>
                    <p className="companydata-text2"><li>Why should we hire you?</li></p>
                    <p className="companydata-text2"><li>Why did you choose A&M?</li></p>
                    <p className="companydata-text2"><li>What would you do if the client disagreed with your recommendation?</li></p>
                    <p className="companydata-text2"><li>How would you feel about being the stupidest person in the room?</li></p>
                    <p className="companydata-text2"><li>Tell me about your experience with various recruiters so far.</li></p>
                    <p className="companydata-text2"><li>Tell me how you would create a resource utilization tracking dashboard.</li></p>
                    <p className="companydata-text2"><li>How will your previous experience help you with consulting?</li></p>
                    <p className="companydata-text2"><li>Are you sure your long-term interests are in the field of business consulting?</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>What is the difference between Enterprise Value and Equity Value?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work in A &M?</li></p>
                    <p className="companydata-text2"><li>Walk me through your resume.</li></p>
                    <p className="companydata-text2"><li>Why are you interested in this job?</li></p>
                    <p className="companydata-text2"><li>What's your accounting background?</li></p>
                    <p className="companydata-text2"><li>Can you use excel and word?</li></p>
                    <p className="companydata-text2"><li>Are you good at research?</li></p>
                    <p className="companydata-text2"><li>Do you watch the news and keep up with what's happening?</li></p>
                    <p className="companydata-text2"><li>How did you hear about this opportunity?</li></p>
                    <p className="companydata-text2"><li>Why this particular role?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself when you’re older?</li></p>
                    <p className="companydata-text2"><li>The most difficult decision you had to make in your life.</li></p>
                    <p className="companydata-text2"><li>What other jobs have you applied for?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>How will you do the data cleaning?</li></p>
                    <p className="companydata-text2"><li>Why A&M?</li></p>
                    <p className="companydata-text2"><li>Why this role?</li></p>
                    <p className="companydata-text2"><li>What are you looking for?</li></p>
                    <p className="companydata-text2"><li>What do you use as a discount rate?</li></p>
                    <p className="companydata-text2"><li>Walk me through a DCF.</li></p>
                    <p className="companydata-text2"><li>What is the biggest challenge you faced in your career, and how did you overcome it? Give specific details and how you think this will relate to your job here?</li></p>
                    <p className="companydata-text2"><li>Was there a time that you were not prepared but were asked to take on some responsibilities?</li></p>
                    <p className="companydata-text2"><li>What was your most proud accomplishment?</li></p>
                    <p className="companydata-text2"><li>What was your biggest failure?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>Why did you choose this firm?</li></p>
                    <p className="companydata-text2"><li>Why did you choose this position?</li></p>
                    <p className="companydata-text2"><li>Talk about your experience.</li></p>
                    <p className="companydata-text2"><li>What do you know about A&M and the valuations team?</li></p>
                    <p className="companydata-text2"><li>Why did you choose Accounting?</li></p>
                    <p className="companydata-text2"><li>What interests you about a career in taxation?</li></p>
                    <p className="companydata-text2"><li>Why do you want to intern at Alvarez and Marsal?</li></p>
                    <p className="companydata-text2"><li>Tell me about your experience relevant to this position.</li></p>
                    <p className="companydata-text2"><li>Why did you choose to pursue accounting?</li></p>
                    <p className="companydata-text2"><li>What are your weaknesses?</li></p>
                    <p className="companydata-text2"><li>Describe a time when you had to work on a team and encountered challenges.</li></p>
                </div>
            );
    }
};
