import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent extends Component {
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
                                                    <a>September 28, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Things to Do Before an Interview</h2>

                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog5-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Landing an interview for your dream job is not easy. The job market is smaller than the number of job seekers; more so, it is a very competitive space.
                                    </p>
                                    <p>
                                    For you to land a job, you have to prove yourself. An interview is a treasure that needs to be protected, and the best way to do that is by being prepared. Here are the things that you need to do before an interview.
                                    </p>
                                    <br/>

                                    <h3 className="mb-0">1. Do research</h3>                                    
                                    <p>This is one of the best ways to prepare for an interview. Facing the panel with no clue on what the company does will not be a good look. Do thorough research on the company's background. Know what they do and who they work with. Learn about the company's values and get detailed information on the job description of the position you are being interviewed for. Also, highlight the achievements of the company and mention them during the interview.</p>
                                    <p>Having knowledge of the company will make you stand out, and it will show the recruiters that you are interested in working for the company.</p>

                                    <h3 className="mb-0">2. Prepare the printouts</h3> 
                                    <p>You do not want to rush the last minute to print your resume. The best time to do this is days before the interview. The last-minute rush combined with nervousness will throw you off your element. You are likely to forget important documents, lack organization, and, worst of all, be late for the interview. You want to be relaxed this day to be able to engage the panel well.</p>
                                    <p>Therefore, prepare your printouts in advance and make sure you keep them somewhere you will not forget.</p>
                                    <h3 className="mb-0">3. Prepare the appropriate outfit</h3> 
                                    <p>First impression matters and you should purpose to impress the interviewers even before you start talking. You need to dress professionally and be very minute. Picking the outfit to wear on the morning of the interview is a recipe for disaster. Be safe and do that the night before the interview. Try out the different professional outfits, pick one and iron it.</p>
                                    <p>Your dress code will tell a lot about you as an employee. Also, you can get inspiration for dressing from the company's website and LinkedIn profiles. Look around and see how the employees of the company dress and align your dress code.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog5-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">4. Plan for the logistics</h3> 
                                    <p>One of the things that mess up interviews is transport. The moment you arrive at the interview venue late, then you know you have to work extra hard to prove that you deserve the job. Do not let getting late get in the way of securing your dream job.</p>
                                    <p>Arrange how will get to the interview on time. If you are driving, find about the easy routes to the place and plan how you can beat traffic. If you will be using public means, look at the timetables, and align your schedule. It is recommended that you be at the venue 15 minutes earlier.</p>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>Preparing for an interview makes the whole difference. Doing research, printing out the resumes in advance, preparing your outfit, and organizing transportation to the venue shows just how prepared you are for the interview. When you are adequately prepared for an interview, you are more likely to impress the panel and secure the job.</p>

                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-things-to-do-before-an-interview"}
                                        quote={"Things to Do Before an Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-things-to-do-before-an-interview"}
                                           title={"Things to Do Before an Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-things-to-do-before-an-interview"}
                                            title={"Things to Do Before an Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-things-to-do-before-an-interview"}
                                            title={"Things to Do Before an Interview"}>
                                            <a target="_blank">
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

export default BlogDetailsContent;