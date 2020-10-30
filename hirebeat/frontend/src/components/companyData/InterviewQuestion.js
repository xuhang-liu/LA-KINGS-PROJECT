import React, { useState } from 'react';
import ReactWOW from 'react-wow';
import { Link } from "react-router-dom";
import {Swithbutton} from "./InterviewProcess";


export default function InterviewQuestion(props){
    const [filter, setFilter] = useState("swe");
    return(

            <div style={{marginTop: '5%'}}>
                <h3 className="companydata-text1">Interview Questions</h3>
                {Swithbutton(filter, setFilter)}
                <p>•What is HashTable? How does it work in the backend perspective? What to do if the collision happened? Whats the time complexity of inserting? deleting? searching? </p>
                <p>•What's the time complexity for the worse case?</p>
                <p>•What is binary search tree? Whats the time complexity of inserting? deleting? searching? What's the time complexity for the worse case?</p>
                <p>•What's the advantage of using BST rather than hashmap?  </p>
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
