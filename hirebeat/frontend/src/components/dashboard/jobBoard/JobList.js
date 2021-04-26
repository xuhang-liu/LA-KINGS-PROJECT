import React, { Component } from "react";
import JobCard from "./JobCard";
import ApplicantList from "./ApplicantList";

export class JobList extends Component{

    constructor(props) {
      super(props);
      this.state = {
        keyWords: "",
        view: false,
      };
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
        {this.props.isLoaded &&
            <div>
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
                        {Object.keys(this.props.jobs).reverse().map((key) => {
                            let job = this.props.jobs[key];
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
                            return(
                                <JobCard
                                    filter={this.props.filter}
                                    job={job}
                                    user={this.props.user}
                                    setStatus={this.props.setStatus}
                                    enableView={this.enableView}
                                    disableView={this.disableView}
                                    setCurJob={this.props.setCurJob}
                                    renderJobEdition={this.props.renderJobEdition}
                                    setJobInfo={this.props.setJobInfo}
                                    getPJobs={this.props.getPJobs}
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