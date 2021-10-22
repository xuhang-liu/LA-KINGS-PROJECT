import React, { Component } from "react";
import { removeSubReviewer, delExReviewer, addSubReviewer, addExReviewer } from "../../../redux/actions/question_actions";
import { getPipelineAnalytics } from "../../../redux/actions/job_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

export class Pipeline extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let data = {
            "job_id": this.props.job.job_details.id
        }
        this.props.getPipelineAnalytics(data);
    }

    deleteReviever = (sub_id) => {
        let data = { sub_id: sub_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { this.props.removeSubReviewer(data); this.deletSuccessAlert(); this.props.getPostedJobs(this.props.user.id, 1, "")}
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    deleteExReviewer = (ex_reviewer_id) => {
        let data = { ex_reviewer_id: ex_reviewer_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { this.props.delExReviewer(data); this.deletSuccessAlert(); this.props.getPostedJobs(this.props.user.id, 1, "") }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    inviteReviever = (e, stage) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="interview-txt7" style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "2px solid #E8EDFC", padding: "1rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
                        <form onSubmit={(e) => this.submitSubReviewer(e, stage)}>
                            <div className="form-row">
                                <h3 className="subreviewer-h3">Add Reviewer</h3>
                            </div>
                            <div className="form-row">
                                <p className="subreviewer-p" style={{ color: "#7a7a7a" }}>
                                    Reviewers can only access the job stages <br />
                                    they are invited into.
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
                            <div className="form-row" style={{ marginTop: "0.6rem" }}>
                                <label style={{ fontSize: "17px", margin: "1rem" }}>
                                    Invite to:
                                </label>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Resume Review"?
                                    <input type="checkbox" style={{ display: "inline-block" }} id="ResumeReview" checked/>:
                                    <input type="checkbox" style={{ display: "inline-block" }} id="ResumeReview"/>
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Resume Review</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Video Interview"?
                                    <input type="checkbox" style={{ display: "inline-block" }} id="VideoInterview" checked/>:
                                    <input type="checkbox" style={{ display: "inline-block" }} id="VideoInterview"/>
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Video Interview</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Live Interview"?
                                    <input type="checkbox" style={{ display: "inline-block" }} id="LiveInterview" checked/>:
                                    <input type="checkbox" style={{ display: "inline-block" }} id="LiveInterview"/>
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Live Interview</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Short List"?
                                    <input type="checkbox" style={{ display: "inline-block" }} id="ShortList" checked/>:
                                    <input type="checkbox" style={{ display: "inline-block" }} id="ShortList"/>
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Short List</p>
                                </div>
                            </div>
                            <div className="form-row justify-items mt-3">
                                <div className="form-group col-3" style={{ marginRight: "3rem" }}>
                                    <button
                                        type="submit"
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px" }}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="form-group col-3">
                                    <button
                                        type="button"
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", backgroundColor: "#979797" }}
                                        onClick={() => onClose()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                );
            },
            overlayClassName: "overlay",
        });
    }

    submitSubReviewer = (e, stage) => {
        e.preventDefault();
        let sub_reviewer_name = "";
        let sub_reviewer_email = "";
        let encoded_email = "";
        let email_list = [];
        let check_ResumeReview = false;
        let check_VideoInterview = false;
        let check_LiveInterview = false;
        let check_ShortList = false;
        check_ResumeReview = document.getElementById("ResumeReview").checked;
        check_VideoInterview = document.getElementById("VideoInterview").checked;
        check_LiveInterview = document.getElementById("LiveInterview").checked;
        check_ShortList = document.getElementById("ShortList").checked;
        let check_stage_array = [check_ResumeReview, check_VideoInterview, check_LiveInterview, check_ShortList];
        sub_reviewer_name = document.getElementById("sub_reviewer_name").value;
        sub_reviewer_email = document.getElementById("sub_reviewer_email").value;
        //check user exist
        (this.props?.postedJobs[this.props?.job?.job_details?.positions_id]?.ex_reviewers)?.map((ext, i) => {
            email_list.push(ext.r_email);
        });
        if (email_list?.indexOf(sub_reviewer_email?.toLowerCase()) != -1) {
            return this.sendFailAlert1();
        };
        axios.get(`accounts/check-user-existence?email=${sub_reviewer_email?.toLowerCase()}`).then((res) => {
            let user_existence = res.data.data;
            if (user_existence) {
                this.sendFailAlert();
                setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
            } else {
                encoded_email = window.btoa("email=" + sub_reviewer_email?.toLowerCase());
                let data = {
                    "sub_name": sub_reviewer_name,
                    "sub_email": sub_reviewer_email?.toLowerCase(),
                    "encoded_email": encoded_email,
                    "company_name": this.props.profile.company_name,
                    "position_id": this.props.postedJobs[this.props.job.job_details.positions_id].position_id,
                    "master_email": this.props.user.email,
                    "master_user": this.props.user.id,
                    "jobs_id": this.props.job.job_details.id,
                    "check_stage_array": check_stage_array,
                };
                const myPromise = new Promise((resolve, reject) => {
                    this.props.addSubReviewer(data);
                });
                myPromise.then(this.props.getPostedJobs(this.props.user.id, 1, ""));           
                //this.props.addSubReviewer(data);
                //setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
                this.alertSuccess();
            }
        })
            .catch(error => {
                console.log(error)
            });
    }

    inviteExReviewer = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="interview-txt7" style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "2px solid #E8EDFC", padding: "1rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
                        <form onSubmit={this.submitExReviewer}>
                            <div className="form-row">
                                <h3 className="subreviewer-h3">Add Hiring Manager</h3>
                            </div>
                            <div className="form-row">
                                <p className="subreviewer-p" style={{ color: "#7a7a7a" }}>
                                    Hiring Managers have full access to the entire <br />
                                    job they are invited into.
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
                                        Add
                                    </button>
                                </div>
                                <div className="form-group col-3">
                                    <button
                                        type="button"
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", backgroundColor: "#979797" }}
                                        onClick={() => onClose()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                );
            },
            overlayClassName: "overlay",
        });
    }

    submitExReviewer = (e) => {
        e.preventDefault();
        let ex_reviewer_name = "";
        let ex_reviewer_email = "";
        let encoded_email = "";
        let email_list = [];
        ex_reviewer_name = document.getElementById("ex_reviewer_name").value;
        ex_reviewer_email = document.getElementById("ex_reviewer_email").value;
        //check user exist
        (this.props?.postedJobs[this.props?.job?.job_details?.positions_id]?.ex_reviewers)?.map((ext, i) => {
            email_list.push(ext?.r_email);
        });
        (this.props?.postedJobs[this.props?.job?.job_details?.positions_id]?.subreviewers)?.map((sub, i) => {
            email_list.push(sub?.r_email);
        });
        if (email_list?.indexOf(ex_reviewer_email?.toLowerCase()) != -1) {
            return this.sendFailAlert1();
        };
        axios.get(`accounts/check-user-existence?email=${ex_reviewer_email?.toLowerCase()}`).then((res) => {
            let user_existence = res.data.data;
            if (user_existence) {
                this.sendFailAlert();
                setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
            } else {
                encoded_email = window.btoa("email=" + ex_reviewer_email?.toLowerCase());
                let data = {
                    "ex_reviewer_name": ex_reviewer_name,
                    "ex_reviewer_email": ex_reviewer_email?.toLowerCase(),
                    "encoded_email": encoded_email,
                    "company_name": this.props.profile.company_name,
                    "position_id": this.props.postedJobs[this.props.job.job_details.positions_id].position_id,
                    "master_email": this.props.user.email,
                    "master_user": this.props.user.id,
                    "jobs_id": this.props.job.job_details.id,
                };
                const myPromise = new Promise((resolve, reject) => {
                    this.props.addExReviewer(data);
                });
                myPromise.then(this.props.getPostedJobs(this.props.user.id, 1, "")); 
                //this.props.addExReviewer(data);
                //setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
                this.alertSuccess();
            }
        })
            .catch(error => {
                console.log(error)
            });
    }

    deletSuccessAlert = () => {
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

    sendFailAlert = () => {
        confirmAlert({
            title: "Send Invitation Fail",
            message: "Looks like this email is already registered as a regular user at HireBeat and therefore cannot be invited as an reviewer. Please enter a different email. Personal email also works.",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    sendFailAlert1 = () => {
        confirmAlert({
            title: "Send Invitation Fail",
            message: "Looks like this reviewer is already exist.",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    alertSuccess = () => {
        confirmAlert({
            title: "Invitation Sent",
            message: "You've successfully invited your team member.",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    render() {
        let position_detail = this.props.postedJobs[this.props.job.job_details.positions_id];
        let subreviewers = position_detail.subreviewers;
        let exReviewers = position_detail.ex_reviewers;
        let applicants = position_detail.applicants;
        let isClosed = position_detail.is_closed;
        let resume_review_count = 0;
        let video_review_count = 0;
        let live_review_count = 0;
        let shortlist_review_count = 0;
        (subreviewers?.map((sub, i) => {
            if (sub.current_stage == "Resume Review") {
                resume_review_count += 1;
            } else if (sub.current_stage == "Video Interview") {
                video_review_count += 1;
            } else if (sub.current_stage == "Live Interview") {
                live_review_count += 1;
            } else if (sub.current_stage == "Short List") {
                shortlist_review_count += 1;
            }
        }));


        return (
            <React.Fragment>
                <div className="container-fluid py-5 px-5">
                    {/*All Candidates*/}
                    <div className="row">
                        <div onClick={this.props.renderAllCandidates} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage1.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 5 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>All Candidates</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>{this.props.analytics.all_can_num}</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.all_can_act_num}</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.all_can_rej_num}</p>
                                </div>
                            </div>
                        </div>
                        {((!this.props.job.job_details.is_closed)) &&
                            <div style={{ marginLeft: "2rem", marginRight: "1rem" }}>
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <button
                                            className="default-btn1 interview-txt6 mt-4"
                                            onClick={this.inviteExReviewer}
                                            style={{ paddingLeft: "25px" }}
                                        >
                                            + Add Hiring Manager
                                            <span></span>
                                        </button>}
                                </div>
                            </div>}
                        {exReviewers.length > 0 &&
                            <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                                {(exReviewers.slice(0, 3).map((sub, i) => {
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
                                                        <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteExReviewer(sub.id) }}>Remove</a>
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                }))}
                                {exReviewers.length > 3 &&
                                    <span className="sub_number3" style={{ color: "white" }}>+{exReviewers.length - 3}
                                        <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                    {exReviewers.map((sub, i) => {
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
                                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteExReviewer(sub.id) }}>Remove</a>
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
                                }
                            </div>}
                    </div>
                    {/*Resume Screening*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderResumeScreen} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage2.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 4 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Resume Review</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>{this.props.analytics.resume_num}</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.resume_num_act_num}</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.resume_num_rej_num}</p>
                                </div>
                            </div>
                        </div>
                        {((!this.props.job.job_details.is_closed)) &&
                            <div style={{ marginLeft: "2rem", marginRight: "3.8rem" }}>
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <div>
                                            <button
                                                className="default-btn interview-txt6 mt-4"
                                                style={{ paddingLeft: "25px" }}
                                                onClick={(e) => this.inviteReviever(e, "Resume Review")}
                                            >
                                                + Add Reviewer
                                                <span></span>
                                            </button>
                                        </div>}
                                </div>
                            </div>}
                        {resume_review_count > 0 &&
                            <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                                {subreviewers.filter(sub1 => sub1.current_stage == "Resume Review").slice(0, 3).map((sub, i) => {
                                    return (
                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                            <p className="sub_submenu container" style={{ width: "12rem" }}>
                                                <div className="row">
                                                    <div className="col-3 px-3 py-2">
                                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                    </div>
                                                    <div className="col-9">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                        <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                        <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                })}
                                {resume_review_count > 3 &&
                                    <span className="sub_number3" style={{ color: "white" }}>+{resume_review_count - 3}
                                        <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                    {subreviewers.filter(sub1 => sub1.current_stage == "Resume Review").map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-3 px-2 py-2">
                                                                            <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
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
                            </div>}
                    </div>
                    {/*Video Interview*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderVideoInterview} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage3.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 3 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Video Interview</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>{this.props.analytics.video_num}</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.video_num_act_num}</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.video_num_rej_num}</p>
                                </div>
                            </div>
                        </div>
                        {((!this.props.job.job_details.is_closed)) &&
                            <div style={{ marginLeft: "2rem", marginRight: "3.8rem" }}>
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <div>
                                            <button
                                                className="default-btn interview-txt6 mt-4"
                                                style={{ paddingLeft: "25px" }}
                                                onClick={(e) => this.inviteReviever(e, "Video Interview")}
                                            >
                                                + Add Reviewer
                                                <span></span>
                                            </button>
                                        </div>}
                                </div>
                            </div>}
                        {video_review_count > 0 &&
                            <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                                {subreviewers.filter(sub1 => sub1.current_stage == "Video Interview").slice(0, 3).map((sub, i) => {
                                    return (
                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                            <p className="sub_submenu container" style={{ width: "12rem" }}>
                                                <div className="row">
                                                    <div className="col-3 px-3 py-2">
                                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                    </div>
                                                    <div className="col-9">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                        <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                        <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                })}
                                {video_review_count > 3 &&
                                    <span className="sub_number3" style={{ color: "white" }}>+{video_review_count - 3}
                                        <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                    {subreviewers.filter(sub1 => sub1.current_stage == "Video Interview").map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-3 px-2 py-2">
                                                                            <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
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
                            </div>}
                    </div>
                    {/*Live Interview*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderLiveInterview} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage4.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 2 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Live Interview</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>{this.props.analytics.live_num}</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.live_num_act_num}</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.live_num_rej_num}</p>
                                </div>
                            </div>
                        </div>
                        {((!this.props.job.job_details.is_closed)) &&
                            <div style={{ marginLeft: "2rem", marginRight: "3.8rem" }}>
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <div>
                                            <button
                                                className="default-btn interview-txt6 mt-4"
                                                style={{ paddingLeft: "25px" }}
                                                onClick={(e) => this.inviteReviever(e, "Live Interview")}
                                            >
                                                + Add Reviewer
                                                <span></span>
                                            </button>
                                        </div>}
                                </div>
                            </div>}
                        {live_review_count > 0 &&
                            <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                                {subreviewers.filter(sub1 => sub1.current_stage == "Live Interview").slice(0, 3).map((sub, i) => {
                                    return (
                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                            <p className="sub_submenu container" style={{ width: "12rem" }}>
                                                <div className="row">
                                                    <div className="col-3 px-3 py-2">
                                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                    </div>
                                                    <div className="col-9">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                        <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                        <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                })}
                                {live_review_count > 3 &&
                                    <span className="sub_number3" style={{ color: "white" }}>+{live_review_count - 3}
                                        <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                    {subreviewers.filter(sub1 => sub1.current_stage == "Live Interview").map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-3 px-2 py-2">
                                                                            <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
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
                            </div>}
                    </div>
                    {/*Short List*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderShortList} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage5.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Short List</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>{this.props.analytics.short_num}</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.short_num_act_num}</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>{this.props.analytics.short_num_rej_num}</p>
                                </div>
                            </div>
                        </div>
                        {((!this.props.job.job_details.is_closed)) &&
                            <div style={{ marginLeft: "2rem", marginRight: "3.8rem" }}>
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <div>
                                            <button
                                                className="default-btn interview-txt6 mt-4"
                                                style={{ paddingLeft: "25px" }}
                                                onClick={(e) => this.inviteReviever(e, "Short List")}
                                            >
                                                + Add Reviewer
                                                <span></span>
                                            </button>
                                        </div>}
                                </div>
                            </div>}
                        {shortlist_review_count > 0 &&
                            <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                                {subreviewers.filter(sub1 => sub1.current_stage == "Short List").slice(0, 3).map((sub, i) => {
                                    return (
                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                            <p className="sub_submenu container" style={{ width: "12rem" }}>
                                                <div className="row">
                                                    <div className="col-3 px-3 py-2">
                                                        <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                    </div>
                                                    <div className="col-9">
                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                        <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                        <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
                                                    </div>
                                                </div>
                                            </p>
                                        </span>
                                    )
                                })}
                                {shortlist_review_count > 3 &&
                                    <span className="sub_number3" style={{ color: "white" }}>+{shortlist_review_count - 3}
                                        <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                    {subreviewers.filter(sub1 => sub1.current_stage == "Short List").map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu_inside container" style={{ width: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-3 px-2 py-2">
                                                                            <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-9">
                                                                            <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{sub.r_name}</p>
                                                                            <p style={{ fontSize: "0.7rem", fontWeight: "500", color: "#7d7d7d", marginTop: "0", wordWrap: "break-word", wordBreak: "break-word" }}>{sub.r_email}</p>
                                                                            <a style={{ fontSize: "0.8rem", fontWeight: "600", color: "#000", marginTop: "2rem", textDecoration: "underline", marginLeft: "3.5rem" }} onClick={() => { this.deleteReviever(sub.id) }}>Remove</a>
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
                            </div>}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    analytics: state.job_reducer.analytics,
});

export default withRouter(connect(mapStateToProps, {
    removeSubReviewer, delExReviewer, addSubReviewer, addExReviewer, getPipelineAnalytics
})(
    Pipeline
));