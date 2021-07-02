import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
//import {Link} from "react-router-dom";
import ReviewApplication from "./../ReviewApplication";
import { MyModal80, MyFullModal1 } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import { ResumeEva } from "./ResumeEva";
import 'boxicons';
//import { IconText } from "../DashboardComponents";
import { getReviewNote, getReviewerEvaluation, getCurrentReviewerEvaluation } from "./../../../redux/actions/question_actions";
import { closePosition, deletePosition, getResumeURL, addSubReviewer, removeSubReviewer, moveCandidateToInterview, sendInterviews } from "./../../../redux/actions/question_actions";
//import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import * as pdfjsLib from 'pdfjs-dist';
import QuestionForm from "./QuestionForm";
import EditQuestion from "./EditQuestion"
import { withRouter } from "react-router-dom";
import axios from "axios";

export class JobApplication extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.loaded &&
                    <div>
                        {Object.keys(this.props.postedJobs).reverse().map((key) => {
                            let p = this.props.postedJobs[key];
                            // filter positions according to is_closed attribute
                            if (this.props.filter) {
                                switch (this.props.filter) {
                                    case "active":
                                        if (p.is_closed) return null;
                                        if (((sessionStorage.getItem("selectedId") || this.props.selectedId) != 0) && ((sessionStorage.getItem("selectedId") || this.props.selectedId) != p.position_id) && (sessionStorage.getItem("view" + p.job_title) != "true")) return null;
                                        break;
                                    case "closed":
                                        if (!p.is_closed) return null;
                                        if (((sessionStorage.getItem("selectedId") || this.props.selectedId) != 0) && ((sessionStorage.getItem("selectedId") || this.props.selectedId) != p.position_id) && (sessionStorage.getItem("view" + p.job_title) != "true")) return null;
                                        break;
                                    default:
                                        return null;
                                }
                            }
                            return (
                                <JobViewDetail
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
                                />
                            )
                        })}
                    </div>
                }
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    received_interview: state.auth_reducer.received_interview,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
});

export default withRouter(connect(mapStateToProps, {
    closePosition, deletePosition, getResumeURL, addSubReviewer,
    removeSubReviewer, moveCandidateToInterview, sendInterviews, getReviewNote, getReviewerEvaluation, getCurrentReviewerEvaluation
})(
    JobApplication
));

