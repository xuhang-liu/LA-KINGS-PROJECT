import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import { connect } from "react-redux";
import { getZipRecruiterJobs } from "../../redux/actions/auth_actions";
import { MyModal } from "./../dashboard/DashboardComponents";
import JobFilter from "./JobFilter";
import ReactPaginate from 'react-paginate';

export class SearchResult extends Component {
    // data passed from job search page
    zpJobs = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["zpJobs"];
    jobTitle = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["jobTitle"];
    location = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["location"];

    state = {
        zpJobs: this.zpJobs == null ? null : this.zpJobs,
        jobTitle: this.jobTitle == null ? "Job title, keywords, or company" : this.jobTitle,
        location: this.location == null ? "Location or Remote" : this.location,
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
            });
        }
     }

    handleSearch = () => {
        // parse search bar inputs
        let search = document.getElementById("what").value;
        let location = document.getElementById("where").value;
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
        let numOfJobs = this.zpJobs != null ? this.zpJobs.jobs.length : 0;
        let pageCount = numOfJobs == 0 ? 0 : Math.ceil(numOfJobs / 10);
        return (
            <React.Fragment>
                <div className="row career-search" >
                    <div className="col-4 career-bg" >
                        <label className="career-txt1" style={{margin: "0rem"}}>What?</label>
                        <input id="what" type="text" style={{border: "none", width: "13rem", marginLeft: "0.5rem"}} placeholder={this.state.jobTitle}></input>
                    </div>
                    <div className="col-4 career-bg" style={{marginLeft: "2rem"}}>
                        <label className="career-txt1" style={{margin: "0rem"}}>Where?</label>
                        <input id="where" type="text" style={{border: "none", width: "13rem", marginLeft: "0.5rem"}} placeholder={this.state.location}></input>
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
                        <p className="career-txt8">{numOfJobs} Results</p>
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
                            <div>
                                <JobList jobs={this.state.zpJobs.jobs} offset={this.state.offset} />
                                 <ReactPaginate
                                     previousLabel={'previous'}
                                     nextLabel={'next'}
                                     breakLabel={'...'}
                                     breakClassName={'break-me'}
                                     pageCount={this.pageCount}
                                     marginPagesDisplayed={2}
                                     pageRangeDisplayed={5}
                                     onPageChange={this.handlePageClick}
                                     containerClassName={'pagination'}
                                     subContainerClassName={'pages pagination'}
                                     activeClassName={'active'}
                                 />
                            </div>
                        ) : null
                    }
                    </div>
                    <div className="col-4">
                        <div>
                            <p className="career-txt2">View interview questions and prepare answers</p>
                            <a
                                href="/practice"
                                className="default-btn"
                                style={{color:"white", backgroundColor:"#FF6B00"}}
                            >
                                <i className="bx bxs-arrow-to-right"></i>
                                 Practice Now
                                <span></span>
                            </a>
                        </div>
                        <div style={{marginTop: "4rem"}}>
                            <p className="career-txt2">Improve your resume’s matching rate</p>
                            <a
                                href="/resume"
                                className="default-btn"
                                style={{color:"white", backgroundColor:"#FF6B00"}}
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
                />
            </React.Fragment>
        );
    }

}

const JobCard = (props) => {
    return (
        <div className="career-bg2" style={{paddingLeft: "2rem"}}>
            <h3 className="career-txt3" style={{paddingTop: "2rem"}}>{props.jobTitle}</h3>
            <p className="career-txt4">{props.company} | {props.location}</p>
            <p className="career-txt2">{props.minSalary  == null ? null : "$ " + props.minSalary + " - "} {props.maxSalary  == null ? null : "$ " + props.maxSalary + " a year"}</p>
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
                        style={{color:"white", backgroundColor:"#090D3A", paddingLeft: "1rem", paddingRight: "1rem", float: "right"}}
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
                return (
                    <JobCard
                        jobTitle={j.name}
                        company={j.hiring_company.name}
                        location={j.location}
                        minSalary={j.salary_min == null ? null : j.salary_min}
                        maxSalary={j.salary_max == null ? null : j.salary_max}
                        jobDesc={j.snippet}
                        postDate={j.posted_time_friendly}
                        jobLink={j.url}
                    />
                )
            })}
        </div>
    );
}

function MyVerticallyCenteredModal(props) {
    const { jobTitle, location, history, hidePage, ...rest } = props;
    return (
        <MyModal {...rest}>
            <JobFilter jobTitle={jobTitle} location={location} history={history} hidePage={hidePage} />
        </MyModal>
    );
};

const mapStateToProps = (state) => ({
    zpJobs: state.auth_reducer.zpJobs
});

export default connect(mapStateToProps, { getZipRecruiterJobs })(
    SearchResult
);