import React, { Component } from "react";
import WorkExpForm from "./WorkExpForm";

export class WorkExperience extends Component {
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
                        {(this.props.workExp.company !== null && this.props.workExp.company !== "") ?
                            <div className="row">
                                <div className="col-8">
                                    <p className="profile-p3">{this.props.workExp.title}</p>
                                </div>
                                <div className="col-4 profile-edit">
                                    <div style={{float: "right"}}>
                                        <i className="bx bx-edit-alt"></i>
                                        <span onClick={this.handleEdit} style={{marginLeft: "0.5rem", cursor:"pointer"}}>Edit</span>
                                    </div>
                                </div>
                            </div> :
                            <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Add your wok experience</p>
                        }

                        <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.workExp.company} &nbsp; {this.props.workExp.start_date} {this.props.workExp.end_date?.length > 0 && " - "} {this.props.workExp.end_date}</p>
                        {(this.props.workExp.startDate != "" && this.props.workExp.startDate != null) &&
                            <p className="profile-p4" style={{marginBottom: "0.5rem", color: "#7D7D7D"}}>
                                {this.props.workExp.start_date} - {this.props.workExp.end_date}
                            </p>
                        }
                        <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{this.props.workExp.work_description}</p>
                    </div> :
                    <div>
                        <WorkExpForm
                            workExp={this.props.workExp}
                            userId={this.props.userId}
                            updateWorkExp={this.props.updateWorkExp}
                            getUpdatedData={this.props.getUpdatedData}
                            cancelEditWorkExp={this.props.cancelEditWorkExp}
                            closeEdit={this.closeEdit}
                            deleteProfileWorkExp={this.props.deleteProfileWorkExp}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default WorkExperience