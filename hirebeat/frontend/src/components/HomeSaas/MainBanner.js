import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import Particles from 'react-particles-js';
import ModalVideo from 'react-modal-video';
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
                    videoId='Ct82zEpHUf8'
                    onClose={() => this.setState({isOpen: false})} 
                />

                <div className="saas-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container max-width-1440">
                                <div className="row align-items-center pt-8">
                            
                                    <div className="col-lg-7 col-md-6">
                                        <img src="https://hirebeat-assets.s3.amazonaws.com/top.gif" alt="loading..."/>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="hero-content pl-8">
                                            <h1>Land your next job, starting with the interview</h1>
                                            <p>AI-analysis interview training platform that supercharges your performance and makes a great impression at your next interview.</p>
                                            
                                            <div className="banner-btn">
                                                <div className="d-flex">
                                                    <Link to="/register">
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