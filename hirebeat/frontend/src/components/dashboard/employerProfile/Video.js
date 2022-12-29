import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import ReactPlayer from 'react-player';
import { Text, Tooltip, HStack, Button } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
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
        const newVideo = new File([video], fakeName, { type: video.type });
        this.setState({ fakeName: fakeName });
        this.setState({ video: newVideo });
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
    setTimeout(() => { this.props.getUpdatedData(); this.props.getUpdatedData(); }, 300);
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
      this.setState({ video: null, fakeName: "" });
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
      setTimeout(() => { this.props.getUpdatedData(); this.props.getUpdatedData(); }, 300);
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
    return (
      <div>
        <div style={{ padding: "2rem" }}>
          <div className="row" style={{ marginBottom: "1rem" }}>
            <Tooltip label='You can upload a short intro or welcome message of your company. This will appear on the company branding page.' aria-label='A tooltip' fontSize='sm'>
              <HStack>
                <Text color="muted" fontSize='xl' fontWeight='bold'>
                  Video Profile
                </Text>
                <FiInfo style={{ color: "#dfdfdf" }} size='20' />
              </HStack>
            </Tooltip>
          </div>
          <ReactPlayer id="rw-video" url={this.props.videoURL} controls={true} width={"100%"} height={"100%"} />
          {(this.props.videoURL != "" && this.props.videoURL != null) ?
            <div className="row d-flex justify-content-start mt-3" style={{ paddingLeft: "0.5rem" }}>
              <Button onClick={this.selectFile} colorScheme='blue'>Upload New</Button>
              {/*https://hirebeat-employer-profile-video.s3.amazonaws.com/1617996634000.mp4*/}
              <Button onClick={this.deleteAlert} colorScheme='gray' style={{ marginLeft: "0.5rem" }}>Remove</Button>
              <ReactS3Uploader
                style={{ display: "none" }}
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
            </div> :
            <div style={{ border: "2px dashed rgba(70, 137, 250, 0.5)", borderRadius: '3px', width: "100%", paddingTop: "1rem", paddingBottom: "1rem" }}>
              <div className="row d-flex justify-content-center" onClick={this.selectFile} style={{ cursor: 'pointer' }}>
                <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/profile-video-upload-icon.png" alt="icon" />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <Text fontSize='md' color="muted" style={{ fontWeight: '600' }}>Upload a Company Video Profile</Text>
              </div>
              <ReactS3Uploader
                style={{ display: "none" }}
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
              {
                this.state.selected ? (
                  <div>
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                      <i className="bx bxs-file-pdf resume-name"></i>
                      <label className="resume-name" id="fileName"></label>
                      <label className="resume-success" style={{ marginLeft: "0.5rem" }}>selected <i className="bx-fw bx bxs-check-circle resume-success" style={{ marginLeft: "0.5rem" }}></i></label>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                      <button onClick={this.handleUpload} className="default-btn resume-scan" style={{ backgroundColor: "#090D3A" }}>
                        <i className="bx bxs-hot"></i>
                        Upload
                        <span></span>
                      </button>
                    </div>
                  </div>
                ) : null
              }
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Video