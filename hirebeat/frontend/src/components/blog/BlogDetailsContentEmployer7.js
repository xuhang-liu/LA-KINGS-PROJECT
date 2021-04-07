import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer7 extends Component {
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
                                                    <a>April 07, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Millennials? We Want You!</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer7-pic.jpg" alt="interview, millennials, hiring, creativity, loyalty, workplace, career, job, HireBeat" />
                                    </div>
                                    <br/>
                                    <p>
                                    When it comes to recruiting new talent, it is important to do it in a way that pays attention to the success of the new talent, especially millennials. You want to benefit from their numeral ideas, and also want them to stay longer at your workplace.
                                    </p>
                                    <p>
                                    Here are the most crucial qualities that you need to look out for when hiring. Pay close attention to them if you wish to attract more millennials that bring real value to your workplace and positively influence others around them.
                                    </p>
                                    <h3 className="mb-0">1.	A desire to become better</h3>
                                    <br/>
                                    <p>
                                    It is quite challenging to achieve success if you don’t have the desire to become better. As you get ready to bring new talent to your business, you are most likely eager to benefit from new ideas brought in by the millennials.
                                    </p>
                                    <p>
                                    Let’s just say that hiring someone who doesn’t exhibit a drive to succeed will be frustrating for you. As you hire a new workforce, pay attention to what they have achieved in the past. Consider what they did in the past. Endeavors such as volunteer work and internships point you out to a millennial who will not only be diligent but also ambitious.
                                    </p>
                                    <h3 className="mb-0">2.	Willingness to learn new things</h3>
                                    <br/>
                                    <p>
                                    Millennials possess an incredibly attractive quality: they are eager to succeed, which increases their desire to learn.
                                    </p>
                                    <p>
                                    When seeking applicants in this talent group, go for those who demonstrate a desire to get familiar with an in-depth look into how businesses operate.
                                    </p>
                                    <p>
                                    Millennials who are paying attention to your business and asking questions are your best bet. This indicates they are keen on your company and would want to be a growth factor in its future.
                                    </p>
                                    <h3 className="mb-0">3.	They don’t show fear when asking questions</h3>
                                    <br/>
                                    <p>
                                    How can you know that a millennial will be prosperous? Observe their questions.
                                    </p>
                                    <p>
                                    When an applicant fails to ask questions as you interview them, it could mean that their main interest is the paycheck and not their career.
                                    </p>
                                    <p>
                                    Millennials that want to succeed are likely to inquire about information by asking logical questions. Interestingly, most of their questions cover topics that you wouldn’t ask readily or think about.
                                    </p>
                                    <p>
                                    Be vigilant of your candidate’s questions and assess their nature. Compare them to the questions that you receive while conducting standard interviews. Consider whether they demonstrate an ability to think outside the box or invoke introspection.
                                    </p>
                                    <h3 className="mb-0">4.	Keeping your workforce engaged</h3>
                                    <br/>
                                    <p>
                                    Millennials want assurance that their organization cares for them, just like they care about their place of work. By letting them in or getting them involved in the daily activities of the organization, they will surely put more effort into realizing the company’s goals and objectives.
                                    </p>
                                    <p>
                                    You can engage millennials by introducing a few ingenious incentives in the workplace. Asking their opinion on plans and goals that affect the whole firm and letting them participate in decision making can bring out the passion for their jobs.
                                    </p>
                                    <p>
                                    They are also interested in knowing the quality of their work. Commend them for excellent results and suggest areas that can be improved without appearing as if you are micro-managing them.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    Millennials are reshaping the world and it is crucial for you, as a recruiter, to create a more welcoming workplace for them. The above article should bring you some insights and help you enter the millennial generation. HireBeat helps employers find the best candidates and facilitates hiring progress. To learn more about us, visit <a href="/employer">www.hirebeat.co/employer</a>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-millennials-we-want-you"}
                                        quote={"Millennials? We Want You!"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-millennials-we-want-you"}
                                           title={"Millennials? We Want You!"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-millennials-we-want-you"}
                                            title={"Millennials? We Want You!"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-millennials-we-want-you"}
                                            title={"Millennials? We Want You!"}>
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

export default BlogDetailsContentEmployer7;