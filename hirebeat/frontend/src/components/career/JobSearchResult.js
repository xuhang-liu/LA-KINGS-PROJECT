import React, { Component } from 'react';
import { connect } from "react-redux";
import { searchJobseekerJobs, getTopSearchKeywords } from "../../redux/actions/auth_actions";
import { MyModal } from "./../dashboard/DashboardComponents";
import MyJobFilter from "./MyJobFilter";
//import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import SmallPageTitleArea from './../Common/SmallPageTitleArea';
import Footer from "../layout/Footer";
import moment from 'moment'
import RichTextEditor from 'react-rte';

export class JobSearchResult extends Component {
    // data passed from job search page
    seekerJobs = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["seekerJobs"];
    jobTitle = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["jobTitle"];
    location = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["location"];
    checked = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["checked"];

    state = {
        seekerJobs: this.seekerJobs == null ? null : this.seekerJobs,
        jobTitle: this.jobTitle == null ? "Job title, keywords, or company" : this.jobTitle,
        location: this.location == null ? "Location or Remote" : this.location,
        numOfJobs: this.seekerJobs == null ? 0 : this.seekerJobs.jobs.length,
        pageCount: this.seekerJobs == null ? 0 : Math.ceil(this.seekerJobs.jobs.length / 10),
        checked: this.checked == null ? [] : this.checked,
        show: false,
        offset: 0,
        perPage: 10,
        searched: false,
    }

