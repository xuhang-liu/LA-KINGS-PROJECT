import React, { Component } from 'react';
//import ReactWOW from 'react-wow';
//import FunFacts from '../Common/FunFacts';
//import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';

const options = {
    loop: true,
    nav: false,
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
            <section className="feedback-area pt-100 pb-100 bg-e8edfc">
                <div className="container">
                    <div className="section-title" style={{maxWidth:"800px"}}>
                        <h2>Customers Feedback of <span>HireBeat</span></h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {/*1*/}
                        <div className="single-feedback-item h-100">

                            <div className="feedback-desc">
                                <p>My frustration with being insecure about doing badly in interviews ultimately ended after I started using HireBeat. After practicing and getting feedback for a wide variety of behavioral questions, I can now fully articulate and concisely deliver my answers during interviews!</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <img src={user5}  alt="image"/>
                                    <h3>Harrison</h3>
                                    <p>ASU Class Of 2022</p>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="single-feedback-item h-100">

                            <div className="feedback-desc">
                                <p>Since I started using HireBeat’s resume matching service, I have received more interview invitations than ever! After learning missing vital aspects of my resume, I wrote a more detailed resume for each job position that I was applying to. I highly recommend HireBeat!</p>

                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <img src={user4}  alt="image"/>
                                    <h3>Megan</h3>
                                    <p>UGA Class Of 2023</p>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="single-feedback-item h-100">

                            <div className="feedback-desc">
                                <p>I’ve been using hirebeat to improve my interviewing in technical roles to compete in this challenging job market. It has helped me improve my skills and my demeanor in interviews to a great extent. I’m much more prepared for my career than ever before!</p>
                                <br/>
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
                                    <p>NYU Class Of 2023</p>
                                </div>
                            </div>
                        </div>
                        {/*4*/}
                        <div className="single-feedback-item h-100">

                            <div className="feedback-desc">
                                <p>I used HireBeat to improve my interview performance, and the result exceeded my expectations. It’s like hiring a personal interview tutor for myself, but with a way lower price. Now I have also got an offer from my dream company!</p>
                                <br/>
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
                                    <p>UCSD Class Of 2021</p>
                                </div>
                            </div>
                        </div>
                        {/*5*/}
                        <div className="single-feedback-item h-100">

                            <div className="feedback-desc">
                                <p>After struggling during many job interviews, I decided to use HireBeat to help me better prepare. Within two weeks of usage, my interview confidence increases significantly. Now, I am more ready than ever to take the interview.</p>
                                <br/>
                                <div className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                </div>

                                <div className="client-info">
                                    <img src={user3}  alt="image"/>
                                    <h3>David</h3>
                                    <p>USC Class Of 2021</p>
                                </div>
                            </div>
                        </div>
                        
                    </OwlCarousel> : ''}
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default ClientsFeedbackSlider;