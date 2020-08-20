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
                        <Link to="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 10, 2020</time>
                            <h4 className="title usmall">
                                <Link to="#">
                                    <a>Making peace with the feast or famine of freelancing</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="#">
                            <a className="thumb">
                                <span className="fullimage cover bg2" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 21, 2020</time>
                            <h4 className="title usmall">
                                <Link to="#">
                                    <a>I used the web for a day on a 50 mb budget</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link to="#">
                            <a className="thumb">
                                <span className="fullimage cover bg3" role="img"></span>
                            </a>
                        </Link>

                        <div className="info">
                            <time>Feb 30, 2020</time>
                            <h4 className="title usmall">
                                <Link to="#">
                                    <a>How to create a responsive popup gallery?</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link to="#">
                                <a>Business <span className="post-count">(05)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <a>Privacy <span className="post-count">(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <a>Technology <span className="post-count">(04)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <a>Tips <span className="post-count">(15)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <a>Uncategorized <span className="post-count">(1)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Archive */}
                <div className="widget widget_archive">
                    <h3 className="widget-title">Archives</h3>

                    <ul>
                        <li><Link to="#"><a>May 2020</a></Link></li>
                        <li><Link to="#"><a>April 2020</a></Link></li>
                        <li><Link to="#"><a>Feb 2020</a></Link></li>
                    </ul>
                </div>

                {/* Tags */}
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link to="#">
                            <a>IT <span className="tag-link-count">(3)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Strax <span className="tag-link-count">(3)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Games <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Fashion <span className="tag-link-count">(2)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Travel <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Smart <span className="tag-link-count">(1)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Marketing <span className="tag-link-count"> (1)</span></a>
                        </Link>

                        <Link to="#">
                            <a>Tips <span className="tag-link-count">(2)</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebar;