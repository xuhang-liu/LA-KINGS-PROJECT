import React, { Component } from "react";

export class Education extends Component {

    render() {
        return(
            <div style={{marginBottom: "2rem"}}>
                <div className="row">
                    <div className="col-8">
                        <h3 className="profile-h3">Education {this.props.index + 1}</h3>
                    </div>
                    {this.props.index == 0 &&
                    <div className="col-4 profile-edit">
                        <div style={{float: "right"}}>
                            <i className="bx bx-edit-alt"></i>
                            <span type="button" onClick={this.props.editEducation} style={{marginLeft: "0.5rem"}}>Edit</span>
                        </div>
                    </div>}
                </div>
                {(this.props.school !== null && this.props.school !== "") ?
                    <p className="profile-p3" style={{marginBottom: "0.5rem"}}>{this.props.school}</p> :
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your education history</p>
                }
                {(this.props.major1 != "" && this.props.major1 != null) &&
                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.major1} | {this.props.gpa}</p>
                }
                <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.graduationDate}</p>
            </div>
        )
    }
}

export default Education