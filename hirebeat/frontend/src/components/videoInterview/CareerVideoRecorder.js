import React, { Component } from "react";
import RetryVideoRecorder from "../practice/RetryVideoRecorder";

import CountdownBar from "../practice/CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
import { PracticeCard} from "../practice/CardComponents";
import NotePad from "../practice/NotePad";
import { connect } from "react-redux";
import PrepCountdown from "../practice/PrepCountdown";
import TestDevice from "../practice/TestDevice";
import { getQuestions } from "../../redux/actions/question_actions";
import VideoRecorder from "../practice/VideoRecorder";
export class CareerVideoRecorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "Preparation",
            type: "behavior",
            deviceTested: false,
            numberOfQuestions: 1,
            categoryOfQuestion: "Random", // 1 means "Random"
        };
    }

    componentDidMount() {
        setTimeout(function () {
            window.scrollTo({
                top: 65,
                behavior: "smooth",
            });
        }, 200);
        this.props.getQuestions(this.state.numberOfQuestions, this.state.categoryOfQuestion)
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
        let countTime = this.state.status == "Preparation" ? 30 : 120;
            videoRecorderOptions.plugins.record.maxLength =
                120;
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
                    <h4>Q: {this.props.questions[this.props.q_index].description}</h4>
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
                                    last_q={true}
                                    isSimulate={true}
                                    isCareerVideo={true}
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
    questions: state.question_reducer.questions,
    loaded: state.question_reducer.loaded,
    q_count: state.question_reducer.q_count,
    q_index: state.question_reducer.q_index,
});

export default connect(mapStateToProps, { getQuestions })(CareerVideoRecorder);
