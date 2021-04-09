import React, { Component } from "react";
import "video.js/dist/video-js.css";
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import "videojs-record/dist/css/videojs.record.css";
import videojs from "video.js";
import RecordRTC from "recordrtc";
import "webrtc-adapter";

import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
import Record from "videojs-record/dist/videojs.record.js";

import NotePad from "./NotePad";
import MyVideoUploader from "../videos/MyVideoUploader";
import { connect } from "react-redux";
import { NEXT_QUESTION } from "../../redux/actions/action_types";
import { RecordDoneButton, CardButton } from "./CardComponents";

export class AudioRecorder extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, display: "none" });
  }

  state = {
    testStarted: false,
    audioRecorded: false,
    audioHandled: false,
    audio: null,
    display: "block",
  };

  componentDidMount() {
    this.player = videojs(this.audioNode, this.props, () => {
      var version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        ", videojs-wavesurfer " +
        videojs.getPluginVersion("wavesurfer") +
        ", wavesurfer.js " + WaveSurfer.VERSION +
        " and recordrtc " + RecordRTC.version;
      videojs.log(version_info);
    });

    this.player.on("deviceReady", () => {
      console.log("device is ready!");
      if(!this.props.isTesting)
        this.player.record().start();
    });


    this.player.on('startRecord', () => {
        console.log('started recording!');
        if (!this.props.isTesting) {
          this.props.startRecording();
        }
    });

    this.player.on('finishRecord', () => {
        console.log('finished recording: ', this.player.recordedData);
        if (!this.props.isTesting) {
          this.recordFinished();
          this.handleClick();
        }
    });

     this.player.on('error', (element, error) => {
        console.error(error);
    });

     this.player.on('deviceError', () => {
        console.log('device error:', this.player.deviceErrorCode);
    });

    // auto start here
    this.player.on("ready", () => {
      this.player.record().getDevice();
    })
  }

  componentWillUnmount() {
    this.disposePlayer();
  }

  disposePlayer = () => {
    if (this.player) {
      this.player.dispose();
    }
  }

  recordFinished = () => {
    this.props.recordingDone();
    this.setState({
      ...this.state,
      audio: this.player.recordedData,
      audioHandled: false,
      audioRecorded: true,
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
      audioRecorded: false,
      audioHandled: true,
    });
    this.player.record().reset();
  };

  startMic = () => {
    this.player.record().getDevice();
  };

  stopMic = () => {
    this.player.record().stop();
    this.handleClick();
  }

  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <div data-vjs-player>
            <audio
              id="myAudio"
              ref={(node) => (this.audioNode = node)}
              className="video-js vjs-default-skin"
            >
            </audio>
            {!this.state.testStarted && this.props.isTesting ? (
              <div className="ml-5 pt-2" style={{position: "absolute", zIndex:"100"}}>
                <CardButton 
                className="ml-5"
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
          {/* !this.props.isTesting ? <NotePad isAudio={true} /> : null*/}
        </div>
        <div className="col-3">
          {
            !this.props.isTesting ? (
              <div style={{display: this.state.display}}>
                <RecordDoneButton
                  fontFamily={"Avenir Next, Segoe UI"}
                  onTap={this.stopMic}
                  textDisplayed={"Finish Now"}
                  buttonWidth={"100%"}
                  isAudio={true}
                />
            </div>) : null
          }
          <br style={{marginTop: "3rem"}}/>
          {!this.props.isTesting &&
          this.state.audioRecorded &&
          !this.state.audioHandled ? (
            <MyVideoUploader
              resetDeviceAndNextQuestion={this.resetDeviceAndNextQuestion}
              resetDevice={this.resetDevice}
              startCamera={this.startMic}
              disposePlayer={this.disposePlayer}
              video={this.state.audio}
              last_q={this.props.last_q}
              isAudio={true}
              isSimulate={this.props.isSimulate}
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
      dispatch({ type: NEXT_QUESTION });
    },
  };
};

export default connect(null, mapDispatchToProps)(AudioRecorder);
