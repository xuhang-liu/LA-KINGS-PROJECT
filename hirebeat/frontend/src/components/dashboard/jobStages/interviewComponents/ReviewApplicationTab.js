import React, { Component } from 'react';

export class ReviewApplicationTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ border: "2px solid #E8EDFC", boxSizing: "border-box", borderRadius: "5px" }}>
                    <div className="container-fluid pb-5 pt-3">
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#000" }}>Screening Questions (Qualified 1/2)</h3>
                        <div>
                            <div className="row pl-5 pt-3">
                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}>Question 1
                                    <span style={{ marginLeft: "1rem", fontSize: "0.8rem", fontWeight: "600", color: "#67A3F3" }}>Must-have qualification</span>
                                </p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <p>
                                    How many years of work experience do you have using Excel?
                                </p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}>Answer</p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <div style={{ border: "2px solid #67A3F3", boxSizing: "border-box", borderRadius: "3px", width: "8rem", paddingLeft: "1rem", display: "inline-block" }}>
                                    <p>3</p>
                                </div>
                                <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                    <p style={{ color: "#13C4A1", fontWeight: "500", fontSize: "0.8rem", paddingTop: "0.3rem" }}><i className="bx-fw bx bx-check-circle bx-sm"></i> Qualified</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row pl-5 pt-3">
                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}>Question 2
                                </p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <p>
                                    Do you have any experience using sql?
                                </p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000" }}>Answer</p>
                            </div>
                            <div className="row pl-5 pt-2">
                                <div style={{ border: "2px solid #67A3F3", boxSizing: "border-box", borderRadius: "3px", width: "8rem", paddingLeft: "1rem", display: "inline-block" }}>
                                    <p>No</p>
                                </div>
                                <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                    <p style={{ color: "#FF5050", fontWeight: "500", fontSize: "0.8rem", paddingTop: "0.3rem" }}><i className="bx-fw bx bx-x-circle bx-sm"></i> Unqualified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default ReviewApplicationTab;