import React, { Component } from 'react';
import { connect } from "react-redux";
import { getZipRecruiterJobs } from "../../redux/actions/auth_actions";


export class JobFilter extends Component {

    state = {
        checked: [],
    }

    componentDidUpdate(prevProps){
        // sync pass fetched data to search results page
         if(prevProps.zpJobs !== this.props.zpJobs){
            // log previous checked boxes
//            let checkedBoxes = this.state.checked;
//            if (checkedBoxes.length != 0) {
//                for (let i = 0; i < checkedBoxes.length; i++) {
//                    let element = document.getElementById(checkedBoxes[i]);
//                    element.checked = true;
//                    console.log(element.checked);
//                }
//            }

             // hide filter modal
            this.props.hidePage();

             // redirect to result page
             // this.redirectToResults();
        }
     }

    handleFilter = () => {
        // collect checked boxes
        let checked = [];
        // collect filter metrics
        // search and location
        let what = document.getElementById("what2");
        let where = document.getElementById("where2")
        let search = what.value == "" ? this.props.jobTitle : what.value;
        let location = where.value == "" ? this.props.location : where.value;
        // job type
        let jobTypes = document.getElementsByClassName("jobType");
        for (let i = 0; i < jobTypes.length; i++) {
            if (jobTypes[i].checked == true) {
                search += " " + jobTypes[i].value;
                checked.push(jobTypes[i].id);
            }
        }
        // post date
        let postDate = 30; // default post date is within last month
        let postDates = document.getElementsByClassName("postDate");
        for (let i = 0; i < postDates.length; i++) {
            if (postDates[i].checked == true) {
                postDate = Number(postDates[i].value);
                checked.push(postDates[i].id);
                break;
            }
        }
        // min salary
        let salary = 0;
        let salaries = document.getElementsByClassName("salary");
        for (let i = 0; i < salaries.length; i++) {
            if (salaries[i].checked == true) {
                salary = Number(salaries[i].value);
                checked.push(salaries[i].id);
                break;
            }
        }
        // update checked state
        this.setState({checked: checked});
        // get jobs from zipRecruiter API
        this.props.getZipRecruiterJobs(search, location, postDate, salary);
    }

    redirectToResults = () => {
        const { history } = this.props.history;
        if (history) history.push({
            pathname: "/career-details",
            params: {
                zpJobs: this.props.zpJobs,
                jobTitle: this.props.jobTitle,
                location: this.props.location,
                checked: this.state.checked,
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row career-search1">
                    <div className="col-5 career-bg" style={{marginLeft: "5%"}} >
                        <label className="career-txt1" style={{margin: "0rem"}}><i className="bx bxs-user" style={{color: "#67A3F3"}}></i></label>
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
                            id="what2"
                            type="text"
                            placeholder={this.props.jobTitle}>
                        </input>
                    </div>
                    <div className="col-5 career-bg" style={{marginLeft: "2rem"}}>
                        <label className="career-txt1" style={{margin: "0rem"}}><i className="bx bxs-city" style={{color: "#67A3F3"}}></i></label>
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
                            id="where2"
                            type="text"
                            placeholder={this.props.location}>
                        </input>
                    </div>
                </div>
                <div className="row career-search1">
                    <div className="col-5" style={{marginLeft: "5%"}} >
                        <h3 className="career-txt8">Job Types</h3>
                        <div className="career-txt2" style={{fontWeight: "normal"}}>
                            <input className="jobType" type="checkbox" id="fullTime" value="full time"></input>
                            <label style={{marginLeft: "0.5rem"}}>Full Time</label><br />
                            <input className="jobType" type="checkbox" id="internship" value="internship"></input>
                            <label style={{marginLeft: "0.5rem"}}>Internship</label><br />
                            <input className="jobType" type="checkbox" id="contract" value="contract"></input>
                            <label style={{marginLeft: "0.5rem"}}>Contract</label><br />
                            <input className="jobType" type="checkbox" id="partTime" value="part time"></input>
                            <label style={{marginLeft: "0.5rem"}}>Part Time</label><br />
                            <input className="jobType" type="checkbox" id="temporary" value="temporary"></input>
                            <label style={{marginLeft: "0.5rem"}}>Temporary</label><br />
                        </div>
                    </div>
                    <div className="col-5" style={{marginLeft: "2rem"}} >
                        <h3 className="career-txt8">Posted Time</h3>
                        <div className="career-txt2" style={{fontWeight: "normal"}}>
                            <input className="postDate" name="postDate" type="radio" id="lastWeek" value="7"></input>
                            <label style={{marginLeft: "0.5rem"}}>Last Week</label><br />
                            <input className="postDate" name="postDate" type="radio" id="last2Weeks" value="14"></input>
                            <label style={{marginLeft: "0.5rem"}}>Last 2 Weeks</label><br />
                            <input className="postDate" name="postDate" type="radio" id="lastMonth" value="30"></input>
                            <label style={{marginLeft: "0.5rem"}}>Last Month</label><br />
                            <input className="postDate" name="postDate" type="radio" id="last3Months" value="90"></input>
                            <label style={{marginLeft: "0.5rem"}}>Last 3 Months</label><br />
                        </div>
                    </div>
                </div>
                <div className="row career-search1" style={{marginTop: "2rem"}}>
                    <div className="col-5" style={{marginLeft: "5%"}}>
                        <h3 className="career-txt8">Salary</h3>
                        <div className="career-txt2" style={{fontWeight: "normal"}}>
                            <input className="salary" name="salary" type="radio" id="50k" value="50000"></input>
                            <label style={{marginLeft: "0.5rem"}}>50K-60K</label><br />
                            <input className="salary" name="salary" type="radio" id="60k" value="60000"></input>
                            <label style={{marginLeft: "0.5rem"}}>60K-70K</label><br />
                            <input className="salary" name="salary" type="radio" id="70k" value="70000"></input>
                            <label style={{marginLeft: "0.5rem"}}>70K-80K</label><br />
                            <input className="salary" name="salary" type="radio" id="noSalary" value="0"></input>
                            <label style={{marginLeft: "0.5rem"}}>Any Salary</label><br />
                        </div>
                    </div>
                    <div className="col-5" style={{marginLeft: "2rem", marginTop: "2rem"}}>
                        <div className="career-txt2" style={{fontWeight: "normal"}}>
                            <input className="salary" name="salary" type="radio" id="80k" value="80000"></input>
                            <label style={{marginLeft: "0.5rem"}}>80K-90K</label><br />
                            <input className="salary" name="salary" type="radio" id="90k" value="90000"></input>
                            <label style={{marginLeft: "0.5rem"}}>90K-100K</label><br />
                            <input className="salary" name="salary" type="radio" id="100k" value="100000"></input>
                            <label style={{marginLeft: "0.5rem"}}>Above 100K</label><br />
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop: "2rem", marginBottom: "2rem", justifyContent: "center"}}>
                    {/*<div className="col-5" style={{display: "flex", alignItems: "center"}}>
                        <label className="career-txt8" style={{marginRight: "0.5rem"}}>Remote Only</label>
                        <input type="checkbox" id="remote" value="remote"></input>
                    </div>*/}
                        <button
                            onClick={this.handleFilter}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A", padding: "0.8rem"}}
                        >
                             View Results
                            <span></span>
                        </button>
                </div>
            </React.Fragment>
        );
    }

}


const mapStateToProps = (state) => ({
    zpJobs: state.auth_reducer.zpJobs
});

export default connect(mapStateToProps, { getZipRecruiterJobs })(
    JobFilter
);