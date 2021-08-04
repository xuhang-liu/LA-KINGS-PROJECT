import React, { Component } from "react";
import RetryVideoRecorder from "./RetryVideoRecorder";
import RetryAudioRecorder from "./RetryAudioRecorder";

import CountdownBar from "./CountdownBar";
import { videoRecorderOptions } from "../../constants/constants";
import { audioRecorderOptions } from "../../constants/constants";
import { PracticeCard} from "./CardComponents";
import NotePad from "./NotePad";
import { connect } from "react-redux";
import PrepCountdown from "./PrepCountdown";
import {Link} from "react-router-dom"

export class RetryResponseWindow extends Component {
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

    // questionIndex = () => {
    //     return (
    //         <div className="practice-card-top-row">
    //             <h2>Q{this.props.q_description}</h2>
    //         </div>
    //     );
    // };

    resetCountdownBar = () => {
        this.setState({
            status: "Preparation",
        });
    };

    render() {
        let countTime;
        if (this.props.isAudio) {
            countTime =
                this.state.status == "Preparation" ? 30 : this.props.responseLength * 60;
            audioRecorderOptions.plugins.record.maxLength =
                this.props.responseLength * 60;
            audioRecorderOptions.controlBar.recordToggle = true;
        } else {
            countTime =
                this.state.status == "Preparation" ? 30 : this.props.responseLength * 60;
            videoRecorderOptions.plugins.record.maxLength =
                this.props.responseLength * 60;
            videoRecorderOptions.controlBar.recordToggle = true;
        }
        return (
            <div>
                <audio className="audio-start">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/single_beep.mp3"></source>
                </audio>
                <audio className="audio-stop">
                    <source src="https://hirebeat-assets.s3.amazonaws.com/double_beep.mp3"></source>
                </audio>
                    <PracticeCard>
                        {/*{this.questionIndex()}*/}
                        <Link to={"/dashboard"} style={{textDecoration: "none"}}>
                            <h1 style={{marginTop: "1rem"}}>
                                <span style={{verticalAlign: "middle"}}>
                                    <i className={"bx bx-arrow-back"}></i>
                                </span>
                                Practice Again
                            </h1>
                        </Link>
                        <h4>Q: {this.props.retry_q_meta.q_description}</h4>
                        <div style={{ marginTop: 20 }}>
                            <div
                                className="video-recorder-row"
                                style={{ marginBottom: "-7px" }}
                            >
                                <div className="col-8">
                                    <div
                                        style={{
                                            backgroundColor: "black",
                                            width: this.props.isAudio ? 400 : 520,
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
                                <PrepCountdown finishCountdown={this.finishCountdown} isAudio={this.props.isAudio}/>
                            ) : (
                                this.props.isAudio ? (
                                    <RetryAudioRecorder
                                        {...audioRecorderOptions}
                                        startRecording={this.startRecording}
                                        recordingDone={this.recordingDone}
                                        resetCountdownBar={this.resetCountdownBar}
                                        retry_q_meta = {this.props.retry_q_meta}
                                    />
                                ) : (
                                <RetryVideoRecorder
                                    {...videoRecorderOptions}
                                    retry_q_meta = {this.props.retry_q_meta}
                                    startRecording={this.startRecording}
                                    recordingDone={this.recordingDone}
                                    resetCountdownBar={this.resetCountdownBar}
                                />
                                )
                            )}
                        </div>
                        <NotePad status={this.state.status} isAudio={this.props.isAudio}/>
                    </PracticeCard>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    retry_q_meta: {
        q_type: state.question_retry_reducer.q_type,
        q_description: state.question_retry_reducer.q_description,
        q_category: state.question_retry_reducer.q_category,
        q_answer: state.question_retry_reducer.q_answer,
        q_explain: state.question_retry_reducer.q_explain,
        ai_review_categories: state.question_retry_reducer.ai_review_categories,
        expert_review_categories: state.question_retry_reducer.expert_review_categories,
    },
    responseLength: 1,
    isAudio: state.question_retry_reducer.isAudio,
});

export default connect(mapStateToProps)(RetryResponseWindow);
