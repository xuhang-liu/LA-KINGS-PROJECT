import React, { useEffect, useState } from 'react';
import { MyModal80, MyFullModal1 } from './../DashboardComponents';
import { ResumeEva } from "./interviewComponents/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../../redux/actions/question_actions';
import { checkUserExistence } from './../../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import {MyVerticallyCenteredModal} from "./interviewComponents/MyVerticallyCenteredModal";

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(props.positionId);
    const theJob = props.postedJobs[selectedId.toString()];

    useEffect(() => {
        props.getPostedJobs(props.user.id, 1, "Short List");
        props.loadStarList(props.positionId);
    }, [])

    function refreshPage() {
        props.loadStarList(curJobId);
    }

    return (
        <div>
            <div className="container-fluid min-width-980">
                <AcceptedCandidate
                    getPJobs={props.getPJobs}
                    refreshPage={refreshPage}
                    id_candidate={props.id_candidate}
                    username_candidate={props.username_candidate}
                    email_candidate={props.email_candidate}
                    phone_candidate={props.phone_candidate}
                    location_candidate={props.location_candidate}
                    theJob={theJob}
                    getApplicantsVideos={props.getApplicantsVideos}
                    getApplicantsInfo={props.getApplicantsInfo}
                    int_ques={props.int_ques}
                    stars={props.star_list}
                    resume_list={props.resume_list}
                    resumeURL={props.resumeURL}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    getResumeURL={props.getResumeURL}
                    updateCommentStatus={props.updateCommentStatus}
                    profile={props.profile}
                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                    getReviewNote={props.getReviewNote}
                    getReviewerEvaluation={props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                    user={props.user}
                    getPostedJobs={props.getPostedJobs}
                    getAllJobs={props.getAllJobs}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    star_list: state.question_reducer.star_list,
    resume_list: state.question_reducer.resume_list,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
    user_existence: state.auth_reducer.user_existence,
});


export default withRouter(connect(mapStateToProps, { loadStarList, getResumeURL, addExReviewer, delExReviewer, checkUserExistence })(ShortList));

