import React, { Component } from "react";
import { addVideoReviews } from "../../redux/actions/video_actions";
import { addVideoLabels } from "../../redux/actions/video_actions";
import { connect } from "react-redux";

export class Reviews extends Component {
  state = {
    // expert
    score: 0,
    postitiveAttitude: 0,
    communication: 0,
    detailOriented: 0,
    teamSpirit: 0,
    stressTolerance: 0,
    comments: "",
    // ai
    ai_score: 0,
    ai_positiveAttitude: 0,
    ai_communication: 0,
    ai_detailOriented: 0,
    ai_teamSpirit: 0,
    ai_stressTolerance: 0,
    // ai label
    label: false,
    sentence: -1,
    subCategory: -1,
  };

  labelMetaData = {
    label: this.state.label,
    sentence: this.state.sentence,
    subCategory: this.state.subCategory,
    };
  // this.props.addVideoReviews   add label to db

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      score: Math.round((Number(this.state.postitiveAttitude)+Number(this.state.communication)+Number(this.state.detailOriented)+Number(this.state.teamSpirit)+Number(this.state.stressTolerance))/5),
      ai_score: Math.round((Number(this.state.ai_positiveAttitude)+Number(this.state.ai_communication)+Number(this.state.ai_detailOriented)+Number(this.state.ai_teamSpirit)+Number(this.state.ai_stressTolerance))/5),
    });
  };

  cancatenateScores = () => {
    var ans = "";
    ans += this.state.postitiveAttitude + ",";
    ans += this.state.communication + ",";
    ans += this.state.detailOriented + ",";
    ans += this.state.teamSpirit + ",";
    ans += this.state.stressTolerance;
    console.log(ans);
    return ans;
  };

  cancatenateAIScores = () => {
    var ans = "";
    ans += this.state.ai_positiveAttitude + ",";
    ans += this.state.ai_communication + ",";
    ans += this.state.ai_detailOriented + ",";
    ans += this.state.ai_teamSpirit + ",";
    ans += this.state.ai_stressTolerance;
    console.log(ans);
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
    this.doAsync(this.props.addVideoReviews, this.props.nextVideo);
  };

  scoreField = (title, name, value) => {
    return (
      <div className="form-inline" style={{marginBottom:"1%"}}>
        <div className="col-9" style={{padding:"0px"}}>
          <label className="review-text" style={{fontSize:"15px", color:"#000000", justifyContent:"left"}}>{title}</label>
        </div>
        <div className="col-sm-3" style={{padding:"0px"}}>
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
  }

  expertReviews = () => {
    var categories = this.getCategories();
    return (
      <div className="form-group">
        <p className="review-text" style={{fontSize:"20px"}}>Expert Score</p>
        <div className="row">
          <div className="col-6">
            {this.scoreField(categories[0], "postitiveAttitude", this.state.postitiveAttitude)}
            {this.scoreField(categories[1], "communication", this.state.communication)}
            {this.scoreField(categories[2], "detailOriented", this.state.detailOriented)}
            {this.scoreField(categories[3], "teamSpirit", this.state.teamSpirit)}
            {this.scoreField(categories[4], "stressTolerance", this.state.stressTolerance)}
            {this.scoreField("Overall", "score", this.state.score)}
          </div>
          <div className="col" style={{paddingLeft:"0px"}}>
            <label className="review-text" style={{fontSize:"15px", color:"#000000"}}>Comments for expert review</label>
            <textarea
              className="form-control"
              rows="9"
              spellCheck="true"
              name="comments"
              onChange={this.handleInputChange}
              style={{padding:"0px", border:"1px solid #E5E5E5", borderRadius:"5px"}}
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
        <p className="review-text" style={{fontSize:"20px"}}>AI Score</p>
        <div className="col-6" style={{paddingLeft:"0px"}}>
          {this.scoreField(aiCategories[0], "ai_positiveAttitude", this.state.ai_positiveAttitude)}
          {this.scoreField(aiCategories[1], "ai_communication", this.state.ai_communication)}
          {this.scoreField(aiCategories[2], "ai_detailOriented", this.state.ai_detailOriented)}
          {this.scoreField(aiCategories[3], "ai_teamSpirit", this.state.ai_teamSpirit)}
          {this.scoreField(aiCategories[4], "ai_stressTolerance", this.state.ai_stressTolerance)}
          {this.scoreField("Overall", "ai_score", this.state.ai_score)}
        </div>
      </div>
    );
  };

  render() {
    return (
      <form>
        <div className="review-align" style={{marginTop:"8%"}}>
          <div className="container" style={{ marginBottom: "3%" }}>
            <fieldset>
              {this.props.needed_ai_review && !this.props.is_ai_reviewed
                ? this.aiReviews()
                : null}
              <br />
              <br />
              {this.props.needed_expert_review && !this.props.is_expert_reviewed
                ? this.expertReviews()
                : null}
            </fieldset>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row" style={{margin:"auto"}}>
        <button
          type="submit"
          className="not-reviewed text-15"
          onClick={this.submitReview}
          style={{color:"#FFFFFF", display:"inline-block", width:"8rem"}}>
          Submit
        </button>
        <a href="/" className="review-text" style={{marginLeft:"6%", color:"#7D7D7D", fontSize:"130%"}}>Skip</a>
        </div>
      </form>
    );
  }
}

export default connect(null, { addVideoReviews, addVideoLabels })(Reviews);
