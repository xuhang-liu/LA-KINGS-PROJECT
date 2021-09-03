import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML } from "../../../redux/actions/job_actions";
import axios from "axios";
import { MyModalShare } from "../DashboardComponents";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

export class JobCard extends Component {

    state = {
        showShare: false,
    }

    openShare = () => {
        this.setState({ showShare: true });
    }

    disableShowShare = () => {
        this.setState({ showShare: false });
    }

    editJob = () => {
        let id = this.props.job.job_details.id;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1); }, 300);

    };

    archiveJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "isClosed": true,
            "userId": this.props.user.id,
        }
        this.props.archiveJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
    };

    deleteJob = () => {
        let id = this.props.job.job_details.id;
        let data = {
            "id": id,
            "userId": this.props.user.id,
        }
        this.props.deleteJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
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
            setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1); this.props.getPJobs(); this.props.getZRFeedXML() }, 300);
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

    render() {
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
                <div className="row interview-txt7 interview-center " style={{ color: "#7D7D7D", height: "2rem", marginBottom: "0.5rem" }}>
                    <div className="col-3 interview-txt9 mt-2">
                        {this.props.job.un_view ? <span className="dot"></span> : <span className="dot" style={{ visibility: "hidden" }}></span>}
                        <button
                            className="title-button2"
                            onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.enableView(); sessionStorage.setItem("view", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                        >
                            {this.props.job.job_details.job_title.length > 24 ? (this.props.job.job_details.job_title.substring(0, 22) + "...") : (this.props.job.job_details.job_title)}
                        </button>
                    </div>
                    <div className="col-1 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.job_id.length > 6 ? (this.props.job.job_details.job_id?.substring(0, 4) + "...") : (this.props.job.job_details.job_id)}</div>
                    <div className="col-1 interview-txt9 d-flex justify-content-center mt-2">
                        <button
                            className="title-button2"
                            onClick={() => { this.props.setJobKey(this.props.curJobKey); this.props.enableView(); sessionStorage.setItem("view", "true"); sessionStorage.setItem("jobKey", String(this.props.curJobKey)) }}
                        >
                            {this.props.job.total_records}
                        </button>
                    </div>
                    <div className="col-2 interview-txt9 d-flex justify-content-center mt-2">{this.props.job.job_details.create_date.substring(0, 10)}</div>
                    <div className="col-3 interview-txt9 d-flex justify-content-center mt-2" style={{ display: "flex", alignItems: "center" }}>
                        <a className="title-button2 tool_tip" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }} href={this.props.job.job_details.job_url}>
                            <i className="bx-fw bx bx-show"></i>Preview
                            <p className="tool_submenu container" style={{ width: "9rem", left: "1rem" }}>
                                <div>
                                    See what your job posting page looks like.
                                </div>
                            </p>
                        </a>
                        <button className="title-button2 tool_tip" onClick={this.openShare}>
                            <i className="bx-fw bx bx-link-external"></i>Share
                            <p className="tool_submenu container" style={{ width: "9rem", left: "3rem" }}>
                                <div>
                                    Get a unique link to your job posting and one-click share to social media.
                                </div>
                            </p>
                        </button>
                        <MyModalShare
                            show={this.state.showShare}
                            onHide={() => { this.disableShowShare() }}
                        >
                            <div class="container py-4">
                                <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem" }}>Share this Job</h3>
                                <div className="row ml-0" style={{ position: "relative", background: "#F4F5FD", borderRadius: "5px", border: "1px solid #67A3F3", width: "90%", height: "3rem", left: "2rem" }}>
                                    <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                                        <p style={{ fontSize: "0.8rem" }} onClick={() => { this.copyAlert(); navigator.clipboard.writeText(this.props.job.job_details.job_url); this.disableShowShare() }}>{this.props.job.job_details.job_url}</p>
                                    </div>
                                    <div className="py-1">
                                        <button onClick={() => { this.copyAlert(); navigator.clipboard.writeText(this.props.job.job_details.job_url); this.disableShowShare() }}
                                            className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                            <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                        </button>
                                    </div>
                                </div>
                                <div id="resume-hr"><hr /></div>
                                <p className="share-p">Share on other platforms</p>
                                <div className="single-footer-widget1" style={{textAlign:'center'}}>
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
                    <div className="col-2 interview-txt9 mt-2">
                        <ActionButton
                            filter={this.props.filter}
                            archiveJob={this.archiveJob}
                            activateJob={this.activateJob}
                            deleteJob={this.deleteJob}
                            renderJobEdition={this.props.renderJobEdition}
                            setJobInfo={this.props.setJobInfo}
                            jobInfo={this.props.job.job_details}
                            applicantsNum={this.props.job.total_records}
                            curJobKey={this.props.curJobKey}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const ActionButton = (props) => {
    const [intCanNumBo, setIntCanNumBo] = useState(false); //false means not greater than 0
    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "curJobKey": props.curJobKey };

        axios.post("job/check-interview-candidates-num", data, config).then((res) => {
            setIntCanNumBo(res.data['intCanNumBo']);
        }).catch(error => {
            console.log(error)
        });
    }, []);
    let filter = props.filter;
    function deleteAlert() {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this job?",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => props.deleteJob()
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    return (
        <div>
            {filter == "active" ?
                <div className="row">
                    <div className="profile-edit">
                        <i className="bx bx-edit-alt"></i>
                        <span className="tool_tip" style={{ cursor: "pointer" }} onClick={() => { props.setJobInfo(props.jobInfo); props.renderJobEdition() }}>
                            Edit
                            <p className="tool_submenu container" style={{ width: "9rem", left: "1rem" }}>
                                <div>
                                    Edit job posting.
                                </div>
                            </p>
                        </span>
                    </div>
                    {(props.applicantsNum > 0 || intCanNumBo) ?
                        <div className="profile-edit" style={{ color: "#F36F67", marginLeft: "5%" }}>
                            <i className="bx bx-box"></i>
                            <span style={{ cursor: "pointer" }} onClick={props.archiveJob} className="tool_tip">Archive
                                <p className="tool_submenu container" style={{ width: "14rem", left: "2rem" }}>
                                    <div>
                                        This will close the position on job boards. You can reactivate the job at any time.
                                    </div>
                                </p>
                            </span>
                        </div> :
                        <div className="profile-edit" style={{ color: "#F36F67", marginLeft: "5%" }}>
                            <i className="bx bx-trash"></i>
                            <span style={{ cursor: "pointer" }} onClick={deleteAlert} className="tool_tip">Delete
                                <p className="tool_submenu container" style={{ width: "12rem", left: "2rem" }}>
                                    <div>
                                        You cannot recover the job posting after deleting it.
                                    </div>
                                </p>
                            </span>
                        </div>}
                </div> :
                <div className="row">
                    <div className="profile-edit">
                        <span style={{ cursor: "pointer" }} onClick={props.activateJob}>Reactivate</span>
                    </div>
                </div>
            }
        </div>


    );
}

export default withRouter(connect(null, { updateJob, archiveJob, getAllJobs, deleteJob, getZRFeedXML })(
    JobCard
));