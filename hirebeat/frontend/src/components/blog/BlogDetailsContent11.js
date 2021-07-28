import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent11 extends Component {
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
                                                    <a>November 18, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Guidelines on How to Answer "What Is Your Biggest Strength" In An Interview with a List of Strength</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog11-pic1.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Regardless of how many interviews you have been to, the chances that you will get anxious when you get invited to the next one will always be high. The exciting thing is that the questions asked in interviews will repeat themselves; however, depending on the nature of the job, you might have different answers for them. Nevertheless, the fruit does not fall far from the tree, and all you need to know is why the interviewer is asking the particular question in a given context. Also, you need to know how to answer the questions appropriately.</p>
                                    <p>
                                    "What is your biggest strength?" is one of the questions that you will never miss in an interview.</p>
                                    <br/>

                                    <h3 className="mb-0">What employers look for when asking, "What is your biggest strength?"</h3>                                    
                                    <p>You need to stay aware that employers are very intentional with all the questions they will ask you in an interview. This question's main objective is for the employer to assess whether your goals align with those of the organization. Through the answers that the candidates give to this question, the employer can also determine your suitability for the role.</p>
                                    <p>
                                    Depending on the answers you give, an employer will determine if your skills make you the strongest or most suitable candidate for the role.
                                    </p>
                                    <h3 className="mb-0">How to answer the question, "What is your biggest strength?"</h3>
                                    <p>
                                    While it might come off as another simple and obvious interview question, this is one of the interview questions that hold water. How you answer it will determine if you have all the skills and competencies that the employer is looking for in a role.
                                    </p>
                                    <p>
                                    1. Be relevant
                                    </p>
                                    <p>
                                    As earlier mentioned, this question is objective, and there is something that the employer is looking for. There is a need to remain relevant to the opportunity in question when providing an answer to this. Therefore, before you even go for the interview, familiarize yourself with the core competencies and skills required for the role, look through your strengths, and identify the relevant ones.
                                    </p>
                                    <p>
                                    These are the strengths that you should be talking to your employer about:
                                    </p>
                                    <ul>
                                        <li>Detail orientated</li>
                                        <li>Goal orientated </li>
                                        <li>Creativity</li>
                                        <li>Analytical skills </li>
                                        <li>Teamwork skills</li>
                                        <li>Leadership</li>
                                        <li>Communication</li>
                                    </ul>
                                    <p>
                                    Try to build your answer around one specific strength you have, then <Link to="/">practice and improve</Link> your answer by doing the following steps.
                                    </p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog11-pic.jpg" alt="image"></img>
                                    <p>
                                    2. Be authentic
                                    </p>
                                    <p>
                                    As much as it might be tempting to claim a strength just because it aligns with a role, you should stay as accurate as possible. If the strength you are talking about is inauthentic, you will struggle to meet the employer's expectations. Talking about the strengths that you actually possess will give you an easy time.
                                    </p>
                                    <p>
                                    3. Demonstrate
                                    </p>
                                    <p>
                                    When highlighting your strengths, it is essential to demonstrate to put the employer into perspective. Bring forth a strength, and back it up with a real-life example of probably your previous work or so.
                                    </p>
                                    <br/>
                                    <p>It is also essential to be confident when answering the question, “what is your biggest strength.” This way, you will show the employer that you have a lot to bring to the table. If you are not aware of your strengths, you could get a second opinion from your mentor, colleague, or a close friend.</p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength"}
                                        quote={"Guidelines on How to Answer 'What Is Your Biggest Strength' In An Interview with a List of Strength"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength"}
                                           title={"Guidelines on How to Answer 'What Is Your Biggest Strength' In An Interview with a List of Strength"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength"}
                                            title={"Guidelines on How to Answer 'What Is Your Biggest Strength' In An Interview with a List of Strength"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength"}
                                            title={"Guidelines on How to Answer 'What Is Your Biggest Strength' In An Interview with a List of Strength"}>
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

export default BlogDetailsContent11;