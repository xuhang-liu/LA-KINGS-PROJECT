import React, { Component } from "react";
//import RetryVideoRecorder from "../practice/RetryVideoRecorder";
//import {Redirect} from "react-router-dom";
import CountdownBar from "./CountdownBar";
import { PracticeCard} from "../practice/CardComponents";
import NotePad from "./NotePad";
import { connect } from "react-redux";
import PrepCountdown from "./PrepCountdown";
import VideoRecorder from "./VideoRecorder";
import {getInterviewQuestions} from "../../redux/actions/question_actions";
import { confirmAlert } from 'react-confirm-alert';
import { updateRecordRefresh } from "../../redux/actions/auth_actions";

export class CareerResponseWindow extends Component {
    // data passed from login page
    email = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["email"];
    positionId = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["positionId"];

    constructor(props) {
        super(props);
        let videoRecorderOptions = this.getVideoRecorderOptions(this.props.interview_position.questionTime);
        this.state = {
            status: "Preparation",
            type: "behavior",
            deviceTested: false,
            email: this.email == null ? "" : this.email,
            positionId: this.positionId == null ? 0 : this.positionId,
            videoRecorderOptions: videoRecorderOptions,
        };
    }

    getVideoRecorderOptions = (time) => {
        let videoRecorderOptions = {
              controls: true,
              controlBar: {
                recordToggle: false,
                volumePanel: false,
                pictureInPictureToggle: false,
                fullscreenToggle: false
              },
              width: 520,
              height: 350,
              bigPlayButton: false,
              fluid: false,
              responsive: true,
              plugins: {
                record: {
                  audio: true,
                  video: true,
                  maxLength: time,
                  debug: true,
                  videoMimeType: "video/webm;codecs=vp8,opus",
                },
              },
        };
        return videoRecorderOptions;
    }

    componentDidMount() {
        setTimeout(function () {
            window.scrollTo({
                top: 65,
                behavior: "smooth",
            });
        }, 200);
//        this.props.getInterviewQuestions(this.state.positionId);
        // intercept reloading
        window.addEventListener('beforeunload', this.beforeunload);
    }

    componentWillUnmount () {
        // destroy reloading interception
        window.removeEventListener('beforeunload', this.beforeunload);
    }

    beforeunload = (e) => {
        // update is_recorded to true when refresh
        let user = {
            "email": this.state.email,
            "positions": this.state.positionId,
        };
        this.props.updateRecordRefresh(user);
        // cancel the event
        e.preventDefault();
        // not support for custom message
        let confirmationMessage = 'All the data in current page will lose if you reload';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
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

    testDeviceDone = () => {
        this.setState({ deviceTested: true });
    };

    resetCountdownBar = () => {
        this.setState({
            status: "Preparation",
        });
    };

    alert = () => {
        confirmAlert({
          title: "Warning",
          message: "You will lost all of your recording data and the interview link will become invalid!",
          buttons: [
            {
              label: 'Ok'
            }
          ]
          });
    }

    render() {
        let countTime = this.state.status == "Preparation" ? this.props.interview_position.prepare_time : this.props.interview_position.questionTime;
        return (
            <div>
                <audio className="audio-start">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/single_beep.mp3"></source>
                </audio>
                <audio className="audio-stop">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/double_beep.mp3"></source>
                </audio>
                {this.props.loaded ? (
                <PracticeCard>
                    <h4 style={{marginTop: "2rem"}}>
                        <span style={{color:"#67A3F3"}}>Q{this.props.q_index+1}</span>: {this.props.questions[this.props.q_index]}</h4>
                    <div style={{ marginTop: 20 }}>
                        <div
                            className="video-recorder-row"
                            style={{ marginBottom: "-7px" }}
                        >
                            <div className="col-7">
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
                            <div className="col-5" />
                        </div>
                        {this.state.status == "Preparation" ? (
                            <PrepCountdown finishCountdown={this.finishCountdown}/>
                        ) : (   <VideoRecorder
                                    {...this.state.videoRecorderOptions}
                                    startRecording={this.startRecording}
                                    recordingDone={this.recordingDone}
                                    resetCountdownBar={this.resetCountdownBar}
                                    isTesting={false}
                                    last_q={this.props.last_q}
                                    isSimulate={true}
                                    email={this.state.email}
                                    positionId={this.state.positionId}
                                    questions={this.props.questions}
                                    question_ids={this.props.question_ids}
                                    q_index={this.props.q_index}
                                />

                        )}
                    </div>
                    <NotePad status={this.state.status}/>
                </PracticeCard>) : null
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
  questions: state.question_reducer.interview_questions,
  question_ids: state.question_reducer.interview_question_ids,
  loaded: state.question_reducer.loaded,
  last_q: state.question_reducer.last_q,
  q_count: state.question_reducer.q_count,
  q_index: state.question_reducer.q_index,
  interview_position: state.question_reducer.interview_position,
});

export default connect(mapStateToProps, { getInterviewQuestions, updateRecordRefresh })(CareerResponseWindow);
