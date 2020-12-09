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
                                                    <a>November 02, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Tips for Getting Your Resume Past an Applicant Tracking System</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog9-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    With advancements in technology, candidates have much more to worry about other than the recruiter’s judgment. Today, three-quarters of the companies are using applicant tracking systems to go through resumes before they engage an applicant.</p>
                                    <p>
                                    Why are employers increasingly using resumes because of the number of applications they get for every recruitment. With the limited time, employers have to look for candidates to interview. They need all the help they can get. The ATS system helps recruiters sort the resumes and prioritize ones that best fit the discussion's role. They also help employers narrow down their options to the most qualified applicants. The system works by scanning the keywords that match the job post.</p>
                                    <p>
                                    The chances of getting hired increase when you can face the interviewing panel. That is why you need to get through an applicant tracking system (ATS). Here are tips that will help you get through the system and to the hiring panel.</p>
                                    <br/>

                                    <h3 className="mb-0">1. Apply for jobs that you qualify for</h3>                                    
                                    <p>Most people are guilty of sending applications knowing very well that you do not qualify for the role. The reason why you have not been called for interviews is probably because you apply for jobs that require five years’ experience while you have one-year experience. Note that the system can track this information and pick out candidates that have this qualification. For the ATS to accept your application, you should match the job requirements. Apply for jobs that you qualify for if you want to appeal to the ATS.</p>
                                    <h3 className="mb-0">2. Use relevant keywords</h3> 
                                    <p>Not many applicants know this, but using relevant keywords when applying for jobs is critical. The ATS resume system algorithms rely on keywords to pick candidates that match the job posting. Your choice of words and phrases, therefore, will bring you closer to your dream job.</p>
                                    <p>How do you select keywords to use in your resume? Well, it is pretty simple. You can get them from the job description. Look at the specific job requirements, academic credentials, competencies, and skills required, and use them in the resume to describe why you are the perfect fit for the job. Examples of the keywords that the ATS looks for include: committed, team player, dedicated, innovated, or created, and much more.</p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog9-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">3. Write a simple resume</h3> 
                                    <p>It might be tempting to write sophisticated resumes with enhanced graphics and language as they may appear more appealing to the hiring manager. Well, while this might be the case, the application tracking system might have a hard time understanding it.</p>
                                    <p>This means that getting through the ATS will be challenging as the system may not be able to process the content quickly.</p>
                                    <h3 className="mb-0">Take away</h3> 
                                    <p>It is always important to follow the hiring company's instructions regarding the submission of the resumes. Submit the resume in the requested format, be it in PDF or Word. If you don’t do things the right way, the chances are the system will not read the document at all or accurately.</p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/tips-for-getting-your-resume-past-an-applicant-tracking-system"}
                                        quote={"Tips for Getting Your Resume Past an Applicant Tracking System"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/tips-for-getting-your-resume-past-an-applicant-tracking-system"}
                                           title={"Tips for Getting Your Resume Past an Applicant Tracking System"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/tips-for-getting-your-resume-past-an-applicant-tracking-system"}
                                            title={"Tips for Getting Your Resume Past an Applicant Tracking System"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/tips-for-getting-your-resume-past-an-applicant-tracking-system"}
                                            title={"Tips for Getting Your Resume Past an Applicant Tracking System"}>
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