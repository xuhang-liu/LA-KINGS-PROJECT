import React, { Component } from 'react';
import { connect } from "react-redux";
import { getZipRecruiterJobs } from "../../redux/actions/auth_actions";
import { MyModal } from "./../dashboard/DashboardComponents";
import JobFilter from "./JobFilter";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";

export class SearchResult extends Component {
    // data passed from job search page
    zpJobs = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["zpJobs"];
    jobTitle = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["jobTitle"];
    location = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["location"];
    checked = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["checked"];

    state = {
        zpJobs: this.zpJobs == null ? null : this.zpJobs,
        jobTitle: this.jobTitle == null ? "Job title, keywords, or company" : this.jobTitle,
        location: this.location == null ? "Location or Remote" : this.location,
        numOfJobs: this.zpJobs == null ? 0 : this.zpJobs.jobs.length,
        pageCount: this.zpJobs == null ? 0 : Math.ceil(this.zpJobs.jobs.length / 10),
        checked: this.checked == null ? [] : this.checked,
        show: false,
        offset: 0,
        perPage: 10,
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset });
    };

    componentDidUpdate(prevProps){
        // sync data in current result page
         if(prevProps.zpJobs !== this.props.zpJobs){
            this.setState({
              zpJobs: this.props.zpJobs,
              numOfJobs: this.props.zpJobs.jobs.length,
              pageCount: Math.ceil(this.props.zpJobs.length / 10),
            });
        }
     }

    handleSearch = () => {
        // parse search bar inputs
        let search = document.getElementById("what").value;
        let location = document.getElementById("where").value;

        // update states
        this.setState({
            jobTitle: search,
            location: location,
        })

        // fetch data from ZipRecruiter API
        this.props.getZipRecruiterJobs(search, location, 30, 0);
    }

    showFilter = () => {
        this.setState({
            show: true
        });
    }

    hideFilter = () => {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row career-search" >
                    <div className="col-4 career-bg" >
                        <label className="career-txt1" style={{margin: "0rem"}}>What?</label>
                        <input
                            className="form-control"
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Avenir Next, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "0.5rem",
                                paddingLeft: "1rem",
                                boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                            id="what"
                            type="text"
                            placeholder={this.state.jobTitle}>
                        </input>
                    </div>
                    <div className="col-4 career-bg" style={{marginLeft: "2rem"}}>
                        <label className="career-txt1" style={{margin: "0rem"}}>Where?</label>
                        <input
                            className="form-control"
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Avenir Next, Segoe UI",
                                background: "#FFFFFF",
                                borderRadius: "0.5rem",
                                paddingLeft: "1rem",
                                boxShadow:"0px 0px 50px rgba(70, 137, 250, 0.1)"
                              }}
                            id="where"
                            type="text"
                            placeholder={this.state.location}>
                        </input>
                    </div>
                    <div className="col-1">
                        <button
                            onClick={this.handleSearch}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A"}}
                        >
                            <i className="bx bx-search"></i>
                             Search
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="row" style={{marginTop: "3rem"}}>
                    <div className="col-2" style={{marginLeft: "10rem"}}>
                        <p className="career-txt8">{this.state.numOfJobs} Results</p>
                    </div>
                    <div className="col-1">
                        <button
                            className="filter-btn"
                            onClick={this.showFilter}
                        >
                            <i className="bx bx-filter bx-md"></i>
                            Show filters
                        </button>
                    </div>
                </div>
                <div className="row" style={{width: "90%", paddingBottom: "10%", margin: "auto", marginTop: "2rem"}}>
                    <div className="col-8">
                    {
                        this.state.zpJobs != null ? (
                            this.state.zpJobs.jobs.map((j) => {
                                let jobDesc = j.snippet;
                                // exclude html tags in job description
                                jobDesc = jobDesc.replace(/<.*?>/ig,"");
                                // exclude space
                                jobDesc = jobDesc.replace(/&nbsp;/, "");
                                // the single quote
                                jobDesc = jobDesc.replace(/&#x27;/, "'");
                                return (
                                    <JobCard
                                        jobTitle={j.name}
                                        company={j.hiring_company.name}
                                        location={j.location}
                                        minSalary={j.salary_min == null ? null : j.salary_min}
                                        maxSalary={j.salary_max == null ? null : j.salary_max}
                                        jobDesc={jobDesc}
                                        postDate={j.posted_time_friendly}
                                        jobLink={j.url}
                                    />
                                )
                            })
                        ) : null
                    }
                    {/*
                        this.state.zpJobs != null ? (
                            <div>
                                <JobList jobs={this.state.zpJobs.jobs} offset={this.state.offset} />
                                 <ReactPaginate
                                     previousLabel={'previous'}
                                     nextLabel={'next'}
                                     breakLabel={'...'}
                                     breakClassName={'break-me'}
                                     pageCount={this.state.pageCount}
                                     marginPagesDisplayed={2}
                                     pageRangeDisplayed={5}
                                     onPageChange={this.handlePageClick}
                                     containerClassName={'pagination'}
                                     subContainerClassName={'pages pagination'}
                                     activeClassName={'active'}
                                 />
                            </div>
                        ) : null
                    */}
                    </div>
                    <div className="col-4">
                        <div>
                            <p className="career-txt2">View interview questions and prepare answers</p>
                            <Link to="/practice">
                            <a
                                className="default-btn"
                                style={{color:"white", backgroundColor:"#FF6B00"}}
                            >
                                <i className="bx bxs-arrow-to-right"></i>
                                 Practice Now
                                <span></span>
                            </a>
                            </Link>
                        </div>
                        <div style={{marginTop: "4rem"}}>
                            <p className="career-txt2">Improve your resume’s matching rate</p>
                            <a
                                href="/resume"
                                className="default-btn"
                                style={{color:"white", backgroundColor:"#FF6B00", textDecoration:"none"}}
                            >
                                <i className="bx bxs-arrow-to-right"></i>
                                 Optimize Now
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <MyVerticallyCenteredModal
                    show={this.state.show}
                    onHide={this.hideFilter}
                    jobTitle={this.state.jobTitle}
                    location={this.state.location}
                    history={this.props}
                    hidePage={this.hideFilter}
                    checked={this.state.checked}
                />
            </React.Fragment>
        );
    }

}

