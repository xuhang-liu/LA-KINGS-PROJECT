import React, { Component } from 'react';
import {Link} from "react-router-dom";
import blog1 from '../../assets/blog1.jpg';
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../public/images/blog/blog3.jpg";
import author1 from "../public/images/author/author1.jpg";
import author2 from "../public/images/author/author2.jpg";
import author3 from "../public/images/author/author3.jpg";


class BlogGrid extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/blog-details1">
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
                                        <Link to="/blog-details1">
                                            <a>VIDEO INTERVIEW PRACTICE PLATFORMS</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>Chris Wei</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details1">
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
                                    <Link to="/blog-details2">
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
                                        <Link to="/blog-details2">
                                            <a>VIDEO INTERVIEW PRACTICES</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author2} alt="image" />
                                            <h6>Michel John</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details2">
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