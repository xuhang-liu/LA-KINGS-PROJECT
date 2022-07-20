import React, { Component } from 'react';
import { IconText, AlertModal } from "./../../DashboardComponents";
import ApplicationVideo from "./../../videos/ApplicationVideo";
import { connect } from "react-redux";
import { updateInviteStatus, updateApplicantBasicInfo } from "./../../../../redux/actions/job_actions";
import { getPostedJobs, getResumeURL, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, addReviewNote } from "./../../../../redux/actions/question_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReviewNote from "./ReviewNote";
import MoveForm from "./MoveForm";
import ReviewApplicationTab from "./ReviewApplicationTab";
import ViewEmailMessage from "../../applications/ViewEmailMessage";
import { MyModalShare2, MyModal80 } from "../../DashboardComponents";
import EmailSending from "../../applications/EmailSending";
import axios from "axios";
import Select from 'react-select';
import BasicInfoEdition from "./BasicInfoEdition";
import { withRouter } from "react-router-dom";

export class ReviewApplication extends Component {
    constructor(props) {
        super(props);
        const hasExtraQuestions = this.props.applicants[this.props.current]?.questions?.length > 0 ? true : false;
        this.state = {
            viewResume: hasExtraQuestions ? false : true,
            viewVideo: false,
            viewNotes: false,
            viewEmail: false,
            viewApplication: hasExtraQuestions ? true : false,
            showMoveForm: false,
            currentStage: this.props.currentStage,
            nextStage: "",
            showMoveSuccessAlert: false,
            showRejectSuccessAlert: false,
            showEmailSending: false,
            isReject: true,
            showRejectNote: false,
            rejectNotes: null,
            category4: { value: 'Select stage', label: 'Select stage' },
            options4: [],
            showGreenhouseMoveForm: false,
            isEdit: false,
            comment: "",
        }
    }

    onChange1 = (e) => {
        this.setState({ rejectNotes: e.target.value })
    }

    openMoveForm = () => {
        this.setState({ showMoveForm: true });
    }

    hideMoveForm = () => {
        this.setState({ showMoveForm: false });
    }

    setCurrentStage = (currentStage) => {
        this.setState({ currentStage: currentStage });
    }

    setNextStage = (nextStage) => {
        this.setState({ nextStage: nextStage });
    }

    setViewResume = () => {
        this.setState({
            viewResume: true,
            viewVideo: false,
            viewNotes: false,
            viewApplication: false,
            viewEmail: false,
        })
    }

    setViewVideo = () => {
        this.setState({
            viewResume: false,
            viewVideo: true,
            viewNotes: false,
            viewApplication: false,
            viewEmail: false,
        })
    }

    setViewNotes = () => {
        this.setState({
            viewResume: false,
            viewVideo: false,
            viewNotes: true,
            viewApplication: false,
            viewEmail: false,
        })
    }

    setViewApplications = () => {
        this.setState({
            viewResume: false,
            viewVideo: false,
            viewNotes: false,
            viewApplication: true,
            viewEmail: false,
        })
    }

    setViewEmails = () => {
        this.setState({
            viewResume: false,
            viewVideo: false,
            viewNotes: false,
            viewApplication: false,
            viewEmail: true,
        })
    }

    sendSuccessAlert = (nextStage) => {
        alert(`You have moved candidates to ${nextStage} stage successfully.`);
    };

