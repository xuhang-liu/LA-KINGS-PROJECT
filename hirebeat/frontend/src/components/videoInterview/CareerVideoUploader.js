var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";
import { addWPVideo } from "../../redux/actions/video_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { updateRecord } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  VideoNumberLinkRow,
  RecordDoneButton,
  BglessCardButton,
  BglessCardButton1,
} from "../practice/CardComponents";
import { withRouter } from "react-router-dom";


export class CareerVideoUploader extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  static propTypes = {
    addWPVideo: PropTypes.func.isRequired,
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
    var url = "https://hirebeat-wp-video.s3.amazonaws.com/" + name;
    //var url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + name;

    // save data to database
    var metaData = {
        "url": url,
        "email": this.props.email,
        "question_id": this.props.question_ids[this.props.q_index],
        "question_desc": this.props.questions[this.props.q_index],
    };
    this.props.addWPVideo(metaData);
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
  // mark recorded to true
    let user = {
        "email": this.props.email,
        "positions": this.props.positionId,
    };
    this.props.updateRecord(user);

    this.uploader.uploadFile(this.props.video);
    this.props.resetDeviceAndNextQuestion();
  }

  handleUploadAndFinish = () => {
    this.uploader.uploadFile(this.props.video);
    this.redirectToCompletion();
  };

  redirectToCompletion = () => {
    // redirect to profile
    const { history } = this.props;
    if (history) history.push("/interview_Completion");
  };

  render() {
    var saveOnTap = this.handleUpload;
    var skipOnTap = this.props.resetDeviceAndNextQuestion;
    var saveText = "Save and Next";
    var skipText = "Discard and Next";

    if (this.props.last_q) {
      saveOnTap = this.handleUploadAndFinish;
      skipOnTap = this.redirectToDashboard;
      saveText = "Save and Finish";
      skipText = "Discard and Finish";
    }
    return (
      <div>
        <div style={{ display: "none" }}>
          <ReactS3Uploader
            signingUrl="/sign-wp-video"
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
          fontFamily={"Avenir Next"}
          isAudio={this.props.isAudio}
        />
        }*/}
      </div>
    );
  }
}


export default connect(null, { createMessage, addWPVideo, updateRecord })(
  withRouter(CareerVideoUploader)
);
