import React, { Component } from "react";
import { MyVideoModal } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import ReactPlayer from 'react-player';
import RecordWindow from "./RecordWindow";

export class VideoPanel extends Component {
    state = {
        show: false,
        isReady: false,
    }

    enableShow = () => {
        this.setState({show: true});
        this.props.setVideo();
    }

    disableShow = () => {
        this.setState({show: false});
    }

    enableIsReady = () => {
        this.setState({isReady: true});
    }

    deleteVideo = () => {
        if (this.props.videoURL == "" || this.props.videoURL == null) {
            this.alert();
        }
        else {
            let data = {
                "user_id": this.props.userId,
                "video_url": "",
            }
            this.props.updateVideo(data);
            setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
        }
    }

    deleteAlert = () => {
        confirmAlert({
          title: "Video Deletion",
          message: "Are you sure to delete the recorded video",
          buttons: [
            {
              label: 'No',
            },
            {
              label: 'Yes',
              onClick: () => this.deleteVideo()
            }
          ]
          });
    }

    alert = () => {
        confirmAlert({
          title: "Deletion Failed",
          message: "You have no recorded video",
          buttons: [
            {
              label: 'Ok'
            }
          ]
          });
    }
    render() {
        return(
            <div>
                <h3 className="profile-h3">Video Profile</h3>
                {(this.props.videoURL !== null && this.props.videoURL !== "") ?
                    <div>
                        <p className="profile-p">
                            Self-Introduction
                            <div style={{float: "right"}}>
                                <span className="profile-edit" type="button" onClick={this.enableShow}>Re-record</span>
                                <span className="profile-edit" onClick={this.deleteAlert} style={{color: "#FF0000", marginLeft: "1rem"}} type="button">Delete</span>
                            </div>
                        </p>
                        <ReactPlayer id="rw-video" url={this.props.videoURL}  controls={true} width={"100%"} height={"100%"}/>
                    </div> :
                    <div>
                        <p className="profile-p" style={{margin: "0rem"}}>Self-Introduction</p>
                        <p className="profile-p4" style={{marginBottom: "1rem"}}>Pitch yourself and present to your dream companies.</p>
                        <div className="profile-bg4" style={{justifyContent: "center", height: "5rem", display: "flex", width: "100%"}}>
                            <button onClick={this.enableShow} className="profile-btn"><i className="bx bx-video-recording"></i> &nbsp;Record Video</button>
                        </div>
                    </div>
                }
                <MyVideoModal
                    show={this.state.show}
                    onHide={()=>{this.disableShow()}}
                >
                    <div className="container" style={{padding: "2rem"}}>
                        <h3 className="profile-h3" style={{fontSize: "1.56rem"}}>Introduce a little about yourself</h3>
                        <p className="profile-p5">Please try to impress the recruiter in 45 seconds</p>
                        {/* Instruction */}
                        {!this.state.isReady &&
                            <div>
                                <h3 className="profile-h3">Record Profile Video Guide</h3>
                                <span className="profile-p5" style={{color: "#090D3A"}}>
                                    Record your profile video to unlock unlimited access to interview practice and resume &nbsp;
                                    screening now! Recruiters are also more likely to notice you during candidates searching. &nbsp;
                                    Here is the suggested flow from our team:
                                </span>
                                <div style={{marginTop: "2rem", marginBottom: "2rem"}}>
                                    <p className="profile-p5" style={{color: "#090D3A", margin: "0rem"}}>
                                        1. Basic Info: Name, Schools/Degrees/Majors
                                    </p>
                                    <p className="profile-p5" style={{color: "#090D3A", margin: "0rem"}}>
                                        2. Work Experience: Current Position, Past Positions
                                    </p>
                                    <p className="profile-p5" style={{color: "#090D3A", margin: "0rem"}}>
                                        3. Career Aspiration & More: Strengths, Skills, Career Goal
                                    </p>
                                </div>
                                <button onClick={this.enableIsReady} className="default-btn" style={{paddingLeft: "25px"}}>I'm Ready</button>
                            </div>
                        }

                        {/* Video Recording */}
                        {this.state.isReady &&
                            <div>
                                <RecordWindow
                                    userId={this.props.userId}
                                    updateVideo={this.props.updateVideo}
                                    disableShow={this.disableShow}
                                    getUpdatedData={this.props.getUpdatedData}
                                />
                            </div>

                        }

                    </div>
                </MyVideoModal>
            </div>
        )
    }
}

export default VideoPanel;