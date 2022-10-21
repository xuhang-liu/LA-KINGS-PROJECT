import React, { Component } from "react";
import { removeSubReviewer, delExReviewer, addSubReviewer, addExReviewer } from "../../../redux/actions/question_actions";
import { getPipelineAnalytics } from "../../../redux/actions/job_actions";
import { MyModal80 } from "../DashboardComponents";
import { SourcingRequestForm } from "./SourcingRequestForm";
import { SourcingRequestList } from "./SourcingRequestList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import Spinner from 'react-bootstrap/Spinner';
import { Box, Heading, HStack, Stack, Text, Flex, Spacer, Button } from '@chakra-ui/react';
import { FiChevronLeft, FiAlignCenter, FiFileText, FiVideo, FiMessageCircle, FiHeart, FiEdit } from 'react-icons/fi';

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

export class Pipeline extends Component {
    constructor(props) {
        super(props);
        axios.get(`jobs/get-sourcing-request-status?jobid=${this.props.job.job_details.id}`).then((res) => {
            if (res?.data?.data == 1) {
                this.setState({ requestButton: 1 })
            } else if (res?.data?.data == 2) {
                this.setState({ requestButton: 2 })
            }
        })
            .catch(error => {
                console.log(error)
            });
    }

    state = {
        showRequestForm: false,
        requestButton: 0,
        requestListShow: false,
        showIframe: false,
        marketplace_iframe: "",
        loading: false,
    }

    setLoadingTrue = () => {
        this.setState({
            loading: true
        })
    }

    setHideRequest1 = () => {
        this.setState({
            showIframe: false
        })
    }

    setrequestListHide = () => {
        this.setState({
            requestListShow: false
        })
    }

    setShowRequest = () => {
        this.setState({
            showRequestForm: true
        })
        //Segment info
        window?.analytics?.track("Job - View Sourcing Request", {
            viewSourcingTime: Date().toLocaleString(),
        });
    }

    setHideRequest = () => {
        this.setState({
            showRequestForm: false
        })
    }

    componentDidMount() {
        let data = {
            "job_id": this.props.job.job_details.id
        }
        this.props.getPipelineAnalytics(data);

        // Send Job target applicants data:
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data3 = { "jobid": this.props.job.job_details.id }
        axios.post("jobs/job-target-push-candidates-back", data3, config).then((res3) => {
            console.log(res3)
        }).catch(error => {
            console.log(error)
        });
    }

