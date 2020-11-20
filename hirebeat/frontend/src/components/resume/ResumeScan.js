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
  componentDidMount() {
    safariAlert();
  }

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
    isAuthenticated: PropTypes.bool,
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

  strToText = () => {
    let value = document.getElementById("cvText").value;
    this.createCV(value);
  }

  setLabel = (name) => {
    let label = document.getElementById('fileName');
    label.textContent = name;
  }

  checkInput = (resume, jobTitle, jdText) => {
    let filled = true;
    if (resume == null || jobTitle == "" || jdText == "") {
        filled = false;
    }
    return filled;
  }

  createCV = (content) => {
    let timestamp = Date.parse(new Date());
    let cvName = timestamp + ".txt";
    const newResume = new File([content], cvName, {type: "text/plain"});
    //set cvName &　resume states
    this.setState({cvName: cvName});
    this.setState({resume: newResume});
  }

  redirectToEmailVerification = () => {
      const { history } = this.props;
      if (history) history.push(`/email-verification`);
  };

  selectFile = () => {
    if(!this.props.isAuthenticated){
      this.redirectToDashboard();
    }
    else if(!this.props.profile.email_confirmed){
      this.redirectToEmailVerification();
      return this.alert("Account Activation Needed", "Please check the activation email and activate your account");
    }else{
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
            let cvName = timestamp + suffix;
            const newResume = new File([resume], cvName, {type: resume.type});
            this.setState({cvName: cvName});
            this.setState({resume: newResume});
        } else {
            return this.alert("Wrong File Type", "Please upload PDF or DOCX version of your resume");
        }
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
    if(!this.props.isAuthenticated){
      this.redirectToDashboard();
    }
    else if(!this.props.profile.email_confirmed){
      this.redirectToEmailVerification();
      return this.alert("Account Activation Needed", "Please check the activation email and activate your account");
    }else{
      if (!this.checkInput(this.state.resume, this.state.jobTitle, this.state.jdText)) {
        return this.alert("Required Fields Not Provided", "Please fill all forms and select your resume! ");
      }
      if(this.state.jdText.length < 100){
        return this.alert("Job Description Is Too Short", "Please fill proper contents for job description! ");
      }
      if (this.props.saved_resume_count < this.props.save_resume_limit) {
        this.uploader.uploadFile(this.state.resume);
        this.redirectToDashboard();
      }
      else {
        return this.alert("Free saves limit reached", "Please upgrade to premium plan!");
      }
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
    var cName = "col-6";
    if(this.state.selected){
      cName = "col-12";
    }
    return (
      <React.Fragment>
      <div className="container">
        <div style={{textAlign: "center"}}>
          <button className="default-btn resume-upload" onClick={this.selectFile}>
            <i className="bx bx-cloud-upload bx-sm"></i>
              Upload Resume
          </button>
          <span className="resume-type">Support .pdf/.docx</span>
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
          accept=".pdf, .docx, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
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
        <div className="row" style={{textAlign: "center", marginTop: "2rem"}}>
        {!this.state.selected && <div className="col-6">
               <h4 className="resume-subtitle">Or paste Your Resume </h4>
               <div className="row" style={{justifyContent: "center"}}>
                 <textarea
                   id="cvText"
                   className="resume-textarea"
                   style={{width: "80%", height: "18rem", marginTop: "0.5rem", fontSize: "1.2rem"}}
                   placeholder="Paste resume here"
                   onChange={this.strToText}
                 >
                 </textarea>
              </div>
           </div>}
           <div className={cName}>
               <h4 className="resume-subtitle">Paste Your Job Description </h4>
               <div className="row" style={{justifyContent: "center"}}>
                 <textarea
                   id="jobTitle"
                   className="resume-textarea"
                   style={{width: "80%", height: "2rem", fontSize: "1.2rem"}}
                   placeholder="Job Title Here"
                   onChange={this.setJobTitle}
                 >
                 </textarea>
               </div>
               <div className="row" style={{justifyContent: "center"}}>
                 <textarea
                   id="jdText"
                   className="resume-textarea"
                   style={{width: "80%", height: "16rem", marginTop: "0.5rem", fontSize: "1.2rem"}}
                   placeholder="Paste job description here. Exclude the “About Company”."
                   onChange={this.setJdText}
                 >
                 </textarea>
               </div>
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
  isAuthenticated: state.auth_reducer.isAuthenticated,
  save_resume_limit: state.auth_reducer.profile.save_resume_limit,
  saved_resume_count: state.auth_reducer.profile.saved_resume_count,
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default withRouter(connect(mapStateToProps, { addResume, createMessage })(
  ResumeScan
));