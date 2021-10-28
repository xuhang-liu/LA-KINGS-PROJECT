import React, { Component } from "react";
import AllCandidates from "../jobStages/AllCandidates";
import ResumeScreening from "../jobStages/ResumeScreening";
import Pipeline from "../jobStages/Pipeline";
import { VideoInterview } from "../jobStages/VideoInterview";
import { LiveInterview } from "../jobStages/LiveInterview";
import ShortList from "./../jobStages/ShortList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateInviteStatus, updateCandidateViewedStatus } from "./../../../redux/actions/job_actions";
import {
    getReviewNote, getReviewerEvaluation, getCurrentReviewerEvaluation, closePosition, deletePosition, getResumeURL,
    addSubReviewer, removeSubReviewer, moveCandidateToInterview, sendInterviews
} from "./../../../redux/actions/question_actions";
import axios from "axios";

export class JobPortalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portalSubpage: sessionStorage.getItem(this.props.job.job_details.job_title + 'portalSubpage') || "pipeline",
            reviewerStage: []
        }
        if (this.props.job?.reviewer_type == "subr") {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let data = { "job_id": this.props.job.job_details.id, "email": this.props.user.email };
            axios.post("jobs/check_subreviewer_currentstage", data, config).then((res) => {
                let stage_array = res?.data?.current_stage;
                if (stage_array.includes("Short List")) {
                    this.setState({portalSubpage: "shortList"});
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'shortList'] });
                }
                if (stage_array.includes("Live Interview")) {
                    this.setState({portalSubpage: "liveInterview"});
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'liveInterview'] });
                }
                if (stage_array.includes("Video Interview")) {
                    this.setState({portalSubpage: "videoInterview"});
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'videoInterview'] });
                }
                if (stage_array.includes("Resume Review")) {
                    this.setState({portalSubpage: "resumeScreen"});
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'resumeScreen'] });
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }

    renderAllCandidates = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "allCandidates");
        let page = 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "allCandidates",
        });
    };
    renderResumeScreen = () => {
        if (this.props.job.job_details.gh_current_stage_id != "" && this.props.job.job_details.gh_current_stage_id != null) {
            alert("This is a integration job.")
        } else {
            sessionStorage.setItem('selectedSubpageForJob', "Resume Review");
            sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "resumeScreen");
            let page = 1;
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", "True");
            this.setState({
                portalSubpage: "resumeScreen",
            });
        }
    };
    renderVideoInterview = () => {
        sessionStorage.setItem('selectedSubpage', "Video Interview");
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "videoInterview");
        let page = 1;
        this.props.getPostedJobs(this.props.user.id, page, "Video Interview");
        this.setState({
            portalSubpage: "videoInterview",
        });
    };
    renderLiveInterview = () => {
        if (this.props.job.job_details.gh_current_stage_id != "" && this.props.job.job_details.gh_current_stage_id != null) {
            alert("This is a integration job.")
        } else {
            sessionStorage.setItem('selectedSubpage', "Live Interview");
            sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "liveInterview");
            let page = 1;
            this.props.getPostedJobs(this.props.user.id, page, "Live Interview");
            this.setState({
                portalSubpage: "liveInterview",
            });
        }
    };
    renderShortList = () => {
        if (this.props.job.job_details.gh_current_stage_id != "" && this.props.job.job_details.gh_current_stage_id != null) {
            alert("This is a integration job.")
        } else {
            sessionStorage.setItem('selectedSubpage', "Short List");
            sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "shortList");
            let page = 1;
            this.props.getPostedJobs(this.props.user.id, page, "Short List");
            this.setState({
                portalSubpage: "shortList",
            });
        }
    };
    renderPipeline = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "pipeline");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "pipeline",
        });
    };

    renderSubpage = () => {
        const p = this.props.postedJobs[this.props.job.job_details.positions_id];
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
                    getPostedJobs={this.props.getPostedJobs}
                    getAllJobs={this.props.getAllJobs}
                    profile={this.props.profile}
                    user={this.props.user}
                />;
            case "allCandidates":
                return <AllCandidates
                    filter={this.props.filter}
                    curJob={this.props.job}
                    getAllJobs={this.props.getAllJobs}
                    getPJobs={this.props.getPJobs}
                    profile={this.props.profile}
                    user={this.props.user}
                    isClosed={p.is_closed}
                    getPostedJobs={this.props.getPostedJobs}
                />;
            case "resumeScreen":
                return <ResumeScreening
                    filter={this.props.filter}
                    curJob={this.props.job}
                    getAllJobs={this.props.getAllJobs}
                    getPJobs={this.props.getPJobs}
                    getPostedJobs={this.props.getPostedJobs}
                    profile={this.props.profile}
                    user={this.props.user}
                />;
            case "videoInterview":
                return <VideoInterview
                    filter={this.props.filter}
                    removeSubReviewer={this.props.removeSubReviewer}
                    addSubReviewer={this.props.addSubReviewer}
                    getPJobs={this.props.getPJobs}
                    resumeURL={this.props.resumeURL}
                    addSelected={this.props.setselectedId}
                    questions={p.questions}
                    companyName={this.props.companyName}
                    positionId={p.position_id}
                    jobId={p.job_id}
                    jobTitle={p.job_title}
                    isClosed={p.is_closed}
                    inviteDate={p.invite_date}
                    applicants={p.applicants}
                    subreviewers={p.subreviewers}
                    reviewer_type={p.reviewer_type}
                    addInterviews={this.props.addInterviews}
                    getApplicantsVideos={this.props.getApplicantsVideos}
                    getApplicantsInfo={this.props.getApplicantsInfo}
                    getRecordStatus={this.props.getRecordStatus}
                    dataLoaded={this.props.dataLoaded}
                    isRecorded={this.props.isRecorded}
                    int_ques={this.props.int_ques}
                    id_candidate={this.props.id_candidate}
                    username_candidate={this.props.username_candidate}
                    email_candidate={this.props.email_candidate}
                    phone_candidate={this.props.phone_candidate}
                    location_candidate={this.props.location_candidate}
                    resendInvitation={this.props.resendInvitation}
                    updateCommentStatus={this.props.updateCommentStatus}
                    closePosition={this.props.closePosition}
                    deletePosition={this.props.deletePosition}
                    getResumeURL={this.props.getResumeURL}
                    recordTime={this.props.recordTime}
                    interviewResume={this.props.interviewResume}
                    user={this.props.user}
                    profile={this.props.profile}
                    updateViewStatus={this.props.updateViewStatus}
                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                    position={p.position}
                    allInvited={p.all_invited}
                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                    sendInterviews={this.props.sendInterviews}
                    checkUserExistence={this.props.checkUserExistence}
                    user_existence={this.props.user_existence}
                    getReviewNote={this.props.getReviewNote}
                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                    totalRecords={p.total_records}
                    totalPage={p.total_page}
                    getPostedJobs={this.props.getPostedJobs}
                    updateInviteStatus={this.props.updateInviteStatus}
                    jobsId={this.props.job.job_details.id}
                    getAllJobs={this.props.getAllJobs}
                    gh_current_stage_id={this.props.job.job_details.gh_current_stage_id}
                />;
            case "liveInterview":
                return <LiveInterview
                    filter={this.props.filter}
                    removeSubReviewer={this.props.removeSubReviewer}
                    addSubReviewer={this.props.addSubReviewer}
                    getPJobs={this.props.getPJobs}
                    resumeURL={this.props.resumeURL}
                    addSelected={this.props.setselectedId}
                    questions={p.questions}
                    companyName={this.props.companyName}
                    positionId={p.position_id}
                    jobId={p.job_id}
                    jobTitle={p.job_title}
                    isClosed={p.is_closed}
                    inviteDate={p.invite_date}
                    applicants={p.applicants}
                    subreviewers={p.subreviewers}
                    reviewer_type={p.reviewer_type}
                    addInterviews={this.props.addInterviews}
                    getApplicantsVideos={this.props.getApplicantsVideos}
                    getApplicantsInfo={this.props.getApplicantsInfo}
                    getRecordStatus={this.props.getRecordStatus}
                    dataLoaded={this.props.dataLoaded}
                    isRecorded={this.props.isRecorded}
                    int_ques={this.props.int_ques}
                    id_candidate={this.props.id_candidate}
                    username_candidate={this.props.username_candidate}
                    email_candidate={this.props.email_candidate}
                    phone_candidate={this.props.phone_candidate}
                    location_candidate={this.props.location_candidate}
                    resendInvitation={this.props.resendInvitation}
                    updateCommentStatus={this.props.updateCommentStatus}
                    closePosition={this.props.closePosition}
                    deletePosition={this.props.deletePosition}
                    getResumeURL={this.props.getResumeURL}
                    recordTime={this.props.recordTime}
                    interviewResume={this.props.interviewResume}
                    user={this.props.user}
                    profile={this.props.profile}
                    updateViewStatus={this.props.updateViewStatus}
                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                    position={p.position}
                    allInvited={p.all_invited}
                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                    sendInterviews={this.props.sendInterviews}
                    checkUserExistence={this.props.checkUserExistence}
                    user_existence={this.props.user_existence}
                    getReviewNote={this.props.getReviewNote}
                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                    totalRecords={p.total_records}
                    totalPage={p.total_page}
                    getPostedJobs={this.props.getPostedJobs}
                    updateInviteStatus={this.props.updateInviteStatus}
                    jobsId={this.props.job.job_details.id}
                    getAllJobs={this.props.getAllJobs}
                />;
            case "shortList":
                return <ShortList
                    getPJobs={this.props.getPJobs}
                    postedJobs={this.props.postedJobs}
                    int_ques={this.props.int_ques}
                    getApplicantsVideos={this.props.getApplicantsVideos}
                    getApplicantsInfo={this.props.getApplicantsInfo}
                    id_candidate={this.props.id_candidate}
                    username_candidate={this.props.username_candidate}
                    email_candidate={this.props.email_candidate}
                    phone_candidate={this.props.phone_candidate}
                    location_candidate={this.props.location_candidate}
                    star_list={this.props.star_list}
                    resume_list={this.props.resume_list}
                    updateCommentStatus={this.props.updateCommentStatus}
                    profile={this.props.profile}
                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                    user={this.props.user}
                    companyName={this.props.profile.company_name}
                    getReviewNote={this.props.getReviewNote}
                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                    positionId={p.position_id}
                    reviewer_type={p.reviewer_type}
                    getPostedJobs={this.props.getPostedJobs}
                    getAllJobs={this.props.getAllJobs}
                    totalPage={p.total_page}
                    jobsId={this.props.job.job_details.id}
                />;
            default:
                return null;
        };
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ marginBottom: "5%" }} className="container-fluid min-width-980">
                    <div className="chart-bg1" style={{ paddingTop: "0px", paddingBottom: "5rem" }}>
                        <div style={{ padding: "1rem", backgroundColor: "#f4f7ff", borderRadius: "10px" }}><h3 onClick={() => { this.props.setViewPortal(false); sessionStorage.setItem("viewPortal", "false"); this.props.getAllJobs(this.props.user.id, 1, "", "", "") }} style={{ fontSize: "1.25rem", marginBottom: "0rem", cursor: "pointer" }}><b><i class='bx-fw bx bx-chevron-left' style={{ color: "#c4c4c4", display: "inherit" }}></i><span className="ml-2" style={{ verticalAlign: "middle" }}>{this.props.job.job_details.job_title}</span></b></h3></div>
                        <div className="row" style={{ border: "1px solid #e8edfc" }}>
                            <div className="col-2">
                                {(this.state.reviewerStage.includes("pipeline") ||  this.state.reviewerStage?.length == 0) ?
                                    <div>
                                        {this.state.portalSubpage == "pipeline" ?
                                            <p onClick={this.renderPipeline} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p> :
                                            <p onClick={this.renderPipeline} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p>
                                        }</div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Pipeline</p>
                                }
                            </div>
                            <div className="col-2">
                                {(this.state.reviewerStage.includes("allCandidates") || this.state.reviewerStage?.length == 0)?
                                    <div>
                                        {this.state.portalSubpage == "allCandidates" ?
                                            <p onClick={this.renderAllCandidates} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>All Candidates <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                            <p onClick={this.renderAllCandidates} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>All Candidates <span style={{ marginLeft: "1rem" }}>>></span></p>
                                        }
                                    </div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>All Candidates</p>
                                }
                            </div>
                            <div className="col-2">
                                {((this.state.reviewerStage.includes("resumeScreen") || this.state.reviewerStage?.length == 0)) && (this.props.job.job_details.gh_current_stage_id == "" || this.props.job.job_details.gh_current_stage_id == null) ?
                                    <div>
                                        {this.state.portalSubpage == "resumeScreen" ?
                                            <p onClick={this.renderResumeScreen} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Resume Review <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                            <p onClick={this.renderResumeScreen} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Resume Review <span style={{ marginLeft: "1rem" }}>>></span></p>
                                        }
                                    </div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Resume Review</p>
                                }
                            </div>
                            <div className="col-2">
                                {(this.state.reviewerStage.includes("videoInterview") || this.state.reviewerStage?.length == 0) ?
                                    <div>
                                        {this.state.portalSubpage == "videoInterview" ?
                                            <p onClick={this.renderVideoInterview} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Video Interview <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                            <p onClick={this.renderVideoInterview} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Video Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                                        }
                                    </div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Video Interview</p>
                                }
                            </div>
                            <div className="col-2">
                                {((this.state.reviewerStage.includes("liveInterview") || this.state.reviewerStage?.length == 0)) && (this.props.job.job_details.gh_current_stage_id == "" || this.props.job.job_details.gh_current_stage_id == null) ?
                                    <div>
                                        {this.state.portalSubpage == "liveInterview" ?
                                            <p onClick={this.renderLiveInterview} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Live Interview <span style={{ marginLeft: "1rem" }}>>></span></p> :
                                            <p onClick={this.renderLiveInterview} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Live Interview <span style={{ marginLeft: "1rem" }}>>></span></p>
                                        }
                                    </div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Live Interview</p>
                                }
                            </div>
                            <div className="col-2">
                                {((this.state.reviewerStage.includes("shortList") || this.state.reviewerStage?.length == 0)) && (this.props.job.job_details.gh_current_stage_id == "" || this.props.job.job_details.gh_current_stage_id == null) ?
                                    <div>
                                        {this.state.portalSubpage == "shortList" ?
                                            <p onClick={this.renderShortList} style={{ backgroundColor: "#7C94B5", textAlign: "center", color: "#ffffff", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Short List</p> :
                                            <p onClick={this.renderShortList} style={{ textAlign: "center", color: "#7C94B5", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}>Short List</p>
                                        }
                                    </div> :
                                    <p style={{ textAlign: "center", color: "#e1e9f4", paddingTop: "0.5rem", paddingBottom: "0.5rem", fontWeight: "600", fontSize: "1rem", cursor: "pointer" }}><i class='bx-fw bx bx-filter-alt'></i>Short List</p>
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

const mapStateToProps = (state) => ({
    received_interview: state.auth_reducer.received_interview,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
    star_list: state.question_reducer.star_list,
    resume_list: state.question_reducer.resume_list,
});

export default withRouter(connect(mapStateToProps, {
    closePosition, deletePosition, getResumeURL, addSubReviewer,
    removeSubReviewer, moveCandidateToInterview, sendInterviews, getReviewNote, getReviewerEvaluation, getCurrentReviewerEvaluation,
    updateInviteStatus, updateCandidateViewedStatus
})(
    JobPortalPage
));