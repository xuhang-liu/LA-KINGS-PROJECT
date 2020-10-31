import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import QuestionList from './QuestionList';
import {Switchbutton} from './Components';



export default function InterviewQuestion(props){
    const [filter, setFilter] = useState("swe");
    return(
        <div style={{marginTop: '5%'}}>
            <h3 className="companydata-text1">Interview Questions</h3>
            {Switchbutton(filter, setFilter)}
            <QuestionList filter={filter}/>
            <div className="row">
            <div className="col-lg-7 col-md-7">
            <span className="companydata-text3">View more and prepare your answer</span>
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
            <div className="row">
            <div className="col-lg-7 col-md-7">
            <span className="companydata-text3">Improve your resume matching rate</span>
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
        // <OverallScore percent={10} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
    )
}
