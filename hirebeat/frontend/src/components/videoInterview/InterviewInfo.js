import React, { Component } from 'react';
import PageTitleArea from './../Common/PageTitleArea';
import {getInterviewQuestions} from "../../redux/actions/question_actions";
import {getRecordStatus} from "../../redux/actions/auth_actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import { confirmAlert } from 'react-confirm-alert';
import { addInterviewResume } from "../../redux/actions/resume_actions";
import safariAlert from "./../basic/SafariAlert";
import Modal from "react-bootstrap/Modal";
var ReactS3Uploader = require("react-s3-uploader");

class InterviewInfo extends Component {
    // data passed from login page
    email = typeof(this.props.location.params) == "undefined" ? "" : this.props.location.params["email"];
    positionId = typeof(this.props.location.params) == "undefined" ? 0 : this.props.location.params["positionId"];
    companyName = typeof(this.props.location.params) == "undefined" ? "" : this.props.location.params["companyName"];

    constructor(props) {
        super(props);
        this.state = {
            email: this.email,
            positionId: this.positionId,
            companyName: this.companyName,
            showFirst: false,
            selected: false,
            cvName: "",
            resume: null,
            jobTitle: "",
            jdText: "",
            hasResume: false,
        };
        // check candidate resume
        const url = new URL("https://hirebeat.co/jobs/get-resume-from-job-application"); // todo change here when online
        const params = {positionId: this.positionId, email: this.email};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.data.resume_url != "" && data.data.resume_url != null) {
                    this.setState({selected:true, hasResume: true});
                    // insert resume to resume table
                    const resumeMetaData = {
                      candidateId: this.props.user.id,
                      resume_url: data.data.resume_url,
                      positionId: this.positionId,
                      email: this.email,
                    };
                    this.props.addInterviewResume(resumeMetaData);
                }
            });
    }

    static propTypes = {
        getInterviewQuestions: PropTypes.func.isRequired,
        getRecordStatus: PropTypes.func.isRequired,
    };

    componentDidMount() {
        // confirm user recorded videos or not
        this.props.getRecordStatus(this.state.positionId, this.state.email);
        // get interview questions
        this.props.getInterviewQuestions(this.state.positionId);
        // intercept reloading
        window.addEventListener('beforeunload', this.beforeunload);
        safariAlert();
    }

    componentWillUnmount () {
        // destroy reloading interception
        window.removeEventListener('beforeunload', this.beforeunload);
    }

    beforeunload = (e) => {
        // cancel the event
        e.preventDefault();
        // not support for custom message
        let confirmationMessage = 'All the data in current page will lose if you reload';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    }

    redirectToRecord = () => {
//        console.log(this.state.resume);
        this.uploader.uploadFile(this.state.resume);
        this.setState({
            showFirst: true,
        });
    };

    callSecond = () => {
        const { history } = this.props;
        if (history) history.push({
            pathname: "/video-interview",
            params: {
                email: this.state.email,
                positionId: this.state.positionId,
            }
        });
        this.setState({
            showFirst: false,
        });
    }

    logoutUser = () => {
        this.props.logout;
    }

    selectFile = () => {
        if(!this.props.isAuthenticated){
            this.redirectToDashboard();
        } else {
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
            if (docType === "pdf") {
                this.setSelected();
                this.setLabel(name);
                //set cvName &　resume states
                let timestamp = Date.parse(new Date());
                let suffix = ".pdf";
                let cvName = timestamp + suffix;
//                console.log("cvName is", cvName);
                const newResume = new File([resume], cvName, {type: resume.type});
//                console.log("resume is", resume);
                this.setState({cvName: cvName});
                this.setState({resume: newResume});
            } else {
                return this.alert("Wrong File Type", "Please upload PDF version of your resume");
            }
            // reset input value
            input.value = null;
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

    onUploadError = (err) => {
        console.log(err);
    };

    onUploadFinish = () => {
        var name = this.state.cvName;
        var resume_url = "https://hirebeat-interview-resume.s3.amazonaws.com/" + name;
        //var resume_url = "https://hirebeat-test-video-bucket.s3.amazonaws.com/" + name;
    
        // insert MetaData to resume table
        const resumeMetaData = {
          candidateId: this.props.user.id,
          resume_url: resume_url,
          positionId: this.state.positionId,
          email: this.state.email,
        };

        this.props.addInterviewResume(resumeMetaData);
      };

    redirectToEmailVerification = () => {
        const { history } = this.props;
        if (history) history.push(`/email-verification`);
    };

    setLabel = (name) => {
        let label = document.getElementById('fileName');
        label.textContent = name;
    }


    setSelected = () => {
        this.setState({ ...this.state, selected: true });
      }
    
    redirectToDashboard = () => {
    const { history } = this.props;
    if (history) history.push({
            pathname: "/dashboard",
            params: {subpage: "resume"}
        });
    };

    render() {
        if(this.props.user.email != this.state.email){
            confirmAlert({
                title: 'Wrong Account!',
                message: 'Please Logout current account and Re-click the invitation link to compelete this interview!😢',
                buttons: [
                  {label: 'Got It'}
                ]
              });
        };
        return (
            <React.Fragment>
                <SampleQuestion
                    show={this.state.showFirst}
                    hide={this.callSecond}
                    callSecond={this.callSecond}
                />
                {this.props.dataLoaded ?
                    !this.props.isRecorded ?
                        (<div>
                            <PageTitleArea
                                pageTitle={this.state.companyName}
                                pageDescription="Get to know more details and test everything before you start."
                            />
                            <div className="Container" style={{margin: "2% 3% 10rem 0"}}>
                                <div className="row">
                                    <div className="col-lg-5 col-md-5" style={{marginLeft: "5%", marginTop: "5%"}} >
                                        <h3 className="interview-txt1" style={{textAlign:"center"}}>What will the process look like?</h3>
                                        {/*insert gif here*/}
                                        <div style={{width: "100%", height: "100%"}}>
                                        <img src='https://hirebeat-assets.s3.amazonaws.com/guide.gif' alt="gif" style={{border:"groove"}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5" style={{marginLeft: "5%", marginTop: "5%"}} >
                                        {!this.state.hasResume &&
                                            <div>
                                                <h3 className="interview-txt1">Upload Resume</h3>
                                                <p>The company requires your resume along with the interview. </p>
                                                <div className="row pl-3 mb-5">
                                                    <button style={{width: "12rem"}} className="default-btn my-3 mr-3" onClick={this.selectFile}>
                                                        <i className="bx bx-cloud-upload"></i>Upload Resume
                                                    </button>
                                                    {
                                                    this.state.selected ? (
                                                        <div style={{textAlign: "center", marginTop: "1.7rem"}}>
                                                            <i className="bx bxs-file-pdf resume-name"></i>
                                                            <label className="resume-name" id="fileName"></label>
                                                            <label className="resume-success" style={{marginLeft: "0.5rem"}}>selected</label>
                                                            <i className="bx bxs-check-circle resume-success" style={{marginLeft: "1rem"}}></i>
                                                        </div>
                                                    ) : <span className="ml-3 my-auto" style={{color:"#ff0000"}}>Support .pdf only</span>
                                                    }
                                                </div>
                                            </div>
                                        }

                                        <h3 className="interview-txt1 mt-2">Interview Information</h3>
                                        <h4 className="interview-txt2 my-3">
                                            Total: <span style={{color:"#13c4a1"}}>{this.props.interview_questions.length} Questions</span> | Estimate Time: <span style={{color:"#13c4a1"}}>{this.props.interview_questions.length * ((this.props.interview_position.prepare_time + this.props.interview_position.questionTime) / 60.0)} Minutes</span>
                                        </h4>
                                        <ul className="interview-txt2" style={{color: "#4A6F8A", paddingLeft: "1rem"}}>
                                            <li style={{marginTop:"1rem"}}><a href="/practice" style={{color:"#ff6b00"}}>Practice with our sample question</a> before the interview starts.</li>
                                            <li style={{marginTop:"1rem"}}><span style={{color:"#ff6b00"}}>{this.props.interview_position.prepare_time} seconds of preparation time</span> for each interview question.</li>
                                            <li style={{marginTop:"1rem"}}><span style={{color:"#ff6b00"}}>{this.props.interview_position.questionTime} seconds of  response time</span> for each interview question.</li>
                                        </ul>
                                        {this.state.selected ? <button
                                            onClick={this.redirectToRecord}
                                            className="default-btn mt-3"
                                            style={{color:"white", backgroundColor:"#56a3fa", width: "12rem"}}
                                        >
                                             <i className="bx bx-rocket"></i>I'm Ready
                                            <span></span>
                                        </button> 
                                        :
                                        <button
                                                className="default-btn mt-3"
                                                style={{color:"white", backgroundColor:"#7D7D7D", paddingLeft: "25px", width: "12rem", pointerEvents: "none"}}
                                            >
                                                I'm Ready
                                                <span></span>
                                            </button> 
                                        }
                                        <ReactS3Uploader
                                            style={{display: "none"}}
                                            id="uploadFile"
                                            accept=".pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"  // only accept pdf & docx files
                                            signingUrl="/interview_resumes"
                                            signingUrlMethod="GET"
                                            onError={this.onUploadError}
                                            onFinish={this.onUploadFinish}
                                            uploadRequestHeaders={{ "x-amz-acl": "public-read" }} // this is the default
                                            scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                                            inputRef={(cmp) => (this.uploadInput = cmp)}
                                            ref={(uploader) => {
                                                this.uploader = uploader;
                                            }}
                                            autoUpload={true}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>) :
                        <div>
                            <PageTitleArea
                                pageTitle={this.state.companyName}
                                pageDescription="Get to know more details and test everything before you start."
                            />
                            <div className="Container" style={{margin: "2% 3% 10rem 3%"}}>
                                <h4 className="interview-txt2" style={{textAlign: "center"}}>You've already finished this session!</h4>
                            </div>
                        </div> : null
                }
            </React.Fragment>
        );
    }
}

const SampleQuestion = (props) => {
    return(
        <Modal show={props.show} onHide={props.hide} centered={true} size="lg">
                <div className="container mt-5" style={{textAlign:"center"}}>
                    <h3 style={{color:"#090D3A"}}>
                        <b>Prepare with a Sample Question</b>
                    </h3>
                </div>
                <div className='container mt-3 mb-3' style={{width:"69%"}}>
                    <div className="row">
                        <div className="col-1 mt-2">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                        <div className="col-11">
                            <p style={{fontSize:"18px"}}>
                                Before the actual interview, we have a  sample question for you to test your device. 
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-1 mt-2">
                            <i className='bx bx-chevron-right' style={{margin:"auto"}}></i>
                        </div>
                        <div className="col-11">
                            <p style={{fontSize:"18px"}}>
                                Relax! This will not be recorded or reviewed. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-1 mb-4">
                    <div class="col text-center">
                        <button className="default-btn text-center" style={{paddingRight:"50px"}} onClick={props.callSecond}>
                            Begin
                        </button>
                    </div>
                </div>
            </Modal>
            )
  }

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  dataLoaded: state.auth_reducer.dataLoaded,
  interview_questions: state.question_reducer.interview_questions,
  interview_position: state.question_reducer.interview_position,
  isRecorded: state.auth_reducer.isRecorded,
  urlClicked: state.auth_reducer.urlClicked,
  profile: state.auth_reducer.profile,
  isAuthenticated: state.auth_reducer.isAuthenticated,  
});

export default connect(mapStateToProps, {getInterviewQuestions, getRecordStatus, addInterviewResume})(InterviewInfo);
