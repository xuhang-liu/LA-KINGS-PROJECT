import React, { Component } from 'react';
import PageTitleArea from '../../Common/PageTitleArea';
import { useEffect } from "react";
//import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class SoftwareEngineer extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Software Developer Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container pb-100" style={{marginTop: "2rem"}}>
                    <div>
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                        We are looking for a <b>Software Developer</b> with solid experience and knowledge in web technologies, as well as interest in learning new technologies and willingness to tackle new challenges. In this role, you will research and provide the best solutions for building website(s), microsites, interactive forms, integrations with third-party APIs, and other interactive tasks. Research, collaboration, and investigation are your three core strengths.
                        </p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                            Note: The program is 8-10 weeks. You can choose either work remotely or in our New York office.
                            Note that this internship is an <b>unpaid</b> position. However, we provide a return offer for a full-time position to our top interns at the end of the internship.

                        </p>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Responsibilities:</h3>
                        <ul className="job-txt2">
                            <li>Build websites from scratch including microsites, applications, forms, and hybrid mobile apps</li>
                            <li>Collaborate with the marketing team, research, and investigate web solutions and technologies such as Web Frameworks, APIs, integrations, etc</li>
                            <li>Maintain, update, and troubleshoot website(s), including website loading speed, mobile compatibility, etc</li>
                            <li>Assist in managing vendors and freelancers</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Qualifications:</h3>
                        <ul className="job-txt2">
                            <li>Experience building complex interactive websites from scratch</li>
                            <li>Experience with HTML5, CSS, JavaScript, SQL (preferred PostgreSQL), React, Django, and other relevant web technologies</li>
                            <li>Experience with third-party APIs</li>
                            <li>Knowledge of SEO and how it affects web development</li>
                            <li>Superb communication and interpersonal skills</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Preferred Skills and Experience:</h3>
                        <ul className="job-txt2">
                            <li>1+ years of front-end development experience with HTML, CSS, and JavaScript</li>
                            <li>1+ years of experience with any scripting language (Python, Node.js, etc.)</li>
                            <li>Modern HTML/CSS tools and practices (Single page apps, responsive design, etc.)</li>
                            <li>Professional, precise communication skills</li>
                            <li>Strong experience with React and/or Angular</li>
                            <li>Strong experience documenting, testing, and maintaining large scale projects</li>
                            <li>Undergraduate degree in computer science or related field OR commensurate work experience</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SoftwareEngineer;
