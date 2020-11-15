import React, {useState} from 'react';
import {SwitchButton} from './../Components';


export default function AIGIP(){
    const [filter, setFilter] = useState("swe");
    return(
        <div style={{marginTop: '5%'}}>
            <h3 className="companydata-text1">Interview Process</h3>
            {SwitchButton(filter, setFilter)}
            {renderContent(filter)}
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