    moveCandidates = () => {
        if (this.state.nextStage == "") {
            return alert("Please select a stage to move.");
        }
        const applicant = this.props.applicants[this.props.current];
        const invitedCandidates = [];
        invitedCandidates.push(applicant.apply_candidate_id);
        let data = {
            "positionId": applicant.positions_id,
            "candidates": invitedCandidates,
            "nextStage": this.state.nextStage,
            "is_reject": false,
        }
        this.props.updateInviteStatus(data);
        this.hideMoveForm();
        this.setViewResume();
        // update
        let page = 1;
        let userId = this.props.user.id;
        if (this.state.currentStage == "Video Interview") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, this.props?.category.value, this.props?.category3.value); this.props.getNextResult(this.props.current) }, 300);
        } else if (this.state.currentStage == "Live Interview") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value, this.props?.category4.value); this.props.getNextResult(this.props.current) }, 300);
        } else if (this.state.currentStage == "Short List") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value, "", this.props?.category5.value); this.props.getNextResult(this.props.current) }, 300);
        } else {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value); this.props.getNextResult(this.props.current) }, 300);
        }
        let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
        if (!noShowAgainMove) {
            this.enableSuccessAlert();
        }
        //Segment
        switch (this.state.nextStage) {
            case "Resume Review":
                return (window?.analytics?.track("Recruitment - Move to Resume Review", {
                    eventTime: Date().toLocaleString(),
                    jobID: this.props.jobsId,
                    employerID: this.props.user.id
                }));
            case "Video Interview":
                return (window?.analytics?.track("Recruitment - Move to Video Interview", {
                    eventTime: Date().toLocaleString(),
                    jobID: this.props.jobsId,
                    employerID: this.props.user.id
                }));
            case "Live Interview":
                return (window?.analytics?.track("Recruitment - Move to Live Interview", {
                    eventTime: Date().toLocaleString(),
                    jobID: this.props.jobsId,
                    employerID: this.props.user.id
                }));
            case "Short List":
                return (window?.analytics?.track("Recruitment - Move to Short List", {
                    eventTime: Date().toLocaleString(),
                    jobID: this.props.jobsId,
                    employerID: this.props.user.id
                }));
        }
        // this.props.hide();
    };

    rejectCandidates = () => {
        const applicant = this.props.applicants[this.props.current];
        const invitedCandidates = [];
        invitedCandidates.push(applicant.apply_candidate_id);
        let data = {
            "positionId": applicant.positions_id,
            "candidates": invitedCandidates,
            "nextStage": this.state.nextStage,
            "is_reject": true,
        }
        this.props.updateInviteStatus(data);
        this.setViewResume();
        // update
        let page = 1;
        let userId = this.props.user.id;
        if (this.state.currentStage == "Video Interview") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, this.props?.category.value, this.props?.category3.value); this.props.getNextResult(this.props.current) }, 300);
        } else if (this.state.currentStage == "Live Interview") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value, this.props?.category4.value); this.props.getNextResult(this.props.current) }, 300);
        } else if (this.state.currentStage == "Short List") {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value, "", this.props?.category5.value); this.props.getNextResult(this.props.current) }, 300);
        } else {
            setTimeout(() => { this.props.getPostedJobs(userId, page, this.state.currentStage, "", this.props?.category3.value); this.props.getNextResult(this.props.current) }, 300);
        }
        let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
        if (applicant.is_active) {
            if (!noShowAgainReject) {
                this.enableRejectSuccessAlert("Rejected");
            }
        } else {
            if (!noShowAgainReject) {
                this.enableRejectSuccessAlert("Unrejected");
            }
        }
    };

    openGreenhouseMoveForm = () => {
        this.setState({ options4: [] });
        axios
            .get(`jobs/greenhouse-get-interview-stages?positionId=${this.props.applicants[this.props.current]?.positions_id}`)
            .then((res) => {
                if (res?.data?.stages?.length > 0) {
                    for (let s = 0; s < res?.data?.stages?.length; s++) {
                        this.setState(prevState => ({
                            options4: [...prevState.options4, { value: res?.data?.stages[s]['id'], label: res?.data?.stages[s]['name'] }]
                        }))
                    }
                    this.setState({ showGreenhouseMoveForm: true });
                } else {
                    alert("No stage available.");
                }
            })
            .catch((err) =>
                console.log(err)
            );
    }

    greenhouseMoveCandidates = () => {
        if (this.state.category4['value'] != "Select stage") {
            const applicant = this.props.applicants[this.props.current];
            const invitedCandidates = [];
            const invitedCandidates1 = [];
            invitedCandidates.push(applicant.apply_candidate_id);
            invitedCandidates1.push(applicant.id);
            let data = {
                "positionId": applicant.positions_id,
                "candidates": invitedCandidates,
                "nextStage": this.state.category4['label'],
                "is_reject": false,
            }
            this.props.updateInviteStatus(data);
            let data1 = {
                "positionId": applicant.positions_id,
                "candidates": invitedCandidates1,
                "is_reject": false,
                "rejectNotes": this.state.rejectNotes,
                "gh_current_stage_id": this.props.gh_current_stage_id,
                "gh_next_stage_id": this.state.category4['value'],
            }
            axios
                .post("jobs/greenhouse-update-invite-status", data1)
                .then((res) => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error)
                });
            this.setState({ showGreenhouseMoveForm: false });
            // update
            let page = 1;
            let userId = this.props.user.id;
            setTimeout(() => { this.props.getAllJobs(userId, page, this.state.currentStage); this.props.getPostedJobs(userId, page, this.state.currentStage); this.props.getNextResult(this.props.current); this.props.hide(); }, 300);
            alert("Candidate Moved!");
        } else {
            alert("Please select a stage!");
        }
    };

    openRejectNoteForm = () => {
        this.setState({ showRejectNote: true });
    }

    greenhouserejectCandidates = (e) => {
        e.preventDefault();
        const applicant = this.props.applicants[this.props.current];
        const invitedCandidates = [];
        const invitedCandidates1 = [];
        invitedCandidates.push(applicant.apply_candidate_id);
        invitedCandidates1.push(applicant.id);
        let data = {
            positionId: applicant.positions_id,
            candidates: invitedCandidates,
            nextStage: this.state.nextStage,
            is_reject: true,
        }
        this.props.updateInviteStatus(data);
        let data1 = {
            "positionId": applicant.positions_id,
            "candidates": invitedCandidates1,
            "is_reject": true,
            "rejectNotes": this.state.rejectNotes,
            "gh_current_stage_id": this.props.gh_current_stage_id,
            "gh_next_stage_id": this.state.category4['value'],
        }
        axios
            .post("jobs/greenhouse-update-invite-status", data1)
            .then((res) => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            });
        // update
        let page = 1;
        let userId = this.props.user.id;
        setTimeout(() => { this.props.getAllJobs(userId, page, this.state.currentStage); this.props.getPostedJobs(userId, page, this.state.currentStage); this.props.getNextResult(this.props.current); this.props.hide(); }, 300);
        this.setState({ showRejectNote: false });
        alert("Candidate Rejected!");
    };

    updateEvaluation = (evaluation) => {
        // identify employer or reviewer
        let reviewer_type = "";
        if (this.props?.reviewer_type == "subr") {
            reviewer_type = "sub_reviewer";
        }
        else if (this.props?.reviewer_type == "extr") {
            reviewer_type = "external_reviewer";
        }
        let data = {
            evaluation: evaluation,
            applicant_email: this.props.applicants[this.props.current].email,
            position_id: this.props.positionId,
            reviewer_type: reviewer_type,
            reviewer_email: this.props.user.email,
            current_stage: this.props.currentStage,
        }
        this.props.addOrUpdateReviewerEvaluation(data);
        setTimeout(() => {
            this.props.getReviewerEvaluation(this.props.positionId, this.props.applicants[this.props.current].email);
            this.props.getCurrentReviewerEvaluation(this.props.positionId, this.props.applicants[this.props.current].email, this.props.user.email, this.props.currentStage);
        }, 300);
    }

    showResumeEva = () => {
        if (this.props.profile.membership == "Premium" || this.props.profile.is_external_reviewer) {
            this.props.setShowEva(true);
        } else {
            this.props.getPJobs();
            this.props.hide();
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'Upgrade to unlock Resume Evaluation.',
                buttons: [
                    { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                    { label: 'OK' },
                ]
            });
        }
    }

    jobClosedAlert = () => {
        alert("Current job is closed, you can't make any change");
    }

    renderResume = (resumeScore) => {
        if (resumeScore == "-1") {
            return;
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {(resumeScore >= 76 && resumeScore <= 100) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="img" />}
                    {(resumeScore >= 51 && resumeScore <= 75) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="img" />}
                    {(resumeScore >= 26 && resumeScore <= 50) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="img" />}
                    {(resumeScore >= 0 && resumeScore <= 25) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="img" />}
                </div>
            </div>
        )
    }

    hideSuccessAlert = () => {
        this.handleAlertChoice();
        this.setState({ showMoveSuccessAlert: false });
    }

    enableSuccessAlert = () => {
        this.setState({ showMoveSuccessAlert: true });
    }

    handleAlertChoice = () => {
        let checkbox = document.getElementById("alertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainMove", "true");
        }
        else {
            localStorage.setItem("noShowAgainMove", "false");
        }
    }

    hideRejectSuccessAlert = () => {
        this.handleRejectAlertChoice();
        this.setState({ showRejectSuccessAlert: false });
    }

    hideEmailSending = () => {
        this.setState({ showEmailSending: false });
    }

    enableRejectSuccessAlert = (type) => {
        if (type == "Rejected") {
            this.setState({ showRejectSuccessAlert: true, isReject: true });
        }
        else if (type == "Unrejected") {
            this.setState({ showRejectSuccessAlert: true, isReject: false });
        }

    }

    handleRejectAlertChoice = () => {
        let checkbox = document.getElementById("rejectAlertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainReject", "true");
        }
        else {
            localStorage.setItem("noShowAgainReject", "false");
        }
    }

    onFilter4 = (category4) => {
        this.setState({ category4: category4 });
    }

    enableEdit = () => {
        this.setState({ isEdit: true });
    }

    disableEdit = () => {
        this.setState({ isEdit: false });
    }

    updateReview = () => {
        if (this.props.filter == "closed") {
            return alert("Current job is closed, you can't make any change");
        }
        if (this.state.comment == "" || this.state.comment == null) {
            return alert("Empty Comments!");
        }
        // identify employer or reviewer
        let reviewer_type = "";
        if (this.props?.reviewer_type == "subr") {
            reviewer_type = "sub_reviewer";
        }
        else if (this.props?.reviewer_type == "extr") {
            reviewer_type = "external_reviewer";
        }
        let data = {
            reviewer: ((this.props.employerProfileDetail.f_name + this.props.employerProfileDetail.l_name)?.length > 0) ?
                (this.props.employerProfileDetail.f_name + " " + this.props.employerProfileDetail.l_name) :
                (this.props.user.username),
            comment: this.state.comment,
            applicant_email: this.props.applicants[this.props.current].email,
            position_id: this.props.positionId,
            reviewer_type: reviewer_type,
            reviewer_email: this.props.user.email,
            current_stage: this.props.currentStage,
        }
        this.setState({ comment: "" });
        this.props.addReviewNote(data);
        setTimeout(() => { this.props.getReviewNote(this.props.positionId, this.props.applicants[this.props.current].email) }, 300);
    }

    render() {
        const recordTime = this.props.recordTime;
        const interviewResume = this.props.interviewResume;
        const candidateInfo = this.props.applicants[this.props.current];
        const resumeScore = Math.max((interviewResume.result_rate) ? (interviewResume.result_rate) : 0, (candidateInfo.result_rate) ? (candidateInfo.result_rate) : 0);
        const customStyles1 = {
            control: styles => ({ ...styles, backgroundColor: '#fff' }),
            singleValue: styles => ({
                ...styles,
                color: '#4A6F8A',
                fontSize: '0.9375vw',
                fontFamily: 'Inter,Segoe UI, sans-serif',
                fontWeight: '500'
            }),
        }
        return (
            <div className="container-fluid ml-5 mb-5" style={{ width: '95%' }}>
                <div style={{ marginBottom: "30px" }}><h3 className="job-title-hover-orange" onClick={this.props.hide} style={{ cursor: "pointer" }}><b><i className="bx-fw bx bx-chevron-left" style={{ display: "inherit" }}></i><span className="ml-2" style={{ verticalAlign: "middle" }}>{this.props.currentStage}</span></b></h3></div>
                <div className="row" style={{ display: "flex" }}>
                    <div className="col-3 pl-3 mt-3 pr-2">
                        {!this.state.isEdit ?
                            <div className="resume-box p-4" style={{ background: "white", borderRadius: "3px", width: "100%", minHeight: "20vh" }}>
                                <div className="row mb-3" style={{ marginBottom: "2%" }}>
                                    <div className="col d-flex align-items-center">
                                        <h4
                                            style={{
                                                fontWeight: "bold",
                                                marginRight: "0.8vw",
                                                wordWrap: "break-word",
                                                wordBreak: "break-word",
                                                width: "100%",
                                                fontSize: "1.5vw"
                                            }}
                                        >
                                            {this.props.applicants[this.props.current].name}
                                            <span style={{ float: "right" }}><i className="bx bx-edit-alt" style={{ cursor: "pointer" }} onClick={this.enableEdit}></i></span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="row mb-2" style={{ marginTop: "1%" }}>
                                    <div className="col d-flex align-items-center">
                                        <IconText
                                            iconName={"bx bx-phone bx-sm"}
                                            textDisplayed={this.props.applicants[this.props.current].phone}
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
                                            textDisplayed={this.props.applicants[this.props.current].email}
                                            textSize={"0.9vw"}
                                            textColor={"#0B3861"}
                                            iconMargin={"5px"}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2" style={{ marginTop: "1%" }}>
                                    <div className="col d-flex align-items-center">
                                        <IconText
                                            iconName={"bx bx-location-plus bx-sm"}
                                            textDisplayed={this.props.applicants[this.props.current].location}
                                            textSize={"0.9vw"}
                                            textColor={"#0B3861"}
                                            iconMargin={"3px"}
                                        />
                                    </div>
                                </div>
                                {this.props.applicants[this.props.current].linkedinurl != null && this.props.applicants[this.props.current].linkedinurl != "" ?
                                    <div style={{ display: "flex", alignItems: "center", marginTop: "1%", paddingBottom: "1%" }}>
                                        <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#006dff", marginRight: "3px" }}></i>
                                        <a style={{ fontSize: "0.9vw", color: "#006dff", fontWeight: "500" }} href={this.props.applicants[this.props.current].linkedinurl} target="_blank" rel="noreferrer">Go To LinkedIn Page</a>
                                    </div> :
                                    <div style={{ display: "flex", alignItems: "center", marginTop: "1%", paddingBottom: "1%" }}>
                                        <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#979797", marginRight: "3px" }}></i>
                                        <p style={{ fontSize: "0.9vw", color: "#979797", fontWeight: "500" }}>LinkedIn not available</p>
                                    </div>
                                }
                            </div> :
                            <BasicInfoEdition
                                name={this.props.applicants[this.props.current].name}
                                phone={this.props.applicants[this.props.current].phone}
                                email={this.props.applicants[this.props.current].email}
                                location={this.props.applicants[this.props.current].location}
                                linkedin={this.props.applicants[this.props.current].linkedinurl}
                                jobId={this.props.jobsId}
                                selectedPage={this.props.selectedPage}
                                selectedCurrentStage={this.props.currentStage}
                                user={this.props.user}
                                getPostedJobs={this.props.getPostedJobs}
                                enableEdit={this.enableEdit}
                                disableEdit={this.disableEdit}
                                updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                            />
                        }
                        <div className="resume-box mt-4 p-4" style={{ background: "white", borderRadius: "3px", width: "100%", position: "relative", minHeight: "36vh" }}>
                            {/* <h2
                                style={{
                                    fontWeight: "600",
                                    marginRight: "0.8vw",
                                    wordWrap: "break-word",
                                    wordBreak: "break-all",
                                    color: "#090D3A",
                                    fontSize: "1.5vw",
                                }}
                            >
                                Evaluation Scale
                            </h2> */}
                            <div>
                                {/*(this.props.recordTime != "" && this.props.recordTime != null) &&
                                    <div className="row mt-5 pl-3">
                                        Recorded on: {this.props.recordTime.substring(0, 10)}
                                    </div>
                                */}
                                <div className="mt-3 px-4" style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
                                    {this.renderResume(resumeScore)}
                                </div>
                                <div className="row" style={{ justifyContent: "center" }}>
                                    {((this.props.interviewResume.result_rate != "-1") || (candidateInfo.result_rate != "-1")) &&
                                        <button
                                            onClick={() => { setTimeout(() => { this.showResumeEva() }, 200) }}
                                            className="interview-txt9 mt-3 ml-3"
                                            style={{ color: "#006dff", border: "none", background: "white" }}
                                        >
                                            <i className="bx bx-arrow-to-right interview-txt9" style={{ color: "#006dff" }}></i> Resume Evaluation
                                        </button>}
                                </div>
                                {/*<div className="row">
                                    {((this.props.resumeURL != "")&&(this.props.resumeURL != null)) &&
                                    <button className="default-btn mt-3 ml-3" onClick={() => {setTimeout(()=>{this.props.setShowResume(true);}, 200)}} >
                                        <i className="bx bx-file"></i>View Resume
                                    </button>}
                                </div>*/}
                            </div>
                            <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                <p style={{ color: "#090d3a", fontSize: "1vw" }}>Current Stage: {this.props.applicants[this.props.current].current_stage}</p>
                            </div>
                            {this.props.reviewer_type != "subr" &&
                                <div>
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                        {(this.props.gh_current_stage_id == "" || this.props.gh_current_stage_id == null) ?
                                            <button
                                                className="default-btn1"
                                                style={{ width: "13vw", paddingLeft: "25px" }}
                                                onClick={this.props.filter == "active" ? this.openMoveForm : this.jobClosedAlert}>
                                                <i class='bx-fw bx bx-move-vertical'></i>Move Stage
                                            </button> :
                                            <button
                                                className="default-btn1"
                                                style={{ width: "13vw", paddingLeft: "25px" }}
                                                onClick={this.props.filter == "active" ? this.openGreenhouseMoveForm : this.jobClosedAlert}>
                                                <i class='bx-fw bx bx-move-vertical'></i>Move Stage
                                            </button>
                                        }
                                    </div>
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                        {(this.props.gh_current_stage_id == "" || this.props.gh_current_stage_id == null) ?
                                            <button
                                                className="default-btn3"
                                                style={{ width: "13vw", paddingLeft: "25px" }}
                                                onClick={this.props.filter == "active" ? (() => { this.rejectCandidates(); this.props.refresh() }) : this.jobClosedAlert}>
                                                <i class='bx-fw bx bxs-x-square' style={{ color: "#090D3A" }}></i>Reject
                                            </button> :
                                            <button
                                                className="default-btn3"
                                                style={{ width: "13vw", paddingLeft: "25px" }}
                                                onClick={this.props.filter == "active" ? (() => { this.openRejectNoteForm(); this.props.refresh() }) : this.jobClosedAlert}>
                                                <i class='bx-fw bx bxs-x-square' style={{ color: "#090D3A" }}></i>Reject
                                            </button>
                                        }
                                        <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                            <button
                                                onClick={() => this.setState({ showEmailSending: true })}
                                                className="default-btn4"
                                                style={{ paddingLeft: "25px", width: "13vw" }}
                                            >
                                                <i class='bx-fw bx bx-envelope' style={{ color: "#090d3a" }}></i> Email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <MoveForm
                                showMoveForm={this.state.showMoveForm}
                                hideMoveForm={this.hideMoveForm}
                                currentStage={this.state.currentStage}
                                setCurrentStage={this.setCurrentStage}
                                nextStage={this.state.nextStage}
                                setNextStage={this.setNextStage}
                                moveCandidates={this.moveCandidates}
                            />
                            <MyModalShare2 show={this.state.showRejectNote} onHide={() => this.setState({ showRejectNote: false })}>
                                <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw" }}>
                                    <form onSubmit={(e) => { this.greenhouserejectCandidates(e); this.setState({ showRejectNote: false }); }}>
                                        <h3 className="interview-h3">Rejection Notes</h3>
                                        <p>The candidate's rejection status and rejection reason will be synchronized at Greenhouse.</p>
                                        <p style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.2vw" }}>Rejection notes:</p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="rejectNotes"
                                            placeholder="Rejection notes"
                                            onChange={this.onChange1}
                                            value={this.state.rejectNotes}
                                            style={{
                                                fontFamily: "Inter, Segoe UI",
                                                background: "#FFFFFF",
                                                borderRadius: "5px",
                                                paddingLeft: "1vw",
                                                border: "2px solid #E8EDFC",
                                                boxSizing: "border-box",
                                                marginBottom: "1vw"
                                            }}
                                            required />
                                        <div className="row d-flex justify-content-center">
                                            <button type="submit" className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Confirm</button>
                                            <button type="button" onClick={() => this.setState({ showRejectNote: false })} className="default-btn1" style={{ backgroundColor: "#979797", paddingLeft: "25px", float: "right", marginLeft: "2vw" }}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </MyModalShare2>
                            <MyModalShare2 show={this.state.showGreenhouseMoveForm} onHide={() => this.setState({ showGreenhouseMoveForm: false })}>
                                <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw", paddingBottom: "4vw" }}>
                                    <h3 className="interview-h3">Move Stage</h3>
                                    <p className="interview-p">The candidate's stage status will be synchronized at Greenhouse.</p>
                                    <p style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.2vw" }}>Move stage:</p>
                                    <Select value={this.state.category4} onChange={this.onFilter4} options={this.state.options4} className="select-category4" styles={customStyles1} />
                                    <div className="row d-flex justify-content-center">
                                        <button onClick={() => { this.greenhouseMoveCandidates(); this.setState({ showGreenhouseMoveForm: false }) }} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Confirm</button>
                                        <button onClick={() => this.setState({ showGreenhouseMoveForm: false })} className="default-btn1" style={{ backgroundColor: "#979797", paddingLeft: "25px", float: "right", marginLeft: "2vw" }}>Cancel</button>
                                    </div>
                                </div>
                            </MyModalShare2>
                            {(this.props.reviewer_type == "subr") &&
                                <div>
                                    {this.props.curEvaluation.evaluation == 1 ?
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
                                                onClick={this.props.filter == "active" ? () => { this.updateEvaluation(1) } : this.jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good.png" style={{ width: "1.25vw", marginRight: "0.5vw" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#13C4A1" }}>Qualified</p>
                                            </button>
                                        </div>
                                    }
                                    {this.props.curEvaluation.evaluation == 2 ?
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
                                                onClick={this.props.filter == "active" ? () => { this.updateEvaluation(2) } : this.jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad.png" style={{ width: "1.25vw", marginRight: "0.5vw", paddingTop: "2%" }} />
                                                <p style={{ fontSize: "0.8vw", color: "#E42424" }}>Unqualified</p>
                                            </button>
                                        </div>
                                    }
                                    <div className="row" style={{ marginTop: "1vw", display: "flex", justifyContent: "center" }}>
                                        <button
                                            onClick={() => this.setState({ showEmailSending: true })}
                                            className="default-btn4"
                                            style={{ paddingLeft: "25px", width: "13vw" }}
                                        >
                                            <i class='bx-fw bx bx-envelope' style={{ color: "#090d3a" }}></i> Email
                                        </button>
                                    </div>
                                </div>
                            }
                            <div>
                                <div className="row mt-4 d-flex justify-content-end">
                                    <textarea
                                        className="note-border"
                                        style={{ height: "10vw", width: "100%", marginLeft: "1rem", marginRight: "1rem", fontSize: "0.9vw" }}
                                        type="text"
                                        value={this.state.comment}
                                        placeholder="Write your comment here"
                                        onChange={(e) => { this.setState({ comment: e.target.value }) }}
                                    />
                                    <button
                                        className="default-btn"
                                        onClick={this.updateReview}
                                        style={{ fontSize: "1vw", marginTop: "0.5rem", marginRight: "1rem", paddingLeft: "25px", backgroundColor: "#ff6b00" }}
                                    >Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 mt-3 pl-3 pr-2" >
                        <div className="resume-box p-4" style={{ background: "white", borderRadius: "3px" }}>
                            <div>
                                {this.props.applicants[this.props.current]?.questions?.length > 0 &&
                                    <h2
                                        className={this.state.viewApplication ? "head-btn-selected" : "head-btn-unselected"}
                                        onClick={() => { this.setViewApplications() }}
                                    >
                                        Application
                                    </h2>
                                }
                                <h2
                                    className={this.state.viewResume ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewResume() }}
                                >
                                    Resume
                                </h2>
                                {(this.props.video_array?.length > 0) &&
                                    <h2
                                        className={this.state.viewVideo ? "head-btn-selected" : "head-btn-unselected"}
                                        onClick={() => { this.setViewVideo() }}
                                    >
                                        Video Interview
                                    </h2>
                                }
                                <h2
                                    className={this.state.viewNotes ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewNotes() }}
                                >
                                    Evaluation Notes
                                </h2>
                                <h2
                                    className={this.state.viewEmail ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewEmails() }}
                                >
                                    Message
                                </h2>
                            </div>
                            {this.state.viewApplication &&
                                <ReviewApplicationTab
                                    questions={this.props.applicants[this.props.current].questions}
                                    answers={this.props.applicants[this.props.current].answers}
                                    qualifications={this.props.applicants[this.props.current].qualifications}
                                    mustHaves={this.props.applicants[this.props.current].must_haves}
                                />
                            }
                            {this.state.viewResume && (
                                ((this.props.resumeURL != "") && (this.props.resumeURL != null)) ?
                                    <div class="iframe-container">
                                        <iframe className="responsive-iframe" src={this.props.resumeURL} />
                                    </div> :
                                    (this.props.applicants[this.props.current].resume_url != "" && this.props.applicants[this.props.current].resume_url != null) ?
                                        <div class="iframe-container">
                                            <iframe className="responsive-iframe" src={this.props.applicants[this.props.current].resume_url} />
                                        </div> :
                                        <div>
                                            <h3 style={{ marginTop: "10%", textAlign: "center", height: "42rem" }}>Candidate does not upload resume.</h3>
                                        </div>
                            )}
                            {this.state.viewVideo &&
                                <ApplicationVideo
                                    int_ques={this.props.int_ques}
                                    positionId={this.props.positionId}
                                    quesiton_array={this.props.quesiton_array}
                                    video_array={this.props.video_array}
                                    stars={this.props.stars}
                                    comments={this.props.comments}
                                    pk={this.props.pk}
                                    refresh={this.props.refresh}
                                    commentStatus={this.props.commentStatus}
                                    profile={this.props.profile}
                                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                                    current={this.props.current}
                                    setCurrent={this.props.setCurrent}
                                    start={this.props.start}
                                    end={this.props.end}
                                    viewPrevResult={this.props.viewPrevResult}
                                    viewNextResult={this.props.viewNextResult}
                                    hasSwitch={this.props.hasSwitch}
                                    recordedVideoCount={this.props.applicants[this.props.current].video_count}
                                    transcripts={this.props.transcripts}
                                    filter={this.props.filter}
                                />
                            }
                            {this.state.viewNotes &&
                                <ReviewNote
                                    reviews={this.props.reviews}
                                    positionId={this.props.positionId}
                                    applicantEmail={this.props.applicants[this.props.current].email}
                                    reviewer={
                                        ((this.props.employerProfileDetail.f_name + this.props.employerProfileDetail.l_name)?.length > 0) ?
                                            (this.props.employerProfileDetail.f_name + " " + this.props.employerProfileDetail.l_name) :
                                            (this.props.user.username)
                                    }
                                    profile={this.props.profile}
                                    reviewerEmail={this.props.user.email}
                                    evaluations={this.props.evaluations}
                                    filter={this.props.filter}
                                    currentStage={this.props.currentStage}
                                    reviewerType={this.props?.reviewer_type}
                                    user={this.props.user}
                                />
                            }
                            {this.state.viewEmail &&
                                <ViewEmailMessage
                                    applicantEmail={this.props.applicants[this.props.current].email}
                                    employerProfileDetail={this.props.employerProfileDetail}
                                    jobid={this.props.jobsId}
                                    first_name={this.props.applicants[this.props.current].name?.split(" ")[0]}
                                    last_name={this.props.applicants[this.props.current].name?.split(" ")[1]}
                                />
                            }
                        </div>
                    </div>
                </div>
                {this.props.hasSwitch &&
                    <div className="row" style={{ marginTop: "1.5vw", marginBottom: "1vw" }}>
                        <div className="col-3" />
                        <div className="col-9" style={{ textAlign: "center" }}>
                            <button
                                className={this.props.current == this.props.start ? "disable-btn" : "enable-btn"}
                                disabled={this.props.current == this.props.start ? true : false}
                                onClick={() => this.props.viewPrevResult(this.props.current)}
                            >
                                &lt; Prev
                            </button>
                            <button
                                className={this.props.current == this.props.end ? "disable-btn" : "enable-btn"}
                                disabled={this.props.current == this.props.end ? true : false}
                                onClick={() => this.props.viewNextResult(this.props.current)}
                                style={{ marginLeft: "2vw" }}
                            >
                                Next &gt;
                            </button>
                        </div>
                    </div>
                }
                {/*  move success alert prompt */}
                <AlertModal show={this.state.showMoveSuccessAlert} onHide={this.hideSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw" }}>
                        <h3 className="interview-h3">Move to next stage Success</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5vw" }}>You have moved the candidates to selected stage successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1vw" }}>
                            <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1vw" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={this.hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                {/*  reject success alert prompt */}
                <AlertModal show={this.state.showRejectSuccessAlert} onHide={this.hideRejectSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2vw" }}>
                        <h3 className="interview-h3">Candidate {this.state.isReject ? "Rejected!" : "Unrejected!"}</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5vw" }}>You have {this.state.isReject ? "rejected!" : "unrejected!"} the candidates successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1vw" }}>
                            <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1vw" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={this.hideRejectSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                <MyModal80 show={this.state.showEmailSending} onHide={this.hideEmailSending}>
                    <EmailSending
                        hideEmailSending={this.hideEmailSending}
                        employerProfileDetail={this.props.employerProfileDetail}
                        user={this.props.user}
                        profile={this.props.profile}
                        email={this.props.applicants[this.props.current].email}
                        jobid={this.props.jobsId}
                        first_name={this.props.applicants[this.props.current].name?.split(" ")[0]}
                        last_name={this.props.applicants[this.props.current].name?.split(" ")[1]}
                        handleStatusChange2={null}
                    />
                </MyModal80>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    var quesiton_array = [];
    var video_array = [];
    var stars = [];
    var comments = [];
    var transcripts = [];
    var pk = [];

    state.video_reducer.int_ques.map((i) => {
        stars.push(i.video_stars);
        comments.push(i.video_comment)
        quesiton_array.push(i.question_desc);
        video_array.push(i.url);
        transcripts.push(i.transcripts);
        pk.push(i.id)
    });

    return {
        quesiton_array: quesiton_array,
        video_array: video_array,
        stars: stars,
        comments: comments,
        pk: pk,
        user: state.auth_reducer.user,
        resumeURL: state.video_reducer.resumeURL,
        recordTime: state.video_reducer.recordTime,
        interviewResume: state.video_reducer.interviewResume,
        reviews: state.question_reducer.reviews,
        transcripts: transcripts,
        evaluations: state.question_reducer.evaluations,
        curEvaluation: state.question_reducer.curEvaluation
    }
};

export default withRouter(connect(mapStateToProps, {
    getPostedJobs, getResumeURL, getReviewNote, addOrUpdateReviewerEvaluation,
    getReviewerEvaluation, getCurrentReviewerEvaluation, updateInviteStatus,
    updateApplicantBasicInfo, addReviewNote
})(ReviewApplication));