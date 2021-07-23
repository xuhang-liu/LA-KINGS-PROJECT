import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer26 extends Component {
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

                                    <h2>Streamline Hiring Flow: 5 Things You Need To Know About Applicant Tracking System</h2>
                                    <p>
                                    If we look back to older times when computers were not that popular or when they were slowly becoming more common in offices, schools, and homes. Life was different back then. It took longer to get certain tasks done which we can do in a matter of minutes now.
                                    </p>
                                    <p>
                                    For example, let’s take the example of the hiring process that companies used previously. In the past, hiring new employees took a great amount of time and effort and by the time the hiring team could finalize someone, there was always this possibility that they might have been hired at another company.
                                    </p>
                                    <h3 className="mb-0">Applicant Tracking System (ATS)</h3>
                                    <br/>
                                    <p>
                                    The introduction of the Applicant Tracking System has made life easier for recruiters as they no longer have to go through the tough process of going through countless resumes and deciding who is a suitable candidate for the job.
                                    </p>
                                    <p>
                                    You may be wondering what features the ATS provides you with and why you should use it. Here are some features that you will not be able to enjoy if you do not use the ATS to help campus recruitments.
                                    </p>
                                    <h3 className="mb-0">1.	Faster and Efficient Screening of Candidates</h3>
                                    <br/>
                                    <p>
                                    With ATS you no longer have to worry about going through tons of CVs to find the perfect person for the job. You can put your requirements in the system and it will choose the most suitable individual amongst the pool of applications.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Time-Saving</h3>
                                    <p>
                                    As mentioned previously, because the ATS can help recruiters shortlist the best candidates, it saves time and helps to put that saved time into being more productive and strategizing it in another department.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3.	Speeds Up the Recruitment Process</h3>
                                    <p>
                                    With the ATS, hiring managers can speed up the recruitment process by easy and efficient job postings on multiple platforms, from collecting the candidate’s data to starting the hiring process and selecting the best person for the job.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4.	Makes the Brand Appealing</h3>
                                    <p>
                                    People applying for jobs usually appreciate it when companies get back to them in a short while. It makes it convenient and appealing. Using the ATS also comes with other advantages such as excelling in the competitive market because your recruitment process is much more efficient and faster.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">5.	Improves the Quality of Hiring</h3>
                                    <p>
                                    With the ATS system, you can get the most suitable candidates to hire so that you do not have to compromise on the quality. You can add your requirements in the ATS system and it will scan all the data it receives and then pick out the best possible individuals who can then be interviewed and hired.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <p>
                                    ATS system will not only help your company be more efficient with the recruitment process but will also ensure that you can skip the process of going through numerous applications and leave a chance of error, i.e. choosing the wrong person or a less competent person for the job.
                                    </p>
                                    <p>
                                    The ATS system will also reduce business costs as the company no longer has to form a whole recruitment team but 2 to 3 people can carry out the whole process and save time and money.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system"}
                                        quote={"5 Things You Need To Know About Applicant Tracking System"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system"}
                                           title={"5 Things You Need To Know About Applicant Tracking System"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system"}
                                            title={"5 Things You Need To Know About Applicant Tracking System"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system"}
                                            title={"5 Things You Need To Know About Applicant Tracking System"}>
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

export default BlogDetailsContentEmployer26;