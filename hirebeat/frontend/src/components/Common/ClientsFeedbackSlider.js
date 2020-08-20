import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel3';
import feedback1 from "../public/images/feedback/feedback1.png";
import feedback2 from "../public/images/feedback/feedback2.png";
import feedback3 from "../public/images/feedback/feedback3.png";

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 2,
        },
        1200: {
            items: 2,
        }
    }
}

class ClientsFeedbackSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Whats Our Clients Said About <span>Hepro</span></h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-item">
                            <img src={feedback1} alt="image" />

                            <div className="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <h3>Sarah Taylor</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <img src={feedback2} alt="image" />

                            <div className="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <h3>Olivar Lucy</h3>
                                    <span>CEO at EnvyTheme</span>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-item">
                            <img src={feedback3} alt="image" />

                            <div className="feedback-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <h3>Steven Smith</h3>
                                    <span>CEO at Envato</span>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default ClientsFeedbackSlider;