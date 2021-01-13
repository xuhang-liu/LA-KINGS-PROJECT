import React, { Component } from "react";
import { ReceivedInterview } from "./ReceivedInterview";

export class ReceivedInterviewList extends Component {

    render() {
        return (
            <React.Fragment>
                <ReceivedInterview/>
                <div>{this.props.received_interview}</div>
            </React.Fragment>
        );
    };
}

export default (ReceivedInterviewList);