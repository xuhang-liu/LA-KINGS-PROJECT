import React, { useEffect, useState } from "react";
import { MyModal80 } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
//import { ResumeEva } from "./interviewComponents/ResumeEva";
import {ApplicantList} from "./interviewComponents/ApplicantList";
import 'boxicons';
import Select from 'react-select';
import * as pdfjsLib from 'pdfjs-dist';
import QuestionForm from "./interviewComponents/QuestionForm";
import EditQuestion from "./interviewComponents/EditQuestion"
//import axios from "axios";
import ReactPaginate from 'react-paginate';
import MoveForm from "./interviewComponents/MoveForm";

export function VideoInterview(props){
//    useEffect(() => {
//        props.getPostedJobs(props.user.id, 1, "Video Interview");
//    }, [])

    var curlimit = 0;
    const [showQForm, setShowQForm] = useState(false);
    const [showQEditForm, setShowQEditForm] = useState(false);
    const [expire, setExpire] = useState({ value: 7, label: '7 days' });
    function onFilter1(expire) {
        setExpire(expire);
    }

    function clearInvitationForm() {
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            nameElements[i].value = "";
            emailElements[i].value = "";
        }
    }

    function sendInvitation(e) {
        let candidateCount = 0;
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        // collect input name and email
        const emails = [];
        const names = [];
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            // name
            names.push(nameElements[i].value);
            // email
            let value = emailElements[i].value;
            emails.push(value.toLowerCase());
            if (value != "") {
                candidateCount += 1;
            }
        }
        let meta = {
            position_id: positionId,
            job_id: -1, // -1 means current candidate is manually added
            emails: emails,
            names: names,
        }
        let addLimitLeft = curlimit;
        curlimit += candidateCount;
        if ((props.applicants.length + curlimit) > (props.profile.candidate_limit)) {
            alert('Upgrade Now! You can only add ' + parseInt(props.profile.candidate_limit - props.applicants.length - addLimitLeft) + ' more candidates for this position!');
        } else {
            // save data to db
            props.moveCandidateToInterview(meta);
            // disable webpage refresh
            sendSuccessAlert(nextStage);
            clearInvitationForm();
            e.preventDefault();
        }
    }

    function editQuestions() {
        setShowQEditForm(true);
    }

    // filter selections
    const options = [
        { value: 'Uninvited', label: 'Not Invited' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Withdrawn', label: 'N/A' },
        { value: 'All', label: 'All' },
    ];

    const options1 = [
        { value: 28, label: '28 days' },
        { value: 21, label: '21 days' },
        { value: 14, label: '14 days' },
        { value: 7, label: '7 days' },
    ];

    const [category, setCategory] = useState({ value: 'All', label: 'All' });
    function onFilter(category) {
        setCategory(category);
    }

    const [category2, setCategory2] = useState({ value: 'All', label: 'All' });

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };

    function selectAllCandidates() {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
            }
        }
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

    function inviteSuccessAlert() {
        confirmAlert({
            title: "Send Video Interviews Success",
            message: "You have invited selected candidates for a video interview",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    function sendVideoInterview() {
        let candidateCount = 0;
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        // collect input name and email
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
            if (props.questions.length <= 0) {
                return setShowQForm(true);
            }
            if (candidateCount > (props.profile.candidate_limit)) {
                alert('Upgrade Now! You can only add ' + parseInt(props.profile.candidate_limit) + ' more candidates for this position!');
            } else {
                // generate interview urls and send emails
                let urls = [];
                for (let i = 0; i < emails.length; i++) {
                    // make sure urls have the same size of emails and names
                    let url = "";
                    if (emails[i] != "" && names[i] != "") {
                        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
                        let prefix = "https://hirebeat.co/candidate-login?";  // online
                        let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
                        let encode = window.btoa(params);
                        url = prefix + encode;
                    }
                    urls.push(url);
                }
                let meta = {
                    company_name: companyName,
                    job_title: jobTitle,
                    emails: emails,
                    names: names,
                    expire: 14,
                    urls: urls,
                    candidate_ids: invitedCandidates,
                }
                props.sendInterviews(meta);
                // update
                let page = 1;
                let userId = props.user.id;
                setTimeout(() => {props.getAllJobs(userId, page, "Video Interview"); props.getPostedJobs(userId, page, "Video Interview") }, 300);
                inviteSuccessAlert();
            }
        }
        else {
            noCandidateAlert();
        }
    }

    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        setSelectedPage(selectedPage);
        let page = selectedPage + 1;
        props.getPostedJobs(props.user.id, page, "Video Interview");
        sessionStorage.setItem("videoInterviewPage", String(selectedPage));
    };

    const [showMoveForm, setShowMoveForm] = useState(false);
    const [currentStage, setCurrentStage] = useState("Video Interview");
    const [nextStage, setNextStage] = useState("Live Interview");

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
                names.push(candidate.first_name + " " + candidate.last_name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount += 1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if ((nextStage != "") && (nextStage != "Video Interview")) {
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
                setTimeout(() => {props.getAllJobs(userId, page, "Video Interview"); props.getPostedJobs(userId, page, "Video Interview") }, 300);
                sendSuccessAlert(nextStage);
            } else if (nextStage == "Video Interview") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            noCandidateAlert();
        }
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
                names.push(candidate.first_name + " " + candidate.last_name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
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
            setTimeout(() => { props.getAllJobs(userId, page, "Video Interview"); props.getPostedJobs(userId, page,"Video Interview" ) }, 300);
            rejectSuccessAlert();
        } else {
            noCandidateAlert();
        }
    };

    return (
        <React.Fragment>
                <div className="container-fluid">
                    <div className="container-fluid mt-4 pt-3 pb-3">
                        <div className="row">
                            <div className="col-2 interview-center">
                                <MyModal80
                                    show={showQForm}
                                    onHide={() => { setShowQForm(false) }}
                                >
                                    <QuestionForm jobTitle={props.jobTitle} positionId={props.positionId} hideQForm={() => { props.getPJobs(); setShowQForm(false) }} />
                                </MyModal80>
                                {/* Edit Questions */}
                                <MyModal80
                                    show={showQEditForm}
                                    onHide={() => { setShowQEditForm(false) }}
                                >
                                    <EditQuestion
                                        jobTitle={props.jobTitle}
                                        positionId={props.positionId}
                                        questions={props.questions}
                                        hideQEditForm={() => { setShowQEditForm(false) }}
                                        getPJobs={props.getPJobs}
                                        position={props.position}
                                    />
                                </MyModal80>
                            </div>
                        </div>
                        <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                            <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem" }}>
                                <label style={{position:"absolute", left:"3.5rem", marginTop:"0.25rem"}}><i className="bx bx-search bx-sm"></i></label>
                                <input placeholder={"Search candidate"} className="search-candidate-input" value={keyWords} onChange={onChange} style={{ height: "auto" }}></input>
                            </div>
                            {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter=="active") &&
                                <div className="col-2 interview-txt7 mt-2" style={{textAlign:"right"}}>
                                    <button
                                        type="button"
                                        className="read-more"
                                        style={{ border: "none", backgroundColor: "#ffffff", fontSize: "0.9rem", fontWeight: "500"}}
                                        onClick={editQuestions}
                                    >
                                        <i className="bx bx-info-circle pr-1"></i> Edit Questions
                                    </button>
                                </div>
                            }
                            <div className="col-2 interview-txt7 mt-2" style={{textAlign:"left"}}>
                                <button
                                    onClick={() => { previewEmail(props.jobTitle, props.companyName, expire.value) }}
                                    type="button"
                                    className="read-more"
                                    style={{ border: "none", backgroundColor: "#ffffff", fontSize: "0.9rem", fontWeight: "500"}}
                                >
                                    <i style={{color:"#56a3fa"}} className="bx bx-bullseye pr-1"></i> Preview Email
                                </button>
                            </div>
                            <div className="ml-auto">
                                <ReactPaginate
                                      previousLabel={'< prev'}
                                      nextLabel={'next >'}
                                      breakLabel={'...'}
                                      breakClassName={'break-me'}
                                      pageCount={props.totalPage}
                                      marginPagesDisplayed={1}
                                      pageRangeDisplayed={5}
                                      onPageChange={handlePageClick}
                                      containerClassName={'pagination3'}
                                      activeClassName={'active'}
                                      forcePage={sessionStorage.getItem("videoInterviewPage")?parseInt(sessionStorage.getItem("videoInterviewPage")):selectedPage}
                                />
                            </div>
                        </div>
                        <div className="container-fluid" style={{ marginTop: "2%" }}>
                            <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                    <div style={{ marginLeft: "1rem", display: "flex" }}>
                                        <input id="select-all" type="checkbox" onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                                    </div>
                                }
                                <div className="col-3">
                                    <span className="dot" style={{ background: "none", visibility: "hidden" }}></span>
                                    Name
                                </div>
                                {/*<div className="col-2">Email</div>*/}
                                <div className="col-2">Invited On</div>
                                <div className="col-3">
                                    <div className="row">
                                        <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Video</div>
                                        <Select value={category} onChange={onFilter} options={options} className="select-category" styles={customStyles} />
                                    </div>
                                </div>
                                {/*<div className="col-1">Action</div>*/}
                                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                    <div className="col-1">Reinvite</div>
                                }
                            </div>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <ApplicantList
                                    filter={props.filter}
                                    getPJobs={props.getPJobs}
                                    profile={props.profile}
                                    recordTime={props.recordTime}
                                    interviewResume={props.interviewResume}
                                    getResumeURL={props.getResumeURL}
                                    resumeURL={props.resumeURL}
                                    isClosed={props.isClosed}
                                    keyWords={keyWords}
                                    category={category}
                                    category2={category2}
                                    applicants={props.applicants}
                                    getApplicantsVideos={props.getApplicantsVideos}
                                    getApplicantsInfo={props.getApplicantsInfo}
                                    getRecordStatus={props.getRecordStatus}
                                    dataLoaded={props.dataLoaded}
                                    int_ques={props.int_ques}
                                    id_candidate={props.id_candidate}
                                    username_candidate={props.username_candidate}
                                    email_candidate={props.email_candidate}
                                    phone_candidate={props.phone_candidate}
                                    location_candidate={props.location_candidate}
                                    resendInvitation={props.resendInvitation}
                                    companyName={props.companyName}
                                    jobTitle={props.jobTitle}
                                    updateCommentStatus={props.updateCommentStatus}
                                    updateViewStatus={props.updateViewStatus}
                                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                                    getReviewNote={props.getReviewNote}
                                    getReviewerEvaluation={props.getReviewerEvaluation}
                                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                    user={props.user}
                                    currentStage={currentStage}
                                    getPostedJobs={props.getPostedJobs}
                                    getAllJobs={props.getAllJobs}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end" style={{marginTop: "1rem"}}>
                            <ReactPaginate
                                  previousLabel={'< prev'}
                                  nextLabel={'next >'}
                                  breakLabel={'...'}
                                  breakClassName={'break-me'}
                                  pageCount={props.totalPage}
                                  marginPagesDisplayed={1}
                                  pageRangeDisplayed={5}
                                  onPageChange={handlePageClick}
                                  containerClassName={'pagination3'}
                                  activeClassName={'active'}
                                  forcePage={sessionStorage.getItem("videoInterviewPage")?parseInt(sessionStorage.getItem("videoInterviewPage")):selectedPage}
                            />
                        </div>
                    </div>
                    {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter == "active") &&
                        <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                            <button
                                className="default-btn1 interview-txt6"
                                style={{ paddingLeft: "25px", backgroundColor: "#67A3F3", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={sendVideoInterview}
                            >
                                Invite to Video Interview
                                <span></span>
                            </button>
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={openMoveForm}
                            >
                                Move All
                                <span></span>
                            </button>
                            <button
                                className="default-btn"
                                onClick={rejectCandidates}
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                            >
                                Reject All
                                <span></span>
                            </button>
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
                </div>
        </React.Fragment>
    )
};

