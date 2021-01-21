import React, { Component } from 'react';
import {Link} from "react-router-dom";
//import MediaQuery from 'react-responsive';


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
                <div className="employer-main-banner">
                    <div className="title">
                        <h1 style={{fontSize:"2.4rem", fontWeight:"600"}}>
                            Video Interview Platform that Transformed the Hiring Porcess
                        </h1>
                    </div>
                    <div className="my-3">
                        <h5 style={{color:"#4A6F8A"}}>
                            We help recuitment team hire talents much faster than ever
                        </h5>
                    </div>
                    <div className="mt-5">
                        <Link to="/employer_register">
                            <button className="default-btn1 px-4">
                                Create Interviews for Free
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="before-after">
                    <div className="text-center">
                        <h1 style={{fontSize:"2.4rem", fontWeight:"600", color:"#090D3A"}}>
                            Our Clients Are Seeing Results
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mt-5">
                            <div className="container ml-5 pl-5">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/before.png"></img>
                                <div className="before">
                                    <h3>
                                        Total 500 Candidates
                                    </h3>
                                    <h5>
                                        Interview 20 candidates per day
                                    </h5>
                                    <h3>
                                        25 days needed
                                    </h3>
                                    <h5>
                                        10% efficiency
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 after">
                            <div className="container pr-5 mr-5">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/now.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;