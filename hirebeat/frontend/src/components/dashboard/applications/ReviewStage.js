import React, { Component } from "react";
import Collapse from 'react-bootstrap/Collapse'

export class ReviewStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showResumeReview: this.props.currentStage == "Resume Review" || false,
            showVideoInterview: this.props.currentStage == "Video Interview" || false,
            showLiveInterview: this.props.currentStage == "Live Interview" || false,
            showShortList: this.props.currentStage == "Short List" || false,
        }
    }

    categoryReviews = () => {
        let stageToReviews = {
            "resumeReview": [],
            "videoInterview": [],
            "liveInterview": [],
            "shortList": [],
        };
        let reviews = this.props.reviews;
        let isReviewer = this.props.reviewerType == "subr";
        let email = this.props.user.email;
        for (let i = 0; i < reviews?.length; i++) {
            if (reviews[i]?.current_stage == "Resume Review") {
                if (isReviewer) {
                    if (email == reviews[i].reviewer_email) {
                        stageToReviews["resumeReview"].push(reviews[i]);
                    }
                }
                else {
                    stageToReviews["resumeReview"].push(reviews[i]);
                }
            }
            else if (reviews[i]?.current_stage == "Video Interview") {
                if (isReviewer) {
                    if (email == reviews[i].reviewer_email) {
                        stageToReviews["videoInterview"].push(reviews[i]);
                    }
                }
                else {
                    stageToReviews["videoInterview"].push(reviews[i]);
                }
            }
            else if (reviews[i]?.current_stage == "Live Interview") {
                if (isReviewer) {
                    if (email == reviews[i].reviewer_email) {
                        stageToReviews["liveInterview"].push(reviews[i]);
                    }
                }
                else {
                    stageToReviews["liveInterview"].push(reviews[i]);
                }
            }
            else if (reviews[i]?.current_stage == "Short List") {
                if (isReviewer) {
                    if (email == reviews[i].reviewer_email) {
                        stageToReviews["shortList"].push(reviews[i]);
                    }
                }
                else {
                    stageToReviews["shortList"].push(reviews[i]);
                }
            }
        }
        return stageToReviews;
    }

    categoryEvaluations = () => {
        let stageToEvaluations = {
            "resumeReview": [],
            "videoInterview": [],
            "liveInterview": [],
            "shortList": [],
        }
        let evaluations = this.props.evaluations;
        let isReviewer = this.props.reviewerType == "subr";
        let email = this.props.user.email;
        for (let i = 0; i < evaluations?.length; i++) {
            if (evaluations[i]?.current_stage == "Resume Review") {
                if (isReviewer) {
                    if (email == evaluations[i].reviewer_email) {
                        stageToEvaluations["resumeReview"].push(evaluations[i]);
                    }
                }
                else {
                    stageToEvaluations["resumeReview"].push(evaluations[i]);
                }
            }
            else if (evaluations[i]?.current_stage == "Video Interview") {
                if (isReviewer) {
                    if (email == evaluations[i].reviewer_email) {
                        stageToEvaluations["videoInterview"].push(evaluations[i]);
                    }
                }
                else {
                    stageToEvaluations["videoInterview"].push(evaluations[i]);
                }
            }
            else if (evaluations[i]?.current_stage == "Live Interview") {
                if (isReviewer) {
                    if (email == evaluations[i].reviewer_email) {
                        stageToEvaluations["liveInterview"].push(evaluations[i]);
                    }
                }
                else {
                    stageToEvaluations["liveInterview"].push(evaluations[i]);
                }
            }
            else if (evaluations[i]?.current_stage == "Short List") {
                if (isReviewer) {
                    if (email == evaluations[i].reviewer_email) {
                        stageToEvaluations["shortList"].push(evaluations[i]);
                    }
                }
                else {
                    stageToEvaluations["shortList"].push(evaluations[i]);
                }
            }
        }
        return stageToEvaluations;
    }


    switchResumeReview = () => {
        this.setState({showResumeReview: !this.state.showResumeReview});
    }

    switchVideoInterview = () => {
        this.setState({showVideoInterview: !this.state.showVideoInterview});
    }

    switchLiveInterview = () => {
        this.setState({showLiveInterview: !this.state.showLiveInterview});
    }

    switchShortList = () => {
        this.setState({showShortList: !this.state.showShortList});
    }

    render() {
        const stageToReviews = this.categoryReviews();
        const stageToEvaluations = this.categoryEvaluations();
        return (
            <div>
                {/* Resume Review */}
                {this.state.showResumeReview ?
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showResumeReview} onClick={this.switchResumeReview}>Resume Review<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showResumeReview} onClick={this.switchResumeReview}>Resume Review<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                }
                <Collapse in={this.state.showResumeReview}>
                    <div className="container-fluid">
                        {(stageToReviews["resumeReview"].length == 0 && stageToEvaluations["resumeReview"].length == 0) ?
                            <div className="no-review">No reviews yet</div>:
                            <div className="row">
                                <div className="col-9">
                                    <h3 className="note-h3">Reviews</h3>
                                    {/* map here */}
                                    {stageToReviews["resumeReview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToReviews["resumeReview"].map((r) => {
                                                let name = r.reviewer.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span">{name + ":"}</span> {r.comment}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="col-3" style={{ marginLeft: "-1rem" }}>
                                    <h3 className="note-h3">Evaluation
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "14rem", left:"0" }}>
                                                <div>
                                                    The decision from reviewers will be listed here.
                                                </div>
                                            </p>
                                        </span>
                                    </h3>
                                    {/* map here */}
                                    {stageToEvaluations["resumeReview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToEvaluations["resumeReview"].map((eva) => {
                                                let name = eva.reviewer_name.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span" style={{ marginLeft: "0.5rem", marginRight: "0rem" }}>{name + ":"}</span>
                                                            {
                                                                eva.evaluation == 1 ? <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} /> :
                                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} />
                                                            }
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                        </div>
                    }
                    </div>
                </Collapse>

                {/* Video Interview */}
                {this.state.showVideoInterview ?
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showVideoInterview} onClick={this.switchVideoInterview}>Video Interview<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showVideoInterview} onClick={this.switchVideoInterview}>Video Interview<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                }
                <Collapse in={this.state.showVideoInterview}>
                    <div className="container-fluid">
                        {(stageToReviews["videoInterview"].length == 0 && stageToEvaluations["videoInterview"].length == 0) ?
                            <div className="no-review">No reviews yet</div>:
                            <div className="row">
                                <div className="col-9">
                                    <h3 className="note-h3">Reviews</h3>
                                    {/* map here */}
                                    {stageToReviews["videoInterview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToReviews["videoInterview"].map((r) => {
                                                let name = r.reviewer.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span">{name + ":"}</span> {r.comment}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="col-3" style={{ marginLeft: "-1rem" }}>
                                    <h3 className="note-h3">Evaluation
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "14rem", left:"0" }}>
                                                <div>
                                                    The decision from reviewers will be listed here.
                                                </div>
                                            </p>
                                        </span>
                                    </h3>
                                    {/* map here */}
                                    {stageToEvaluations["videoInterview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToEvaluations["videoInterview"].map((eva) => {
                                                let name = eva.reviewer_name.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span" style={{ marginLeft: "0.5rem", marginRight: "0rem" }}>{name + ":"}</span>
                                                            {
                                                                eva.evaluation == 1 ? <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} /> :
                                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} />
                                                            }
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </Collapse>

                {/* Live Interview */}
                {this.state.showLiveInterview ?
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showLiveInterview} onClick={this.switchLiveInterview}>Live Interview<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showLiveInterview} onClick={this.switchLiveInterview}>Live Interview<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                }
                <Collapse in={this.state.showLiveInterview}>
                    <div className="container-fluid">
                        {(stageToReviews["liveInterview"].length == 0 && stageToEvaluations["liveInterview"].length == 0) ?
                            <div className="no-review">No reviews yet</div>:
                            <div className="row">
                                <div className="col-9">
                                    <h3 className="note-h3">Reviews</h3>
                                    {/* map here */}
                                    {stageToReviews["liveInterview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToReviews["liveInterview"].map((r) => {
                                                let name = r.reviewer.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span">{name + ":"}</span> {r.comment}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="col-3" style={{ marginLeft: "-1rem" }}>
                                    <h3 className="note-h3">Evaluation
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "14rem", left:"0" }}>
                                                <div>
                                                    The decision from reviewers will be listed here.
                                                </div>
                                            </p>
                                        </span>
                                    </h3>
                                    {/* map here */}
                                    {stageToEvaluations["liveInterview"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToEvaluations["liveInterview"].map((eva) => {
                                                let name = eva.reviewer_name.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span" style={{ marginLeft: "0.5rem", marginRight: "0rem" }}>{name + ":"}</span>
                                                            {
                                                                eva.evaluation == 1 ? <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} /> :
                                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} />
                                                            }
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </Collapse>

                {/* Short List */}
                {this.state.showShortList ?
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showShortList} onClick={this.switchShortList}>Short List<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                    <div className="pricing-toggle-stripe" aria-expanded={this.state.showShortList} onClick={this.switchShortList}>Short List<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                }
                <Collapse in={this.state.showShortList}>
                    <div className="container-fluid">
                        {(stageToReviews["shortList"].length == 0 && stageToEvaluations["shortList"].length == 0) ?
                            <div className="no-review">No reviews yet</div>:
                            <div className="row">
                                <div className="col-9">
                                    <h3 className="note-h3">Reviews</h3>
                                    {/* map here */}
                                    {stageToReviews["shortList"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToReviews["shortList"].map((r) => {
                                                let name = r.reviewer.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span">{name + ":"}</span> {r.comment}
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                                <div className="col-3" style={{ marginLeft: "-1rem" }}>
                                    <h3 className="note-h3">Evaluation
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "14rem", left:"0" }}>
                                                <div>
                                                    The decision from reviewers will be listed here.
                                                </div>
                                            </p>
                                        </span>
                                    </h3>
                                    {/* map here */}
                                    {stageToEvaluations["shortList"].length > 0 &&
                                        <div className="note-border2">
                                            {stageToEvaluations["shortList"].map((eva) => {
                                                let name = eva.reviewer_name.split("@")[0];
                                                return (
                                                    <div style={{ marginBottom: "0.5rem" }}>
                                                        <p className="note-p">
                                                            <span className="note-span" style={{ marginLeft: "0.5rem", marginRight: "0rem" }}>{name + ":"}</span>
                                                            {
                                                                eva.evaluation == 1 ? <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/good-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} /> :
                                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bad-circle.png" style={{ width: "1.25rem", marginLeft: "2rem" }} />
                                                            }
                                                        </p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ReviewStage;