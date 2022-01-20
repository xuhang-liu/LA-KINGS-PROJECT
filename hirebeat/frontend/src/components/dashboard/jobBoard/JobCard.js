import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML, getZRPremiumFeedXML, switchJobClosedStatus, assignCreditToJob } from "../../../redux/actions/job_actions";
import { loadProfile } from "../../../redux/actions/auth_actions";
//import axios from "axios";
import Select from 'react-select';
import { MyModalShare, MyModalUpgrade } from "../DashboardComponents";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

export class JobCard extends Component {

    state = {
        showShare: false,
        next_select: { value: -1, text: '', icon: '', color: '' },
        showModel1: false,
        showModel2: false,
        showModel3: false,
        showUpgradeM: false,
        showPublishCredit: false,
        showCloseCredit: false,
    }

    hideshowModel1 = () => {
        this.setState({ showModel1: false });
    }

    hideshowModel2 = () => {
        this.setState({ showModel2: false });
    }

    hideshowModel3 = () => {
        this.setState({ showModel3: false });
    }

    setHideUpgradeM = () => {
        this.setState({ showUpgradeM: false });
    }

    hideshowPublishCredit = () => {
        this.setState({ showPublishCredit: false });
    }

    hideshowCloseCredit = () => {
        this.setState({ showCloseCredit: false });
    }

    customStyles = {
        control: styles => ({ ...styles, border: "none", marginTop: "-1rem" }),
        singleValue: styles => ({
            ...styles,
            color: '#090d3a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '600'
        }),
    };

