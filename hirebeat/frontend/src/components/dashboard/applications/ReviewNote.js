import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addReviewNote, getReviewNote } from "../../../redux/actions/question_actions";

export class ReviewNote extends Component {

    state = {
        comment: "",
    };

    updateReview = () => {
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
        this.props.addReviewNote(data);
        setTimeout(() => {this.props.getReviewNote(this.props.positionId, this.props.applicantEmail)}, 300);
    }

    render() {
        return (
            <React.Fragment>
                <div className="note-border">
                    <h3 className="note-h3">Reviews</h3>
                    {/* map here */}
                    <div className="note-border2">
                        {this.props.reviews.map((r) => {
                            let name = r.reviewer.split("@")[0];
                            return(
                                <div style={{marginBottom: "0.5rem"}}>
                                    <p className="note-p">
                                    <span className="note-span">{name + ":"}</span> {r.comment}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <textarea
                        className="note-border3"
                        style={{height: "26rem", width: "92%"}}
                        type="text"
                        value={this.state.comment}
                        placeholder="Write your comment here"
                        onChange={(e)=>{this.setState({comment :e.target.value})}}
                    />
                    <div className="row" style={{justifyContent: "flex-end"}}>
                        <button
                            style={{marginRight: "5%", marginBottom: "2rem"}}
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