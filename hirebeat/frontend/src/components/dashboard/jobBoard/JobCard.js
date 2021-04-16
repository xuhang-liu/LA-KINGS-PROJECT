import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateJob, archiveJob, getAllJobs} from "../../../redux/actions/job_actions";

export class JobCard extends Component{

    state = {
        isEdit: false,
    }

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
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getAllJobs(this.props.user.id);}, 300);
        setTimeout(() => {this.props.setStatus(0); this.props.setStatus(0)}, 300);
    };

    activateJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": false,
        }
        this.props.archiveJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id);}, 300);
        setTimeout(() => {this.props.setStatus(0); this.props.setStatus(0)}, 300);
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
                    <div className="col-2 interview-txt9 mt-2">{this.props.job.job_details.job_url}</div>
                    <div className="col-2 interview-txt9 mt-2">
                        <ActionButton filter={this.props.filter} archiveJob={this.archiveJob} activateJob={this.activateJob}/>
                    </div>
                </div>
            </div>
        )
    }
}

const ActionButton = (props) => {
    let filter = props.filter;
    return (
        <div>
        {filter == "active" ?
            <div className="row">
                <div className="profile-edit">
                    <i className="bx bx-edit-alt"></i>
                    <span type="button">Edit</span>
                </div>
                <div className="profile-edit" style={{color: "#F36F67", marginLeft: "5%"}}>
                    <i className="bx bx-box"></i>
                    <span type="button" onClick={props.archiveJob}>Archive</span>
                </div>
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

export default withRouter(connect(null, { updateJob, archiveJob, getAllJobs})(
  JobCard
));