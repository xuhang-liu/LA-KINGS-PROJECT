import React, { Component } from "react";

export class ResumeEva extends Component {


    render() {
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <h1>{this.props.interviewResume.soft_skill_info_list[0]}</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ResumeEva;