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
                        <h1 style={{fontSize:"2.4rem", fontWeight:"600", color:"#ffffff"}}>
                            Video Interview Platform that Transformed the Hiring Porcess
                        </h1>
                    </div>
                    <div className="my-3">
                        <h4 style={{color:"#ffffff", paddingTop:"1rem"}}>
                            We help recuitment team hire talents much faster than ever
                        </h4>
                    </div>
                    <div className="mt-5">
                        <Link to="/employer_register" id="id-employer_signup2">
                            <button className="default-btn px-4">
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
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/result1.png"></img>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 after">
                            <div className="container pr-5 mr-5">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/result2.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;