import React, { Component } from "react";
import { removeSubReviewer, delExReviewer, addSubReviewer, addExReviewer } from "../../../redux/actions/question_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';

export class Pipeline extends Component {
    constructor(props) {
        super(props);
    }

    deleteReviever = (sub_id) => {
        let data = { sub_id: sub_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => { this.props.removeSubReviewer(data); this.deletSuccessAlert(); this.props.getPJobs(); }
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
                    onClick: () => { this.props.delExReviewer(data); this.deletSuccessAlert(); this.props.getPJobs(); }
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    inviteReviever = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="interview-txt7" style={{ backgroundColor: '#ffffff', borderRadius: "10px", border: "2px solid #E8EDFC", padding: "1rem", paddingLeft: "3rem", paddingRight: "3rem" }}>
                        <form onSubmit={this.submitSubReviewer}>
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

    submitSubReviewer = (e) => {
        e.preventDefault();
        let sub_reviewer_name = "";
        let sub_reviewer_email = "";
        let encoded_email = "";
        sub_reviewer_name = document.getElementById("sub_reviewer_name").value;
        sub_reviewer_email = document.getElementById("sub_reviewer_email").value;
        //check user exist
        axios.get(`accounts/check-user-existence?email=${sub_reviewer_email.toLowerCase()}`).then((res) => {
            let user_existence = res.data.data;
            if (user_existence) {
                this.sendFailAlert();
                this.props.getPJobs();
            } else {
                encoded_email = window.btoa("email=" + sub_reviewer_email.toLowerCase());
                let data = {
                    sub_name: sub_reviewer_name,
                    sub_email: sub_reviewer_email.toLowerCase(),
                    encoded_email: encoded_email,
                    company_name: this.props.profile.company_name,
                    position_id: this.props.postedJobs[this.props.job.job_details.positions_id].position_id,
                    master_email: this.props.user.email,
                };
                this.props.addSubReviewer(data);
                this.props.getPJobs();
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

    submitExReviewer = (e) => {
        e.preventDefault();
        let ex_reviewer_name = "";
        let ex_reviewer_email = "";
        let encoded_email = "";
        ex_reviewer_name = document.getElementById("ex_reviewer_name").value;
        ex_reviewer_email = document.getElementById("ex_reviewer_email").value;
        //check user exist
        axios.get(`accounts/check-user-existence?email=${ex_reviewer_email.toLowerCase()}`).then((res) => {
            let user_existence = res.data.data;
            if (user_existence) {
                this.sendFailAlert();
                this.props.getPJobs();
            } else {
                encoded_email = window.btoa("email=" + ex_reviewer_email.toLowerCase());
                let data = {
                    "ex_reviewer_name": ex_reviewer_name,
                    "ex_reviewer_email": ex_reviewer_email.toLowerCase(),
                    "encoded_email": encoded_email,
                    "company_name": this.props.profile.company_name,
                    "position_id": this.props.postedJobs[this.props.job.job_details.positions_id].position_id,
                    "master_email": this.props.user.email,
                };
                this.props.addExReviewer(data);
                this.props.getPJobs();
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

    alertSuccess = () => {
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

    render() {
        let position_detail = this.props.postedJobs[this.props.job.job_details.positions_id];
        let subreviewers = position_detail.subreviewers;
        let exReviewers = position_detail.ex_reviewers;
        let applicants = position_detail.applicants;
        let isClosed = position_detail.is_closed;

        return (
            <React.Fragment>
                <div className="container-fluid py-5 px-5">
                    {/*All Candidates*/}
                    <div className="row">
                        <div onClick={this.props.renderAllCandidates} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage1.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 5 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>All Candidates</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>100</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>75</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Resume Screening*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderResumeScreen} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage2.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 4 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Resume Screening</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>30</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>25</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Video Interview*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderVideoInterview} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage3.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 3 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Video Interview</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>30</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        {subreviewers.length > 0 &&
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative", textAlign: "center", paddingTop: "1.5rem", marginLeft: "0.5rem" }}>
                            {subreviewers.slice(0, 3).map((sub, i) => {
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
                            {subreviewers.length > 3 &&
                                <span className="sub_number3" style={{ color: "white" }}>+{subreviewers.length - 3}
                                    <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                        <div className="row">
                                            <div className="col-12">
                                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Sub-Reviewers</p>
                                                {subreviewers.map((sub, i) => {
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
                        <div style={{ marginLeft: "2rem" }}>
                            {applicants.length > 0 &&
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <button
                                            className="default-btn1 interview-txt6 mt-4"
                                            style={{ paddingLeft: "25px" }}
                                            onClick={this.inviteReviever}
                                        >
                                            + Sub-Reviewer
                                            <span></span>
                                        </button>}
                                </div>}
                        </div>
                    </div>
                    {/*Live Interview*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderLiveInterview} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage4.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 2 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Live Interview</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>38</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Short List*/}
                    <div className="row" style={{ marginTop: "-1.7rem" }}>
                        <div onClick={this.props.renderShortList} style={{ cursor: "pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage5.png")', width: "18.8rem", height: "7.8rem", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
                            <p style={{ textAlign: 'center', color: "#fff", paddingTop: "2.5rem", fontWeight: "600", fontSize: "1rem" }}>Short List</p>
                            <p style={{ textAlign: 'center', color: "#fff", marginTop: "-1rem", fontWeight: "600", fontSize: "1rem" }}>2</p>
                        </div>
                        <div style={{ boxShadow: "0px 0px 20px rgba(103, 163, 243, 0.2)", width: "12rem", height: "5.6rem", top: "0.3rem", position: "relative" }}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{ fontWeight: "600" }}><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
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
                                                <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>External-Reviewers</p>
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
                        <div style={{ marginLeft: "2rem" }}>
                            {applicants.length > 0 &&
                                <div>
                                    {(this.props.profile.membership == "Premium") &&
                                        <button
                                            className="default-btn1 interview-txt6 mt-4"
                                            onClick={this.inviteExReviewer}
                                            style={{ paddingLeft: "25px" }}
                                        >
                                            + External Reviewer
                                            <span></span>
                                        </button>}
                                </div>}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(connect(null, {
    removeSubReviewer, delExReviewer, addSubReviewer, addExReviewer
})(
    Pipeline
));