import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function LEKConsultingIQ(props){
    const [filter, setFilter] = useState("Associate");
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
              className={decideClassName(filter, "Associate")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Associate")}
          >
              Associate
          </button>
          <button
              className={decideClassName(filter, "Consultant")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Consultant")}
          >
              Consultant
          </button>
          <button
              className={decideClassName(filter, "Life Science Specialist")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Life Science Specialist")}
          >
              LSS
          </button>
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
        default: case "Associate":
            return(
                <div>
                    <p className="companydata-text2"><li>Is there anything about LEK that you are apprehensive about?</li></p>
                    <p className="companydata-text2"><li>Size the market for taxis in London.</li></p>
                    <p className="companydata-text2"><li>Please tell me about yourself.</li></p>
                    <p className="companydata-text2"><li>What role do you play in a team setting?</li></p>
                    <p className="companydata-text2"><li>What new skills have you learned?</li></p>
                    <p className="companydata-text2"><li>If I could invest 1 million anywhere, where would it be and why?</li></p>
                    <p className="companydata-text2"><li>Should a non-profit, mission-driven hospital sell to a private hospital chain for $4billion?</li></p>
                    <p className="companydata-text2"><li>Estimate the market size of the World Series game.</li></p>
                    <p className="companydata-text2"><li>Should a tablet PC company start selling kid’s tablets?</li></p>
                    <p className="companydata-text2"><li>What is the annual market size of the water equipment market?</li></p>
                    <p className="companydata-text2"><li>How many toilets are purchased in Australia in a year?</li></p>
                    <p className="companydata-text2"><li>Estimate the market of basketball.</li></p>
                    <p className="companydata-text2"><li>What is something that isn't on your resume that you're proud of?</li></p>
                    <p className="companydata-text2"><li>Size the market for iPhone revenue in one year.</li></p>
                    <p className="companydata-text2"><li>What are your most significant weaknesses?</li></p>
                    <p className="companydata-text2"><li>How have you overcome difficulties working within a team?</li></p>
                    <p className="companydata-text2"><li>Determine the size of the car battery market in the U.S. annually.</li></p>
                    <p className="companydata-text2"><li>Estimate the market size of ADHD medication.</li></p>
                </div>
            );
        case "Consultant":
            return(
                <div>
                    <p className="companydata-text2"><li>If a marathon happened to be on a stormy day, how many people would finish it still?</li></p>
                    <p className="companydata-text2"><li>Determine the market size of waffles in the US.</li></p>
                    <p className="companydata-text2"><li>Why do you want to go into consulting?</li></p>
                    <p className="companydata-text2"><li>Determine the number of parking spots that would need at Heathrow airport.</li></p>
                    <p className="companydata-text2"><li>How many petrol stations are there in the UK?</li></p>
                    <p className="companydata-text2"><li>You drive past O'Hare Airport in Chicago and notice several empty parking garages near the airport. You think these garages could be used for long-term parking for people using the airport. You are trying to determine whether or not to purchase the garages. How would you go about making this decision?</li></p>
                    <p className="companydata-text2"><li>What is the revenue (market size) of train season tickets in the UK yearly?</li></p>
                    <p className="companydata-text2"><li>How much does a taxi driver earn in a year?</li></p>
                    <p className="companydata-text2"><li>How many payphones in NYC?</li></p>
                    <p className="companydata-text2"><li>Assess market size for a bio-tech device.</li></p>
                    <p className="companydata-text2"><li>What healthcare area do you think is an excellent area to invest in?</li></p>
                    <p className="companydata-text2"><li>Help explain what is happening in this market as it grows and shrinks over time.</li></p>
                </div>
            );
        case "Life Science Specialist":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Life Science Specialist</p>
                    <p className="companydata-text2"><li>Why am I interested in LEK?</li></p>
                    <p className="companydata-text2"><li>Launch strategy for a diagnostic test.</li></p>
                    <p className="companydata-text2"><li>Market sizing for a new product launch in the biotech space.</li></p>
                    <p className="companydata-text2"><li>Tell me about a time you deal with a conflict.</li></p>
                    <p className="companydata-text2"><li>Where do you see yourself in five years?</li></p>
                    <p className="companydata-text2"><li>Should the brand drug decrease its price after the generic drug go-to-market?</li></p>
                    <p className="companydata-text2"><li>How would you increase the revenue of an insurance department in a large conglomerate firm?</li></p>
                    <p className="companydata-text2"><li>Estimate salmon sushi consumed annually in the USA.</li></p>
                    <p className="companydata-text2"><li>Market Size Evaluation with an example of a U.S. Pharmaceutical company that wants to enter the Japanese market.</li></p>
                    <p className="companydata-text2"><li>You are representing a collection of dental practices looking to be purchased by a hospital system. The head of these practices thinks there is additional value to the hospital system that is not appreciated. How would you value this practice?</li></p>
                    <p className="companydata-text2"><li>Tell me about your resume and why consulting is a good fit.</li></p>
                    <p className="companydata-text2"><li>Predict the UK market for over the counter allergy medication.</li></p>
                    <p className="companydata-text2"><li>What would colleagues say about you after working with you for a year?</li></p>
                    <p className="companydata-text2"><li>What recent pharma/biotech news do you find interesting?</li></p>
                </div>
            );
        case "Analyst":
            return(
                <div>
                    <p className="companydata-text2"><li>What's the market size for specialty fitness studios?</li></p>
                    <p className="companydata-text2"><li>If p>q, which is larger in area, p+1 long, q wide, or p long q+1 wide?</li></p>
                    <p className="companydata-text2"><li>How much rentable space is there in NYC?</li></p>
                    <p className="companydata-text2"><li>Pricing strategy for airport parking.</li></p>
                </div>
            );
    }
};
