import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent21 extends Component {
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
                                                    <a>Feburary 17, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>4 Amazing Tips to Effectively Networking During Covid-19</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog21-pic.jpg" alt="networking, job hunting, job, interview, pandemic, interview tip" />
                                    </div>
                                    <p>
                                    Since the emergence of Covid-19, most young talented entrepreneurs and business-people have stopped interacting actively in the industry. The global pandemic has locked people in their homes.
                                    </p>
                                    <p>
                                    When an online business has changed the economical practices of this world, most people have survived a lot due to less communal interactions.
                                    </p>
                                    <p>
                                    It can be said that building effective relations with your field of profession is the one of the important ways through which you can succeed in your job-hunting, yet most of us are unaware of the smart techniques of networking.
                                    </p>
                                    <p>
                                    Wondering how you can network effectively and expand your professional network?
                                    </p>
                                    <p>
                                    Here are the four most amazing tips through which you can ace any interview or land your most desirable job without much effort.
                                    </p>
                                    <h3 className="mb-0">1: Link with others in a Professional Manner</h3>
                                    <p>
                                    As we all know, several different online resources provide you with a fantastic platform through which you can interact with employers and various industrialists. Networking during Covid times in a professional manner can accelerate your chances of landing your favorite job. Although we are in a pandemic, sending cold emails and actively reaching out on professional social platforms are still the mainstream social methods.
                                    </p>
                                    <p>What is a Professional Way of Networking?</p>
                                    <p>
                                    Instead of reaching out to experts without updating your profile, have a look at your profile first to analyze whether it is leaving a good impression or not. On many professional network platforms, such as LinkedIn, a good profile can leave a good first impression. You can learn how to build and improve your LinkedIn profile <a href="https://www.linkedin.com/help/linkedin/answer/112133/how-do-i-create-a-good-linkedin-profile-?lang=en">here</a>.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2: Become a Web-Conferencing Master</h3>
                                    <p>
                                    If it was not about the Covid Pandemic, our first suggestion regarding networking would have been face-to-face interactions with your potential connection to build professional relationships effectively.
                                    </p>
                                    <p>
                                    However, in the Covid times, every person has to learn the basic use of web conferencing. Software like Zoom, Google Meet, Skype, and Facetime has become the ultimate platform for people working online.
                                    </p>
                                    <p>
                                    Many companies will put info session and network event on zoom. This is actually a help to our job seekers in a way since it eliminates the trouble of traveling. Job seekers should pay attention to the event updates of their desired company; actively participate in online networking events and establish good contact with the employees in the company. Take the initiative to follow up after the event to achieve efficient social interaction and improve your chances of getting referrals and receiving interviews.
                                    </p>
                                    <h3 className="mb-0">3: Engage in your Relevant Association Groups</h3>
                                    <p>
                                    LinkedIn is one of the best platforms for people who want to network online. LinkedIn provides people a variety of networking groups related to your respective industry to build your working relationships.
                                    </p>
                                    <p>
                                    By joining these active groups, you can interact and engage with many people who are working in your industry or are somehow related to you.
                                    </p>
                                    <p>
                                    These connections will automatically provide you with many opportunities. However, joining these interactive groups is not enough, you have to enthusiastically participate and engage with your network to maintain goodwill in your dealings.
                                    </p>
                                    <h3 className="mb-0">4: Treat your networking call as an interview</h3>
                                    <p>
                                    You may successfully make a network phone call with a company employee through the above three methods. First of all, congratulations, you have completed most of the professional networking process.  Although a networking call is not as formal as an interview, our advice is that you should still treat it as an interview, but it is slightly different than an actual interview.
                                    </p>
                                    <p>
                                    The networking call don’t have to be as serious as the interview; you can use some humor to make the conversation easy and enjoyable. This is your opportunity to get first-hand information about the company’s culture and work environment, so prepare more questions you are interested in to ask the other party, be active listening, and appropriately show your professional background and interest in the firm.
                                    </p>
                                    <p>
                                    After the phone call, don’t forget to send thank you emails in time and keep in touch. This kind gesture will make it easier for the other party to remember you and are more willing to provide you with potential interviews or job opportunities in the future.
                                    </p>
                                    <h3 className="mb-0">Final Call</h3>
                                    <p>
                                    Finally, if you are not confident enough about your interview skill or want to know first-hand information about your favorite company, <a href="/for_candidate">Hirebeat</a> will become your secret weapon. You can freely choose the type of interview questions you want to train on the platform and get timely feedback from AI and professional HR, so that your interview skill can be effectively improved. At the same time, you can find first-hand information about your favorite company in the <a href="/companydata">hirebeat database</a> to ensure that you can show your knowledge and understanding of the company during networking.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-4-amazing-tips-to-effectively-networking-during-covid-19"}
                                        quote={"4 Amazing Tips to Effectively Networking During Covid-19"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-4-amazing-tips-to-effectively-networking-during-covid-19"}
                                           title={"4 Amazing Tips to Effectively Networking During Covid-19"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-4-amazing-tips-to-effectively-networking-during-covid-19"}
                                            title={"4 Amazing Tips to Effectively Networking During Covid-19"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-4-amazing-tips-to-effectively-networking-during-covid-19"}
                                            title={"4 Amazing Tips to Effectively Networking During Covid-19"}>
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

export default BlogDetailsContent21;