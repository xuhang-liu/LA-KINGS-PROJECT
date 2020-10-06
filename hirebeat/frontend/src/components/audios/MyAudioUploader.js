var ReactS3Uploader = require("react-s3-uploader");
import React, { Component } from "react";
import { addAudio } from "../../redux/actions/audio_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  AudioNumberLinkRow,
  RecordDoneButton,
  BglessCardButton,
} from "../practice/CardComponents";
import { withRouter } from "react-router-dom";

export class MyAudioUploader extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  static propTypes = {
    addAudio: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    q_index: PropTypes.number.isRequired,
  };

  onUploadFinish = () => {
    //For safari support
    //var name = this.props.video.name.split(".")[0] + ".mp4";
    //var url = "https://hb-transcoded-videos.s3.amazonaws.com/" + name

    //For other browsers
    var name = this.props.audio.name;
    var url = "https://test-hb-videos.s3.amazonaws.com/" + name;
    const audioMetaData = {
      url: url,
      q_description: `${this.props.questions[this.props.q_index].description}`,
    };
    this.props.addAudio(audioMetaData);
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
    if (this.props.saved_audio_count < this.props.save_limit) {
      this.uploader.uploadFile(this.props.audio);
      this.props.resetDeviceAndNextQuestion();
    } else {
      this.props.createMessage({
        errorMessage: "Audio save limit already reached",
      });
    }
  }

  handleUploadAndFinish = () => {
    if (this.uploadCheckPassed) {
      this.uploader.uploadFile(this.props.audio);
      this.redirectToDashboard();
    } else {
      this.props.createMessage({
        errorMessage: "Audio save limit already reached",
      });
    }
  };

  uploadCheckPassed = () => {
    console.log("======result========");
    console.log(this.props.saved_audio_count);
    console.log(this.props.save_limit);
    return this.props.saved_audio_count < this.props.save_limit;
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
            signingUrl="/sign_auth"
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
          onTap={saveOnTap}
          textDisplayed={saveText}
          buttonWidth={"100%"}
          isAudio={true}
        />
        <AudioNumberLinkRow
          number_of_audios_to_save={
            this.props.save_limit == 1000
              ? "Unlimited"
              : this.props.save_limit - this.props.saved_audio_count
          }
          //upgrade={() => console.log("upgrade")}
        />
        <RecordDoneButton
          onTap={() => {
            this.props.startMic();
            this.props.resetDevice();
          }}
          textDisplayed={"Try Again"}
          buttonWidth={"100%"}
          isAudio={true}
        />
        <BglessCardButton
          onTap={skipOnTap}
          textDisplayed={skipText}
          buttonWidth={"100%"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  q_index: state.question_reducer.q_index,
  save_limit: state.auth_reducer.profile.save_limit,
  saved_audio_count: state.auth_reducer.profile.saved_audio_count,
});

export default connect(mapStateToProps, { addAudio, createMessage })(
  withRouter(MyAudioUploader)
);
