import React, { Component } from 'react';
import { connect } from "react-redux";
import { getZipRecruiterJobs } from "../../redux/actions/auth_actions";


export class JobFilter extends Component {

    componentDidUpdate(prevProps){
        // sync pass fetched data to search results page
         if(prevProps.zpJobs !== this.props.zpJobs){
             // redirect to result page
             this.redirectToResults();
        }
     }

    handleSearch = () => {
        // parse search bar inputs
        let search = document.getElementById("what").value;
        let location = document.getElementById("where").value;
        // fetch data from ZipRecruiter API
        this.props.getZipRecruiterJobs(search, location);
    }

    redirectToResults = () => {
        const { history } = this.props;
        if (history) history.push({
            pathname: "/career-details",
            params: {zpJobs: this.props.zpJobs}
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row career-search">
                    <div className="col-5 career-bg" style={{marginLeft: "5%"}} >
                        <label className="career-txt1" style={{margin: "0rem"}}><i className="bx bxs-user" style={{color: "#67A3F3"}}></i></label>
                        <input id="what" type="text" style={{border: "none", width: "13rem", marginLeft: "0.5rem"}} placeholder="Job title, keywords, or company"></input>
                    </div>
                    <div className="col-5 career-bg" style={{marginLeft: "2rem"}}>
                        <label className="career-txt1" style={{margin: "0rem"}}><i className="bx bxs-city" style={{color: "#67A3F3"}}></i></label>
                        <input id="where" type="text" style={{border: "none", width: "13rem", marginLeft: "0.5rem"}} placeholder="Location or Remote"></input>
                    </div>
                </div>
                <div className="row career-search">
                    <div className="col-5" style={{marginLeft: "5%"}} >
                        <h3 className="career-txt8">Job Types</h3>
                        <input type="checkbox" id="fullTime" value="fullTime"></input>
                        <label style={{marginLeft: "0.5rem"}}>Full Time</label><br />
                        <input type="checkbox" id="internship" value="internship"></input>
                        <label style={{marginLeft: "0.5rem"}}>Internship</label><br />
                        <input type="checkbox" id="contract" value="contract"></input>
                        <label style={{marginLeft: "0.5rem"}}>Contract</label><br />
                        <input type="checkbox" id="partTime" value="partTime"></input>
                        <label style={{marginLeft: "0.5rem"}}>Part Time</label><br />
                        <input type="checkbox" id="temporary" value="temporary"></input>
                        <label style={{marginLeft: "0.5rem"}}>Temporary</label><br />
                    </div>
                    <div className="col-5" style={{marginLeft: "2rem"}}>
                        <h3 className="career-txt8">Required Experience</h3>
                        <input type="checkbox" id="internshipRequired" value="internshipRequired"></input>
                        <label style={{marginLeft: "0.5rem"}}>Internship</label><br />
                        <input type="checkbox" id="entryLevel" value="entryLevel"></input>
                        <label style={{marginLeft: "0.5rem"}}>Entry Level</label><br />
                        <input type="checkbox" id="midSeniorLevel" value="midSeniorLevel"></input>
                        <label style={{marginLeft: "0.5rem"}}>Mid Senior Level</label><br />
                        <input type="checkbox" id="director" value="director"></input>
                        <label style={{marginLeft: "0.5rem"}}>Director</label><br />
                        <input type="checkbox" id="executive" value="executive"></input>
                        <label style={{marginLeft: "0.5rem"}}>Executive</label><br />
                    </div>
                </div>
                <div className="row career-search" style={{marginTop: "2rem"}}>
                    <div className="col-5" style={{marginLeft: "5%"}} >
                        <h3 className="career-txt8">Posted Time</h3>
                        <input type="checkbox" id="lastWeek" value="lastWeek"></input>
                        <label style={{marginLeft: "0.5rem"}}>Last Week</label><br />
                        <input type="checkbox" id="last2Weeks" value="last2Weeks"></input>
                        <label style={{marginLeft: "0.5rem"}}>Last 2 Weeks</label><br />
                        <input type="checkbox" id="lastMonth" value="lastMonth"></input>
                        <label style={{marginLeft: "0.5rem"}}>Last Month</label><br />
                        <input type="checkbox" id="last3Months" value="last3Months"></input>
                        <label style={{marginLeft: "0.5rem"}}>Last 3 Months</label><br />
                    </div>
                    <div className="col-5" style={{marginLeft: "2rem"}}>
                        <h3 className="career-txt8">Salary</h3>
                        <input type="checkbox" id="salaryRange" value="salaryRange"></input>
                        <label style={{marginLeft: "0.5rem"}}>Salary Range</label><br />
                        <input type="checkbox" id="noSalary" value="noSalary"></input>
                        <label style={{marginLeft: "0.5rem"}}>Include jobs with no salary data</label><br />
                    </div>
                </div>
                <div className="row career-search" style={{marginTop: "2rem", marginBottom: "2rem"}}>
                    <div className="col-5" style={{display: "flex", alignItems: "center"}}>
                        <label className="career-txt8" style={{marginRight: "0.5rem"}}>Remote Only</label>
                        <input type="checkbox" id="remote" value="remote"></input>
                    </div>
                    <div className="col-5">
                        <button
                            onClick={this.handleSearch}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A", padding: "0.8rem", float: "right"}}
                        >
                             View Results
                            <span></span>
                        </button>
                    </div>
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