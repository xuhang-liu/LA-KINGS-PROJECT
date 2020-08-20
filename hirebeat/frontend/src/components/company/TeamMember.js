import React, { Component } from 'react';
import {Link} from "react-router-dom";
import team5 from "../public/images/team/team5.jpg";
import team6 from "../public/images/team/team6.jpg";
import team7 from "../public/images/team/team7.jpg";
import team8 from "../public/images/team/team8.jpg";


class TeamMember extends Component {
    render() {
        return (
            <section className="team-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our experts always ready to help you</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={team5} alt="image" />

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

                                <div className="content">
                                    <h3>Alex Maxwel</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={team6} alt="image" />
                                    
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

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>UX/UI Designer</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={team7} alt="image" />
                                    
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

                                <div className="content">
                                    <h3>Lee Munroe</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src={team8} alt="image" />
                                    
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

                                <div className="content">
                                    <h3>Calvin Klein</h3>
                                    <span>Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamMember;