import React, { Component } from "react";

export class JobPortalPage extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        portalSubpage: "pipeline"
    }

    renderAllCandidates = () => {
        this.setState({
            subpage: "allCandidates",
        });
    };
    renderResumeScreen = () => {
        this.setState({
            subpage: "resumeScreen",
        });
    };
    renderVideoInterview = () => {
        this.setState({
            subpage: "videoInterview",
        });
    };
    renderLiveInterview = () => {
        this.setState({
            subpage: "liveInterview",
        });
    };
    renderShortList = () => {
        this.setState({
            subpage: "shortList",
        });
    };
    renderPipeline = () => {
        this.setState({
            subpage: "pipeline",
        });
    };

    renderSubpage = () => {
        switch (this.state.subpage) {
            case "pipeline":
                return null;
            case "allCandidates":
                return null;
            case "resumeScreen":
                return null;
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
                <div style={{ marginBottom: "5%" }} className="container-fluid min-width-1290">
                    <div className="chart-bg1" style={{ paddingTop: "0px" }}>
                        <div style={{ padding: "0.6rem", backgroundColor: "#f4f7ff", borderRadius: "10px" }}><h3 style={{ fontSize: "1.25rem" }}><b><i class='bx-fw bx bx-chevron-left' style={{ color: "#c4c4c4", cursor: "pointer" }} onClick={() => { this.props.setViewPortal(false); sessionStorage.setItem("viewPortal", "false"); }}></i><span className="ml-2">{this.props.job.job_details.job_title}</span></b></h3></div>
                        <div className="row">
                            <div className="col-2">
                                <p onClick={this.renderPipeline} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p>
                            </div>
                            <div className="col-2">
                                <p onClick={this.renderAllCandidates} style={{ textAlign: "left", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>All Candidates <span style={{ marginLeft: "1rem" }}>>></span></p>
                            </div>
                            <div className="col-2">
                                <p onClick={this.renderResumeScreen} style={{ textAlign: "left", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Resume Screening <span style={{ marginLeft: "1rem" }}>>></span></p>
                            </div>
                            <div className="col-2">
                                <p onClick={this.renderVideoInterview} style={{ textAlign: "left", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Video Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                            </div>
                            <div className="col-2">
                                <p onClick={this.renderLiveInterview} style={{ textAlign: "left", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Live Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                            </div>
                            <div className="col-2">
                                <p onClick={this.renderShortList} style={{ textAlign: "left", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Short List</p>
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