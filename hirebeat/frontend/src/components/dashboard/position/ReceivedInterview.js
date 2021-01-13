import React, { Component } from "react";

export class ReceivedInterview extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="container d-flex justify-content-start " style={{marginTop:"2%", backgroundColor: "white", "border-radius": "0.5rem"}}>
                <div className="col-12" style={{fontFamily: "Avenir Next" }}>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-2" style={{color:"#090D3A"}}>
                                <h3>Airbnb</h3>
                            </div>
                            <div className="col-3" style={{color:"#56A3FA"}}>
                                <h3>Product Designer</h3>
                            </div>
                            <div className="col-4">
                                <h5 style={{color:"#ff6b00"}}><i className="bx bx-loader-circle bx-sm"></i> Pending</h5>
                            </div>
                            <div className="col-3 mt-2">
                            <button className="default-btn" style={{paddingLeft:"25px"}}>
                                Start Interview
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="row mb-2 mt-1">
                        <div className="col-2">
                            <p style={{color:"#4A6F8A"}}>3 Questions</p>
                        </div>
                        <div className="col-7 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                            <p>Received Date: Januray 31</p>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    };
}

export default (ReceivedInterview);