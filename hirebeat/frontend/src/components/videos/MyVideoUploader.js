var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";
import { addVideo, addWPVideo } from "../../redux/actions/video_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  RecordDoneButton,
  BglessCardButton,
} from "../practice/CardComponents";
import { withRouter } from "react-router-dom";
//import {
//  random,
//  positiveAttitude,
//  workCommitment,
//  teamworkSkill,
//  leadership,
//  pressureHandling,
//  proactiveSkill,
//  workEthic,
//  creativity,
//  reliability,
//  detailOriented,
//  communicationSkill,
//  problemSolving
//} from "./../../constants/constants";

 // determine review categories
  function reviewCategories(q_category) {
//      var review_categories = "";
//      if(q_category === "Problem Solving") {
//        review_categories = problemSolving;
//      }
//      else if (q_category === "Positive Attitude") {
//        review_categories = positiveAttitude;
//      }
//      else if (q_category === "Work Commitment") {
//        review_categories = workCommitment;
//      }
//      else if (q_category === "Teamwork Skill") {
//        review_categories = teamworkSkill;
//      }
//      else if (q_category === "Leadership") {
//        review_categories = leadership;
//      }
//      else if (q_category === "Pressure Handling") {
//        review_categories = pressureHandling;
//      }
//      else if (q_category === "Proactive Skill") {
//        review_categories = proactiveSkill;
//      }
//      else if (q_category === "Work Ethic") {
//        review_categories = workEthic;
//      }
//      else if (q_category === "Creativity") {
//        review_categories = creativity;
//      }
//      else if (q_category === "Reliability") {
//        review_categories = reliability;
//      }
//      else if (q_category === "Detail Oriented") {
//        review_categories = detailOriented;
//      }
//      else if (q_category === "Communication Skill") {
//        review_categories = communicationSkill;
//      }
//      else {
//        review_categories = random;
//      }
//      return review_categories;
      return "Positive Attitude, Pressure Handling, Problem Solving, Commitment, Leadership, Teamwork";
  }

  // map question title(question table) to question type(video table)
  function matchQType(q_title) {
    return q_title == "BQ" ? "Behavior Question" : "Technique Question";
  }

