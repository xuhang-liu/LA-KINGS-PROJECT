import React, { Component, useState } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
//import {Link} from "react-router-dom";
import ReviewApplication from "./../ReviewApplication";
import { MyModal } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import 'boxicons';

export class JobApplication extends Component{
    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return(
            <React.Fragment>
                {this.props.loaded &&
                    <div>
                        <button onClick={this.refreshPage} style={{border:"none", backgroundColor:"#e8edfc", float:"right"}}><p><box-icon name="refresh" color="#4a6f8a"></box-icon>Refresh</p></button>
                        {Object.keys(this.props.postedJobs).reverse().map((key) => {
                            let p = this.props.postedJobs[key];
                            return(
                                <JobCard
                                    companyName={this.props.companyName}
                                    positionId={p.position_id}
                                    jobId={p.job_id}
                                    jobTitle={p.job_title}
                                    applicants={p.applicants}
                                    addInterviews={this.props.addInterviews}
                                    getApplicantsVideos={this.props.getApplicantsVideos}
                                    getApplicantsInfo={this.props.getApplicantsInfo}
                                    getRecordStatus={this.props.getRecordStatus}
                                    dataLoaded={this.props.dataLoaded}
                                    isRecorded={this.props.isRecorded}
                                    int_ques={this.props.int_ques}
                                    username_candidate={this.props.username_candidate}
                                    email_candidate={this.props.email_candidate}
                                    phone_candidate={this.props.phone_candidate}
                                    location_candidate={this.props.location_candidate}
                                    resendInvitation={this.props.resendInvitation}
                                    updateCommentStatus={this.props.updateCommentStatus}
                                />
                            )
                        })}
                    </div>
                }
            </React.Fragment>
        )
    }
};

const mapStateToProps = (state) => ({
    received_interview: state.auth_reducer.received_interview,
});

export default connect(mapStateToProps)(
    JobApplication
);

