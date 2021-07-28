import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {FacebookIcon, LinkedinIcon, TwitterIcon, EmailIcon} from "react-share";
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import hirebeatlogotext from "../../assets/HireBeatLogoText.png";
import MediaQuery from 'react-responsive';


class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        var uri = window.location.pathname;
        uri = uri.substring(1, uri.length);
        return (
            <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                    <img
                                        src={hirebeatlogo}
                                        className="img-fluid mr-3"
                                        alt="logo"
                                        style={{
                                        width: "14%",
                                        height:"14%",
                                        }}
                                    />
                                    <img
                                        src={hirebeatlogotext}
                                        className="img-fluid mr-2"
                                        alt="logotext"
                                        style={{
                                        width: "40%",
                                        height:"100%",
                                        }}
                                    />
                                    </a>
                                </div>
                                {(uri.includes("employer")  || uri=="")?
                                <p style={{marginRight:"2%"}}>The automated video-interview platform that saves employers time and money! We help our clients to screen candidate performance anytime, anywhere.</p>
                                : <p style={{marginRight:"2%"}}>The best career support platform that supercharges your performance to make a great impression at your next interview</p>}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>
                                {(uri.includes("employer")  || uri=="")?
                                <ul className="services-list">
                                    <li>
                                        <Link to="/employer_company">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/employer-pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/bloghome_employer">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                </ul> :
                                <ul className="services-list">
                                <li>
                                    <Link to="/company">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bloghome">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/jobs">
                                        <a>Join Us</a>
                                    </Link>
                                </li>
                                </ul>}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                {(uri.includes("employer")  || uri=="")?
                                <ul className="support-list">
                                    <li>
                                        <Link to="/privacy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/term">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/employer_contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>:
                                <ul className="support-list">
                                <li>
                                    <Link to="/privacy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                </ul>}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    <li>Location: <span>40 Wall St, New York, USA 10005</span></li>
                                    <li>Email: <span><a href="mailto: info@hirebeat.co">info@hirebeat.co</a></span></li>
                                    <li>Phone: <span>+1 (929)367-8168</span></li>
                                </ul>
                                <ul className="social1">
                                    <li>
                                        <a href="https://www.facebook.com/HireBeat" target="_blank" rel="noreferrer">
                                        <FacebookIcon size={32} round={true}>
                                        </FacebookIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/hirebeat/" target="_blank" rel="noreferrer">
                                        <LinkedinIcon size={32} round={true}>
                                        </LinkedinIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/hirebeat" target="_blank" rel="noreferrer">
                                        <TwitterIcon size={32} round={true}>
                                        </TwitterIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto: info@hirebeat.co" target="_blank" rel="noreferrer">
                                        <EmailIcon size={32} round={true}>
                                        </EmailIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright @{currentYear} Hirebeat.</p>
                    </div>
                </div>
            </footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <footer className="footer-area" style={{minWidth:"0px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                    <img
                                        src={hirebeatlogo}
                                        className="img-fluid mr-3"
                                        alt="logo"
                                        style={{
                                        width: "14%",
                                        height:"14%",
                                        }}
                                    />
                                    <img
                                        src={hirebeatlogotext}
                                        className="img-fluid mr-2"
                                        alt="logotext"
                                        style={{
                                        width: "40%",
                                        height:"100%",
                                        }}
                                    />
                                    </a>
                                </div>
                                {uri.includes("employer") ?
                                <p style={{marginRight:"2%"}}>The automated video-interview platform that saves employers time and money! We help our clients to screen candidate performance anytime, anywhere.</p>
                                : <p style={{marginRight:"2%"}}>The best career support platform that supercharges your performance to make a great impression at your next interview</p>}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>

                                {(uri.includes("employer") || uri=="")?
                                <ul className="services-list">
                                    <li>
                                        <Link to="/employer_company">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/employer-pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/bloghome_employer">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                </ul> :
                                <ul className="services-list">
                                <li>
                                    <Link to="/company">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bloghome">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/jobs">
                                        <a>Join Us</a>
                                    </Link>
                                </li>
                                </ul>}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                {(uri.includes("employer")  || uri=="")?
                                <ul className="support-list">
                                    <li>
                                        <Link to="/privacy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/term">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/employer_contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>:
                                <ul className="support-list">
                                <li>
                                    <Link to="/privacy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/term">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                </ul>}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    <li>Location: <span>40 Wall St, New York, USA 10005</span></li>
                                    <li>Email: <span><a href="mailto: info@hirebeat.co">info@hirebeat.co</a></span></li>
                                    <li>Phone: <span>+1 (929)367-8168</span></li>
                                </ul>
                                <ul className="social1">
                                    <li>
                                        <a href="https://www.facebook.com/HireBeat" target="_blank" rel="noreferrer">
                                        <FacebookIcon size={32} round={true}>
                                        </FacebookIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/hirebeat/" target="_blank" rel="noreferrer">
                                        <LinkedinIcon size={32} round={true}>
                                        </LinkedinIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/hirebeat" target="_blank" rel="noreferrer">
                                        <TwitterIcon size={32} round={true}>
                                        </TwitterIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto: info@hirebeat.co" target="_blank" rel="noreferrer">
                                        <EmailIcon size={32} round={true}>
                                        </EmailIcon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright @{currentYear} Hirebeat.</p>
                    </div>
                </div>
            </footer>
            </MediaQuery>
        </React.Fragment>
        );
    }
}

export default Footer;