    deleteReviever = (sub_id) => {
        let data = { sub_id: sub_id };
        confirmAlert({
            title: "Confirm to Remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.props.removeSubReviewer(data); this.deletSuccessAlert();
                        this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id)
                    }
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
                    onClick: () => {
                        this.props.delExReviewer(data); this.deletSuccessAlert();
                        this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id)
                    }
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
                                    {stage == "Resume Review" ?
                                        <input type="checkbox" style={{ display: "inline-block" }} id="ResumeReview" checked /> :
                                        <input type="checkbox" style={{ display: "inline-block" }} id="ResumeReview" />
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Resume Review</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Video Interview" ?
                                        <input type="checkbox" style={{ display: "inline-block" }} id="VideoInterview" checked /> :
                                        <input type="checkbox" style={{ display: "inline-block" }} id="VideoInterview" />
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Video Interview</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Live Interview" ?
                                        <input type="checkbox" style={{ display: "inline-block" }} id="LiveInterview" checked /> :
                                        <input type="checkbox" style={{ display: "inline-block" }} id="LiveInterview" />
                                    }
                                    <p style={{ display: "inline-block", marginLeft: "1rem" }}>Live Interview</p>
                                </div>
                            </div>
                            <div className="form-row ml-5" style={{ marginTop: "0.6rem" }}>
                                <div>
                                    {stage == "Short List" ?
                                        <input type="checkbox" style={{ display: "inline-block" }} id="ShortList" checked /> :
                                        <input type="checkbox" style={{ display: "inline-block" }} id="ShortList" />
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
        //Segment info
        window?.analytics?.track("View - Add Reviewer", {
            eventTime: Date()?.toLocaleString()
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
                setTimeout(() => { this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id) }, 300);
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
                myPromise.then(this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id));
                //this.props.addSubReviewer(data);
                //setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
                this.alertSuccess();
            }
        })
            .catch(error => {
                console.log(error)
            });
        //Segment info
        window?.analytics?.track("Add - Add Reviewer", {
            eventTime: Date()?.toLocaleString()
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
        //Segment info
        window?.analytics?.track("View - Add Hiring Manager", {
            eventTime: Date()?.toLocaleString()
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
                setTimeout(() => { this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id) }, 300);
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
                myPromise.then(this.props.getPostedJobs(this.props.user.id, 1, "", "", "", "", "", this.props.job.job_details.id));
                //this.props.addExReviewer(data);
                //setTimeout(() => {this.props.getPostedJobs(this.props.user.id, 1, "")}, 300);
                this.alertSuccess();
            }
        })
            .catch(error => {
                console.log(error)
            });
        //Segment info
        window?.analytics?.track("Add - Add Hiring Manager", {
            eventTime: Date()?.toLocaleString()
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

    openJobTportal = () => {
        this.setLoadingTrue();
        // JobTarget steps:
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let full_address = this.props.job.job_details.job_location?.split("|")[0];
        let city = full_address.split(",")[0].trim()
        let state = full_address.split(",")[1].trim()
        let country = full_address.split(",")[2].trim()
        let data1 = {
            "token": this.props.jobt_token,
            "job": {
                "requisition_name": this.props.job.job_details.id,
                "company_name": this.props.employerProfileDetail.name,
                "title": this.props.job.job_details.job_title,
                "description": this.props.job.job_details.job_description,
                "job_view_url": this.props.job.job_details.job_url?.replaceAll(' ', '%20'),
                "apply_url": this.props.job.job_details.job_url?.replaceAll(' ', '%20'),
                "location": {
                    "city": city,
                    "state": state,
                    "country": country
                },
                "job_type": this.props.job.job_details.job_type,
                "entrylevel": (this.props.job.job_details.job_level == "Entry Level") ? 1 : 0,
                "easy_apply": 1,
                "easy_apply_type": "basic",
                // "questionnaire_webhook": "https://" + window.location.hostname + "/jobs/get-questions-from-job?jobid=" + this.props.job.job_details.id,
                "application_delivery_webhook": "https://" + window.location.hostname + "/jobs/add-new-apply-candidate-from-jobtarget"
            }
        }
        axios.post("https://atsapi.jobtarget.com/api/employer/jobs/create", data1, config).then((res1) => {
            console.log(res1);
            if (res1.data.status == 0 || res1.data.status == "0") {
                this.setState({ marketplace_iframe: res1.data.marketplace_iframe, showIframe: true, loading: false })
                let data3 = { "job_id": this.props.job.job_details.id, "jobt_job_id": res1.data.job_id }
                axios.post("jobs/job-target-job-id-update", data3, config).then((res3) => {
                    console.log(res3)
                }).catch(error => {
                    console.log(error)
                });
            } else {
                let data2 = {
                    "token": this.props.jobt_token,
                    "requisition_name": this.props.job.job_details.id
                }
                axios.post("https://atsapi.jobtarget.com/api/employer/jobs/jobdetails", data2, config).then((res2) => {
                    console.log(res2);
                    if (res2.data.status == 0 || res2.data.status == "0") {
                        this.setState({ marketplace_iframe: res2.data.marketplace_iframe, showIframe: true, loading: false })
                        let data3 = { "job_id": this.props.job.job_details.id, "jobt_job_id": res2.data.job_id }
                        axios.post("jobs/job-target-job-id-update", data3, config).then((res3) => {
                            console.log(res3)
                        }).catch(error => {
                            console.log(error)
                        });
                    }
                }).catch(error => {
                    console.log(error)
                });
            }
        }).catch(error => {
            console.log(error)
        });
        //Segment info
        window?.analytics?.track("Job - View Job Target", {
            viewJobtargetTime: Date()?.toLocaleString(),
        });
    }

    render() {
        let position_detail = this.props.postedJobs[this.props.job.job_details.positions_id];
        let subreviewers = position_detail?.subreviewers;
        let exReviewers = position_detail?.ex_reviewers;
        let applicants = position_detail?.applicants;
        let isClosed = position_detail?.is_closed;
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
                {this.state.requestListShow ?
                    <div className="container-fluid py-5 px-3">
                        <SourcingRequestList
                            setrequestListHide={this.setrequestListHide}
                            job={this.props.job.job_details}
                            user={this.props.user}
                            profile={this.props.profile}
                            employerProfileDetail={this.props.employerProfileDetail}
                        />
                    </div> :
                    <div className="container-fluid py-5 px-3">
                        <Heading as='h5' size='xs' color="muted" mb='3' pl='2'>Overview</Heading>
                        {(!(this.props.profile.is_subreviwer || this.props.profile.is_external_reviewer)) &&
                            <div className="row">
                                <div className="pr-5 pl-4 pb-4">
                                    {this.state.requestButton == 0 &&
                                        <button
                                            className="default-btn5 interview-txt6"
                                            onClick={this.setShowRequest}
                                            style={{ paddingLeft: "25px", width: "12rem" }}
                                        >
                                            Request Sourcing
                                            <span></span>
                                        </button>}
                                    {this.state.requestButton == 1 &&
                                        <button
                                            className="default-btn5 interview-txt6"
                                            style={{ paddingLeft: "25px", backgroundColor: "#ffffff", width: "12rem", color: "#ff6b00", border: "1px solid #FF6B00" }}
                                        >
                                            Sourcing List Pending
                                            <span></span>
                                        </button>}
                                    {this.state.requestButton == 2 &&
                                        <button
                                            className="default-btn5 interview-txt6"
                                            onClick={() => { this.setState({ requestListShow: true }) }}
                                            style={{ paddingLeft: "25px", width: "12rem" }}
                                        >
                                            View Sourcing List
                                            <span></span>
                                        </button>}
                                </div>
                                <div className="pl-5 pb-4">
                                    <button
                                        className="default-btn8 interview-txt6"
                                        onClick={this.openJobTportal}
                                        style={{ paddingLeft: "25px", width: "12rem" }}
                                    >
                                        {this.state.loading ? <span><Spinner animation="border" size="sm" /> loading</span> : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/JT_logo_light_white.png" alt="jt-icon" />}
                                    </button>
                                    {isSafari &&
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle bx-sm' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "16rem", left: "36rem", marginTop: "-3rem" }}>
                                                <div>
                                                    If the iframe opens with an error, try going to Safari/Preferences/Privacy and uncheck Prevent cross-site tracking.
                                                </div>
                                            </p>
                                        </span>}
                                </div>
                            </div>}

                        {/*All Candidates*/}
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '2',
                                md: '3',
                            }}
                        >
                            <Stack>
                                <Flex>
                                    <Stack>
                                        <Button pt='5' ml='-10' leftIcon={<FiAlignCenter />} variant="link" onClick={this.props.renderAllCandidates}>All Candidates ({this.props?.analytics?.all_can_num})</Button>
                                        <HStack>
                                            <Text fontSize='sm' color="muted" pl='8'><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active: {this.props?.analytics?.all_can_act_num}</Text>
                                            <Text fontSize='sm' color="muted" fontWeight='bold' px='2'> | </Text>
                                            <Text fontSize='sm' color="muted"><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected: {this.props?.analytics?.all_can_rej_num}</Text>
                                        </HStack>
                                        <Box>
                                            {(exReviewers?.length > 0 && (!(this.props.profile.is_subreviwer || this.props.profile.is_external_reviewer))) &&
                                                <div style={{ width: "100%", height: "4rem", top: "0.3rem", position: "relative", textAlign: "left", paddingTop: "0.5rem", paddingLeft: "2rem" }}>
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
                                                    {exReviewers?.length > 3 &&
                                                        <span className="sub_number3" style={{ color: "white" }}>+{exReviewers?.length - 3}
                                                            <p className="sub_submenu container py-3" style={{ minWidth: "14.6rem" }}>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0.5rem" }}>Reviewers</p>
                                                                        {exReviewers.map((sub, i) => {
                                                                            return (
                                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                                    <p className="sub_submenu_inside container" style={{ minWidth: "12rem" }}>
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
                                        </Box>
                                    </Stack>
                                    <Spacer />
                                    <Box>
                                        {(!(this.props.profile.is_subreviwer || this.props.profile.is_external_reviewer)) &&
                                            <div style={{ marginRight: "3rem" }}>
                                                <div>
                                                    {(this.props.profile.membership == "Premium" || this.props.job.job_details.is_credited) &&
                                                        <button
                                                            className="default-btn1 interview-txt6 mt-4"
                                                            onClick={this.inviteExReviewer}
                                                            style={{ paddingLeft: "25px", width: "13.5rem" }}
                                                        >
                                                            + Add Hiring Manager
                                                            <span></span>
                                                        </button>}
                                                </div>
                                            </div>}
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>

                        {/*Resume Screening*/}
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '2',
                                md: '3',
                            }}
                            mt={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <Stack>
                                <Flex>
                                    <Stack>
                                        <Button pt='5' ml='-8' leftIcon={<FiFileText />} variant="link" onClick={this.props.renderResumeScreen}>Resume Review ({this.props?.analytics?.resume_num})</Button>
                                        <HStack>
                                            <Text fontSize='sm' color="muted" pl='8'><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active: {this.props?.analytics?.resume_num_act_num}</Text>
                                            <Text fontSize='sm' color="muted" fontWeight='bold' px='2'> | </Text>
                                            <Text fontSize='sm' color="muted"><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected: {this.props?.analytics?.resume_num_rej_num}</Text>
                                        </HStack>
                                        <Box>
                                            {resume_review_count > 0 &&
                                                <div style={{ width: "100%", height: "4rem", top: "0.3rem", position: "relative", textAlign: "left", paddingTop: "0.5rem", paddingLeft: "2rem" }}>
                                                    {subreviewers?.filter(sub1 => sub1.current_stage == "Resume Review").slice(0, 3).map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu container" style={{ minWidth: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-2 px-3 py-2">
                                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-10">
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
                                                                        {subreviewers?.filter(sub1 => sub1.current_stage == "Resume Review").map((sub, i) => {
                                                                            return (
                                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                                    <p className="sub_submenu_inside container" style={{ minWidth: "12rem" }}>
                                                                                        <div className="row">
                                                                                            <div className="col-2 px-2 py-2">
                                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                                            </div>
                                                                                            <div className="col-10">
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
                                        </Box>
                                    </Stack>
                                    <Spacer />
                                    <Box>
                                        <div style={{ marginRight: "3rem" }}>
                                            <div>
                                                {(this.props.profile.membership == "Premium" || this.props.job.job_details.is_credited) &&
                                                    <div>
                                                        <button
                                                            className="default-btn interview-txt6 mt-4"
                                                            style={{ paddingLeft: "25px", width: "13.5rem" }}
                                                            onClick={(e) => this.inviteReviever(e, "Resume Review")}
                                                        >
                                                            + Add Reviewer
                                                            <span></span>
                                                        </button>
                                                    </div>}
                                            </div>
                                        </div>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>

                        {/*Video Interview*/}
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '2',
                                md: '3',
                            }}
                            mt={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <Stack>
                                <Flex>
                                    <Stack>
                                        <Button pt='5' ml='-8' leftIcon={<FiVideo />} variant="link" onClick={this.props.renderVideoInterview}>Video Interview ({this.props?.analytics?.video_num})</Button>
                                        <HStack>
                                            <Text fontSize='sm' color="muted" pl='8'><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active: {this.props?.analytics?.video_num_act_num}</Text>
                                            <Text fontSize='sm' color="muted" fontWeight='bold' px='2'> | </Text>
                                            <Text fontSize='sm' color="muted"><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected: {this.props?.analytics?.video_num_rej_num}</Text>
                                        </HStack>
                                        <Box>
                                            {video_review_count > 0 &&
                                                <div style={{ width: "100%", height: "4rem", top: "0.3rem", position: "relative", textAlign: "left", paddingTop: "0.5rem", paddingLeft: "2rem" }}>
                                                    {subreviewers?.filter(sub1 => sub1.current_stage == "Video Interview").slice(0, 3).map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu container" style={{ minWidth: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-2 px-3 py-2">
                                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-10">
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
                                                                        {subreviewers?.filter(sub1 => sub1.current_stage == "Video Interview").map((sub, i) => {
                                                                            return (
                                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                                    <p className="sub_submenu_inside container" style={{ minWidth: "12rem" }}>
                                                                                        <div className="row">
                                                                                            <div className="col-2 px-2 py-2">
                                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                                            </div>
                                                                                            <div className="col-10">
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
                                        </Box>
                                    </Stack>
                                    <Spacer />
                                    <Box>
                                        <div style={{ marginRight: "3rem" }}>
                                            <div>
                                                {(this.props.profile.membership == "Premium" || this.props.job.job_details.is_credited) &&
                                                    <div>
                                                        <button
                                                            className="default-btn interview-txt6 mt-4"
                                                            style={{ paddingLeft: "25px", width: "13.5rem" }}
                                                            onClick={(e) => this.inviteReviever(e, "Video Interview")}
                                                        >
                                                            + Add Reviewer
                                                            <span></span>
                                                        </button>
                                                    </div>}
                                            </div>
                                        </div>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>

                        {/*Live Interview*/}
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '2',
                                md: '3',
                            }}
                            mt={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <Stack>
                                <Flex>
                                    <Stack>
                                        <Button pt='5' ml='-12' leftIcon={<FiMessageCircle />} variant="link" onClick={this.props.renderLiveInterview}>Live Interview ({this.props?.analytics?.live_num})</Button>
                                        <HStack>
                                            <Text fontSize='sm' color="muted" pl='8'><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active: {this.props?.analytics?.live_num_act_num}</Text>
                                            <Text fontSize='sm' color="muted" fontWeight='bold' px='2'> | </Text>
                                            <Text fontSize='sm' color="muted"><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected: {this.props?.analytics?.live_num_rej_num}</Text>
                                        </HStack>
                                        <Box>
                                            {live_review_count > 0 &&
                                                <div style={{ width: "100%", height: "4rem", top: "0.3rem", position: "relative", textAlign: "left", paddingTop: "0.5rem", paddingLeft: "2rem" }}>
                                                    {subreviewers?.filter(sub1 => sub1.current_stage == "Live Interview").slice(0, 3).map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu container" style={{ minWidth: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-2 px-3 py-2">
                                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-10">
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
                                                                        {subreviewers?.filter(sub1 => sub1.current_stage == "Live Interview").map((sub, i) => {
                                                                            return (
                                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                                    <p className="sub_submenu_inside container" style={{ minWidth: "12rem" }}>
                                                                                        <div className="row">
                                                                                            <div className="col-2 px-2 py-2">
                                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                                            </div>
                                                                                            <div className="col-10">
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
                                        </Box>
                                    </Stack>
                                    <Spacer />
                                    <Box>
                                        <div style={{ marginRight: "3rem" }}>
                                            <div>
                                                {(this.props.profile.membership == "Premium" || this.props.job.job_details.is_credited) &&
                                                    <div>
                                                        <button
                                                            className="default-btn interview-txt6 mt-4"
                                                            style={{ paddingLeft: "25px", width: "13.5rem" }}
                                                            onClick={(e) => this.inviteReviever(e, "Live Interview")}
                                                        >
                                                            + Add Reviewer
                                                            <span></span>
                                                        </button>
                                                    </div>}
                                            </div>
                                        </div>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>

                        {/*Short List*/}
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '2',
                                md: '3',
                            }}
                            mt={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <Stack>
                                <Flex>
                                    <Stack>
                                        <Button pt='5' ml='-20' leftIcon={<FiHeart />} variant="link" onClick={this.props.renderShortList}>Short List ({this.props?.analytics?.short_num})</Button>
                                        <HStack>
                                            <Text fontSize='sm' color="muted" pl='8'><span className="dot" style={{ backgroundColor: "#0DC68E" }}></span>Active: {this.props?.analytics?.short_num_act_num}</Text>
                                            <Text fontSize='sm' color="muted" fontWeight='bold' px='2'> | </Text>
                                            <Text fontSize='sm' color="muted"><span className="dot" style={{ backgroundColor: "#FF5830" }}></span>Rejected: {this.props?.analytics?.short_num_rej_num}</Text>
                                        </HStack>
                                        <Box>
                                            {shortlist_review_count > 0 &&
                                                <div style={{ width: "100%", height: "4rem", top: "0.3rem", position: "relative", textAlign: "left", paddingTop: "0.5rem", paddingLeft: "2rem" }}>
                                                    {subreviewers?.filter(sub1 => sub1.current_stage == "Short List").slice(0, 3).map((sub, i) => {
                                                        return (
                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                <p className="sub_submenu container" style={{ minWidth: "12rem" }}>
                                                                    <div className="row">
                                                                        <div className="col-2 px-3 py-2">
                                                                            <span className={`sub_number${i}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                        </div>
                                                                        <div className="col-10">
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
                                                                        {subreviewers?.filter(sub1 => sub1.current_stage == "Short List").map((sub, i) => {
                                                                            return (
                                                                                <span className={`sub_number_inside${i % 10} m-1`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}
                                                                                    <p className="sub_submenu_inside container" style={{ minWidth: "12rem" }}>
                                                                                        <div className="row">
                                                                                            <div className="col-2 px-2 py-2">
                                                                                                <span className={`sub_number_inside${i % 10}`} style={{ color: "white" }}>{sub.r_name.substring(0, 2).toUpperCase()}</span>
                                                                                            </div>
                                                                                            <div className="col-10">
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
                                        </Box>
                                    </Stack>
                                    <Spacer />
                                    <Box>
                                        <div style={{ marginRight: "3rem" }}>
                                            <div>
                                                {(this.props.profile.membership == "Premium" || this.props.job.job_details.is_credited) &&
                                                    <div>
                                                        <button
                                                            className="default-btn interview-txt6 mt-4"
                                                            style={{ paddingLeft: "25px", width: "13.5rem" }}
                                                            onClick={(e) => this.inviteReviever(e, "Short List")}
                                                        >
                                                            + Add Reviewer
                                                            <span></span>
                                                        </button>
                                                    </div>}
                                            </div>
                                        </div>
                                    </Box>
                                </Flex>
                            </Stack>
                        </Box>

                        {/* Open Sourcing Form */}
                        <MyModal80
                            show={this.state.showRequestForm}
                            onHide={this.setHideRequest}
                        >
                            <SourcingRequestForm
                                setHideRequest={this.setHideRequest}
                                job={this.props.job.job_details}
                                user={this.props.user}
                                profile={this.props.profile}
                            />
                        </MyModal80>
                        {/* Open Job Target Portal */}
                        <MyModal80
                            show={this.state.showIframe}
                            onHide={this.setHideRequest1}
                        >
                            <div>
                                <iframe src={this.state.marketplace_iframe} style={{ width: "100%", height: "50rem" }}></iframe>
                            </div>
                        </MyModal80>
                    </div>}
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