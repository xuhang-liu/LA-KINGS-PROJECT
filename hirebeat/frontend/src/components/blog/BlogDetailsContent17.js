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
                                                    <a>Janurary 19, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>11 Mistakes Made by The Most Interviewees According to HR</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog17-pic.jpg" alt="interview mistake, interview tips, job interview, hiring, career tips" />
                                    </div>
                                    <p>
                                    Receiving an invitation to an interview demonstrates that your application was accepted by HR personnel and recruiters. After passing the resume round, now is the time when you really need to be able to bring your resume to life through an interview.
                                    </p>
                                    <p>
                                    According to our survey of many HRs, we listed 11 common mistakes that interviewers make during the interview process. This checklist can help you avoid these common mistakes during the interview stage.
                                    </p>
                                    <h3 className="mb-0">1.	Late Arrival</h3>
                                    <p>
                                    Arriving on time is the first thing you need to ensure before starting any interview. Being late will greatly reduce your professionalism in the eyes of interviewer.
                                    </p>
                                    <p>
                                    Ensure that your plan for the journey ahead that gives you enough time to deal with emergencies and make to your interview location in time.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Skipping Without Excuse</h3>                              
                                    <p>
                                    If you find that an illness, car troubles, or delayed transport connections prevent you from making it to your interview in time, you only need to apologize for your late arrival. Explain the incident to whoever is responsible for establishing contact with interviewees.
                                    </p>
                                    <h3 className="mb-0">3.	Making greetings very casual</h3>
                                    <p>
                                    As excited as you might be, greeting the panel without making eye contact is impolite. Many supervisors complain about this common interview mistake.
                                    </p>
                                    <p>
                                    Cultivate good manners to avoid coming across as disrespectful.
                                    </p>
                                    <h3 className="mb-0">4.	Knowing little information about your potential employer</h3>
                                    <p>
                                    This is one of the biggest mistakes that you can make while preparing for an interview. 
                                    </p>
                                    <p>
                                    You ought to gather adequate information about the company you shall be working for even before you receive an invitation for the interview.
                                    </p>
                                    <p>
                                    Consider getting in touch with a recruitment consultancy to guide you as you prepare for the interview. They could even provide you with information about your prospective employer.
                                    </p>
                                    <h3 className="mb-0">5.	Documents that bring doubt</h3>
                                    <p>
                                    If your documents contain some gaps or missing information, you are likely to embarrass yourself when your interviewer asks about them.
                                    </p>
                                    <p>
                                    In some situations, this interview mistake may discredit you and the panelists might replace you with another applicant.
                                    </p>
                                    <h3 className="mb-0">6.	An exhausted appearance</h3>
                                    <p>
                                    You create a negative impression by yawning, looking exhausted or withdrawn during an interview. Don’t let drinking and making merry come between you and your future.
                                    </p>
                                    <p>
                                    It won’t look as cool as it is shown in the movies, so skip that party.
                                    </p>
                                    <h3 className="mb-0">7.	Showing a lack of care for basic hygiene</h3>
                                    <p>
                                    While you won’t be judged for not wearing expensive attire, dirty fingernails, worn-out outfit and food remains on your mouth can give a poor impression of your hygiene practices.
                                    </p>
                                    <p>
                                    Find a mirror to check how you look before you head out.
                                    </p>
                                    <h3 className="mb-0">8.	Improper behavior</h3>
                                    <p>
                                    Don’t straddle your chair as you talk to your interviewer. This is quite disrespectful, and you aren’t in your living room anyway.
                                    </p>
                                    <h3 className="mb-0">9.	Inappropriate attire</h3>
                                    <p>
                                    You drive a poor impression by showing up at your interview in appropriate clothing. Avoid this interview mistake by familiarizing yourself with the kind of clothing that is typically accepted at your future place of work.
                                    </p>
                                    <h3 className="mb-0">10. Crooked posture</h3>
                                    <p>
                                    A job interview room is not placed to chew gum or smoke. Avoid doing things such as showing disinterest or looking at the clock.
                                    </p>
                                    <h3 className="mb-0">11. Senseless chat</h3>
                                    <p>
                                    Your interviewers aren’t your friends, or people who are interested in you whining and ranting about how your life isn’t working. Choose your words wisely when you want to answer a question.
                                    </p>
                                    <br/>
                                    <p>
                                    To get yourself better prepare before an interview, you can use <a href="/">HireBeat</a> to practice in mock interview and review your performance. Being able to spot your own mistakes and correct them before the formal interview will ensure you to show your best performance during the formal interview.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr"}
                                        quote={"11 Mistakes Made by The Most Interviewees According to HR"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr"}
                                           title={"11 Mistakes Made by The Most Interviewees According to HR"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr"}
                                            title={"11 Mistakes Made by The Most Interviewees According to HR"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr"}
                                            title={"11 Mistakes Made by The Most Interviewees According to HR"}>
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