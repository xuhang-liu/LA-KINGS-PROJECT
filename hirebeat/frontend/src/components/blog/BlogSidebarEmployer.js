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

                    <article className="item">
                        <Link to="/employer_blog-how-to-get-your-job-postings-noticed">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer8.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 07, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-to-get-your-job-postings-noticed">
                                    <a>How to Get Your Job Postings Noticed</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-millennials-we-want-you">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer7.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 07, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-millennials-we-want-you">
                                    <a>Millennials? We Want You!</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-gender-pronouns-change-the-way-we-work">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer6.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Apr 02, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-gender-pronouns-change-the-way-we-work">
                                    <a>How Gender Pronouns Change the Way We Work</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-the-pandemic-sparked-a-new-way-of-interviewing">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer5.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 30, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-the-pandemic-sparked-a-new-way-of-interviewing">
                                    <a>How the Pandemic Sparked A New Way of Interviewing</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-interview-questions-every-recruiter-should-ask">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer4.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 29, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-interview-questions-every-recruiter-should-ask">
                                    <a>Interview Questions Every Recruiter Should Ask</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-writing-a-good-job-posting-that-will-attract-employees">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer3.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 22, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-writing-a-good-job-posting-that-will-attract-employees">
                                    <a>Writing a Good Job Posting that Will Attract Employees</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer1.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 15, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring">
                                    <a>How does a one-way interview help a company in its hiring?</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company">
                            <a className="thumb">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer2.jpg" alt="image"/>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Mar 17, 2021</time>
                            <h4 className="title usmall">
                                <Link to="/employer_blog-benefits-of-hiring-diverse-candidates-in-your-company">
                                    <a>Benefits of hiring diverse candidates in your company</a>
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