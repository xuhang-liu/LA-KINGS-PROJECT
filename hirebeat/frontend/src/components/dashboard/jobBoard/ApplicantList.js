import React, { Component, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./QuestionForm";
import { MyModal80 } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews } from "../../../redux/actions/question_actions";
import { updateInviteStatus } from "../../../redux/actions/job_actions";
import { MyModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";

export class ApplicantList extends Component{
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
    }

    onChange = (e) => {
        this.setState({keyWords: e.target.value});
    };

    setTempQuestion = (questions) => {
        this.setState({tempQuestion: questions});
    }

    hideQForm = () => {
        this.props.getAllJobs(this.props.user.id);
        this.props.getPJobs();
        setTimeout(() => {this.props.setCurJob(this.props.curJob)}, 300);
//        console.log(this.props.jobs);
        setTimeout(() => {this.setState({showQForm: false})}, 300);

    }

    showQForm = () => {
        this.setState({showQForm: true});
    }

    sendSuccessAlert = () => {
        confirmAlert({
          title: "Send Invitation Success",
          message: "You have sent the invitation successfully.",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    };

    noCandidateAlert = () => {
        confirmAlert({
          title: "No Candidate Selected",
          message: "Please select candidates for interview",
          buttons: [
            {
              label: 'Ok'
            }
          ]
        });
    }

    viewQuestions = (questions) => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="interview-txt7" style={{backgroundColor:'#ffffff', borderRadius:"10px", border:"2px solid #E8EDFC", padding:"1rem", paddingLeft:"3rem", paddingRight:"3rem"}}>
                  <h3>Interview Questions:</h3>
                  <ul>
                  {questions.map((q) => {
                      return (
                          <li><h5>{q.description}</h5></li>
                    )})}
                    {this.state.tempQuestion.map((q) => {
                      return (
                          <li><h5>{q}</h5></li>
                    )})}
                  </ul>
                </div>
              );
            }
        });
    }

    inviteCandidates = () => {
        if (this.props.curJob.questions.length == 0 && this.state.tempQuestion.length == 0) {
            this.showQForm();
        }
        else {
            let candidateCount = 0;
            let companyName = this.props.curJob.job_details.company_name;
            let jobTitle = this.props.curJob.job_details.job_title;
            let positionId = this.props.curJob.job_details.positions_id;
            // collect input name and email
            const emails = [];
            const names = [];
            const invitedCandidates = [];
            let candidates = document.getElementsByClassName("selected-candidate");
            let statusBtns = document.getElementsByClassName("invite-btn");
            for (let i = 0; i < candidates.length; i++) {
                if (candidates[i].checked) {
                    let candidate = JSON.parse(candidates[i].value);
                    // name
                    names.push(candidate.first_name + " " + candidate.last_name);
                    // email
                    emails.push(candidate.email.toLowerCase());
                    invitedCandidates.push(candidate.id);
                    candidateCount+=1;
                    // hide checkbox
                    candidates[i].style.display = "none";
                    // show invite status
                    statusBtns[i].style.display = "block";
                }
            }
            // check candidates selected or not
            if (candidateCount > 0) {
                // generate interview urls and send emails
                let urls = [];
                for (let i = 0; i < emails.length; i++) {
                    // make sure urls have the same size of emails and names
                    let url = "";
                    if (emails[i] != "" && names[i] != "") {
                        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
                        let prefix = "https://hirebeat.co/candidate-login?";  // online
                        let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
                        let encode = window.btoa(params);
                        url = prefix + encode;
                    }
                    urls.push(url);
                }
                let meta = {
                    company_name: companyName,
                    job_title: jobTitle,
                    position_id: positionId,
                    emails: emails,
                    names: names,
                    expire: 14,
                    urls: urls,
                }
                if(candidateCount > (this.props.profile.candidate_limit)){
                    alert('Upgrade Now! You can only add ' +parseInt(this.props.profile.candidate_limit)+ ' more candidates for this position!');
                }else{
                    // save data to db
                    this.props.addInterviews(meta);
                    let data = {
                        "candidates": invitedCandidates,
                        "isInvited": true,
                    }
                    this.props.updateInviteStatus(data);
                    // update
                    setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs()}, 300);
                    this.sendSuccessAlert();
                }
            }
            else {
                this.noCandidateAlert();
            }
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="card container mt-3 pt-2 pb-3">
                    <div className="row interview-txt7 interview-center" style={{color:"#56a3fa", fontSize:"1rem", display: "flex", paddingLeft: "15px", paddingRight: "15px", marginTop: "1rem"}}>
                        <div className="interview-txt5">{this.props.curJob.job_details.job_title}</div>
                        <div className="interview-txt7 interview-center" style={{marginLeft: "2rem"}}>
                            <button
                                type="button"
                                className="read-more"
                                onClick={() => {this.viewQuestions(this.props.curJob.questions)}}
                                style={{border:"none", backgroundColor:"#ffffff", fontSize:"0.9rem", fontWeight:"500", color:'#7d7d7d'}}
                            >
                                <i className="bx bx-info-circle pr-1"></i> View Questions
                            </button>
                        </div>
                        <div className="ml-auto">
                            <span style={{display: "flex", alignItems: "center"}}>
                                <i className="bx bx-search bx-sm"></i>
                                <input placeholder="Search candidate" className="search-candidate-input" style={{height: "auto"}} value={this.state.keyWords} onChange={this.onChange}></input>
                            </span>
                        </div>
                    </div>
                    <div className="card container" style={{marginTop:"1rem"}}>
                        <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                            <div className="col-2">Name</div>
                            <div className="col-3">Email</div>
                            <div className="col-2">Applied Date</div>
                            <div className="col-2">Application</div>
                            <div className="col-2">Resume</div>
                            <div className="col-1" style={{padding: "0rem"}}>Interview</div>
                        </div>
                        {this.props.curJob.applicants.map((a) => {
                            if (this.state.keyWords != "") {
                                let name = a.first_name + " " + a.last_name;
                                if (!name.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                            }
                            return (
                                <ApplicantRow
                                    applicant={a}
                                    curJob={this.props.curJob}
                                    tempQuestion={this.state.tempQuestion}
                                    profile={this.props.profile}
                                    showQForm={this.showQForm}
                                    addInterviews={this.props.addInterviews}
                                    updateInviteStatus={this.props.updateInviteStatus}
                                    getAllJobs={this.props.getAllJobs}
                                    getPJobs={this.props.getPJobs}
                                    user={this.props.user}
                                />
                            )
                        })}
                    </div>
                </div>
                <div style={{marginTop: "2rem"}}>
                    <button
                        className="default-btn1 interview-txt6"
                        style={{paddingLeft: "25px", marginBottom:"1rem"}}
                        onClick={this.inviteCandidates}
                    >
                        Invite to Interview
                        <span></span>
                    </button>
                </div>
                <MyModal80
                    show={this.state.showQForm}
                    onHide={()=>{this.hideQForm()}}
                >
                    <QuestionForm
                        curJob={this.props.curJob}
                        setCurJob={this.props.setCurJob}
                        hideQForm={this.hideQForm}
                        getAllJobs={this.props.getAllJobs}
                        tempQuestion={this.state.tempQuestion}
                        setTempQuestion={this.setTempQuestion}
                        getPJobs={this.props.getPJobs}
                    />
                </MyModal80>
            </React.Fragment>
        )
    }

}

