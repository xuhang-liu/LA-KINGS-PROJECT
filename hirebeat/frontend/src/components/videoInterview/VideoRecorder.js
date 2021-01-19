import React, { Component } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "webrtc-adapter";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
//import Record from "videojs-record/dist/videojs.record.js";
import CareerVideoUploader from "./CareerVideoUploader";
import { connect } from "react-redux";
import { NEXT_INTERVIEW_QUESTION } from "../../redux/actions/action_types";
import { RecordDoneButton, CardButton } from "./../practice/CardComponents";

export class VideoRecorder extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, display: "none" });
  }

  state = {
    videoRecorded: false,
    videoHandled: false,
    video: null,
    display: "block",
  };

  componentDidMount() {
    console.log(1);
    this.player = videojs(this.videoNode, this.props, () => {
      var version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(version_info);
    });

    this.player.on("deviceReady", () => {
      console.log("device is ready!");
      this.player.record().start();
    });

    this.player.on("startRecord", () => {
      console.log("started recording!");
      if (!this.props.isTesting) {
        this.props.startRecording();
      }
    });

    this.player.on("finishRecord", () => {
      console.log("finished recording: ", this.player.recordedData);
      if (!this.props.isTesting) {
        this.recordFinished();
      }
      this.player.bigPlayButton.show();
    });

    this.player.on("error", (element, error) => {
      console.warn(error);
    });

    this.player.on("deviceError", () => {
      console.error("device error:", this.player.deviceErrorCode);
    });

    this.player.record().getDevice();
  }

  componentWillUnmount() {
    this.disposePlayer();
  }

  disposePlayer = () => {
    if (this.player) {
      this.player.dispose();
    }
  };

  recordFinished = () => {
    this.props.recordingDone();
    this.setState({
      ...this.state,
      video: this.player.recordedData,
      videoHandled: false,
      videoRecorded: true,
    });
  };

  resetDeviceAndNextQuestion = () => {
    this.resetDevice();
    this.props.onNextQuestion();
    this.props.resetCountdownBar();
  };

  resetDevice = () => {
    this.setState({
      ...this.state,
      videoRecorded: false,
      videoHandled: true,
    });
    this.player.record().reset();
  };

  recordAgain = () => {
    this.player.record().reset();
    this.player.record().getDevice();
  }

  startCamera = () => {
    this.player.record().getDevice();
  };

  stopCamera = () => {
    this.player.record().stop();
    this.handleClick();
  }

  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <div data-vjs-player>
            <video
              id="myVideo"
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-default-skin"
              playsInline
            ></video>
          </div>
        </div>
        <div className="col-3">
          {
            this.props.isTesting && this.props.retry &&
              <div style={{marginTop: "4rem"}}>
                <p className="text-muted">Test device again</p>
                <button
                  onClick={this.recordAgain}
                  className="default-btn"
                  style={{fontFamily:"Avenir Next", fontWeight:'bolder', paddingLeft:"25px", backgroundColor:"#e8edfc", color:"#67a3f3"}}
                >Retry</button>
                <p className="text-muted" style={{marginTop: "2rem"}}>Everything goes well?</p>
                <CardButton
                  onTap={this.props.testDeviceDone}
                  textDisplayed={"Start Interview"}
                  buttonWidth={"14rem"}
                  fontFamily={"Avenir Next"}
                />
              </div>
          }
          {
            !this.props.isTesting && this.props.isSimulate ? (
              <div style={{display: this.state.display}}>
                <RecordDoneButton
                  fontFamily={"Avenir Next"}
                  onTap={this.stopCamera}
                  textDisplayed={"Finish Now"}
                  buttonWidth={"100%"}
                />
              </div>) : null
          }
          {!this.props.isTesting &&
          this.state.videoRecorded &&
          !this.state.videoHandled ? (
            <CareerVideoUploader
              resetDeviceAndNextQuestion={this.resetDeviceAndNextQuestion}
              resetDevice={this.resetDevice}
              startCamera={this.startCamera}
              disposePlayer={this.disposePlayer}
              video={this.state.video}
              last_q={this.props.last_q}
              isSimulate={this.props.isSimulate}
              email={this.props.email}
              positionId={this.props.positionId}
              questions={this.props.questions}
              question_ids={this.props.question_ids}
              q_index={this.props.q_index}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNextQuestion: () => {
      dispatch({ type: NEXT_INTERVIEW_QUESTION });
    },
  };
};

export default connect(null, mapDispatchToProps)(VideoRecorder);
