import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import {decideClassName} from './../Components';


export default function AEIQ(props){
    const [filter, setFilter] = useState("Software Engineering");
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
              className={decideClassName(filter, "Software Engineering")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Software Engineering")}
          >
              SDE
          </button>
          <button
              className={decideClassName(filter, "Customer Care Professionals")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Care Professionals")}
          >
              CCP
          </button>
          <button
              className={decideClassName(filter, "Business Analyst")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Business Analyst")}
          >
              BA
          </button>
          <button
              className={decideClassName(filter, "Customer Service Representative")}
              style = {{width: "90px", height: "42px", outline: "none", borderRadius: "5px"}}
              onClick={() => setFilter("Customer Service Representative")}
          >
              CSR
          </button>
      </div>
  );
}

function renderContent(filter)  {
    switch (filter) {
        default: case "Software Engineering":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Software Engineer</p>
                    <p className="companydata-text2"><li>If you were leading a team of developers towards completing a project in one month, then halfway through you needed to complete a different project with your team that had a higher priority, but the same deadline, how would you respond and what would you do?</li></p>
                    <p className="companydata-text2"><li>Are you familiar with inheritance? If so, could you give an example of how you would use it?  </li></p>
                    <p className="companydata-text2"><li>What is the difference between a Hash, List & Set?  </li></p>
                    <p className="companydata-text2"><li>If you had to describe yourself in one word, what would it be?  </li></p>
                    <p className="companydata-text2"><li>How would you sort the characters in a string?</li></p>
                    <p className="companydata-text2"><li>What was an instance that you felt like you led a team?</li></p>
                    <p className="companydata-text2"><li>Can you describe what you look forward to from your manager?  </li></p>
                    <p className="companydata-text2"><li>How would you build a restaurant review app? What do you think you will need to successfully do it?</li></p>
                </div>
            );
        case "Customer Care Professionals":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Care Professionals</p>
                    <p className="companydata-text2"><li>Can you tell me a time when you had a customer called about not being aligned with something and what you did to overturn the situation?</li></p>
                    <p className="companydata-text2"><li>How will your previous experience benefit the company?  </li></p>
                    <p className="companydata-text2"><li>Was there a time you went against a policy to satisfy a customer? </li></p>
                    <p className="companydata-text2"><li>Why do you want to work for American Express? </li></p>
                    <p className="companydata-text2"><li>Can you name a time you received extraordinary service? </li></p>
                    <p className="companydata-text2"><li>What was the most difficult task you have had and how did you handle it?  </li></p>
                    <p className="companydata-text2"><li>Does your position use a metrics system to measure productivity?</li></p>
                    <p className="companydata-text2"><li>Was there a time when you were not able to achieve your goals? If so, how did you handle it?</li></p>
                    <p className="companydata-text2"><li>How do you feel about having goals to achieve?</li></p>
                    <p className="companydata-text2"><li>How would you deal with a question that you don‘t know the answer to?</li></p>
                    <p className="companydata-text2"><li>How would you describe your role in a team?  </li></p>
                    <p className="companydata-text2"><li>How would you deal with a high volume of clients?</li></p>
                    <p className="companydata-text2"><li>Give an example when you had a customer that had unique needs that required tailored solutions, and the usual policy procedure was not going to fit the situation very well. What did you do?  </li></p>
                </div>
            );
        case "Business Analyst":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Business Analyst</p>
                    <p className="companydata-text2"><li>How well do you handle multiple works at a time? What would you do? Please give an example.</li></p>
                    <p className="companydata-text2"><li>How would you handle resistance by a member of senior leadership to a decision made for process change?  </li></p>
                    <p className="companydata-text2"><li>How do you deal with the boredom of daily work?  </li></p>
                    <p className="companydata-text2"><li>How do you manage stress at work?  </li></p>
                    <p className="companydata-text2"><li>When would you use Random Forest over SVM?</li></p>
                </div>
            );
        case "Customer Service Representative":
            return(
                <div>
                    <p className="companydata-text2">Job Title: Customer Service Representative</p>
                    <p className="companydata-text2"><li>Name a time you worked with a difficult customer, and what did you do?</li></p>
                    <p className="companydata-text2"><li>Can you try to sell me a product right now?</li></p>
                    <p className="companydata-text2"><li>How would you handle an irate customer by phone? </li></p>
                    <p className="companydata-text2"><li>What are your call metrics? </li></p>
                    <p className="companydata-text2"><li>Tell me about a time you had an angry customer. How did you handle them?</li></p>
                    <p className="companydata-text2"><li>Describe a scenario where you implemented a new policy or procedure with a company.</li></p>
                    <p className="companydata-text2"><li>Can you tell me a time when you used your communication skills to influence someone’s decision?</li></p>
                    <p className="companydata-text2"><li>Can you tell me about a time when you had to persuade someone to see things your way?  </li></p>
                    <p className="companydata-text2"><li>Name a time you went above the call of duty in your job. Explain what you did, and how it would contribute to American Express.</li></p>
                    <p className="companydata-text2"><li>Would you ever bend a company policy to satisfy a very important client if it seems to be the most beneficial to the company and the client in any specific situation?</li></p>
                    <p className="companydata-text2"><li>How do you cope if your job gets boring/monotonous?  </li></p>
                </div>
            );
    }
};
