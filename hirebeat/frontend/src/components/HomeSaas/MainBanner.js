import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import Particles from 'react-particles-js';
import ModalVideo from 'react-modal-video';
import arrow from "../public/images/saas-shape/arrow.png";
import box1 from "../public/images/saas-shape/box1.png";
import boy1 from "../public/images/saas-shape/boy1.png";
import boy2 from "../public/images/saas-shape/boy2.png";
import boy3 from "../public/images/saas-shape/boy3.png";
import digitalscreen from "../public/images/saas-shape/digital-screen.png";
import filter1 from "../public/images/saas-shape/filter1.png";
import filter2 from "../public/images/saas-shape/filter2.png";
import filter3 from "../public/images/saas-shape/filter3.png";
import girl1 from "../public/images/saas-shape/girl1.png";
import girl2 from "../public/images/saas-shape/girl2.png";
import mainimage from "../public/images/saas-shape/main-image.png";
import monitor from "../public/images/saas-shape/monitor.png";
import saasmain from "../public/images/saas-shape/saas-main-image.png";
import shape from "../public/images/saas-shape/shape-rotate.png";


const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                <div>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
                </div>

                <div className="saas-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container max-width-1290">
                                <div className="row align-items-center pt-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="saas-image mt-70">
                                            <ReactWOW animation='fadeInDown' delay='0.6s'>
                                                <img src="../public/images/saas-shape/arrow.png" alt="arrow" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInUp' delay='0.6s'>
                                                <img src={box1} alt="box1" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInLeft' delay='0.6s'>
                                                <img src={boy1} alt="boy1" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.6s'>
                                                <img src={boy2} alt="boy2" />
                                            </ReactWOW>

                                            <ReactWOW animation='bounceIn' delay='0.6s'>
                                                <img src={boy3} alt="boy3" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInDown' delay='0.6s'>
                                                <img src={digitalscreen} alt="Digital Screen" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.6s'>
                                                <img src={filter1} alt="filter1" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInUp' delay='0.6s'>
                                                <img src={filter2} alt="filter2" />
                                            </ReactWOW>

                                            <ReactWOW animation='rotateIn' delay='0.6s'>
                                                <img src={filter3} alt="filter3" />
                                            </ReactWOW>

                                            <ReactWOW animation='fadeInUp' delay='0.6s'>
                                                <img src={girl1} alt="girl1" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.6s'>
                                                <img src={girl2} alt="girl2" />
                                            </ReactWOW>

                                            <ReactWOW animation='zoomIn' delay='0.6s'>
                                                <img src={monitor} alt="monitor" />
                                            </ReactWOW>
    
                                            {/* Main image */}
                                            <ReactWOW animation='zoomIn' delay='0.6s'>
                                                <img src={mainimage} alt="Main image" />
                                            </ReactWOW>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content pl-4">
                                            <h1>Manage your business strategy in one placeholder</h1>
                                            <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link href="#">
                                                        <a className="default-btn">
                                                            <i className="bx bxs-hot"></i>
                                                            Get Started 
                                                            <span></span>
                                                        </a>
                                                    </Link>

                                                    <Link href="#play-video">
                                                        <a
                                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                                            className="video-btn popup-youtube"
                                                        > 
                                                            <i className='bx bxs-right-arrow'></i> Watch Video 
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-rotate rotateme">
                        <img src="/images/saas-shape/shape-rotate.png" alt="image" />
                    </div>
                    
                    <div className="particles-content">
                        <Particles
                            params={{...particleOpt}}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;