const JobCard = (props) => {
    return (
        <div className="career-bg2" style={{paddingLeft: "2rem", marginBottom: "0.8rem"}}>
            <a target="_blank" href={props.jobLink}><h3 className="career-txt3" style={{paddingTop: "2rem"}}>{props.jobTitle}</h3></a>
            <p className="career-txt4">{props.company} | {props.location}</p>
            <p className="career-txt2">{props.minSalary  == null ? null : "$ " + props.minSalary + " - "} {props.maxSalary  == null ? null : "$ " + props.maxSalary}</p>
            {/*<div className="row">
                <label className="career-txt5" style={{marginLeft: "15px", padding: "0.3rem"}}>{props.jobType}</label>
                <label className="career-txt5" style={{marginLeft: "1.5rem", padding: "0.3rem"}}>{props.employeeNum} employees</label>
            </div>*/}
            <p className="career-txt6">{props.jobDesc}</p>
            <div className="row" style={{display: "flex", justifyContent: "center", paddingBottom: "1.5rem"}}>
                <div className="col"><p>Post date: {props.postDate}</p></div>
                <div className="col" style={{paddingRight: "2rem"}}>
                    <a
                        target="_blank" rel="noopener noreferrer"
                        href={props.jobLink}
                        className="default-btn"
                        style={{color:"white", backgroundColor:"#090D3A", paddingLeft: "1rem", paddingRight: "1rem", float: "right", textDecoration: "None"}}
                    >
                         Apply
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
    );
}

const JobList = (props) => {
    // get current page jobs(10)
    let index = props.offset; // start index at zpJobs array
    let jobs = props.jobs.slice(index, index + 10); // each page has 10 jobs at most
    return (
        <div>
            {jobs.map((j) => {
                let jobDesc = j.snippet;
                // exclude html tags in job description
                jobDesc = jobDesc.replace(/<.*?>/ig,"");
                // exclude space
                jobDesc = jobDesc.replace(/&nbsp;/, "");
                // the single quote
                jobDesc = jobDesc.replace(/&#x27;/, "'");
                return (
                    <JobCard
                        jobTitle={j.name}
                        company={j.hiring_company.name}
                        location={j.location}
                        minSalary={j.salary_min == null ? null : j.salary_min}
                        maxSalary={j.salary_max == null ? null : j.salary_max}
                        jobDesc={jobDesc}
                        postDate={j.posted_time_friendly}
                        jobLink={j.url}
                    />
                )
            })}
        </div>
    );
}

function MyVerticallyCenteredModal(props) {
    const { jobTitle, location, history, hidePage, checked, ...rest } = props;
    return (
        <MyModal {...rest}>
            <JobFilter jobTitle={jobTitle} location={location} history={history} hidePage={hidePage} checked={checked} />
        </MyModal>
    );
};

const mapStateToProps = (state) => ({
    zpJobs: state.auth_reducer.zpJobs
});

export default connect(mapStateToProps, { getZipRecruiterJobs })(
    SearchResult
);