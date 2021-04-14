import React, { Component } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "webrtc-adapter";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
var ReactS3Uploader = require("react-s3-uploader");

//const constraints = {
//    audio: true,
//    video: { width: 640, height: 480 }
//};
//
//function openCamera() {
//    navigator.mediaDevices
//      .getUserMedia(constraints)
//      .then(success)
//      .catch(error);
//};
//
//function success() {
//    console.log("Device Ready");
//};
//
//function error() {
//    alert("No camera detected! Please turn on your camera!");
//};

export class VideoRecorder extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleClick() {
    this.setState({ ...this.state, display: "none" });
  }

  state = {
    videoRecorded: false,
    videoHandled: false,
    video: null,
    display: "block",
    isStarted: false,
    isFinished: false,
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
      this.player.record().start();
    });

    this.player.on("startRecord", () => {
      console.log("started recording!");
//      openCamera(); // detect camera
      this.props.startRecording(); // start count down bar
      this.setState({"isStarted": true});
    });

    this.player.on("finishRecord", () => {
      console.log("finished recording: ", this.player.recordedData);
      if (!this.props.isTesting) {
        this.recordFinished();
        this.setState({"isFinished": true});
      }
      //this.player.bigPlayButton.show();
    });

    this.player.on("error", (element, error) => {
      console.warn(error);
    });

    this.player.on("deviceError", () => {
      console.error("device error:", this.player.deviceErrorCode);
    });
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
    this.setState({"isFinished": false});
  }

  startCamera = () => {
//    openCamera(); // detect camera
    this.player.record().getDevice();
    this.setState({"isStarted": true});
  };

  stopCamera = () => {
    this.player.record().stopDevice();
    this.handleClick();
    this.setState({"isFinished": true});
  }

  onUploadFinish = () => {
    //For safari support
    //var name = this.props.video.name.split(".")[0] + ".mp4";
    //var url = "https://hb-transcoded-videos.s3.amazonaws.com/" + name

    //For other browsers
    var name = this.state.video.name;

    // change bucket to "hirebeat-test-video-bucket" when run in local
    var url = "https://hirebeat-user-video.s3.amazonaws.com/" + name;
    //var url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + name;

    // save data to database
    var metaData = {
        "video_url": url,
        "user_id": this.props.userId,
    };
    this.props.updateVideo(metaData);
    setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
    this.uploader.uploadFile(this.state.video);
    this.props.disableShow();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div data-vjs-player>
            <video
              id="myVideo"
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-default-skin"
              playsInline
            ></video>
          </div>
        </div>
        <div className="row" style={{marginTop: "1rem"}}>
            {(!this.state.isStarted) &&
                <button onClick={this.startCamera} className="default-btn" style={{paddingLeft: "25px"}}>Start Recording</button>
            }
            {(this.state.isStarted && !this.state.isFinished) &&
                <button onClick={this.stopCamera} className="default-btn" style={{paddingLeft: "25px"}}>Stop Recording</button>
            }
            {(this.state.isStarted && this.state.isFinished) &&
                <div>
                    <button onClick={this.handleUpload} className="default-btn" style={{paddingLeft: "25px", marginRight: "2rem"}}>Save</button>
                    <i className="bx bx-revision"></i><span onClick={this.recordAgain} type="button">Record Again</span>
                </div>
            }

        </div>
        <div style={{ display: "none" }}>
          <ReactS3Uploader
            signingUrl="/upload-profile-video"
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
      </div>
    );
  }
}

export default VideoRecorder;