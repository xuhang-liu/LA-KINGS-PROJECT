import React, { useEffect, useState } from 'react';
//import SecondReview from './SecondReview';
import { MyModal80, MyFullModal1 } from './DashboardComponents';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
import CandidateApplication from './shortlist/CandidateApplication';
import { ResumeEva } from "./applications/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../redux/actions/question_actions';
import { checkUserExistence } from './../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import axios from "axios";

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(-1);

    function refreshPage() {
        props.loadStarList(curJobId);
    }

    return (
        <div>
            <div className="container min-width-980">
                <div style={{ marginBottom: "30px" }}>
                    <h3><b><i className="bx-fw bx bx-bookmark-plus"></i><span className="ml-2">Shortlist</span></b></h3>
                </div>
                {selectedId == -1 ?
                    <div>
                        {Object.keys(props.postedJobs).reverse().map((key) => {
                            let p = props.postedJobs[key];
                            if (!p.is_closed) {
                                return (
                                    <ShortListCard
                                        jobId={p.job_id}
                                        jobTitle={p.job_title}
                                        inviteDate={p.invite_date}
                                        applicants={p.applicants}
                                        exReviewers={p.ex_reviewers}
                                        profile={props.profile}
                                        refreshPage={refreshPage}
                                        positionId={p.position_id}
                                        setSelectedId={setSelectedId}
                                        addExReviewer={props.addExReviewer}
                                        delExReviewer={props.delExReviewer}
                                        getPJobs={props.getPJobs}
                                        user={props.user}
                                        invitedBy={p.company_name}
                                        companyName={props.companyName}
                                        checkUserExistence={props.checkUserExistence}
                                        user_existence={props.user_existence}
                                        getReviewNote={props.getReviewNote}
                                        getReviewerEvaluation={props.getReviewerEvaluation}
                                        loadStarList={props.loadStarList}
                                    />
                                )
                            }
                        })}
                    </div> :
                    <div>
                        <div className="d-flex align-items-center">
                            <button
                                type="button"
                                className="panel-button"
                                onClick={() => { setSelectedId(-1) }}
                                style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            >
                                <div className="center-items back-to-text">
                                    <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to List</p>
                                </div>
                            </button>
                        </div>
                        <AcceptedCandidate
                            getPJobs={props.getPJobs}
                            refreshPage={refreshPage}
                            id_candidate={props.id_candidate}
                            username_candidate={props.username_candidate}
                            email_candidate={props.email_candidate}
                            phone_candidate={props.phone_candidate}
                            location_candidate={props.location_candidate}
                            theJob={props.postedJobs[selectedId]}
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
                        />
                    </div>
                }
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

function getQualifiedApplicants(applicants) {
    let len = applicants?.length;
    let qualifiedApplicants = [];
    for (let i = 0; i < len; i++) {
        if (applicants[i].comment_status == 1) {
            qualifiedApplicants.push(applicants[i]);
        }
    }
    return qualifiedApplicants;
}

const ShortListCard = (props) => {
    const qualifiedApplicants = getQualifiedApplicants(props.applicants);

    function inviteExReviewer() {
        if (props.exReviewers.length >= 5 && props.profile.plan_interval == "Pro") {
            confirmAlert({
                title: 'Upgrade Now!',
                message: "Please upgrade your account to add more than 5 external reviewers.",
                buttons: [
                    { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                    { label: 'OK' },
                ]
            });
        } else {
            let ex_reviewer_name = "";
            let ex_reviewer_email = "";
            let encoded_email = "";
            function submitExReviewer(e) {
                e.preventDefault();
                ex_reviewer_name = document.getElementById("ex_reviewer_name").value;
                ex_reviewer_email = document.getElementById("ex_reviewer_email").value;
                //check user exist
                axios.get(`accounts/check-user-existence?email=${ex_reviewer_email.toLowerCase()}`).then((res) => {
                    let user_existence = res.data.data;
                    if (user_existence) {
                        sendFailAlert();
                        props.getPJobs();
                    } else {
                        encoded_email = window.btoa("email=" + ex_reviewer_email.toLowerCase());
                        let data = {
                            "ex_reviewer_name": ex_reviewer_name,
                            "ex_reviewer_email": ex_reviewer_email,
                            "encoded_email": encoded_email,
                            "company_name": props.companyName,
                            "position_id": props.positionId,
                            "master_email": props.user.email,
                        };
                        props.addExReviewer(data);
                        props.getPJobs();
                        sendSuccessAlert();
                    }
                })
                    .catch(error => {
                        console.log(error)
                    });
            }

            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className="interview-txt7" style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "2px solid #E8EDFC", padding: "1rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
                            <form onSubmit={submitExReviewer}>
                                <div className="form-row">
                                    <h3 className="subreviewer-h3">Invite External Reviewer</h3>
                                </div>
                                <div className="form-row">
                                    <p className="subreviewer-p">
                                        You can invite people outside your organization to join <br />
                                        the recruiting process as an external reviewer. <br />
                                        An external reviewer can only see the shortlisted <br />
                                        candidates for the job position you shared, including <br />
                                        their video interview and resume.
                                    </p>
                                </div>
                                <div className="form-row" style={{ marginTop: "1rem" }}>
                                    <div className="form-group col-5">
                                        <label style={{ fontSize: "17px", margin: "0.5rem" }}>
                                            Enter Name
                                        </label>
                                        <input type="text" id="ex_reviewer_name" className="form-control" required="required" placeHolder="John" />
                                    </div>
                                    <div className="form-group col-7">
                                        <label style={{ fontSize: "17px", margin: "0.5rem" }}>
                                            Enter Email
                                        </label>
                                        <input type="email" id="ex_reviewer_email" className="form-control" required="required" placeHolder="john@example.com" />
                                    </div>
                                </div>
                                <div className="form-row justify-items">
                                    <div className="form-group col-3" style={{ marginRight: "3rem" }}>
                                        <button
                                            type="submit"
                                            className="default-btn1"
                                            style={{ paddingLeft: "25px" }}
                                        >
                                            Invite
                                        </button>
                                    </div>
                                    <div className="form-group col-3">
                                        <button
                                            type="button"
                                            className="default-btn1"
                                            style={{ paddingLeft: "25px" }}
                                            onClick={() => onClose()}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    );
                }
            });
        }
    }

    function deleteExReviewer(ex_reviewer_id) {
        let data = { ex_reviewer_id: ex_reviewer_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { props.delExReviewer(data); deleteSuccessAlert(); props.getPJobs(); }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    return (
        <React.Fragment>
            <div className="container d-flex justify-content-start chart-bg1" style={{ marginTop: "3rem", backgroundColor: "white", "border-radius": "0.5rem" }}>
                <div className="col-12" style={{ fontFamily: "Inter, Segoe UI" }}>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-7" style={{ color: "#090D3A" }}>
                                <div className="row">
                                    <button className="title-button ml-2" style={{ float: "left" }} onClick={() => { props.loadStarList(props.positionId); props.setSelectedId(props.positionId) }}>
                                        {props.jobTitle.length > 50 ? props.jobTitle.substring(0, 48) + "..." : props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}
                                    </button>
                                </div>
                                <div className="row mb-2 mt-1">
                                    <div className="col-4">
                                        <p style={{ color: "#4A6F8A" }}>Qualified Applicants: {qualifiedApplicants.length}</p>
                                    </div>
                                    {props.profile.is_external_reviewer ?
                                        <div className="col-8 mb-4" style={{ color: "#4A6F8A", borderLeft: "outset" }}>
                                            <p>Invited By: {props.invitedBy.substring(0, 10)}</p>
                                        </div> :
                                        <div className="col-8 mb-4" style={{ color: "#4A6F8A", borderLeft: "outset" }}>
                                            <p>Created On: {props.inviteDate.substring(0, 10)}</p>
                                        </div>}
                                </div>
                            </div>
                            <div className="col-2 mt-4" style={{ marginRight: "-2rem" }}>
                                {!props.profile.is_external_reviewer &&
                                    (props.exReviewers.slice(0, 3).map((sub, i) => {
                                        return (
                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                <p className="sub_submenu container" style={{ minWidth: "12rem" }}>
                                                    <div className="row">
                                                        <div className="col-2 px-3 py-2">
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                        </div>
                                                        <div className="col-10">
                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "3px" }}>{sub.r_email}</p>
                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { deleteExReviewer(sub.id) }}>Remove</a>
                                                        </div>
                                                    </div>
                                                </p>
                                            </span>
                                        )
                                    }))
                                }
                                {!props.profile.is_external_reviewer &&
                                    (props.exReviewers.length > 3 &&
                                        <span className="sub_number3" style={{ color: "white" }}>+{props.exReviewers.length - 3}
                                            <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>External-Reviewers</p>
                                                        {props.exReviewers.map((sub, i) => {
                                                            return (
                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                    <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                        <div className="row">
                                                                            <div className="col-2 px-2 py-2">
                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                            </div>
                                                                            <div className="col-10">
                                                                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                                <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "3px" }}>{sub.r_email}</p>
                                                                                <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { deleteExReviewer(sub.id) }}>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </p>
                                                                </span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                }
                            </div>
                            <div className="col-3 ml-4">
                                {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer) &&
                                    <div>
                                        {qualifiedApplicants.length > 0 &&
                                            <div>
                                                {((props.exReviewers.length < Number(props.profile.external_reviewer_count) || (props.profile.membership == "Premium"))) &&
                                                    <button
                                                        className="default-btn1 interview-txt6 mt-4"
                                                        onClick={inviteExReviewer}
                                                        style={{ paddingLeft: "25px" }}
                                                    >
                                                        + External Reviewer
                                                        <span></span>
                                                    </button>}
                                            </div>}
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const AcceptedCandidate = (props) => {
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;
    return (
        <div>
            <div style={{ marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem" }} className="container min-width-980 mt-4 py-4 chart-bg1">
                <h2 className="short-list-title">{jobTitle.length > 50 ? jobTitle.substring(0, 47) + "..." : jobTitle} {jobId == "" ? null : "(ID: " + jobId + ")"}</h2>
                <div style={{ color: "#4A6F8A", fontSize: "1rem", fontWeight: "500", fontFamily: "Inter, Segoe UI" }} className="ml-0 d-flex justify-content-start container-fluid row">
                    <div className="col-3">Name</div>
                    {/* <div className="col-3">Email</div> */}
                    {/* <div className="col-2">Recorded On</div> */}
                    <div className="col-3">Video Average Score</div>
                    <div className="col-2">Resume Score</div>
                    {(!props.profile.is_external_reviewer) && <div className="col-2">Contact</div>}
                </div>
                {props.theJob.applicants.map((applicant, index) => {
                    if (applicant.comment_status == 1) {
                        return (
                            <div>
                                <CandidateCard
                                    getPJobs={props.getPJobs}
                                    refreshPage={props.refreshPage}
                                    stars={props.stars[applicant.email]}
                                    resume_list={Math.max(props.resume_list[applicant.email]?props.resume_list[applicant.email]:0, applicant.result_rate?applicant.result_rate:0)} // get max resume score
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
                                />
                            </div>
                        )
                    }
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
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_1.png" alt="img" />}
                    {(resumes >= 51 && resumes <= 75) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_2.png" alt="img" />}
                    {(resumes >= 26 && resumes <= 50) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_3.png" alt="img" />}
                    {(resumes >= 0 && resumes <= 25) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_4.png" alt="img" />}
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
            <div style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600" }} className="ml-0 d-flex justify-content-start container-fluid row h-100">
                <div className="col-3 short-list-text" onClick={() => { viewResult(); }}>
                    {props.applicant.name.length > 18 ? props.applicant.name.substring(0, 15) + "..." : props.applicant.name}
                </div>

                {/* <div className="col-3 short-list-text" onClick={() => { viewResult(); }}>
                    {props.applicant.email.length > 24 ? props.applicant.email.substring(0, 22) + "..." : props.applicant.email}
                </div> */}

                {/* <div className="col-2" style={{ color: "#7D7D7D", fontSize: "1rem" }}>
                    {props.applicant.invite_date.substring(0, 10)}
                </div> */}

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
                            style={{ color: "#006dff", border: "none", background: "white", display: "inline-block", fontSize: "0.7rem" }}
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


function MyVerticallyCenteredModal(props) {
    const { ...rest } = props;
    return (
        <div style={{ background: "#E8EDFC" }}>
            <MyFullModal1 className="light-blue-modal" {...rest}>
                <CandidateApplication
                    {...rest}
                    refresh={props.refresh}
                    getPJobs={props.getPJobs}
                    setShowResume={props.setShowResume}
                    setShowEva={props.setShowEva}
                    hide={props.onHide}
                    int_ques={props.int_ques}
                    id_candidate={props.id_candidate}
                    username_candidate={props.username_candidate}
                    email_candidate={props.email_candidate}
                    phone_candidate={props.phone_candidate}
                    location_candidate={props.location_candidate}
                    positionId={props.positionId}
                    updateCommentStatus={props.updateCommentStatus}
                    comment_status={props.applicant.comment_status}
                    resumeURL={props.resumeURL}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    profile={props.profile}
                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                    applicants={props.applicants}
                    current={props.current}
                    hasSwitch={false}
                    filter={"active"}
                />
            </MyFullModal1>
        </div>
    );
};

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