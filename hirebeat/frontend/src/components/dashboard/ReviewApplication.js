import React, { Component } from 'react';
import { IconText } from "./DashboardComponents";
import ApplicationVideo from "./videos/ApplicationVideo";
import { connect } from "react-redux";
import { getPostedJobs, getResumeURL, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation } from "../../redux/actions/question_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReviewNote from "./applications/ReviewNote";

class ReviewApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewResume: (sessionStorage.getItem("subpageStatus") == "video" || sessionStorage.getItem("subpageStatus") == "note") ? false : true,
            viewVideo: (sessionStorage.getItem("subpageStatus") == "video" ? true : false) || false,
            viewNotes: (sessionStorage.getItem("subpageStatus") == "note" ? true : false) || false,
        }
    }

    setViewResume = () => {
        this.setState({
            viewResume: true,
            viewVideo: false,
            viewNotes: false,
        })
    }

    setViewVideo = () => {
        this.setState({
            viewResume: false,
            viewVideo: true,
            viewNotes: false,
        })
    }

    setViewNotes = () => {
        this.setState({
            viewResume: false,
            viewVideo: false,
            viewNotes: true,
        })
    }

    updateStatus = (status) => {
        let data = {
            "email": this.props.applicants[this.props.current].email,
            "positionId": this.props.positionId,
            "status": status,
            "userId": this.props.user.id
        };
        this.props.updateCommentStatus(data);
        setTimeout(() => { this.props.getPJobs() }, 200);
    }

    updateEvaluation = (evaluation) => {
        // identify employer or reviewer
        let reviewer_type = "";
        if (this.props.profile.is_subreviwer) {
            reviewer_type = "sub_reviewer";
        }
        else if (this.props.profile.is_external_reviewer) {
            reviewer_type = "external_reviewer";
        }
        let data = {
            evaluation: evaluation,
            applicant_email: this.props.applicants[this.props.current].email,
            position_id: this.props.positionId,
            reviewer_type: reviewer_type,
            reviewer_email: this.props.user.email,
        }
        this.props.addOrUpdateReviewerEvaluation(data);
        setTimeout(() => {
            this.props.getReviewerEvaluation(this.props.positionId, this.props.applicants[this.props.current].email);
            this.props.getCurrentReviewerEvaluation(this.props.positionId, this.props.applicants[this.props.current].email, this.props.user.email);
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
        if (resumeScore == "-1"){
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

    render() {
        const recordTime = this.props.recordTime;
        const interviewResume = this.props.interviewResume;
        const candidateInfo = this.props.applicants[this.props.current];
        const resumeScore = Math.max(interviewResume.result_rate?interviewResume.result_rate:0, candidateInfo.result_rate?candidateInfo.result_rate:0);
        return (
            <div className="container-fluid ml-5 mb-5" style={{ width: '95%' }}>
                <div style={{ marginBottom: "30px" }}><h3><b><i className="bx-fw bx bx-microphone"></i><span className="ml-2">Interview / Review Candidate</span></b></h3></div>
                <div className="col d-flex align-items-center pl-0">
                    <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.hide}
                        style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                    >
                        <div className="center-items back-to-text">
                            <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to List</p>
                        </div>
                    </button>
                </div>
                <div className="row" style={{ display: "flex" }}>
                    <div className="col-3 pl-3 mt-3 pr-2">
                        <div className="resume-box p-4" style={{ background: "white", borderRadius: "10px", width: "100%", height: "25%", minHeight: "14rem" }}>
                            <div className="row mb-3" style={{ marginBottom: "2%" }}>
                                <div className="col d-flex align-items-center">
                                    <h4
                                        style={{
                                            fontWeight: "bold",
                                            marginRight: "0.8rem",
                                            wordWrap: "break-word",
                                            wordBreak: "break-all",
                                        }}
                                    >
                                        {this.props.applicants[this.props.current].name.length > 14 ?
                                            this.props.applicants[this.props.current].name.substring(0, 12) + "..." :
                                            this.props.applicants[this.props.current].name}
                                    </h4>
                                </div>
                            </div>
                            <div className="row mb-2" style={{ marginTop: "1%" }}>
                                <div className="col d-flex align-items-center">
                                    <IconText
                                        iconName={"bx bx-phone bx-sm"}
                                        textDisplayed={this.props.applicants[this.props.current].phone}
                                        textSize={"12px"}
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
                                        textSize={"12px"}
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
                                        textSize={"12px"}
                                        textColor={"#0B3861"}
                                        iconMargin={"3px"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="resume-box mt-4 p-4" style={{ background: "white", borderRadius: "10px", width: "100%", position: "relative", minHeight: "28rem" }}>
                            <h2
                                style={{
                                    fontWeight: "600",
                                    marginRight: "0.8rem",
                                    wordWrap: "break-word",
                                    wordBreak: "break-all",
                                    color: "#090D3A",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Evaluation Scale
                            </h2>
                            <div>
                                {/*(this.props.recordTime != "" && this.props.recordTime != null) &&
                                    <div className="row mt-5 pl-3">
                                        Recorded on: {this.props.recordTime.substring(0, 10)}
                                    </div>
                                */}
                                <div className="mt-5 px-4" style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
                                    {this.renderResume(resumeScore)}
                                </div>
                                <div className="row" style={{ justifyContent: "center" }}>
                                    {((this.props.interviewResume.result_rate != "-1") || (candidateInfo.result_rate != "-1" )) &&
                                        <button
                                            onClick={() => { setTimeout(() => { this.showResumeEva() }, 200) }}
                                            className="interview-txt9 mt-3 ml-3"
                                            style={{ color: "#67A3F3", border: "none", background: "white" }}
                                        >
                                            <i className="bx bx-arrow-to-right interview-txt9" style={{ color: "#67A3F3" }}></i> Resume Evaluation
                                        </button>}
                                </div>
                                {/*<div className="row">
                                    {((this.props.resumeURL != "")&&(this.props.resumeURL != null)) &&
                                    <button className="default-btn mt-3 ml-3" onClick={() => {setTimeout(()=>{this.props.setShowResume(true);}, 200)}} >
                                        <i className="bx bx-file"></i>View Resume
                                    </button>}
                                </div>*/}
                            </div>
                            {!this.props.profile.is_subreviwer &&
                                <div>
                                    {this.props.commentStatus == 1 ?
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button className="default-btn ml-2" style={{ width: "8rem", fontSize: "0.8rem", backgroundColor:"#13c4a1" }}>
                                                <i class='bx bx-bookmark-plus'></i>Shortlist
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#E8EDFC", width: "8rem", fontSize: "0.8rem" }}
                                                onClick={this.props.filter == "active" ? (() => { this.updateStatus(1); this.props.refresh()}) : this.jobClosedAlert}>
                                                <i class='bx bx-bookmark-plus' style={{ color: "#090D3A" }}></i>Shortlist
                                            </button>
                                        </div>
                                    }
                                    {this.props.commentStatus == 2 ?
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button className="default-btn ml-2" style={{ width: "8rem", fontSize: "0.8rem", backgroundColor:"#ff6b00" }}>
                                                <i class='bx bx-help-circle'></i>Hold
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#E8EDFC", width: "8rem", fontSize: "0.8rem" }}
                                                onClick={this.props.filter == "active" ? (() => { this.updateStatus(2); this.props.refresh()}) : this.jobClosedAlert}>
                                                <i class='bx bx-help-circle' style={{ color: "#090D3A" }}></i>Hold
                                            </button>
                                        </div>
                                    }
                                    {this.props.commentStatus == 3 ?
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button className="default-btn ml-2" style={{ width: "8rem", fontSize: "0.8rem", backgroundColor:"#ff0000" }}>
                                                <i class='bx bx-calendar-x'></i>Reject
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#E8EDFC", width: "8rem", fontSize: "0.8rem" }}
                                                onClick={this.props.filter == "active" ? (() => { this.updateStatus(3); this.props.refresh()}) : this.jobClosedAlert}>
                                                <i class='bx bx-calendar-x' style={{ color: "#090D3A" }}></i>Reject
                                            </button>
                                        </div>
                                    }
                                </div>
                            }
                            {(this.props.profile.is_subreviwer || this.props.profile.is_external_reviewer) &&
                                <div>
                                    {this.props.curEvaluation.evaluation == 1 ?
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn btn-success ml-2"
                                                style={{ width: "9rem", fontSize: "0.8rem", display: "flex", paddingLeft: "25px", background: "#13C4A1" }}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-white.png" style={{ width: "1.25rem", marginRight: "0.5rem" }} />
                                                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Qualified</p>
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#ffffff", width: "9rem", fontSize: "0.8rem", display: "flex", paddingLeft: "25px", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }}
                                                onClick={this.props.filter == "active" ? () => {this.updateEvaluation(1)} : this.jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good.png" style={{ width: "1.25rem", marginRight: "0.5rem" }} />
                                                <p style={{ fontSize: "0.8rem", color: "#13C4A1" }}>Qualified</p>
                                            </button>
                                        </div>
                                    }
                                    {this.props.curEvaluation.evaluation == 2 ?
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn btn-danger ml-2"
                                                style={{ width: "9rem", fontSize: "0.8rem", display: "flex", paddingLeft: "25px", background: "#E42424" }}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-white.png" style={{ width: "1.25rem", marginRight: "0.5rem", paddingTop: "2%" }} />
                                                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Unqualified</p>
                                            </button>
                                        </div> :
                                        <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                            <button
                                                className="default-btn ml-2"
                                                style={{ color: "#090D3A", backgroundColor: "#ffffff", width: "9rem", fontSize: "0.8rem", display: "flex", paddingLeft: "25px", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }}
                                                onClick={this.props.filter == "active" ? () => {this.updateEvaluation(2)} : this.jobClosedAlert}>
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad.png" style={{ width: "1.25rem", marginRight: "0.5rem", paddingTop: "2%" }} />
                                                <p style={{ fontSize: "0.8rem", color: "#E42424" }}>Unqualified</p>
                                            </button>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-9 mt-3 pl-3 pr-2" >
                        <div className="resume-box p-4" style={{ background: "white", borderRadius: "10px" }}>
                            <div>
                                <h2
                                    className={this.state.viewResume ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewResume(); sessionStorage.setItem("subpageStatus", "resume") }}
                                >
                                    Resume
                                </h2>
                                <h2
                                    className={this.state.viewVideo ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewVideo(); sessionStorage.setItem("subpageStatus", "video") }}
                                >
                                    Video Interview
                                </h2>
                                <h2
                                    className={this.state.viewNotes ? "head-btn-selected" : "head-btn-unselected"}
                                    onClick={() => { this.setViewNotes(); sessionStorage.setItem("subpageStatus", "note") }}
                                >
                                    Evaluation Notes
                                </h2>
                            </div>
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
                                            <h3 style={{ marginTop: "10%", textAlign: "center", height: "38rem" }}>Candidate does not upload resume.</h3>
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
                                    updateStatus={this.updateStatus}
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
                                    reviewer={this.props.user.username}
                                    profile={this.props.profile}
                                    reviewerEmail={this.props.user.email}
                                    evaluations={this.props.evaluations}
                                    filter={this.props.filter}
                                />
                            }
                        </div>
                    </div>
                </div>
                {this.props.hasSwitch &&
                    <div className="row" style={{marginTop: "1.5rem", marginBottom: "1rem"}}>
                        <div className="col-3"/>
                        <div className="col-9" style={{textAlign: "center"}}>
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
                                style={{marginLeft: "2rem"}}
                            >
                                Next &gt;
                            </button>
                        </div>
                    </div>
                }
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

export default connect(mapStateToProps, {
    getPostedJobs, getResumeURL, getReviewNote, addOrUpdateReviewerEvaluation,
    getReviewerEvaluation, getCurrentReviewerEvaluation
})(ReviewApplication);