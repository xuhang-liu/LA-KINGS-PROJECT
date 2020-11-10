import React from "react";
import {Link} from "react-router-dom";


export const BlogCol = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
                <div className="post-image">
                    <Link to={props.blogURL}>
                        <img src={props.blogImg} alt="image" />
                    </Link>
                    <div className="date">
                        <i className='bx bx-calendar'></i> {props.blogDate}
                    </div>
                </div>
                <div className="post-content">
                    <h3>
                        <Link to={props.blogURL} style={{textDecoration: "none"}}>
                            {props.blogTitle}
                        </Link>
                    </h3>
                    <div className="post-info">
                        <div className="post-by">
                            <img src={props.blogAuthor} alt="image" />
                            <h6>HireBeat</h6>
                        </div>
                        <div className="details-btn">
                            <Link to={props.blogURL}>
                                <i className="bx bx-right-arrow-alt"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};