const JobViewDetail = (props) => {
    const [view, setView] = useState(false);
    const [unView, setUnView] = useState(0);

    let position = {
        position_id: props.positionId,
    };

    useEffect(() => {
        let temp = 0;
        props.applicants.map((applicant) => {
            if ((applicant.comment_status == 0) && (!applicant.is_viewed) && (applicant.is_recorded) && (applicant.video_count > 0)) {
                temp += 1;
            }
        })
        setUnView(temp);
        if (sessionStorage.getItem("view" + props.jobTitle) == "true") {
            setView(true);
        };
    }, [props.applicants]);

    function closeJob() {
        confirmAlert({
            title: "Confirm to Close",
            message: "Are you sure to close this position?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => confirmClose()
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    function reactiveJob() {
        confirmAlert({
            title: "Confirm to Reactive",
            message: "Are you sure to reactive this position?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => confirmClose() // todo change here, it should be confirmReopen
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function confirmClose() {
        props.closePosition(position);
        // refresh dashboard
        window.location.reload();
    }

    function deleteAlert() {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this position?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteJob()
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    function deleteJob() {
        props.deletePosition(position);
        // refresh current page
        window.location.reload();
    }

    function inviteReviever() {
        let sub_reviewer_name = "";
        let sub_reviewer_email = "";
        let encoded_email = "";
        function submitSubReviewer(e) {
            e.preventDefault();
            sub_reviewer_name = document.getElementById("sub_reviewer_name").value;
            sub_reviewer_email = document.getElementById("sub_reviewer_email").value;
            //check user exist
            axios.get(`accounts/check-user-existence?email=${sub_reviewer_email.toLowerCase()}`).then((res) => {
                let user_existence = res.data.data;
                if (user_existence) {
                    sendFailAlert();
                    props.getPJobs();
                } else {
                    encoded_email = window.btoa("email=" + sub_reviewer_email);
                    let data = {
                        sub_name: sub_reviewer_name,
                        sub_email: sub_reviewer_email,
                        encoded_email: encoded_email,
                        company_name: props.companyName,
                        position_id: props.positionId,
                        master_email: props.user.email,
                    };
                    props.addSubReviewer(data);
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
                        <form onSubmit={submitSubReviewer}>
                            <div className="form-row">
                                <h3 className="subreviewer-h3">Invite Sub-Reviewer</h3>
                            </div>
                            <div className="form-row">
                                <p className="subreviewer-p">
                                    You can invite team members within your organization to <br />
                                    join the screening process as a sub-reviewer. <br />
                                    A sub-reviewer can view and shortlist candidates who <br />
                                    have completed the video interview.
                                </p>
                            </div>
                            <div className="form-row" style={{ marginTop: "1rem" }}>
                                <div className="form-group col-5">
                                    <label style={{ fontSize: "17px", margin: "0.5rem" }}>
                                        Enter Name
                                    </label>
                                    <input type="text" id="sub_reviewer_name" className="form-control" required="required" placeHolder="John" />
                                </div>
                                <div className="form-group col-7">
                                    <label style={{ fontSize: "17px", margin: "0.5rem" }}>
                                        Enter Email
                                    </label>
                                    <input type="email" id="sub_reviewer_email" className="form-control" required="required" placeHolder="john@example.com" />
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
                                        style={{ paddingLeft: "25px"}}
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

    function deleteReviever(sub_id) {
        let data = { sub_id: sub_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { props.removeSubReviewer(data); deletSuccessAlert(); props.getPJobs(); }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    return (
        <React.Fragment>
            {/* Summarize */}
            {!view &&
                <div className="container d-flex justify-content-start chart-bg1" style={{ marginTop: "3rem", backgroundColor: "white", borderRadius:"0.5rem", zIndex:"auto" }}>
                    <div className="col-12" style={{ fontFamily: "Avenir Next, Segoe UI" }}>
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-7" style={{ color: "#090D3A" }}>
                                    <div className="row mb-2">
                                        {unView > 0 && <div className="col mt-2">
                                            <span className="dot"></span>
                                            <span className="ml-2" style={{ color: "#FF6B00", fontSize: "1rem", fontWeight: "600" }}>
                                                {unView > 1 ? unView + " " : unView + " "}  Unreviewed
                                            </span>
                                        </div>
                                        }
                                    </div>
                                    <div className="row">
                                        <button className="title-button ml-2" style={{ float: "left" }} onClick={() => { setView(true); props.addSelected(props.positionId); sessionStorage.setItem(("view" + props.jobTitle), "true"); sessionStorage.setItem("selectedId", props.positionId) }}>
                                            {props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}
                                        </button>
                                    </div>
                                    <div className="row mb-2 mt-1">
                                        <div className="col-4">
                                            <p style={{ color: "#4A6F8A" }}>Invited Applicants: {props.applicants.length}</p>
                                        </div>
                                        <div className="col-8 mb-4" style={{ color: "#4A6F8A", borderLeft: "outset" }}>
                                            <p>Created On: {props.inviteDate.substring(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 mt-4" style={{ marginRight: "-2rem" }}>
                                    {props.subreviewers.slice(0, 3).map((sub, i) => {
                                        return (
                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                <p className="sub_submenu container" style={{ width: "12rem"}}>
                                                    <div className="row">
                                                        <div className="col-3 px-3 py-2">
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                        </div>
                                                        <div className="col-9">
                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap:"break-word", wordBreak:"break-word" }}>{sub.r_email}</p>
                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { deleteReviever(sub.id) }}>Remove</a>
                                                        </div>
                                                    </div>
                                                </p>
                                            </span>
                                        )
                                    })}
                                    {props.subreviewers.length > 3 &&
                                        <span className="sub_number3" style={{ color: "white" }}>+{props.subreviewers.length - 3}
                                            <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Sub-Reviewers</p>
                                                        {props.subreviewers.map((sub, i) => {
                                                            return (
                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                    <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                        <div className="row">
                                                                            <div className="col-3 px-2 py-2">
                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                            </div>
                                                                            <div className="col-9">
                                                                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                                <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap:"break-word", wordBreak:"break-word"}}>{sub.r_email}</p>
                                                                                <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { deleteReviever(sub.id) }}>Remove</a>
                                                                            </div>
                                                                        </div>
                                                                    </p>
                                                                </span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </p>
                                        </span>}
                                </div>
                                <div className="col-3 ml-4">
                                    {!props.profile.is_subreviwer &&
                                        <div>
                                            {props.applicants.length > 0 &&
                                                <div>
                                                    {((!props.isClosed) && (props.subreviewers.length < Number(props.profile.reviewer_count) || (props.profile.membership == "Premium"))) &&
                                                        <button
                                                            className="default-btn1 interview-txt6 mt-4"
                                                            style={{ paddingLeft: "25px" }}
                                                            onClick={inviteReviever}
                                                        >
                                                            + Sub-Reviewer
                                                            <span></span>
                                                        </button>}
                                                </div>}
                                            {/*!props.isClosed &&
                                        <button
                                            type="submit"
                                            onClick={closeJob}
                                            className="sub_close"
                                        >
                                            <i className="bx bx-box bx-sm" style={{color: "#67A3F3"}}></i>
                                            <p className="sub_closeText">Close</p>
                                        </button>*/}
                                            {/*props.isClosed &&
                                        <button
                                            className="default-btn1 interview-txt6 mt-4"
                                            style={{paddingLeft: "25px", marginLeft:"4rem"}}
                                            onClick={reactiveJob}
                                        >
                                            Reactive
                                            <span></span>
                                        </button>*/}
                                            {/*<button
                                            type="submit"
                                            onClick={deleteAlert}
                                            className="sub_close"
                                        >
                                            <i className="bx bx-trash bx-sm" style={{color: "#67A3F3"}}></i>
                                            <p className="sub_closeText">Delete</p>
                                        </button>*/}
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Application detail*/}
            {view &&
                <JobCard
                    getPJobs={props.getPJobs}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    getResumeURL={props.getResumeURL}
                    resumeURL={props.resumeURL}
                    questions={props.questions}
                    companyName={props.companyName}
                    positionId={props.positionId}
                    jobId={props.jobId}
                    jobTitle={props.jobTitle}
                    isClosed={props.isClosed}
                    inviteDate={props.inviteDate}
                    applicants={props.applicants}
                    addInterviews={props.addInterviews}
                    getApplicantsVideos={props.getApplicantsVideos}
                    getApplicantsInfo={props.getApplicantsInfo}
                    getRecordStatus={props.getRecordStatus}
                    dataLoaded={props.dataLoaded}
                    isRecorded={props.isRecorded}
                    int_ques={props.int_ques}
                    id_candidate={props.id_candidate}
                    username_candidate={props.username_candidate}
                    email_candidate={props.email_candidate}
                    phone_candidate={props.phone_candidate}
                    location_candidate={props.location_candidate}
                    resendInvitation={props.resendInvitation}
                    updateCommentStatus={props.updateCommentStatus}
                    hideView={() => (setView(false), props.addSelected(0), sessionStorage.removeItem("view" + props.jobTitle), sessionStorage.removeItem("selectedId"))}
                    user={props.user}
                    profile={props.profile}
                    updateViewStatus={props.updateViewStatus}
                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                    position={props.position}
                    allInvited={props.allInvited}
                    moveCandidateToInterview={props.moveCandidateToInterview}
                    sendInterviews={props.sendInterviews}
                    getReviewNote={props.getReviewNote}
                    getReviewerEvaluation={props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                />
            }
        </React.Fragment>
    );
}

const JobCard = (props) => {
    var curlimit = 0;
    const [invite, setInvite] = useState(false);
    const [showQForm, setShowQForm] = useState(false);
    const [showQEditForm, setShowQEditForm] = useState(false);
    //const [hide, setHide] = useState(true);
    //const hideSwitch = () => {setHide(hide => !hide)};
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
            sendSuccessAlert();
            clearInvitationForm();
            e.preventDefault();
        }
    }

    // sendInvitation function with email notification
    //    function sendInvitation(e) {
    //        let candidateCount = 0;
    //        let companyName = props.companyName;
    //        let jobTitle = props.jobTitle;
    //        let positionId = props.positionId;
    //        // collect input name and email
    //        const emails = [];
    //        const names = [];
    //        let nameElements = document.getElementsByClassName("candidate-name");
    //        let emailElements = document.getElementsByClassName("candidate-email");
    //        for (let i = 0; i < nameElements.length; i++) {
    //            // name
    //            names.push(nameElements[i].value);
    //            // email
    //            let value = emailElements[i].value;
    //            emails.push(value.toLowerCase());
    //            if(value!=""){
    //                candidateCount+=1;
    //            }
    //        }
    //        // generate interview urls and send emails
    //        let urls = [];
    //        for (let i = 0; i < emails.length; i++) {
    //            // make sure urls have the same size of emails and names
    //            let url = "";
    //            if (emails[i] != "" && names[i] != "") {
    //                //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                let prefix = "https://hirebeat.co/candidate-login?";  // online
    //                let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                let encode = window.btoa(params);
    //                url = prefix + encode;
    //            }
    //            urls.push(url);
    //        }
    //        let meta = {
    //            company_name: companyName,
    //            job_title: jobTitle,
    //            position_id: positionId,
    //            emails: emails,
    //            names: names,
    //            expire: expire.value,
    //            urls: urls,
    //        }
    //        let addLimitLeft = curlimit;
    //        curlimit += candidateCount;
    //        if((props.applicants.length+curlimit)>(props.profile.candidate_limit)){
    //            alert('Upgrade Now! You can only add ' +parseInt(props.profile.candidate_limit-props.applicants.length-addLimitLeft)+ ' more candidates for this position!');
    //        }else{
    //            // save data to db
    //            props.addInterviews(meta);
    //            // disable webpage refresh
    //            sendSuccessAlert();
    //            clearInvitationForm();
    //            e.preventDefault();
    //        }
    //    }

    // pagination
    const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(8);
    let pageCount = Math.ceil(props.applicants.length / 8);

    function handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);
        setOffset(offset);
    };

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

    const options2 = [
        { value: 'Unreviewed', label: 'Unreviewed' },
        { value: 'Shortlist', label: 'Shortlist' },
        { value: 'Hold', label: 'Hold' },
        { value: 'Reject', label: 'Reject' },
        { value: 'All', label: 'All' },
    ];

    const [category, setCategory] = useState({ value: 'All', label: 'All' });
    function onFilter(category) {
        setCategory(category);
    }

    const [category2, setCategory2] = useState({ value: 'All', label: 'All' });
    function onFilter2(category2) {
        setCategory2(category2);
    }

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next',
            fontWeight: '500'
        }),
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };
    // add extra invitation form
    const [addForm1, setAddForm1] = useState(false);
    const [addForm2, setAddForm2] = useState(false);
    const [addForm3, setAddForm3] = useState(false);
    const [addForm4, setAddForm4] = useState(false);
    const [addForm5, setAddForm5] = useState(false);

    // upload resumes
    var candidateNames = [];
    var candidateEmails = [];
    var resumeNames = [];
    // state refreshed the whole page, so candidateNames and candidateEmails set to []
    //    const [cvUploaded, setCvUploaded] = useState("");
    //    const [parsed, setParsed] = useState(false);
    function uploadResume() {
        // parse pdf from urls directly
        // let text = getTextByURL("https://hirebeat-resume.s3.amazonaws.com/CV_LiangXu.pdf")
        // console.log(text);

        // empty candidate emails and names every click
        candidateNames = [];
        candidateEmails = [];

        let input = document.getElementById("resume");
        input.click();
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 10) {
                return overwhelm();
            }
            // get selected files
            for (let i = 0; i < num; i++) {
                // extract emails from pdf
                let pdf = input.files[i]
                getTextByPdf(pdf);
                resumeNames.push(pdf.name);
            }
            let fileNames = resumeNames.toString();
            uploadSuccess(num, fileNames, autofill);
            //            setCvUploaded(num + "resumes uploaded");
            //            setParsed(true);

        }
    }

    // autofill name & email
    function autofill() {
        if (candidateEmails.length <= 0 || candidateNames.length <= 0) {
            return uploadFirst();
        }
        // prefill names and emails to form
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        let n = candidateNames.length;
        for (let i = 0; i < n; i++) {
            if (!checkName(candidateNames[i])) {
                nameError();
            }
            nameElements[i].value = candidateNames[i];
            emailElements[i].value = candidateEmails[i];
        }
    }

    // parse resumes from url
    function getTextByURL(pdfUrl) {
        // ensure workSrc version align with pdfjs version
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
        var pdf = pdfjsLib.getDocument(pdfUrl);
        return pdf.promise.then(function (pdf) { // get all pages text
            var maxPages = pdf.numPages;
            var countPromises = []; // collecting all page promises
            for (var j = 1; j <= maxPages; j++) {
                var page = pdf.getPage(j);

                var txt = "";
                countPromises.push(page.then(function (page) { // add page promise
                    var textContent = page.getTextContent();
                    return textContent.then(function (text) { // return content promise
                        return text.items.map(function (s) { return s.str; }).join(''); // value page text
                    });
                }));
            }
            // Wait for all pages and join text
            return Promise.all(countPromises).then(function (texts) {
                return texts.join('');
            });
        });
    }

    // parse resume from local PDF files, fake upload
    function getTextByPdf(pdf) {
        // step 1 read the file using file reader
        let fileReader = new FileReader();
        fileReader.onload = function () {
            // step 3 turn array buffer into typed array
            var typedArray = new Uint8Array(this.result);

            //Step 4 PDFJS should be able to read this
            // ensure workSrc version align with pdfjs version
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
            return pdfjsLib.getDocument(typedArray).promise.then(function (pdf) {
                // convert pdf to string
                var maxPages = pdf.numPages;
                var countPromises = []; // collecting all page promises
                for (var j = 1; j <= maxPages; j++) {
                    var page = pdf.getPage(j);

                    var txt = "";
                    countPromises.push(page.then(function (page) { // add page promise
                        var textContent = page.getTextContent();
                        return textContent.then(function (text) { // return content promise
                            return text.items.map(function (s) { return s.str; }).join(''); // value page text
                        });
                    }));
                }
                // Wait for all pages and join text
                return Promise.all(countPromises).then(function (texts) {
                    // extract email and name
                    let text = texts.join('');
                    let email = extractEmail(text);
                    let name = extractName(text);
                    // check email
                    if (email != null) {
                        candidateEmails.push(email[0]);
                        candidateNames.push(name);
                    }
                });
            });
        }

        // step2 read the file as ArrayBuffer
        fileReader.readAsArrayBuffer(pdf);
    }

    function extractEmail(text) {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }

    function extractName(text) {
        let array = text.split(" ");
        let name = "";
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (array[i] != "" && count < 1) {
                name += array[i] + " ";
                count++;
            }
            else if (array[i] != "" && count < 2) {
                name += array[i];
                count++
            }
        }
        return name;
    }

    function checkName(text) {
        // allow alphabets and space
        var regex = /^[A-Za-z ]+$/ig;
        return regex.test(text);
    }

    function inviteCandidates() {
        if ((props.applicants.length) >= (props.profile.candidate_limit)) {
            candidateLimitAlert();
        } else {
            setInvite(true);
            //            // check interview questions
            //            if (props.questions.length <= 0) {
            //                setShowQForm(true);
            //            }
            //            else {
            //                setInvite(true);
            //            }
        }
    }

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
                setTimeout(() => { props.getPJobs() }, 600);
                inviteSuccessAlert();
            }
        }
        else {
            noCandidateAlert();
        }
    }

    return (
        <React.Fragment>
            {/* Job Applications */}
            {!invite &&
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={() => { props.hideView(); props.getPJobs() }}
                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                        >
                            <div className="center-items back-to-text">
                                <i className="bx bx-arrow-back bx-sm"></i>
                                <p className="back-to-text">Back to Interviews</p>
                            </div>
                        </button>
                    </div>
                    <div className="chart-bg1 container mt-4 pt-3 pb-3">
                        <div className="row">
                            <div className="col-6 interview-center mt-2">
                                <h3 className="interview-txt5" style={{ wordWrap: "break-word", wordBreak: "break-all", }}>{props.jobTitle}</h3>
                            </div>
                            {!props.profile.is_subreviwer &&
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
                            <div className="col-2 interview-center">
                                {!props.profile.is_subreviwer &&
                                    <div>
                                        {!props.isClosed &&
                                            <button
                                                className="default-btn1 interview-txt6"
                                                style={{ paddingLeft: "25px", marginBottom: "1rem" }}
                                                onClick={inviteCandidates}
                                            >
                                                + Candidates
                                                <span></span>
                                            </button>
                                        }
                                    </div>}
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
                        <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem" }}>
                            <label style={{position:"absolute", left:"3.3rem", marginTop:"0.4rem"}}><i className="bx bx-search bx-sm"></i></label>
                            <input placeholder={"Search candidate"} className="search-candidate-input" value={keyWords} onChange={onChange}></input>
                        </div>
                        <div className="chart-bg1 container" style={{ marginTop: "2%", boxShadow:"0px 0px 10px rgba(128, 128, 128, 0.16)" }}>
                            <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                                {!props.profile.is_subreviwer &&
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
                                {!props.profile.is_subreviwer &&
                                    <div className="col-1">Reinvite</div>
                                }
                                <div className="col-2 d-flex justify-content-end">
                                    <div className="row">
                                        <Select value={category2} onChange={onFilter2} options={options2} className="select-category" styles={customStyles} />
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <ApplicantList
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
                                    offset={offset}
                                    updateViewStatus={props.updateViewStatus}
                                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                                    getReviewNote={props.getReviewNote}
                                    getReviewerEvaluation={props.getReviewerEvaluation}
                                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                    user={props.user}
                                />
                                {/*<ReactPaginate
                                 previousLabel={'<'}
                                 nextLabel={'>'}
                                 breakLabel={'...'}
                                 breakClassName={'break-me'}
                                 pageCount={pageCount}
                                 marginPagesDisplayed={2}
                                 pageRangeDisplayed={5}
                                 onPageChange={handlePageClick}
                                 containerClassName={'pagination'}
                                 subContainerClassName={'pages pagination'}
                                 activeClassName={'active'}
                             />*/}
                            </div>
                        </div>
                    </div>
                    {!props.profile.is_subreviwer &&
                        <div style={{ marginTop: "2rem" }}>
                            <button
                                className="default-btn1 interview-txt6"
                                style={{ paddingLeft: "25px", marginBottom: "1rem" }}
                                onClick={sendVideoInterview}
                            >
                                Invite to Video Interview
                                <span></span>
                            </button>
                        </div>
                    }
                </div>
            }

            {/* Invitation Form */}
            {invite &&
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={() => { setInvite(false); props.getPJobs() }}
                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                        >
                            <div className="center-items back-to-text">
                                <i className="bx bx-arrow-back bx-sm"></i>
                                <p className="back-to-text">Back to Applicants</p>
                            </div>
                        </button>
                    </div>
                    <div className="chart-bg1 container" style={{ marginTop: "1%", marginBottom: "2%" }}>
                        <div className="row interview-center" style={{ marginTop: "2rem", marginLeft: "1%" }}>
                            <h3 className="interview-txt5">{props.jobTitle}{props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                        </div>
                        <div className="row">
                            <div className="col-3 mt-3 mb-3">
                                <button type="button" className="default-btn resume-upload" onClick={uploadResume}>
                                    <i className="bx bx-cloud-upload bx-sm"></i>
                                    Upload Resume
                                </button>
                            </div>
                            <div className="col-5" style={{ marginLeft: "-2rem", marginTop: "2rem" }}>
                                <input id="resume" type="file" multiple style={{ display: "none" }} accept=".pdf" />
                                <div>
                                    <span className="upload-txt">
                                        Bulk Upload (.pdf only; max:10)
                                    </span>
                                </div>
                            </div>
                            {/*<div className="col-4 d-flex float-fluid-right">
                                <p style={{marginTop:"2rem", display:"inline-block"}}>Expire after</p>
                                <div style={{marginTop:"1.6rem", display:"inline-block", marginLeft:"0.5vw"}}>
                                    <Select value={expire} onChange={onFilter1} options={options1} className="select-category" styles={customStyles}/>
                                </div>
                            </div>*/}
                            {/*parsed &&
                                <div style={{display: "flex", alignItems: "center", marginLeft: "1rem"}}>
                                    <span className="upload-txt">
                                        <i className="bx bx-file"></i>
                                        {cvUploaded}
                                        <i className="bx bxs-check-circle" style={{color: "#13C4A1", marginLeft: "0.5rem"}}></i>
                                    </span>
                                </div>*/}
                            {/*<button type="button" className="default-btn" style={{backgroundColor: "#090D3A", paddingLeft: "25px", marginLeft: "2rem"}} onClick={autofill}>Autofill</button>*/}
                        </div>
                        <form onSubmit={sendInvitation}>
                            <div className="form-row">
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px", margin: "2%" }}>
                                        Candidate Name
                                    </label>
                                    <input type="text" name="name1" className="form-control candidate-name" required="required" placeHolder="John" />
                                </div>
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px", margin: "2%" }}>
                                        Candidate Email
                                    </label>
                                    <input type="email" name="email1" className="form-control candidate-email" required="required" placeHolder="john@example.com" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name2" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email2" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name3" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email3" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name4" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email4" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name5" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email5" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name6" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email6" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name7" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email7" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name8" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email8" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name9" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email9" className="form-control candidate-email" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="text" name="name10" className="form-control candidate-name" />
                                </div>
                                <div className="form-group col-6">
                                    <input type="email" name="email10" className="form-control candidate-email" />
                                </div>
                            </div>
                            <div className="col d-flex justify-items">
                                {/*!addForm1 &&
                                        <button
                                            type="button"
                                            className="default-btn"
                                            style={{paddingLeft: "25px"}}
                                            onClick={() => setAddForm1(true)}
                                        >
                                            Add 5 More
                                        </button>*/}
                            </div>
                            {/* add additional form */}
                            {addForm1 &&
                                <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                            }
                            {addForm2 &&
                                <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                            }
                            {addForm3 &&
                                <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                            }
                            {addForm4 &&
                                <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                            }
                            {addForm5 &&
                                <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                            }
                            <div>
                                <div className="col d-flex justify-items">
                                    {(addForm1 && !addForm2) &&
                                        <button
                                            className="default-btn interview-txt6"
                                            style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                            onClick={() => setAddForm2(true)}
                                        >
                                            Add 5 More
                                        </button>
                                    }
                                </div>
                                <div className="col d-flex justify-items">
                                    {(addForm2 && !addForm3) &&
                                        <button
                                            className="default-btn interview-txt6"
                                            style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                            onClick={() => setAddForm3(true)}
                                        >
                                            Add 5 More
                                        </button>
                                    }
                                </div>
                                <div className="col d-flex justify-items">
                                    {(addForm3 && !addForm4) &&
                                        <button
                                            className="default-btn interview-txt6"
                                            style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                            onClick={() => setAddForm4(true)}
                                        >
                                            Add 5 More
                                        </button>}
                                </div>
                                <div className="col d-flex justify-items">
                                    {(addForm4 && !addForm5) &&
                                        <button
                                            className="default-btn interview-txt6"
                                            style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                            onClick={() => setAddForm5(true)}
                                        >
                                            Add 5 More
                                        </button>
                                    }
                                </div>
                            </div>

                            <div className="form-row justify-items" style={{ marginBottom: "1rem" }}>
                                <div className="col-2 d-flex justify-items">
                                    <button
                                        type="button"
                                        className="default-btn interview-txt6"
                                        style={{ paddingLeft: "25px", background: "#67A3F3" }}
                                        onClick={() => { setInvite(false); props.getPJobs() }}
                                    >
                                        Close
                                        <span></span>
                                    </button>
                                </div>
                                <div className="col-4 interview-center">
                                    {/*<p className="interview-txt8">Currently we only support adding up to 5 candidates at a time.</p>*/}
                                </div>
                                <div className="col-3 d-flex justify-items">
                                    <button
                                        type="submit"
                                        className="default-btn1"
                                        style={{ marginBottom: "1.5%", paddingLeft: "25px" }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};

const InvitationForm = (props) => {
    return (
        <div>
            <div className="row">
                <button type="button" className="default-btn resume-upload" onClick={uploadResume}>
                    <i className="bx bx-cloud-upload bx-sm"></i>
                    Upload Resume
                </button>
                <input id="resume" type="file" multiple style={{ display: "none" }} accept=".pdf" />
                <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
                    <span className="upload-txt">
                        Bulk Upload (.pdf only; max:10)
                    </span>
                </div>
                {/*parsed &&
                    <div style={{display: "flex", alignItems: "center", marginLeft: "1rem"}}>
                        <span className="upload-txt">
                            <i className="bx bx-file"></i>
                            {cvUploaded}
                            <i className="bx bxs-check-circle" style={{color: "#13C4A1", marginLeft: "0.5rem"}}></i>
                        </span>
                    </div>*/}
                <button type="button" className="default-btn" style={{ backgroundColor: "#090D3A", paddingLeft: "25px", marginLeft: "2rem" }} onClick={props.autofill}>Autofill</button>
            </div>
            <div className="form-row">
                <div className="form-group col-6">
                    <label style={{ fontSize: "17px", margin: "2%" }}>
                        Candidate Name
                    </label>
                    <input type="text" name="name1" className="form-control candidate-name" />
                </div>
                <div className="form-group col-6">
                    <label style={{ fontSize: "17px", margin: "2%" }}>
                        Candidate Email
                    </label>
                    <input type="email" name="email1" className="form-control candidate-email" />
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name2" className="form-control candidate-name" />
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email2" className="form-control candidate-email" />
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name3" className="form-control candidate-name" />
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email3" className="form-control candidate-email" />
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name4" className="form-control candidate-name" />
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email4" className="form-control candidate-email" />
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name5" className="form-control candidate-name" />
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email5" className="form-control candidate-email" />
                </div>
            </div>
        </div>
    )
}

const ApplicantList = (props) => {
    // get current page applicants(8)
    //let index = props.offset; // start index at applicants array
    //let applicants = props.applicants.slice(index, index + 8); // each page has 8 candidates at most
    return (
        <div>
            {props.applicants.sort((a, b) => new Date(b.invite_date) - new Date(a.invite_date)).map((a, index) => {
                // filter applicants by status
                if (props.category.value != "All") {
                    switch (props.category.value) {
                        case "Uninvited":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (a.is_invited || a.is_recorded) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Pending":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (a.is_recorded || !a.is_invited) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Withdrawn":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (!a.is_recorded || (a.is_recorded && a.video_count > 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Completed":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (!a.is_recorded || (a.is_recorded && a.video_count <= 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                    }
                }
                else if (props.keyWords != "") {
                    var canEmail = a.email.split("@")[0];
                    var canName = a.name;
                    if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                }
                else if (props.category2.value != "All") {
                    switch (props.category2.value) {
                        case "Unreviewed":
                            if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Shortlist":
                            if (a.comment_status != 1) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Hold":
                            if (a.comment_status != 2) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Reject":
                            if (a.comment_status != 3) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                    }
                }
                {/*else if(props.profile.is_subreviwer && !a.is_recorded){
                    return null;
                }*/}
                return (
                    <Applicant
                        index={index}
                        applicants={props.applicants}
                        getPJobs={props.getPJobs}
                        profile={props.profile}
                        recordTime={props.recordTime}
                        interviewResume={props.interviewResume}
                        getResumeURL={props.getResumeURL}
                        resumeURL={props.resumeURL}
                        isClosed={props.isClosed}
                        name={a.name}
                        date={a.invite_date.substring(0, 10)}
                        email={a.email}
                        comment_status={a.comment_status}
                        positionId={a.positions_id}
                        isRecorded={a.is_recorded}
                        videoCount={a.video_count}
                        candidateId={a.id}
                        isViewed={a.is_viewed}
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
                    />
                )
            })}
        </div>
    );
}

function getBoundary(applicants) {
    let right = applicants.length - 1;
    while (right >= 0) {
        if (applicants[right].is_recorded && applicants[right].video_count > 0) {
            break;
        }
        right--;
    }

    let left = 0;
    while (left <= applicants.length - 1) {
        if (applicants[left].is_recorded && applicants[left].video_count > 0) {
            break;
        }
        left++;
    }

    let res = [];
    res.push(left);
    res.push(right);
    return res;
}

const Applicant = (props) => {
    const [current, setCurrent] = useState(props.index);
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
    //    const boundary = getBoundary(applicants);
    //    const start = boundary[0];
    //    const end = boundary[1];
    const start = 0;
    const end = applicants.length - 1;

    function viewResult() {
        if (!isViewed) {
            props.updateViewStatus({ "candidate_id": applicants[props.index].id });
            setIsViewed(true);
        }
        // get videos and info
        props.getApplicantsVideos(applicants[props.index].email, positionId);
        props.getApplicantsInfo(applicants[props.index].email);
        props.getResumeURL(positionId, applicants[props.index].user_id);
        props.getReviewNote(positionId, applicants[props.index].email);
        props.getReviewerEvaluation(positionId, applicants[props.index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[props.index].email, props.user.email);
        setTimeout(() => { setShow(true); }, 200);
        sessionStorage.setItem(("show" + current), "true");
    };

    function getReviewPageData(index) {
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, positionId);
        props.getApplicantsInfo(applicants[index].email);
        props.getResumeURL(positionId, applicants[index].user_id);
        setCurrent(index);
    }

    function viewNextResult(curIndex) {
        let next = curIndex + 1;
        getReviewPageData(next);
    };

    function viewPrevResult(curIndex) {
        let prev = curIndex - 1;
        getReviewPageData(prev);
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
        props.getResumeURL(positionId, applicants[props.index].user_id);
        props.getApplicantsVideos(email, positionId);
        props.getApplicantsInfo(email);
    }

    function inviteAgain() {
        // encode url
        let url = "";
        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
        let prefix = "https://hirebeat.co/candidate-login?";  // online
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
        alert1();
    }


    const renderStatus = (status) => {
        switch (status) {
            case 1:
                if (props.videoCount > 0) {
                    return <button className="btn btn-success" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }} onClick={() => viewResult()}>
                        Shortlist
                    </button>
                }
                else {
                    return <button className="btn btn-success" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }}>
                        Shortlist
                    </button>
                }
            case 2:
                if (props.videoCount > 0) {
                    return <button className="btn btn-warning" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }} onClick={() => viewResult()}>
                        Hold
                    </button>
                }
                else {
                    return <button className="btn btn-warning" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }}>
                        Hold
                    </button>
                }
            case 3:
                if (props.videoCount > 0) {
                    return <button className="btn btn-danger" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }} onClick={() => viewResult()}>
                        Reject
                    </button>
                }
                else {
                    return <button className="btn btn-danger" style={{ minWidth: "7rem", maxHeight: "2.4rem", paddingTop: "0.6rem" }}>
                        Reject
                    </button>
                }
            default:
        }
    }

    const [show, setShow] = useState(sessionStorage.getItem("show" + current) == "true" ? true : false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);

    return (
        <div>
            <hr
                style={{
                    color: "#E8EDFC",
                    backgroundColor: "#E8EDFC",
                    height: 3,
                    marginBottom: "0.5rem",
                    marginTop: "0rem"
                }}
            />
            <div className="row interview-center" style={{ color: "#7D7D7D", height: "3rem" }}>
                {!props.profile.is_subreviwer &&
                    <div className="interview-txt9" style={{ marginLeft: "1rem" }}>
                        {(!applicants[current].is_invited && !applicants[current].is_recorded) ?
                            <div>
                                <input className="selected-candidate" value={JSON.stringify(applicants[current])} type="checkbox" />
                            </div> :
                            <div>
                                <input className="selected-candidate" value={JSON.stringify(applicants[current])} type="checkbox" style={{ visibility: "hidden" }} />
                            </div>
                        }
                    </div>
                }
                <div className="col-3 mb-1">
                    <button className="title-button1" style={{ wordBreak: "break-all", color: "#67a3f3" }} onClick={() => viewResult()}>
                        {(!isViewed && commentStatus == 0) ? <span class="dot"></span> : <span class="dot" style={{ background: "none" }}></span>}
                        {props.name.split("(")[0].length > 20 ? props.name.split("(")[0].substring(0, 18) + "..." : props.name.split("(")[0]}
                    </button>
                </div>
                {/*props.videoCount > 0 ?
                <div className="col-2 mb-1">
                    <button className="title-button1" onClick={() => viewResult()}>
                    {props.email.split("(")[0].length > 16 ? props.email.split("(")[0].substring(0, 14) + "..." : props.email.split("(")[0]}</button></div>
                : <div className="col-2 interview-txt9 mb-1">
                    {props.email.split("(")[0].length > 16 ? props.email.split("(")[0].substring(0, 14) + "..." : props.email.split("(")[0]}</div>
                */}
                <div className="col-2">
                    {(isInvited || props.isRecorded) &&
                        <div className="interview-txt9">
                            <p style={{ color: "#090d3a" }}>{props.date}</p>
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
                {/*<div className="col-1">
                    <div>
                        <button
                            onClick={() => viewResult()}
                            className="interview-txt9"
                            style={{color: "#67A3F3", border: "none", background: "white", paddingLeft:"0px"}}
                        >
                        <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> View
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
                                    style={{color: "#67A3F3", border: "none", background: "white", paddingLeft:"0px"}}
                                >
                                <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> View
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
                                    style={{color: "#67A3F3", border: "none", background: "white", paddingLeft:"0px"}}
                                >
                                    <i className="bx bx-redo interview-txt9" style={{color: "#67A3F3"}}></i>
                                    Resend
                                </button>
                            </div>}
                            </div>}
                        </div>
                    }
                </div>*/}
                {!props.profile.is_subreviwer &&
                    <div className="col-1">
                        {isInvited &&
                            <button
                                onClick={() => inviteAgain()}
                                className="interview-txt9"
                                style={{ color: "#67A3F3", border: "none", background: "white", paddingLeft: "0px" }}
                            >
                                {/*<i className="bx bx-redo interview-txt9" style={{color: "#67A3F3"}}></i>*/}
                                Resend
                            </button>
                        }
                    </div>
                }
                <div className="col-2 mb-1 d-flex justify-content-end" >
                    {renderStatus(props.comment_status)}
                </div>
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
                onHide={() => { setCurrent(props.index); sessionStorage.removeItem("show" + current); sessionStorage.removeItem("subpageStatus"); setShow(false) }}
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
                applicants={applicants}
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
                <ResumeEva
                    interviewResume={(props.interviewResume.result_rate != "" && props.interviewResume.result_rate != null) ? props.interviewResume : applicants[current]} />
            </MyModal80>
        </div>
    )
};

function MyVerticallyCenteredModal(props) {
    const { ...rest } = props;
    return (
        <div style={{ background: "#E8EDFC" }}>
            <MyFullModal1 className="light-blue-modal" {...rest}>
                <ReviewApplication
                    refresh={props.refresh}
                    getPJobs={props.getPJobs}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    setShowResume={props.setShowResume}
                    setShowEva={props.setShowEva}
                    commentStatus={props.commentStatus}
                    set_comment_status={props.set_comment_status}
                    hide={props.onHide}
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
                    current={props.current}
                    setCurrent={props.setCurrent}
                    start={props.start}
                    end={props.end}
                    viewPrevResult={props.viewPrevResult}
                    viewNextResult={props.viewNextResult}
                    applicants={props.applicants}
                    hasSwitch={true}
                />
            </MyFullModal1>
        </div>
    );
};

function alert1() {
    confirmAlert({
        title: "Invitation Sent",
        message: "You resend the interview invitation successfully",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function alertSuccess() {
    confirmAlert({
        title: "Invitation Sent",
        message: "Invitation of Reviewer successfully",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function overwhelm() {
    confirmAlert({
        title: "Too Many Resumes",
        message: "You can only upload 10 resumes at most each time",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
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

function nameError() {
    confirmAlert({
        title: "Name Error",
        message: "The candidate name in the resume file is invalid, please type it manually",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function emailError() {
    confirmAlert({
        title: "Email Error",
        message: "The candidate email in the resume file is invalid, please type it manually",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function sendSuccessAlert() {
    confirmAlert({
        title: "Add Candidates Success",
        message: "You have added candidates to interview process successfully.",
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