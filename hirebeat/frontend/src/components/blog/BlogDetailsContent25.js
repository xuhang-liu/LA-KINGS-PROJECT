import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent25 extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-time'></i> 
                                                <Link href="#">
                                                    <a>April 08, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>4 Most Commonly Asked Questions in an Interview</h2>
                                    <p>
                                    You are finally here reading this article about interview questions. Whether you are preparing to take an interview or appearing in one, this article shares the four most commonly asked questions in an interview and how they can benefit the interviewer.
                                    </p>
                                    <p>
                                    Let's just getting started.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog25-pic.jpg" alt="Interview, question, job, intern, recruit, company, human resources" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">Question No.1: Why did you choose this Company?</h3>
                                    <p>
                                    I can't stress enough how vital this question can be when sitting for an interview. It is a common question but also could be challenging to answer. This question sets the primary evaluation criteria to observe if a person appearing for an interview possesses enthusiasm and keenness for working hard.
                                    </p>
                                    <p>
                                    Companies want to find employees that believe in their mission and fit in with the culture. The employers would like to tell if the person sitting in front of him/her should be asked more questions or should just call "NEXT." For instance, if you reply by explaining all the Company's details and achievements, it indicates that you have a detailed knowledge of the organization and has come with excellent research.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Question No.2: Why are you the best fit for this Position?</h3>
                                    <p>
                                    It all starts and ends with the Position you are applying for. An interviewer would typically move to this question in the first few minutes of the interview. Employers ask this question to measure whether you have the right skill and also your confidence in handling this job.
                                    </p>
                                    <p>
                                    Counting your achievements may not be a good answer to this question. The answer to this question should be exclusively about how your skills can provide a competitive reflection to the job position. It is probably the most straightforward way for an interviewer to observe the person's ability to work for the organization. If you talk about his desire and passions associated with the job position, you are the right one.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Question No. 3: What are your Weaknesses?</h3>
                                    <p>
                                    You might not just see people giving importance to this question. However, no matter where you go, this question comes as an integral part of the interview. By weaknesses, the purpose is to ensure that the job seeker is confident and comfortable expressing his shortcomings in front of everyone.
                                    </p>
                                    <p>
                                    To stand out among all the applicants, you should find a way to positively rephrase your shortcomings and show yourself awareness. Nobody is perfect, and the goal of answering this question is to let employers know you are introspective. For instance, if you mention their weaknesses and are willing to work on them, you are in the right away.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Question No. 4: Why did you leave your job?</h3>
                                    <p>
                                    The most important question for an interviewer to evaluate a job seeker's skills is by asking this question. Avoiding the negative aspects and show the motivation behind leaving the last job is the key. Suppose you frame your answer to show your eagerness towards learning new things and getting the latest opportunities, it will help clarify your career path and let the employer understand you better.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion:</h3>
                                    <p>
                                    The four fundamental questions mentioned above are of great significance and beneficial for getting prepared for your incoming job interview. HireBeat is an AI-powered platform that helps candidates get ready for the interview and to be more successful in the future. To know more about us, please visit <a href="/job-seekers">https://app.hirebeat.co/job-seekers</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://app.hirebeat.co/blog-4-most-commonly-asked-questions-in-an-interview"}
                                        quote={"4 Most Commonly Asked Questions in an Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://app.hirebeat.co/blog-4-most-commonly-asked-questions-in-an-interview"}
                                           title={"4 Most Commonly Asked Questions in an Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://app.hirebeat.co/blog-4-most-commonly-asked-questions-in-an-interview"}
                                            title={"4 Most Commonly Asked Questions in an Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://app.hirebeat.co/blog-4-most-commonly-asked-questions-in-an-interview"}
                                            title={"4 Most Commonly Asked Questions in an Interview"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContent25;