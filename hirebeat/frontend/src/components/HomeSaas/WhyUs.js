import React, { Component } from 'react';
//import ReactWOW from 'react-wow';
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
                    videoId='Uja3ZefBRe8'
                    onClose={() => this.setState({isOpen: false})}
                />

                <section className="features-area pt-100 pb-70      " style={{background: "#67a3f3"}}>
                    <div className="container max-width-1440">

                        <div className="row" style={{width: "100%", margin: "auto"}}>
                            <div className="col-lg-8 col-md-8">
                                <div className="video-box">
                                    <img src="https://hirebeat-assets.s3.amazonaws.com/home_bg.png" className="main-image" alt="image" />

                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn popup-youtube"
                                            style={{top:"45%", backgroundColor:"ff6b00"}}
                                        >
                                            <i id="id-video1" className="bx bx-play" style={{color:"white"}}></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <p className="section-txt3" style={{marginTop:"3rem", color:"#090d3a"}}>We Lead You to Success</p>
                                <p className="section-txt4">Watch this video to know more</p>
                                <a href="/howitworks" className="read-more" style={{color: "#ffffff", fontSize:"1rem", textDecoration:"none", marginLeft:"20%"}}>
                                    Learn how HireBeat works <i class="bx bx-right-arrow-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default WhyUs;