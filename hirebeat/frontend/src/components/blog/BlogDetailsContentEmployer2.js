import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share";
import BlogSidebarEmployer from './BlogSidebarEmployer';

class BlogDetailsContentEmployer2 extends Component {
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
                                                    <a>March 17, 2021</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                    <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Benefits of hiring diverse candidates in your company</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer2-pic.jpg" alt="diverse, diversity, hiring, job, interview, recruitment, human resources" />
                                    </div>
                                    <br/>
                                    <p>
                                    Many companies realize the necessity of hiring diverse candidates. Diversity in the workplace is a sure-fire technique that leads to increased productivity, optimal innovation, and maximum employee loyalty, enabling the company to satisfy all its customers' needs with ease.
                                    </p>
                                    <p>
                                    The company’s greatness is measured by the kind of employees they have at their disposal. To have a chance of stealing a march on your competitors, a company needs to hire talented individuals.
                                    </p>
                                    <p>
                                    By hiring a diverse workforce, a company increases its chances of hiring the best talent since they have many individuals to choose from.
                                    </p>
                                    <p>
                                    The modern world features dynamic marketplaces which need you to hire a diverse workforce to thrive. Therefore, a company that prioritizes individuals' employment regardless of their religion, gender, race, sex, or physical disability is likely to survive easily in a highly competitive marketplace.
                                    </p>
                                    <p>
                                    Besides, a company serves customers from various backgrounds with unique needs. What is a better way to serve such customers than to have a diverse workforce? Such employees represent various needs of different customers, which could greatly benefit your organization.
                                    </p>
                                    <p>
                                    Furthermore, with these kinds of employees at their disposal, companies will effectively employ a holistic view of the market, identifying new market trends and opportunities.
                                    </p>
                                    <p>
                                    Perhaps, this is the reason why corporate America keeps insisting on the recruitment and retention of diverse employees because it’s a valuable addition that guarantees institutional success. Do you imagine a business environment that recognizes every employee and represents their views? There is a high probability that the employees will be motivated and committed to your business goals, resulting in your company's success.
                                    </p>
                                    <p>
                                    Also, it ensures that a company spends few resources on training and turnover. The recognition of their uniqueness and appreciation of their different views and opinions enables you to create an inclusive working environment that promotes different cultures, emphasizing fairness.
                                    </p>
                                    <p>
                                    Most companies realize the importance of hiring a diverse workforce. But what should you do to encourage an all-inclusive work environment?
                                    </p>
                                    <h3 className="mb-0">1.	Come up with a diverse working policy and make it public</h3>                                    
                                    <p>
                                    A company that understands the benefits of hiring diverse individuals should create formal regulations and techniques to guide an all-inclusive working environment. After setting up the policy, the company should publicize it externally and internally.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">2.	Create job descriptions that include everyone</h3>                                    
                                    <p>
                                    When companies announce job vacancies, they should invite all applicants to apply and shouldn’t be discriminatory in any way.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">3.	Use different avenues to announce job openings to increase chances of accessing diverse a workforce</h3>                                    
                                    <p>
                                    Companies should consider using different avenues to increase their chances of hiring talented individuals. Various platforms such as The Society of Hispanic Professional Engineers, Yahoo, Americas Job Bank, the National Society of Black Engineers, and more are excellent avenues to advertise your job openings.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">4.	Don’t ignore the current legislation</h3>                                    
                                    <p>
                                    You should be aware of the current discrimination legislation to prevent litigation issues.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">Conclusion</h3>                                    
                                    <p>
                                    While hiring a diverse working force provides massive success to a company, it helps to understand the kind of training and how they handle various issues to create an effective working environment where everyone feels included. The tips above will enable you to understand what it takes to create a diverse working environment to reap huge benefits.
                                    </p>
                                    <p>
                                    HireBeat allows you to “meet” the candidate behind the resume. With our on-demand video interview solution and AI-driven analytical tools, we committed to reduce the hiring biases and help companies to find the best canadines in the fastest and most cost-efficient way. Visit HireBeat at <a href="/">www.hirebeat.co</a>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company"}
                                        quote={"Benefits of hiring diverse candidates in your company"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company"}
                                           title={"Benefits of hiring diverse candidates in your company"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company"}
                                            title={"Benefits of hiring diverse candidates in your company"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company"}
                                            title={"Benefits of hiring diverse candidates in your company"}>
                                            <a target="_blank">
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

export default BlogDetailsContentEmployer2;