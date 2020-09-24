import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';
import blog3pic from '../../assets/blog3-pic.jpg';

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
                                                    <a>September 11, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Prepare for an AI Interview</h2>

                                    <div className="article-image">
                                    <img src={blog3pic} alt="image" />
                                    </div>

                                    <p>
                                        <i><b>Meta Description: </b>AI interviews are taking momentum in the corporate world. Get tips on how you can prepare for a successful AI interview.</i>
                                    </p>
                                    <p>
                                    Job hunting is not a piece of cake. We are talking about landing an opportunity that matches your skills, creating a resume that will earn you an interview, and impressing the interviewing panel. It takes some work to land a dream job. Companies are today incorporating AI technology in their recruiting process, and you should anticipate an AI Interview.
                                    </p>
                                    <p>
                                    AI Interviews are characterized by prerecorded videos, writing or drawing, and simple text. As AI interviews continue to take momentum, job seekers need to equip themselves with knowledge on how they can crack the interviews. There is no other secret to this other than preparation.
                                    </p>
                                    <p>
                                    Here are tips that will help you get ready for an AI interview.
                                    </p>
                                    <br/>

                                    <h3 className="mb-0">1. Work on your soft skills</h3>                                    
                                    <p>The soft skills HR looks for vary depending on the job title. However, they are a critical part of employee assessment in a job interview. AI interview tools have been programmed to test soft skills, including, but not limited to, stress tolerance, persuasiveness, teamwork, communication skills, and leadership.</p>
                                    <p>Note that the corporate world is fast-changing and remote work is becoming more common. Employers are looking for candidates that are independently motivated and can handle their work remotely. Soft skills aligned with the modern workplace are essential for such interviews, and you need to brush them up.</p>

                                    <h3 className="mb-0">2. Prepare on how you can share your experience</h3> 
                                    <p>AI interviews are quite different from others. The goal of the interview is to assess how you will perform if given the opportunity. So, this is not the time to read out your resume. It is already self-reporting, and the employer is looking for something more. Do not let the opportunity pass you by holding back the indicators of your skills.</p>
                                    <p>Share your interview related real-life experiences. Artificial intelligence will then, from the experiences, predict whether the skills you possess indicate excellent performance in the future.</p>

                                    <h3 className="mb-0">3. Look professional</h3> 
                                    <p>Remember that as much as it is AI, it is still an interview, and you have to look professional. Not only will your dressing work to impress your employer, but it can also benefit you. A professional dress code will keep you in the right formal headspace and give you the confidence to nail that interview.</p>
                                    <p>The appropriate dressing will also say something about your reliability and ability to conform to workplace policies even when no one is monitoring you. When doing an AI interview, avoid whites as they tend to wash out a person. Try out different colors on the mirror before you settle for one for the session.</p>

                                    <h3 className="mb-0">Take away</h3> 
                                    <p>During the interview, avoid looking away and always maintain eye contact. Maintain an upright sitting posture and be very articulate and audible. These are some of the things that the employer will be assessing. With proper preparation and the above tips on how to improve interview skill, nothing can stop you from securing that position. Also, note that AI interviews are designed as per the field of the post. Make sure that you do enough research to enter the interview with all the information you need and confidence.</p>

                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-details3"}
                                        quote={"How to Prepare for an AI Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-details3"}
                                           title={"How to Prepare for an AI Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-details3"}
                                            title={"How to Prepare for an AI Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-details3"}
                                            title={"How to Prepare for an AI Interview"}>
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