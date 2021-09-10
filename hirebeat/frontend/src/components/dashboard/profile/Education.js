import React, { Component } from "react";
import EducationForm from "./EducationForm";

export class Education extends Component {
    state = {
        isEdit: false,
    }

    handleEdit = () => {
        this.setState({isEdit: true});
    };

    closeEdit = () => {
        this.setState({isEdit: false});
    }

    render() {
        return(
            <div>
                {!this.state.isEdit ?
                    <div style={{marginBottom: "2rem"}}>
                        {(this.props.education.school !== null && this.props.education.school !== "") ?
                            <div className="row">
                                <div className="col-8">
                                    <p className="profile-p3">{this.props.education.school}</p>
                                </div>
                                <div className="col-4 profile-edit">
                                    <div style={{float: "right"}}>
                                        <i className="bx bx-edit-alt"></i>
                                        <span onClick={this.handleEdit} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                                    </div>
                                </div>
                            </div> :
                            <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your education history</p>
                        }
                        {(this.props.education.major != "" && this.props.education.major != null) &&
                            <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.education.major} | {this.props.education.gpa}</p>
                        }
                        <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.education.graduation_date}</p>
                    </div> :
                    <div>
                        <EducationForm
                            education={this.props.education}
                            userId={this.props.userId}
                            updateEducation={this.props.updateEducation}
                            getUpdatedData={this.props.getUpdatedData}
                            cancelEditEducation={this.props.cancelEditEducation}
                            deleteProfileEducation={this.props.deleteProfileEducation}
                            closeEdit={this.closeEdit}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Education