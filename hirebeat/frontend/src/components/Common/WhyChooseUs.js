import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ReactWOW from 'react-wow';
import FunFacts from './FunFacts';
import ModalVideo from 'react-modal-video';
import videobg from "../public/images/video-bg.jpg";
import shape1 from "../public/images/shape/shape1.png";
import shape2 from "../public/images/shape/shape2.png";
import shape3 from "../public/images/shape/shape3.png";
import shape4 from "../public/images/shape/shape4.png";
import shape5 from "../public/images/shape/shape5.png";
import shape6 from "../public/images/shape/shape6.png";
import map1 from "../public/images/map1.png";
import shape7 from "../public/images/shape/shape7.png";
import shape8 from "../public/images/shape/shape8.png";
import shape9 from "../public/images/shape/shape9.png";

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
                            <img src={videobg} className="main-image" alt="image" />

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="bx bx-play" style={{color:"white"}}></i>
                                </a>
                            </Link>
 
                            {/* Shape Images */}
                            <div className="shape1">
                                <img src={shape1} alt="image" />
                            </div>
                            <div className="shape2">
                                <img src={shape2} alt="image" />
                            </div>
                            <div className="shape3">
                                <img src={shape3} alt="image" />
                            </div>
                            <div className="shape5">
                                <img src={shape5} alt="image" />
                            </div>
                            <div className="shape6">
                                <img src={shape6} alt="image" />
                            </div>
                        </div>

                        {/* Fun Facts Style One */}
                        <FunFacts />

                        <ReactWOW animation='fadeInUp' delay='0.8s'>
                            <div className="contact-cta-box mwidth-1000">
                                <h3>Have any questions about us?</h3>
                                <p>Don't hesitate to contact us.</p>

                                <Link to="/contact">
                                    <a className="default-btn" style={{color:"white"}}>
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
                        <img src={map1} alt="image" />
                    </div>
                    <div className="shape7">
                        <img src={shape7} alt="image" />
                    </div>
                    <div className="shape8">
                        <img src={shape8} alt="image" />
                    </div>
                    <div className="shape9">
                        <img src={shape9} alt="image" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyChooseUs;