import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import {Link} from "react-router-dom";
import 'boxicons';

class LeverageHireBeat extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="features-area pt-100 pb-70 bg-leverageHirebeat">
                <div style={{width:"85vw", margin:"auto"}}>
                    <div className="text-center" style={{color:"#090D3A"}}>
                        <h1 style={{fontWeight:"600"}}>The Platform that Works for You</h1>
                    </div>
                    <ReactWOW animation='fadeInRight' delay='0.1s'>
                    <div className="row my-5">
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='stopwatch' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#13C4A1", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Time</h3>
                                            <h5>Streamline screening process and reduce time up to 80%</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='money' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#FAC046", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Cost</h3>
                                            <h5>Save hiring and recruiting cost by up to 50% </h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='trip' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#FF6B00", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Engagement</h3>
                                            <h5>Review candidate with no time or place limitation</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='devices' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#6E6BFF", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3 style={{fontWeight:"600"}}>Collaboration</h3>
                                            <h5>Invite team to work on candidate screening virtually</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>
                </div>
            </section>
            <ReactWOW>
            <div className="overview-item pt-100">
                <div className="container max-width-1440">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="overview-right-img">
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/about.png' alt="png" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="overview-content pl-3">
                                <h3 style={{fontSize: "2.625rem"}}>About HireBeat</h3>
                                <p>HireBeat is a convenient web platform that decreases 90% of your time to hire right candidates via customized interview questions and pre-recorded video interviews.</p>
                                <Link to='/employer_register' id="id-employer_signup2" className='default-btn' style={{backgroundColor: "#67A3F3", textDecoration:'none'}}>
                                <i className="bx bxs-arrow-to-right"></i>
                                    Create Interviews For Free
                                <span></span>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ReactWOW>
        </React.Fragment>
        );
    }
}

export default LeverageHireBeat;