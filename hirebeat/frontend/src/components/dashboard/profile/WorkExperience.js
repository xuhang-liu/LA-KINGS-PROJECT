import React, { Component } from "react";

export class WorkExperience extends Component {

    render() {
        return(
            <div style={{marginBottom: "2rem"}}>
                <div className="row">
                    <div className="col-8">
                        <h3 className="profile-h3">Experience {this.props.index + 1}</h3>
                    </div>
                    {this.props.index == 0 &&
                    <div className="col-4 profile-edit">
                        <div style={{float: "right"}}>
                            <i className="bx bx-edit-alt"></i>
                            <span onClick={this.props.editWorkExp} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                        </div>
                    </div>}
                </div>
                {(this.props.title !== null && this.props.title !== "") ?
                    <p className="profile-p3" style={{marginBottom: "0.5rem"}}>{this.props.title}</p> :
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your wok experience</p>
                }

                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.company}</p>
                {(this.props.startDate != "" && this.props.startDate != null) &&
                    <p className="profile-p4" style={{marginBottom: "0.5rem", color: "#7D7D7D"}}>
                        {this.props.startDate} - {this.props.endDate}
                    </p>
                }
                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.workDescription}</p>
            </div>
        )
    }
}

export default WorkExperience