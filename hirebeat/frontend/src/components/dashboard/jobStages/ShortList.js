import React, { useState, useEffect } from 'react';
import { MyModal80, AlertModal } from './../DashboardComponents';
import MoveForm from "./interviewComponents/MoveForm";
import { ResumeEva } from "./interviewComponents/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../../redux/actions/question_actions';
import { checkUserExistence } from './../../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { MyVerticallyCenteredModal } from "./interviewComponents/MyVerticallyCenteredModal";
import { EmailSending } from '../applications/EmailSending';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import axios from "axios";

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(props.positionId);
    const theJob = props.postedJobs[selectedId.toString()];

    //    useEffect(() => {
    //        props.getPostedJobs(props.user.id, 1, "Short List");
    //        props.loadStarList(props.positionId);
    //    }, [])

    function refreshPage() {
        props.loadStarList(curJobId);
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };

    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        setSelectedPage(selectedPage);
        let page = selectedPage + 1;
        props.getPostedJobs(props.user.id, page, "Short List", "","","","", props.jobsId);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="container-fluid min-width-980">
                <AcceptedCandidate
                    filter={props.filter}
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
                    keyWords={keyWords}
                    onChange={onChange}
                    handlePageClick={handlePageClick}
                    currentPage={props.currentPage}
                    totalPage={props.totalPage}
                    selectedPage={selectedPage}
                    reviewer_type={props.reviewer_type}
                    jobsId={props.jobsId}
                    employerProfileDetail={props.employerProfileDetail}
                    reviewerStageLength={props.reviewerStageLength}
                    updateInviteStatus={props.updateInviteStatus}
                    moveCandidateToInterview={props.moveCandidateToInterview}
                    positionId={props.positionId}
                    filterReset={props.filterReset}
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
    const [category3, setCategory3] = useState({ value: 'All', label: 'All' });
    const [category5, setCategory5] = useState({ value: 'All', label: 'All' });
    const [showMoveSuccessAlert, setShowMoveSuccessAlert] = useState(false);
    const [showRejectSuccessAlert, setShowRejectSuccessAlert] = useState(false);
    const [showMoveForm, setShowMoveForm] = useState(false);
    const [currentStage, setCurrentStage] = useState("Short List");
    const [nextStage, setNextStage] = useState("Live Interview");
    const [showEmailSending, setShowEmailSending] = useState(false);
    const [email_list, setEmail_list] = useState(null);
    const [select_all, setSelect_all] = useState(false);
    const [candidates_count, setCandidates_count] = useState(0);
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;

    useEffect(() => {
        if (props.filterReset > 0){
            setCategory3({ value: 'All', label: 'All' });
            setCategory5({ value: 'All', label: 'All' });
        }
    }, [props.filterReset]); 

    function onFilter3(category3) {
        setCategory3(category3)
    }

    function onFilter5(category5) {
        setCategory5(category5)
        let page = 1;
        let userId = props.user.id;
        props.getPostedJobs(userId, page, "Short List", "", category3.value, "", category5.value, props.jobsId);
    }

    const options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ]

    const options5 = [
        { value: 'Offer to be Made', label: 'Offer to be Made' },
        { value: 'Offer Extended', label: 'Offer Extended' },
        { value: 'In Negotiation', label: 'In Negotiation' },
        { value: 'Declined', label: 'Declined' },
        { value: 'TBD', label: 'TBD' },
        { value: 'All', label: 'All' },
    ]

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    }

    function selectAllCandidates() {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
            setSelect_all(true);
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
            }
            setSelect_all(false);
            setCandidates_count(0);
        }
    }

    function unSelectAllCandidates() {
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            candidates[i].checked = false;
        }
    }

    const openMoveForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            setShowMoveForm(true);
        }
        else {
            noCandidateAlert();
        }

    }

    const hideMoveForm = () => {
        setShowMoveForm(false);
    }

    function noCandidateAlert() {
        confirmAlert({
            title: "No Candidate Selected",
            message: "Please select candidates for interview",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    const enableSuccessAlert = () => {
        setShowMoveSuccessAlert(true);
    }

    const enableRejectSuccessAlert = () => {
        setShowRejectSuccessAlert(true);
    }

    const hideSuccessAlert = () => {
        handleAlertChoice();
        setShowMoveSuccessAlert(false);
    }

    const handleAlertChoice = () => {
        let checkbox = document.getElementById("alertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainMove", "true");
        }
        else {
            localStorage.setItem("noShowAgainMove", "false");
        }
    }

    const hideRejectSuccessAlert = () => {
        handleRejectAlertChoice();
        setShowRejectSuccessAlert(false);
    }

    const handleRejectAlertChoice = () => {
        let checkbox = document.getElementById("rejectAlertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainReject", "true");
        }
        else {
            localStorage.setItem("noShowAgainReject", "false");
        }
    }

    const moveCandidates = () => {
        let candidateCount = 0;
        let positionId = props.positionId;
        let jobId = props.jobsId;
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                let candidate = JSON.parse(candidates[i].value);
                names.push(candidate.name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount += 1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if ((nextStage != "") && (nextStage != "Short List")) {
                let meta = {
                    position_id: positionId,
                    job_id: jobId,
                    emails: emails,
                    names: names,
                    candidates: invitedCandidates,
                    nextStage: nextStage,
                }
                props.moveCandidateToInterview(meta);
                hideMoveForm();
                // update
                let page = 1;
                let userId = props.user.id;
                setTimeout(() => { props.getAllJobs(userId, page, "Short List"); props.getPostedJobs(userId, page, "Short List", "", category3.value, "",category5.value, props.jobsId) }, 300);
                unSelectAllCandidates();
                let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
                if (!noShowAgainMove) {
                    enableSuccessAlert();
                }
            } else if (nextStage == "Short List") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            noCandidateAlert();
        }
        window.scrollTo(0, 0);
    }

    const rejectCandidates = () => {
        let candidateCount = 0;
        let positionId = props.positionId;
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                let candidate = JSON.parse(candidates[i].value);
                names.push(candidate.name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.apply_candidate_id);
                candidateCount += 1;
            }
        }
        if (candidateCount > 0) {
            let data = {
                positionId: positionId,
                candidates: invitedCandidates,
                nextStage: nextStage,
                is_reject: true,
            }
            props.updateInviteStatus(data);
            // update
            let page = 1;
            let userId = props.user.id;
            setTimeout(() => { props.getAllJobs(userId, page, "Short List"); props.getPostedJobs(userId, page, "Short List", "", category3.value, "",category5.value, props.jobsId) }, 300);
            unSelectAllCandidates();
            let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
            if (!noShowAgainReject) {
                enableRejectSuccessAlert();
            }
        } else {
            noCandidateAlert();
        }
        window.scrollTo(0, 0);
    };

    const openEmailForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            var email_list = []
            for (let i = 0; i < candidates.length; i++) {
                if (candidates[i].checked) {
                    let candidate = JSON.parse(candidates[i].value);
                    email_list.push({ "email": candidate?.email, "id": candidate?.apply_candidate_id, "first_name": candidate?.name?.split(" ")[0], "last_name": candidate?.name?.split(" ")[1] });
                }
            }
            setEmail_list(email_list);
            setShowEmailSending(true);
        } else {
            noCandidateAlert();
        }
    }

    const hideEmailSending = () => {
        setShowEmailSending(false);
    }

    const CheckListCheckbox = () => {
        setCandidates_count(0);
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked == true) {
                setCandidates_count(candidates_count + 1);
            }
        }
    }

    return (
        <div>
            <div style={{ marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem", paddingTop: '1.4rem' }} className="mt-4 pb-3">
                <div className="row" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                    <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem" }}>
                        <label style={{ position: "absolute", marginLeft: "0.5rem", marginTop: "0.25rem" }}><i className="bx bx-search bx-sm"></i></label>
                        <input placeholder={"Search candidate"} className="search-candidate-input" value={props.keyWords} onChange={props.onChange} style={{ height: "auto" }}></input>
                    </div>
                    {props.totalPage > 1 &&
                        <div className="ml-auto">
                            <ReactPaginate
                                previousLabel={'< Prev'}
                                nextLabel={'Next >'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={props.totalPage}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={5}
                                onPageChange={props.handlePageClick}
                                containerClassName={'pagination3'}
                                activeClassName={'active'}
                                forcePage={props.currentPage}
                            />
                        </div>
                    }
                </div>
                <div className="container-fluid chart-bg1" style={{ marginTop: "1.3rem", boxShadow: "none" }}>
                    <div style={{ color: "#7D7D7D", height: "2rem", marginTop: "1rem", paddingBottom: "2.5rem" }} className="d-flex justify-content-start row interview-txt7 interview-center">
                        {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                            <div className='mr-3' style={{ marginLeft: "1rem", display: "flex" }}>
                                <input id="select-all" type="checkbox" onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                            </div>
                        }
                        <div className="col-2">Name</div>
                        {/* <div className="col-3">Video Average Score</div> */}
                        <div className="col-2">Resume Score</div>
                        {(props.reviewerStageLength > 0) &&
                            <div className="col-3"> <div style={{ display: "inline-block", marginRight: "0.2rem" }}>Status</div>
                                <div style={{ display: "inline-block" }}>
                                    <Select isSearchable={false} value={category3} onChange={onFilter3} options={options3} className="select-category" styles={customStyles} />
                                </div>
                            </div>
                        }
                        {(props.reviewerStageLength == 0) &&
                            <div className="col-2">
                                Team Review
                                <span className="tool_tip ml-2">
                                    <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                    <p className="tool_submenu container" style={{ width: "14rem" }}>
                                        <div>
                                            Affirmative Votes over Total Votes. Pending votes are not included.
                                        </div>
                                    </p>
                                </span>
                            </div>
                        }
                        {(props.reviewerStageLength == 0) &&
                            <div className="col-3"> <div style={{ display: "inline-block", marginRight: "0.2rem" }}>Offer Status</div>
                                <div style={{ display: "inline-block" }}>
                                    <Select isSearchable={false} value={category5} onChange={onFilter5} options={options5} className="select-category" styles={customStyles} />
                                </div>
                            </div>
                        }
                        {(!props.profile.is_external_reviewer && !props.profile.is_subreviwer) && <div className="col-2">Contact</div>}
                    </div>
                    {props.theJob.applicants.map((applicant, index) => {
                        if (props.keyWords != "") {
                            let name = applicant.name;
                            if (!name.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                        }
                        return (
                            <div>
                                <CandidateCard
                                    getPJobs={props.getPJobs}
                                    refreshPage={props.refreshPage}
                                    stars={props.stars[applicant.email]}
                                    resume_list={Math.max(props.resume_list[applicant.email] ? props.resume_list[applicant.email] : 0, applicant.result_rate ? applicant.result_rate : 0)} // get max resume score
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
                                    reviewer_type={props.reviewer_type}
                                    selectedPage={props.selectedPage}
                                    jobsId={props.jobsId}
                                    employerProfileDetail={props.employerProfileDetail}
                                    reviewerStageLength={props.reviewerStageLength}
                                    category3={category3}
                                    category5={category5}
                                    CheckListCheckbox={CheckListCheckbox}
                                />
                            </div>
                        )
                    })}
                </div>
                {props.totalPage > 1 &&
                    <div className="d-flex justify-content-end" style={{ marginTop: "1rem" }}>
                        <ReactPaginate
                            previousLabel={'< Prev'}
                            nextLabel={'Next >'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={props.totalPage}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            onPageChange={props.handlePageClick}
                            containerClassName={'pagination3'}
                            activeClassName={'active'}
                            forcePage={props.currentPage}
                        />
                    </div>
                }
                {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter == "active") &&
                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={openMoveForm}
                            >
                                Move All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openMoveForm}
                                            >
                                                Move ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openMoveForm}
                                            >
                                                Move
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", color: "#090d3a", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #090d3a" }}
                                    >
                                        Move
                                        <span></span>
                                    </button>}
                            </span>
                        }
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={rejectCandidates}
                            >
                                Reject All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={rejectCandidates}
                                            >
                                                Reject ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={rejectCandidates}
                                            >
                                                Reject
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", color: "#ff0000", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #ff0000" }}
                                    >
                                        Reject
                                        <span></span>
                                    </button>}
                            </span>
                        }
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={openEmailForm}
                            >
                                Email All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openEmailForm}
                                            >
                                                Email ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openEmailForm}
                                            >
                                                Email
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", color: "#006dff", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #006dff" }}
                                    >
                                        Email
                                        <span></span>
                                    </button>}
                            </span>
                        }
                    </div>
                }
                <MoveForm
                    showMoveForm={showMoveForm}
                    hideMoveForm={hideMoveForm}
                    currentStage={currentStage}
                    setCurrentStage={setCurrentStage}
                    nextStage={nextStage}
                    setNextStage={setNextStage}
                    moveCandidates={moveCandidates}
                />
                {/*  move success alert prompt */}
                <AlertModal show={showMoveSuccessAlert} onHide={hideSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Move to next stage Success</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have moved the candidates to selected stage successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                {/*  reject success alert prompt */}
                <AlertModal show={showRejectSuccessAlert} onHide={hideRejectSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Candidate Rejected!</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have rejected the candidates successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={hideRejectSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                <MyModal80 show={showEmailSending} onHide={hideEmailSending}>
                    <EmailSending
                        hideEmailSending={hideEmailSending}
                        employerProfileDetail={props.employerProfileDetail}
                        user={props.user}
                        profile={props.profile}
                        email={email_list}
                        jobid={props.jobsId}
                        first_name={email_list}
                        last_name={email_list}
                        handleStatusChange2={null}
                    />
                </MyModal80>
            </div>
        </div>
    )
}

const CandidateCard = (props) => {
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);
    const [current, setCurrent] = useState(props.current);
    const [category1, setCategory1] = useState({ value: null, label: null });
    const start = 0;
    const end = props.applicants.length - 1;

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#fff', border: "none" }),
        singleValue: styles => ({
            ...styles,
            color: '#979797',
            fontSize: '0.8rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    }

    const options1 = [
        { value: "TBD", label: "TBD" },
        { value: "Offer to be Made", label: "Offer to be Made" },
        { value: "Offer Extended", label: "Offer Extended" },
        { value: "In Negotiation", label: "In Negotiation" },
        { value: "Declined", label: "Declined" },
    ];

    function onFilter1(category1) {
        if (props.livcat != category1) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let data = {
                "candidate_id": props.applicant.id,
                "category": category1.value
            };
            axios.post("questions/update-shortlist-candidate-offer-status", data, config).then((res) => {
                console.log(res.data);
            }).catch(error => {
                console.log(error)
            });
            setCategory1(category1);
            alert2();
        }
    }

    // useEffect(() => {
    //     if (sessionStorage.getItem("showShortListModal" + props.current) === "true") {
    //         setShow(true);
    //     }
    // }, [setShow]);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email, "Short List");
        //sessionStorage.setItem(("showShortListModal" + props.current), "true");
        setShow(true);
    };

    function getReviewPageData(index) {
        props.getApplicantsVideos(props.applicants[index].email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicants[index].email);
        props.getResumeURL(props.applicant.positions_id, props.applicants[index]?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicants[index].email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email, props.user.email, "Short List");
        setCurrent(index);
    }

    function getReviewPageData1(index) {
        props.getApplicantsVideos(props.applicants[index].email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicants[index].email);
        props.getResumeURL(props.applicant.positions_id, props.applicants[index]?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicants[index].email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email, props.user.email, "Short List");
    }

    function getNextResult(curIndex) {
        getReviewPageData1(curIndex + 1);
    };

    function viewNextResult(curIndex) {
        getReviewPageData(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        getReviewPageData(curIndex - 1);
    };


    const refresh = () => {
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant?.apply_candidate_id);
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
    function hideModal() {
        //sessionStorage.removeItem("showShortListModal" + props.current);
        setShow(false);
        setCurrent(props.current);
        props.getPostedJobs(userId, page, "Short List", "", props.category3.value, "", props.category5.value, props.jobsId);
    }
    return (
        <React.Fragment>
            <div>
                <hr
                    style={{
                        border: props.current == 0 ? "1px solid #E8EDFC" : "1px solid #E5E5E5",
                        boxShadow: props.current == 0 ? "0px 1px 2px #E8EDFC" : "",
                    }}
                />
            </div>
            <div style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600" }} className="container-fluid row h-100">
                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                    <div className="interview-txt9 mr-3">
                        <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" onClick={props.CheckListCheckbox} />
                    </div>
                }
                <div className="col-2 title-button2" onClick={() => { viewResult(); }} style={{ cursor: "pointer" }}>
                    {props.applicant.name.length > 18 ? props.applicant.name.substring(0, 15) + "..." : props.applicant.name}
                </div>

                {/* <div className="col-3">
                    {renderStars(props.stars)}
                </div> */}
                <div className="col-2">
                    {renderResume(props.resume_list)}
                </div>
                {(props.reviewerStageLength > 0) &&
                    <div className="col-3">
                        {props.applicant?.reviewer_review_status ?
                            <p style={{ fontWeight: "600", color: "#4A6F8A" }}>Reviewed</p> :
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>Pending</p>
                        }
                    </div>
                }
                {(props.reviewerStageLength == 0) &&
                    <div className="col-2">
                        {props.applicant?.num_votes > 0 &&
                            <p style={{ fontWeight: "600", color: "#090D3A", paddingLeft: "1.4rem" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</p>
                        }
                    </div>
                }
                {(props.reviewerStageLength == 0) &&
                    <div className="col-3" style={{ marginLeft: "1.5rem" }}>
                        <Select value={category1.value != null ? category1 : { value: props.applicant.shortcat, label: props.applicant.shortcat }} onChange={onFilter1} options={options1} className="select-category5" styles={customStyles} isSearchable={false} />
                    </div>}
                {!props.profile.is_external_reviewer && !props.profile.is_subreviwer &&
                    <div className="col-2">
                        <a
                            target="_blank"
                            href={mailTo}
                            className="interview-txt9"
                            style={{ color: "#006dff", border: "none", background: "white", display: "inline-block", fontSize: "0.9375rem" }}
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
                onHide={hideModal}
                positionId={props.applicant.positions_id}
                resumeURL={props.resumeURL}
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                updateCommentStatus={props.updateCommentStatus}
                profile={props.profile}
                subreviewerUpdateComment={props.subreviewerUpdateComment}
                applicants={props.applicants}
                current={current}
                setCurrent={setCurrent}
                start={start}
                end={end}
                filter={"active"}
                getPostedJobs={props.getPostedJobs}
                getAllJobs={props.getAllJobs}
                currentStage={"Short List"}
                reviewer_type={props.reviewer_type}
                jobsId={props.jobsId}
                selectedPage={props.selectedPage}
                viewPrevResult={viewPrevResult}
                viewNextResult={viewNextResult}
                getNextResult={getNextResult}
                employerProfileDetail={props.employerProfileDetail}
                category3={props.category3}
                category5={props.category5}
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

function alert2() {
    confirmAlert({
        title: "Offer Status",
        message: "Updated successfully!",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};