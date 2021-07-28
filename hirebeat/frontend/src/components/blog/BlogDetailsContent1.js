import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent1 extends Component {
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
                                                    <a>August 24, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Why video inteview practice platforms are essential for landing your dream job</h2>

                                    <p>While an outstanding resume that highlights all your related skills is an entrance ticket for a job interview, it’s the interview itself that will be the deciding factor. That is when the employer will assess your abilities and check if they match your resume information.
                                       <br/> However, the hiring manager won’t only evaluate your previous experience and compatibility with the job position. They will analyze your communication skills, how you convey your message, whether your outfit is professional, and if you are showing enthusiasm.
                                    </p>

                                    <blockquote>
                                        <p>According to <a href="https://whattobecome.com/blog/interview-statistics/">Top Echelon</a>, most interviews last 45 and 60 minutes. Those minutes can be quite intimidating and frustrating when someone is questioning and determining your capabilities. Although job interviews are stressful for the recruiters too, it’s the candidates who have to present themselves in the best way, keep a confident posture, and speak concisely. The candidate’s ability to do so will either eliminate him or reward him with a job.</p>
                                        <cite>Darko Jacimovic</cite>
                                    </blockquote>

                                    <p>Interviews are a source of pressure and anxiety, even for the most extroverted and self-assured candidates. But the video interview practice platforms allow job seekers to rehearse and prepare for interviews in a realistic setting. These are the three reasons why AI-analysis interview platforms can help you land your dream job.</p>

                                    <h3 className="mb-0">#1 HireBeat’s interview practice platform provides you with questions and advice: </h3>                                    
                                    <p>
                                    It’s crucial to research the organization, its background, and its goals to prepare for a job interview. It will help you to create a vision of their perfect employee and adjust your presentation according to your research results. Thus, it will be beneficial to come up with potential questions they might ask at the interview. It is always easier to face something when we know what to expect.
                                    <br/>You might discover plenty of useful information or even find websites that list questions they made to previous candidates. Nevertheless, it is what most of the candidates do to impress the employer with their knowledge and preparedness. That’s why you need to beyond simple inquiry. For young job seekers who don’t have much experience, being confident and knowledgeable at the interview will be essential. If your working experience is not your best aspect, leave them in awe of your soft skills and having a quality answer to every question.
                                    <br/>The video interview practice platform offers an extensive library of questions that match your specific job position. The AI will go back and forth through its database to discover questions that can evaluate your skills and job history, while also advising what requires more attention.
                                    </p>
                                    <h3 className="mb-0">#2 Engaging in a real interview simulation allows you to improve and polish your skills: </h3>                                    
                                    <p>
                                    Tension. Jitters. Sweaty hands and sudden trembling. These often accompany you on your job interview, diminishing your knowledge, ability to speak, and focus. The results can be poor performance and the hiring manager choosing a more composed and upbeat candidate. Although you might be the right person for the job, appearing insecure on the interview can convince the recruiter you’re not capable enough for what the work demands.
                                    <br/>Job interviews aren’t only about answering the questions. You should be engaging, show your interest by asking the follow-up questions and encourage the communication flow. Thus, you need to pay attention to your intonation and body language because they are all indicators of your expertise and passion. That’s quite challenging for those who are just entering the work world and young professionals. 
                                    <br/>Thanks to the advanced technology and video interview practice platform, you can engage in a realistic simulation that’s easy to use, and you can use it whenever you’re ready. To make it as close to a real interview as possible, you will never know what question is coming next. The algorithm will eliminate redundant job questions, asking what’s the most relevant and compatible with the organization.
                                    <br/>You’ll have the opportunity to repeat the process as many times as you want, and to review and replay your videos. With this, you’ll have an efficient tool that tracks your progress and allows you to work on your weak points and enhance the strong ones.
                                    </p>
                                    <h3 className="mb-0">#3 AI-algorithm gives you genuine feedback and your interview performance analysis: </h3>                                    
                                    <p>
                                    Imagine that your organization research is perfect – you found all the relevant information and possible questions that help you create your mock interview. Besides, you managed to rehearse the work interview with a friend or by yourself, but you still don’t feel quite ready. How can you be sure that your answers and behavior are satisfying and enough to take you to your dream job? And can you trust your intuition or your friend’s observation?
                                    <br/>Even if you have experience with job interviews, recruiters rarely tell you what was the turning point when they decided to hire you or not. The lack of feedback is what’s preventing you from feeling ready and confident enough. To ensure that you are receiving a professional and scientifically-based evaluation, you should use a comprehensive platform whose sole purpose is to prepare you for an interview.
                                    <br/>Due to its data-driven parameters, the video interview practice platform will use artificial intelligence to assess and analyze your answers, body language, and progress. The AI analysis will provide you with insights you can’t get practicing in front of a mirror. Instead, you will receive a detailed performance review, that focuses specifically on you and your desired job position.
                                    <br/>The platform is the pivotal element of your interview journey because it helps your transformation from an average young job seeker to a promising and confident young talent.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job"}
                                        quote={"Why video inteview practice platforms are essential for landing your dream job"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job"}
                                           title={"Why video inteview practice platforms are essential for landing your dream job"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job"}
                                            title={"Why video inteview practice platforms are essential for landing your dream job"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job"}
                                            title={"Why video inteview practice platforms are essential for landing your dream job"}>
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

export default BlogDetailsContent1;