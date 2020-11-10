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
                        <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                            <a className="thumb">
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog9.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog8.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog7.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog6.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog5.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog4.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog3.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog1.jpg"} alt="image"/>
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
                                <img src={"https://hirebeat-assets.s3.amazonaws.com/blog/cover/blog2.jpg"} alt="image"/>
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