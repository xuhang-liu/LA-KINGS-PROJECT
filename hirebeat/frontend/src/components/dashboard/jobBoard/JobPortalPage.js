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
// import { constants } from "fs";
import { Container, Box, Flex } from '@chakra-ui/react';
import { EmployerSidebar } from '../chakraComponents/EmployerSidebar';
import { AISourcing } from '../chakraComponents/AISourcing';
import { SocialMediaShare } from '../chakraComponents/SocialMediaShare';
import { JobBoard } from '../chakraComponents/JobBoard';

export class JobPortalPage extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
        this.props.setShowSidebarTrue();
        this.state = {
            portalSubpage: sessionStorage.getItem(this.props.job.job_details.job_title + 'portalSubpage') || "pipeline",
            reviewerStage: [],
            jobt_token: "",
            subComponentFilterReset: 0
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
                    this.props.getPostedJobs(this.props.user.id, 1, "Short List", "", "", "", "", this.props.job.job_details.id);
                    this.setState({ portalSubpage: "shortList" });
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'shortList'] });
                }
                if (stage_array.includes("Live Interview")) {
                    this.props.getPostedJobs(this.props.user.id, 1, "Live Interview", "", "", "", "", this.props.job.job_details.id);
                    this.setState({ portalSubpage: "liveInterview" });
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'liveInterview'] });
                }
                if (stage_array.includes("Video Interview")) {
                    this.props.getPostedJobs(this.props.user.id, 1, "Video Interview", "", "", "", "", this.props.job.job_details.id);
                    this.setState({ portalSubpage: "videoInterview" });
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'videoInterview'] });
                }
                if (stage_array.includes("Resume Review")) {
                    this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", "True");
                    this.setState({ portalSubpage: "resumeScreen" });
                    this.setState({ reviewerStage: [...this.state.reviewerStage, 'resumeScreen'] });
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }

    componentDidMount() {
        // JobTarget steps:
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // Create or get jobtarget user
        if ((!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer)) {
            let data1 = {
                "p_token": "9d1a6a6e-ea43-4ed4-9f8b-f4a0c0010ae8",
                "user": {
                    "first_name": this.props.employerProfileDetail.f_name,
                    "last_name": this.props.employerProfileDetail.l_name,
                    "title": "Recruiter",
                    "email": this.props.user.email,
                    "is_admin": 0,
                    "company_id": this.props.jobt_company_id,
                    "external_user_id": this.props.user.id
                }
            }
            axios.post("https://atsapi.jobtarget.com/api/employer/user/create", data1, config).then((res1) => {
                if (res1.data.status == 0 || res1.data.status == "0") {
                    // update info
                    let jobt_data = { "profile_id": this.props.profile.id, "jobt_company_id": "", "jobt_user_id": res1.data.user.user_id, "jobt_token": "" }
                    axios.post("accounts/job-target-info-update", jobt_data, config).then((res) => {
                        console.log(res)
                    }).catch(error => {
                        console.log(error)
                    });
                } else {
                    let data2 = {
                        "p_token": "9d1a6a6e-ea43-4ed4-9f8b-f4a0c0010ae8",
                        "email": this.props.user.email
                    }
                    axios.post("https://atsapi.jobtarget.com/api/employer/auth/gettoken", data2, config).then((res2) => {
                        if (res2.data.status == 0 || res2.data.status == "0") {
                            // update info
                            let jobt_data = { "profile_id": this.props.profile.id, "jobt_company_id": "", "jobt_user_id": res2.data.user.user_id, "jobt_token": "" }
                            axios.post("accounts/job-target-info-update", jobt_data, config).then((res) => {
                                console.log(res)
                            }).catch(error => {
                                console.log(error)
                            });
                        }
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }).catch(error => {
                console.log(error)
            });
        }
        // Get jobtarget token
        if ((!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer)) {
            let data3 = {
                "p_token": "9d1a6a6e-ea43-4ed4-9f8b-f4a0c0010ae8",
                "email": this.props.user.email
            }
            axios.post("https://atsapi.jobtarget.com/api/employer/auth/gettoken", data3, config).then((res3) => {
                if (res3.data.status == 0 || res3.data.status == "0") {
                    // update info
                    let jobt_data = { "profile_id": this.props.profile.id, "jobt_company_id": "", "jobt_user_id": "", "jobt_token": res3.data.token }
                    axios.post("accounts/job-target-info-update", jobt_data, config).then((res) => {
                        this.setState({ jobt_token: res3.data.token });
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
    componentDidUpdate(prevProps) {
        setTimeout(() => {
            this.setState({
                subComponentFilterReset: 0
            });
        }, 200);
    }

    renderAllCandidates = () => {
        sessionStorage.setItem('selectedSubpageForJob', "");
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "allCandidates");
        let page = 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "allCandidates",
            subComponentFilterReset: 1
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
                subComponentFilterReset: 1,
            });
        }
    };
    renderVideoInterview = () => {
        sessionStorage.setItem('selectedSubpage', "Video Interview");
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "videoInterview");
        let page = 1;
        this.props.getPostedJobs(this.props.user.id, page, "Video Interview", "", "", "", "", this.props.job.job_details.id);
        this.setState({
            portalSubpage: "videoInterview",
            subComponentFilterReset: 1,
        });
    };
    renderLiveInterview = () => {
        if (this.props.job.job_details.gh_current_stage_id != "" && this.props.job.job_details.gh_current_stage_id != null) {
            alert("This is a integration job.")
        } else {
            sessionStorage.setItem('selectedSubpage', "Live Interview");
            sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "liveInterview");
            let page = 1;
            this.props.getPostedJobs(this.props.user.id, page, "Live Interview", "", "", "", "", this.props.job.job_details.id);
            this.setState({
                portalSubpage: "liveInterview",
                subComponentFilterReset: 1,
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
            this.props.getPostedJobs(this.props.user.id, page, "Short List", "", "", "", "", this.props.job.job_details.id);
            this.setState({
                portalSubpage: "shortList",
                subComponentFilterReset: 1,
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
    renderAISourcing = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "aiSourcing");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "aiSourcing",
        });
    };
    renderSocialMediaShare = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "socialMediaShare");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "socialMediaShare",
        });
    };
    renderJobBoardShare = () => {
        sessionStorage.setItem(this.props.job.job_details.job_title + 'portalSubpage', "jobboardshare");
        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
        this.setState({
            portalSubpage: "jobboardshare",
        });
    };

    renderSubpage = () => {
        const p = this.props.postedJobs[this.props.job.job_details.positions_id];
        switch (this.state.portalSubpage) {
            case "jobboardshare":
                return <JobBoard
                    job={this.props.job}
                    user={this.props.user}
                    profile={this.props.profile}
                    employerProfileDetail={this.props.employerProfileDetail}
                    jobt_token={(this.state.jobt_token == "") ? this.props.profile.jobt_token : this.state.jobt_token}
                />;
            case "socialMediaShare":
                return <SocialMediaShare
                    job={this.props.job}
                    user={this.props.user}
                    profile={this.props.profile}
                    employerProfileDetail={this.props.employerProfileDetail}
                />;
            case "aiSourcing":
                return <AISourcing
                    job={this.props.job}
                    user={this.props.user}
                    profile={this.props.profile}
                    employerProfileDetail={this.props.employerProfileDetail}
                />;
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
                    employerProfileDetail={this.props.employerProfileDetail}
                    jobt_token={(this.state.jobt_token == "") ? this.props.profile.jobt_token : this.state.jobt_token}
                />;
            case "allCandidates":
                return <AllCandidates
                    filter={this.props.filter}
                    curJob={this.props.job}
                    getAllJobs={this.props.getAllJobs}
                    getPJobs={this.props.getPJobs}
                    profile={this.props.profile}
                    user={this.props.user}
                    isClosed={p?.is_closed}
                    getPostedJobs={this.props.getPostedJobs}
                    employerProfileDetail={this.props.employerProfileDetail}
                    filterReset={this.state.subComponentFilterReset}
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
                    employerProfileDetail={this.props.employerProfileDetail}
                    reviewerStageLength={this.state.reviewerStage?.length}
                    filterReset={this.state.subComponentFilterReset}
                />;
            case "videoInterview":
                return <VideoInterview
                    filter={this.props.filter}
                    removeSubReviewer={this.props.removeSubReviewer}
                    addSubReviewer={this.props.addSubReviewer}
                    getPJobs={this.props.getPJobs}
                    resumeURL={this.props.resumeURL}
                    addSelected={this.props.setselectedId}
                    questions={p?.questions}
                    companyName={this.props.companyName}
                    positionId={p?.position_id}
                    jobId={p?.job_id}
                    jobTitle={p?.job_title}
                    isClosed={p?.is_closed}
                    inviteDate={p?.invite_date}
                    applicants={p?.applicants}
                    subreviewers={p?.subreviewers}
                    reviewer_type={p?.reviewer_type}
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
                    position={p?.position}
                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                    sendInterviews={this.props.sendInterviews}
                    checkUserExistence={this.props.checkUserExistence}
                    user_existence={this.props.user_existence}
                    getReviewNote={this.props.getReviewNote}
                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                    totalRecords={p?.total_records}
                    currentPage={p?.current_page}
                    totalPage={p?.total_page}
                    getPostedJobs={this.props.getPostedJobs}
                    updateInviteStatus={this.props.updateInviteStatus}
                    jobsId={this.props.job.job_details.id}
                    getAllJobs={this.props.getAllJobs}
                    gh_current_stage_id={this.props.job.job_details.gh_current_stage_id}
                    employerProfileDetail={this.props.employerProfileDetail}
                    reviewerStageLength={this.state.reviewerStage?.length}
                    filterReset={this.state.subComponentFilterReset}
                />;
            case "liveInterview":
                return <LiveInterview
                    filter={this.props.filter}
                    removeSubReviewer={this.props.removeSubReviewer}
                    addSubReviewer={this.props.addSubReviewer}
                    getPJobs={this.props.getPJobs}
                    resumeURL={this.props.resumeURL}
                    addSelected={this.props.setselectedId}
                    questions={p?.questions}
                    companyName={this.props.companyName}
                    positionId={p?.position_id}
                    jobId={p?.job_id}
                    jobTitle={p?.job_title}
                    isClosed={p?.is_closed}
                    inviteDate={p?.invite_date}
                    applicants={p?.applicants}
                    subreviewers={p?.subreviewers}
                    reviewer_type={p?.reviewer_type}
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
                    position={p?.position}
                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                    sendInterviews={this.props.sendInterviews}
                    checkUserExistence={this.props.checkUserExistence}
                    user_existence={this.props.user_existence}
                    getReviewNote={this.props.getReviewNote}
                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                    totalRecords={p?.total_records}
                    currentPage={p?.current_page}
                    totalPage={p?.total_page}
                    getPostedJobs={this.props.getPostedJobs}
                    updateInviteStatus={this.props.updateInviteStatus}
                    jobsId={this.props.job.job_details.id}
                    getAllJobs={this.props.getAllJobs}
                    employerProfileDetail={this.props.employerProfileDetail}
                    reviewerStageLength={this.state.reviewerStage?.length}
                    livcat1={p?.position?.livcat1}
                    livcat2={p?.position?.livcat2}
                    livcat3={p?.position?.livcat3}
                    livcat4={p?.position?.livcat4}
                    livcat5={p?.position?.livcat5}
                    renderLiveInterview={this.renderLiveInterview}
                    filterReset={this.state.subComponentFilterReset}
                />;
            case "shortList":
                return <ShortList
                    filter={this.props.filter}
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
                    currentPage={p.current_page}
                    totalPage={p.total_page}
                    jobsId={this.props.job.job_details.id}
                    employerProfileDetail={this.props.employerProfileDetail}
                    reviewerStageLength={this.state.reviewerStage?.length}
                    updateInviteStatus={this.props.updateInviteStatus}
                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                    filterReset={this.state.subComponentFilterReset}
                />;
            default:
                return null;
        };
    }

    getStageTabOrangeDot = () => {
        const p = this.props.postedJobs[this.props.job.job_details.positions_id];
        const j = this.props.job;
        //if (typeof p == 'undefined') { p = this.props.job }
        switch (this.state.portalSubpage) {
            case "pipeline":
                return j?.stage_dots;
            case "allCandidates":
                return j?.stage_dots;
            case "resumeScreen":
                return j?.stage_dots;
            case "videoInterview":
                return p?.stage_dots;
            case "liveInterview":
                return p?.stage_dots;
            case "shortList":
                return p?.stage_dots;
            default:
                return j?.stage_dots;
        }
    }
    render() {
        return (
            <Flex
                as="section"
                direction={{
                    base: 'column',
                    lg: 'row',
                }}
            >
                <Box position='fixed' width='80' overflowX='hidden' zIndex='9'>
                    <EmployerSidebar
                        reviewerStage={this.state.reviewerStage}
                        portalSubpage={this.state.portalSubpage}
                        renderPipeline={this.renderPipeline}
                        renderAllCandidates={this.renderAllCandidates}
                        renderResumeScreen={this.renderResumeScreen}
                        getStageTabOrangeDot={this.getStageTabOrangeDot}
                        renderVideoInterview={this.renderVideoInterview}
                        renderLiveInterview={this.renderLiveInterview}
                        renderShortList={this.renderShortList}
                        renderAISourcing={this.renderAISourcing}
                        renderSocialMediaShare={this.renderSocialMediaShare}
                        renderJobBoardShare={this.renderJobBoardShare}
                        curJob={this.props.job}
                        setShowSidebarFalse={this.props.setShowSidebarFalse}
                        setViewPortal={this.props.setViewPortal}
                        getAllJobs={this.props.getAllJobs}
                        renderJobEdition={this.props.renderJobEdition}
                        setJobInfo={this.props.setJobInfo}
                        reviewer_type={this.props.job?.reviewer_type}
                    />
                </Box>
                <Box
                    bg="bg-surface"
                    pt={{
                        base: '0',
                        lg: '3',
                    }}
                    flex="1"
                    ml='80'
                >
                    <Box
                        bg="bg-canvas"
                        borderTopLeftRadius={{
                            base: 'none',
                            lg: '2rem',
                        }}
                        height="full"
                    >
                        <Container py="8" height="full" width='full'>
                            <div>
                                {this.renderSubpage()}
                            </div>
                        </Container>
                    </Box>
                </Box>
            </Flex>
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