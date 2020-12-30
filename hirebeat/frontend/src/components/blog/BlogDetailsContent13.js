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
                                                    <a>December 01, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <a href="https://www.linkedin.com/company/hirebeat">HireBeat</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>3 Fastest-growing Jobs You Might Not Know About</h2>
                                    <div className="article-image">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog13-pic.jpg" alt="image" />
                                    </div>
                                    <p>
                                    Every year, there is a shift in the growth, emergence, and popularity of careers. That is why it is essential for people to know where to look when looking for careers to pursue. No one is ever sure about the job market and keeping tabs on the career trends will help you choose the right career to invest in through education.</p>
                                    <p>
                                    Knowing about the fastest-growing careers would be an excellent place to start, as you will be able to identify a career that you can make a killing from. Here are the top three careers that will be hiring the most, paying a lot, which will offer people an opportunity to grow.
                                    </p>
                                    <br/>
                                    <h3 className="mb-0">1. Wind turbine service technicians</h3>
                                    <br/>
                                    <h3 className="mb-0">Projected job growth: 61%</h3>
                                    <h3 className="mb-0">Median salary: $52,910</h3>                                 
                                    <p>As the world energy consumption is slowly shifting from traditional energy sources, such as oil and natural gas, to renewable energy sources, wind energy production has contributed a significant amount to the growth of the renewable energy industry. The growth of this energy has skyrocketed over the past decades and is expected to grow even more in the coming years.</p>
                                    <p>
                                    For that reason, we can expect more jobs to be created in this industry, and it would be a great place to look for career growth. The industry is projected to experience a 60% growth by 2030. The job role entails the setting up of the turbines, which most consider a tough assignment. However, there is a bright side. The more a job is deemed to be tough, the lower the barrier to entry. Therefore, wind turbine service technician is a good opportunity for anyone who is interested to look into it.
                                    </p>
                                    <h3 className="mb-0">2. Information security analysts</h3>
                                    <br/>
                                    <h3 className="mb-0">Projected job growth: 31%</h3>
                                    <h3 className="mb-0">Median salary: $99,730</h3> 
                                    <p>
                                    The exciting thing about career trends is that they are usually aligned with what is happening in the job market. That could be either challenges or opportunities. One of the biggest challenges today in the job market is cybersecurity. Businesses have shifted to digital technology, and this has further increased the cyberattack threat on businesses.
                                    </p>
                                    <p>
                                    Business owners are increasingly looking for information security analysts to evaluate and beef up their security. As this challenge continues to rise as it is, the path's opportunities continue to grow. Students pursuing degrees in information assurance, computer science, and other related certifications are viable for this opportunity.
                                    </p>
                                    <h3 className="mb-0">3. Nurse practitioners</h3>
                                    <br/>
                                    <h3 className="mb-0">Projected job growth: 52%</h3>
                                    <h3 className="mb-0">Median salary: $115,800</h3> 
                                    <p>
                                    Nursing practitioners’ career is projected to grow by 52% by 2029. The industry is currently experiencing a gap, and people pursuing this career should expect to make a killing now and even in the future. The motivation behind this industry's growth is the increase in the older and sicker population, with some people living with terminal illnesses for a long time.
                                    </p>
                                    <p>
                                    Nursing practitioners can do most of the things that doctors do. They evaluate lab results, diagnose patients, and even prescribe medicine for them. It is projected that there will be an increase in demand for home care services in the near future, and the need for nurse practitioners will also go high.
                                    </p>
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog13-pic1.jpg" alt="image"></img>
                                    <h3 className="mb-0">Take away</h3>
                                    <p>
                                    If you have no idea of which the career path to choose, think of your passion and get some industry focus to see the availability of jobs for the career you choose. The three above jobs are growing and are expected to grow even more in the future.
                                    </p>
                                    <br/>
                                    <p>
                                    Improve your interview skills and landing your dream job with <Link to="/">HireBeat</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="single-footer-widget1">
                                    <ul className="social">
                                    <li>
                                    <FacebookShareButton 
                                        url={"https://hirebeat.co/blog-3-fastest-growing-jobs-you-might-not-know-about"}
                                        quote={"3 Fastest-growing Jobs You Might Not Know About"}
                                        hashtag="#hirebeat">
                                        <a target="_blank">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                           url={"https://hirebeat.co/blog-3-fastest-growing-jobs-you-might-not-know-about"}
                                           title={"3 Fastest-growing Jobs You Might Not Know About"}
                                           via={"HireBeat"}
                                           hashtag="#hirebeat">
                                           <a target="_blank">
                                                <i className="bx bxl-twitter"></i>   
                                           </a>
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={"https://hirebeat.co/blog-3-fastest-growing-jobs-you-might-not-know-about"}
                                            title={"3 Fastest-growing Jobs You Might Not Know About"}
                                            source={"HireBeat"}>
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </LinkedinShareButton>
                                    </li>
                                    <li>
                                        <WhatsappShareButton
                                            url={"https://hirebeat.co/blog-3-fastest-growing-jobs-you-might-not-know-about"}
                                            title={"3 Fastest-growing Jobs You Might Not Know About"}>
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