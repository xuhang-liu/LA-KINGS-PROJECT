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

class ProductManager extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Product Manager Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container pb-100" style={{marginTop: "2rem"}}>
                    <div>
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                        Looking for a career path that combines technical savvy with a business perspective?
                        Product Managers at HireBeat are data-driven decision-makers, building new features and products that touch directly to the customers in the market. The candidate will perform analysis or mining of data, evangelize the insights drawn from the data analysis, and work with developers and designers to define features based on these insights.
                        </p>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>As a Product Manager Intern, you will be focused on ensuring the aggressive expansion of
                        HireBeat’s business, helping to explore key opportunities for growth, creating stellar customer experiences, and supporting all aspects of the business while partnering with employees from all backgrounds and function teams.</p>
                        <p className="job-txt2">Position Location: <u>New York City / Remote</u></p>
                        <p className="job-txt2">Length: <u>8-10 weeks</u></p>
                        <p className="job-txt2">Position Location: <u>New York City / Remote</u></p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                            Note that this position is an unpaid internship to start with the possibility of becoming a paid position in the future.
                        </p>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Key Responsibilities:</h3>
                        <ul className="job-txt2">
                            <li>Think strategically and creatively to gather product and customer insights and help define the Product Vision and Strategy</li>
                            <li>Understand Go-to-market strategy and competitive position and define product requirements for MVPs and new features/enhancements</li>
                            <li>Analyze current customer experiences and feedback to define friction points and create seamless and effortless experiences</li>
                            <li>Develop product roadmaps and work with cross-functional teams (business, marketing, product, development, UI&UX, analytics)</li>
                            <li>Define detailed product requirements, scope, ship, measure features and use rapid cycles to iterate and learn; managed and monitor the deliverables and project milestones</li>
                            <li>Take overall business objectives and combine them with insight into what user problems we are uniquely suited to solve</li>
                            <li>Build trust and effective relationships with peers/cross-functional teams</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">Basic Requirements:</h3>
                        <ul className="job-txt2">
                            <li>Must be pursuing a Bachelor’s or Master’s degree in Computer Science, Business, or related field</li>
                            <li>Strong analytical and data visualization skills</li>
                            <li>Knowledge of data analytics and SEO (using Excel VBA, SQL, Google Analytics, Tableau, etc.)</li>
                            <li>Ability to juggle multiple priorities and thrive in fast-paced environments</li>
                            <li>Strong problem-solving abilities - you can cut through the noise and laser focus on what matters</li>
                            <li>Experience working with internet technologies or the SaaS industry is desirable</li>
                            <li>Experience with PM methodologies to understand customers and explore insights</li>
                            <li>Strong ability to translate product needs to technology and to understand the technology</li>
                            <li>Ability to write scripts or snippets of code preferred</li>
                            <li>Excellent verbal and written communication skills</li>
                            <li>The desire to work in a startup environment – things can be ambiguous here and move very quickly</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductManager;
