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
                        <Link to="/top-3-jobs-you-should-apply-for-finance-major">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog15.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 15, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/top-3-jobs-you-should-apply-for-finance-major">
                                    <a>Top 3 Jobs You Should Apply For Finance Major</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/why-do-you-want-to-work-here">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog14.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 08, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/why-do-you-want-to-work-here">
                                    <a>"Why do you want to work here?" Your Ultimate Interview Tips</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/3-fastest-growing-jobs-you-might-not-know-about">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog13.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Dec 01, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/3-fastest-growing-jobs-you-might-not-know-about">
                                    <a>3 Fastest-growing Jobs You Might Not Know About</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/how-to-answer-what-is-your-weakness-question-in-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog12.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Nov 25, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/how-to-answer-what-is-your-weakness-question-in-an-interview">
                                    <a>"What Is Your Weakness"</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/guidelines-on-how-to-answer-what-is-your-biggest-strength">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog11.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Nov 18, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/guidelines-on-how-to-answer-what-is-your-biggest-strength">
                                    <a>"What Is Your Biggest Strength"</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog10.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Nov 10, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview">
                                    <a>"Where Do You To See Yourself In 5 Years"</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog9.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Nov 02, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                                    <a>Tips for Getting Your Resume Past an Applicant Tracking System</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/keywords-to-include-on-a-resume">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog8.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Oct 26, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/keywords-to-include-on-a-resume">
                                    <a>Keywords to Include on A Resume</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/how-to-write-a-thank-you-email-after-a-job-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog7.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Oct 19, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/how-to-write-a-thank-you-email-after-a-job-interview">
                                    <a>How to Write a Thank-You Email</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/4-common-interview-questions-and-how-to-answer-them">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog6.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Oct 06, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/4-common-interview-questions-and-how-to-answer-them">
                                    <a>4 Common Interview Questions</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/things-to-do-before-an-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog5.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Sep 28, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/things-to-do-before-an-interview">
                                    <a>Things to Do Before an Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/questions-to-ask-at-career-fairs">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog4.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Sep 21, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/questions-to-ask-at-career-fairs">
                                    <a>Questions to Ask at Career Fairs</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/how-to-prepare-for-an-AI-interview">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog3.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Sep 11, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/how-to-prepare-for-an-AI-interview">
                                    <a>How to Prepare for an AI Interview</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog1.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Aug 24, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job">
                                    <a>Video interview platforms</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/video-interview-practice">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog2.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Aug 16, 2020</time>
                            <h4 className="title usmall">
                                <Link to="/video-interview-practice">
                                    <a>Video interview practice</a>
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