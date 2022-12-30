import React, { Component } from 'react';
import { FacebookIcon, LinkedinIcon, TwitterIcon, EmailIcon } from "react-share";
import hirebeatlogo from "../../assets/HireBeatLogo.png";
import hirebeatlogotext from "../../assets/HireBeatLogoText.png";
import MediaQuery from 'react-responsive';
import { Link } from '@chakra-ui/react';


class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        var uri = window.location.pathname;
        uri = uri.substring(1, uri.length);
        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={1224}>
                    <footer className="footer-area" style={{ zIndex: "99" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <div className="logo">
                                            <a href="https://hirebeat.co">
                                                <img
                                                    src={hirebeatlogo}
                                                    className="img-fluid mr-3"
                                                    alt="logo"
                                                    style={{
                                                        width: "14%",
                                                        height: "14%",
                                                        display: "inline"
                                                    }}
                                                />
                                                <img
                                                    src={hirebeatlogotext}
                                                    className="img-fluid mr-2"
                                                    alt="logotext"
                                                    style={{
                                                        width: "40%",
                                                        height: "100%",
                                                        display: "inline"
                                                    }}
                                                />
                                            </a>
                                        </div>
                                        {(uri.includes("employer") || uri == "") ?
                                            <p style={{ marginRight: "2%" }}>The automated video-interview platform that saves employers time and money! We help our clients to screen candidate performance anytime, anywhere.</p>
                                            : <p style={{ marginRight: "2%" }}>The best career support platform that supercharges your performance to make a great impression at your next interview</p>}
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h3>Company</h3>
                                        {(uri.includes("employer") || uri == "") ?
                                            <ul className="services-list">
                                                <li>
                                                    <a href="https://hirebeat.co/about/">
                                                        <a>About Us</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/employer-pricing">
                                                        <a>Our Pricing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/blog/">
                                                        <a>Blog</a>
                                                    </a>
                                                </li>
                                            </ul> :
                                            <ul className="services-list">
                                                <li>
                                                    <Link href="/company">
                                                        <a>About Us</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing">
                                                        <a>Our Pricing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/bloghome">
                                                        <a>Blog</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/join-us/">
                                                        <a>Join Us</a>
                                                    </a>
                                                </li>
                                            </ul>}
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h3>Support</h3>
                                        {(uri.includes("employer") || uri == "") ?
                                            <ul className="support-list">
                                                <li>
                                                    <a href="https://hirebeat.co/privacy-policy">
                                                        <a>Privacy Policy</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/terms-conditions">
                                                        <a>Terms & Conditions</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/contact">
                                                        <a>Contact Us</a>
                                                    </a>
                                                </li>
                                            </ul> :
                                            <ul className="support-list">
                                                <li>
                                                    <a href="https://hirebeat.co/privacy-policy">
                                                        <a>Privacy Policy</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/terms-conditions">
                                                        <a>Terms & Conditions</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
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
                    <footer className="footer-area" style={{ minWidth: "0px" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <div className="logo">
                                            <a href="https://hirebeat.co">
                                                <img
                                                    src={hirebeatlogo}
                                                    className="img-fluid mr-3"
                                                    alt="logo"
                                                    style={{
                                                        width: "14%",
                                                        height: "14%",
                                                        display: "inline"
                                                    }}
                                                />
                                                <img
                                                    src={hirebeatlogotext}
                                                    className="img-fluid mr-2"
                                                    alt="logotext"
                                                    style={{
                                                        width: "40%",
                                                        height: "100%",
                                                        display: "inline"
                                                    }}
                                                />
                                            </a>
                                        </div>
                                        {uri.includes("employer") ?
                                            <p style={{ marginRight: "2%" }}>The automated video-interview platform that saves employers time and money! We help our clients to screen candidate performance anytime, anywhere.</p>
                                            : <p style={{ marginRight: "2%" }}>The best career support platform that supercharges your performance to make a great impression at your next interview</p>}
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h3>Company</h3>

                                        {(uri.includes("employer") || uri == "") ?
                                            <ul className="services-list">
                                                <li>
                                                    <a href="https://hirebeat.co/about/">
                                                        <a>About Us</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/employer-pricing">
                                                        <a>Our Pricing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/blog/">
                                                        <a>Blog</a>
                                                    </a>
                                                </li>
                                            </ul> :
                                            <ul className="services-list">
                                                <li>
                                                    <Link href="/company">
                                                        <a>About Us</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing">
                                                        <a>Our Pricing</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/bloghome">
                                                        <a>Blog</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/join-us/">
                                                        <a>Join Us</a>
                                                    </a>
                                                </li>
                                            </ul>}
                                    </div>
                                </div>

                                <div className="col-lg-2 col-md-6 col-sm-6">
                                    <div className="single-footer-widget">
                                        <h3>Support</h3>

                                        {(uri.includes("employer") || uri == "") ?
                                            <ul className="support-list">
                                                <li>
                                                    <Link href="/privacy">
                                                        <a>Privacy Policy</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/terms-conditions">
                                                        <a>Terms & Conditions</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/contact">
                                                        <a>Contact Us</a>
                                                    </a>
                                                </li>
                                            </ul> :
                                            <ul className="support-list">
                                                <li>
                                                    <Link href="/privacy">
                                                        <a>Privacy Policy</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <a href="https://hirebeat.co/terms-conditions">
                                                        <a>Terms & Conditions</a>
                                                    </a>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
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