    constructor(props) {
        super(props);
        this.props.getTopSearchKeywords();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset });
    };

    componentDidMount(){
        this.setState({
            searched: false,
        });
    }

    componentDidUpdate(prevProps){
        // sync data in current result page
         if(prevProps.seekerJobs !== this.props.seekerJobs){
            this.setState({
              seekerJobs: this.props.seekerJobs,
              numOfJobs: this.props.seekerJobs.jobs.length,
              pageCount: Math.ceil(this.props.seekerJobs.length / 10),
            });
        }
     }

    handleSearch = (keywords = "") => {
        return () => {
            // parse search bar inputs
            let search = document.getElementById("what").value;
            let location = document.getElementById("where").value;

            if (keywords != "" && keywords != "All Jobs") search = keywords;

            // update states
            this.setState({
                jobTitle: search,
                location: location,
                searched: true,
            })

            // fetch data from ZipRecruiter API
            this.props.searchJobseekerJobs(search, location, 180, 0);
        }
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
                <SmallPageTitleArea
                    pageTitle="Find Your Dream Job"
                    pageDescription="HireBeat helps you find exciting job opportunities and pivot your profile to stand out."
                />
                <div className="row career-search" >
                    <div className="col-4 career-bg" >
                        <label className="career-txt1" style={{margin: "0rem"}}>What?</label>
                        <input
                            className="form-control"
                            style={{
                                fontSize: "1rem",
                                fontFamily: "Inter, Segoe UI",
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
                                fontFamily: "Inter, Segoe UI",
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
                            onClick={this.handleSearch()}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A", height:"56px", borderRadius:'6px',}}
                        >
                            <i className="bx bx-search"></i>
                             Search
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#E8EDFC"}}>
                    <div className="col" >
                        <p className="career-txt8" style={{textAlign: "center"}}>Popular searches</p>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#E8EDFC"}}>
                    <div className="col" style={{marginLeft: "12rem", marginRight: "12rem", marginTop: "12px", marginBottom: "2rem", textAlign: "center", justifyContent: 'center', alignItems: 'center'}}>
                        {typeof this.props.topKeywords !== 'undefined' ? (this.props.topKeywords.map((k) => {
                            return (
                                    <button
                                    onClick={this.handleSearch(k)}
                                    className="default-btn"
                                    style={{color:"white", 
                                            backgroundColor:"#090D3A", 
                                            borderRadius:'6px',
                                            marginRight: "8px",
                                            marginTop: "6px",
                                            textAlign: "center",
                                            height:"56px",
                                            }}
                                    >
                                        <i className="bx bx-search"></i>
                                            {k}
                                        <span></span>
                                    </button> 
                            )
                        })) : null}
                    </div>
                </div>
                {this.state.searched ? (<div>
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
                        this.state.seekerJobs != null ? (
                            this.state.seekerJobs.jobs.map((j) => {
                                function decodeHtml(html) {
                                    var txt = document.createElement("textarea");
                                    txt.innerHTML = html;
                                    return txt.value;
                                }
                                let jobDesc = j.job_description;
                                // exclude html tags in job description
                                //jobDesc = jobDesc.replace(/<.*?>/ig,"");
                                // exclude space
                                //jobDesc = jobDesc.replace(/(&nbsp;)+/g, " ");
                                // decode Html format
                                //jobDesc = decodeHtml(jobDesc);
                                // the single quote
                                jobDesc = jobDesc.replace(/(<p><br><\/p>)+/g, "");

                                //if (jobDesc.length > 525) jobDesc = jobDesc.substr(0, 525) + "...";
                                
                                let postedDate = j.first_publish_date;
                                
                                return (
                                    <JobCard
                                        jobTitle={j.job_title + " (" + j.job_type +")"}
                                        company={j.company_name}
                                        location={j.job_location}
                                        minSalary={j.salary_min == null ? null : j.salary_min}
                                        maxSalary={j.salary_max == null ? null : j.salary_max}
                                        jobDesc={jobDesc}
                                        postDate={moment(postedDate).fromNow()}
                                        jobLink={j.job_url}
                                    />
                                )
                            })
                        ) : null
                    }
                    {/*
                        this.state.seekerJobs != null ? (
                            <div>
                                <JobList jobs={this.state.seekerJobs.jobs} offset={this.state.offset} />
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
                </div>) : null }
                <MyVerticallyCenteredModal
                    show={this.state.show}
                    onHide={this.hideFilter}
                    jobTitle={this.state.jobTitle}
                    location={this.state.location}
                    history={this.props}
                    hidePage={this.hideFilter}
                    checked={this.state.checked}
                />
                <div className="container">
                    <div className="row" style={{ margin: "auto", width: "100.8%", paddingTop: "8%", paddingBottom: "10%" }}>
                        <div className="col" style={{ marginLeft: "5%" }}>
                            <h3 className="career-h3">Want to prepare for top companies?</h3>
                            <p className="mode-col-text1">HireBeat have hiring up-to-date information of more than 30 companies.</p>
                            <p className="mode-col-text2"><a href="/job-seekers-companydata" style={{ color: "#13C4A1" }}>Browse companies -> </a></p>
                        </div>
                        <div className="col" style={{ marginLeft: "5%" }}>
                            <h3 className="career-h3">One profile unlocks every job on HireBeat</h3>
                            <p className="mode-col-text1">Your HireBeat profile tells companies your competence and lets you apply to any job you’re interested in.</p>
                            <p className="mode-col-text2"><a href="/register" style={{ color: "#13C4A1" }}>Build profile-> </a></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

}

const JobCard = (props) => {
    return (
        <div className="career-bg2" style={{paddingLeft: "2rem", marginBottom: "0.8rem"}}>
            <a target="_blank" rel="noreferrer" href={props.jobLink}><h3 className="career-txt3" style={{paddingTop: "2rem"}}>{props.jobTitle}</h3></a>
            <p className="career-txt4">{props.company} | {props.location}</p>
            <p className="career-txt2">{props.minSalary  == null ? null : "$ " + props.minSalary + " - "} {props.maxSalary  == null ? null : "$ " + props.maxSalary}</p>
            {/*<div className="row">
                <label className="career-txt5" style={{marginLeft: "15px", padding: "0.3rem"}}>{props.jobType}</label>
                <label className="career-txt5" style={{marginLeft: "1.5rem", padding: "0.3rem"}}>{props.employeeNum} employees</label>
            </div>*/}

            <p className="career-txt6" style={{overflow: "hidden", maxHeight: "160px", marginTop:"-10px"}}>
                           
                <RichTextEditor
                value={RichTextEditor.createValueFromString(props.jobDesc, 'html')}
                onChange={() => { }}
                readOnly={true}
                className="text-editor"
                />
                
            </p>

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
    let index = props.offset; // start index at seekerJobs array
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
            <MyJobFilter jobTitle={jobTitle} location={location} history={history} hidePage={hidePage} checked={checked} />
        </MyModal>
    );
};

const mapStateToProps = (state) => ({
    seekerJobs: state.auth_reducer.seekerJobs,
    topKeywords: state.auth_reducer.topKeywords,
});

export default connect(mapStateToProps, { searchJobseekerJobs, getTopSearchKeywords })(
    JobSearchResult
);