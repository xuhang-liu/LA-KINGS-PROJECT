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
                                                    <a>December 23, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>10 Tips to Deal with Job Hunting Stress</h2>
                                    <p>
                                    When things don’t go as expected while searching for a job, frustration which leads to stress occurs. Finding a suitable job is often an uphill task that different people deal with in different ways. When you feel you are doing all that you are required to do to get employed by a suitable employer, but you are not getting called for any interviews, emotions run high and they begin to eat you up.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog16-pic.jpg" alt="job, stress, job application, career, interview, resume, interview tips" />
                                    </div>
                                    <h3 className="mb-0">What causes stress?</h3>
                                    <p>
                                    While the job-hunting process is quite stressful, our thoughts and feelings at times complicate our life further. When we let our minds think about whether we are good enough, or whether our applications will be considered, we end up getting confused and having negative thoughts.</p>
                                    <p>
                                    What are some useful tips of dealing with stress related to job hunting?
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">1. Getting organized</h3>
                                    <br/>                                
                                    <p>
                                    You ought to compose yourself and get ready for any call related to a job opening.
                                    </p>
                                    <h3 className="mb-0">2.	Perform regular exercises</h3>
                                    <br/>
                                    <p>
                                    Exercising can help pump out any negative energy that may be clouding your thoughts, bringing in a new sense of refreshment.
                                    </p>
                                    <h3 className="mb-0">3.	Healthy eating</h3>
                                    <br/>
                                    <p>
                                    Ensure you partake healthy diets free of caffeine and alcohol. Junk food and alcohol may bring more stress.
                                    </p>
                                    <h3 className="mb-0">4.	Get enough sleep</h3>
                                    <br/>
                                    <p>
                                    Inadequate sleep makes it difficult for the brain to rest. When you get enough sleep, the brain gets reset to its normal condition which is necessary because it is quite bothered by stress.
                                    </p>
                                    <h3 className="mb-0">5.	Keep a diary of events</h3>
                                    <br/>
                                    <p>
                                    Recording all activities, you have conducted while searching for jobs could help you comprehend the amount of effort you have put in into the quest.
                                    </p>
                                    <h3 className="mb-0">6.	Talk to your friends, family or your seniors</h3>
                                    <br/>
                                    <p>
                                    Your friends might have been through such a phase and are possibly the best people who can console you. A person who has experienced such a misfortune can help give a new understanding of your current situation. This will definitely calm you down to a great degree.
                                    </p>
                                    <h3 className="mb-0">7.	Set priorities for your job hunt</h3>
                                    <br/>
                                    <p>
                                    Avoid going for numerous options simultaneously. You are likely to get confused and develop stress.
                                    </p>
                                    <h3 className="mb-0">8.	Acknowledge and congratulate your efforts</h3>
                                    <br/>
                                    <p>
                                    Appreciating yourself is very crucial. You will certainly feel energetic and develop an urge to input more effort.
                                    </p>
                                    <h3 className="mb-0">9.	Don’t look forward to achieving the impossible</h3>
                                    <br/>
                                    <p>
                                    Setting goals that are too high and beyond reach is a sure way of setting yourself up for stress. There are some limitations to jobs that you can get hired for. Regardless of your aspirations, some aspects require time to achieve.
                                    </p>
                                    <p>
                                    Try the skip, hop, and jump policy to achieve your goals. This is particularly important advice to those new to the job-hunting scene, who are likely to want to have everything in one go.
                                    </p>
                                    <h3 className="mb-0">10. Evaluate the job market</h3>
                                    <br/>
                                    <p>
                                    Don’t start job hunting without clearly understanding what the job market looks like. Evaluate the number of job openings available and the necessary requirements to get hired. Finding out the options around where you live is also an important step to undertake.
                                    </p>
                                    <p>
                                    Experts are of the strong opinion that adequately planning and organizing for job hunts reduces the chances of getting stressed.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/10-tips-to-deal-with-job-hunting-stress"}
                                        quote={"10 Tips to Deal with Job Hunting Stress"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/10-tips-to-deal-with-job-hunting-stress"}
                                           title={"10 Tips to Deal with Job Hunting Stress"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/10-tips-to-deal-with-job-hunting-stress"}
                                            title={"10 Tips to Deal with Job Hunting Stress"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/10-tips-to-deal-with-job-hunting-stress"}
                                            title={"10 Tips to Deal with Job Hunting Stress"}>
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