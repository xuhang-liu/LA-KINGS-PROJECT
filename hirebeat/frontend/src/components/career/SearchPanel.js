import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import { connect } from "react-redux";
import { getZipRecruiterJobs } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';

export class SearchPanel extends Component {

    state = {
        jobTitle: "",
        location: "",
    }

    componentDidUpdate(prevProps){
        // validate search bar inputs
        if (this.state.jobTitle == "" || this.state.location == "") {
            this.alert();
        }
        // sync transmitting fetched data to search results page
        else if(prevProps.zpJobs !== this.props.zpJobs){
            // redirect to result page
            this.redirectToResults();
        }
     }

    alert = () => {
        confirmAlert({
            title: "Invalid Inputs",
            message: "Please enter correct job title and location",
            buttons: [
                {
                  label: 'Ok'
                }
            ]
        });
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

    redirectToResults = () => {
        const { history } = this.props;
        if (history) history.push({
            pathname: "/career-details",
            params: {
                zpJobs: this.props.zpJobs,
                jobTitle: this.state.jobTitle,
                location: this.state.location,
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <PageTitleArea
                    pageTitle="Find Your Dream Job"
                    pageDescription="HireBeat helps you find exiting job opportunities and pivot your profile to stand out."
                />
                <div className="row career-search">
                    <div className="col-4 career-bg" style={{marginLeft: "5%"}} >
                        <label className="career-txt1" style={{margin: "0rem"}}>What?</label>
                        <input
                            id="what"
                            type="text"
                            style={{border: "none", width: "13rem", marginLeft: "0.5rem"}}
                            placeholder="Job title, keywords, or company">
                        </input>
                    </div>
                    <div className="col-4 career-bg" style={{marginLeft: "2rem"}}>
                        <label className="career-txt1" style={{margin: "0rem"}}>Where?</label>
                        <input
                            id="where"
                            type="text"
                            style={{border: "none", width: "13rem", marginLeft: "0.5rem"}}
                            placeholder="Location or Remote">
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
                <div className="row" style={{margin: "auto", width: "90%", paddingTop: "8%", paddingBottom: "10%"}}>
                    <div className="col" style={{marginLeft: "5%"}}>
                        <h3 className="career-h3">Want to prepare for top companies?</h3>
                        <p className="mode-col-text1">HireBeat have hiring up-to-date information of more than 30 companies.</p>
                        <p className="mode-col-text2"><a href="/companydata" style={{color: "#13C4A1"}}>Browse companies -> </a></p>
                    </div>
                    <div className="col" style={{marginLeft: "5%"}}>
                        <h3 className="career-h3">One profile unlocks every job on HireBeat</h3>
                        <p className="mode-col-text1">Your HireBeat profile tells companies your competence and lets you apply to any job you’re interested in.</p>
                        <p className="mode-col-text2"><a href="/register" style={{color: "#13C4A1"}}>Build profile-> </a></p>
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
    SearchPanel
);