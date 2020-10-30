import React, { useState  } from 'react';
import { Redirect } from 'react-router-dom';
import ReactWOW from 'react-wow';

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected" : "btn-unselected";
};


export const Swithbutton = (filter, setFilter)=>{
    return(
        <div style={{marginBottom: "20px"}} className="container d-flex justify-content-start">
            <button
            className={decideClassName(filter, "swe")}
            style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
            onClick={() => setFilter("swe")}
            >
            SWE
            </button>
            <button
            className={decideClassName(filter, "data")}
            style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
            onClick={() => setFilter("data")}
            >
            Data
            </button>
            <button
            className={decideClassName(filter, "design")}
            style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
            onClick={() => setFilter("design")}
            >
            Design
            </button>
            <button
            className={decideClassName(filter, "pm")}
            style = {{width: "150px", height: "42px", outline: "none", borderRadius: "5px"}}
            onClick={() => setFilter("pm")}
            >
            PM
            </button>
        </div>
    );
}

export default function InterviewProcess(){
    const [filter, setFilter] = useState("swe");
    return(
        <ReactWOW animation='fadeInLeft' delay='0.1s'>
            <div>
                <h3 className="companydata-text1">Interview Process</h3>
                {Swithbutton(filter, setFilter)}
                <p className="companydata-text2">The usual interview process usually takes about 4 weeks </p>
                <p className="companydata-text2"><scan style={{fontWeight: "700"}}>Stage 1:</scan> An online coding test, solving two algorithms in the language of the candidate's choice each with a time limit of 70 mins </p>
                <p className="companydata-text2"><scan style={{fontWeight: "700"}}>Stage 2:</scan> Two technical phone interviews conducted one after the other with different interviewers. </p>
                <p className="companydata-text2"><scan style={{fontWeight: "700"}}>Stage 3:</scan> A technical phone screen with either a technical recruiter or an engineer. </p>
                <p className="companydata-text2"><scan style={{fontWeight: "700"}}>Stage 4:</scan> An onsite interview consisting of 6 sessions, 5 technical and one with HR. Technical questions cover things like graph problems, sorting streams of integers, checking if a given list of words are contained in a magazine. Every problem is coupled with an analysis of computational complexity and memory trade offs.</p>
            </div>
        </ReactWOW>
        // <OverallScore percent={10} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
    )
}
