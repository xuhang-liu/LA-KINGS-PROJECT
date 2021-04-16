import React, { Component, useEffect, useState } from "react";
import JobCard from "./JobCard";
import ApplicantList from "./ApplicantList";

export class JobList extends Component{
    state = {
        keyWords: "",
        jobs: this.props.jobs,
        view: false,
    }

    enableView = () => {
        this.setState({view: true});
    }

    disableView = () => {
        this.setState({view: false});
    }

    onChange = (e) => {
        this.setState({keyWords: e.target.value});
    };

    render() {
        return(
        <React.Fragment>
            {!this.state.view ?
            <div className="card container mt-3 pt-2 pb-3">
                <div className="interview-txt7 interview-center" style={{color:"#56a3fa", fontSize:"1rem", display: "flex"}}>
                    <div style={{paddingTop: "0.5rem"}}><i className="bx bx-search bx-sm"></i></div>
                    <div>
                        <input placeholder="Search jobs" className="search-candidate-input" style={{height: "auto"}} value={this.state.keyWords} onChange={this.onChange}></input>
                    </div>
                </div>
                <div className="card container" style={{marginTop:"1.5rem"}}>
                    <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                        <div className="col-3">Job Title</div>
                        <div className="col-1">ID</div>
                        <div className="col-2">Received</div>
                        <div className="col-2">Create Date</div>
                        <div className="col-2">Job Page</div>
                        <div className="col-2">Action</div>
                    </div>
                    {Object.keys(this.state.jobs).reverse().map((key) => {
                            let job = this.state.jobs[key];
                            if (this.props.filter) {
                                switch (this.props.filter) {
                                    case "active":
                                        if (job["job_details"].is_closed) return null;
                                        break;
                                    case "closed":
                                        if (!job["job_details"].is_closed) return null;
                                        break;
                                    default:
                                        return null;
                                }
                            }
                            return(
                                <JobCard
                                    filter={this.props.filter}
                                    job={job}
                                    user={this.props.user}
                                    setStatus={this.props.setStatus}
                                    enableView={this.enableView}
                                    disableView={this.disableView}
                                    setCurJob={this.props.setCurJob}
                                />
                            );
                        })
                    }
                </div>
            </div> :
            <div>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={this.disableView}
                            style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                        >
                            <div className="center-items">
                                <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                                <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back to Jobs</p>
                            </div>
                        </button>
                    </div>
                </div>
                <ApplicantList
                    curJob={this.props.curJob}
                />
            </div>}
        </React.Fragment>
        )
    }
}

export default JobList