function uploadFirst() {
    confirmAlert({
        title: "Upload Resume First",
        message: "Please upload resumes to autofill candidate information",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function uploadSuccess(num, fileNames, autofill) {
    confirmAlert({
        title: "Upload Resume Success",
        message: "You have uploaded " + num + " resumes：" + fileNames,
        buttons: [
            {
                label: 'Auto Fill Now',
                onClick: () => autofill()
            }
        ]
    });
};

function sendSuccessAlert(nextStage) {
    confirmAlert({
        title: "Move Candidates Success",
        message: `You have moved candidates to ${nextStage} stage successfully.`,
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function rejectSuccessAlert() {
    confirmAlert({
        title: "Candidate Rejected!",
        message: "You have rejected the candidates successfully.",
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

function deletSuccessAlert() {
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

function candidateLimitAlert() {
    confirmAlert({
        title: 'Upgrade Now!',
        message: 'Exceed max number of candidates! Upgrade now to invite more candidates',
        buttons: [
            { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
            { label: 'OK' },
        ]
    });
};

function previewEmail(jobTitle, companyName, expire) {
    confirmAlert({
        closeOnEscape: true,
        closeOnClickOutside: true,
        customUI: ({ onClose }) => {
            return (
                <div className="container-fluid" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", width: "50%", overflow: "auto", height: "40rem", backgroundColor: "#ffffff", paddingTop:"1rem"}}>
                    <div onClick={() => { onClose(); }} style={{ float: "right", cursor: "pointer" }}><i className="bx bx-x bx-md"></i></div>
                    <div style={{ marginBottom: "2rem", paddingTop: "2rem" }}>
                        <img src="https://hirebeat-assets.s3.amazonaws.com/HireBeatLogo2.png" alt="HireBeat Logo" style={{ display: "inline-block" }}></img>
                        <h3 style={{ display: "inline-block", color: "#56a3fa", marginLeft: "0.5rem", fontWeight: "600" }}>HireBeat</h3>
                    </div>
                    <div style={{ backgroundColor: "#e8edfc", borderRadius: "5px", padding: "0.6rem" }}>
                        <h2 style={{ marginTop: "2rem", color: "#090d3a", fontWeight: "600" }}>Video Interview with <span style={{ color: "#56a3fa" }}>{companyName}</span> for <span style={{ color: "#56a3fa" }}>{jobTitle}</span></h2>
                        <hr style={{ height: "2px", borderWidth: 0, color: "lightskyblue", backgroundColor: "lightskyblue" }} />
                        <p>Dear Candidate,</p>
                        <p style={{ marginTop: "2rem" }}>Thank you for submitting your application for the <strong style={{ color: "#090d3a" }}>{jobTitle}</strong>. We are pleased to inform you that you have passed our initial resume scanning. To move forward with your application, we would like to invite you to finish our online video interview process powered by HireBeat.</p>
                        <p style={{ marginTop: "2rem" }}>To be considered, please submit your video as soon as possible.</p>
                        <p style={{ color: "#090d3a" }}><strong>Please use the same email when you start the interview procedure.</strong></p>
                        <div className="row ml-3 mt-2">
                            <button className="default-btn" style={{ paddingLeft: "25px" }}>Start Your Interview</button>
                        </div>
                        <p style={{ marginTop: "2rem" }}>If you are unfamiliar with online interview video, we encourage you to use the interview practice function on HireBeat before you officially start the interview.</p>
                        <div className="row ml-3 mt-2">
                            <button className="default-btn1" style={{ paddingLeft: "25px" }}>Interview Practice</button>
                        </div>
                        <p style={{ marginTop: "2rem" }}>If you encounter any technical issues or disruptions during your interview, please email <a href="#">tech@hirebeat.co</a>.</p>
                        <p style={{ marginTop: "2rem" }}>Good luck!</p>
                        <p style={{ marginBottom: "2rem" }}>{companyName}</p>
                    </div>
                    <button onClick={() => { onClose(); }} className="default-btn1" style={{ paddingLeft: "25px", float: "right", marginTop: "2rem", marginBottom: '2rem' }}>Confirm</button>
                </div>
            );
        }
    });
};