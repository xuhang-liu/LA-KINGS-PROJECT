import React from "react";
import { Link } from 'react-router-dom';

const topblogTitle="7 Ways to Conduct Interview Practice Online";
const topblogdate="Aug 2, 2020";
const newsletter= "Subscribe the newsletter and get our best content every week";
export default function BlogHome() {
    return (
        <div
            className="container-fluid"
            style={{
                padding: 0,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <img className="bloghome-top-background" src="https://hirebeat-assets.s3.amazonaws.com/blog/image.png"/>
                <div className="bloghome-top-background-text1">{topblogTitle}</div>
                <div className="bloghome-top-background-text2">{topblogdate}</div>
                <div>
                    <Link className="bloghome-top-background-readmore" to="/blog1">Read More</Link>
                </div>
            </div>
            <div className="bloghome-mid-box1">
                <div><img className="bloghome-mid-box1-pic" src="https://hirebeat-assets.s3.amazonaws.com/blog/facebook-logo-2015-blue-1920+1.png"></img></div>
                <div className="bloghome-mid-box1-title">Facebook Technical Interview Questions to Crack Coding Interview</div>
                <div className="bloghome-mid-box1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div className="bloghome-mid-box1-tag">#interview</div>
                <div className="bloghome-mid-box1-date">Aug 1, 2020</div>
                <Link to="/blog1" className="bloghome-mid-box1-link">Read More</Link>
            </div>
            <div className="bloghome-mid-box2">
                <div><img className="bloghome-mid-box1-pic" src="https://hirebeat-assets.s3.amazonaws.com/blog/facebook-logo-2015-blue-1920+1.png"></img></div>
                <div className="bloghome-mid-box1-title">Facebook Technical Interview Questions to Crack Coding Interview</div>
                <div className="bloghome-mid-box1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                <div className="bloghome-mid-box1-tag">#interview</div>
                <div className="bloghome-mid-box1-date">Aug 1, 2020</div>
                <Link to="/blog1" className="bloghome-mid-box1-link">Read More</Link>
            </div>
            <div className="bloghome-bottom-newsletter">
                <div className="bloghome-bottom-newsletter-text">{newsletter}</div>
                <div>
                    <input
                        className="bloghome-bottom-newsletter-input"
                        type="text"
                        placeholder={"Enter your email"}
                        style={{
                            fontSize: "12px",
                            borderRadius: "0.1rem",
                            paddingLeft: "1rem",
                        }}
                    />
                </div>
                <div>
                    <input
                        className="bloghome-bottom-newsletter-button"
                        type="image" src="https://hirebeat-assets.s3.amazonaws.com/blog/button.png"></input>
                </div>
            </div>


            <div className="row footer footer-bloghome" style={{marginLeft: "0px", marginRight: "0px", marginTop: "100rem"}}>
                <div className="col footer-align">
                    <Link style={{textDecoration: "none"}} to="/company" >
                        <p style={{color: "#FFFFFF"}}>About</p>
                    </Link>
                    <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/company" >
                        <p style={{color: "#FFFFFF"}}>Contact</p>
                    </Link>
                    <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/privacy" >
                        <p style={{color: "#FFFFFF"}}>Privacy</p>
                    </Link>
                    <Link style={{textDecoration: "none", marginLeft: "60px"}} to="/term" >
                        <p style={{color: "#FFFFFF"}}>Terms</p>
                    </Link>
                </div>
                <div className="col footer-align">
                    <img style={{width:"2.375rem", marginLeft: "20%", marginRight: "1.25rem"}} src="https://hirebeat-assets.s3.amazonaws.com/facebook.png" alt="facebook icon"/>
                    <img style={{width:"2.375rem", marginRight: "1.25rem"}} src="https://hirebeat-assets.s3.amazonaws.com/linkedin.png" alt="linkedin icon"/>
                    <img style={{width:"2.375rem"}} src="https://hirebeat-assets.s3.amazonaws.com/ins.png" alt="instagram icon"/>
                </div>
            </div>
        </div>
    );
}