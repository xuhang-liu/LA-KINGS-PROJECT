import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent27 extends Component {
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
                                                    <a>May 17, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Ace Your Zoom Job Interview</h2>
                                    <p>
                                    Virtual job interviews have become even more popular after the pandemic situation in different countries. ZOOM is one of the most used video conferencing applications by HR for conducting not only meetings but also virtual job interviews. It has received global recognition over the last couple of years because of its state-of-the-art video conferencing experience.
                                    </p>
                                    <p>
                                    Now, there are several points that an interviewee needs to look upon for good interview preparation. In this write-up, we will share some of the most essential points that an interviewee should focus on to ace the ZOOM job interview. Read till the end if you are thinking of ace your ZOOM interview.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog27-pic.jpg" alt="Interview, question, job, intern, recruit, company, human resources, competitiveness, candidate, zoom, talent acquisition, virtual" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">GET HANDS-ON EXPERIENCE OF ZOOM BEFORE THE INTERVIEW</h3>
                                    <p>
                                    Getting familiar with the application is the first and foremost step before appearing for a ZOOM interview. ZOOM application is available on all the major platforms such as Google's play store and Apple's app store. As an interviewee, you should properly know how to use the application. For this purpose, you can take help from different video tutorials before the interview. This hands-on experience will allow you to have a smooth and uninterrupted video conference. You can also have a trial ZOOM session with one of your family or friends.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">SELECT A CLEAN, PROFESSIONAL, AND NOISELESS SPACE</h3>
                                    <p>
                                    The area and its surroundings where you appear for a virtual interview have an impact on your hiring. Any messy and unprofessional space can create a negative impression on the hiring manager. Besides that, any disturbance or frequent noise in the background can also affect your overall score. So, always try to find a professional, quiet, and decent-looking space for your ZOOM interview. On top of that, you can also mute your mic while listening to the interviewers. It will create a clearer audio experience.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">CHOOSE PROFESSIONAL DRESSING FOR THE INTERVIEW</h3>
                                    <p>
                                    Just like in-person interviews, you should wear professional attire. It is better to wear those colours that offer a more professional look whether you're a man or woman. You should especially pay attention to your dressing colour if you are using a virtual background in case Zoom mixes you up with it.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog27-pic1.jpg" alt="Interview, question, job, intern, recruit, company, human resources, competitiveness, candidate, zoom, talent acquisition, virtual" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">PREPARE INTERVIEW QUESTIONS/RESEARCH ABOUT THE COMPANY</h3>
                                    <p>
                                    Don't forget the most important part of an interview which is the question/answer session while focusing on other things which have been discussed earlier. Allocate proper time before the interview and try to cover as much as you can to increase your chances of being hired. Do your homework about the company you're interviewing for. It can give you an upper hand over the rest of the candidates.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">KEEP YOUR BODY LANGUAGE AS POSITIVE AS YOU CAN</h3>
                                    <p>
                                    Your body language during an interview, whether taken in-person or virtually, has a massive impact on your selection. Your willingness to get the position should be present in your facial expressions. You must convey your message with a positive attitude. Stay confident throughout the interview: it will double your chances of being selected for the job. Moreover, talk slowly and with more clarity: making sure you listen to the hiring managers and avoid cross-talk with them.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Final Thoughts</h3>
                                    <p>
                                    Lastly, it's better to set an event on your smartphone so you can prepare everything in time. Being on time is the first positive impression that you showcase in front of the interviewers. HireBeat is an HR platform that offers video interview tools across all platforms that helps you prepare for your Zoom interview. To know more about us, please visit <a href="/job-seekers">https://hirebeat.co/job-seekers</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-ace-your-zoom-job-interview"}
                                        quote={"Ace Your Zoom Job Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-ace-your-zoom-job-interview"}
                                           title={"Ace Your Zoom Job Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-ace-your-zoom-job-interview"}
                                            title={"Ace Your Zoom Job Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-ace-your-zoom-job-interview"}
                                            title={"Ace Your Zoom Job Interview"}>
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

export default BlogDetailsContent27;