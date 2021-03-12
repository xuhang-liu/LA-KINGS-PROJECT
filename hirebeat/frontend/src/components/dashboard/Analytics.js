import React, { Component } from "react";
import { IconText } from "./DashboardComponents";
//import { connect } from "react-redux";

export class Analytics extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                        <button type="button" style={{backgroundColor:"#e8edfc", border:"none"}} onClick={this.props.renderApplications}>
                            <IconText
                                iconName={"bx bx-arrow-back bx-sm"}
                                textDisplayed={"Back"}
                                textSize={"18px"}
                                textColor={"#56a3fa"}
                                iconMargin={"3px"}
                            />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                        <h3>Hi, {this.props.user.username}. This page is coming soon!</h3>
                    </div>
                </div>
            </div>
        );

    };

}

export default Analytics;