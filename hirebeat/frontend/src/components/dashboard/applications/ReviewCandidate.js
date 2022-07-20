import React, { useState } from 'react';
import { IconText } from "../DashboardComponents";
import { MyModal80, MyModalUpgrade, AlertModal } from "./../DashboardComponents";
import { ResumeEvaJobs } from "./ResumeEvaJobs";
import EmbedQuestionForm from "./../jobBoard/EmbedQuestionForm"
import ApplicationVideo from "../videos/ApplicationVideo";
import ReviewNote from "./ReviewNote";
import EmailSending from "./EmailSending";
import ViewEmailMessage from "./ViewEmailMessage";
import ReviewApplicationTab from "../jobStages/interviewComponents/ReviewApplicationTab";
import BasicInfoEdition from "./BasicInfoEdition";
import { connect } from "react-redux";
import { addReviewNote, getReviewNote } from "../../../redux/actions/question_actions";
import axios from "axios";

const ReviewCandidate = (props) => {
    const [showEva, setShowEva] = useState(false);
    const [showEmbedQForm, setShowEmbedQForm] = useState(false);
    const [showMoveForm, setShowMoveForm] = useState(false);
    const [nextStage, setNextStage] = useState("");
    const [currentStage, setCurrentStage] = useState(props.applicants[props.current].current_stage);
    const [viewResume, setViewResume] = useState(props.applicants[props.current].answers?.length > 0 ? false : true);
    const [viewVideo, setviewVideo] = useState(false);
    const [viewNotes, setViewNotes] = useState(false);
    const [viewEmail, setViewEmail] = useState(false);
    const [viewApplication, setViewApplication] = useState(props.applicants[props.current].answers?.length > 0 ? true : false);
    const [showMoveSuccessAlert, setShowMoveSuccessAlert] = useState(false);
    const [showRejectSuccessAlert, setShowRejectSuccessAlert] = useState(false);
    const [showEmailSending, setShowEmailSending] = useState(false);
    const [isReject, setIsReject] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const [comment, setComment] = useState("");

    function setViewResumes() {
        setViewResume(true);
        setviewVideo(false);
        setViewNotes(false);
        setViewApplication(false);
        setViewEmail(false);
    }

    function setViewVideos() {
        setViewResume(false);
        setviewVideo(true);
        setViewNotes(false);
        setViewApplication(false);
        setViewEmail(false);
    }

    function setViewNotess() {
        setViewResume(false);
        setviewVideo(false);
        setViewNotes(true);
        setViewApplication(false);
        setViewEmail(false);
    }

    function setViewApplications() {
        setViewResume(false);
        setviewVideo(false);
        setViewNotes(false);
        setViewApplication(true);
        setViewEmail(false);
    }

    function setViewEmails() {
        setViewResume(false);
        setviewVideo(false);
        setViewNotes(false);
        setViewApplication(false);
        setViewEmail(true);
    }

    function openMoveForm() {
        setShowMoveForm(true);
    }

    function moveCandidates() {
        let candidateCount = 1;
        let positionId = props.curJob.job_details.positions_id;
        let jobId = props.curJob.job_details.id;
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        emails.push(props.email);
        names.push(props.first_name + " " + props.last_name);
        invitedCandidates.push(props.candidateId);
        if (nextStage != "") {
            let data = {
                "positionId": props.curJob.job_details.positions_id,
                "candidates": invitedCandidates,
                "nextStage": nextStage,
                "is_reject": false,
            }
            let meta = {
                position_id: positionId,
                job_id: jobId,
                emails: emails,
                names: names,
                "candidates": invitedCandidates,
                "nextStage": nextStage,
            }
            if (props.applicant.current_stage == "Resume Review" || props.applicant.current_stage == "Unqualified") {
                props.moveCandidateToInterview(meta);
            }
            props.updateInviteStatus(data);
            setShowMoveForm(false);
            setViewResumes();
            // update
            let page = props.selectedPage + 1;
            let isSortByScore = props.isSortByScore || ""
            setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, isSortByScore); }, 300);
            let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
            if (!noShowAgainMove) {
                enableSuccessAlert();
            }
            // props.onHide();
            //Segment
            switch (nextStage) {
                case "Resume Review":
                    return (window?.analytics?.track("Recruitment - Move to Resume Review", {
                        eventTime: Date().toLocaleString(),
                        jobID: jobId,
                        employerID: props.user.id
                    }));
                case "Video Interview":
                    return (window?.analytics?.track("Recruitment - Move to Video Interview", {
                        eventTime: Date().toLocaleString(),
                        jobID: jobId,
                        employerID: props.user.id
                    }));
                case "Live Interview":
                    return (window?.analytics?.track("Recruitment - Move to Live Interview", {
                        eventTime: Date().toLocaleString(),
                        jobID: jobId,
                        employerID: props.user.id
                    }));
                case "Short List":
                    return (window?.analytics?.track("Recruitment - Move to Short List", {
                        eventTime: Date().toLocaleString(),
                        jobID: jobId,
                        employerID: props.user.id
                    }));
            }
        } else {
            alert("Please select a stage to move.");
        }
    };

    function rejectCandidates() {
        const invitedCandidates = [];
        invitedCandidates.push(props.candidateId);
        let data = {
            "positionId": props.curJob.job_details.positions_id,
            "candidates": invitedCandidates,
            "nextStage": nextStage,
            "is_reject": true,
        }
        props.updateInviteStatus(data);
        setViewResumes();
        // update
        let page = props.selectedPage + 1;
        let isSortByScore = props.isSortByScore || "";
        setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, isSortByScore); }, 300);
        let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
        if (props.applicant.is_active) {
            if (!noShowAgainReject) {
                enableRejectSuccessAlert("Rejected");
            }
        } else {
            if (!noShowAgainReject) {
                enableRejectSuccessAlert("Unrejected");
            }
        }
        // props.onHide();
    };

    //    function inviteCandidates() {
    //        if (props.curJob.questions.length == 0 && props.tempQuestion.length == 0) {
    //            setShowEmbedQForm(true);
    //        }
    //        else {
    //            let candidateCount = 1;
    //            let companyName = props.curJob.job_details.company_name;
    //            let jobTitle = props.curJob.job_details.job_title;
    //            let positionId = props.curJob.job_details.positions_id;
    //            // collect input name and email
    //            const emails = [];
    //            const names = [];
    //            const invitedCandidates = [];
    //            emails.push(props.email);
    //            names.push(props.first_name+" "+props.last_name);
    //            invitedCandidates.push(props.candidateId);
    //            props.setStatus(true);
    //            let urls = [];
    //            for (let i = 0; i < emails.length; i++) {
    //                // make sure urls have the same size of emails and names
    //                let url = "";
    //                if (emails[i] != "" && names[i] != "") {
    //                    //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                    let prefix = "https://app.hirebeat.co/candidate-login?";  // online
    //                    let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                    let encode = window.btoa(params);
    //                    url = prefix + encode;
    //                }
    //                urls.push(url);
    //            }
    //            let meta = {
    //                company_name: companyName,
    //                job_title: jobTitle,
    //                position_id: positionId,
    //                emails: emails,
    //                names: names,
    //                expire: 14,
    //                urls: urls,
    //            }
    //            if(candidateCount > (props.profile.candidate_limit)){
    //                alert('Upgrade Now! You can only add ' +parseInt(props.profile.candidate_limit)+ ' more candidates for this position!');
    //            }else{
    //                // save data to db
    //                props.addInterviews(meta);
    //                let data = {
    //                    "candidates": invitedCandidates,
    //                    "isInvited": 1,
    //                }
    //                props.updateInviteStatus(data);
    //                // update
    //                setTimeout(() => {props.getAllJobs(props.user.id); props.getPJobs()}, 300);
    //                alert("Send Invitation Success!");
    //            }
    //        }
    //    };

    function nextOrPreUpdate() {
        let page = props.selectedPage + 1;
        let isSortByScore = props.isSortByScore || "";
        props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, isSortByScore);
        //        sessionStorage.vwoveItem("current");
    }

    function updateIsViewed(index) {
        let applyIds = [];
        applyIds.push(props.applicants[index].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        let page = props.selectedPage + 1;
        let isSortByScore = props.isSortByScore || "";
        setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, isSortByScore); }, 300);
    }

    function showResumeEva() {
        if (props.profile.membership == "Premium") {
            setShowEva(true);
        } else {
            alert("Upgrade to unlock Resume Evaluation.");
        }
    }

    const renderResume = (resumes) => {
        if (resumes == "-1") {
            return;
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {(resumes >= 76 && resumes <= 100) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="img" />}
                    {(resumes >= 51 && resumes <= 75) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="img" />}
                    {(resumes >= 26 && resumes <= 50) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="img" />}
                    {(resumes >= 0 && resumes <= 25) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="img" />}
                </div>
            </div>
        )
    }

    function jobClosedAlert() {
        alert("Current job is closed, you can't make any change");
    }

    function updateEvaluation(evaluation) {
        // identify employer or reviewer
        let reviewer_type = "";
        if (props.curJob?.reviewer_type == "subr") {
            reviewer_type = "sub_reviewer";
        }
        else if (props.curJob?.reviewer_type == "extr") {
            reviewer_type = "external_reviewer";
        }
        let data = {
            evaluation: evaluation,
            applicant_email: props.applicant.email,
            position_id: props.curJob.job_details.positions_id,
            reviewer_type: reviewer_type,
            reviewer_email: props.user.email,
            current_stage: props.currentStage,
        }
        props.addOrUpdateReviewerEvaluation(data);
        setTimeout(() => {
            props.getReviewerEvaluation(props.curJob.job_details.positions_id, props.applicant.email);
            props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, props.applicant.email, props.user.email, props.currentStage);
        }, 300);
    }

    const updateStatus = (status) => {
        let data = {
            "email": props.applicant.email,
            "positionId": props.curJob.job_details.positions_id,
            "status": status,
            "userId": props.user.id
        };
        props.updateCommentStatus(data);
        setTimeout(() => { props.getPJobs() }, 200);
    }

    const hideSuccessAlert = () => {
        handleAlertChoice();
        setShowMoveSuccessAlert(false);
    }

    const enableSuccessAlert = () => {
        setShowMoveSuccessAlert(true);
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

    const hideEmailSending = () => {
        setShowEmailSending(false);
    }

    const enableRejectSuccessAlert = (type) => {
        if (type == "Rejected") {
            setIsReject(true);
        }
        else if (type == "Unrejected") {
            setIsReject(false);
        }
        setShowRejectSuccessAlert(true);
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

    const updateReview = () => {
        if (props.filter == "closed") {
            return alert("Current job is closed, you can't make any change");
        }
        if (comment == "" || comment == null) {
            return alert("Comments Empty!");
        }
        // identify employer or reviewer
        let reviewer_type = "";
        if (props.curJob?.reviewer_type == "subr") {
            reviewer_type = "sub_reviewer";
        }
        else if (props.curJob?.reviewer_type == "extr") {
            reviewer_type = "external_reviewer";
        }
        let data = {
            reviewer: (((props.employerProfileDetail.f_name + props.employerProfileDetail.l_name)?.length > 0) ? (props.employerProfileDetail.f_name + " " + props.employerProfileDetail.l_name) : (props.user.username)),
            comment: comment,
            applicant_email: props.applicant.email,
            position_id: props.curJob.job_details.positions_id,
            reviewer_type: reviewer_type,
            reviewer_email: props.user.email,
            current_stage: props.currentStage,
        }
        props.addReviewNote(data);
        setTimeout(() => { props.getReviewNote(props.curJob.job_details.positions_id, props.applicant.email) }, 300);
        setComment("");
    }

    return (
        <div className="container-fluid ml-5 pb-5" style={{ width: '92%' }}>
            <div style={{ marginBottom: "30px" }}><h3 className="job-title-hover-orange" onClick={props.onHide} style={{ cursor: "pointer" }}><b><i className="bx-fw bx bx-chevron-left" style={{ display: "inherit" }}></i><span className="ml-2" style={{ verticalAlign: "middle" }}>{props.currentStage}</span></b></h3></div>
            <div className="row" style={{ display: "flex" }}>
                <div className="col-3 pl-3 mt-3 pr-2">
                    {!isEdit ?
                        <div className="resume-box p-4" style={{ background: "white", borderRadius: "3px", width: "100%", minHeight: "20vh" }}>
                            <div className="row mb-3" style={{ marginBottom: "2%" }}>
                                <div className="col d-flex align-items-center">
                                    <h2
                                        style={{
                                            fontWeight: "600",
                                            marginRight: "0.8vw",
                                            wordWrap: "break-word",
                                            wordBreak: "break-word",
                                            color: "#090D3A",
                                            width: "100%",
                                            fontSize: "1.5vw"
                                        }}
                                    >
                                        {props.first_name + " " + props.last_name}
                                        <span style={{ float: "right" }}><i className="bx bx-edit-alt" style={{ cursor: "pointer" }} onClick={() => setIsEdit(true)}></i></span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row mb-2" style={{ marginTop: "1%" }}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                        iconName={"bx bx-phone bx-sm"}
                                        textDisplayed={props.phone}
                                        textSize={"0.9vw"}
                                        textColor={"#0B3861"}
                                        iconMargin={"3px"}
                                    />
                                </div>
                            </div>
                            <div className="row mb-2" style={{ marginTop: "1%" }}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                        iconName={"bx bx-envelope bx-sm"}
                                        textDisplayed={props.email}
                                        textSize={"0.9vw"}
                                        textColor={"#0B3861"}
                                        iconMargin={"5px"}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "1%" }}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                        iconName={"bx bx-location-plus bx-sm"}
                                        textDisplayed={props.location}
                                        textSize={"0.9vw"}
                                        textColor={"#0B3861"}
                                        iconMargin={"3px"}
                                    />
                                </div>
                            </div>
                            {props.linkedin != null && props.linkedin != "" ?
                                <div style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                                    <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#006dff", marginRight: "3px" }}></i>
                                    <a style={{ fontSize: "0.9vw", color: "#006dff", fontWeight: "500" }} href={props.linkedin} target="_blank" rel="noreferrer">Go To LinkedIn Page</a>
                                </div> :
                                <div style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                                    <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#979797", marginRight: "3px" }}></i>
                                    <p style={{ fontSize: "0.9vw", color: "#979797", fontWeight: "500" }}>LinkedIn not available</p>
                                </div>
                            }
                        </div> :
                        <BasicInfoEdition
                            first_name={props.first_name}
                            last_name={props.last_name}
                            phone={props.phone}
                            email={props.email}
                            location={props.location}
                            linkedin={props.linkedin}
                            updateApplicantBasicInfo={props.updateApplicantBasicInfo}
                            setIsEdit={setIsEdit}
                            jobId={props.curJob.job_details.id}
                            selectedPage={props.selectedPage}
                            selectedCurrentStage={props.selectedCurrentStage}
                            selectedStatus={props.selectedStatus}
                            getAllJobs={props.getAllJobs}
                            isSortByScore={props.isSortByScore}
                            user={props.user}
                        />
                    }
                    {(props.curJob.job_details.gh_job_id == null || props.curJob.job_details.gh_job_id == "") &&
                        <div className="resume-box mt-4 p-4" style={{ background: "white", borderRadius: "3px", width: "100%", minHeight: "30vh", position: "relative" }}>
                            {/* <h2
                            style={{
                                fontWeight: "600",
                                marginRight: "0.8vw",
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                                color: "#090D3A",
                                fontSize: "1.5vw",
                            }}
                        >
                            Evaluation Scale
                        </h2> */}
                            <div className="mt-3 px-4" style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
                                {renderResume(props.applicant.result_rate)}
                            </div>
                            {(props.applicant.result_rate != "-1") &&
                                <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                    <button
                                        onClick={() => { setTimeout(() => { showResumeEva() }, 200) }}
                                        className="interview-txt9 mt-3 ml-3"
                                        style={{ color: "#006dff", border: "none", background: "white" }}
                                    >
                                        <i className="bx bx-arrow-to-right interview-txt9" style={{ color: "#006dff" }}></i> Resume Evaluation
                                    </button>
                                </div>
                            }
                            {(props.curJob?.reviewer_type != "subr") &&
                                <div style={{ paddingBottom: "2vw" }}>
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}><p style={{ color: "#090d3a", fontSize: "1vw" }}>Current Stage: {props.applicant.current_stage}</p></div>
                                    {props.applicant.is_active &&
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button onClick={props.filter == "active" ? openMoveForm : jobClosedAlert} className="default-btn1" style={{ paddingLeft: "25px", width: "13vw" }}>
                                                <i class='bx-fw bx bx-move-vertical'></i>Move Stage
                                            </button>
                                        </div>}
                                    {props.applicant.is_active ?
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                onClick={props.filter == "active" ? rejectCandidates : jobClosedAlert}
                                                className="default-btn3"
                                                style={{ paddingLeft: "25px", width: "13vw" }}
                                            >
                                                <i class='bx-fw bx bxs-x-square' style={{ color: "#090D3A" }}></i> Reject
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn1"
                                                style={{ paddingLeft: "25px", width: "13vw", backgroundColor: "#FF0000", color: "#ffffff" }}
                                            >
                                                <i class='bx-fw bx bxs-x-square' style={{ color: "#ffffff" }}></i> Rejected
                                            </button>
                                        </div>
                                    }
                                    {!props.applicant.is_active &&
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                onClick={props.filter == "active" ? rejectCandidates : jobClosedAlert}
                                                className="default-btn1"
                                                style={{ paddingLeft: "25px", width: "13vw", background: "#fff", color: "#090D3A", textDecoration: "underline" }}
                                            >
                                                Unreject
                                            </button>
                                        </div>
                                    }
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                        <button
                                            onClick={() => setShowEmailSending(true)}
                                            className="default-btn4"
                                            style={{ paddingLeft: "25px", width: "13vw" }}
                                        >
                                            <i class='bx-fw bx bx-envelope' style={{ color: "#090d3a" }}></i> Email
                                        </button>
                                    </div>
                                </div>}
                            {(props.curJob?.reviewer_type == "subr") &&
                                <div>
                                    {props.curEvaluation.evaluation == 1 ?
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn btn-success ml-2"
                                                style={{ width: "9vw", fontSize: "0.8vw", display: "flex", paddingLeft: "25px", background: "#13C4A1" }}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-white.png" style={{ width: "1.25vw", marginRight: "0.5vw" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#ffffff" }}>Qualified</p>
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#ffffff", width: "9vw", fontSize: "0.8vw", display: "flex", paddingLeft: "25px", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }}
                                                onClick={props.filter == "active" ? () => { updateEvaluation(1) } : jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good.png" style={{ width: "1.25vw", marginRight: "0.5vw" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#13C4A1" }}>Qualified</p>
                                            </button>
                                        </div>
                                    }
                                    {props.curEvaluation.evaluation == 2 ?
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn btn-danger ml-2"
                                                style={{ width: "9vw", fontSize: "0.8vw", display: "flex", paddingLeft: "25px", background: "#E42424" }}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-white.png" style={{ width: "1.25vw", marginRight: "0.5vw", paddingTop: "2%" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#ffffff" }}>Unqualified</p>
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#ffffff", width: "9vw", fontSize: "0.8vw", display: "flex", paddingLeft: "25px", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }}
                                                onClick={props.filter == "active" ? () => { updateEvaluation(2) } : jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad.png" style={{ width: "1.25vw", marginRight: "0.5vw", paddingTop: "2%" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#E42424" }}>Unqualified</p>
                                            </button>
                                        </div>
                                    }
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                        <button
                                            onClick={() => setShowEmailSending(true)}
                                            className="default-btn4"
                                            style={{ paddingLeft: "25px", width: "13vw" }}
                                        >
                                            <i class='bx-fw bx bx-envelope' style={{ color: "#090d3a" }}></i> Email
                                        </button>
                                    </div>
                                </div>
                            }
                            <div>
                                {props.currentStage != "All Candidates" &&
                                    <div>
                                        <div className="row mt-4 d-flex justify-content-end">
                                            <textarea
                                                className="note-border"
                                                style={{ height: "10vw", width: "100%", marginLeft: "1rem", marginRight: "1rem", fontSize: "0.9vw" }}
                                                type="text"
                                                value={comment}
                                                placeholder="Write your comment here"
                                                onChange={(e) => { setComment(e.target.value) }}
                                            />
                                            <button
                                                className="default-btn d-flex"
                                                onClick={() => updateReview()}
                                                style={{ fontSize: "1vw", marginTop: "0.5rem", marginRight: "1rem", paddingLeft: "25px", backgroundColor: "#ff6b00" }}
                                            >Post
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>}
                </div>
                <div className="col-9 resume-box mt-3 p-4" style={{ background: "white", borderRadius: "3px", width: "73%" }}>
                    <div>
                        {props.applicants[props.current].answers?.length > 0 &&
                            <h2
                                className={viewApplication ? "head-btn-selected" : "head-btn-unselected"}
                                onClick={() => { setViewApplications() }}
                            >
                                Application
                            </h2>
                        }
                        <h2
                            className={viewResume ? "head-btn-selected" : "head-btn-unselected"}
                            onClick={() => { setViewResumes() }}
                        >
                            Resume
                        </h2>
                        {(props.video_array?.length > 0) &&
                            <h2
                                className={viewVideo ? "head-btn-selected" : "head-btn-unselected"}
                                onClick={() => { setViewVideos() }}
                            >
                                Video Interview
                            </h2>
                        }
                        <h2
                            className={viewNotes ? "head-btn-selected" : "head-btn-unselected"}
                            onClick={() => { setViewNotess() }}
                        >
                            Evaluation Notes
                        </h2>
                        <h2
                            className={viewEmail ? "head-btn-selected" : "head-btn-unselected"}
                            onClick={() => { setViewEmails() }}
                        >
                            Message
                        </h2>
                    </div>
                    {viewApplication &&
                        <ReviewApplicationTab
                            questions={props.applicants[props.current].questions}
                            answers={props.applicants[props.current].answers}
                            qualifications={props.applicants[props.current].qualifications}
                            mustHaves={props.applicants[props.current].must_haves}
                        />
                    }
                    {viewResume && (
                        ((props.resume_url != "") && (props.resume_url != null)) &&
                        <div class="iframe-container" style={{ paddingTop: "60%" }}>
                            <iframe className="responsive-iframe" src={props.resume_url} />
                        </div>
                    )}
                    {viewVideo &&
                        <ApplicationVideo
                            int_ques={props.int_ques}
                            positionId={props.curJob.job_details.positions_id}
                            quesiton_array={props.quesiton_array}
                            video_array={props.video_array}
                            stars={props.stars}
                            comments={props.comments}
                            pk={props.pk}
                            refresh={props.refresh}
                            updateStatus={updateStatus}
                            commentStatus={props.applicant.comment_status}
                            profile={props.profile}
                            subreviewerUpdateComment={props.subreviewerUpdateComment}
                            current={props.current}
                            setCurrent={props.setCurrent}
                            start={0}
                            end={props.applicants?.length - 1}
                            viewPrevResult={props.viewPrevResult}
                            viewNextResult={props.viewNextResult}
                            hasSwitch={true}
                            recordedVideoCount={props.applicants[props.current].video_count}
                            transcripts={props.transcripts}
                            filter={props.filter}
                        />
                    }
                    {viewNotes &&
                        <ReviewNote
                            reviews={props.reviews}
                            positionId={props.curJob.job_details.positions_id}
                            applicantEmail={props.applicant.email}
                            reviewer={
                                ((props.employerProfileDetail.f_name + props.employerProfileDetail.l_name)?.length > 0) ?
                                    (props.employerProfileDetail.f_name + " " + props.employerProfileDetail.l_name) :
                                    (props.user.username)
                            }
                            profile={props.profile}
                            reviewerEmail={props.user.email}
                            evaluations={props.evaluations}
                            filter={props.filter}
                            currentStage={props.currentStage}
                            reviewerType={props.curJob?.reviewer_type}
                            user={props.user}
                        />
                    }
                    {viewEmail &&
                        <ViewEmailMessage
                            applicantEmail={props.applicant.email}
                            employerProfileDetail={props.employerProfileDetail}
                            jobid={props.curJob.job_details.id}
                            first_name={props.first_name}
                            last_name={props.last_name}
                        />
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-9" style={{ marginTop: "1.5vw" }}>
                    <div style={{ textAlign: "center" }}>
                        <button
                            className={props.current == 0 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == 0 ? true : false}
                            onClick={() => { setViewResumes(); props.viewPrevResult(props.current); nextOrPreUpdate(); updateIsViewed(props.current - 1); setTimeout(() => { props.setCurrent(props.current - 1); }, 200) }}
                        >
                            &lt; Prev
                        </button>
                        <button
                            className={props.current == props.applicants.length - 1 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == props.applicants.length - 1 ? true : false}
                            onClick={() => { setViewResumes(); props.viewNextResult(props.current); nextOrPreUpdate(); updateIsViewed(props.current + 1); setTimeout(() => { props.setCurrent(props.current + 1); }, 200) }}
                            style={{ marginLeft: "2vw" }}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
            <MyModalUpgrade
                show={showMoveForm}
                onHide={() => { setShowMoveForm(false) }}
            >
                <div className="container chart-bg1" style={{ padding: "2vw" }}>
                    <h3 style={{ fontSize: "1.25vw", color: "#090d3a", fontWeight: "600", textAlign: "center" }}>Move to Another Stage</h3>
                    {currentStage == "Resume Review" ?
                        <div className="row d-flex justify-content-center mt-5">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Resume Review</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-5">
                            <button onClick={() => { setNextStage("Resume Review"); setCurrentStage("Resume Review") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Resume Review</button>
                        </div>
                    }
                    {currentStage == "Video Interview" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Video Interview</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Video Interview"); setCurrentStage("Video Interview") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Video Interview</button>
                        </div>
                    }
                    {currentStage == "Live Interview" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Live Interview</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Live Interview"); setCurrentStage("Live Interview") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Live Interview</button>
                        </div>
                    }
                    {currentStage == "Short List" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Shortlist</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Short List"); setCurrentStage("Short List") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Shortlist</button>
                        </div>
                    }
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex justify-content-end">
                            <button onClick={moveCandidates} className="default-btn" style={{ backgroundColor: "#090d3a", paddingLeft: "25px" }}>Confirm</button>
                        </div>
                        <div className="col-6 d-flex justify-content-start">
                            <button onClick={() => { setShowMoveForm(false); setCurrentStage(props.applicants[props.current].current_stage) }} className="default-btn" style={{ backgroundColor: "#979797", paddingLeft: "25px" }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </MyModalUpgrade>
            <MyModal80
                show={showEva}
                onHide={() => { setShowEva(false) }}
            >
                <ResumeEvaJobs interviewResume={props.applicant} />
            </MyModal80>
            <MyModal80
                show={showEmbedQForm}
                onHide={() => setShowEmbedQForm(false)}
            >
                <EmbedQuestionForm
                    email={props.email}
                    first_name={props.first_name}
                    last_name={props.last_name}
                    curJob={props.curJob}
                    tempQuestion={props.tempQuestion}
                    setTempQuestion={props.setTempQuestion}
                    profile={props.profile}
                    addInterviews={props.addInterviews}
                    candidateId={props.candidateId}
                    updateInviteStatus={props.updateInviteStatus}
                    getAllJobs={props.getAllJobs}
                    getPJobs={props.getPJobs}
                    user={props.user}
                    setStatus={props.setStatus}
                    is_invited={props.is_invited}
                    hideEmbedQForm={() => setShowEmbedQForm(false)}
                />
            </MyModal80>
            {/*  move success alert prompt */}
            <AlertModal show={showMoveSuccessAlert} onHide={hideSuccessAlert}>
                <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw" }}>
                    <h3 className="interview-h3">Move to next stage Success</h3>
                    <p className="interview-p" style={{ marginBottom: "0.5vw" }}>You have moved the candidates to selected stage successfully.</p>
                    <div className="interview-p align-center" style={{ marginBottom: "1vw" }}>
                        <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1vw" }} />
                        Don't show again
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button onClick={hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                    </div>
                </div>
            </AlertModal>
            {/*  reject success alert prompt */}
            <AlertModal show={showRejectSuccessAlert} onHide={hideRejectSuccessAlert}>
                <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw" }}>
                    <h3 className="interview-h3">Candidate {isReject ? "Rejected!" : "Unrejected!"}</h3>
                    <p className="interview-p" style={{ marginBottom: "0.5vw" }}>You have {isReject ? "rejected!" : "unrejected!"} the candidates successfully.</p>
                    <div className="interview-p align-center" style={{ marginBottom: "1vw" }}>
                        <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1vw" }} />
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
                    email={props.email}
                    jobid={props.curJob.job_details.id}
                    first_name={props.first_name}
                    last_name={props.last_name}
                    handleStatusChange2={null}
                />
            </MyModal80>
        </div >
    )

};

export default connect(null, { addReviewNote, getReviewNote })(
    ReviewCandidate
);