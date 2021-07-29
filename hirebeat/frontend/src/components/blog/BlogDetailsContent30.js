import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent30 extends Component {
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
                                                    <a>Jul 21, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>10 Impactful Ways To Update Your Resume For 2021</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog30-pic.jpg" alt="Resume format and layout" />
                                    </div>
                                    <br/>
                                    <p>
                                    Hiring trends have changed. In the past, interviews were held manually and in person, but the year 2020 brought many changes to this norm. Recruiters have now started using hiring software, and resumes have become the most popular tool to select potential candidates. So, if you want to impress employers, it’s time for you to upgrade your resume as well.
                                    </p>
                                    <p>
                                    But remember, resume trends come and go, and it is best if you stay up to date with these trends to improve your chances of getting hired.
                                    </p>
                                    <p>
                                    To help you make an impressive resume, here are 10 impactful ways to update your resume for 2021.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">1.	Update To A Modern Design</h3>
                                    <p>
                                    Updating the appearance of your resume is one of the most effective ways to give it a lift. There are hundreds and thousands of free resume templates available online. Find one that is enjoyable to read, has a modern design, and is compatible with application tracking systems.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Use A Hybrid Resume Format</h3>
                                    <p>
                                    Recruiters look over resumes for roughly 6-7 seconds before judging if the applicant is a good fit. That means you'll need to get to the good stuff, such as your abilities—at the top. A hybrid resume (combination of reverse chronological and functional formats) helps recruiters quickly assess your qualifications and is one of the ideal resume styles for today's employment market.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3.	Put A Headline At The Start</h3>
                                    <p>
                                    It’s vital to understand the significance of an excellent resume headline. A well-crafted headline will aid you in grabbing the attention of busy recruiters. Describe yourself to a recruiter in ten words or less.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4.	Write Resume Summary Instead Of Objective Statement</h3>
                                    <p>
                                    In older resume templates, you used to include an objective at the start. But now it’s not a requirement anymore. Now, you can write a compelling summary. This should be a summary of your primary abilities and experience that can swiftly explain who you are as an employee to the recruiter.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">5.	Make It Simple To Skim Over Your Experience Area</h3>
                                    <p>
                                    Recruiters just give each resume a few seconds of their time. As a result, you should avoid using huge blocks of text or too many bullet points. To emphasize that you are the right match for the job, condense everything as much as possible and use an acceptable number of bullets.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">6.	Add Your Remote Working Skills To Your Resume</h3>
                                    <p>
                                    Remote working skills have become desirable since March 2020. So, it’s a good idea to include any work-from-home skills in your job application. If the job description mentions any remote work, include collaboration tools like Google Docs, Trello, etc., on your resume where applicable.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">7.	Make A Point Of Your Efforts During COVID</h3>
                                    <p>
                                    Make sure to mention how you worked through COVID-19, particularly your resilience. For example, how did you expand on your working experience? What new tools and skills did you pick up? Or how did you keep your company afloat?
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">8.	Remove Any Outdated Phrases</h3>
                                    <p>
                                    Your resume likely contains out-of-date terminology. So, replace outdated words with industry keywords, particularly if they are stated in the job description.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">9.	Put Some Action Words</h3>
                                    <p>
                                    In 2021, recruiters have a pile of resumes to go through. So, to get attention and enliven your resume, use action verbs. Scan for passive voice and replace it with active voice wherever possible.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">10. Make Your Resume Compatible With Applicant Tracking Systems</h3>
                                    <p>
                                    Don't get lost among the stacks of resumes. Customize your resume according to the job description and make sure it's formatted correctly for Applicant tracking system parsing.
                                    </p>
                                    <p>
                                    Ending paragraph: There you have it; our top 10 resume making tips to have an impressive job application that will surely impress the readers, improving your chances of getting hired.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-10-impactful-ways-to-update-your-resume-for-2021"}
                                        quote={"HireBeat Blog – 10 Impactful Ways To Update Your Resume For 2021"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-10-impactful-ways-to-update-your-resume-for-2021"}
                                           title={"HireBeat Blog – 10 Impactful Ways To Update Your Resume For 2021"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-10-impactful-ways-to-update-your-resume-for-2021"}
                                            title={"HireBeat Blog – 10 Impactful Ways To Update Your Resume For 2021"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-10-impactful-ways-to-update-your-resume-for-2021"}
                                            title={"HireBeat Blog – 10 Impactful Ways To Update Your Resume For 2021"}>
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

export default BlogDetailsContent30;