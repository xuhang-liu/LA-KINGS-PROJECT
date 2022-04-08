import React, { Component } from "react";

export class SourcingRequestList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button className="default-btn" onClick={this.props.setrequestListHide}>back</button>
                    <p>list</p>
                </div>
            </React.Fragment>
        )
    }
}

export default SourcingRequestList;