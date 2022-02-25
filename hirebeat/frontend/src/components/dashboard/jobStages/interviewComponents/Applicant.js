import React, { useState } from "react";
import { MyModal80 } from "./../../DashboardComponents";
import { ResumeEva } from "./ResumeEva";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";
import { confirmAlert } from 'react-confirm-alert';

export const Applicant = (props) => {
    const [current, setCurrent] = useState(props.index);
    const [show, setShow] = useState(props.showCandidateModal);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);
    //const [next, setNext] = useState(null);
    //const [prev, setPrev] = useState(null);
    let applicants = props.applicants;
    let email = applicants[current].email;
    let positionId = props.positionId;
    let companyName = props.companyName;
    let jobTitle = props.jobTitle;
    let name = props.name;
    let candidateId = applicants[current].id;
    let isInvited = applicants[current].is_invited;
    const [isViewed, setIsViewed] = useState(props.isViewed);
    const commentStatus = applicants[current].comment_status;
    const start = 0;
    const end = applicants.length - 1;

    // useEffect(() => {
    //     if (sessionStorage.getItem("showCandidateModal" + props.index) === "true") {
    //         setShow(true);
    //     }
    // }, [setShow]);

    function viewResult() {
        if (!isViewed) {
            props.updateViewStatus({ "candidate_id": applicants[props.index].id });
            setIsViewed(true);
        }
        // get videos and info
        props.getApplicantsVideos(applicants[props.index].email, positionId);
        props.getApplicantsInfo(applicants[props.index].email);
        props.getResumeURL(positionId, applicants[props.index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[props.index].email);
        props.getReviewerEvaluation(positionId, applicants[props.index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[props.index].email, props.user.email, props.currentStage);
        //sessionStorage.setItem(("showCandidateModal" + props.index), "true");
        setShow(true);
    };

    function getReviewPageData(index) {
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, positionId);
        props.getApplicantsInfo(applicants[index].email);
        props.getResumeURL(positionId, applicants[index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[index].email);
        props.getReviewerEvaluation(positionId, applicants[index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[index].email, props.user.email, props.currentStage);
        setCurrent(index);
    }

    function getReviewPageData1(index) {
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, positionId);
        props.getApplicantsInfo(applicants[index].email);
        props.getResumeURL(positionId, applicants[index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[index].email);
        props.getReviewerEvaluation(positionId, applicants[index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[index].email, props.user.email, props.currentStage);
    }

    function getNextResult(curIndex) {
        //sessionStorage.removeItem("showCandidateModal" + curIndex);
        //setNext(curIndex + 1);
        //sessionStorage.setItem(("showCandidateModal" + next), "true");
        getReviewPageData1(curIndex + 1);
    };

    function viewNextResult(curIndex) {
        //sessionStorage.removeItem("showCandidateModal" + curIndex);
        //setNext(curIndex + 1);
        //sessionStorage.setItem(("showCandidateModal" + next), "true");
        getReviewPageData(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        //sessionStorage.removeItem("showCandidateModal" + curIndex);
        //setPrev(curIndex - 1);
        //sessionStorage.setItem(("showCandidateModal" + prev), "true");
        getReviewPageData(curIndex - 1);
    };

    {/* Below functions are designed for switching video recorded candidate */ }
    {/*function viewNextResult(curIndex) {
        let right = applicants.length;
        let next = curIndex + 1;
        while (next < right) {
            if (applicants[next].is_recorded && applicants[next].video_count > 0) {
                break;
            }
            next++;
        }
        // get the next candidate info
        getReviewPageData(next);
    };

    function viewPrevResult(curIndex) {
        let left = 0;
        let prev = curIndex - 1;
        while (prev >= left) {
            if (applicants[prev].is_recorded && applicants[prev].video_count > 0) {
                break;
            }
            prev--;
        }
        getReviewPageData(prev);
    };*/}

    const refresh = () => {
        props.getResumeURL(positionId, applicants[props.index]?.apply_candidate_id);
        props.getApplicantsVideos(email, positionId);
        props.getApplicantsInfo(email);
    }

    function inviteAgain() {
        if (props.questions.length <= 0) {
            props.setShowNoQuestionAlert(true);
        }
        else {
            // encode url
            let url = "";
            //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
            let prefix = "https://app.hirebeat.co/candidate-login?";  // online
            let params = "email=" + email + "&" + "positionId=" + positionId;
            let encode = window.btoa(params);
            url = prefix + encode;

            let meta = {
                company_name: companyName,
                job_title: jobTitle,
                email: email,
                name: name,
                url: url,
                expire: 7,
                candidate_id: candidateId,
            };

            props.resendInvitation(meta);
            setTimeout(() => { props.getAllJobs(props.user.id, 1, props.currentStage); props.getPostedJobs(props.user.id, 1, props.currentStage) }, 300);
            alert1();
        }
    }

    function hideModal() {
        // if (next != null){
        //     sessionStorage.removeItem("showCandidateModal" + next);
        // }else if (prev != null){
        //     sessionStorage.removeItem("showCandidateModal" + prev);
        // }
        // sessionStorage.removeItem("showCandidateModal" + props.index);
        setCurrent(props.index);
        setTimeout(() => { props.getAllJobs(props.user.id, 1, props.currentStage); props.getPostedJobs(props.user.id, (props.selectedPage+1), props.currentStage, props.category.value, props.category3.value) }, 300);
        setShow(false);
    }

    return (
        <div>
            <hr
                style={{
                    border: props.index == 0 ? "1px solid #E8EDFC" : "1px solid #E5E5E5",
                    boxShadow: props.index == 0 ? "0px 1px 2px #E8EDFC" : "",
                }}
            />
            <div className="row interview-center" style={{ color: "#7D7D7D", height: "2.5rem" }}>
                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                    <div className="interview-txt9" style={{ marginLeft: "1rem" }}>
                        <input className="selected-candidate" value={JSON.stringify(applicants[current])} type="checkbox" />
                    </div>
                }
                <div className="col-3 mb-1">
                    <button className="title-button2" style={{ wordBreak: "break-all" }} onClick={(() => viewResult())}>
                        {(!isViewed && commentStatus == 0) ? <span class="dot"></span> : <span class="dot" style={{ background: "none" }}></span>}
                        {props.name.split("(")[0].length > 20 ? props.name.split("(")[0].substring(0, 18) + "..." : props.name.split("(")[0]}
                    </button>
                </div>
                <div className="col-2">
                    {(isInvited || props.isRecorded) &&
                        <div className="interview-txt9">
                            <p style={{ color: "#090d3a" }}>{props.date?props.date:""}</p>
                        </div>
                    }
                </div>
                <div className="col-3">
                    {(isInvited || props.isRecorded) ?
                        (props.isRecorded ?
                            (props.videoCount > 0 ?
                                <div className="interview-txt9">
                                    <p style={{ color: "#090d3a" }}><strong>Completed</strong></p>
                                </div> :
                                <div className="interview-txt9">
                                    <p style={{ color: "#7D7D7D" }}>N/A</p>
                                </div>) :
                            <div className="interview-txt9">
                                <p style={{ color: "#7D7D7D" }}>Pending</p>
                            </div>
                        ) :
                        <div className="interview-txt9">
                            <p style={{ color: "#7D7D7D" }}>Not Invited</p>
                        </div>
                    }
                </div>
                {(props.reviewerStageLength > 0) &&
                    <div className="col-3">
                        {applicants[current]?.reviewer_review_status ?
                            <p style={{ fontWeight: "600", color: "#4A6F8A" }}>Reviewed</p> :
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>Pending</p>
                        }
                    </div>}
                {/*<div className="col-1">
                    <div>
                        <button
                            onClick={() => viewResult()}
                            className="interview-txt9"
                            style={{color: "#006dff", border: "none", background: "white", paddingLeft:"0px"}}
                        >
                        <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#006dff"}}></i> View
                        </button>
                    </div>
                </div>*/}
                {/*<div className="col-2">
                    {props.isRecorded ?
                        (props.videoCount > 0 ?
                            <div>
                                <button
                                    onClick={() => viewResult()}
                                    className="interview-txt9"
                                    style={{color: "#006dff", border: "none", background: "white", paddingLeft:"0px"}}
                                >
                                <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#006dff"}}></i> View
                                </button>
                            </div> :
                            <div className="interview-txt9">
                            </div>) :
                            <div>
                            {!props.profile.is_subreviwer &&
                            <div>
                            {!props.isClosed &&
                            <div>
                                <button
                                    onClick={ () => inviteAgain()}
                                    className="interview-txt9"
                                    style={{color: "#006dff", border: "none", background: "white", paddingLeft:"0px"}}
                                >
                                    <i className="bx bx-redo interview-txt9" style={{color: "#006dff"}}></i>
                                    Resend
                                </button>
                            </div>}
                            </div>}
                        </div>
                    }
                </div>*/}
                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                    <div className="col-1">
                        {(isInvited && props.filter == "active") ?
                            (props.isRecorded && props.videoCount > 0 ?
                                null
                                : 
                                <button
                                    onClick={() => inviteAgain()}
                                    className="title-button2"
                                >
                                {/*<i className="bx bx-redo interview-txt9" style={{color: "#006dff"}}></i>*/}
                                Resend
                                </button>) 
                            :
                            <button
                                onClick={() => inviteAgain()}
                                className="title-button2"
                            >
                                {/*<i className="bx bx-redo interview-txt9" style={{color: "#006dff"}}></i>*/}
                                Invite
                            </button>
                        }
                    </div>
                }
                {(props.reviewerStageLength == 0) &&
                    <div className="col-2" style={{ marginLeft: "1.4rem" }}>
                        {applicants[current]?.num_votes > 0 &&
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>{applicants[current]?.num_vote_yes + "/" + applicants[current]?.num_votes}</p>
                        }
                    </div>
                }
            </div>
            {/* Interview Result */}
            <MyVerticallyCenteredModal
                refresh={refresh}
                getPJobs={props.getPJobs}
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                commentStatus={commentStatus}
                show={show}
                setShowResume={setShowResume}
                setShowEva={setShowEva}
                onHide={hideModal}
                int_ques={props.int_ques}
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                positionId={props.positionId}
                updateCommentStatus={props.updateCommentStatus}
                profile={props.profile}
                subreviewerUpdateComment={props.subreviewerUpdateComment}
                current={current}
                setCurrent={setCurrent}
                start={start}
                end={end}
                viewPrevResult={viewPrevResult}
                viewNextResult={viewNextResult}
                getNextResult={getNextResult}
                applicants={applicants}
                filter={props.filter}
                currentStage={props.currentStage}
                getPostedJobs={props.getPostedJobs}
                getAllJobs={props.getAllJobs}
                reviewer_type={props.reviewer_type}
                gh_current_stage_id={props.gh_current_stage_id}
                jobsId={props.jobsId}
                selectedPage={props.selectedPage}
                employerProfileDetail={props.employerProfileDetail}
                category={props.category}
                category3={props.category3}
            />
            <MyModal80
                show={showResume}
                onHide={() => { setShowResume(false); }}
            >
                <div class="iframe-container">
                    <iframe className="responsive-iframe" src={props.resumeURL} />
                </div>
            </MyModal80>
            <MyModal80
                show={showEva}
                onHide={() => { setShowEva(false); }}
            >
                <ResumeEva
                    interviewResume={(props.interviewResume.result_rate != "-1") ? props.interviewResume : applicants[current]} />
            </MyModal80>
        </div>
    )
};

function alert1() {
    confirmAlert({
        title: "Invitation Sent",
        message: "You send the interview invitation successfully",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};