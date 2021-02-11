import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function BoozeAllenHamiltonIQ(props){
    const [filter, setFilter] = useState("Consulting");
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
              className={decideClassName(filter, "Consulting")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consulting")}
          >
              Consulting
          </button>
          <button
              className={decideClassName(filter, "Data Scientist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Data Scientist")}
          >
              DS
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Consulting":
            return(
                <div>
                    <p className="companydata-text2"><li>Why are you wanting to join us - be specific?</li></p>
                    <p className="companydata-text2"><li>Who are some of your clients?</li></p>
                    <p className="companydata-text2"><li>If you and a team member didn’t agree with something regarding the project, how would you address this situation?</li></p>
                    <p className="companydata-text2"><li>Why do you want to be a consultant?</li></p>
                    <p className="companydata-text2"><li>Tell me about your favorite personal project or academic-related project.</li></p>
                    <p className="companydata-text2"><li>How would you summarize your case findings in 1 minute</li></p>
                    <p className="companydata-text2"><li>What motivates you to become a consultant?</li></p>
                </div>
            );
        case "Data Scientist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Data Scientist</p>
                    <p className="companydata-text2"><li>Tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>Tell me about your prior experience working with data. </li></p>
                    <p className="companydata-text2"><li>Why are you interested in BAH?</li></p>
                    <p className="companydata-text2"><li>Do you have experience working with unstructured data?</li></p>
                    <p className="companydata-text2"><li>Any questions for me?</li></p>
                    <p className="companydata-text2"><li>What data science methods have you used in your work?</li></p>
                    <p className="companydata-text2"><li>Why did you choose PCA over other types of latent models?</li></p>
                    <p className="companydata-text2"><li>What are other techniques to reduce # of variables in your model?</li></p>
                    <p className="companydata-text2"><li>Write a function where if the input is an even number, then it squares it. If it's odd, then it cubes it.</li></p>
                    <p className="companydata-text2"><li>Why do you want to work for Booz Allen Hamilton?</li></p>
                    <p className="companydata-text2"><li>Describe your previous experiences or projects with machine learning.</li></p>
                    <p className="companydata-text2"><li>What was a surprising result from one of your projects?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had to persuade someone.</li></p>
                    <p className="companydata-text2"><li>Do you have any experience with pricing contracts?</li></p>
                    <p className="companydata-text2"><li>How interested are you in data science compared to X discipline on your resume?</li></p>
                </div>
            );
    }
};