const AcceptedCandidate = (props) => {
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;
    return (
        <div>
            <div style={{ marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem" }} className="container-fluid min-width-980 mt-4 py-4 chart-bg1">
                <h2 className="short-list-title">{jobTitle.length > 50 ? jobTitle.substring(0, 47) + "..." : jobTitle} {jobId == "" ? null : "(ID: " + jobId + ")"}</h2>
                <div style={{ color: "#4A6F8A", fontSize: "1rem", fontWeight: "500", fontFamily: "Avenir Next, Segoe UI" }} className="ml-0 d-flex justify-content-start container-fluid row">
                    <div className="col-3">Name</div>
                    {/* <div className="col-3">Email</div> */}
                    {/* <div className="col-2">Recorded On</div> */}
                    <div className="col-3">Video Average Score</div>
                    <div className="col-2">Resume Score</div>
                    {(!props.profile.is_external_reviewer) && <div className="col-2">Contact</div>}
                </div>
                {props.theJob.applicants.map((applicant, index) => {
                    return (
                        <div>
                            <CandidateCard
                                getPJobs={props.getPJobs}
                                refreshPage={props.refreshPage}
                                stars={props.stars[applicant.email]}
                                resume_list={Math.max(props.resume_list[applicant.email], applicant.result_rate)} // get max resume score
                                applicant={applicant}
                                getApplicantsVideos={props.getApplicantsVideos}
                                getApplicantsInfo={props.getApplicantsInfo}
                                int_ques={props.int_ques}
                                id_candidate={props.id_candidate}
                                username_candidate={props.username_candidate}
                                email_candidate={props.email_candidate}
                                phone_candidate={props.phone_candidate}
                                location_candidate={props.location_candidate}
                                resumeURL={props.resumeURL}
                                recordTime={props.recordTime}
                                interviewResume={props.interviewResume}
                                getResumeURL={props.getResumeURL}
                                updateCommentStatus={props.updateCommentStatus}
                                profile={props.profile}
                                subreviewerUpdateComment={props.subreviewerUpdateComment}
                                applicants={props.theJob.applicants}
                                current={index}
                                getReviewNote={props.getReviewNote}
                                getReviewerEvaluation={props.getReviewerEvaluation}
                                getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                user={props.user}
                                getPostedJobs={props.getPostedJobs}
                                getAllJobs={props.getAllJobs}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const CandidateCard = (props) => {
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant.user_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email);
        setTimeout(() => { setShow(true); }, 300);
    };

    const refresh = () => {
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant.user_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email);
    }

    const renderStars = (stars) => {
        if (stars < 1) {
            return <div className="short-list-text2">N/A</div>
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {stars >= 1 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 2 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 3 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 4 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars == 5 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                </div>
            </div>
        )
    }

    const renderResume = (resumes) => {
        if (resumes == "-1") {
            return <div className="short-list-text2">N/A</div>
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {(resumes >= 76 && resumes <= 100) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_1.png" alt="img" />}
                    {(resumes >= 51 && resumes <= 75) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_2.png" alt="img" />}
                    {(resumes >= 26 && resumes <= 50) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_3.png" alt="img" />}
                    {(resumes >= 0 && resumes <= 25) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_4.png" alt="img" />}
                </div>
            </div>
        )
    }

    const mailTo = "mailto:" + props.applicant.email;
    return (
        <React.Fragment>
            <div className="px-4">
                <hr />
            </div>
            <div style={{ fontFamily: "Avenir Next, Segoe UI", fontWeight: "600" }} className="ml-0 d-flex justify-content-start container-fluid row h-100">
                <div className="col-3 short-list-text" onClick={() => { viewResult(); }}>
                    {props.applicant.name.length > 18 ? props.applicant.name.substring(0, 15) + "..." : props.applicant.name}
                </div>

                <div className="col-3">
                    {renderStars(props.stars)}
                </div>
                <div className="col-2">
                    {renderResume(props.resume_list)}
                </div>
                {!props.profile.is_external_reviewer &&
                    <div className="col-2">
                        <a
                            target="_blank"
                            href={mailTo}
                            className="interview-txt9"
                            style={{ color: "#67A3F3", border: "none", background: "white", display: "inline-block", fontSize: "0.9375rem" }}
                        >
                            <i className="bx-fw bx bx-mail-send"></i> Send Email
                        </a>
                    </div>
                }
            </div>
            <MyVerticallyCenteredModal
                refresh={refresh}
                getPJobs={props.getPJobs}
                applicant={props.applicant}
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                int_ques={props.int_ques}
                secondround_status={props.applicant.secondround_status}
                show={show}
                setShowResume={setShowResume}
                setShowEva={setShowEva}
                onHide={() => { setShow(false) }}
                int_ques={props.int_ques}
                positionId={props.applicant.positions_id}
                resumeURL={props.resumeURL}
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                updateCommentStatus={props.updateCommentStatus}
                profile={props.profile}
                subreviewerUpdateComment={props.subreviewerUpdateComment}
                applicants={props.applicants}
                current={props.current}
                filter={"active"}
                getPostedJobs={props.getPostedJobs}
                getAllJobs={props.getAllJobs}
            />
            <MyModal80
                show={showResume}
                onHide={() => { setShowResume(false); setShow(true); }}
            >
                <div class="iframe-container">
                    <iframe className="responsive-iframe" src={props.resumeURL} />
                </div>
            </MyModal80>
            <MyModal80
                show={showEva}
                onHide={() => { setShowEva(false); setShow(true); }}
            >
                <ResumeEva interviewResume={(props.interviewResume.result_rate != "-1") ? props.interviewResume : props.applicants[props.current]} />
            </MyModal80>
        </React.Fragment>
    )
}

function sendSuccessAlert() {
    confirmAlert({
        title: "Send Invitation Success",
        message: "You have sent the invitation successfully.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function sendFailAlert() {
    confirmAlert({
        title: "Send Invitation Fail",
        message: "Looks like this email is already registered at HireBeat and therefore cannot be invited as an external reviewer. Please enter a different email. Personal email also works.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function deleteSuccessAlert() {
    confirmAlert({
        title: "Remove Success",
        message: "You have removed reviewer successfully.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};