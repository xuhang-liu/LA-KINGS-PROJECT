import React, { Component } from "react";
import { ReceivedInterview } from "./ReceivedInterview";

export class ReceivedInterviewList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.loaded &&
                <ReceivedInterview
                received_interview={this.props.received_interview}
                user={this.props.user}
                />}
            </React.Fragment>
        );
    };
}

export default (ReceivedInterviewList);