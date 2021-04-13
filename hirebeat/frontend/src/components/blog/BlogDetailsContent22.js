import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent22 extends Component {
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
                                                    <a>Feburary 23, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>How to Answer the Question: 'Where do you see yourself in 5 years?'</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog22-pic.jpg" alt="interview, interview question, interview tip, job interview, career, jobs, internship" />
                                    </div>
                                    <p>
                                    Now that you have come to this article, I am pretty sure that you must be trying to find an authentic and outstanding answer to this question of 'Where do you see yourself in 5 years'.
                                    </p>
                                    <p>
                                    Of course, there are hundreds of people who are not sure about their plans for the next 5 years. We sometimes don’t even know what we are going to have dinner for tonight. But don’t worry, there is nothing wrong with being uncertain.
                                    </p>
                                    <p>
                                    However, considering it a repetitive question, one should understand the significance of this question in a typical interview. If you want to ace this question of “Where do you see yourself in 5 years?”, this article is something that you can’t miss.
                                    </p>
                                    <h3 className="mb-0">How Important is this Question?</h3>
                                    <p>
                                    The employer, when asking you, “Where do you see yourself in 5 years?”, he’s not asking you to create a crystal-clear picture of your future and the exact place of where you are employed in the next five years. He doesn’t want you to name the company you are going to be engaged in or share the exact expected figure of your salary.
                                    </p>
                                    <p>
                                    Instead, this question lets the employer understand your approach towards the goal and aims you’ve in your life. This question mainly determines the amount of passion and enthusiasm you’ve to work towards your financial and mental development.
                                    </p>
                                    <p>
                                    The question of “Where do you see yourself in the next 5 years?” will surely let the interviewer predict if you are going to be the perfect fit for his job position or not.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Where to start?</h3>
                                    <p><b>
                                    College Student 
                                    </b></p>
                                    <p>
                                    If you are a college student and have a good idea and determination on your future career goal, of course, you can say that I hope I can be the VP of the real estate sector of this investment bank you’re interview for within five years and start to explain your specific strategic plan that reflects your understanding of the industry and magnifies your personal highlights.
                                    </p>
                                    <p>
                                    But in many cases, many college students do not have a very good idea about their career plans for the next five years and are more in an exploratory stage, especially for your first internship. That is totally OK, and of course, recruiters know this too. So, your answer can be less focused on a single company or position, but more focused on the areas you are interested in. For example, you can say that I hope to have a deeper understanding of the financial industry in the next five years and expand my professional contacts.
                                    </p>
                                    <p>
                                        <b>Graduate Student or Experienced Worker</b>
                                    </p>
                                    <p>
                                    But if you are graduated or experienced professional, when you are asked this question, what the interviewer expects is that you need to be very confident to tell them your plan for the next five years and have a very clear logic. You can also show your commitment to the firm by talking about some internal career achievements within the company that you can see yourself become after 5 years, and how you can take the company to the next level by your professional knowledge of the industry and good work ethic.
                                    </p>
                                    <h3 className="mb-0">A Simple Answer to “Where do you see yourself in 5 years?”</h3>
                                    <p>
                                    Now, let’s just come to the exact point.
                                    </p>
                                    <p>
                                    You must be wondering about what you should answer to impress the employer through your interview. Here are some tips to follow when drafting your answer.
                                    </p>
                                    <p className="ml-4">1. Look for the specifications of the job you appear for. Think of the skills and abilities you have and how you can use them in this job. Your answer should have relevance to your current job. if you are applying for an IT sector job, don’t answer this question by saying that you see yourself as a successful painter.</p>
                                    <p className="ml-4">2. Only mention the targets and goals that are achievable. Don’t respond unrealistically.</p>
                                    <p className="ml-4">3. Be very confident, positive, and keen when answering this question. Don’t reply with an indifferent or uncertain attitude.</p>
                                    <h3 className="mb-0">The Bottom Line</h3>
                                    <p>
                                    The question of “Where do you see yourself in 5 years?” can easily become your bonus point in your interview, if you are well prepared. In fact, you can practice a series of similar questions on <a href="/for_candidate">HireBeat</a> from the commitment option in the behavioral interview training. After you finish practice, simply submit your answer to our AI system or HR professionals to review your answer and give feedback, so that you will have a better idea of how to answer this question.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years"}
                                        quote={"How to Answer the Question: 'Where do you see yourself in 5 years?'"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years"}
                                           title={"How to Answer the Question: 'Where do you see yourself in 5 years?'"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years"}
                                            title={"How to Answer the Question: 'Where do you see yourself in 5 years?'"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years"}
                                            title={"How to Answer the Question: 'Where do you see yourself in 5 years?'"}>
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

export default BlogDetailsContent22;