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
                                                    <a>March 18, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Good Questions to Ask the Employer at the End of The Interview</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog23-pic.jpg" alt="interview, jobs, job interview, recruiting, hiring, interview tips" />
                                    </div>
                                    <p>
                                    Interviews should not be just about reciting the answers to the questions you've been rehearsing for the longest time. You should converse with your potential employers, build a good relationship, impress while gathering important details.
                                    </p>
                                    <p>
                                    Interviews can be so stressful because as much as you've done in-depth research and preparation, employers might ask hard questions. It's important to prepare beforehand and be careful to give out intelligent answers. Otherwise, you'll end up looking awkward even though you're an impressive candidate for the job.
                                    </p>
                                    <p>
                                    As much as the interview is important to the employers, so it is to you. Therefore, preparing some good questions to ask your interviewers back will help you stand out and make a good impression.
                                    </p>
                                    <p>
                                    Here are some good questions to ask the employer at the end of the interview:
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">1. What will I be tasked to do on a typical day?</h3>
                                    <p>
                                    Asking this kind of question will prompt the interviewer to provide more information about the role. When jobs are advertised, sometimes important details can be left out of the job description, particularly what you'll be doing on a typical day.
                                    </p>
                                    <p>
                                    This question will enable you to fish out more details about the role you're seeking. You shouldn't be afraid to ask them to explain anything you don't quite understand.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2. Is there an opportunity for growth?</h3>
                                    <p>
                                    This type of question showcases your ambition to succeed, helping you show the consciousness of your future career and the intention to stick with the company.
                                    </p>
                                    <p>
                                    Being aware of the prospects of progressing up the company is necessary since you wouldn't want to get into the company, only to realize there are no opportunities for growth.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3. What is the company culture?</h3>
                                    <p>
                                    You should pay attention to the employer's response to the company culture and core values. This will enable you to get a good grasp of whether the company values its staff and cares for their well-being.
                                    </p>
                                    <p>
                                    Part of the company culture involves working with different people, which can either affect your job or help you be productive. So, knowing this will enable you to ascertain whether the company's working style suits your lifestyle.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4. Are there any pieces of training involved? How do you measure employees' performance?</h3>
                                    <p>
                                    Posing this question to your employees will indicate your level of seriousness with the job. It showcases that you want to develop your skills and you want to be successful in your new role.
                                    </p>
                                    <p>
                                    Besides, it helps you to understand how the role is structured and if it fits in with development and progression.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">5. What's so unique about working in the company?</h3>
                                    <p>
                                    The interviewer will get an opportunity to explain the uniqueness of the company while providing more insight into their working culture. Further, ask about their personal experiences working with the company, to build a good rapport as it shows you care for them.
                                    </p>
                                    <p>
                                    Hopefully, most employers will be proud to share their experiences by telling you how they enjoy working with the company.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <p>
                                    Asking the aforementioned questions at the end of the interview will enable you to decide whether the job suits your lifestyle. Always remember that interviews are meant to be about good conversations, building a good rapport, creating a good impression, and gathering the necessary information. Therefore, make great use of these questions to stand a better chance of winning your dream job.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview"}
                                        quote={"Good Questions to Ask the Employer at the End of The Interview"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview"}
                                           title={"Good Questions to Ask the Employer at the End of The Interview"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview"}
                                            title={"Good Questions to Ask the Employer at the End of The Interview"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview"}
                                            title={"Good Questions to Ask the Employer at the End of The Interview"}>
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