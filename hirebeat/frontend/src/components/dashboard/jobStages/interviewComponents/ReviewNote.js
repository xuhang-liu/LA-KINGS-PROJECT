import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addReviewNote, getReviewNote } from "../../../../redux/actions/question_actions";
import ReviewStage from "./ReviewStage";

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
            current_stage: this.props.currentStage,
        }
        this.setState({comment:""});
        this.props.addReviewNote(data);
        setTimeout(() => { this.props.getReviewNote(this.props.positionId, this.props.applicantEmail) }, 300);
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-border">
                    <ReviewStage
                        reviews={this.props.reviews}
                        evaluations={this.props.evaluations}
                        currentStage={this.props.currentStage}
                        user={this.props.user}
                        reviewerType={this.props.reviewerType}
                    />
                    <div className="row">
                        <textarea
                            className="note-border3"
                            style={{ height: "10rem", width: "92%" }}
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