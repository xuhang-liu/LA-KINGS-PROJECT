import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function JLLPIQ(props){
    const [filter, setFilter] = useState("Accounts Payable Specialist");
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
              className={decideClassName(filter, "Accounts Payable Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Accounts Payable Specialist")}
          >
              APS
          </button>
          <button
              className={decideClassName(filter, "Capital Market Transaction")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Capital Market Transaction")}
          >
              CMT
          </button>
          <button
              className={decideClassName(filter, "Procurement")}
              style = {{width: "120px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Procurement")}
          >
              Procurement
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "100px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Accounts Payable Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Accounts Payable Specialist</p>
                    <p className="companydata-text2"><li>What would be your career goals for the next five years?</li></p>
                </div>
            );
        case "Capital Market Transaction":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Capital Market Transaction</p>
                    <p className="companydata-text2"><li>What is the difference between debt and equity?</li></p>
                </div>
            );
        case "Procurement":
            return(
                <div>
                    <p className="companydata-text2"><li>What is your working style?</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>What can you bring to the company?  </li></p>
                </div>
            );
    }
};
