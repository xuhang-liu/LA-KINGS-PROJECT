import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';
import videobg from "../public/images/video-bg.jpg";
import shape1 from "../public/images/shape/shape1.png";
import shape2 from "../public/images/shape/shape2.png";
import shape3 from "../public/images/shape/shape3.png";
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
                    youtube={{
                        autoplay: 1,
                        mute: 1
                      }}
                    isOpen={this.state.isOpen} 
                    videoId='Ct82zEpHUf8' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <section className="video-presentation-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Why choose us</h2>
                            <h2>Watch this video to know more</h2>
                       </div>

                        <div className="video-box">
                            <img src={videobg} className="main-image" alt="image" />

                            <Link href="#play-video">
                                <a
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i id="id-video2" className="bx bx-play" style={{color:"white"}}></i>
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