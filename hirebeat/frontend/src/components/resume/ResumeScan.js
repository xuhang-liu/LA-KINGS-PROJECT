import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import safariAlert from "../basic/SafariAlert";
import { confirmAlert } from 'react-confirm-alert';
import PropTypes from "prop-types";
import { addResume } from "../../redux/actions/resume_actions";
import { createMessage } from "../../redux/actions/message_actions";
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

  setLabel = (name) => {
    let label = document.getElementById('fileName');
    label.textContent = name;
  }

  checkInput = (resume, jobTitle, jdText) => {
    let filled = true;
    if (this.state.resume == null || this.state.jobTitle == "" || this.state.jdText == "") {
        filled = false;
    }
    return filled;
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
            this.setSelected();
            this.setLabel(name);

            //set cvName &　resume states
            let timestamp = Date.parse(new Date());
            let cvName = timestamp + "." + docType;
            const newResume = new File([resume], cvName, {type: resume.type});
            this.setState({cvName: cvName});
            this.setState({resume: newResume});
        } else {
            this.alert("Wrong File Type", "Please upload Doc or PDF version of your resume");
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

  handleUpload = () => {
    // check required inputs: resume, jobTitle, jdText
    if (!this.checkInput(this.state.resume, this.state.jobTitle, this.state.jdText)) {
        return this.alert("Required Fields Not Provided", "Please fill all forms! ");
    }
    if (this.props.saved_resume_count < this.props.save_resume_limit) {
      this.uploader.uploadFile(this.state.resume);
      this.redirectToDashboard();
    }
    else {
      this.props.createMessage({
        errorMessage: "Free saves limit reached. Please upgrade to premium plan.",
      });
    }
  }

  redirectToDashboard = () => {
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
            <i className="bx bx-cloud-upload bx-sm"></i>
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
        <div style={{textAlign: "center", marginTop:"5%"}}>
          <button onClick={this.handleUpload} className="default-btn resume-scan" style={{backgroundColor: "#090D3A"}}>
            <i className="bx bxs-hot"></i>
              Scan
            <span></span>
          </button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  save_resume_limit: state.auth_reducer.profile.save_resume_limit,
  saved_resume_count: state.auth_reducer.profile.saved_resume_count,
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default withRouter(connect(mapStateToProps, { addResume, createMessage })(
  ResumeScan
));