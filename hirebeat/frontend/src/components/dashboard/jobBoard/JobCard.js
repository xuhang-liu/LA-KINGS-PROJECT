import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML } from "../../../redux/actions/job_actions";

export class JobCard extends Component {

    editJob = () => {
        let id = this.props.job.job_details.id;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id); }, 300);

    };

    archiveJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": true,
            "userId": this.props.user.id,
        }
        this.props.archiveJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
    };

    deleteJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "userId": this.props.user.id,
        }
        this.props.deleteJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
    };

    activateJob = () => {
        if ((this.props.profile.position_count) >= (this.props.profile.position_limit)) {
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'Exceed max number of positions! Upgrade now to get more active positions',
                buttons: [
                    { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                    { label: 'OK' },
                ]
            });
        } else {
            let id = this.props.job.job_details.id;
            let data = {
                "id": id,
                "isClosed": false,
                "userId": this.props.user.id,
            }
            this.props.archiveJob(data);
            setTimeout(() => { this.props.getAllJobs(this.props.user.id); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
        }
    };

    render() {
        return (
            <div>
                <hr
                    style={{
                        color: "#E8EDFC",
                        backgroundColor: "#E8EDFC",
                        height: 3,
                        marginBottom: "0.5rem",
                        marginTop: "0rem"
                    }}
                />
                <div className="row interview-txt7 interview-center " style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                    <div className="col-3 interview-txt9 mt-2">
                        {this.props.job.un_view ? <span className="dot"></span> : <span className="dot" style={{ visibility: "hidden" }}></span>}
                        <button
                            className="title-button2"
                            onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.enableView(); sessionStorage.setItem("view", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                        >
                            {this.props.job.job_details.job_title.length > 24 ? (this.props.job.job_details.job_title.substring(0, 22) + "...") : (this.props.job.job_details.job_title)}
                        </button>
                    </div>
                    <div className="col-1 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.job_id.length > 6 ? (this.props.job.job_details.job_id?.substring(0, 4) + "...") : (this.props.job.job_details.job_id)}</div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">
                        <button
                            className="title-button2"
                            onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.enableView(); sessionStorage.setItem("view", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                        >
                            {this.props.job.applicants.length}
                        </button>
                    </div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.create_date.substring(0, 10)}</div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2" style={{ display: "flex", alignItems: "center" }}>
                        <i className="bx bx-show" style={{ color: "#67A3F3", marginRight: "0.3rem" }}></i>
                        <a target="_blank" style={{ color: "#67A3F3" }} href={this.props.job.job_details.job_url}>Preview</a>
                    </div>
                    <div className="col-2 interview-txt9 mt-2">
                        <ActionButton
                            filter={this.props.filter}
                            archiveJob={this.archiveJob}
                            activateJob={this.activateJob}
                            deleteJob={this.deleteJob}
                            renderJobEdition={this.props.renderJobEdition}
                            setJobInfo={this.props.setJobInfo}
                            jobInfo={this.props.job.job_details}
                            applicantsNum={this.props.job.applicants.length}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const ActionButton = (props) => {
    let filter = props.filter;
    function deleteAlert() {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this job?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.deleteJob()
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    return (
        <div>
            {filter == "active" ?
                <div className="row">
                    <div className="profile-edit">
                        <i className="bx bx-edit-alt"></i>
                        <span className="tool_tip" style={{ cursor: "pointer" }} onClick={() => { props.setJobInfo(props.jobInfo); props.renderJobEdition() }}>
                            Edit
                            <p className="tool_submenu container" style={{ width: "9rem", left: "1rem" }}>
                                <div>
                                    Edit job posting.
                                </div>
                            </p>
                        </span>
                    </div>
                    {props.applicantsNum > 0 ?
                        <div className="profile-edit" style={{ color: "#F36F67", marginLeft: "5%" }}>
                            <i className="bx bx-box"></i>
                            <span style={{ cursor: "pointer" }} onClick={props.archiveJob} className="tool_tip">Archive
                                <p className="tool_submenu container" style={{ width: "14rem", left: "2rem" }}>
                                    <div>
                                        This will close the position on job boards. You can reactivate the job at any time.
                                    </div>
                                </p>
                            </span>
                        </div> :
                        <div className="profile-edit" style={{ color: "#F36F67", marginLeft: "5%" }}>
                            <i className="bx bx-trash"></i>
                            <span style={{ cursor: "pointer" }} onClick={deleteAlert}>Delete</span>
                        </div>}
                </div> :
                <div className="row">
                    <div className="profile-edit">
                        <span style={{ cursor: "pointer" }} onClick={props.activateJob}>Reactivate</span>
                    </div>
                </div>
            }
        </div>


    );
}

export default withRouter(connect(null, { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML })(
    JobCard
));