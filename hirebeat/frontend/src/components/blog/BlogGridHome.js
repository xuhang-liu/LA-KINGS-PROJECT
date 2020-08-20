import React, { Component } from 'react';
import {Link} from "react-router-dom";
import blog1 from "../public/images/blog/blog1.jpg";
import blog2 from "../public/images/blog/blog2.jpg";
import blog3 from "../public/images/blog/blog3.jpg";
import blog4 from "../public/images/blog/blog4.jpg";
import blog5 from "../public/images/blog/blog5.jpg";
import blog6 from "../public/images/blog/blog6.jpg";
import blog7 from "../public/images/blog/blog7.jpg";
import blog8 from "../public/images/blog/blog8.jpg";
import blog9 from "../public/images/blog/blog9.jpg";
import author1 from "../public/images/author/author1.jpg";
import author2 from "../public/images/author/author2.jpg";
import author3 from "../public/images/author/author3.jpg";
import author4 from "../public/images/author/author4.jpg";
import author5 from "../public/images/author/author5.jpg";
import author6 from "../public/images/author/author6.jpg";
import author7 from "../public/images/author/author7.jpg";
import author8 from "../public/images/author/author8.jpg";
import author9 from "../public/images/author/author9.jpg";


class BlogGrid extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog1} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 14, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>50 world-changing people, We lost in the 2010s</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author1} alt="image" />
                                            <h6>Sarah Taylor</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog2} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 16, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>Don't buy a tech gift until you read these rules</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author2} alt="image" />
                                            <h6>Michel John</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog3} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 18, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>The golden rule of buying a phone as a gift</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author3} alt="image" />
                                            <h6>Lucy Eva</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog4} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 19, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>Configure redux into your WordPress theme</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author4} alt="image" />
                                            <h6>Michel John</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog5} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 20, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>How to setup redux in react next application</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author5} alt="image" />
                                            <h6>Lucy Eva</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog6} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 21, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>How to resubmit rejected item into themeforest?</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author6} alt="image" />
                                            <h6>Lucy Eva</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog7} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 22, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>How to resubmit rejected item into themeforest?</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author7} alt="image" />
                                            <h6>Sarah Taylor</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog8} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 23, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>How to the active menu based on url in next.js?</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author8} alt="image" />
                                            <h6>Michel John</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <Link to="/blog-details">
                                        <a>
                                            <img src={blog9} alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 24, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link to="/blog-details">
                                            <a>How to create a responsive popup gallery?</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src={author9} alt="image" />
                                            <h6>Lucy Eva</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link to="/blog-details">
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
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current">2</span>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
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