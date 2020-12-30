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
                                                    <a>August 16, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Video interview practice</h2>

                                    <p>
                                    It is always the wish of every kind of person to get the right job. Everyone aims at finding the best place they can comfortably work due to the conducive environment. Nevertheless, before you get to the best company, you are required to go through an interview which will determine how well you are experienced in that sector. You need first to learn how the interview is conducted and get an opportunity to learn of available job opportunities.
                                    </p>

                                    <blockquote>
                                        <p>Getting the right website to do the training is a decision that every job seeker should have in mind. The following are the reasons why you need video interview practice.
                                            </p>
                                    </blockquote>
                                    <ul>
                                        <li>
                                            <h3>To get prepared for a job interview</h3>
                                            <p>Do you have your interview tomorrow? Do you want to get ready for an interview soon? If yes, then this is your opportunity to practice and know everything that you will be asked in the interview. With one of the best website "hirebeat.com", you get trained on everything that you will need. The site will allow you to have a video interview that will help you get ready and focus on having a great base in the interview.</p>
                                        </li>
                                        <li>
                                            <h3>Video interview helps to build confidence</h3>
                                            <p>One of the things that make people lose their opportunity to others is lack of confidence. Attending to a video interview with one of the most qualified staffs should be mandatory to anyone longing to go for an interview. This is because it builds one’s confidence by answering some of the most common questions that they are to be asked during the interview.</p>
                                        </li>
                                        <li>
                                            <h3>Help to easily apply for a job</h3>
                                            <p>Applying for a job is at times difficult, more so if you have no background of how to convince the job givers that you are the best-fit person for the job. With the right online tools, you will get informed of available opportunities that you can take and apply for. Also, the site will prepare you on how well you will write an appealing application letter.</p>
                                        </li>
                                        <li>
                                            <h3>To get hired first</h3>
                                            <p>Since there is a huge number of unemployed people around the globe, the available opportunities are easily grabbed by those who are informed and have the required skills. With one of the best website, it is easy to get hired due to the availability of information regarding the jobs on site. At hirebeat, you are connected to the job providers easily.</p>
                                        </li>
                                        <li>
                                            <h3>To quickly search for available jobs</h3>
                                            <p>Another thing that makes people say there are no jobs or can't get access to any is because they fail to do the right research. If you are longing to find the right position, visit hirebeat, and you are going to find multiple available resources that will help you to find the right job. Searching for a job should not be that tiresome visit us today and find a great way to grow your career in the right way.</p>
                                        </li>
                                    </ul>

                                    <h3 className="mb-0">Final thought</h3>                                    
                                    <p>Are you aiming to get hired soon? Hirebeat is right here for you. Get everything you need to know about the interview and get introduced to other opportunities. We will help you learn what you have never learned before as our website has one of the best templates ever.</p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-video-interview-practice"}
                                        quote={"Video interview practice"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-video-interview-practice"}
                                           title={"Video interview practice"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-video-interview-practice"}
                                            title={"Video interview practice"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-video-interview-practice"}
                                            title={"Video interview practice"}>
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