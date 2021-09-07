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
        this.setState({ show: true });
        this.props.setVideo();
    }

    disableShow = () => {
        this.setState({ show: false });
    }

    enableIsReady = () => {
        this.setState({ isReady: true });
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
            setTimeout(() => { this.props.getUpdatedData(); this.props.getUpdatedData(); }, 300);
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
        return (
            <div>
                <h3 className="profile-h3">
                    Video Profile
                    <span className="tool_tip ml-2">
                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                        <p className="tool_submenu container" style={{ width: "14rem" }}>
                            <div>
                                Pitch yourself and present to your dream companies.
                            </div>
                        </p>
                    </span>
                </h3>
                {(this.props.videoURL !== null && this.props.videoURL !== "") ?
                    <div>
                        <p className="profile-p">
                            Self-Introduction
                            <div style={{ float: "right" }}>
                                <span className="profile-edit" type="button" onClick={this.enableShow}>Re-record</span>
                                <span className="profile-edit" onClick={this.deleteAlert} style={{ color: "#FF0000", marginLeft: "1rem" }} type="button">Delete</span>
                            </div>
                        </p>
                        <ReactPlayer id="rw-video" url={this.props.videoURL} controls={true} width={"100%"} height={"100%"} />
                    </div> :
                    <div>
                        <p className="profile-p4" style={{ marginBottom: "1rem" }}>Recruiters are more likely to reach out to candidates with a well-recorded video.</p>
                        <div className="profile-bg4" style={{ justifyContent: "center", display: "flex", width: "100%", border:"none" }}>
                            <button onClick={this.enableShow} className="default-btn" style={{backgroundColor:"#fff", color:"#000", border:"1px solid #E8EDFC", width:"40%", boxShadow:"2px 2px 10px rgba(128, 128, 128, 0.16)"}}><i class='bx bx-radio-circle-marked' style={{color:"#ff0000", fontSize:"2rem"}}></i>Record Video</button>
                        </div>
                    </div>
                }
                <MyVideoModal
                    show={this.state.show}
                    onHide={() => { this.disableShow() }}
                >
                    <div className="container" style={{ padding: "2rem" }}>
                        {/* Instruction */}
                        {!this.state.isReady &&
                            <div>
                                <h3 className="profile-h3">Introduce Yourself to Recruiters</h3>
                                <p className="profile-p6">Record a short and nice 45-second introduction to impress the recruiter.</p>
                                <h3 className="profile-h3">Few Tips:</h3>
                                <div style={{marginBottom: "2rem" }}>
                                    <p className="profile-p6" style={{ color: "#090D3A", margin: "0rem" }}>
                                        1. Dress professionally
                                    </p>
                                    <p className="profile-p6" style={{ color: "#090D3A", margin: "0rem" }}>
                                        2. Rehearse a few times
                                    </p>
                                    <p className="profile-p6" style={{ color: "#090D3A", margin: "0rem" }}>
                                        3. Look into the camera, not at your image
                                    </p>
                                    <p className="profile-p6" style={{ color: "#090D3A", margin: "0rem" }}>
                                        4. Smile, and be yourself
                                    </p>
                                </div>
                                <button onClick={this.enableIsReady} className="default-btn" style={{ paddingLeft: "25px" }}>I'm Ready</button>
                            </div>
                        }

                        {/* Video Recording */}
                        {this.state.isReady &&
                            <div className="row">
                                <div className="col-5">
                                    <h3 className="profile-h3" style={{marginBottom: "1.5rem" }}>What you can say in your video:</h3>
                                    <div style={{marginBottom: "2rem" }}>
                                        <p className="profile-p" style={{ color: "#090D3A", marginBottom: "0.5rem" }}>
                                            1. <span style={{color: "#FF6B00"}}>Your personal info.</span> What is your name, where do you work, and what do you do there? (Max 20sec)
                                        </p>
                                        <p className="profile-p" style={{ color: "#090D3A", marginBottom: "0.5rem" }}>
                                            2. <span style={{color: "#FF6B00"}}>Brief overview of your career to date.</span> Talk about the companies you have worked with, and the types of jobs you have held. (Max 20 sec)
                                        </p>
                                        <p className="profile-p" style={{ color: "#090D3A", marginBottom: "0.5rem" }}>
                                            3. <span style={{color: "#FF6B00"}}>Sell yourself.</span> What sets you apart? What are your strengths? Or simply share a Fun Fact about yourself to surprise and delight the recruiter. (Max 20sec)
                                        </p>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <h3 className="profile-h3">Introduce Yourself</h3>
                                    <RecordWindow
                                        userId={this.props.userId}
                                        updateVideo={this.props.updateVideo}
                                        disableShow={this.disableShow}
                                        getUpdatedData={this.props.getUpdatedData}
                                    />
                                </div>
                            </div>

                        }

                    </div>
                </MyVideoModal>
            </div>
        )
    }
}

export default VideoPanel;