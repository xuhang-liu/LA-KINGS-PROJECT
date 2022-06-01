import React, { Component } from "react";
import JobCard from "./JobCard";
import ApplicantList from "./ApplicantList";
import Select from 'react-select';

export class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // keyWords: "",
            job_closed: { value: "All", label: 'All' },
        };
    }

    customStyles = {
        control: styles => ({ ...styles, border: "none", marginTop: "-1rem", width: "10rem", paddingLeft: "1.3rem" }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    };

    options = [
        { value: 'All', label: 'All' },
        { value: 0, label: 'Published' },
        { value: 1, label: 'Archived' },
        { value: 2, label: 'Closed' },
        { value: 3, label: 'Draft' },
    ];

    onFilter = (job_closed) => {
        this.setState({ job_closed: job_closed })
    };

    // onChange = (e) => {
    //     this.setState({ keyWords: e.target.value });
    // };

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
                            <div className="chart-bg1 container-fluid mt-5 pt-3 pb-3">
                                {/* <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem", display: "flex", paddingLeft:"1rem" }}>
                                    <div style={{ position: "absolute", left: "3.2rem", marginTop: "0.4rem" }}><i className="bx bx-search bx-sm"></i></div>
                                    <div>
                                        <input placeholder="Search jobs" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                                    </div>
                                </div> */}
                                <div className="container-fluid" style={{ marginTop: "1rem" }}>
                                    <div className="row interview-txt7" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                        <div className="col-2"><Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles} className="select-category-jobs-closed" placeholder={"Status"} isSearchable={false} /></div>
                                        <div className="col-4 d-flex justify-content-start" style={{ paddingLeft: '2.2rem' }}>Job Title</div>
                                        <div className="col-2 d-flex justify-content-center">ID</div>
                                        <div className="col-2 d-flex justify-content-center">Applicants</div>
                                        <div className="col-2 d-flex justify-content-center">Created On</div>
                                    </div>
                                    {(Object.keys(this.props.jobs)?.length < 1) ?
                                        <div className="row" style={{paddingTop:"5rem", margin:"auto", width:"30%"}}>
                                            <img style={{cursor:"pointer"}} onClick={this.props.renderJobCreation} src="https://hirebeat-assets.s3.amazonaws.com/Employer/no-job-display-icon1.png" alt="icon"/>
                                        </div>:
                                        <span>
                                            {Object.keys(this.props.jobs).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => {
                                                let job = this.props.jobs[key];
                                                let curJobKey = key;
                                                if (this.props.keyWords != "") {
                                                    let jobTitle = job["job_details"].job_title;
                                                    if (!jobTitle.toLowerCase().includes(this.props.keyWords.toLowerCase())) return null;
                                                }
                                                if (this.state.job_closed["value"] != "All") {
                                                    switch (this.state.job_closed["value"]) {
                                                        case 0:
                                                            if (job["job_details"].is_closed != 0) return null;
                                                            if (this.props.keyWords != "") {
                                                                let jobTitle = job["job_details"].job_title;
                                                                if (!jobTitle.toLowerCase().includes(this.props.keyWords.toLowerCase())) return null;
                                                            }
                                                            break;
                                                        case 1:
                                                            if (job["job_details"].is_closed != 1) return null;
                                                            if (this.props.keyWords != "") {
                                                                let jobTitle = job["job_details"].job_title;
                                                                if (!jobTitle.toLowerCase().includes(this.props.keyWords.toLowerCase())) return null;
                                                            }
                                                            break;
                                                        case 2:
                                                            if (job["job_details"].is_closed != 2) return null;
                                                            if (this.props.keyWords != "") {
                                                                let jobTitle = job["job_details"].job_title;
                                                                if (!jobTitle.toLowerCase().includes(this.props.keyWords.toLowerCase())) return null;
                                                            }
                                                            break;
                                                        case 3:
                                                            if (job["job_details"].is_closed != 3) return null;
                                                            if (this.props.keyWords != "") {
                                                                let jobTitle = job["job_details"].job_title;
                                                                if (!jobTitle.toLowerCase().includes(this.props.keyWords.toLowerCase())) return null;
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
                                                        setViewPortal={this.props.setViewPortal}
                                                        setJob_back_home={this.props.setJob_back_home}
                                                    />
                                                );
                                            })
                                            }
                                        </span>}
                                </div>
                            </div> :
                            <div>
                                <div>
                                    <div className="align-items-center">
                                        <button
                                            type="button"
                                            className="panel-button"
                                            onClick={() => { sessionStorage.removeItem("view"); sessionStorage.removeItem("jobKey"); sessionStorage.removeItem("jobAppPage"); this.setViewFalse(); this.props.getAllJobs(this.props.user.id, 1) }}
                                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                                        >
                                            <div className="center-items back-to-text">
                                                <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to Jobs</p>
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
                                    employerProfileDetail={this.props.employerProfileDetail}
                                />
                            </div>}
                    </div>}
            </React.Fragment>
        )
    }
}

export default JobList