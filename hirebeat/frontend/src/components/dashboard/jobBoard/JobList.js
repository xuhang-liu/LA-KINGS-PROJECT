import React, { Component } from "react";
import JobCard from "./JobCard";
import ApplicantList from "./ApplicantList";

export class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyWords: "",
        };
    }

    onChange = (e) => {
        this.props.setState({ keyWords: e.target.value });
    };

    setViewTrue = () => {
        this.props.setView(true);
    };

    setViewFalse = () => {
        this.props.setView(false);
    };

    render() {
        return (
            <React.Fragment>
                {this.props.isLoaded &&
                    <div>
                        {(!this.props.view) ?
                            <div className="chart-bg1 container-fluid mt-5 pt-2 pb-3">
                                <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem", display: "flex" }}>
                                    <div style={{position:"absolute", left:"2.2rem", marginTop:"0.4rem"}}><i className="bx bx-search bx-sm"></i></div>
                                    <div>
                                        <input placeholder="Search jobs" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                                    </div>
                                </div>
                                <div className="chart-bg1 container-fluid" style={{ marginTop: "1.5rem", boxShadow:"0px 0px 10px rgba(128, 128, 128, 0.16)" }}>
                                    <div className="row interview-txt7" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                                        <div className="col-3"><span style={{marginLeft:"1.2rem"}}>Job Title</span></div>
                                        <div className="col-1 d-flex justify-content-center">ID</div>
                                        <div className="col-2 d-flex justify-content-center">Applicants</div>
                                        <div className="col-2 d-flex justify-content-center">Created On</div>
                                        <div className="col-2 d-flex justify-content-center">Job Page</div>
                                        <div className="col-2"><span style={{marginLeft:"1.2rem"}}>Action</span></div>
                                    </div>
                                    {Object.keys(this.props.jobs).sort((a, b) => new Date(this.props.jobs[b]["job_details"].create_date) - new Date(this.props.jobs[a]["job_details"].create_date)).map((key) => {
                                        let job = this.props.jobs[key];
                                        let curJobKey = key;
                                        if (this.props.filter) {
                                            switch (this.props.filter) {
                                                case "active":
                                                    if (job["job_details"].is_closed) return null;
                                                    if (this.state.keyWords != "") {
                                                        let jobTitle = job["job_details"].job_title;
                                                        if (!jobTitle.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                                                    }
                                                    break;
                                                case "closed":
                                                    if (!job["job_details"].is_closed) return null;
                                                    if (this.state.keyWords != "") {
                                                        let jobTitle = job["job_details"].job_title;
                                                        if (!jobTitle.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                                                    }
                                                    break;
                                                default:
                                                    return null;
                                            }
                                        }
                                        return (
                                            <JobCard
                                                filter={this.props.filter}
                                                job={job}
                                                user={this.props.user}
                                                profile={this.props.profile}
                                                setStatus={this.props.setStatus}
                                                enableView={this.setViewTrue}
                                                disableView={this.setViewFalse}
                                                setCurJob={this.props.setCurJob}
                                                renderJobEdition={this.props.renderJobEdition}
                                                setJobInfo={this.props.setJobInfo}
                                                getPJobs={this.props.getPJobs}
                                                curJobKey={curJobKey}
                                                setJobKey={this.props.setJobKey}
                                            />
                                        );
                                    })
                                    }
                                </div>
                            </div> :
                            <div>
                                <div>
                                    <div className="align-items-center">
                                        <button
                                            type="button"
                                            className="panel-button"
                                            onClick={() => { sessionStorage.removeItem("view"); sessionStorage.removeItem("jobKey"); this.setViewFalse() }}
                                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                                        >
                                            <div className="center-items back-to-text">
                                                <i className="bx bx-arrow-back bx-sm"></i>
                                                <p className="back-to-text">Back to Jobs</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <ApplicantList
                                    filter={this.props.filter}
                                    curJob={this.props.jobs[this.props.jobKey]}
                                    setCurJob={this.props.setCurJob}
                                    getAllJobs={this.props.getAllJobs}
                                    getPJobs={this.props.getPJobs}
                                />
                            </div>}
                    </div>}
            </React.Fragment>
        )
    }
}

export default JobList