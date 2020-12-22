import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";
import ModalVideo from 'react-modal-video';

class WhyUs extends Component {
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

                <section className="features-area pt-100 pb-70      " style={{background: "#67a3f3"}}>
                    <div className="container max-width-1290">

                        <div className="row" style={{width: "80%", margin: "auto"}}>
                            <div className="col-lg-8 col-md-8">
                                <div className="video-box">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/home_bg.png" className="main-image" alt="image" />

                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="bx bx-play" style={{color:"white"}}></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <p className="section-txt3">We Lead You to Success</p>
                                <p className="section-txt4">Why choose us? <br />Watch this video to know more</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyUs;