import React, { Component } from 'react';
import { Link } from "react-router-dom";
import whitelogo from "../../assets/HireBeatLogo.png";

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="divider"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src={whitelogo} alt="image" />
                                        <span className="font-weight-bold"
                                        style={{fontSize:"1.6rem", color:"grey", marginLeft:"0.5rem"}}>
                                        Hirebeat
                                        </span>
                                    </a>
                                </div>
                                <p>AI-analysis interview platform that supercharges your performance and makes a great impression at your next interview.</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>

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
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

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
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    <li>Location: <span>6th Floor, Elegant Tower, York, USA</span></li>
                                    <li>Email: <span>hello@hepro.com</span></li>
                                    <li>Phone: <span>+0 (321) 984 754</span></li>
                                </ul>
                                <ul className="social">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </Link>
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
        );
    }
}

export default Footer;