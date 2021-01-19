import React, { Component } from "react";
import { ReceivedInterview } from "./ReceivedInterview";

export class ReceivedInterviewList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.loaded ?
                    this.props.received_interview.map((r) => {
                      return (
                          <ReceivedInterview
                          user={this.props.user}
                          received_interview={r}
                          />
                      )
                    }) : null
                }
            </React.Fragment>
        );
    };
}

export default (ReceivedInterviewList);