export class MyVideoUploader extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  static propTypes = {
    addVideo: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    q_index: PropTypes.number.isRequired,
  };

  onUploadFinish = () => {
    //For safari support
    //var name = this.props.video.name.split(".")[0] + ".mp4";
    //var url = "https://hb-transcoded-videos.s3.amazonaws.com/" + name

    //For other browsers
    var name = this.props.video.name;

    // change bucket to "hirebeat-test-video-bucket" when run in local

    var url = "https://test-hb-videos.s3.amazonaws.com/" + name;
    //var url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + name;


    if (this.props.retry) {
        let retry_q_meta = this.props.retry_q_meta;
        const videoMetaData = {
            url: url,
            q_description: retry_q_meta.q_description,
            q_type: retry_q_meta.q_type,
            q_category: retry_q_meta.q_category,
            q_answer: retry_q_meta.q_answer,
            q_explain: retry_q_meta.q_explain,
            ai_review_categories: retry_q_meta.ai_review_categories,
            expert_review_categories: retry_q_meta.expert_review_categories,
        };
        this.props.addVideo(videoMetaData);
    } else {
        var q_category = `${this.props.questions[this.props.q_index].category}`;
        var q_description = `${this.props.questions[this.props.q_index].description}`;
        var q_title = `${this.props.questions[this.props.q_index].title}`;
        var q_answer = `${this.props.questions[this.props.q_index].answer}`;
        var q_explain = `${this.props.questions[this.props.q_index].explain}`;
        // insert MetaData to video table
        const videoMetaData = {
            url: url,
            q_description: q_description,
            q_type: matchQType(q_title),
            q_category: q_category,
            q_answer: q_answer,
            q_explain: q_explain,
            ai_review_categories: reviewCategories(q_category),
            expert_review_categories: reviewCategories(q_category),
        };

        this.props.addVideo(videoMetaData);
    }
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
    // if (this.props.saved_video_count < this.props.save_limit) {
    this.uploader.uploadFile(this.props.video);
    this.props.resetDeviceAndNextQuestion();
    // } else {
    //   this.props.createMessage({
    //     errorMessage: "Free saves limit reached. Please upgrade to premium plan.",
    //   });
    // }
  }

  handleUploadAndFinish = () => {
    // save wordpress video
    if (this.props.isCareerVideo) {
        // save data to database
        let name = this.props.video.name;
        let url = "https://hirebeat-wp-video.s3.amazonaws.com/" + name;
        let metaData = {
            "url": url,
            "email": this.props.email,
            "question_id": this.props.questionId,
            "question_desc": this.props.question,
        };
        this.props.addWPVideo(metaData);
        // upload video to S3
        this.uploader.uploadFile(this.props.video);
        // redirect back to career webpage
        return window.location.href = "https://career.hirebeat.co/";
    }

    // if (this.props.saved_video_count < this.props.save_limit) {
    this.uploader.uploadFile(this.props.video);
    this.props.goLoading();
    setTimeout(()=>{this.redirectToDashboard()}, 15000);
    // } else {
    //   this.props.createMessage({
    //     errorMessage: "Free saves limit reached. Please upgrade to premium plan.",
    //   });
    // }
  };

  redirectToDashboard = () => {
    // redirect to profile
    const { history } = this.props;
    if (history) history.push("/dashboard");
  };

  render() {
    var saveOnTap = this.handleUpload;
    var skipOnTap = this.props.resetDeviceAndNextQuestion;
    var saveText = "Save and Next";
    var skipText = "Discard and Next";

    if (this.props.last_q || this.props.questions.length == 1) {
      saveOnTap = this.handleUploadAndFinish;
      skipOnTap = this.redirectToDashboard;
      saveText = this.props.isCareerVideo ? "Submit" : "Save and Finish";
      skipText = "Discard and Finish";
    }
    return (
      <div>
        <div style={{ display: "none" }}>
          <ReactS3Uploader
            signingUrl= {this.props.isCareerVideo ? "/sign-wp-video" : "/sign_auth"}
            signingUrlMethod="GET"
            onError={this.onUploadError}
            onFinish={this.onUploadFinish}
            uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
            contentDisposition="auto"
            scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
            inputRef={(cmp) => (this.uploadInput = cmp)}
            ref={(uploader) => {
              this.uploader = uploader;
            }}
            autoUpload={true}
          />
        </div>
        <RecordDoneButton
          fontFamily={"Lato"}
          onTap={saveOnTap}
          textDisplayed={saveText}
          buttonWidth={"100%"}
          isAudio={this.props.isAudio}
        />
        {/*<VideoNumberLinkRow
          number_of_videos_to_save= "Unlimited"
          isAudio={this.props.isAudio}
          //upgrade={() => console.log("upgrade")}
        />
        {this.props.save_limit <= 5  &&
        <BglessCardButton1
          textDisplayed={"Upgrade Now ->"}
          buttonWidth={"100%"}
          fontFamily={"Avenir Next, Segoe UI"}
          isAudio={this.props.isAudio}
        />
        }*/}
          {this.props.isCareerVideo ? null : (
              <BglessCardButton
                  onTap={skipOnTap}
                  textDisplayed={skipText}
                  buttonWidth={"100%"}
                  fontFamily={"Avenir Next, Segoe UI"}
                  isAudio={this.props.isAudio}
              />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  q_index: state.question_reducer.q_index,
  save_limit: state.auth_reducer.profile.save_limit,
  saved_video_count: state.auth_reducer.profile.saved_video_count,
});

export default connect(mapStateToProps, { addVideo, createMessage, addWPVideo })(
  withRouter(MyVideoUploader)
);
