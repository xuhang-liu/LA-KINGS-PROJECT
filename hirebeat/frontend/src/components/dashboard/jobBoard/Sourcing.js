import React, { Component } from "react";

export class Sourcing extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container min-width-980">
                    <div style={{ marginBottom: "30px" }}>
                        <h3><b><i className="bx-fw bx bx-user-circle"></i><span className="ml-2">Sourcing</span></b></h3>
                    </div>
                    <div>
                        <div className="input-sourcing-outter-box">
                            <i style={{ color: "#67a3fa" }} className="bx-fw bx bx-search bx-xs"></i><input className="sourcing-input-search" placeholder="Enter keywords"></input>
                        </div>
                        <span className="input-sourcing-outter-box1" style={{ cursor: "pointer" }}><i style={{ color: "#67a3fa" }} className="bx-fw bx bx-slider-alt bx-xs"></i>All Fillters</span>
                        <span className="input-sourcing-outter-box2" style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Search</span>
                        <p style={{ color: "#090d3a", fontSize: "0.9rem", fontWeight: "normal", marginTop: "1rem" }}>Didn't find what you are looking for? Let us help you! <a style={{ color: "#ff6b00", fontWeight: "600", marginLeft: "0.5rem", textDecoration: "none" }} target="_blank" href="/employer_talent_sourcing">GO >></a></p>
                    </div>
                    <div className="mt-5">
                        <p style={{ color: "#090d3a" }}>Result:  20 / 1,237</p>
                        {/* List Start */}
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="profile-bg" style={{ textAlign: "left", padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                        </div>
                                        <div className="col-9">
                                            <div><p className="profile-p3" style={{ display: "inline-block", marginRight: "0.5rem" }}>Wade Warren</p><span className="input-sourcing-outter-box3">Video Profile</span></div>
                                            <p className="profile-p">UI Designer at HireBeat</p>
                                            <p className="profile-p" style={{ marginTop: "-1rem" }}>New York City, NY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="profile-bg" style={{ textAlign: "left", padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                        </div>
                                        <div className="col-9">
                                            <p className="profile-p3">Wade Warren</p>
                                            <p className="profile-p">UI Designer at HireBeat</p>
                                            <p className="profile-p" style={{ marginTop: "-1rem" }}>New York City, NY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-6">
                                <div className="profile-bg" style={{ textAlign: "left", padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                        </div>
                                        <div className="col-9">
                                            <div><p className="profile-p3" style={{ display: "inline-block", marginRight: "0.5rem" }}>Wade Warren</p><span className="input-sourcing-outter-box3">Video Profile</span></div>
                                            <p className="profile-p">UI Designer at HireBeat</p>
                                            <p className="profile-p" style={{ marginTop: "-1rem" }}>New York City, NY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="profile-bg" style={{ textAlign: "left", padding: "2rem" }}>
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                        </div>
                                        <div className="col-9">
                                            <p className="profile-p3">Wade Warren</p>
                                            <p className="profile-p">UI Designer at HireBeat</p>
                                            <p className="profile-p" style={{ marginTop: "-1rem" }}>New York City, NY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sourcing;