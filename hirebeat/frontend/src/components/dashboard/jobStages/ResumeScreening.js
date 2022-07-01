import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./../jobBoard/QuestionForm";
import { MyModal80, MyModalUpgrade, AlertModal } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews, moveCandidateToInterview, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, updateViewStatus, updateCommentStatus } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus, updateApplicantBasicInfo } from "../../../redux/actions/job_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../../redux/actions/video_actions";
import { subreviewerUpdateComment } from "../../../redux/actions/auth_actions";
import { MyFullModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import EditQuestion from "./../jobBoard/EditQuestion";
import { EmailSending } from '../applications/EmailSending';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';

export class ResumeScreening extends Component {
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
        category: { value: 'All', label: 'All' },
        category3: { value: 'All', label: 'All' },
        editQuestion: false,
        isSortByScore: true, // true means descending by resume score
        selectedPage: 0,
        showMoveForm: false,
        nextStage: "",
        currentStage: "Resume Review",
        showMoveSuccessAlert: false,
        showRejectSuccessAlert: false,
        showEmailSending: false,
        email_list: null,
    }

    componentDidMount() {
        let page = this.state.selectedPage + 1;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", this.state.isSortByScore); this.props.getPJobs(); }, 300);
    }

    onFilter = (category) => {
        this.setState({ category: category })
    }
    // filter selections
    options = [
        { value: 'Invited', label: 'Interview' },
        { value: 'Hold', label: 'Hold' },
        { value: 'Rejected', label: 'Rejected' },
        { value: 'Unreviewed', label: 'Unreviewed' },
        { value: 'All', label: 'All' },
    ];

    options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ];

    onFilter3 = (category) => {
        this.setState({ category3: category })
    }

    customStyles = {
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

    onChange = (e) => {
        this.setState({ keyWords: e.target.value });
    };

    setTempQuestion = (questions) => {
        this.setState({ tempQuestion: questions });
    }

    hideQForm = () => {
        let page = this.state.selectedPage + 1;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", this.state.isSortByScore); this.props.getPJobs(); }, 300);
        this.setState({ showQForm: false });

    }

    showQForm = () => {
        this.setState({ showQForm: true });
    }

    sendSuccessAlert = () => {
        confirmAlert({
            title: "Move to next stage Success",
            message: "You have moved the candidates to selected stage successfully.",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    rejectSuccessAlert = () => {
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

    noCandidateAlert = () => {
        confirmAlert({
            title: "No Candidate Selected!",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    disableQuestionEdition = () => {
        this.setState({ editQuestion: false });
    }

    editQuestions = () => {
        this.setState({ editQuestion: true });
    }

    openMoveForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            this.setState({
                showMoveForm: true
            })
        } else {
            this.noCandidateAlert();
        }
    }

    moveCandidates = () => {
        let candidateCount = 0;
        let positionId = this.props.curJob.job_details.positions_id;
        let jobId = this.props.curJob.job_details.id;
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
            if ((this.state.nextStage != "") && (this.state.nextStage != "Resume Review")) {
                let viewedData = {
                    "applyIds": invitedCandidates,
                    "isViewed": true,
                }
                let meta = {
                    position_id: positionId,
                    job_id: jobId,
                    emails: emails,
                    names: names,
                    "candidates": invitedCandidates,
                    "nextStage": this.state.nextStage,
                }
                this.props.moveCandidateToInterview(meta);
                this.setState({
                    showMoveForm: false
                });
                // update
                let page = 1;
                let userId = this.props.user.id;
                setTimeout(() => { this.props.getAllJobs(userId, page, "Resume Review", "True", this.state.isSortByScore); this.props.getPostedJobs(userId, page, "Resume Review") }, 300);
                this.unSelectAllCandidates();
                let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
                if (!noShowAgainMove) {
                    this.enableSuccessAlert();
                }
            } else if (this.state.nextStage == "Resume Review") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            this.noCandidateAlert();
        }
        window.scrollTo(0, 0);
    }

    rejectCandidates = () => {
        let candidateCount = 0;
        let positionId = this.props.curJob.job_details.positions_id;
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
                "positionId": positionId,
                "candidates": invitedCandidates,
                "nextStage": this.state.nextStage,
                "is_reject": true,
            }
            this.props.updateInviteStatus(data);
            // update
            let page = 1;
            let userId = this.props.user.id;
            setTimeout(() => { this.props.getAllJobs(userId, page, "Resume Review", "True", this.state.isSortByScore); this.props.getPostedJobs(userId, page, "Resume Review") }, 300);
            this.unSelectAllCandidates();
            let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
            if (!noShowAgainReject) {
                this.enableRejectSuccessAlert();
            }
        } else {
            this.noCandidateAlert();
        }
        window.scrollTo(0, 0);
    };
    // invite candidates with video interviews
    //    inviteCandidates = () => {
    //        let candidateCount = 0;
    //        let companyName = this.props.curJob.job_details.company_name;
    //        let jobTitle = this.props.curJob.job_details.job_title;
    //        let positionId = this.props.curJob.job_details.positions_id;
    //        // collect input name and email
    //        const emails = [];
    //        const names = [];
    //        const invitedCandidates = [];
    //        let candidates = document.getElementsByClassName("selected-candidate");
    //        for (let i = 0; i < candidates.length; i++) {
    //            if (candidates[i].checked) {
    //                let candidate = JSON.parse(candidates[i].value);
    //                // name
    //                names.push(candidate.first_name + " " + candidate.last_name);
    //                // email
    //                emails.push(candidate.email.toLowerCase());
    //                invitedCandidates.push(candidate.id);
    //                candidateCount+=1;
    //            }
    //        }
    //        // check candidates selected or not
    //        if (candidateCount > 0) {
    //            if (this.props.curJob.questions.length == 0 && this.state.tempQuestion.length == 0) {
    //                return this.showQForm();
    //            }
    //            if(candidateCount > (this.props.profile.candidate_limit)){
    //                alert('Upgrade Now! You can only add ' +parseInt(this.props.profile.candidate_limit)+ ' more candidates for this position!');
    //            } else{
    //                // generate interview urls and send emails
    //                let urls = [];
    //                for (let i = 0; i < emails.length; i++) {
    //                    // make sure urls have the same size of emails and names
    //                    let url = "";
    //                    if (emails[i] != "" && names[i] != "") {
    //                        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                        let prefix = "https://app.hirebeat.co/candidate-login?";  // online
    //                        let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                        let encode = window.btoa(params);
    //                        url = prefix + encode;
    //                    }
    //                    urls.push(url);
    //                }
    //                let meta = {
    //                    company_name: companyName,
    //                    job_title: jobTitle,
    //                    position_id: positionId,
    //                    emails: emails,
    //                    names: names,
    //                    expire: 14,
    //                    urls: urls,
    //                }
    //                // save data to db
    //                this.props.addInterviews(meta);
    //                let data = {
    //                    "candidates": invitedCandidates,
    //                    "isInvited": 1,
    //                }
    //                let viewedData = {
    //                    "applyIds": invitedCandidates,
    //                    "isViewed": true,
    //                }
    //                this.props.updateInviteStatus(data);
    //                this.props.updateCandidateViewedStatus(viewedData);
    //                // update
    //                setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs()}, 600);
    //                this.sendSuccessAlert();
    //            }
    //        }
    //        else {
    //            this.noCandidateAlert();
    //        }
    //    }

    selectAllCandidates = () => {
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

    unSelectAllCandidates = () => {
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            candidates[i].checked = false;
        }
    }

    sortByScore = () => {
        if (!this.state.isSortByScore) {
            this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", "True");
        }
        else {
            this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", "False");
        }
        this.setState({ isSortByScore: !this.state.isSortByScore });
    }

    handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        this.setState({ selectedPage: selectedPage });
        let page = selectedPage + 1;
        if (this.state.isSortByScore) {
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", "True");
        }
        else {
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", "False");
        }
        window.scrollTo(0, 0);
    };

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

    enableRejectSuccessAlert = () => {
        this.setState({ showRejectSuccessAlert: true });
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

    openEmailForm = () => {
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
                    email_list.push({ "email": candidate?.email, "id": candidate?.id, "first_name": candidate?.first_name, "last_name": candidate?.last_name });
                }
            }
            this.setState({ email_list: email_list, showEmailSending: true })
        } else {
            this.noCandidateAlert();
        }
    }

    hideEmailSending = () => {
        this.setState({ showEmailSending: false })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-3 pt-2 pb-3">
                    <div className="row interview-center" style={{ color: "#006dff", fontSize: "1rem", display: "flex", paddingLeft: "15px", paddingRight: "15px", marginTop: "1.4rem" }}>
                        <div>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i style={{ position: "absolute", marginLeft: "0.5rem", marginTop: "0.2rem" }} className="bx bx-search bx-sm"></i>
                                <input placeholder="Search candidate" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                            </span>
                        </div>
                        {this.props.curJob.total_page > 1 &&
                            <div className="ml-auto">
                                <ReactPaginate
                                    previousLabel={'< Prev'}
                                    nextLabel={'Next >'}
                                    breakLabel={'...'}
                                    breakClassName={'break-me'}
                                    pageCount={this.props.curJob.total_page}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={'pagination3'}
                                    activeClassName={'active'}
                                    forcePage={this.state.selectedPage}
                                />
                            </div>
                        }
                    </div>
                    <div className="container-fluid chart-bg1" style={{ marginTop: "1.3rem", paddingLeft: "0px", boxShadow: "none" }}>
                        <div className="row interview-txt7 interview-center " style={{ color: "#7D7D7D", height: "2rem", marginTop: "1rem", paddingBottom: "2.5rem" }}>
                            <div style={{ marginLeft: "2rem", marginRight: "1rem" }}>
                                {!this.props.profile.is_subreviwer &&
                                    <input id="select-all" type="checkbox" onClick={this.selectAllCandidates} style={{ display: "inline" }} />
                                }
                            </div>
                            <div className="col-4"><span>Name</span></div>
                            <div className="col-2">Applied On</div>
                            <div className="col-2 pl-4">Resume Score <span onClick={this.sortByScore} style={{ color: "#006dff", cursor: "pointer" }}><i class='bx bx-sort'></i></span></div>
                            {(this.props.reviewerStageLength > 0) &&
                                <div className="col-3"> <div style={{ display: "inline-block", marginRight: "0.2rem" }}>Status</div>
                                    <div style={{ display: "inline-block" }}>
                                        <Select value={this.state.category3} onChange={this.onFilter3} options={this.options3} className="select-category" styles={this.customStyles} />
                                    </div>
                                </div>
                            }
                            {(this.props.reviewerStageLength == 0) &&
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
                        </div>
                        {this.props.curJob.applicants.map((a, index) => {
                            if (this.state.keyWords != "") {
                                let name = a.first_name + " " + a.last_name;
                                if (!name.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                            }
                            if (this.state.category.value != "All") {
                                switch (this.state.category.value) {
                                    case "Invited":
                                        if (a.is_invited != 1) return null;
                                        break;
                                    case "Hold":
                                        if (a.is_invited != 2) return null;
                                        break;
                                    case "Rejected":
                                        if (a.is_invited != 3) return null;
                                        break;
                                    case "Unreviewed":
                                        if (a.is_invited != 0) return null;
                                        break;
                                }
                            }
                            else if (this.state.category3.value != "All") {
                                switch (this.state.category3.value) {
                                    case "Pending":
                                        if (a.reviewer_review_status) return null;
                                        break;
                                    case "Reviewed":
                                        if (!a.reviewer_review_status) return null;
                                        break;
                                }
                            }
                            return (
                                <ApplicantRow
                                    filter={this.props.filter}
                                    applicant={a}
                                    index={index}
                                    applicants={this.props.curJob.applicants}
                                    curJob={this.props.curJob}
                                    tempQuestion={this.state.tempQuestion}
                                    setTempQuestion={this.setTempQuestion}
                                    profile={this.props.profile}
                                    addInterviews={this.props.addInterviews}
                                    updateInviteStatus={this.props.updateInviteStatus}
                                    updateCandidateViewedStatus={this.props.updateCandidateViewedStatus}
                                    getAllJobs={this.props.getAllJobs}
                                    getPJobs={this.props.getPJobs}
                                    user={this.props.user}
                                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                                    selectedPage={this.state.selectedPage}
                                    getReviewNote={this.props.getReviewNote}
                                    addOrUpdateReviewerEvaluation={this.props.addOrUpdateReviewerEvaluation}
                                    getReviewerEvaluation={this.props.getReviewerEvaluation}
                                    getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                                    evaluations={this.props.evaluations}
                                    curEvaluation={this.props.curEvaluation}
                                    getApplicantsVideos={this.props.getApplicantsVideos}
                                    getApplicantsInfo={this.props.getApplicantsInfo}
                                    int_ques={this.props.int_ques}
                                    quesiton_array={this.props.quesiton_array}
                                    video_array={this.props.video_array}
                                    stars={this.props.stars}
                                    comments={this.props.comments}
                                    pk={this.props.pk}
                                    transcripts={this.props.transcripts}
                                    updateViewStatus={this.props.updateViewStatus}
                                    updateCommentStatus={this.props.updateCommentStatus}
                                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                                    reviews={this.props.reviews}
                                    positionId={this.props.curJob.job_details.positions_id}
                                    isSortByScore={this.state.isSortByScore}
                                    selectedCurrentStage="Resume Review"
                                    selectedStatus={this.state.isSortByScore ? "True" : "False"}
                                    updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                                    employerProfileDetail={this.props.employerProfileDetail}
                                    reviewerStageLength={this.props.reviewerStageLength}
                                />
                            )
                        })}
                    </div>
                    {this.props.curJob.total_page > 1 &&
                        <div className="d-flex justify-content-end" style={{ marginTop: "1rem" }}>
                            <ReactPaginate
                                previousLabel={'< Prev'}
                                nextLabel={'Next >'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={this.props.curJob.total_page}
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination3'}
                                activeClassName={'active'}
                                forcePage={this.state.selectedPage}
                            />
                        </div>
                    }
                </div>
                {(this.props.filter == "active" && !this.props.profile.is_subreviwer) &&
                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                            onClick={this.openMoveForm}
                        >
                            Move
                            <span></span>
                        </button>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                            onClick={this.rejectCandidates}
                        >
                            Reject
                            <span></span>
                        </button>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginLeft: "1rem", paddingTop: "8px", paddingBottom: "8px" }}
                            onClick={this.openEmailForm}
                        >
                            Email
                            <span></span>
                        </button>
                    </div>
                }
                <MyModalUpgrade
                    show={this.state.showMoveForm}
                    onHide={() => { this.setState({ showMoveForm: false }) }}
                >
                    <div className="container chart-bg1" style={{ padding: "2rem" }}>
                        <h3 style={{ fontSize: "1.25rem", color: "#090d3a", fontWeight: "600", textAlign: "center" }}>Move to Another Stage</h3>
                        {this.state.currentStage == "Resume Review" ?
                            <div className="row d-flex justify-content-center mt-5">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Resume Review</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-5">
                                <button onClick={() => { this.setState({ nextStage: "Resume Review" }); this.setState({ currentStage: "Resume Review" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Resume Review</button>
                            </div>
                        }
                        {this.state.currentStage == "Video Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Video Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Video Interview" }); this.setState({ currentStage: "Video Interview" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Video Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Live Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Live Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Live Interview" }); this.setState({ currentStage: "Live Interview" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Live Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Short List" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Shortlist</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Short List" }); this.setState({ currentStage: "Short List" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Shortlist</button>
                            </div>
                        }
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-6 d-flex justify-content-end">
                                <button onClick={this.moveCandidates} className="default-btn" style={{ backgroundColor: "#090d3a", paddingLeft: "25px" }}>Confirm</button>
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <button onClick={() => { this.setState({ showMoveForm: false }) }} className="default-btn" style={{ backgroundColor: "#979797", paddingLeft: "25px" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                {/* add new questions */}
                <MyModal80
                    show={this.state.showQForm}
                    onHide={() => { this.hideQForm() }}
                >
                    <QuestionForm
                        curJob={this.props.curJob}
                        setCurJob={this.props.setCurJob}
                        hideQForm={this.hideQForm}
                        getAllJobs={this.props.getAllJobs}
                        tempQuestion={this.state.tempQuestion}
                        setTempQuestion={this.setTempQuestion}
                        getPJobs={this.props.getPJobs}
                        addInterviews={this.props.addInterviews}
                        updateInviteStatus={this.props.updateInviteStatus}
                    />
                </MyModal80>
                {/* Edit Questions */}
                <MyModal80
                    show={this.state.editQuestion}
                    onHide={() => { this.disableQuestionEdition() }}
                >
                    <EditQuestion
                        curJob={this.props.curJob}
                        questions={this.props.curJob.questions}
                        position={this.props.curJob.position}
                        disableQuestionEdition={this.disableQuestionEdition}
                        getAllJobs={this.props.getAllJobs}
                        getPJobs={this.props.getPJobs}
                    />
                </MyModal80>
                {/*  move success alert prompt */}
                <AlertModal show={this.state.showMoveSuccessAlert} onHide={this.hideSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Move to next stage Success</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have moved the candidates to selected stage successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={this.hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                {/*  reject success alert prompt */}
                <AlertModal show={this.state.showRejectSuccessAlert} onHide={this.hideRejectSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Candidate Rejected!</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have rejected the candidates successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
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
                        email={this.state.email_list}
                        jobid={this.props.curJob.job_details.id}
                        first_name={this.state.email_list}
                        last_name={this.state.email_list}
                        handleStatusChange2={null}
                    />
                </MyModal80>
            </React.Fragment>
        )
    }

}

const ApplicantRow = (props) => {
    const [showPreview, setShowPreview] = useState(false);
    const [status, setStatus] = useState(false);
    const [current, setCurrent] = useState(props.index);
    let applicants = props.applicants;
    let name = props.applicant.first_name + " " + props.applicant.last_name;
    let resumeScore = props.applicant.result_rate;
    useEffect(() => {
        // if (sessionStorage.getItem("showPreview" + props.index) === "true") {
        //     setShowPreview(true);
        // }
        props.getApplicantsVideos(props.applicant.email, props.curJob.job_details.positions_id);
    }, []);
    function onView() {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        //        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : props.selectedPage + 1;
        //        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore); props.getPJobs() }, 300);
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email, "Resume Review");
        //sessionStorage.setItem(("showPreview" + props.index), "true");
        setShowPreview(true);
    }

    function hideModal() {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore); }, 300);
        //sessionStorage.removeItem("showPreview" + props.index);
        //sessionStorage.removeItem("showPreview" + current);
        setShowPreview(false);
    }

    function getReviewPageData(index) {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[index].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[index].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[index].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[index].email, props.user.email, "Resume Review");
        //sessionStorage.setItem(("showPreview" + index), "true");
        //sessionStorage.setItem("current", index);
    }

    function viewNextResult(curIndex) {
        setCurrent(curIndex + 1);
        //sessionStorage.removeItem("show" + curIndex);
        let next = curIndex + 1;
        getReviewPageData(next);
    };

    function viewPrevResult(curIndex) {
        setCurrent(curIndex - 1);
        //sessionStorage.removeItem("show" + curIndex);
        let prev = curIndex - 1;
        getReviewPageData(prev);
    };

    const refresh = () => {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore); props.getPJobs() }, 300);
        props.updateViewStatus({ "candidate_id": applicants[current].id });
        props.getApplicantsVideos(props.applicant.email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email, "Resume Review");
    }

    return (
        <div className="container-fluid">
            <hr
                style={{
                    border: props.index == 0 ? "1px solid #E8EDFC" : "1px solid #E5E5E5",
                    boxShadow: props.index == 0 ? "0px 1px 2px #E8EDFC" : "",
                }}
            />
            <div className="row interview-txt7 interview-center candidate-row" style={{ color: "#7D7D7D", height: "2rem" }}>
                <div className="interview-txt9 mb-2" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                    {!props.profile.is_subreviwer &&
                        <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" />
                    }
                    {/*(props.applicant.is_invited != 1) ?
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" />
                        </div> :
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" style={{ visibility: "hidden" }} />
                        </div>
                    */}
                </div>
                <div className="col-4 interview-txt9 mb-2" style={{ cursor: "pointer", color: "#006dff", paddingLeft: "0.3rem" }}>
                    {(!props.applicant.is_viewed && props.applicant.is_invited != 1) ?
                        <div>
                            <span className="dot"></span>
                            <span className="title-button2" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div> :
                        <div>
                            <span className="dot" style={{ visibility: "hidden" }}></span>
                            <span className="title-button2" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div>
                    }
                </div>
                <div className="col-2 interview-txt9 mb-2"><span style={{ marginLeft: "0.6rem" }}>{props.applicant.apply_date.substring(0, 10)}</span></div>
                <div className="col-2 interview-txt9 mb-2" style={{ marginLeft: "30px" }}>
                    {resumeScore >= 76 && <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-great.png" />}
                    {resumeScore >= 51 && resumeScore < 76 && <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-good.png" />}
                    {resumeScore >= 26 && resumeScore < 51 && <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-avg.png" />}
                    {resumeScore >= 0 && resumeScore < 26 && <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-bad.png" />}
                </div>
                {(props.reviewerStageLength > 0) &&
                    <div className="col-3">
                        {props.applicant?.reviewer_review_status ?
                            <p style={{ fontWeight: "600", color: "#4A6F8A" }}>Reviewed</p> :
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>Pending</p>
                        }
                    </div>}
                {(props.reviewerStageLength == 0) &&
                    <div className="col-2" style={{ marginLeft: "1.4rem" }}>
                        {props.applicant?.num_votes > 0 &&
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</p>
                        }
                    </div>}
            </div>
            <div style={{ background: "#E8EDFC" }}>
                <MyFullModal className="light-blue-modal" show={showPreview} onHide={hideModal}>
                    <ReviewCandidate
                        phone={applicants[current].phone}
                        email={applicants[current].email}
                        location={applicants[current].location}
                        resume_url={applicants[current].resume_url}
                        first_name={applicants[current].first_name}
                        last_name={applicants[current].last_name}
                        applicant={applicants[current]}
                        curJob={props.curJob}
                        tempQuestion={props.tempQuestion}
                        setTempQuestion={props.setTempQuestion}
                        profile={props.profile}
                        addInterviews={props.addInterviews}
                        candidateId={applicants[current].id}
                        updateInviteStatus={props.updateInviteStatus}
                        getAllJobs={props.getAllJobs}
                        getPJobs={props.getPJobs}
                        user={props.user}
                        setStatus={setStatus}
                        is_invited={applicants[current].is_invited}
                        style={{ backgroundColor: "black" }}
                        onHide={hideModal}
                        current={current}
                        setCurrent={setCurrent}
                        applicants={applicants}
                        status={status}
                        updateCandidateViewedStatus={props.updateCandidateViewedStatus}
                        linkedin={applicants[current].linkedinurl}
                        moveCandidateToInterview={props.moveCandidateToInterview}
                        filter={props.filter}
                        selectedPage={props.selectedPage}
                        getReviewNote={props.getReviewNote}
                        addOrUpdateReviewerEvaluation={props.addOrUpdateReviewerEvaluation}
                        getReviewerEvaluation={props.getReviewerEvaluation}
                        getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                        evaluations={props.evaluations}
                        curEvaluation={props.curEvaluation}
                        int_ques={props.int_ques}
                        quesiton_array={props.quesiton_array}
                        video_array={props.video_array}
                        stars={props.stars}
                        comments={props.comments}
                        pk={props.pk}
                        transcripts={props.transcripts}
                        viewNextResult={viewNextResult}
                        viewPrevResult={viewPrevResult}
                        refresh={refresh}
                        updateCommentStatus={props.updateCommentStatus}
                        subreviewerUpdateComment={props.subreviewerUpdateComment}
                        reviews={props.reviews}
                        currentStage={"Resume Review"}
                        positionId={props.positionId}
                        selectedCurrentStage={props.selectedCurrentStage}
                        selectedStatus={props.selectedStatus}
                        isSortByScore={props.isSortByScore}
                        updateApplicantBasicInfo={props.updateApplicantBasicInfo}
                        employerProfileDetail={props.employerProfileDetail}
                    />
                </MyFullModal>
            </div>
        </div>
    );
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
        transcripts: transcripts,
        profile: state.auth_reducer.profile,
        user: state.auth_reducer.user,
        jobs: state.job_reducer.jobs,
        evaluations: state.question_reducer.evaluations,
        curEvaluation: state.question_reducer.curEvaluation,
        int_ques: state.video_reducer.int_ques,
        reviews: state.question_reducer.reviews,
    }
};

export default withRouter(connect(mapStateToProps, {
    addInterviews, updateInviteStatus, updateCandidateViewedStatus, moveCandidateToInterview,
    getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, getApplicantsVideos, updateViewStatus, getApplicantsInfo, updateCommentStatus,
    subreviewerUpdateComment, updateApplicantBasicInfo
})(
    ResumeScreening
));