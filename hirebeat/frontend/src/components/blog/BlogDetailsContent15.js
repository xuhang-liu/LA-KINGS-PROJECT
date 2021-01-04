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
                                                    <a>December 15, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Top 3 Jobs You Should Apply For Finance Major</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog15-pic.jpg" alt="Finance, job, college, interview, resume, career" />
                                    </div>
                                    <p>
                                    Would you love to pursue a degree in finance? Well, anyone can. But to thrive, you require specific skills and discipline. Once you've acquired your financial degree, you can capitalize on the various exciting opportunities in the ever-expanding financial sector.</p>
                                    <p>
                                    The numerous options to pursue include economics, finance, business administration, accounting, and more. While in school, you learned the skills required in the effective management of investments enabling you to thrive in any path in the huge financial sector. But it all depends on your interests to decide which one works best for you.
                                    </p>
                                    <p>
                                    Even so, it can still be a daunting task to choose what's best for you from the variety. That's why we spent lots of time researching the top 3 jobs you can do with your finance major.
                                    </p>
                                    <p>
                                    Are you still wondering what you can do with a finance major? Keep reading to discover some of the top jobs at your disposal.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">1. Financial Analyst</h3>
                                    <br/>                                
                                    <p>
                                    Financial analysts do various tasks such as researching stocks, companies, bonds to assist bankers, investors. They also assist corporate finance officers with acquisitions, mergers, and stock/bond offerings. Moreover, financial analysts' input is critical to corporate expansions and restructuring. 
                                    With prior financial knowledge, financial analysts analyze and prepare financial statements and other financial-related information. To achieve this, they prepare financial models and also carry out a financial analysis. Financial analysts create reports filled with findings which they then present to the banking or finance team helping in business decision making.
                                    </p>
                                    <h3 className="mb-0">2. Investor Relations Associate</h3>
                                    <br/>
                                    <p>
                                    The investor relations associate role is perfect for finance majors with top-notch organizational, communication, and writing skills. The main work of investor relations professionals is to prepare financial information for their company or other corporate clients. After preparation, they then present this information to analysts, investors, and more.
                                    </p>
                                    <p>
                                    For effective preparation, investor relations professionals must synthesize, interpret, and highlight the information using financial statements.
                                    </p>
                                    <p>
                                    During their finance major training, finance majors learn about analytical and software tools to use when preparing financial information.
                                    </p>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog15-pic1.jpg" alt="Finance, Financial planning, business, job, college, interview, career" />
                                    </div>
                                    <h3 className="mb-0">3. Financial Planner</h3>
                                    <br/>
                                    <p>
                                    There are various investment vehicles you learn in school. Financial planners use this knowledge to advise various clients on the best ways to manage their finances. Financial majors are adept at identifying securities trends which can be helpful in their financial planning. Besides, they identify profitable opportunities that can help them help clients make sound investment decisions.
                                    </p>
                                    <p>
                                    Financial planners can process large quantities of information and numbers. Also, they apply principles of accounting to create excellent investment plans that suit various investors.
                                    </p>
                                    <p>
                                    Most importantly, financial planners need to build good relations with people to promote their services. So, if you think you're confident and possess superior interpersonal skills and the art of persuasion you stand a better chance to work as a financial planner.
                                    </p>
                                    <h3 className="mb-0">Conclusion</h3>
                                    <p>
                                    Are you done with your financial major training but don't have a breakthrough to your desired job? Worry no more. We hope you'll find the information provided in this blog post useful. Hopefully, you'll find the best finance major opportunities from those mentioned above. If you are looking to know more about job preparation and industry information, you can visit <Link to="/">here</Link>.
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-top-3-jobs-you-should-apply-for-finance-major"}
                                        quote={"Top 3 Jobs You Should Apply For Finance Major"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-top-3-jobs-you-should-apply-for-finance-major"}
                                           title={"Top 3 Jobs You Should Apply For Finance Major"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-top-3-jobs-you-should-apply-for-finance-major"}
                                            title={"Top 3 Jobs You Should Apply For Finance Major"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-top-3-jobs-you-should-apply-for-finance-major"}
                                            title={"Top 3 Jobs You Should Apply For Finance Major"}>
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