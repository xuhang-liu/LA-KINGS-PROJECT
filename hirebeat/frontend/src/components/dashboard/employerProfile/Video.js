import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import ReactPlayer from 'react-player';
var ReactS3Uploader = require("react-s3-uploader");

export class Video extends Component {

    constructor(props) {
        super(props);
        this.uploader = null;
        this.handleUpload = this.handleUpload.bind(this);
      }

    state = {
        video: null,
        fakeName: "",
        selected: false,
        isUploadAgain: false,
    }

    setSelected = () => {
        this.setState({ ...this.state, selected: true });
    }

    disableSelected = () => {
        this.setState({ ...this.state, selected: false });
    }

    setUploadAgain = () => {
        this.setState({ ...this.state, isUploadAgain: true });
    }

    disableUploadAgain = () => {
        this.setState({ ...this.state, isUploadAgain: false });
    }

    setLabel = (name) => {
        let label = document.getElementById('fileName');
        label.textContent = name;
    }

    selectFile = () => {
        // toggle input element
        let input = document.getElementById('uploadFile');
        input.click();

        // prune selected file
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 1) {
                return this.alert("Capacity Error", "Please only upload one video");
            }
            // get selected file
            let video = input.files[0];
            let name = video.name;
            let size = video.size;

            // check file size
            if (size > 50000000) {
                return this.alert("Wrong File Type", "Please upload video that less than 50MB!");
            }

            // check file type
            let docType = name.slice(-3);
            if (docType === "mp4") {
                this.setSelected();
                this.setLabel(name);
                let timestamp = Date.parse(new Date());
                let fakeName = timestamp + "." + docType;
                const newVideo = new File([video], fakeName, {type: video.type});
                this.setState({fakeName: fakeName});
                this.setState({video: newVideo});
            } else {
                return this.alert("Wrong File Type", "Please upload MP4 Video");
            }
            // reset input value
            input.value = null;
        }
    }

    alert = (title, message) => {
        confirmAlert({
          title: title,
          message: message,
          buttons: [
            {
              label: 'Ok'
            }
          ]
          });
    }

    onUploadFinish = () => {
        var fakeName = this.state.fakeName;
        var video_url = "https://hirebeat-employer-profile-video.s3.amazonaws.com/" + fakeName;

        // insert MetaData to profile table
        const metaData = {
          user_id: this.props.userId,
          video_url: video_url,
        };
        this.props.updateEmployerVideo(metaData);
        setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
        setTimeout(() => this.alert("Upload Success", "You have uploaded your video"), 300);
    };

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadProgress = () => {
        console.log("In progress");
    };

   handleUpload = () => {
        if (!this.state.selected) {
            this.alert("Empty file", "Please select your video first");
        }
        else {
            this.uploader.uploadFile(this.state.video);
            this.setState({video: null, fakeName: ""});
            this.disableSelected();
        }
   }

  deleteVideo = () => {
        if (this.props.videoURL == "" || this.props.videoURL == null) {
            this.alert("No Video", "You have not uploaded any video");
        }
        else {
            const metaData = {
              user_id: this.props.userId,
              video_url: "",
            };
            this.props.updateEmployerVideo(metaData);
            setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
            setTimeout(() => this.alert("Delete Success", "You have deleted your video"), 300);
        }
  }

  deleteAlert = () => {
        confirmAlert({
          title: "Video Deletion",
          message: "Are you sure to delete the video",
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

    render() {
        return(
            <div>
                <div style={{padding: "2rem"}}>
                    <div className="row" style={{marginBottom: "1rem"}}>
                        <h3 className="profile-h3 pl-3">Video Profile 
                          <span className="tool_tip ml-2">
                            <i class='bx-fw bx bxs-info-circle' style={{color:"#dfdfdf"}}></i>
                            <p className="tool_submenu container" style={{ width: "14rem" }}>
                              <div>
                                You can upload a short intro or welcome message of your company. This will appear on the company branding page.
                              </div>
                            </p>
                          </span>
                        </h3>
                        {this.props.videoURL != "" && this.props.videoURL != null &&
                            <p className="profile-p" style={{marginLeft: "80%"}}>
                                <div style={{float: "right"}}>
                                    <i className="bx bx-trash profile-edit" style={{marginLeft: "1rem", color: "#FF0000"}}></i>
                                    <span className="profile-edit" style={{color: "#FF0000", cursor:"pointer"}} onClick={this.deleteAlert}>Remove</span>
                                </div>
                            </p>
                        }
                    </div>
                    <ReactPlayer id="rw-video" url={this.props.videoURL}  controls={true} width={"100%"} height={"100%"}/>
                    <div className="profile-bg4" style={{justifyContent: "center", height: "5rem", display: "flex", marginTop: "2rem", width: "100%"}}>
                        <button onClick={this.selectFile} className="profile-btn"><i className="bx bx-cloud-upload"></i>&nbsp;Select New Video</button>
                        <ReactS3Uploader
                          style={{display: "none"}}
                          id="uploadFile"
                          accept=".mp4"  // only accept pdf & docx files
                          signingUrl="/update-employer-profile-video"
                          signingUrlMethod="GET"
                          onError={this.onUploadError}
                          onFinish={this.onUploadFinish}
                          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
                          inputRef={(cmp) => (this.uploadInput = cmp)}
                          ref={(uploader) => {
                            this.uploader = uploader;
                          }}
                          autoUpload={true}
                        />
                    </div>
                    {
                      this.state.selected ? (
                        <div>
                            <div style={{textAlign: "center", marginTop: "1rem"}}>
                              <i className="bx bxs-file-pdf resume-name"></i>
                              <label className="resume-name" id="fileName"></label>
                              <label className="resume-success" style={{marginLeft: "0.5rem"}}>selected <i className="bx-fw bx bxs-check-circle resume-success" style={{marginLeft: "0.5rem"}}></i></label>
                            </div>
                            <div style={{textAlign: "center", marginTop:"1rem"}}>
                              <button onClick={this.handleUpload} className="default-btn resume-scan" style={{backgroundColor: "#090D3A"}}>
                                <i className="bx bxs-hot"></i>
                                  Upload
                                <span></span>
                              </button>
                            </div>
                        </div>
                      ) : null
                    }
                </div>
            </div>
        )
    }
}

export default Video