import React, { Component } from 'react';
import {Link} from "react-router-dom";


class BlogSidebarEmployer extends Component {
    render() {
        return (
            <div className="widget-area" id="secondary">
                {/* Search widget */}
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className='bx bx-search-alt'></i>
                        </button>
                    </form>
                </div>

                {/* Popular Posts */}
                <div className="widget widget_spacle_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link to="/employer_blog-five-ways-applicant-tracking-systems-up">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer27.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jul 21, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-five-ways-applicant-tracking-systems-up">
                                    <a>Five ways Applicant tracking systems up</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer26.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jul 21, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system">
                                    <a>5 Things You Need To Know About Applicant Tracking System</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-4-challenges-campus-recruiters-could-meet">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer25.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jul 02, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-4-challenges-campus-recruiters-could-meet">
                                    <a>4 Challenges Campus Recruiters Could Meet</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-three-steps-to-fix-your-broken-talent-acquisition-process">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer24.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 25, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-three-steps-to-fix-your-broken-talent-acquisition-process">
                                    <a>Three Steps to Fix Your Broken Talent Acquisition Process</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-what-is-broken-in-the-talent-acquisition-process">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer23.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 25, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-what-is-broken-in-the-talent-acquisition-process">
                                    <a>What's Broken in the Talent Acquisition Process: Employers and Candidates Viewpoints</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-8-ways-to-automate-recruiting-processes">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer22.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 18, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-8-ways-to-automate-recruiting-processes">
                                    <a>8 Ways to Automate Recruiting Processes</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-what-is-resume-screening-and-why-does-it-matter">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer21.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 11, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-what-is-resume-screening-and-why-does-it-matter">
                                    <a>What Is Resume Screening and Why Does it Matter</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-8-tips-to-increase-resume-screening-effectiveness">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer20.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 04, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-8-tips-to-increase-resume-screening-effectiveness">
                                    <a>8 Tips to Increase Resume Screening Effectiveness</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-employer-branding-vs-recruitment-marketing">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer19.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 27, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-employer-branding-vs-recruitment-marketing">
                                    <a>Employer Branding vs Recruitment Marketing</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-ATS-works-in-the-recruitment-process">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer18.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 24, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-ATS-works-in-the-recruitment-process">
                                    <a>How ATS works in the recruitment process</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-personality-assessment-tools-employers-must-know-about">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer17.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 14, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-personality-assessment-tools-employers-must-know-about">
                                    <a>Personality Assessment Tools Employers Must Know About</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-red-flags-you-should-look-out-in-candidates-during-the-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer16.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 10, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-red-flags-you-should-look-out-in-candidates-during-the-interview">
                                    <a>Red Flags You Should Look Out In Candidates During The Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer15.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 05, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-4-secrets-that-improve-your-linkedin-job-posting-today">
                                    <a>4 Secrets That Improve Your LinkedIn Job Posting Today</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer14.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 03, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-five-questions-you-need-to-ask-to-hire-the-best-intern">
                                    <a>Five Questions You Need to Ask to Hire the Best Intern</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-to-write-a-termination-letter-right">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer13.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 30, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-to-write-a-termination-letter-right">
                                    <a>How to Write A Termination Letter Right?</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-workplace-camaraderie-your-powerful-tool-for-success">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer12.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 23, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-workplace-camaraderie-your-powerful-tool-for-success">
                                    <a>Workplace Camaraderie: Your Powerful Tool For Success</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-covid-has-changed-the-recruitment-process">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer11.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 23, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-covid-has-changed-the-recruitment-process">
                                    <a>How Covid Has Changed the Recruitment Process</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer10.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 19, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-four-tips-to-build-a-successful-campus-recruiting-strategy">
                                    <a>Four Tips to Build a Successful Campus Recruiting Strategy</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-boost-up-your-roi-using-video-interviews">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer9.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 14, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-boost-up-your-roi-using-video-interviews">
                                    <a>Boost Up Your ROI Using Video Interviews</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                </div>
            </div>
        );
    }
}

export default BlogSidebarEmployer;