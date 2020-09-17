import React, { Component } from "react";
import VideoRecorder from "./VideoRecorder";
import CountdownBar from "./CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
import { PracticeCard, CardRow } from "./CardComponents";
import NotePad from "./NotePad";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../../redux/actions/question_actions";
import { createMessage } from "../../redux/actions/message_actions";
import PrepCountdown from "./PrepCountdown";

export class ResponseWindow extends Component {
  static propTypes = {
    questions: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getQuestions: PropTypes.func.isRequired,
    questionType: PropTypes.string.isRequired, // Used to determine the type of questions to get
    questionNumber: PropTypes.number.isRequired,
    questionCategory: PropTypes.string.isRequired,
    responseLength: PropTypes.number.isRequired,
  };

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
    this.props.getQuestions(this.props.questionNumber, this.props.questionCategory);
  }

  finishCountdown = () => {
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
    this.setState({
      status: "Your Answer",
    });
  };

  questionIndicator = () => {
    var rows = [];
    for (var i = 0; i < this.props.q_count; i++) {
      var bg = i == this.props.q_index ? "lightblue" : "#F0F3FA";
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

  questionIndex = () => {
    return (
      <div className="practice-card-top-row">
        <h2>Q{this.props.q_index + 1}</h2>
      </div>
    );
  };

  resetCountdownBar = () => {
    this.setState({
      status: "Preparation",
    });
  };

  render() {
    var countTime =
      this.state.status == "Preparation" ? 30 : this.props.responseLength * 60;
    videoRecorderOptions.plugins.record.maxLength =
      this.props.responseLength * 60;
    videoRecorderOptions.width = window.innerWidth / 2.4;
    videoRecorderOptions.height = window.innerWidth / 3.6;
    return (
      <div>
        {this.props.loaded ? (
          <PracticeCard>
            {this.questionIndex()}
            {this.questionIndicator()}
            <h4>{this.props.questions[this.props.q_index].description}</h4>
            <div style={{ marginTop: 20 }}>
              <div
                className="video-recorder-row"
                style={{ marginBottom: "-7px" }}
              >
                <div className="col-8">
                  <div
                    style={{
                      backgroundColor: "black",
                      width: window.innerWidth / 2.4,
                      borderRadius: "8px 8px 0 0",
                      display: "flex",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 15,
                        color: "white",
                        width: "60%",
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
                <div className="col-3" />
              </div>
              {this.state.status == "Preparation" ? (
                <PrepCountdown finishCountdown={this.finishCountdown} />
              ) : (
                <VideoRecorder
                  {...videoRecorderOptions}
                  startRecording={this.startRecording}
                  recordingDone={this.recordingDone}
                  resetCountdownBar={this.resetCountdownBar}
                  isTesting={false}
                  last_q={this.props.last_q}
                />
              )}
            </div>
            <NotePad status={this.state.status} />
          </PracticeCard>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.question_reducer.questions,
  loaded: state.question_reducer.loaded,
  last_q: state.question_reducer.last_q,
  q_count: state.question_reducer.q_count,
  q_index: state.question_reducer.q_index,
});

export default connect(mapStateToProps, { getQuestions })(ResponseWindow);
