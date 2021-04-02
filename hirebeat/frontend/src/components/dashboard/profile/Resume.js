import React, { Component } from "react";
import { MyModal80 } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
var ReactS3Uploader = require("react-s3-uploader");

export class Resume extends Component {

    constructor(props) {
        super(props);
        this.uploader = null;
        this.handleUpload = this.handleUpload.bind(this);
      }

    state = {
        showResume: false,
        show: false,
        selected: false,
        cvName: "",
        resume: null,
        fakeName: "",
    }

    enableShowResume = () => {
        if (this.props.resumeURL == null || this.props.resumeURL == "") {
            return this.alert("No Resume", "Please upload your resume first");
        }
        else {
            this.setState({showResume: true});
        }
    }

    disableShowResume = () => {
        this.setState({showResume: false});
    }

    enableShow = () => {
        this.setState({show: true});
    }

    disableShow = () => {
        this.setState({show: false});
    }

    setSelected = () => {
        this.setState({ ...this.state, selected: true });
    }

    disableSelected = () => {
        this.setState({ ...this.state, selected: false });
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
            // get selected file
            let resume = input.files[0];
            let name = resume.name;
            let size = resume.size;

            // check file size
            if (size > 5000000) {
                return this.alert("Wrong File Type", "Please upload resume that less than 5MB!");
            }

            // check file type
            let docType = name.slice(-3);
            if (docType === "pdf" || docType === "ocx") {
                this.setSelected();
                this.setLabel(name);

                //set cvName &　resume states
                let timestamp = Date.parse(new Date());
                let suffix = docType == "pdf" ? ".pdf" : ".docx";
                let fakeName = timestamp + suffix;
                const newResume = new File([resume], fakeName, {type: resume.type});
                this.setState({fakeName: fakeName});
                this.setState({cvName: name});
                this.setState({resume: newResume});
            } else {
                return this.alert("Wrong File Type", "Please upload PDF or DOCX version of your resume");
            }
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
        var resume_url = "https://hirebeat-user-resume.s3.amazonaws.com/" + fakeName;

        // insert MetaData to resume table
        const resumeMetaData = {
          user_id: this.props.userId,
          resume_url: resume_url,
          resume_name: this.state.cvName,
        };
        this.props.updateResume(resumeMetaData);
        setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
        setTimeout(() => this.alert("Upload Success", "You have uploaded your resume"), 300);
    };

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadProgress = () => {
        console.log("In progress");
    };

   handleUpload = () => {
        if (!this.state.selected) {
            this.alert("Empty file", "Please select your resume first");
        }
        else {
            this.uploader.uploadFile(this.state.resume);
            this.props.setResume();
            this.disableSelected();
        }
   }

  deleteResume = () => {
        if (this.props.resumeURL == "" || this.props.resumeURL == null) {
            this.alert("No Resume", "You have not uploaded any resume");
        }
        else {
            const resumeMetaData = {
              user_id: this.props.userId,
              resume_url: "",
              resume_name: "",
            };
            this.props.updateResume(resumeMetaData);
            setTimeout(() => {this.props.getUpdatedData(); this.props.getUpdatedData();}, 300);
            setTimeout(() => this.alert("Delete Success", "You have deleted your resume"), 300);
        }
  }

    render() {
        return(
            <div>
                <div style={{padding: "2rem"}}>
                    <h3 className="profile-h3">Resume</h3>
                    <p className="profile-p">
                        {this.props.resumeName}
                        <div style={{float: "right"}}>
                            <i className="bx bxs-binoculars profile-edit"></i>&nbsp;<span className="profile-edit" type="button" onClick={this.enableShowResume}>View</span>
                            <i className="bx bx-trash profile-edit" style={{marginLeft: "1rem"}}></i>
                            <span className="profile-edit" type="button" onClick={this.deleteResume}>Remove</span>
                        </div>
                    </p>
                    <div className="profile-bg4" style={{justifyContent: "center", height: "3rem", display: "flex", marginTop: "2rem", width: "100%"}}>
                        <button onClick={this.selectFile} className="profile-btn"><i className="bx bx-cloud-upload"></i>Select New Resume</button>
                        <ReactS3Uploader
                          style={{display: "none"}}
                          id="uploadFile"
                          accept=".pdf"  // only accept pdf & docx files
                          signingUrl="/upload-profile-resume"
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
                        <div style={{textAlign: "center", marginTop: "1rem"}}>
                          <i className="bx bxs-file-pdf resume-name"></i>
                          <label className="resume-name" id="fileName"></label>
                          <label className="resume-success" style={{marginLeft: "0.5rem"}}>selected</label>
                          <i className="bx bxs-check-circle resume-success" style={{marginLeft: "1rem"}}></i>
                        </div>
                      ) : null
                    }
                    <div style={{textAlign: "center", marginTop:"1rem"}}>
                      <button onClick={this.handleUpload} className="default-btn resume-scan" style={{backgroundColor: "#090D3A"}}>
                        <i className="bx bxs-hot"></i>
                          Upload
                        <span></span>
                      </button>
                    </div>
                </div>
                <MyModal80
                    show={this.state.showResume}
                    onHide={()=>{this.disableShowResume()}}
                >
                    <div class="iframe-container">
                        <iframe className="responsive-iframe" src={this.props.resumeURL}/>
                    </div>
                </MyModal80>
            </div>
        )
    }
}

export default Resume