const JobCard = (props) => {
    const [invite, setInvite] = useState(false);
    const [hide, setHide] = useState(true);
    const hideSwitch = () => {setHide(hide => !hide)};

    // collect input name and email
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [name3, setName3] = useState("");
    const [name4, setName4] = useState("");
    const [name5, setName5] = useState("");

    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [email3, setEmail3] = useState("");
    const [email4, setEmail4] = useState("");
    const [email5, setEmail5] = useState("");

    function sendInvitation() {
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        let emails=[email1, email2, email3, email4, email5];
        let names = [name1, name2, name3, name4, name5];
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
            urls: urls,
        }
        // save data to db
        props.addInterviews(meta);
    }

    return (
        <React.Fragment>
            {/* Job Applications */}
            {!invite &&
                <div style={{marginBottom: "2rem"}}>
                    <div className="row">
                        <div className="col-4 interview-center">
                            <h3 className="interview-txt5">{props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                        </div>
                        <div className="col-3 interview-center" style={{paddingRight: "0px"}}>
                            <button
                                className="default-btn interview-txt6"
                                style={{paddingLeft: "25px"}}
                                onClick={() => setInvite(true)}
                            >
                                + Invite Candidates
                                <span></span>
                            </button>
                        </div>
                        <div className="interview-center">
                            <button
                                onClick={hideSwitch}
                                style={{border: "none", background: "white", borderRadius: "50%", color:"#56a3fa", marginTop:"0.6rem"}}
                                >
                                <i className="bx bx-question-mark 2"></i>
                            </button>
                        </div>
                        {!hide &&
                            <div
                                className="col interview-center"
                                style={{justifyContent: "left", background: "#FFFFFF", marginLeft: "1rem"}}
                            >
                                <p className="interview-txt7">Enter Candidate information and send email invitation.</p>
                            </div>
                        }
                    </div>
                    <div className="card container" style={{marginTop:"1%"}}>
                        <div className="row interview-txt7 interview-center" style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem"}}>
                            <div className="col-4">Name</div>
                            <div className="col-2">Invited On</div>
                            <div className="col-3" />
                            <div className="col-3" />
                        </div>
                        {/* todo add pagination */}
                        {props.applicants.map((a) => {
                            return(
                                <Applicant
                                    name={a.name}
                                    date={a.invite_date.substring(0, 10)}
                                    email={a.email}
                                    comment_status={a.comment_status}
                                    positionId={a.positions_id}
                                    isRecorded={a.is_recorded}
                                    videoCount={a.video_count}
                                    getApplicantsVideos={props.getApplicantsVideos}
                                    getApplicantsInfo={props.getApplicantsInfo}
                                    getRecordStatus={props.getRecordStatus}
                                    dataLoaded={props.dataLoaded}
                                    int_ques={props.int_ques}
                                    username_candidate={props.username_candidate}
                                    email_candidate={props.email_candidate}
                                    phone_candidate={props.phone_candidate}
                                    location_candidate={props.location_candidate}
                                    resendInvitation={props.resendInvitation}
                                    companyName={props.companyName}
                                    jobTitle={props.jobTitle}
                                    updateCommentStatus={props.updateCommentStatus}
                                />
                            )
                        })}
                    </div>
                </div>
            }

            {/* Invitation Form */}
            {invite &&
                <div className="card container" style={{marginTop:"1%", marginBottom:"2%"}}>
                    <div className="row interview-center" style={{marginTop: "2rem", marginLeft: "1%"}}>
                            <h3 className="interview-txt5">{props.jobTitle}{props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                        </div>
                    <form onSubmit={sendInvitation}>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label style={{ fontSize: "17px", margin:"2%"}}>
                                    Candidate Name
                                </label>
                                <input type="text" name="name1" onChange={(e) => {setName1(e.target.value)}} className="form-control" required="required" placeHolder="Enter your 1st candidate here"/>
                            </div>
                            <div className="form-group col-6">
                                <label style={{ fontSize: "17px", margin:"2%"}}>
                                    Candidate Email
                                </label>
                                <input type="email" name="email1" onChange={(e) => {setEmail1(e.target.value)}} className="form-control" required="required" placeHolder="Enter your 1st candidate’s email here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="text" name="name2" onChange={(e) => {setName2(e.target.value)}} className="form-control" placeHolder="Enter your 2nd candidate here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="email" name="email2" onChange={(e) => {setEmail2(e.target.value)}} className="form-control" placeHolder="Enter your 2nd candidate’s email here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="text" name="name3" onChange={(e) => {setName3(e.target.value)}} className="form-control" placeHolder="Enter your 3rd candidate here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="email" name="email3" onChange={(e) => {setEmail3(e.target.value)}} className="form-control" placeHolder="Enter your 3rd candidate’s email here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="text" name="name4" onChange={(e) => {setName4(e.target.value)}} className="form-control" placeHolder="Enter your 4th candidate here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="email" name="email4" onChange={(e) => {setEmail4(e.target.value)}} className="form-control" placeHolder="Enter your 4th candidate’s email here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="text" name="name5" onChange={(e) => {setName5(e.target.value)}} className="form-control" placeHolder="Enter your 5th candidate here"/>
                            </div>
                            <div className="form-group col-6">
                                <input type="email" name="email5" onChange={(e) => {setEmail5(e.target.value)}} className="form-control" placeHolder="Enter your 5th candidate’s email here"/>
                            </div>


                        </div>
                        <div className="form-row" style={{marginBottom: "1rem"}}>
                            <div className="col-2 d-flex justify-items">
                                <button
                                    className="default-btn interview-txt6"
                                    style={{paddingLeft: "25px", background: "#67A3F3"}}
                                    onClick={() => setInvite(false)}
                                >
                                    Cancel
                                    <span></span>
                                </button>
                            </div>
                            <div className="col-7 interview-center">
                                <p className="interview-txt8">Currently we only support adding up to 5 candidates at a time.</p>
                            </div>
                            <div className="col-3 d-flex justify-items">
                                <button
                                    type="submit"
                                    className="default-btn1"
                                    style={{marginBottom:"1.5%", paddingLeft:"25px"}}
                                >
                                    Send Invitation
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </React.Fragment>
    )
};

const Applicant = (props) => {
    let email = props.email;
    let positionId = props.positionId;
    let companyName = props.companyName;
    let jobTitle = props.jobTitle;
    let name = props.name;

    const [comment_status, set_comment_status] = useState(props.comment_status);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(email, positionId);
        props.getApplicantsInfo(email);
        setShow(true);
    };

    function inviteAgain() {
        // encode url
        let url = "";
        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
        let prefix = "https://hirebeat.co/candidate-login?";  // online
        let params = "email=" + email + "&" + "positionId=" + positionId;
        let encode = window.btoa(params);
        url = prefix + encode;

        let meta = {
            company_name: companyName,
            job_title: jobTitle,
            email: email,
            name: name,
            url: url,
        };

        props.resendInvitation(meta);
        alert();
    }


    const renderStatus = (status) => {
        switch(status){
            case 1:
                return <button className="btn btn-success" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => {setShow(true)}}>
                    Accepted
                </button>
            case 2:
                return <button className="btn btn-warning"  style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => {setShow(true)}}>
                    On Hold
                </button>
            case 3:
                return <button className="btn btn-danger" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => {setShow(true)}}>
                    Rejected
                </button>
            default:
        }
    }

    const [show, setShow] = useState(false);

    return (
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
            <div className="row interview-center" style={{color: "#7D7D7D", height: "3rem"}}>
                <div className="col-4 interview-txt9 mt-2">{props.name} ({props.email})</div>
                <div className="col-2 interview-txt9 mt-2">{props.date}</div>
                <div className="col-3">
                    {props.isRecorded ?
                        (props.videoCount > 0 ?
                            <button
                                onClick={() => viewResult()}
                                className="interview-txt9 mt-2"
                                style={{color: "#67A3F3", border: "none", background: "white"}}
                            >
                                View Interview
                            </button> :
                            <div className="interview-txt9">
                                <p style={{color: "#7D7D7D"}}>Incomplete Interview</p>
                            </div>) :
                        <div className="row" style={{alignItems: "center"}}>
                            <div className="interview-txt9">
                                <p style={{color: "#7D7D7D"}}>Pending</p>
                            </div>
                            <div>
                                <button
                                    onClick={ () => inviteAgain()}
                                    className="interview-txt9"
                                    style={{color: "#67A3F3", border: "none", background: "white"}}
                                >
                                    <i className="bx bx-redo bx-sm"></i>
                                    Resend
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-3" >
                    {renderStatus(comment_status)}
                </div>
            </div>
            {/* Interview Result */}
            <MyVerticallyCenteredModal
                set_comment_status={set_comment_status}
                show={show}
                onHide={() => setShow(false)}
                int_ques={props.int_ques}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                positionId={props.positionId}
                updateCommentStatus={props.updateCommentStatus}
            />
        </div>
    )
};

function MyVerticallyCenteredModal(props) {
  const { ...rest } = props;
  return (
    <MyModal {...rest}>
      <ReviewApplication
        set_comment_status={props.set_comment_status}
        hide={props.onHide}
        int_ques={props.int_ques}
        username_candidate={props.username_candidate}
        email_candidate={props.email_candidate}
        phone_candidate={props.phone_candidate}
        location_candidate={props.location_candidate}
        positionId={props.positionId}
        updateCommentStatus={props.updateCommentStatus}
      />
    </MyModal>
  );
};

function alert() {
    confirmAlert({
      title: "Invitation Sent",
      message: "You resend the interview invitation successfully",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};