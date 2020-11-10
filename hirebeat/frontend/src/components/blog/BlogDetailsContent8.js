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
                                                    <a>October 26, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Keywords to Include on A Resume</h2>

                                    <p>
                                        <i><b>Meta Description: </b>Hiring managers look for words in resumes that show that a candidate is ideal for a role. Learn about the different keywords to include in your resume and what they mean.</i>
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog8-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Many things can be used to describe a successful resume. It could be error-free grammar, certifications, and tons of other things that vary with industries and employers. The one common thing that makes resumes successful is the choice of keywords or phrases. It is essential for every candidate, regardless of the role they are pursuing, using words that will grab the attention of the recruiters.
                                    </p>
                                    <p>
                                    Keywords are designed to help the recruiter pointy out the essential skills you have for the job, your expertise in a given field, abilities that you have that can be beneficial for the job, and qualifications.</p>
                                    <p>
                                    This is to say that the keywords included on a resume are job or industry-related phrases that talk about the skills, competencies, and qualifications you have that make you suitable for the job.
                                    </p>
                                    <p>
                                    Here are some of the essential keywords to include in your resume. 
                                    </p>
                                    <br/>

                                    <h3 className="mb-0">1. Managed, created, or led</h3>                                    
                                    <p>These words will give the hiring manager the impression of someone who has a higher level of thinking. It will show that you are capable of designing strategies and being at the forefront of implementation. This is something a hiring manager would love to see.</p>
                                    <h3 className="mb-0">2. Committed</h3> 
                                    <p>Every employer wants employees that treat the company like it is their own. Dedication is an indicator of staff being able to help the organization achieve its objectives. Using the phrase committed will bring to the attention that you are dedicated to the role, and you are willing to do what it takes to get the job done.</p>
                                    <p>This is one of the keywords that hiring managers love to see in resumes. By using the phrase “committed,” the manager can already gauge your leadership skills, proactiveness, and aptitude.</p>
                                    <h3 className="mb-0">3. Valuable</h3> 
                                    <p>You have probably used this phrase in your resumes to different companies. Note that companies pay employees with the hope of getting value from them. The relationship between employers and employees is symbiotic, where both parties mutually benefit from each other.</p>
                                    <p>While employees get benefits through remuneration, medical covers, and other benefits, employers expect to get value from them through the assigned roles.</p>
                                    <p>Mentioning that you are looking to be of value or make a valuable contribution to a company shows that your goals are aligned with those of the organizations.</p>
                                    <p>Hiring managers will certainly give attention to candidates that are interested in helping the company improve or champion it towards making progress.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog8-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>The other keywords that should be included in resumes are redesign, introduced or invented, teamwork, collaboration, and motivation, to mention a few. Diction plays a crucial role in the hiring process. Remember that the employers have not experienced your work yet, and only words or phrases and some evidence can help them gauge the kind of employee you would be. In this digital era, companies are pre-scanning resumes electronically and point out the job nouns they are looking for. Among other things, they use this to call in candidates for interviews. The right choice of words can be your ticket to your dream job: do not underestimate the power of keywords in resumes.</p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/keywords-to-include-on-a-resume"}
                                        quote={"Keywords to Include on A Resume"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/keywords-to-include-on-a-resume"}
                                           title={"Keywords to Include on A Resume"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/keywords-to-include-on-a-resume"}
                                            title={"Keywords to Include on A Resume"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/keywords-to-include-on-a-resume"}
                                            title={"Keywords to Include on A Resume"}>
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