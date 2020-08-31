import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3>Contact us by Phone Number or Email Address</h3>

                    <h2>
                        <span className="number">+088 130 629 8615</span>
                        <span className="or">OR</span>
                        <span className="email">hello@hepro.com</span>
                    </h2>

                    <ul className="social">
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-twitter"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-youtube"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className='bx bxl-facebook'></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-linkedin"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-instagram"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactInfo;