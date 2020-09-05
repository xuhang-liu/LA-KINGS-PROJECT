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

export class AudioRecorder extends Component {
  state = {
    audioRecorded: false,
    audioHandled: false,
    audio: null,
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
      // logic here needs to be adjusted
//      this.player.record().getDevice();
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
        }
    });

     this.player.on('deviceError', () => {
        console.log('device error:', this.player.deviceErrorCode);
    });

    this.player.on('error', function(element, error) {
        console.error(error);
    });

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

  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <div data-vjs-player>
            <audio
              id="myAudio"
              ref={(node) => (this.audioNode = node)}
              className="video-js vjs-default-skin"
            ></audio>
          </div>
          { !this.props.isTesting ? <NotePad status={this.state.status} isAudio={true} /> : null}
        </div>
        <div className="col-3">
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
              isAudio = {true}
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
