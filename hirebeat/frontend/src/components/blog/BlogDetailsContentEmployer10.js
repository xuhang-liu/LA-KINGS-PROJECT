import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer10 extends Component {
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
                                                    <a>April 19, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Four Tips to Build a Successful Campus Recruiting Strategy</h2>
                                    <p>
                                    When businesses need to fill talent gaps, the go-to option is recruiting on campus. Getting fresh talents from college enables organizations to guarantee the future of their business activities. The move also raises the credibility of the firm as a potential employer. To ensure that you get the best candidates from a campus setup, there is a need to adopt fresh strategies. Here are tips for recruitment on campus.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer10-pic.jpg" alt="campus recruitment, campus recruiting, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">Be appealing to younger candidates</h3>
                                    <br/>
                                    <p>
                                    To get more college graduates to view your business as a potential employer, you need to be appealing to them. In the U.S., the largest portion of the workforce consists of people aged between 21 and 36.
                                    </p>
                                    <p>
                                    These young candidates seek employment opportunities that are quite different from what most organizations provide. Most of them believe that the opportunities that suit them are on social media platforms such as LinkedIn and Twitter.
                                    </p>
                                    <p>
                                    To find them, recruiters need to utilize the power of these platforms to screen the large pool of candidates and find those that are relevant.
                                    </p>
                                    <h3 className="mb-0">Creating long-standing relationships</h3>
                                    <br/>
                                    <p>
                                    Recruiting is more of a long-term activity. If companies want college recruiting to work for them, they have to establish good relationships with the career services department, professors, members of the placement center, and even student organizations. Many career-oriented students join groups to get them connected to employment opportunities. By combining multiple methods of recruitment, employers can assess the interest levels, skills, and initiative of potential employees.
                                    </p>
                                    <h3 className="mb-0">Put more effort than your competitors</h3>
                                    <br/>
                                    <p>
                                    Some applicants might never approach the career center in their university. By organizing a forum where you meet and mentor students, you can connect with them at an advanced level. This approach may take the form of mock interviews, career fairs, job shadows, and invitations to business premises for a quick tour.
                                    </p>
                                    <p>
                                    During the job fairs, it would help to have a few key employees from your company speak to the students. When applicants get an inner look into what working in your company entails, they are likely to become interested in working for you.
                                    </p>
                                    <h3 className="mb-0">Focus less on their GPA</h3>
                                    <br/>
                                    <p>
                                    It is common for employers to consider candidates with a higher GPA because they are thought to learn faster and have higher chances of succeeding at work.
                                    </p>
                                    <p>
                                    But this criteria is not as foolproof as it is thought to be. According to recent findings, test scores and GPA have no great impact on how an applicant will perform when hired.
                                    </p>
                                    <p>
                                    It is important for organizations looking to hire campus talent to increase their scope. The long-term relationships that we talked about earlier can help you determine who is right for your organization.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <br/>
                                    <p>
                                    Want to find the right college student candidates? HireBeat could help! HireBeat is an HR software company software that aims to increase our customer’s success rate by delivering a video-based solution. To know more about us, visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy"}
                                        quote={"Four Tips to Build a Successful Campus Recruiting Strategy"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy"}
                                           title={"Four Tips to Build a Successful Campus Recruiting Strategy"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy"}
                                            title={"Four Tips to Build a Successful Campus Recruiting Strategy"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy"}
                                            title={"Four Tips to Build a Successful Campus Recruiting Strategy"}>
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

export default BlogDetailsContentEmployer10;