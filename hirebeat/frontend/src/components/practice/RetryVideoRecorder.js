import React, { Component } from "react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "webrtc-adapter";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
import MyVideoUploader from "../videos/MyVideoUploader";
import { connect } from "react-redux";
import { NEXT_QUESTION } from "../../redux/actions/action_types";

export class RetryVideoRecorder extends Component {
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
                    this.state.videoRecorded &&
                    !this.state.videoHandled ? (
                        <MyVideoUploader
                            resetDeviceAndNextQuestion={this.resetDeviceAndNextQuestion}
                            resetDevice={this.resetDevice}
                            startCamera={this.startCamera}
                            disposePlayer={this.disposePlayer}
                            video={this.state.video}
                            last_q={true}
                            isSimulate={false}
                            retry={true}
                            retry_q_meta={this.props.retry_q_meta}
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

export default connect(null, mapDispatchToProps)(RetryVideoRecorder);
