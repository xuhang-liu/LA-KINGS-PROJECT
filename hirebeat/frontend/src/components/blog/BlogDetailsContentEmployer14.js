import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer14 extends Component {
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
                                                    <a>May 03, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Five Questions You Need to Ask to Hire the Best Intern</h2>
                                    <p>
                                    Hiring an intern can be a challenge because you may not know the right interview questions to ask them. You cannot ask them the same questions you would ask experienced professionals. However, you have to assess their interest in your company, and if they have the right abilities and can be good fits for your team. This article includes five key questions you should ask your interns during the interview.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer14-pic.jpg" alt="internship, campus recruitment, campus recruiting, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">1. Why do you want an internship in this company?</h3>
                                    <br/>
                                    <p>
                                    This question will help you get the ideal person who wants to be part of your team. Some students may just need the internship and will take it anywhere they can get it. The best intern wants the position because they are excited to learn things in your industry, they respect your organization’s mission and vision, and are really compelled to join your team.
                                    </p>
                                    <h3 className="mb-0">2.	What skills are you aiming to develop during the internship?</h3>
                                    <br/>
                                    <p>
                                    You have to establish what the potential intern is looking for and figure out if your company can provide it. Based on what they intend to learn, you can also identify if the organization will benefit from their time there. A candidate with a well-thought-out response can assure you that they will learn and help the company in a certain way.
                                    </p>
                                    <h3 className="mb-0">3.	What do you know about our company and industry?</h3>
                                    <br/>
                                    <p>
                                    Any candidate who has an interest in the internship will have done their research. They will have details about the company and the industry in general. A good candidate will tell how they find the company’s mission interesting and how it aligns with their personal goals.
                                    </p>
                                    <p>
                                    The candidate may have identified a program that they are interested in and can develop extra ideas. They can also ask questions concerning the company, showing their ability to think critically and process the information they learn.
                                    </p>
                                    <h3 className="mb-0">4.	Does this work excite you?</h3>
                                    <br/>
                                    <p>
                                    Your ideal intern will not only reply “yes.” They will explain why they can derive happiness from the job. An intern who is happy with the work will stay engaged, be more productive, and benefit the company more. They will push themselves to learn, develop better skills, and turn into reliable employees.
                                    </p>
                                    <p>
                                    If they do not tell you why they draw happiness from the job, you can be rest assured that they only need the internship for money or to have a job. Such interns can be ineffective once you hire them.
                                    </p>
                                    <h3 className="mb-0">5.	What strengths and weaknesses are you bringing, and how will you improve on both?</h3>
                                    <br/>
                                    <p>
                                    The question aims at assessing the student’s self-awareness. An honest response will show that the candidate understands themselves and can improve. Honesty is also a valuable asset at the workplace.
                                    </p>
                                    <p>
                                    A prepared response may show you that the student is somehow cunning and may not be willing to improve themselves while at work. They may turn out to be ineffective.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    The interview questions should aim at helping you understand the prospective intern and their willingness to learn and improve themselves. The intern should also show an interest in the job and how they will benefit the company. HireBeat is a hiring platform that provides digital video interview that aims to help companies find the best candidates. To know more about us, please visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern"}
                                        quote={"Five Questions You Need to Ask to Hire the Best Intern"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern"}
                                           title={"Five Questions You Need to Ask to Hire the Best Intern"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern"}
                                            title={"Five Questions You Need to Ask to Hire the Best Intern"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern"}
                                            title={"Five Questions You Need to Ask to Hire the Best Intern"}>
                                            <a target="_blank">
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

export default BlogDetailsContentEmployer14;