    onFilter = (draft_select) => {
        if (this.props.job.job_details.is_closed != draft_select.value) {
            if (draft_select.value == 0) {
                if(this.props.job.job_details.is_credited){
                    this.setState({
                        showModel1: true
                    });
                }else{
                    if (this.props.profile.payg_credit <= 0){
                        if (this.props.profile.membership == "Regular"){
                            this.setState({
                                showUpgradeM: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium"){
                            this.setState({
                                showModel1: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro"){
                            if ((this.props.profile.position_count >= this.props.profile.position_limit) && (this.props.job.job_details.is_closed==1 || this.props.job.job_details.is_closed==3)){
                                this.setState({
                                    showUpgradeM: true
                                });
                            }else{
                                this.setState({
                                    showModel1: true
                                });
                            }
                        }
                    } else if (this.props.profile.payg_credit > 0) {
                        if (this.props.profile.membership == "Regular"){
                            this.setState({
                                showPublishCredit: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium"){
                            this.setState({
                                showModel1: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro"){
                            if ((this.props.profile.position_count >= this.props.profile.position_limit) && (this.props.job.job_details.is_closed==1 || this.props.job.job_details.is_closed==3)){
                                this.setState({
                                    showPublishCredit: true
                                });
                            }else{
                                this.setState({
                                    showModel1: true
                                });
                            }
                        }
                    }
                }
            } else if (draft_select.value == 2) {
                if(this.props.job.job_details.is_credited){
                    this.setState({
                        showModel2: true
                    });
                }else{
                    if (this.props.profile.payg_credit <= 0){
                        if (this.props.profile.membership == "Regular"){
                            this.setState({
                                showUpgradeM: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium"){
                            this.setState({
                                showModel2: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro"){
                            if ((this.props.profile.position_count >= this.props.profile.position_limit) && (this.props.job.job_details.is_closed==1 || this.props.job.job_details.is_closed==3)){
                                this.setState({
                                    showUpgradeM: true
                                });
                            }else{
                                this.setState({
                                    showModel2: true
                                });
                            }
                        }
                    } else if (this.props.profile.payg_credit > 0) {
                        if (this.props.profile.membership == "Regular"){
                            this.setState({
                                showCloseCredit: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium"){
                            this.setState({
                                showModel2: true
                            });
                        } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro"){
                            if ((this.props.profile.position_count >= this.props.profile.position_limit) && (this.props.job.job_details.is_closed==1 || this.props.job.job_details.is_closed==3)){
                                this.setState({
                                    showCloseCredit: true
                                });
                            }else{
                                this.setState({
                                    showModel2: true
                                });
                            }
                        }
                    }
                }
            } else if (draft_select.value == 1) {
                this.setState({
                    showModel3: true
                });
            }
            this.setState({ next_select: draft_select })
        }
    };

    switchJobStatus = () => {
        if (this.props.job?.reviewer_type == "subr") {
            return alert("No Permission!");
        }
        if (this.state.next_select.value == 0 || this.state.next_select.value == 2) {
            if (this.props.job.job_details.job_location == "" || this.props.job.job_details.job_location == null) {
                return alert("Job Location is required! Please edit your job.");
            } else if (this.props.job.job_details.job_description?.length < 12) {
                return alert("Job Description is required! Please edit your job.");
            } else if (this.props.job.job_details.job_title == "" || this.props.job.job_details.job_title == null) {
                return alert("Job Title is required! Please edit your job.");
            } else {
                let data = {
                    user_id: this.props.user.id,
                    job_id: this.props.job.job_details.id,
                    next_status: this.state.next_select.value
                }
                this.props.switchJobClosedStatus(data);
                setTimeout(() => { this.props.loadProfile(); this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
            }
        } else {
            let data = {
                user_id: this.props.user.id,
                job_id: this.props.job.job_details.id,
                next_status: this.state.next_select.value
            }
            this.props.switchJobClosedStatus(data);
            setTimeout(() => { this.props.loadProfile(); this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
        }
    }

    assignCreditToJob = () => {
        let data = {
            "user_id": this.props.user.id,
            "job_id": this.props.job.job_details.id
        }
        this.props.assignCreditToJob(data);
    }

    openShare = () => {
        this.setState({ showShare: true });
    }

    disableShowShare = () => {
        this.setState({ showShare: false });
    }

    editJob = () => {
        let id = this.props.job.job_details.id;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1, "", "", ""); }, 300);

    };

    archiveJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": true,
            "userId": this.props.user.id,
        }
        this.props.archiveJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
    };

    deleteJobs = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "userId": this.props.user.id,
        }
        this.props.deleteJob(data);
        setTimeout(() => { this.props.loadProfile(); this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
    };

    activateJob = () => {
        if ((this.props.profile.position_count) >= (this.props.profile.position_limit)) {
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'Exceed max number of positions! Upgrade now to get more active positions',
                buttons: [
                    { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                    { label: 'OK' },
                ]
            });
        } else {
            let id = this.props.job.job_details.id;
            let data = {
                "id": id,
                "isClosed": false,
                "userId": this.props.user.id,
            }
            this.props.archiveJob(data);
            setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
        }
    };

    copyAlert = () => {
        confirmAlert({
            title: "URL Coppied to Clipboard!",
            message: "",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    }

    deleteAlert = () => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this job?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: this.deleteJobs
                },
                {
                    label: 'No'
                }
            ]
        });
    }

    render() {
        var draft_select = {};
        if (this.props.job.job_details.is_closed == 0) {
            draft_select = { value: 0, text: 'Published', icon: 'bx bxs-circle', color: '#13c4a1' };
        } else if (this.props.job.job_details.is_closed == 1) {
            draft_select = { value: 1, text: 'Archived', icon: 'bx bxs-box', color: '#090d3a' };
        } else if (this.props.job.job_details.is_closed == 2) {
            draft_select = { value: 2, text: 'Closed', icon: 'bx bxs-circle', color: '#090d3a' };
            if (this.props.job.job_details.job_title.includes("External")) {
                draft_select = { value: 0, text: 'External', icon: 'bx bxs-circle', color: '#13c4a1' };
            }
        } else if (this.props.job.job_details.is_closed == 3) {
            draft_select = { value: 3, text: 'Draft', icon: 'bx bxs-circle', color: '#9cb2c2' };
        }

        var options = (this.props.job.job_details.job_title.includes("External")) ? ([]) : ((this.props.job.job_details.is_closed != 3) ? ([
            { value: 0, text: 'Published', icon: 'bx bxs-circle', color: '#13c4a1' },
            { value: 2, text: 'Closed', icon: 'bx bxs-circle', color: '#090d3a' },
            { value: 1, text: 'Archived', icon: 'bx bxs-box', color: '#090d3a' },
        ]) : ([
            { value: 0, text: 'Published', icon: 'bx bxs-circle', color: '#13c4a1' },
        ]));
        return (
            <div id="show-jobs-actions">
                <hr
                    style={{
                        border: "1px solid #E5E5E5",
                    }}
                />
                <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginBottom: "0.5rem" }}>
                    <div className="col-2 interview-txt9 mt-2">
                        <Select isSearchable={false} value={draft_select} onChange={this.onFilter} options={options} styles={this.customStyles} className="select-category-jobs-closed1" getOptionLabel={e => (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <i style={{ color: e.color }} class={e.icon}></i>
                                <span style={{ marginLeft: "0.5rem" }}>{e.text}</span>
                            </div>
                        )} />
                    </div>
                    <div className="col-4 interview-txt9 mt-2">
                        {this.props.job.un_view ? <span className="dot"></span> : <span className="dot" style={{ visibility: "hidden" }}></span>}
                        {(this.props.job.job_details.is_closed == 0 || this.props.job.job_details.is_closed == 2) ?
                            <button
                                className="title-button2"
                                onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.setViewPortal(true); this.props.setJob_back_home(); sessionStorage.setItem("viewPortal", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                            >
                                {this.props.job.job_details.job_title?.length > 38 ? (this.props.job.job_details.job_title.substring(0, 36) + "...") : (this.props.job.job_details.job_title)}
                            </button> :
                            <button
                                className="title-button2-nohover"
                            >
                                {this.props.job.job_details.job_title?.length > 38 ? (this.props.job.job_details.job_title.substring(0, 36) + "...") : (this.props.job.job_details.job_title)}
                            </button>
                        }
                    </div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.job_id?.length > 12 ? (this.props.job.job_details.job_id?.substring(0, 10) + "...") : (this.props.job.job_details.job_id)}</div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">
                        {(this.props.job.job_details.is_closed == 0 || this.props.job.job_details.is_closed == 2) ?
                            <button
                                className="title-button2"
                                onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.setViewPortal(true); this.props.setJob_back_home(); sessionStorage.setItem("viewPortal", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                            >
                                {this.props.job.total_records}
                            </button> :
                            <button
                                className="title-button2-nohover">
                                {this.props.job.total_records}
                            </button>
                        }
                    </div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.create_date.substring(0, 10)}</div>
                </div>
                <div id="jobs-actions-hover" className="row interview-txt7 interview-center">
                    <div className="col-2 interview-txt9 mt-2">
                    </div>
                    <div className="col-6 interview-txt9 mt-1">
                        <div className="d-flex justify-content-start" style={{ display: "flex", alignItems: "center", paddingLeft: "1rem" }}>
                            {((this.props.job.job_details.is_closed == 0 || this.props.job.job_details.is_closed == 3) && (this.props.job?.reviewer_type != "subr")) &&
                                <button className="title-button2 tool_tip" onClick={() => { this.props.setJobInfo(this.props.job.job_details); this.props.renderJobEdition() }} style={{ color: "#4a6f8a", fontWeight: "500", fontSize: "0.9rem", borderRight: "0.5px solid #4A6F8A", paddingRight: "1rem" }}>
                                    <i className="bx-fw bx bx-edit-alt"></i>Edit
                                    <p className="tool_submenu container" style={{ width: "10rem", left: "1rem" }}>
                                        <div>
                                            Edit job posting.
                                        </div>
                                    </p>
                                </button>
                            }
                            {this.props.job.job_details.is_closed != 3 &&
                                <a className="title-button2 tool_tip" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#4a6f8a", fontWeight: "500", fontSize: "0.9rem", borderRight: "0.5px solid #4A6F8A", paddingRight: "1rem", paddingLeft: "0.5rem" }} href={this.props.job.job_details.job_url}>
                                    <i className="bx-fw bx bx-show"></i>View
                                    <p className="tool_submenu container" style={{ width: "10rem", left: ((this.props.job.job_details.is_closed == 0 || this.props.job.job_details.is_closed == 3) && (this.props.job?.reviewer_type != "subr")) ? "5rem" : "2rem" }}>
                                        <div>
                                            See what your job posting page looks like.
                                        </div>
                                    </p>
                                </a>
                            }
                            {this.props.job.job_details.is_closed != 3 &&
                                <button className="title-button2 tool_tip" onClick={this.openShare} style={{ color: "#4a6f8a", fontWeight: "500", fontSize: "0.9rem", borderRight: (this.props.job?.reviewer_type != "subr") ? "0.5px solid #4A6F8A" : "", paddingRight: (this.props.job?.reviewer_type != "subr") ? "1rem" : "" }}>
                                    <i className="bx-fw bx bx-link-external"></i>Share
                                    <p className="tool_submenu container" style={{ width: "10rem", left: ((this.props.job.job_details.is_closed == 0 || this.props.job.job_details.is_closed == 3) && (this.props.job?.reviewer_type != "subr")) ? "10rem" : "5rem" }}>
                                        <div>
                                            Get a unique link to your job posting and one-click share to social media.
                                        </div>
                                    </p>
                                </button>
                            }
                            {(this.props.job?.reviewer_type != "subr") &&
                                <div>
                                    {(this.props.job.total_records <= 0) ?
                                        <button className="title-button2 tool_tip" onClick={this.deleteAlert} style={{ color: "#F36F67", fontWeight: "500", fontSize: "0.9rem" }}>
                                            <i className="bx-fw bx bx-trash"></i>Delete
                                            <p className="tool_submenu container" style={{ width: "10rem", left: (this.props.job.job_details.is_closed != 3) ? "15rem" : "6rem" }}>
                                                <div>
                                                    You cannot recover the job posting after deleting it.
                                                </div>
                                            </p>
                                        </button> :
                                        <button className="title-button2 tool_tip" style={{ color: "#e1e9f4", fontWeight: "500", fontSize: "0.9rem", cursor: "default" }}>
                                            <i className="bx-fw bx bx-trash"></i>Delete
                                        </button>}
                                </div>
                            }
                            <MyModalShare
                                show={this.state.showShare}
                                onHide={() => { this.disableShowShare() }}
                            >
                                <div class="container py-4">
                                    <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem" }}>Share this Job</h3>
                                    <div className="row ml-0" style={{ position: "relative", background: "#F4F5FD", borderRadius: "5px", border: "1px solid #006dff", width: "90%", height: "3rem", left: "2rem" }}>
                                        <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                                            <p style={{ fontSize: "0.8rem" }} onClick={() => { this.copyAlert(); navigator.clipboard.writeText(this.props.job.job_details.job_url?.replaceAll(' ', '%20')); this.disableShowShare() }}>{this.props.job.job_details.job_url}</p>
                                        </div>
                                        <div className="py-1">
                                            <button onClick={() => { this.copyAlert(); navigator.clipboard.writeText(this.props.job.job_details.job_url?.replaceAll(' ', '%20')); this.disableShowShare() }}
                                                className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                                <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                            </button>
                                        </div>
                                    </div>
                                    <div id="resume-hr"><hr /></div>
                                    <p className="share-p">Share on other platforms</p>
                                    <div className="single-footer-widget1" style={{ textAlign: 'center' }}>
                                        <ul className="social">
                                            <li>
                                                <FacebookShareButton
                                                    url={this.props.job.job_details.job_url}
                                                    quote={this.props.job.job_details.job_title + " at " + this.props.profile.company_name}
                                                    hashtag={this.props.profile.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-facebook"></i>
                                                    </a>
                                                </FacebookShareButton>
                                            </li>
                                            <li>
                                                <TwitterShareButton
                                                    url={this.props.job.job_details.job_url}
                                                    title={this.props.job.job_details.job_title + " at " + this.props.profile.company_name}
                                                    via={this.props.profile.company_name}
                                                    hashtag={this.props.profile.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-twitter"></i>
                                                    </a>
                                                </TwitterShareButton>
                                            </li>
                                            <li>
                                                <LinkedinShareButton
                                                    url={this.props.job.job_details.job_url}
                                                    title={this.props.job.job_details.job_title + " at " + this.props.profile.company_name}
                                                    source={this.props.profile.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-linkedin"></i>
                                                    </a>
                                                </LinkedinShareButton>
                                            </li>
                                            <li>
                                                <WhatsappShareButton
                                                    url={this.props.job.job_details.job_url}
                                                    title={this.props.job.job_details.job_title + " at " + this.props.profile.company_name}>
                                                    <a target="_blank" rel="noreferrer">
                                                        <i className="bx bxl-whatsapp"></i>
                                                    </a>
                                                </WhatsappShareButton>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </MyModalShare>
                        </div>
                    </div>
                </div>
                <MyModalUpgrade
                    show={this.state.showModel1}
                    onHide={this.hideshowModel1}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Publish Job Post</h3>
                        <p className="pt-3">Once published, the unique job URL will be available on the internet and can be shared immediately.</p>
                        <p className="pt-3">The job will also appear on other applicable job boards within 24 hours.</p>
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-3">
                                <button onClick={() => { this.switchJobStatus(); this.hideshowModel1() }} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Publish</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.hideshowModel1} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                <MyModalUpgrade
                    show={this.state.showModel2}
                    onHide={this.hideshowModel2}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Close Job Position</h3>
                        <p className="pt-3">Closing a job position will remove it from all job boards.</p>
                        <p className="pt-3">The Job URL is still public so any related links will not break. However, the Job will be display as "Closed" to applicants.</p>
                        <div className="row">
                            <div className="col-2" />
                            <div className="col-4">
                                <button onClick={() => { this.switchJobStatus(); this.hideshowModel2() }} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Close Job</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.hideshowModel2} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                <MyModalUpgrade
                    show={this.state.showModel3}
                    onHide={this.hideshowModel3}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Archive Job Position</h3>
                        <p className="pt-3">Once the job is archived, it will be taken down from all job boards.</p>
                        <p className="pt-3">You will no long be able to manage candidates in the pipeline.</p>
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-3">
                                <button onClick={() => { this.switchJobStatus(); this.hideshowModel3() }} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Archive</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.hideshowModel3} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                <MyModalUpgrade
                    show={this.state.showUpgradeM}
                    onHide={this.setHideUpgradeM}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Upgrade Needed</h3>
                        <p className="pt-3">Please upgrade or purchase a plan to publish your job.</p>
                        <div className="row" style={{ margin: "auto", width: "80%" }}>
                            <div className="col-6">
                                <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                            </div>
                            <div className="col-6">
                                <button onClick={this.setHideUpgradeM} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                <MyModalUpgrade
                    show={this.state.showPublishCredit}
                    onHide={this.hideshowPublishCredit}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Publish Job Post</h3>
                        <p className="pt-3">You now have <span>{this.props.profile.payg_credit}</span> credits available. Please confirm you want to apply <b>ONE</b> credit on this specific job. This action is non-revertible.</p>
                        <p>Once published, the unique job URL will be available on the internet and can be shared immediately.</p>
                        <p>The job will also appear on other applicable job boards within 24 hours.</p>
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-3">
                                <button onClick={() => { this.switchJobStatus(); this.assignCreditToJob(); this.hideshowPublishCredit() }} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Confirm</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.hideshowPublishCredit} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
                <MyModalUpgrade
                    show={this.state.showCloseCredit}
                    onHide={this.hideshowCloseCredit}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Close Job Position</h3>
                        <p className="pt-3">You now have <span>{this.props.profile.payg_credit}</span> credits available. Please confirm you want to apply <b>ONE</b> credit on this specific job. This action is non-revertible.</p>
                        <p>Closing a job position will remove it from all job boards.</p>
                        <p>The Job URL is still public so any related links will not break. However, the Job will be displayed as "Closed" to applicants.</p>
                        <div className="row">
                            <div className="col-3" />
                            <div className="col-3">
                                <button onClick={() => { this.switchJobStatus(); this.assignCreditToJob(); this.hideshowCloseCredit() }} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Confirm</button>
                            </div>
                            <div className="col-6">
                                <button onClick={this.hideshowCloseCredit} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML, getZRPremiumFeedXML, switchJobClosedStatus, assignCreditToJob, loadProfile })(
    JobCard
));