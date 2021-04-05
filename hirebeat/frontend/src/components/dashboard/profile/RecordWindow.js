import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import CountdownBar from "./CountdownBar";
import { videoRecorderOptions } from "./../../../constants/constants";
//import { CardRow } from "./../../practice/CardComponents";

export class RecordWindow extends Component {

  state = {
    status: "Preparation", // or Recording or Loading or Your Answer. Used to control CountdownBar and 30's preparation
  };

  componentDidMount() {
    setTimeout(function () {
      window.scrollTo({
        top: 65,
        behavior: "smooth",
      });
    }, 200);
  }

  finishCountdown = () => {
    const audioStart = document.getElementsByClassName("audio-start")[0];
    audioStart.play();
    this.setState({
      status: "Loading",
    });
  };

  startRecording = () => {
    this.setState({
      status: "Recording",
    });
  };

  recordingDone = () => {
    const audioStop = document.getElementsByClassName("audio-stop")[0];
    audioStop.play();
    this.setState({
      status: "Your Answer",
    });
  };

  questionIndicator = () => {
    var rows = [];
    for (var i = 0; i < this.props.q_count; i++) {
      var bg = "lightblue";
      rows.push(
        <div
          style={{
            borderRadius: "5px",
            border: "none",
            backgroundColor: bg,
            width: "10px",
            height: "10px",
          }}
        />
      );
    }
    return (
      <div className="row d-flex justify-content-center">
        <div
          className="d-flex justify-content-around"
          style={{ width: 100, marginBottom: 10, marginTop: 2 }}
        >
          {rows}
        </div>
      </div>
    );
  };

  render() {
    var countTime = 45;
    videoRecorderOptions.plugins.record.maxLength = 45;
    videoRecorderOptions.controlBar.recordToggle = false;
    return (
      <div>
        <audio className="audio-start">
          <source src="https://hirebeat-assets.s3.amazonaws.com/single_beep.mp3"></source>
        </audio>
        <audio className="audio-stop">
          <source src="https://hirebeat-assets.s3.amazonaws.com/double_beep.mp3"></source>
        </audio>
          <div style={{marginLeft: "1rem"}}>
            <div style={{ marginTop: 20 }}>
              <div
                style={{ marginBottom: "-7px" }}
              >
                {this.state.status == "Recording" &&
                <div className="row">
                  <div
                    style={{
                      backgroundColor: "black",
                      width: 520,
                      borderRadius: "8px 8px 0 0",
                      display: "flex",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 15,
                        color: "white",
                        width: "40%",
                        marginLeft: "10px",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {this.state.status}
                    </p>
                    <CountdownBar
                    timeTotal={countTime}
                    status={this.state.status}
                    />
                  </div>
                </div>
                }
              </div>
                <VideoRecorder
                  {...videoRecorderOptions}
                  startRecording={this.startRecording}
                  recordingDone={this.recordingDone}
                  userId={this.props.userId}
                  updateVideo={this.props.updateVideo}
                  disableShow={this.props.disableShow}
                  getUpdatedData={this.props.getUpdatedData}
                />
            </div>
          </div>
      </div>
    );
  }
}

export default RecordWindow;
