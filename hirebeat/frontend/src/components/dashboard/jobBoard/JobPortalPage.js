import React, { Component } from "react";
import AllCandidates from "../jobStages/AllCandidates";
import ResumeScreening from "../jobStages/ResumeScreening";
import Pipeline from "../jobStages/Pipeline";

export class JobPortalPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        portalSubpage: sessionStorage.getItem(this.props.job.job_details.job_title+'portalSubpage') || "pipeline"
    }

    renderAllCandidates = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "allCandidates");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "allCandidates",
        });
    };
    renderResumeScreen = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "resumeScreen");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "Resume Review");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "resumeScreen",
        });
    };
    renderVideoInterview = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "videoInterview");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "videoInterview",
        });
    };
    renderLiveInterview = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "liveInterview");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "liveInterview",
        });
    };
    renderShortList = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "shortList");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "shortList",
        });
    };
    renderPipeline = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title+'portalSubpage', "pipeline");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage"))+1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "");
        this.props.getPJobs();
        this.setState({
            portalSubpage: "pipeline",
        });
    };

    renderSubpage = () => {
        switch (this.state.portalSubpage) {
            case "pipeline":
                return <Pipeline
                    renderPipeline={this.renderPipeline}
                    renderAllCandidates={this.renderAllCandidates}
                    renderResumeScreen={this.renderResumeScreen}
                    renderVideoInterview={this.renderVideoInterview}
                    renderLiveInterview={this.renderLiveInterview}
                    renderShortList={this.renderShortList}
                    postedJobs={this.props.postedJobs}
                    job={this.props.job}
                    getPJobs={this.props.getPJobs}
                    profile={this.props.profile}
                    user={this.props.user}
                />;
            case "allCandidates":
                return <AllCandidates
                            filter={this.props.filter}
                            curJob={this.props.job}
                            getAllJobs={this.props.getAllJobs}
                            getPJobs={this.props.getPJobs}
                        />;
            case "resumeScreen":
                return <ResumeScreening
                            filter={this.props.filter}
                            curJob={this.props.job}
                            getAllJobs={this.props.getAllJobs}
                            getPJobs={this.props.getPJobs}
                        />;
            case "videoInterview":
                return null;
            case "liveInterview":
                return null;
            case "shortList":
                return null;
            default:
                return null;
        };
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ marginBottom: "5%" }} className="container-fluid min-width-980">
                    <div className="chart-bg1" style={{ paddingTop: "0px", paddingBottom:"5rem" }}>
                        <div style={{ padding: "0.6rem", backgroundColor: "#f4f7ff", borderRadius: "10px" }}><h3 style={{ fontSize: "1.25rem" }}><b><i class='bx-fw bx bx-chevron-left' style={{ color: "#c4c4c4", cursor: "pointer" }} onClick={() => { this.props.setViewPortal(false); sessionStorage.setItem("viewPortal", "false"); }}></i><span className="ml-2">{this.props.job.job_details.job_title}</span></b></h3></div>
                        <div className="row" style={{ border: "1px solid #e8edfc" }}>
                            <div className="col-2">
                                {this.state.portalSubpage == "pipeline" ?
                                    <p onClick={this.renderPipeline} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p> :
                                    <p onClick={this.renderPipeline} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p>
                                }
                            </div>
                            <div className="col-2">
                                {this.state.portalSubpage == "allCandidates" ?
                                    <p onClick={this.renderAllCandidates} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>All Candidates <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                    <p onClick={this.renderAllCandidates} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>All Candidates <span style={{ marginLeft: "1rem" }}>>></span></p>
                                }
                            </div>
                            <div className="col-2">
                                {this.state.portalSubpage == "resumeScreen" ?
                                    <p onClick={this.renderResumeScreen} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Resume Review <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                    <p onClick={this.renderResumeScreen} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Resume Review <span style={{ marginLeft: "1rem" }}>>></span></p>
                                }
                            </div>
                            <div className="col-2">
                                {this.state.portalSubpage == "videoInterview" ?
                                    <p onClick={this.renderVideoInterview} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Video Interview <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                    <p onClick={this.renderVideoInterview} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Video Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                                }
                            </div>
                            <div className="col-2">
                                {this.state.portalSubpage == "liveInterview" ?
                                    <p onClick={this.renderLiveInterview} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Live Interview <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                    <p onClick={this.renderLiveInterview} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Live Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                                }
                            </div>
                            <div className="col-2">
                                {this.state.portalSubpage == "shortList" ?
                                    <p onClick={this.renderShortList} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Short List</p> :
                                    <p onClick={this.renderShortList} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Short List</p>
                                }
                            </div>
                        </div>
                        <div>
                            {this.renderSubpage()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default JobPortalPage