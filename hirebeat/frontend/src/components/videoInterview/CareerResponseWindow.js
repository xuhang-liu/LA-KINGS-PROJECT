import React, { Component } from "react";
//import RetryVideoRecorder from "../practice/RetryVideoRecorder";
import {Redirect} from "react-router-dom";
import CountdownBar from "../practice/CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
import { PracticeCard} from "../practice/CardComponents";
import NotePad from "../practice/NotePad";
import { connect } from "react-redux";
import PrepCountdown from "../practice/PrepCountdown";
import TestDevice from "./TestDevice";
import { getRandomQuestion } from "../../redux/actions/question_actions";
import VideoRecorder from "../practice/VideoRecorder";
export class CareerResponseWindow extends Component {
    // data passed from login page
    email = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["email"];
    questions = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["questions"];
    questionIds = typeof(this.props.location.params) == "undefined" ? null : this.props.location.params["questionIds"];

    constructor(props) {
        super(props);
        this.state = {
            status: "Preparation",
            type: "behavior",
            deviceTested: false,
            email: this.email == null ? "" : this.email,
            questions: this.questions == null ? [] : this.questions,
            questionIds: this.questionIds == null ? [] : this.questionIds,
        };
    }

    componentDidMount() {
        setTimeout(function () {
            window.scrollTo({
                top: 65,
                behavior: "smooth",
            });
        }, 200);
        this.props.getRandomQuestion();
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

    render() {
        let countTime = this.state.status == "Preparation" ? 30 : 60;
            videoRecorderOptions.plugins.record.maxLength =
                60;
            videoRecorderOptions.controlBar.recordToggle = false;
        return (
            (!this.state.deviceTested) ? (
                <TestDevice testDeviceDone={this.testDeviceDone} />
            ) : (
            <div>
                <audio className="audio-start">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/single_beep.mp3"></source>
                </audio>
                <audio className="audio-stop">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/double_beep.mp3"></source>
                </audio>
                {this.props.loaded ? (
                <PracticeCard>
                    <h4 style={{marginTop: "2rem"}}>Q: {this.props.random_question}</h4>
                    <div style={{ marginTop: 20 }}>
                        <div
                            className="video-recorder-row"
                            style={{ marginBottom: "-7px" }}
                        >
                            <div className="col-8">
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
                            <div className="col-3" />
                        </div>
                        {this.state.status == "Preparation" ? (
                            <PrepCountdown finishCountdown={this.finishCountdown}/>
                        ) : (
                             (
                                <VideoRecorder
                                    {...videoRecorderOptions}
                                    startRecording={this.startRecording}
                                    recordingDone={this.recordingDone}
                                    resetCountdownBar={this.resetCountdownBar}
                                    isTesting={false}
                                    last_q={this.props.last_q}
                                    isSimulate={true}
                                    isCareerVideo={true}
                                    question={this.props.random_question}
                                    questionId={this.props.random_question_id}
                                    email={this.state.email}
                                />
                            )
                        )}
                    </div>
                    <NotePad status={this.state.status}/>
                </PracticeCard>) : null
                }
            </div>)
        );
    }
}

const mapStateToProps = (state) => ({
    last_q: state.question_reducer.last_q,
    loaded: state.question_reducer.loaded,
    random_question: state.question_reducer.random_question,
    random_question_id: state.question_reducer.random_question_id,
});

export default connect(mapStateToProps, {getRandomQuestion })(CareerResponseWindow);
