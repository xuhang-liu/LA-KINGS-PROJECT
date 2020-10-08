import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import safariAlert from "../basic/SafariAlert";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import PropTypes from "prop-types";
import { addResume } from "../../redux/actions/resume_actions";
import { connect } from "react-redux";
var ReactS3Uploader = require("react-s3-uploader");

export class ResumeScan extends Component {
  constructor(props) {
    super(props);
    this.uploader = null;
    this.handleUpload = this.handleUpload.bind(this);
  }

  state = {
    selected: false,
    cvName: "",
    resume: null,
    jobTitle: "",
    jdText: "",
  }

  static propTypes = {
    addResume: PropTypes.func.isRequired,
  };

  setSelected = () => {
    this.setState({ ...this.state, selected: true });
  }

  setJobTitle = () => {
    let value = document.getElementById("jobTitle").value;
    this.setState({ ...this.state, jobTitle: value });
  }

  setJdText = () => {
    let value = document.getElementById("jdText").value;
    this.setState({ ...this.state, jdText: value });
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

        // check file type
        let docType = name.slice(-3);
        if (docType === "doc" || docType === "pdf") {
            // convert selected to be true
            this.setSelected();
            let label = document.getElementById('fileName');
            label.textContent = name;

            //set cvName &　resume states
            let timestamp = Date.parse(new Date());
            let cvName = timestamp + "." + docType;
            const newResume = new File([resume], cvName, {type: resume.type});
            this.setState({cvName: cvName});
            this.setState({resume: newResume});
        } else {
            this.alert();
        }
    }
  }

  alert = () => {
    confirmAlert({
      title: "Wrong File Type",
      message: "Please upload Doc or PDF version of your resume",
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
  }

  onUploadFinish = () => {

    var name = this.state.cvName;
    var resume_url = "https://hirebeat-resume.s3.amazonaws.com/" + name;
    var job_title = this.state.jobTitle;
    var jd_text = this.state.jdText;

    // insert MetaData to resume table
    const resumeMetaData = {
      resume_url: resume_url,
      job_title: job_title,
      jd_text: jd_text,
    };
    this.props.addResume(resumeMetaData);
  };

  onUploadError = (err) => {
    console.log(err);
  };

  onUploadProgress = () => {
    console.log("In progress");
  };

  handleUpload() {
      this.uploader.uploadFile(this.state.resume);
      this.redirectToDashboard();
  }

  redirectToDashboard = () => {
    // redirect to profile
    const { history } = this.props;
    if (history) history.push({
            pathname: "/dashboard",
            params: {subpage: "resume"}
        });
  };

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div style={{textAlign: "center"}}>
          <button className="default-btn resume-upload" onClick={this.selectFile}>
            <i className="bx bx-cloud-upload bx-sm" style={{marginRight: "1rem"}}></i>
              Upload Resume
          </button>
          <span className="resume-type">Doc or PDF file supported. </span>
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
        <ReactS3Uploader
          style={{display: "none"}}
          id="uploadFile"
          accept=".doc,.pdf"  // only accept pdf & doc files
          signingUrl="/sign_cv"
          signingUrlMethod="GET"
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
          contentDisposition="auto"
          scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/gi, "")}
          inputRef={(cmp) => (this.uploadInput = cmp)}
          ref={(uploader) => {
            this.uploader = uploader;
          }}
          autoUpload={true}
        />
        <form onSubmit={this.handleUpload}>
        <div style={{textAlign: "center"}}>
           <h4 className="resume-subtitle">Paste Your Job Description </h4>
           <div>
             <textarea
               id="jobTitle"
               className="resume-textarea"
               style={{width: "40%", height: "2rem"}}
               placeholder="Job Title Here"
               onChange={this.setJobTitle}
             >
             </textarea>
           </div>
           <div>
             <textarea
               id="jdText"
               className="resume-textarea"
               style={{width: "40%", height: "12.5rem", marginTop: "0.5rem"}}
               placeholder="Paste job description here. Exclude the “About Company”."
               onChange={this.setJdText}
             >
             </textarea>
           </div>
        </div>
        <div className="free-trial-content" style={{textAlign: "center", marginTop:"5%"}}>
          <button type="submit" className="default-btn resume-scan" style={{background: "#090D3A"}}>
            <i className="bx bxs-hot"></i>
              Scan
          </button>
        </div>
        </form>
      </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { addResume })(withRouter(ResumeScan));