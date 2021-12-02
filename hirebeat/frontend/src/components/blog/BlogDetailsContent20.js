import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent20 extends Component {
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
                                                    <a>Feburary 08, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Handle an Interview Question You Don't Know</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog20-pic.jpg" alt="interview, interview tips, job interview, interview question, job-hunting" />
                                    </div>
                                    <p>
                                    Preparing for an interview is not a child’s play. It is one of the crucial stages that you must clear to grab the seat. You can’t take it as a joke because the interview you are preparing for, is going to decide your future and your state of mind after escorting.
                                    </p>
                                    <p>
                                    Hence, you need a lot more practice before going for an interview. But as we are humans, not superpowers or spirits, we can still miss preparing some questions that are going to be asked on the day of the interview.
                                    </p>
                                    <p>
                                    So the question is that <i>how to handle a question you don’t know how to answer in an interview?</i>
                                    </p>
                                    <p>
                                    Great question. Here we have provided you with some magical tips that are going to help you answer such questions for sure.
                                    </p>
                                    <h3 className="mb-0">1. Obviously, Try to Stay Calm and Don’t Panic</h3>
                                    <p>
                                    Sometimes the interviewer asks tricky questions, not to judge your learning capability, but to check your confidence and your method of dealing with tough situations. So try to stay calm when such a question comes from their side that you don’t know even a bit about.
                                    </p>
                                    <p>
                                    Take some deep breaths and start formulating a precise answer in your mind that is you think somehow related to the question. Experts say that not having an answer is not the end of your life but it can be converted into a horrible end if you lose your dignity in front of someone else.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Take Your Time to Devise a Suitable answer</h3>
                                    <p>
                                    Panic or hurry is not the solution to any problem. If a nasty question comes your way, don’t reply hurriedly that you don’t know the answer. Think about it calmly and formulate it in your mind. Silences are much awkward for both the recruiter and candidate so avoid such awful silences that can become a permanent reason for your lifetime silence.
                                    </p>
                                    <h3 className="mb-0">3.	Be Clear and Real</h3>
                                    <p>
                                    Don’t fake that you know the answer to the question. Be upfront and accept that you have not much knowledge about the question that you are being asked. Try not to create any confusion between you and your boss by admitting that you found the question a bit confusing but still, you are up with your clear answer. Don’t pretend what you are not.
                                    </p>
                                    <p>
                                    Try to answer with a positive attitude and optimistic sentiment that even if you are not answering right, your answer is quite enough to win the heart of your interviewer.
                                    </p>
                                    <h3 className="mb-0">4.	Do Keen Research in Your Mind</h3>
                                    <p>
                                    Sometimes the question we think we can’t answer is the question that we know entirely about. It means only our unconsciousness and nervousness make us feel that we don’t know the answer to the question. So whenever you are stumped and puzzled with the perplexing question, conduct keen research in your mind. Think about it from different aspects, and generate a precise answer that you think is 100% right. Trust me; this is the right way to handle a question you don’t know how to answer in an interview.
                                    </p>
                                    <h3 className="mb-0">Time to Win the Job</h3>
                                    <p>
                                    Adding long silences and words like hmm, oh, and ah— make you appear as a very unprofessional and unsophisticated candidate that is not capable of being taken into serious consideration. So, try to be a professional and proficient candidate without giving any impression of being blank while having a tough question that you don’t know how to answer.
                                    </p>
                                    <p>
                                    Of course, we don’t want to catch off guard during an interview. Therefore, to avoid this situation in the first place, <a href="/job-seekers">HireBeat</a> will help you to better prepare for your interview. Try a mock interview on our platform and take it as a real interview. The chances are you might run into some brand-new question that you have never faced before. Use the tips from this article to form your answer and let our AI and HR professional tell you how to improve. You can always revisit the same question to refine your answer. As a result, you have one less question you don’t know how to answer.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://app.hirebeat.co/blog-how-to-handle-the-question-you-donot-know"}
                                        quote={"How to Handle an Interview Question You Don't Know"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://app.hirebeat.co/blog-how-to-handle-the-question-you-donot-know"}
                                           title={"How to Handle an Interview Question You Don't Know"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://app.hirebeat.co/blog-how-to-handle-the-question-you-donot-know"}
                                            title={"How to Handle an Interview Question You Don't Know"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://app.hirebeat.co/blog-how-to-handle-the-question-you-donot-know"}
                                            title={"How to Handle an Interview Question You Don't Know"}>
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

export default BlogDetailsContent20;