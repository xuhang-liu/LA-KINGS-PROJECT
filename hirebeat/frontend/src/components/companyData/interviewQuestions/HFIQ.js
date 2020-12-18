import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function HFIQ(props){
    const [filter, setFilter] = useState("General Questions");
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
              className={decideClassName(filter, "General Questions")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("General Questions")}
          >
              General
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "General Questions":
            return(
                <div>
                    <p className="companydata-text2">Job Title: General Questions</p>
                    <p className="companydata-text2"><li>What is your greatest strength?</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you struggled. How did you handle it?</li></p>
                    <p className="companydata-text2"><li>Tell me of a time where you had to tell someone "no." What did you do?</li></p>
                    <p className="companydata-text2"><li>What made you interested in working at a bank?</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in five years?</li></p>
                    <p className="companydata-text2"><li>Why did you quit your last job?</li></p>
                    <p className="companydata-text2"><li>Why should I hire you?</li></p>
                    <p className="companydata-text2"><li>Why do you apply for Hanmi Bank?</li></p>
                </div>
            );
    }
};
