import React, { Component } from 'react';
import {Link} from "react-router-dom";
import blog1 from '../../assets/blog1.jpg';
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";
import blog6 from "../../assets/blog6.jpg";
import blog7 from "../../assets/blog7.jpg";
import blog8 from "../../assets/blog8.jpg";
import blog9 from "../../assets/blog9.jpg";
import author1 from "../../assets/HireBeatLogo2.png";


class BlogGrid extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                                        <a>
                                            <img src={blog9} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Nov 02, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                                            <a>TIPS FOR YOUR RESUME TO PASS APPLICANT SYSTEM</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/tips-for-getting-your-resume-past-an-applicant-tracking-system">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/keywords-to-include-on-a-resume">
                                        <a>
                                            <img src={blog8} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Oct 26, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/keywords-to-include-on-a-resume">
                                            <a>KEYWORDS TO INCLUDE ON A RESUME</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/keywords-to-include-on-a-resume">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/how-to-write-a-thank-you-email-after-a-job-interview">
                                        <a>
                                            <img src={blog7} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Oct 19, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/how-to-write-a-thank-you-email-after-a-job-interview">
                                            <a>HOW TO WRITE A THANK-YOU EMAIL</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/how-to-write-a-thank-you-email-after-a-job-interview">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/4-common-interview-questions-and-how-to-answer-them">
                                        <a>
                                            <img src={blog6} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Oct 06, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/4-common-interview-questions-and-how-to-answer-them">
                                            <a>4 COMMON INTERVIEW QUESTIONS</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/4-common-interview-questions-and-how-to-answer-them">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/things-to-do-before-an-interview">
                                        <a>
                                            <img src={blog5} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Sep 28, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/things-to-do-before-an-interview">
                                            <a>THINGS TO DO BEFORE AN INTERVIEW</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/things-to-do-before-an-interview">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/questions-to-ask-at-career-fairs">
                                        <a>
                                            <img src={blog4} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Sep 21, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/questions-to-ask-at-career-fairs">
                                            <a>QUESTIONS TO ASK AT CAREER FAIRS</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/questions-to-ask-at-career-fairs">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/how-to-prepare-for-an-AI-interview">
                                        <a>
                                            <img src={blog3} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Sep 11, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/how-to-prepare-for-an-AI-interview">
                                            <a>HOW TO PREPARE FOR AN AI INTERVIEW</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/how-to-prepare-for-an-AI-interview">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job">
                                        <a>
                                            <img src={blog1} alt="image"/>
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Aug 24, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job">
                                            <a>VIDEO INTERVIEW PRACTICE PLATFORMS</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/video-interview-practice">
                                        <a>
                                            <img src={blog2} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Aug 16, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/video-interview-practice">
                                            <a>VIDEO INTERVIEW PRACTICES FOR YOU</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>HireBeat</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/video-interview-practice">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className='bx bxs-arrow-to-left'></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <span className="page-numbers current">1</span>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className='bx bxs-arrow-to-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGrid;