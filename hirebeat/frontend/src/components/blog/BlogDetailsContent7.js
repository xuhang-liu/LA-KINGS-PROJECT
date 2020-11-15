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
                                                    <a>October 19, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Write a Thank-You Email After a Job Interview (Example Included)</h2>

                                    <p>
                                        <i><b>Meta Description: </b>: Thank you, emails can go a long way in making you stand out from other candidates. Get tips for writing a good thank you email and a thank-you email sample.</i>
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog7-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Sending a thank you email after a job interview is essential for several reasons. For one, it expresses your enthusiasm for the role; it also helps you linger on the minds of the interview panel and give you a competitive edge. It is also an expression of courtesy.</p>
                                    <p>
                                    Here are tips that will help you write a good thank-you email after an interview.</p>
                                    <br/>

                                    <h3 className="mb-0">1. Be clear</h3>                                    
                                    <p>The first thing that the recipient should notice when he or she opens the email is that it is a thank you letter. Therefore, be straight to the point.</p>

                                    <h3 className="mb-0">2. In the greetings, include the personal names</h3> 
                                    <p>It is recommended that you send thank you letters to everyone that was on the panel. Also, personalize your email by addressing the individuals directly by their names.</p>
                                    <h3 className="mb-0">3. Show that you are interested in the job</h3> 
                                    <p>This is an opportunity for you to restate and express your interest in the job. When the interviewer sees that your interest is genuine, he is more likely to consider you for the role.</p>
                                    <h3 className="mb-0">4. Say you are open to provide additional information</h3> 
                                    <p>As you state this, maintain conciseness. Tell the interviewer that you are ready to provide additional information if needed.</p>
                                    <p>As you are required, close the email professionally. Use “sincerely” or an alternative. Include your full name and contacts and relevant professional links, like one for your LinkedIn page.</p>
                                    <br/>
                                    <h3>A sample thank-you email after a job interview</h3>
                                    <br/>
                                    <h3 className="mb-0"><i>Subject: Thank You, Mr./Ms. Last name</i></h3>
                                    <p><i>Dear Mr./Ms. Last name,</i></p>
                                    <p><i>It was a great pleasure to talk with you about the (XXX) position at (company name). I just want to thank you for your time.</i></p>
                                    <p><i>Our conversation made me even more excited and enthusiastic to join (company name). What interested me the most was your organization’s culture, the growth opportunities linked to the role, and its impact on the community. I believe that my analytics background and diverse teamwork experience will allow me to make contribution to the company.</i></p>
                                    <p><i>Again, I appreciate the time you took to interview me. Look forward to hearing from you about this position.</i></p>
                                    <br/>
                                    <br/>
                                    <p><i>Sincerely,</i></p>
                                    <p><i>(Your name)</i></p>
                                    <br/>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>It is always essential to have a notebook and take notes during an interview. Some of the critical points can be useful in creating content for your post-interview thank-you an email. This means that you should feel free to highlight and appreciate something that the interviewer had mentioned during the interview. Also, highlight something special about the organization that could help take your career to the next level or challenge you to become better.</p>
                                    <p>Also, it is worth noting that not all times are ideal for sending thank-you emails. The recommended time is within 24 hours after the interview. During this time, the interviewers’ thoughts would not have drifted far away from the event, and your email will be most relevant. Also, since it is a formal email, please do not send it over the weekend as the chance is high that no one will view it.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog7-pic1.jpg" alt="image"></img>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/how-to-write-a-thank-you-email-after-a-job-interview"}
                                        quote={"How to Write a Thank-You Email After a Job Interview (Example Included)"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/how-to-write-a-thank-you-email-after-a-job-interview"}
                                           title={"How to Write a Thank-You Email After a Job Interview (Example Included)"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/how-to-write-a-thank-you-email-after-a-job-interview"}
                                            title={"How to Write a Thank-You Email After a Job Interview (Example Included)"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/how-to-write-a-thank-you-email-after-a-job-interview"}
                                            title={"How to Write a Thank-You Email After a Job Interview (Example Included)"}>
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