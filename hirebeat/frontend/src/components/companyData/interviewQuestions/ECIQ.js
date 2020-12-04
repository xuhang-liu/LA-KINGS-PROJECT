import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function ECIQ(props){
    const [filter, setFilter] = useState("swe");
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
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>Why do you want to do investment banking?</li></p>
                    <p className="companydata-text2"><li>Can you explain the difference between a maintenance covenant and an incurrence covenant?</li></p>
                    <p className="companydata-text2"><li>What is the beta of a company that gambles on roulette daily as its only operational activity?</li></p>
                    <p className="companydata-text2"><li>How do you value a tree that generates $100 the first year, $200 the second, and so on?</li></p>
                    <p className="companydata-text2"><li>Why do you want to work at Evercore as opposed to a bulge bracket?</li></p>
                    <p className="companydata-text2"><li>What do you know about Evercore?</li></p>
                    <p className="companydata-text2"><li>Can you describe some recent Evercore deals?</li></p>
                    <p className="companydata-text2"><li>How would you calculate the number of taxis in London?</li></p>
                    <p className="companydata-text2"><li>What valuation methodology gives you the highest valuation?</li></p>
                    <p className="companydata-text2"><li>What is the Capital Asset Model? What happens when this happens?</li></p>
                    <p className="companydata-text2"><li>Have you ever had to carry out unpopular policies or decisions?</li></p>
                    <p className="companydata-text2"><li>Can you tell me about some recent mergers and acquisitions that have interested you?</li></p>
                </div>
            );
    }
};