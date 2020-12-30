import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AmazonIQ(props){
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
                    <p className="companydata-text2"><li>What would you consider your technical specialty?</li></p>
                    <p className="companydata-text2"><li>We seek to hire highly ambitious people. Where would you like your career with Amazon to take you?</li></p>
                    <p className="companydata-text2"><li>This role with Amazon is highly technical. What is your understanding of this position and the responsibilities that come with it?</li></p>
                    <p className="companydata-text2"><li>In your opinion, what has been the biggest advancement in video streaming technology this past year?</li></p>
                    <p className="companydata-text2"><li>At Amazon, we take privacy and confidentiality very seriously. Are you willing to sign a non-disclosure agreement, if hired?</li></p>
                    <p className="companydata-text2"><li>Tell me about your greatest work-related accomplishment.</li></p>
                    <p className="companydata-text2"><li>Working at Amazon, you will experience changes on a regular basis. When have you had to change a major component of your project due to new information being presented?</li></p>
                </div>
            );
        case "Q2":
            return(
                <div>
                    <p className="companydata-text2"><li>We encourage innovation at Amazon. What does innovation mean to you?</li></p>
                    <p className="companydata-text2"><li>Have you ever broken a confidentiality agreement?</li></p>
                    <p className="companydata-text2"><li>We want to hire people at Amazon who have the desire to lead others. How many people did you supervise in your last position?</li></p>
                    <p className="companydata-text2"><li>Amazon is known for its exceptional customer service. What does excellent customer service mean to you?</li></p>
                    <p className="companydata-text2"><li>Amazon is a company of pioneers. In which ways are you a pioneer?</li></p>
                    <p className="companydata-text2"><li>Do you know anyone who works for Amazon?</li></p>
                    <p className="companydata-text2"><li>Amazon believes in a diverse perspective. When have you worked with a diverse group of people?</li></p>
                </div>
            );
        case "Q3":
            return(
                <div>
                    <p className="companydata-text2"><li>Amazon has over 300 million active customers. How do you think we can attract an even larger customer base?</li></p>
                    <p className="companydata-text2"><li>Have you ever had to contact Amazon customer support? If so, describe your experience.</li></p>
                    <p className="companydata-text2"><li>Amazon has 14 leadership principles. Name me 3 of them and how you embody those.</li></p>
                    <p className="companydata-text2"><li>How would you rate your performance in this interview so far?</li></p>
                    <p className="companydata-text2"><li>What qualities do you feel make a leader successful?</li></p>
                    <p className="companydata-text2"><li>Tell me about the most interesting project you have worked on this year and the biggest thing you learned from it.</li></p>
                    <p className="companydata-text2"><li>We consider research to be the backbone of what we do at Amazon. Do you think it's important to conduct research before beginning a project or would you rather jump right in?</li></p>
                </div>
            );
        case "Q4":
            return(
                <div>
                    <p className="companydata-text2"><li>Culture fit is important to us at Amazon. How would you describe your personality?</li></p>
                    <p className="companydata-text2"><li>At Amazon, we seek to hire leaders. Tell me about a time when you took the initiative to improve work-related procedures.</li></p>
                    <p className="companydata-text2"><li>What is the last thing you purchased on Amazon?</li></p>
                    <p className="companydata-text2"><li>Name 2 benefits of having an Amazon Prime account. Do you have a Prime account?</li></p>
                    <p className="companydata-text2"><li>What is Amazon's company mission, and what does it mean to you?</li></p>
                    <p className="companydata-text2"><li>What was one question you didn't want me to ask today?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time that you have helped a co-worker accomplish an important goal.</li></p>
                    <p className="companydata-text2"><li>Can you talk to me about your GPA during undergraduate/graduate school?</li></p>
                    <p className="companydata-text2"><li>What questions do you have for me?</li></p>
                </div>
            );
    }
};
