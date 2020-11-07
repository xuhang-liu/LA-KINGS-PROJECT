import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {SwitchButton} from './../Components';


export default function MDIQ(props){
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
                            style={{color:"white", backgroundColor:"#090D3A", height: "2.5rem"}}>
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
                            style={{color:"white", backgroundColor:"#090D3A", height: "2.5rem"}}>
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

function renderContent(filter)  {
    switch (filter) {
        case "swe":
            return (
                <div>
                  <p className="companydata-text2">The usual interview process usually takes about 4 weeks </p>
                  <p className="companydata-text2"><span style={{fontWeight: "700"}}>Stage 1:</span> An online coding test, solving two algorithms in the language of the candidate's choice each with a time limit of 70 mins </p>
                  <p className="companydata-text2"><span style={{fontWeight: "700"}}>Stage 2:</span> Two technical phone interviews conducted one after the other with different interviewers. </p>
                  <p className="companydata-text2"><span style={{fontWeight: "700"}}>Stage 3:</span> A technical phone screen with either a technical recruiter or an engineer. </p>
                  <p className="companydata-text2"><span style={{fontWeight: "700"}}>Stage 4:</span> An onsite interview consisting of 6 sessions, 5 technical and one with HR. Technical questions cover things like graph problems, sorting streams of integers, checking if a given list of words are contained in a magazine. Every problem is coupled with an analysis of computational complexity and memory trade offs.</p>
                </div>
            );
        case "data":
            return(
              <div>data</div>
            );
        case "design":
            return(
              <div>design</div>
            );
        case "pm":
            return(
              <div>pm</div>
            );
        default:
            return null;
    }
};
