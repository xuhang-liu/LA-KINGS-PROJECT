import React from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo"

class ReviewApplication extends React.Component{
    render() {
        return(
            <div className="container" style={{width:'95%'}}>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <button 
                            type="button" 
                            className="panel-button"
                            onClick={this.props.renderVideos}
                            style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                        >
                            <IconText
                                iconName={"bx bx-arrow-back bx-sm"}
                                textDisplayed={"Back"}
                                textSize={"20px"}
                                textColor={"#67A3F3"}
                                iconMargin={"3px"}
                            />
                        </button>
                    </div>
                </div>  

                <div className="card container" style={{marginTop:"1%"}}>
                    <div className="row">
                        <div className="col-3 container">
                                <div className="row" style={{marginTop:"10%", marginBottom:"2%"}}>
                                    <div className="col d-flex align-items-center">
                                    <h4
                                        style={{
                                        fontWeight: "bold",
                                        marginRight: "0.8rem",
                                        }}
                                    >
                                        {this.props.candidate.username}  
                                    </h4>
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-phone bx-sm"}
                                            textDisplayed={this.props.candidate_profile.phone_number}
                                            textSize={"12px"}
                                            textColor={"#0B3861"}
                                            iconMargin={"3px"}
                                            />
                                    </div>
                                </div>
                                <div className="row" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-envelope bx-sm"}
                                            textDisplayed={this.props.candidate.email}
                                            textSize={"12px"}
                                            textColor={"#0B3861"}
                                            iconMargin={"5px"}
                                            />
                                </div>
                                </div>
                                <div className="row" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-location-plus bx-sm"}
                                            textDisplayed={this.props.candidate_profile.location}
                                            textSize={"12px"}
                                            textColor={"#0B3861"}
                                            iconMargin={"3px"}
                                            />
                                    </div>
                                </div>
                        </div>
                        <div className="col-7 container mt-4">
                            <ApplicationVideo />
                        </div>
                        <div className="col-2 container" style={{marginTop:"2.5%"}}>
                            <div className="container mt-3">
                                <button className="btn btn-success btn-block" style={{marginBottom:"10%"}}>
                                    Accept
                                </button>
                                <button className="btn btn-warning btn-block" style={{marginBottom:"10%"}}>
                                    On Hold
                                </button>
                                <button className="btn btn-danger btn-block" style={{marginBottom:"10%"}}>
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default ReviewApplication;