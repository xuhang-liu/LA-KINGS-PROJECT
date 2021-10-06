import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addReviewNote, getReviewNote } from "../../../../redux/actions/question_actions";

export class ReviewNote extends Component {

    state = {
        comment: "",
    };

    updateReview = () => {
        if (this.props.filter == "closed") {
            return alert("Current job is closed, you can't make any change");
        }
        // identify employer or reviewer
        let reviewer_type = "";
        if (this.props.profile.is_subreviwer) {
            reviewer_type = "sub_reviewer";
        }
        else if (this.props.profile.is_external_reviewer) {
            reviewer_type = "external_reviewer";
        }
        let data = {
            reviewer: this.props.reviewer,
            comment: this.state.comment,
            applicant_email: this.props.applicantEmail,
            position_id: this.props.positionId,
            reviewer_type: reviewer_type,
            reviewer_email: this.props.reviewerEmail,
        }
        this.setState({comment:""});
        this.props.addReviewNote(data);
        setTimeout(() => { this.props.getReviewNote(this.props.positionId, this.props.applicantEmail) }, 300);
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-border">
                    <div className="row">
                        <div className="col-9">
                            <h3 className="note-h3">Reviews</h3>
                            {/* map here */}
                            {this.props.reviews.length > 0 &&
                                <div className="note-border2">
                                    {this.props.reviews.map((r) => {
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
                            {this.props.evaluations.length > 0 &&
                                <div className="note-border2">
                                    {this.props.evaluations.map((eva) => {
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
                    <div className="row">
                        <textarea
                            className="note-border3"
                            style={{ height: "26rem", width: "92%" }}
                            type="text"
                            value={this.state.comment}
                            placeholder="Write your comment here"
                            onChange={(e) => { this.setState({ comment: e.target.value }) }}
                        />
                    </div>
                    <div className="row" style={{ justifyContent: "flex-end" }}>
                        <button
                            style={{ marginRight: "5%", marginBottom: "2rem" }}
                            className="default-btn d-flex"
                            onClick={this.updateReview}
                        >
                            <i className="bx bxs-send"></i>Post
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => ({
    reviews: state.question_reducer.reviews,
});

export default withRouter(connect(mapStateToProps, { addReviewNote, getReviewNote })(
    ReviewNote
));