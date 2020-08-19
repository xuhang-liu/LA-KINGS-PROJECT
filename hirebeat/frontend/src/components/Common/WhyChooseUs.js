import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import FunFacts from './FunFacts';
import ModalVideo from 'react-modal-video';

class WhyChooseUs extends Component {

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
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <section className="video-presentation-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Why choose us to watch this video know more</h2>
                        </div>

                        <div className="video-box">
                            <img src="/images/video-bg.jpg" className="main-image" alt="image" />

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="bx bx-play"></i>
                                </a>
                            </Link>
 
                            {/* Shape Images */}
                            <div className="shape1">
                                <img src="/images/shape/shape1.png" alt="image" />
                            </div>
                            <div className="shape2">
                                <img src="/images/shape/shape2.png" alt="image" />
                            </div>
                            <div className="shape3">
                                <img src="/images/shape/shape3.png" alt="image" />
                            </div>
                            <div className="shape4">
                                <img src="/images/shape/shape4.png" alt="image" />
                            </div>
                            <div className="shape5">
                                <img src="/images/shape/shape5.png" alt="image" />
                            </div>
                            <div className="shape6">
                                <img src="/images/shape/shape6.png" alt="image" />
                            </div>
                        </div>

                        {/* Fun Facts Style One */}
                        <FunFacts />

                        <ReactWOW animation='fadeInUp' delay='0.8s'>
                            <div className="contact-cta-box mwidth-1000">
                                <h3>Have any questions about us?</h3>
                                <p>Don't hesitate to contact us.</p>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        <i className="bx bxs-edit-alt"></i>
                                        Contact Us
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </ReactWOW>
                    </div>

                    {/* Shape Images */}
                    <div className="shape-map1">
                        <img src="/images/map1.png" alt="image" />
                    </div>
                    <div className="shape7">
                        <img src="/images/shape/shape7.png" alt="image" />
                    </div>
                    <div className="shape8">
                        <img src="/images/shape/shape8.png" alt="image" />
                    </div>
                    <div className="shape9">
                        <img src="/images/shape/shape9.png" alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyChooseUs;