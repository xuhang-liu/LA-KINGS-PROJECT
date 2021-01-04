import React, { Component } from 'react';
//import ReactWOW from 'react-wow';


class Progress extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-100 bg-f4f6fc">
                <div className="container max-width-1290">
                    <div className="section-title" style={{maxWidth: "50rem"}}>
                        <h2>Our Customers Are Seeing Results</h2>
                    </div>

                    <div className="row" style={{width: "80%", margin: "auto"}}>
                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items   ">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/c1.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem"}}>
                                    <span className="section-txt2">82%</span> of companies already <br />
                                    use virtual interview screening <br />
                                    and AI analysis in hiring process
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/c2.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem"}}>
                                    HireBeat saves job seeker <br />
                                    more than <span className="section-txt2">68%</span> of <br />
                                    interview preparation time
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/c3.png" alt="Progress figure" />
                            </div>
                            <div className="justify-items">
                                <p className="section-txt1" style={{lineHeight:"36px", marginTop:"0.5rem"}}>
                                    Our users on average <br />
                                    increased their Resume <br />
                                    competence by <span className="section-txt2">47%</span>
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