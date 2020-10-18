import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import FunFacts from '../Common/FunFacts';
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: false,
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
            <React.Fragment>
            <section className="feedback-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Whats Our Clients Said About <span>HireBeat</span></h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-feedback-item">

                            <div className="feedback-desc">
                                <p>I’ve been using hirebeat to improve my interviewing in technical roles to compete in this difficult job market. It has helped me improve my skills and my demeanor in interviews to a great extent. I’m much more prepared for my career then ever before!</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <img src={user1} alt="image" />
                                    <h3>Rebecca</h3>
                                </div>
                            </div>
                        </div>

                        <div className="single-feedback-item">

                            <div className="feedback-desc">
                                <p>I used HireBeat to improve my interview performance, and the result exceeded my expectations. It’s like hiring a personal interview tutor for myself, but with way cheaper price. Now I have also got an offer from my dream company!</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <img src={user2}  alt="image"/>
                                    <h3>Daniel</h3>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </section>
            <section className="video-presentation-area pb-100">
            <div className="container">
            {/* Fun Facts Style One */}
            <FunFacts />

            <ReactWOW animation='fadeInUp' delay='0.8s'>
                <div className="contact-cta-box mwidth-1000">
                    <h3>Join us and give a try</h3>
                    <p>Let HireBeat be your secret weapon to ace your next interview</p>

                    <Link to="/register">
                        <a className="default-btn" style={{color:"white"}}>
                            Try For Free
                            <span></span>
                        </a>
                    </Link>
                </div>
            </ReactWOW>
            </div>
            </section>
            </React.Fragment>
        );
    }
}

export default ClientsFeedbackSlider;