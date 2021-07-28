import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer3 extends Component {
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
                                                    <a>March 22, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Writing a Good Job Posting that Will Attract Employees</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer3-pic.jpg" alt="hiring, recruitment, job, interview, human resources" />
                                    </div>
                                    <br/>
                                    <p>
                                    Hiring is a careful process. Hiring the wrong candidate would not only cost company a lot resources such as time and money, but also reduced the overall efficient on company’s day-to-day operations. Often, the working relationship gets toxic, and the company have to make a hard decision parting way. Regardless of the level of experience and top qualifications, someone may not be an excellent fit for your company's job posting.
                                    </p>
                                    <p>
                                    But you can avoid the hectic process from the onset. it's possible to write high-quality job descriptions that is most likely to attract perfect candidates.
                                    </p>
                                    <p>
                                    We've provided great tips in this blog post to help you develop job descriptions that attract top talent.
                                    </p>
                                    <h3 className="mb-0">Why is it so important to write a job description?</h3>                                    
                                    <p>
                                    Creating a thorough job description enables employers to showcase the accurate details about the job and the positions available, reducing the chances of hiring the wrong candidate.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Writing a good job posting that attracts the suitable candidates</h3>                                    
                                    <p>
                                    It's imperative to write a good job posting because company cultures and working environments are growing. Therefore, providing adequate information about the job posting and company culture will attract top talent.
                                    </p>
                                    <p>
                                    Keep the following tips in mind:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                <b>Provide adequate information but keep it concise</b>: keep the job descriptions between 700-2000 words while ensuring it's catchy and showcases the day-to-day working life in your company.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <b>Seek input from the employee department</b>: These individuals know the job better. You can ask them the kind of qualities they'd need in a coworker to include in the job description.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <b>Include the job posting salary</b>: Providing a salary range enables you to find candidates willing to learn and grow with your company.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <b>Ask candidates to provide unique cover letters</b>: Some of the cover letter's information might not be in the resume. You'll be able to know their unique qualities and what they expect in a workplace.
                                            </p>
                                        </li>
                                    </ul>
                                    <br/>
                                    <h3 className="mb-0">Examples for inspiration</h3> 
                                    <br/>
                                    <h3 className="mb-0">1. Bad example</h3> 
                                    <p><b>Customer Service Representative</b></p>
                                    <br/>
                                    <ul>
                                        <li>
                                            <p>
                                            Receiving calls 
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Greeting customers  
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Assisting the manager as much as possible 
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Compensation upon interview  
                                            </p>
                                        </li>
                                    </ul>                        
                                    <p>
                                    Using too general description and a vague tone in the job description will limit the information you need to provide, such as qualifications required and whether you'll compensate them or not.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2. Good Example</h3> 
                                    <p>
                                    This is what you should do:
                                    </p>                                   
                                    <p>
                                    <b>Join our Call Centre Office as a Customer Service Representative</b>
                                    </p>
                                    <p>
                                    We're a dynamic Tele-Communications Company in Washington, looking for motivated individuals to join our adept team. Our top priority is customer service satisfaction and individuals who can showcase top teamwork coordination skills.
                                    </p>
                                    <p>
                                        <b>Job duties:</b>
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                            Making calls to set appointments and checking the company's emails constantly.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Greeting customers when they arrive and offering the help they need.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Coordinating with other employees by phone.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Responding to customers' queries accordingly. 
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                            Compensation is set at 15$ per hour but can be improved depending on experience level. 
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                    This example informs the candidate that it's a busy workplace, and he/she will need to work with other employees to handle things effectively. Besides, it's easy for them to decide whether the salary is right for them or not.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion</h3>                                    
                                    <p>
                                    The above tips and examples should help you create a thorough job description to attract the right employees. Moreover, HireBeat provides the candidate’s resume to job-position match; where hiring manger can receive a detail keywords on candidates resume that matches with the job description posted, so that the hiring manger can make a better judgement on candidates qualification even faster than before.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-writing-a-good-job-posting-that-will-attract-employees"}
                                        quote={"Writing a Good Job Posting that Will Attract Employees"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-writing-a-good-job-posting-that-will-attract-employees"}
                                           title={"Writing a Good Job Posting that Will Attract Employees"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-writing-a-good-job-posting-that-will-attract-employees"}
                                            title={"Writing a Good Job Posting that Will Attract Employees"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-writing-a-good-job-posting-that-will-attract-employees"}
                                            title={"Writing a Good Job Posting that Will Attract Employees"}>
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

export default BlogDetailsContentEmployer3;