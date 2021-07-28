import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer4 extends Component {
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
                                                    <a>March 29, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Interview Questions Every Recruiter Should Ask</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer4-pic.jpg" alt="hiring, internship, recruitment, interview question, human resources, entry level job" />
                                    </div>
                                    <br/>
                                    <p>
                                    Any recruiter must spend a considerable amount of time and energy preparing their interview questions before they begin a session. With proper preparation, you can always compare one potential hire to the other and make accurate judgments. Here are some of the interview questions every recruiter should ask.
                                    </p>
                                    <h3 className="mb-0">What Are Your Salary Expectations?</h3>                                    
                                    <p>
                                    Salary expectation is a very delicate issue, but every recruiter must ask this to make good use of everyone's time. It is like test driving a car without asking the prices; you might be falling for a Ferrari while you budgeted for a Chevy.
                                    </p>
                                    <p>
                                    In most cases, recruiters do not recommend clients who accept lower offers than the initial target. It is a sign of frustration from the candidate's side and signals potential flight risk if they land a potentially higher offer that aligns with their salary expectations.
                                    </p>
                                    <p>
                                    When discussing salary expectations, most recruiters like it to be forthcoming; a potential candidate should never play games with the question. If a candidate fits in a recruiter's salary range, they have better chances of landing the job; it is as simple as that.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">What Are Your Most Significant Professional Accomplishments?</h3>                                    
                                    <p>
                                    If you ever want a goal-oriented employee, then this is a must-ask question. It allows the interviewee to share their proudest moments. As a recruiter, you need to assess every achievement and gauge how ambitious they are.
                                    </p>
                                    <p>
                                    With this question, you want to see your candidate's track record from their previous posts; if they created any positive impact or brought any values in their position. The question also wants the candidate to illustrate how they supported their previous employer. With that, it proves their understanding of the objectives in their roles.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Are You Applying For Any Other Positions?</h3>
                                    <p>
                                    Jobs seeker will tell you precisely what you want to hear. Asking if they are applying for other positions will help you sieve the truth from flattery. For instance, a candidate may be applying for a sales position, yet they have applied for more non-client-facing roles.  It raises a red flag and indicates that the candidate has no clear career goals.
                                    </p>
                                    <p>
                                    It does not necessarily mean that they lack the skills and drive to perform well in sales. But it is an indication that they lack genuine interest in that field, and it is unlikely to be part of their long-term plans.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Why Do You Want To Move On?</h3> 
                                    <p>
                                    The reason a candidate is moving from their current role and is likely to settle for your opening is critical. Everyone has reasons for wanting to leave their position for something else. As a recruiter, the more details your candidate gives, the better, but the main point remains why they want to leave.
                                    </p>
                                    <p>
                                    Some reasons like financial instability or relocation may be more understandable. But if they are quitting because of ill-feeling towards the business or management, then it is a potential red flag. It may be a toxic behavior that you do not want to transfer to your business. It also tells you whether the employee is there for long-term purposes or only to pass the time until they get a better place.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-interview-questions-every-recruiter-should-ask"}
                                        quote={"Interview Questions Every Recruiter Should Ask"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-interview-questions-every-recruiter-should-ask"}
                                           title={"Interview Questions Every Recruiter Should Ask"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-interview-questions-every-recruiter-should-ask"}
                                            title={"Interview Questions Every Recruiter Should Ask"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-interview-questions-every-recruiter-should-ask"}
                                            title={"Interview Questions Every Recruiter Should Ask"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-whatsapp"></i>
                                            </a>
                                        </WhatsappShareButton>
                                    </li>
                                </ul>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <BlogSidebarEmployer /> 
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogDetailsContentEmployer4;