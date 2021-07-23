import React, { Component } from 'react';
import {Link} from "react-router-dom";


class BlogSidebar extends Component {
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
                        <Link to="/blog-10-impactful-ways-to-update-your-resume-for-2021">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog30.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jul 21, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-10-impactful-ways-to-update-your-resume-for-2021">
                                    <a>10 Impactful Ways To Update Your Resume For 2021</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-the-4c's-that-you-need-for-your-resume">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog29.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 18, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-the-4c's-that-you-need-for-your-resume">
                                    <a>The 4C's That You Need for Your Resume</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-wha-is-your-expected-salary">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog28.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jun 04, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-wha-is-your-expected-salary">
                                    <a>What Is Your Expected Salary?</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-ace-your-zoom-job-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog27.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>May 17, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-ace-your-zoom-job-interview">
                                    <a>Ace Your Zoom Job Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog26.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 30, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-stay-competitive-in-your-job-search-as-a-candidate">
                                    <a>How to Stay Competitive in Your Job Search as a Candidate</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="blog-4-most-commonly-asked-questions-in-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog25.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 08, 2021</time>
                            <h4 className="title usmall">
                                <Link to="blog-4-most-commonly-asked-questions-in-an-interview">
                                    <a>4 Most Commonly Asked Questions in an Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-answer-the-question-what-makes-you-stand-out-from-other-candidates">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog24.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 24, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-answer-the-question-what-makes-you-stand-out-from-other-candidates">
                                    <a>How to Answer the Question “What Makes You Stand Out from Other Candidates?”</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog23.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 18, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-good-questions-to-ask-the-Employer-at-the-end-of-the-interview">
                                    <a>Good Questions to Ask the Employer at the End of The Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog22.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 23, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years">
                                    <a>How to Answer: 'Where do you see yourself in 5 years?'</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-4-amazing-tips-to-effectively-networking-during-covid-19">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog21.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 17, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-4-amazing-tips-to-effectively-networking-during-covid-19">
                                    <a>4 Amazing Tips to Effectively Networking During Covid-19</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-handle-the-question-you-donot-know">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog20.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 08, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-handle-the-question-you-donot-know">
                                    <a>How to Handle the Question You don’t Know in an Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-acing-pandemic-job-interview-questions">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog19.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 02, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-acing-pandemic-job-interview-questions">
                                    <a>Acing Pandemic Job Interview Questions</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-answer-the-teamwork-type-question-in-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog18.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jan 27, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-answer-the-teamwork-type-question-in-an-interview">
                                    <a>How to answer the teamwork type question in an interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog17.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jan 19, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr">
                                    <a>11 Mistakes Made by The Most Interviewees According to HR</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-why-do-you-want-to-work-here">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog14.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Jan 13, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/blog-why-do-you-want-to-work-here">
                                    <a>Interview Question "Why do you want to work here?"</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-10-tips-to-deal-with-job-hunting-stress">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog16.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 23, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/blog-10-tips-to-deal-with-job-hunting-stress">
                                    <a>10 Tips to Deal with Job Hunting Stress</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-top-3-jobs-you-should-apply-for-finance-major">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog15.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 15, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/blog-top-3-jobs-you-should-apply-for-finance-major">
                                    <a>Top 3 Jobs You Should Apply For Finance Major</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-3-fastest-growing-jobs-you-might-not-know-about">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog13.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 01, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/blog-3-fastest-growing-jobs-you-might-not-know-about">
                                    <a>3 Fastest-growing Jobs You Might Not Know About</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/blog-how-to-answer-what-is-your-weakness-question-in-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog12.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Nov 25, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/blog-how-to-answer-what-is-your-weakness-question-in-an-interview">
                                    <a>"What Is Your Weakness"</a>
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

export default BlogSidebar;