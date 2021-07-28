import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer11 extends Component {
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
                                                    <a>April 23, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How Covid Has Changed the Recruitment Process</h2>
                                    <p>
                                    The Coronavirus pandemic has changed people's way of life, from going to work to interacting with friends. The world has experienced a huge shift for the past few months. This pandemic has not only changed people’s daily life, but also has also changed the way people search for jobs and how organizations hire new employees. That's why it is important for companies and candidates who are in the job search to understand the changes and identify the new norm they will bring forward during the Covid-19 pandemic. Here are 3 ways the Coronavirus pandemic has changed the hiring process.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer11-pic.jpg" alt="recruitment, campus recruiting, job, interview, strategy, millennials. Virtual, onboard, candidate, job fair, New York, NYC, California, Texas" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">The Virtual Interview Has Become Usual</h3>
                                    <br/>
                                    <p>
                                    Due to the lockdown and quarantine policies, people are forced to work from home. Also, the process of hiring is changing. That's why new technologies are coming up to accommodate the trend of virtual interviews.
                                    </p>
                                    <p>
                                    Although it can be challenging to engage in a virtual interview, most companies view this method as the best option for recruiting the best candidate. This recruitment method is beneficial to all parties as it will prevent the recruiters and the candidates from the Covid-19 virus. It is also cost-effective and time-saving as the two parties will not have to travel to engage in the interview. With a smartphone and strong internet connection, you can access interviewing tools such as Zoom, Skype, Micro-soft teams, and Go-To-meeting.
                                    </p>
                                    <h3 className="mb-0">Companies Hire Candidates from Any Location</h3>
                                    <br/>
                                    <p>
                                    Due to Covid-19, many companies have shifted their work to online operations. During the recruitment process, the employers do not consider only those near their geographical location: people from all over the world can apply for a job in any place.
                                    </p>
                                    <p>
                                    Hiring international candidates is a good way of widening your talent pool. With this, you will have employees with specialized skills, and diversity could help you achieve greater competitiveness. The good thing about hiring international candidates is that you will allow your organization to break into new markets in different countries. Also, international employees can help you overcome the issue of language barrier.
                                    </p>
                                    <h3 className="mb-0">Virtual Onboarding</h3>
                                    <br/>
                                    <p>
                                    Recruiting does not only involve getting information about the candidate. You should allow the job searcher to learn more about your organization. But how will you achieve this? Virtual onboarding will allow the candidate to have an overview of your organization's mission, values, and goals.
                                    </p>
                                    <p>
                                    This process allows you to engage potential candidates regardless of their location. Although virtual onboarding goes hand in hand with in-person onboarding, many organizations turn to 100% virtual onboarding due to Coronavirus Pandemic. Thus, it is good to have sessions that explain your business culture and a guide that will teach the candidates how to download the applications or any program they might require.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    Although some precautions you take during the hiring process might take off amid Covid-19, virtual onboarding and virtual interview will be most likely to remain because they are efficient ways of recruitment. HireBeat is an HR software company that provides virtual video interviews to your business and match you with the perfect candidates. To know more about us, please visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-how-covid-has-changed-the-recruitment-process"}
                                        quote={"How Covid Has Changed the Recruitment Process"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-how-covid-has-changed-the-recruitment-process"}
                                           title={"How Covid Has Changed the Recruitment Process"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-how-covid-has-changed-the-recruitment-process"}
                                            title={"How Covid Has Changed the Recruitment Process"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-how-covid-has-changed-the-recruitment-process"}
                                            title={"How Covid Has Changed the Recruitment Process"}>
                                            <a target="_blank" rel="noreferrer">
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

export default BlogDetailsContentEmployer11;