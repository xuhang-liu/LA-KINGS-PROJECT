import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateJob, archiveJob, getAllJobs, deleteJob} from "../../../redux/actions/job_actions";

export class JobCard extends Component{

    editJob = () => {
        let id = this.props.job.job_details.id;
        setTimeout(() => {this.props.getAllJobs(this.props.user.id);}, 300);

    };

    archiveJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": true,
        }
        this.props.archiveJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs();}, 300);
    };

    deleteJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "userId": this.props.user.id,
        }
        this.props.deleteJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs();}, 300);
    };

    activateJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": false,
        }
        this.props.archiveJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs();}, 300);
    };

    render() {
        return(
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
                <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                    <div className="col-3 interview-txt9 mt-2">
                        <button
                            className="title-button2"
                            onClick={() => {this.props.enableView(true); this.props.setCurJob(this.props.job)}}
                        >
                            {this.props.job.job_details.job_title}
                        </button>

                    </div>
                    <div className="col-1 interview-txt9 mt-2">{this.props.job.job_details.job_id}</div>
                    <div className="col-2 interview-txt9 mt-2">{this.props.job.applicants.length}</div>
                    <div className="col-2 interview-txt9 mt-2">{this.props.job.job_details.create_date.substring(0, 10)}</div>
                    <div className="col-2 interview-txt9 mt-2" style={{display: "flex", alignItems: "center"}}>
                        <i className="bx bx-show" style={{color: "#67A3F3", marginRight: "0.3rem"}}></i>
                        <a target="_blank" href={this.props.job.job_details.job_url}>Preview</a>
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
                    <span type="button" onClick={() => {props.setJobInfo(props.jobInfo); props.renderJobEdition()}}>
                        Edit
                    </span>
                </div>
                {props.applicantsNum > 0 ?
                    <div className="profile-edit" style={{color: "#F36F67", marginLeft: "5%"}}>
                        <i className="bx bx-box"></i>
                        <span type="button" onClick={props.archiveJob}>Archive</span>
                    </div> :
                    <div className="profile-edit" style={{color: "#F36F67", marginLeft: "5%"}}>
                        <i className="bx bx-trash"></i>
                        <span type="button" onClick={deleteAlert}>Delete</span>
                    </div>}
            </div> :
            <div className="row">
                <div className="profile-edit">
                    <span type="button" onClick={props.activateJob}>Reactive</span>
                </div>
            </div>
        }
        </div>


    );
}

export default withRouter(connect(null, { updateJob, archiveJob, getAllJobs, deleteJob})(
  JobCard
));