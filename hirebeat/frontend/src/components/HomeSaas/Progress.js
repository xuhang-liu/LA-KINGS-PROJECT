import React, { Component } from 'react';
import ReactWOW from 'react-wow';


class Progress extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container max-width-1290">
                    <div className="section-title" style={{maxWidth: "50rem"}}>
                        <h2>Our Customers Are Making Progress</h2>
                    </div>

                    <div className="row" style={{width: "50%", margin: "auto"}}>
                        <div className="col-lg-6 col-md-6">
                            <div className="justify-items">
                                <p className="section-txt1">
                                    The average score increased by <br />
                                    <span className="section-txt2">80%</span> after a month of practice
                                </p>
                            </div>
                            <div className="justify-items   ">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/progress1.png" alt="Progress figure" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="justify-items">
                                <p className="section-txt1">
                                    The average score increased by <br />
                                    <span className="section-txt2">21%</span> after 5 practices
                                </p>
                            </div>
                            <div className="justify-items">
                                <img src="https://hirebeat-assets.s3.amazonaws.com/progress2.png" alt="Progress figure" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Progress;