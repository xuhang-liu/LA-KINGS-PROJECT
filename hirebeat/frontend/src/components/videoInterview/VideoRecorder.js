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
    testStarted: false,
  };

  componentDidMount() {
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
      //this.player.record().start();
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
      //this.player.bigPlayButton.show();
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
            {!this.state.testStarted ? (
            <div className="pt-2" style={{position: "absolute", zIndex:"100", margin:"7rem"}}>
              <CardButton 
              onTap={()=>{
                this.setState({testStarted: true});
                this.player.record().start();
              }}
              textDisplayed={"Start Recording"}
              buttonWidth={"20%"}
              isAudio={this.props.isAudio ? true : false}
              fontFamily={"Avenir Next, Segoe UI"}
            />
            </div>) : null}
          </div>
        </div>
        <div className="col-3">
          {
            this.props.isTesting && this.props.retry &&
              <div style={{marginTop: "4rem"}}>
                <p className="text-muted" style={{marginTop: "2rem", display:"inline-block", marginBottom:"2rem"}}>Test device again?</p>
                <button onClick={this.recordAgain}
                style={{
                  marginLeft:"1rem", marginBottom:"2rem",
                  backgroundColor:"#ff612f",
                  width:"2.5rem", height:"2.5rem", 
                  textAlign:"center", borderRadius:"100%", color:"#ffffff", border:"none",
                  display:"inline-block", fontWeight:"600"}}><i className="bx bx-revision" style={{fontSize:"1.5rem"}}></i></button>
                <CardButton
                  onTap={this.props.testDeviceDone}
                  textDisplayed={"Start Interview"}
                  buttonWidth={"14rem"}
                  fontFamily={"Avenir Next, Segoe UI"}
                />
              </div>
          }
          {
            !this.props.isTesting && this.props.isSimulate ? (
              <div style={{display: this.state.display}}>
                <RecordDoneButton
                  fontFamily={"Avenir Next, Segoe UI"}
                  onTap={this.stopCamera}
                  textDisplayed={"I'm Done"}
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
