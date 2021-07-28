import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer19 extends Component {
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
                                                    <a>May 27, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Employer Branding vs Recruitment Marketing</h2>
                                    <p>
                                    Employer branding and recruitment marketing are two terms that are used relatively interchangeably by a lot of people although there is a clear distinction between the two. Effectively the difference between these two terms is that the former is related to the internal branding of a firm concerning its employees while recruitment marketing is related to the external image that the firm produces to potential employees and the general public.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer19-pic.jpg" alt="employer branding, recruitment marketing, hiring, recruiting, talent acquisition, hr, hrtech, job, interview, candidate, sort" />
                                    </div>
                                    <br/>
                                    <h3 className="mb-0">Employer Branding</h3>
                                    <br/>
                                    <p>
                                    Employer branding is essentially an internal term that relates to the internal perception of a company that its employees hold. This perspective can vary in its degree of positivity to the company, and it is essentially a reflection of how the company is perceived amongst its employees. The purpose of employer branding is to present your company in the most desirable terms to your employees and demonstrate that your company is a desirable recruiter for new employees. The biggest question that you need to ask with respect to your employer branding is to consider what position your company needs to currently fill as well as those shortly, what are the qualities of an ideal candidate for those positions, and what are the sort of values and policies that make your company a good employer for those candidates that you wish to acquire or retain.
                                    </p>
                                    <h3 className="mb-0">Recruitment Marketing</h3>
                                    <br/>
                                    <p>
                                    In contrast with employer branding, recruitment marketing serves an entirely external purpose which is to showcase your company as a desirable possible recruiter for new candidates. There are many different aspects to recruitment management but essentially at its core, it is about promoting your company as a good place for new people to want to work at. It is entirely related to external promotion, and it primarily consists of making use of technologies such as social media, the internet, and other online resources to spread your reputation as a good company. The most important purpose of any recruitment marketing campaign is to provide the correct message to the correct demographic about the values and benefits of obtaining employment in the company. Recruitment marketing, therefore, primarily involves taking advantage of external media sources and attempting to appeal to a wide array of people who have desirable traits such as relevant academic qualifications or professional qualifications.
                                    </p>
                                    <h3 className="mb-0">How do Employer Branding and Recruitment Marketing Affect the Recruitment Process?</h3>
                                    <br/>
                                    <p>
                                    Both of these terms are very similar as they both relate to the development of an effective image and brand for a company. Hence, they can be emphasized in a recruitment process by a firm that expresses its values and maintains a coherent image internally and externally. The inclusion of effective employer branding will provide the company with a strong internal image of coherence while recruitment marketing shall deliver a strong and consistent appearance to external entities of the firm's desirable nature as a place of employment. When potential candidates will encounter the company, they will first be attracted to the firm via its recruitment marketing, and only upon encountering its employer branding will they be fully convinced of the benefits of recruitment within this company.
                                    </p>
                                    <h3 className="mb-0">Final Words</h3>
                                    <br/>
                                    <p>
                                    A good company will need to conduct both recruitment marketing as well as employer branding if it wishes to obtain the best possible human resources for itself. HireBeat is an HR platform that helps you find the best candidates in the most efficient way. To know more about us, please visit <a href="/">https://hirebeat.co/</a>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing"}
                                        quote={"Employer Branding vs Recruitment Marketing"}
                                        hashtag="#hirebeat">
                                        <a target="_blank" rel="noreferrer">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing"}
                                           title={"Employer Branding vs Recruitment Marketing"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing"}
                                            title={"Employer Branding vs Recruitment Marketing"}
                                            source={"HireBeat"}>
                                            <a target="_blank" rel="noreferrer">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing"}
                                            title={"Employer Branding vs Recruitment Marketing"}>
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

export default BlogDetailsContentEmployer19;