const ApplicantRow = (props) => {
    const [showPreview, setShowPreview] = useState(false);
    const [status, setStatus] = useState(false);
    return(
        <div>
            <hr
                style={{
                    color: "#E8EDFC",
                    backgroundColor: "#E8EDFC",
                    height: 3,
                    marginBottom: "0.5rem",
                    marginTop: "0rem"
                }}
            />
            <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                <div className="col-2 interview-txt9 mt-2">
                    {(!props.applicant.is_invited && !status) &&
                        <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox"/>}
                     &nbsp; {props.applicant.first_name + " " + props.applicant.last_name}
                </div>
                <div className="col-3 interview-txt9 mt-2">{props.applicant.email}</div>
                <div className="col-2 interview-txt9 mt-2">{props.applicant.apply_date.substring(0, 10)}</div>
                <div className="col-2 interview-txt9 mt-2" style={{cursor:"pointer", color: "#67A3F3"}} onClick={()=>{setShowPreview(true);}}>View</div>
                <div className="col-2 interview-txt9 mt-2">
                    <a href={props.applicant.resume_url} style={{color: "#67A3F3"}} target="_blank">
                        Download
                    </a>
                </div>
                <div className="col-1 interview-txt9 mt-2" style={{padding: "0rem"}}>
                    {(props.applicant.is_invited || status)&&
                        <button className="default-btn"
                            style={{backgroundColor: "#13C4A1", padding: "5px"}}
                        >
                            Invited
                        </button>
                    }
                    {/* fake state, here to solve async problem */}
                    <button className="default-btn invite-btn"
                        style={{backgroundColor: "#13C4A1", padding: "5px", display: "none"}}
                    >
                        Invited
                    </button>
                </div>
            </div>
            <div style={{background:"#E8EDFC"}}>
                <MyModal className="light-blue-modal" show={showPreview} onHide={()=>{setShowPreview(false)}}>
                        <ReviewCandidate
                            phone={props.applicant.phone}
                            email={props.applicant.email}
                            location={props.applicant.location}
                            resume_url={props.applicant.resume_url}
                            first_name={props.applicant.first_name}
                            last_name={props.applicant.last_name}
                            curJob={props.curJob}
                            tempQuestion={props.tempQuestion}
                            profile={props.profile}
                            showQForm={props.showQForm}
                            addInterviews={props.addInterviews}
                            candidateId={props.applicant.id}
                            updateInviteStatus={props.updateInviteStatus}
                            getAllJobs={props.getAllJobs}
                            getPJobs={props.getPJobs}
                            user={props.user}
                            setStatus={setStatus}
                            is_invited={props.applicant.is_invited}
                            style={{backgroundColor:"black"}} onHide={()=>{setShowPreview(false)}} />
                </MyModal>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  jobs: state.job_reducer.jobs,
});

export default withRouter(connect(mapStateToProps, { addInterviews, updateInviteStatus })(
  ApplicantList
));