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

                </div>
            </div>
        );
    }
}

export default BlogSidebarEmployer;