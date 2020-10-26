import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import Particles from 'react-particles-js';
import ModalVideo from 'react-modal-video';
import MediaQuery from 'react-responsive';
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
                <ModalVideo 
                    channel='youtube' 
                    youtube={{
                        autoplay: 1,
                        mute: 1
                      }}
                    isOpen={this.state.isOpen} 
                    videoId='aJPnes3-yOQ'
                    onClose={() => this.setState({isOpen: false})} 
                />

                <div className="saas-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container max-width-1440">
                                <div className="row align-items-center pt-8">
                                    <div className="col-lg-5 col-md-12">
                                        <div className="saas-image mt-70">
                                            <ReactWOW animation='fadeInDown' delay='0.6s'>
                                                <img src={arrow} alt="arrow" />
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
                                    <div className="col-lg-7 col-md-12">
                                        <div className="hero-content pl-6">
                                            <h1>All-in-one stop to land your next dream job</h1>
                                            <p>Gain confidence and competence with AI-powered interview training and resume matching to boost your career path</p>
                                            
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link to="/practice">
                                                        <a className="default-btn" style={{color:"white"}}>
                                                            <i className="bx bxs-hot"></i>
                                                            Try For Free 
                                                            <span></span>
                                                        </a>
                                                    </Link>

                                                    <Link to="/">
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
                        <img src={shape} alt="image" />
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