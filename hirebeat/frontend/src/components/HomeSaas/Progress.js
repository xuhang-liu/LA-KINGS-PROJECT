import React, { Component } from 'react';
//import ReactWOW from 'react-wow';


class Progress extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100">
                <div className="container max-width-1290" style={{maxWidth:"1440px"}}>
                    <div className="section-title" style={{maxWidth: "50rem"}}>
                        <h2>Our Customers Are Making Progress</h2>
                    </div>

                    <div className="row" style={{margin: "auto"}}>
                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/progress01.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>1000+ Job Landed</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                HireBeat has helped 1000+ job seakers land their dream jobs, and is still counting
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/progress02.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>68% Time Saved</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                HireBeat has saved jobseaker more than 68% of interview preparation time
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/progress03.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                            <h3 style={{marginTop:"1rem", fontWeight:"600", color:"#090d3a"}}>82% Effectiveness</h3>
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem", textAlign:"center", width:"70%", color:"#090d3a"}}>
                                Our users on average have increased their resume effectiveness by 82%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Progress;