import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent29 extends Component {
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
                                                    <a>Jun 18, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>HireBeat Blog – The 4C's That You Need for Your Resume</h2>
                                    <p>
                                    Thousands of job opportunities are made available to people around the globe, and hundreds of them are being added every minute. Numerous people apply for the same job, and it is just not viable for the hiring committee to hire everyone. There should be selective criteria in place that can help employers assess the candidates' strengths by studying their resumes.
                                    </p>
                                    <p>
                                    According to the experts, you need 4C's to stand out of the competition and become a primary choice for the hiring committee, and these are as follows:
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog29-pic.jpg" alt="Resume Optimization, ATS resume checker, how to write a resume" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">1.	Creativity</h3>
                                    <p>
                                    It is not necessary that you must have a background working in a creative field, and neither is the definition of creativity. At its heart, creativity is all about thinking and building your thoughts towards an idea, and when you have one, then trying your best to make it real; this is what creativity is all about.
                                    </p>
                                    <p>
                                    It is making things more meaningful than these are at the moment; it is about creating value for the industry that you work with in terms of doing things faster, making procedures chapter or anything that contributed towards adding a sense of value, and it should be made an important aspect in your resume. You can, for example, write about those times when your creative thinking helped solving an issue or added value to your company.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Communication</h3>
                                    <p>
                                    Communication is the second C that you need to be able to become a unanimous choice of all hiring members when they lay their eyes on your resume. You need to share your ideas and thoughts in a way that feels narrative but not fluff or misleading in any way. And more importantly, you should be an avid listener; this is something that not many people can do and is a true essence of communication.
                                    </p>
                                    <p>
                                    Communication is not just listening, although being open-minded to other's suggestions while sitting or sharing thoughts with a bunch of people will definitely strengthen your communication. You also need to show that you have the ability to negotiate, give constructive feedback, and being able to convince others with empathy.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3.	Collaboration</h3>
                                    <p>
                                    Having an idea and sharing it with the rest of the team only adds value to creativity and communication, the two Cs that you already know about. Collaboration is the third and most important in terms of putting things into action. Collaboration in a working environment is when you are ready to work with others towards achieving a mutual goal.
                                    </p>
                                    <p>
                                    Collaboration is not just about being a leader. Instead, you could play different roles in a team such as a coordinator or a good listener, and give specific examples of how you helped the team achieve its goal. You can use some hard numbers to tell your story such as “Led a team of five people” or “Coordinated with two departments cross functionally”. Also, how well you are at handling stress and shining through every notion of pressure tells your ability to collaborate. Through your resume, communicate that you are an avid enthusiast ready to take on the action whenever needed and collaborate with your colleagues towards the mutual benefit of the company.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4.	Critical thinking</h3>
                                    <p>
                                    You might have analyzed that all the Cs mentioned here correspond or add value to one another. Critical thinking might be the last, but it is not the least in any way and just might be the section an employer would weigh the most in your resume. In its literal definition, critical thinking is about problem-solving, thinking outside of the box to develop new ideas for the problems you are facing. But it is also about looking within the box being logical and confident in your doing while keep open-minded to other's views regarding a specific problem. In your resume, include experiences that show your critical thinking ability by identifying the problem, collecting the data, developing the solution, and analyzing the performance <b>objectively</b>.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Departing thoughts</h3>
                                    <p>
                                    These are all the Cs that can represent your case in a better way before a hiring committee. You should also be open to new things that allow you to craft new skills. Make these experiences part of your resume and continue to update it as much as possible. HireBeat provides the resume optimization service supported by AI to help you get the job you want. To get personalized feedback now, visit <a href="/resume">https://hirebeat.co/resume</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-the-4c's-that-you-need-for-your-resume"}
                                        quote={"HireBeat Blog – The 4C's That You Need for Your Resume"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-the-4c's-that-you-need-for-your-resume"}
                                           title={"HireBeat Blog – The 4C's That You Need for Your Resume"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-the-4c's-that-you-need-for-your-resume"}
                                            title={"HireBeat Blog – The 4C's That You Need for Your Resume"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-the-4c's-that-you-need-for-your-resume"}
                                            title={"HireBeat Blog – The 4C's That You Need for Your Resume"}>
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

export default BlogDetailsContent29;