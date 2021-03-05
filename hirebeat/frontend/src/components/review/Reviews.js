import React, { Component } from "react";
import { addVideoReviews } from "../../redux/actions/video_actions";
import { getVideoUser } from "../../redux/actions/video_sentence_actions";
import { connect } from "react-redux";
import emailjs from 'emailjs-com';
import ReviewLabel from "./ReviewLabel";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class Reviews extends Component {
  state = {
    // expert
    score: 0,
    postitiveAttitude: 0,
    communication: 0,
    detailOriented: 0,
    teamSpirit: 0,
    stressTolerance: 0,
    leadership: 0,
    comments: "",
    // ai
    ai_score: 0,
    ai_positiveAttitude: 0,
    ai_communication: 0,
    ai_detailOriented: 0,
    ai_teamSpirit: 0,
    ai_stressTolerance: 0,
    ai_leadership: 0,
    // ai label
    label: false,
    sentence: -1,
    subCategory: -1,
    // button states
    isSubmitted: false,
    emailSent: false,
  };

  setSubmitted = () => {
      this.setState({ ...this.state, isSubmitted: true });
  }

  setEmailSent = () => {
      this.setState({ ...this.state, emailSent: true });
  }

  componentDidMount() {
    this.props.getVideoUser(this.props.videoID);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      score: Math.round((Number(this.state.postitiveAttitude)+Number(this.state.communication)+Number(this.state.detailOriented)+Number(this.state.teamSpirit)+Number(this.state.stressTolerance)+Number(this.state.leadership))/6),
      ai_score: Math.round((Number(this.state.ai_positiveAttitude)+Number(this.state.ai_communication)+Number(this.state.ai_detailOriented)+Number(this.state.ai_teamSpirit)+Number(this.state.ai_stressTolerance)+Number(this.state.ai_leadership))/6),
    });
  };

  sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('default_service', 'template_d52ulu8', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!", null);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  sendEmailNotice = (e) => {
    this.sendEmail(e);
    this.setEmailSent();
  }

  cancatenateScores = () => {
    var ans = "";
    ans += this.state.postitiveAttitude + ",";
    ans += this.state.communication + ",";
    ans += this.state.detailOriented + ",";
    ans += this.state.teamSpirit + ",";
    ans += this.state.stressTolerance + ",";
    ans += this.state.leadership;
//    console.log(ans);
    return ans;
  };

  cancatenateAIScores = () => {
    var ans = "";
    ans += this.state.ai_positiveAttitude + ",";
    ans += this.state.ai_communication + ",";
    ans += this.state.ai_detailOriented + ",";
    ans += this.state.ai_teamSpirit + ",";
    ans += this.state.ai_stressTolerance + ",";
    ans += this.state.ai_leadership;
//    console.log(ans);
    return ans;
  };

  // use async to make sure reviews are added before fetching the next video
  async doAsync(method1, method2) {
    await method1(
      // fake ai
      this.state.ai_score,
      this.cancatenateAIScores(),
      // real expert
      this.state.score,
      this.cancatenateScores(),
      this.state.comments,
      // video id
      this.props.videoID
    );
    method2();
  }

  submitReview = () => {
//    this.doAsync(this.props.addVideoReviews, this.props.nextVideo);
    this.props.addVideoReviews(
        this.state.ai_score,
        this.cancatenateAIScores(),
        this.state.score,
        this.cancatenateScores(),
        this.state.comments,
        this.props.videoID);
    alert("Submission Success", "You submitted the review successfully!");
    this.setSubmitted();
  };

  scoreField = (title, name, value) => {
    return (
      <div className="form-inline" style={{marginBottom:"1%"}}>
        <div className="col-8" style={{padding:"0px"}}>
          <label className="review-text" style={{fontSize:"15px", color:"#000000", justifyContent:"left"}}>{title}</label>
        </div>
        <div className="col-sm-4" style={{padding:"0px"}}>
          <input
            type="number"
            step="1"
            class="form-control review-text"
            min="0"
            max="10"
            name={name}
            value={value}
            placeholder={value}
            onChange={this.handleInputChange}
            required="required"
            style={{width:"75%",height:"50%", padding:"7%", 
                    border:"1px solid #E5E5E5", borderRadius:"5px", 
                    textAlign:"center",color:"#FF6B00", fontSize:"15px"}}
          />
        </div>
        <br />
      </div>
    );
  };

  getCategories = () => {
    var str = this.props.expert_review_categories;
    var categories = str.split(",");
    return categories;
  };

  expertReviews = () => {
    var categories = this.getCategories();
    return (
      <div className="form-group">
        <div className="row">
          <div className="col-7">
            <p className="review-text" style={{fontSize:"20px"}}>Expert Score</p>
            {this.scoreField(categories[0], "postitiveAttitude", this.state.postitiveAttitude)}
            {this.scoreField(categories[1], "communication", this.state.communication)}
            {this.scoreField(categories[2], "detailOriented", this.state.detailOriented)}
            {this.scoreField(categories[3], "teamSpirit", this.state.teamSpirit)}
            {this.scoreField(categories[4], "stressTolerance", this.state.stressTolerance)}
            {this.scoreField(categories[5], "leadership", this.state.leadership)}
            {this.scoreField("Overall", "score", this.state.score)}
          </div>
          <div className="col" style={{paddingLeft:"0px"}}>
            <label className="review-text" style={{fontSize:"20px"}}>Comments</label>
            <textarea
              className="form-control"
              rows="9"
              spellCheck="true"
              name="comments"
              onChange={this.handleInputChange}
              style={{padding:"0px", border:"1px solid #E5E5E5", borderRadius:"5px", fontSize: "1.2rem"}}
            />
          </div>
        </div>
      </div>
    );
  };

  aiReviews = () => {
    var aiCategories = this.getCategories();
    // var aiCategories = categories.map((category) => "AI " + category);
    return (
      <div className="form-group">
        <div className="col-12" style={{paddingLeft:"0px"}}>
          <p className="review-text" style={{fontSize:"20px"}}>AI Score</p>
          {this.scoreField(aiCategories[0], "ai_positiveAttitude", this.state.ai_positiveAttitude)}
          {this.scoreField(aiCategories[1], "ai_communication", this.state.ai_communication)}
          {this.scoreField(aiCategories[2], "ai_detailOriented", this.state.ai_detailOriented)}
          {this.scoreField(aiCategories[3], "ai_teamSpirit", this.state.ai_teamSpirit)}
          {this.scoreField(aiCategories[4], "ai_stressTolerance", this.state.ai_stressTolerance)}
          {this.scoreField(aiCategories[5], "ai_leadership", this.state.ai_leadership)}
          {this.scoreField("Overall", "ai_score", this.state.ai_score)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div style={{width: "100%"}}>
            <div className="review-align" style={{width: "95%", margin: "auto"}}  >
              <div style={{ marginBottom: "3%", padding: "2rem", width: "95%", margin: "auto" }}>
                {this.props.needed_ai_review && !this.props.is_ai_reviewed ? (
                    <ReviewLabel
                      sentences={this.props.sentences}
                      subcategories={this.props.subcategories}
                    />) : null}
                    <fieldset>
                      <div className="row" style={{marginTop: "3rem"}}>
                        <div className="col-5">
                          {this.props.needed_ai_review && !this.props.is_ai_reviewed
                            ? this.aiReviews()
                            : null}
                        </div>
                        <div className="col-7">
                          {this.props.needed_expert_review && !this.props.is_expert_reviewed
                            ? this.expertReviews()
                            : null}
                        </div>
                      </div>
                      <div className="row" style={{justifyContent: "center"}}>
                        <form onSubmit={this.sendEmailNotice}>
                          <input type='hidden' name="email" value={this.props.email}></input>
                          <button
                            type="submit"
                            disabled={this.state.emailSent}
                            className= {this.state.emailSent ? "under-review text-15" : "not-reviewed text-15"}
                            style={{color:"#FFFFFF", display:"inline-block", width:"10rem", marginRight:'1rem'}}>
                              Send Notification
                          </button>
                        </form>
                        <form onSubmit={this.submitReview}>
                          <button
                            type="submit"
                            className= {this.state.isSubmitted ? "under-review text-15" : "not-reviewed text-15"}
                            disabled={this.state.isSubmitted}
                            style={{color:"#FFFFFF", display:"inline-block", width:"10rem"}}>
                              Submit Review
                          </button>
                        </form>
                      </div>
                    </fieldset>
              </div>
            </div>
      </div>
    );
  }
}

function  alert(title, message){
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
  };

const mapStateToProps = (state) => ({
  email: state.video_user_reducer.email,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { addVideoReviews, getVideoUser })(Reviews);
