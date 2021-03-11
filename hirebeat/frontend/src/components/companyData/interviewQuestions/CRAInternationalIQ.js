import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function CRAInternationalIQ(props){
    const [filter, setFilter] = useState("Analyst");
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
              className={decideClassName(filter, "Consultant")}
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
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
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Explain your educational background and work experience.</li></p>
                    <p className="companydata-text2"><li>What quantitative projects have you worked on?</li></p>
                    <p className="companydata-text2"><li>Tell me about an experience when you deal with data.</li></p>
                    <p className="companydata-text2"><li>What is your approach to working in teams?</li></p>
                    <p className="companydata-text2"><li>Talk me through a time when you solved a problem.</li></p>
                    <p className="companydata-text2"><li>How did your background help you?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in 5 years?</li></p>
                    <p className="companydata-text2"><li>What was the most exciting part about the research project you had uploaded previously?</li></p>
                    <p className="companydata-text2"><li>How should you define this market?</li></p>
                    <p className="companydata-text2"><li>What were some shortcomings of your research?</li></p>
                    <p className="companydata-text2"><li>Give me an example of when you had a problem in a team and had to overcome it.</li></p>
                    <p className="companydata-text2"><li>Why are you interested in consulting?</li></p>
                    <p className="companydata-text2"><li>What has been your programming experience?</li></p>
                    <p className="companydata-text2"><li>What is an economic concept that you live by?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work here and for this particular practice?</li></p>
                    <p className="companydata-text2"><li>How would you value a company?</li></p>
                    <p className="companydata-text2"><li>Tell me a time when you and a co-worker disagreed.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you asked for help and then applied it to another experience</li></p>
                    <p className="companydata-text2"><li>Tell me about a time when you dealt with uncertainty/ambiguity.</li></p>
                </div>
            );
        case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Explain a time where you had submitted something incorrectly.</li></p>
                    <p className="companydata-text2"><li>What's your ideal working environment?</li></p>
                    <p className="companydata-text2"><li>How do you think the cement industry is structured? And does this influence prices?</li></p>
                    <p className="companydata-text2"><li>How comfortable are you with multi-tasking?</li></p>
                    <p className="companydata-text2"><li>Have you ever done a pricing and access project?</li></p>
                    <p className="companydata-text2"><li>How would you calculate damages owed to a pharmaceutical company whose drug patent was infringed upon by a competing product?</li></p>
                    <p className="companydata-text2"><li>How good are you at delivering bad news?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>How would you estimate cartel damages?</li></p>
                    <p className="companydata-text2"><li>Assume that two firms decide not to sell in each other’s state: is this anti-competitive? How would you defend them?</li></p>
                    <p className="companydata-text2"><li>What do you see as our firm's primary strategic weaknesses?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a consultant?</li></p>
                </div>
            );
        case "Intern":
            return(
                <div>
                    <p className="companydata-text2"><li>What was a time when someone else made a mistake where I had to take responsibility for it?</li></p>
                    <p className="companydata-text2"><li>What are your three most significant strengths?</li></p>
                    <p className="companydata-text2"><li>Why are you interested in Charles River Associates?</li></p>
                    <p className="companydata-text2"><li>Who is your role model?</li></p>
                    <p className="companydata-text2"><li>What would be the impact of a merger between two supermarkets?</li></p>
                    <p className="companydata-text2"><li>Tell me about your experience working with an extensive dataset.</li></p>
                    <p className="companydata-text2"><li>Imagine you own a coffee place with an automatic machine; there is nearly no cost to refill the engine and no labor cost. How would you price the coffee?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you demonstrated teamwork</li></p>
                    <p className="companydata-text2"><li>Tell me something about yourself that isn't on your CV?</li></p>
                </div>
            );
    }
};
