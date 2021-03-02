import React, { Component, useState } from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
//import {Link} from "react-router-dom";
import ReviewApplication from "./../ReviewApplication";
import { MyModal80, MyModal } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import { ResumeEva } from "./ResumeEva";
import 'boxicons';
import { updateProfile } from "./../../../redux/actions/auth_actions";
//import { IconText } from "../DashboardComponents";
import { closePosition, deletePosition, getResumeURL, addSubReviewer } from "./../../../redux/actions/question_actions";
//import ReactPaginate from 'react-paginate';
import Select from 'react-select'
import * as pdfjsLib from 'pdfjs-dist';

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
                            // filter positions according to is_closed attribute
                            if (this.props.filter) {
                                switch (this.props.filter) {
                                    case "active":
                                        if (p.is_closed) return null;
                                        if ((this.props.selectedId != 0) && (this.props.selectedId != p.position_id)) return null;
                                        break;
                                    case "closed":
                                        if (!p.is_closed) return null;
                                        if ((this.props.selectedId != 0) && (this.props.selectedId != p.position_id)) return null;
                                        break;
                                    default:
                                        return null;
                                }
                            }
                            return(
                                <JobViewDetail
                                    updateProfile={this.props.updateProfile}
                                    addSubReviewer={this.props.addSubReviewer}
                                    getPJobs={this.props.getPJobs}
                                    resumeURL={this.props.resumeURL}
                                    addSelected={this.props.setselectedId}
                                    questions={p.questions}
                                    companyName={this.props.companyName}
                                    positionId={p.position_id}
                                    jobId={p.job_id}
                                    jobTitle={p.job_title}
                                    isClosed={p.is_closed}
                                    inviteDate={p.invite_date}
                                    applicants={p.applicants}
                                    addInterviews={this.props.addInterviews}
                                    getApplicantsVideos={this.props.getApplicantsVideos}
                                    getApplicantsInfo={this.props.getApplicantsInfo}
                                    getRecordStatus={this.props.getRecordStatus}
                                    dataLoaded={this.props.dataLoaded}
                                    isRecorded={this.props.isRecorded}
                                    int_ques={this.props.int_ques}
                                    id_candidate={this.props.id_candidate}
                                    username_candidate={this.props.username_candidate}
                                    email_candidate={this.props.email_candidate}
                                    phone_candidate={this.props.phone_candidate}
                                    location_candidate={this.props.location_candidate}
                                    resendInvitation={this.props.resendInvitation}
                                    updateCommentStatus={this.props.updateCommentStatus}
                                    closePosition={this.props.closePosition}
                                    deletePosition={this.props.deletePosition}
                                    getResumeURL={this.props.getResumeURL}
                                    recordTime={this.props.recordTime}
                                    interviewResume={this.props.interviewResume}
                                    user={this.props.user}
                                    profile={this.props.profile}
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
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
});

export default connect(mapStateToProps, { closePosition, deletePosition, getResumeURL, addSubReviewer, updateProfile })(
    JobApplication
);

const JobViewDetail = (props) => {
    const [view, setView] = useState(false);
    let position = {
        position_id: props.positionId,
    };

    function closeJob() {
        confirmAlert({
            title: "Confirm to Close",
            message: "Are you sure to close this position?",
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => confirmClose()
                },
                {
                  label: 'No'
                }
            ]
        });
    }

    function confirmClose() {
        props.closePosition(position);
            // refresh dashboard
        window.location.reload();
    }

    function deleteAlert() {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this position?",
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => deleteJob()
                },
                {
                  label: 'No'
                }
            ]
        });
    }

    function deleteJob() {
        props.deletePosition(position);
        // refresh current page
        window.location.reload();
    }

    return (
        <React.Fragment>
            {/* Summarize */}
            {!view &&
                <div className="container d-flex justify-content-start " style={{marginTop:"3rem", backgroundColor: "white", "border-radius": "0.5rem"}}>
                    <div className="col-12" style={{fontFamily: "Avenir Next, Segoe UI" }}>
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-9" style={{color:"#090D3A"}}>
                                    <button className="title-button" onClick={() => {setView(true), props.addSelected(props.positionId)}}>
                                        {props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}
                                    </button>
                                    <div className="row mb-2 mt-1">
                                        <div className="col-6">
                                            <p style={{color:"#4A6F8A"}}>Invited Applicants: {props.applicants.length}</p>
                                        </div>
                                        <div className="col-6 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                                            <p>Created On: {props.inviteDate.substring(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 center-items">
                                    {!props.isClosed &&
                                        <button
                                            onClick={closeJob}
                                            className="default-btn"
                                            style={{paddingLeft:"25px", backgroundColor: "#E8EDFC", color:"#090d3a"}}
                                        >
                                            Close Position
                                        </button>}
                                        {props.applicants.length <= 0 &&
                                        <button
                                            type="submit"
                                            onClick={deleteAlert}
                                            style={{border: "none", backgroundColor: "white"}}
                                        >
                                            <i className="bx bx-trash bx-md" style={{color: "#67A3F3"}}></i>
                                        </button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* Application detail*/}
            {view &&
                <JobCard
                    updateProfile={props.updateProfile}
                    addSubReviewer={props.addSubReviewer}
                    getPJobs={props.getPJobs}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    getResumeURL={props.getResumeURL}
                    resumeURL={props.resumeURL}
                    questions={props.questions}
                    companyName={props.companyName}
                    positionId={props.positionId}
                    jobId={props.jobId}
                    jobTitle={props.jobTitle}
                    isClosed={props.isClosed}
                    inviteDate={props.inviteDate}
                    applicants={props.applicants}
                    addInterviews={props.addInterviews}
                    getApplicantsVideos={props.getApplicantsVideos}
                    getApplicantsInfo={props.getApplicantsInfo}
                    getRecordStatus={props.getRecordStatus}
                    dataLoaded={props.dataLoaded}
                    isRecorded={props.isRecorded}
                    int_ques={props.int_ques}
                    id_candidate={props.id_candidate}
                    username_candidate={props.username_candidate}
                    email_candidate={props.email_candidate}
                    phone_candidate={props.phone_candidate}
                    location_candidate={props.location_candidate}
                    resendInvitation={props.resendInvitation}
                    updateCommentStatus={props.updateCommentStatus}
                    hideView={() => (setView(false), props.addSelected(0))}
                    user={props.user}
                    profile={props.profile}
                />
            }
        </React.Fragment>
    );
}

const JobCard = (props) => {
    const [invite, setInvite] = useState(false);
    //const [hide, setHide] = useState(true);
    //const hideSwitch = () => {setHide(hide => !hide)};

    function clearInvitationForm() {
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            nameElements[i].value = "";
            emailElements[i].value = "";
        }
    }

    function sendInvitation(e) {
        let companyName = props.companyName;
        let jobTitle = props.jobTitle;
        let positionId = props.positionId;
        // collect input name and email
        const emails = [];
        const names = [];
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        for (let i = 0; i < nameElements.length; i++) {
            // name
            names.push(nameElements[i].value);
            // email
            let value = emailElements[i].value;
            emails.push(value.toLowerCase());
        }
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
        // disable webpage refresh
        sendSuccessAlert();
        clearInvitationForm();
        e.preventDefault();
    }

    // pagination
    const [offset, setOffset] = useState(0);
    const [perPage, setPerPage] = useState(8);
    let pageCount = Math.ceil(props.applicants.length / 8);

    function handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);
        setOffset(offset);
    };

    function viewQuestions() {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="interview-txt7" style={{backgroundColor:'#ffffff', borderRadius:"10px", border:"2px solid #E8EDFC", padding:"1rem", paddingLeft:"3rem", paddingRight:"3rem"}}>
                  <h3>Interview Questions:</h3>
                  <ul>
                  {props.questions.map((q) => {
                      return (
                          <li><h5>{q.description}</h5></li>
                    )})}
                  </ul>
                </div>
              );
            }
        });
    }

    function inviteReviever() {
        let sub_reviewer_name = "";
        let sub_reviewer_email = "";
        function submitSubReviewer(e) {
            sub_reviewer_name = document.getElementById("sub_reviewer_name").value;
            sub_reviewer_email = document.getElementById("sub_reviewer_email").value;
            let data = {
                sub_name: sub_reviewer_name,
                sub_email: sub_reviewer_email,
                company_name: props.companyName,
                position_id: props.positionId,
            };
            props.addSubReviewer(data);
            let profile = {
                user: props.user.id,
                id: props.profile.id,
                reviewer_count: (Number(props.profile.reviewer_count) + 1),
            };
            props.updateProfile(profile);
            e.preventDefault();
            sendSuccessAlert();
        }
        
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className="interview-txt7" style={{backgroundColor:'#ffffff', borderRadius:"10px", border:"2px solid #E8EDFC", padding:"1rem", paddingLeft:"3rem", paddingRight:"3rem"}}>
                <form onSubmit={submitSubReviewer}>
                <div className="form-row">
                    <div className="form-group col-5">
                        <label style={{ fontSize: "17px", margin:"2%"}}>
                            Enter Name
                        </label>
                        <input type="text" id="sub_reviewer_name" className="form-control" required="required" placeHolder="John"/>
                    </div>
                    <div className="form-group col-7">
                        <label style={{ fontSize: "17px", margin:"2%"}}>
                            Enter Email
                        </label>
                        <input type="email" id="sub_reviewer_email" className="form-control" required="required" placeHolder="john@example.com"/>
                    </div>
                </div>
                <div className="form-row justify-items">
                    <div className="form-group col-9">
                        <h5>Support up to 3 reviewers</h5>
                    </div>
                    <div className="form-group col-3">
                    <button
                        type="submit"
                        className="default-btn1"
                        style={{paddingLeft:"25px"}}
                    >
                        Invite
                    </button>
                    </div>
                </div>
                </form>
                </div>
              );
            }
        });
    }

    // filter selections
    const options = [
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Withdrawn', label: 'Withdrawn' },
        { value: 'All', label: 'All' },
    ];

    const [category, setCategory] = useState({ value: 'All', label: 'All' });
    function onFilter(category) {
        setCategory(category);
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange (e) {
        setkeyWords(e.target.value);
    };
    // add extra invitation form
    const [addForm1, setAddForm1] = useState(false);
    const [addForm2, setAddForm2] = useState(false);
    const [addForm3, setAddForm3] = useState(false);
    const [addForm4, setAddForm4] = useState(false);
    const [addForm5, setAddForm5] = useState(false);

    // upload resumes
    var candidateNames = [];
    var candidateEmails = [];
    var resumeNames = [];
    // state refreshed the whole page, so candidateNames and candidateEmails set to []
//    const [cvUploaded, setCvUploaded] = useState("");
//    const [parsed, setParsed] = useState(false);
    function uploadResume() {
        // parse pdf from urls directly
        // let text = getTextByURL("https://hirebeat-resume.s3.amazonaws.com/CV_LiangXu.pdf")
        // console.log(text);

        // empty candidate emails and names every click
        candidateNames = [];
        candidateEmails = [];

        let input = document.getElementById("resume");
        input.click();
        input.onchange = () => {
            let num = input.files.length;
            // limit 10 pdfs at one time
            if (num > 10) {
                return overwhelm();
            }
            // get selected files
            for (let i = 0; i < num; i++) {
                // extract emails from pdf
                let pdf = input.files[i]
                getTextByPdf(pdf);
                resumeNames.push(pdf.name);
            }
            let fileNames = resumeNames.toString();
            uploadSuccess(num, fileNames, autofill);
//            setCvUploaded(num + "resumes uploaded");
//            setParsed(true);

        }
    }

    // autofill name & email
    function autofill() {
        if (candidateEmails.length <= 0 || candidateNames.length <= 0) {
            return uploadFirst();
        }
        // prefill names and emails to form
        let nameElements = document.getElementsByClassName("candidate-name");
        let emailElements = document.getElementsByClassName("candidate-email");
        let n = candidateNames.length;
        for (let i = 0; i < n; i++) {
            if (!checkName(candidateNames[i])) {
                nameError();
            }
            nameElements[i].value = candidateNames[i];
            emailElements[i].value = candidateEmails[i];
        }
    }

    // parse resumes from url
    function getTextByURL(pdfUrl){
      // ensure workSrc version align with pdfjs version
      pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
      var pdf = pdfjsLib.getDocument(pdfUrl);
      return pdf.promise.then(function(pdf) { // get all pages text
        var maxPages = pdf.numPages;
        var countPromises = []; // collecting all page promises
        for (var j = 1; j <= maxPages; j++) {
          var page = pdf.getPage(j);

          var txt = "";
          countPromises.push(page.then(function(page) { // add page promise
            var textContent = page.getTextContent();
            return textContent.then(function(text){ // return content promise
              return text.items.map(function(s) { return s.str; }).join(''); // value page text
            });
          }));
        }
        // Wait for all pages and join text
        return Promise.all(countPromises).then(function (texts) {
          return texts.join('');
        });
      });
    }

    // parse resume from local PDF files, fake upload
    function getTextByPdf(pdf){
        // step 1 read the file using file reader
        let fileReader = new FileReader();
        fileReader.onload = function() {
            // step 3 turn array buffer into typed array
            var typedArray = new Uint8Array(this.result);

            //Step 4 PDFJS should be able to read this
            // ensure workSrc version align with pdfjs version
            pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.6.347/build/pdf.worker.js';
            return pdfjsLib.getDocument(typedArray).promise.then(function(pdf) {
                // convert pdf to string
                var maxPages = pdf.numPages;
                var countPromises = []; // collecting all page promises
                for (var j = 1; j <= maxPages; j++) {
                  var page = pdf.getPage(j);

                  var txt = "";
                  countPromises.push(page.then(function(page) { // add page promise
                    var textContent = page.getTextContent();
                    return textContent.then(function(text){ // return content promise
                      return text.items.map(function(s) { return s.str; }).join(''); // value page text
                    });
                  }));
                }
                // Wait for all pages and join text
                return Promise.all(countPromises).then(function (texts) {
                  // extract email and name
                  let text = texts.join('');
                  let email = extractEmail(text);
                  let name = extractName(text);
                  // check email
                  if (email != null) {
                    candidateEmails.push(email[0]);
                    candidateNames.push(name);
                  }
                });
            });
        }

        // step2 read the file as ArrayBuffer
        fileReader.readAsArrayBuffer(pdf);
    }

    function extractEmail(text) {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }

    function extractName(text) {
        let array = text.split(" ");
        let name = "";
        let count = 0;
        for (let i = 0; i < 3; i++) {
            if (array[i] != "" && count < 1) {
                name += array[i] + " ";
                count++;
            }
            else if (array[i] != "" && count < 2) {
                name += array[i];
                count++
            }
        }
        return name;
    }

    function checkName(text) {
        // allow alphabets and space
        var regex=/^[A-Za-z ]+$/ig;
        return regex.test(text);
    }

    return (
        <React.Fragment>
            {/* Job Applications */}
            {!invite &&
                <div className="card container mt-3 pt-2 pb-3">
                    <div className="interview-center" style={{marginLeft:"-0.5rem", marginBottom:"1.4rem"}}>
                        <button
                            type="button"
                            className="read-more"
                            style={{border:"none", backgroundColor:"#ffffff", fontSize:"1.2rem", fontWeight:"500"}}
                            onClick={props.hideView}
                        >
                            <i className="bx bx-chevrons-left pr-1"></i> Back
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-4 interview-center mt-2">
                            <h3 className="interview-txt5" style={{wordWrap: "break-word", wordBreak: "break-all",}}>{props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                        </div>
                        <div className="col-2 interview-txt7 interview-center mt-2">
                            <button
                            type="button"
                            className="read-more"
                            style={{border:"none", backgroundColor:"#ffffff", fontSize:"0.9rem", fontWeight:"500", color:'#7d7d7d'}}
                            onClick={viewQuestions}
                            >
                            <i className="bx bx-info-circle pr-1"></i> View Questions
                            </button>
                        </div>
                        <div className="col-3 interview-center">
                            {!props.isClosed &&
                                <button
                                    className="default-btn interview-txt6"
                                    style={{paddingLeft: "25px", marginBottom:"1rem"}}
                                    onClick={() => setInvite(true)}
                                >
                                    + Invite Candidates
                                    <span></span>
                                </button>
                            }
                        </div>
                        <div className="col-3 interview-center">
                                <div className="mr-2" style={{display:"inline-block"}}>
                                <p>XH</p>
                                </div>
                                <button
                                    className="default-btn1 interview-txt6"
                                    style={{paddingLeft: "25px", marginBottom:"1rem", display:"inline-block"}}
                                    onClick={inviteReviever}
                                >
                                    + Invite Reviewer
                                    <span></span>
                                </button>
                        </div>
                    </div>
                    <div className="interview-txt7 interview-center" style={{color:"#56a3fa", fontSize:"1rem"}}>
                        <label><i className="bx bx-search"></i></label>
                        <input placeholder="Search candidate" className="search-candidate-input" value={keyWords} onChange={onChange}></input>
                    </div>
                    <div className="card container" style={{marginTop:"2%"}}>
                        <div className="row interview-txt7 interview-center " style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                            <div className="col-2">Name</div>
                            <div className="col-4">Email</div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="center-items" style={{marginRight: "1rem"}}>Status: </div>
                                    <Select value={category} onChange={onFilter} options={options} className="select-category" />
                                </div>
                            </div>
                            <div className="col-3">Reviews</div>
                        </div>
                        <div style={{marginBottom:"2rem"}}>
                            <ApplicantList
                                recordTime={props.recordTime}
                                interviewResume={props.interviewResume}
                                getResumeURL={props.getResumeURL}
                                resumeURL={props.resumeURL}
                                isClosed={props.isClosed}
                                keyWords={keyWords}
                                category={category}
                                applicants={props.applicants}
                                getApplicantsVideos={props.getApplicantsVideos}
                                getApplicantsInfo={props.getApplicantsInfo}
                                getRecordStatus={props.getRecordStatus}
                                dataLoaded={props.dataLoaded}
                                int_ques={props.int_ques}
                                id_candidate={props.id_candidate}
                                username_candidate={props.username_candidate}
                                email_candidate={props.email_candidate}
                                phone_candidate={props.phone_candidate}
                                location_candidate={props.location_candidate}
                                resendInvitation={props.resendInvitation}
                                companyName={props.companyName}
                                jobTitle={props.jobTitle}
                                updateCommentStatus={props.updateCommentStatus}
                                offset={offset}
                            />
                             {/*<ReactPaginate
                                 previousLabel={'<'}
                                 nextLabel={'>'}
                                 breakLabel={'...'}
                                 breakClassName={'break-me'}
                                 pageCount={pageCount}
                                 marginPagesDisplayed={2}
                                 pageRangeDisplayed={5}
                                 onPageChange={handlePageClick}
                                 containerClassName={'pagination'}
                                 subContainerClassName={'pages pagination'}
                                 activeClassName={'active'}
                             />*/}
                        </div>
                    </div>
                </div>
            }

            {/* Invitation Form */}
            {invite &&
                <div className="card container" style={{marginTop:"1%", marginBottom:"2%"}}>
                    <div className="row interview-center" style={{marginTop: "2rem", marginLeft: "1%"}}>
                        <h3 className="interview-txt5">{props.jobTitle}{props.jobId == "" ? null : "(ID: " + props.jobId + ")"}</h3>
                    </div>
                    <div className="row m-3">
                        <button type="button" className="default-btn resume-upload" onClick={uploadResume}>
                            <i className="bx bx-cloud-upload bx-sm"></i>
                              Upload Resume
                        </button>
                        <input id="resume" type="file" multiple style={{display: "none"}} accept=".pdf" />
                        <div style={{marginLeft: "1rem", marginTop: "1rem"}}>
                            <span className="upload-txt">
                            Bulk Upload (.pdf only; max:10)
                            </span>
                        </div>
                        {/*parsed &&
                            <div style={{display: "flex", alignItems: "center", marginLeft: "1rem"}}>
                                <span className="upload-txt">
                                    <i className="bx bx-file"></i>
                                    {cvUploaded}
                                    <i className="bx bxs-check-circle" style={{color: "#13C4A1", marginLeft: "0.5rem"}}></i>
                                </span>
                            </div>*/}
                        {/*<button type="button" className="default-btn" style={{backgroundColor: "#090D3A", paddingLeft: "25px", marginLeft: "2rem"}} onClick={autofill}>Autofill</button>*/}
                    </div>
                    <form onSubmit={sendInvitation}>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label style={{ fontSize: "17px", margin:"2%"}}>
                                    Candidate Name
                                </label>
                                <input type="text" name="name1" className="form-control candidate-name" required="required" placeHolder="John"/>
                            </div>
                            <div className="form-group col-6">
                                <label style={{ fontSize: "17px", margin:"2%"}}>
                                    Candidate Email
                                </label>
                                <input type="email" name="email1" className="form-control candidate-email" required="required" placeHolder="john@example.com"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name2" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email2" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name3" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email3" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name4" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email4" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name5" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email5" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name6" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email6" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name7" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email7" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name8" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email8" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name9" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email9" className="form-control candidate-email"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="text" name="name10" className="form-control candidate-name"/>
                            </div>
                            <div className="form-group col-6">
                            <input type="email" name="email10" className="form-control candidate-email"/>
                            </div>
                            </div>
                            <div className="col d-flex justify-items">
                                {/*!addForm1 &&
                                    <button
                                        type="button"
                                        className="default-btn"
                                        style={{paddingLeft: "25px"}}
                                        onClick={() => setAddForm1(true)}
                                    >
                                        Add 5 More
                                    </button>*/}
                            </div>
                        {/* add additional form */}
                        {addForm1 &&
                            <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                        }
                        {addForm2 &&
                            <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                        }
                        {addForm3 &&
                            <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                        }
                        {addForm4 &&
                            <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                        }
                        {addForm5 &&
                            <InvitationForm uploadResume={uploadResume} autofill={autofill} />
                        }
                        <div>
                            <div className="col d-flex justify-items">
                                {(addForm1 && !addForm2) &&
                                    <button
                                        className="default-btn interview-txt6"
                                        style={{paddingLeft: "25px", background: "#67A3F3"}}
                                        onClick={() => setAddForm2(true)}
                                    >
                                        Add 5 More
                                    </button>
                                }
                            </div>
                            <div className="col d-flex justify-items">
                                {(addForm2 && !addForm3) &&
                                    <button
                                        className="default-btn interview-txt6"
                                        style={{paddingLeft: "25px", background: "#67A3F3"}}
                                        onClick={() => setAddForm3(true)}
                                    >
                                        Add 5 More
                                    </button>
                                }
                            </div>
                            <div className="col d-flex justify-items">
                                {(addForm3 && !addForm4) &&
                                    <button
                                        className="default-btn interview-txt6"
                                        style={{paddingLeft: "25px", background: "#67A3F3"}}
                                        onClick={() => setAddForm4(true)}
                                    >
                                        Add 5 More
                                    </button>}
                            </div>
                            <div className="col d-flex justify-items">
                                {(addForm4 && !addForm5) &&
                                    <button
                                        className="default-btn interview-txt6"
                                        style={{paddingLeft: "25px", background: "#67A3F3"}}
                                        onClick={() => setAddForm5(true)}
                                    >
                                        Add 5 More
                                    </button>
                                }
                            </div>
                        </div>

                        <div className="form-row justify-items" style={{marginBottom: "1rem"}}>
                            <div className="col-2 d-flex justify-items">
                                <button
                                    type="button"
                                    className="default-btn interview-txt6"
                                    style={{paddingLeft: "25px", background: "#67A3F3"}}
                                    onClick={() => {setInvite(false); props.getPJobs()}}
                                >
                                    Back
                                    <span></span>
                                </button>
                            </div>
                            <div className="col-7 interview-center">
                                {/*<p className="interview-txt8">Currently we only support adding up to 5 candidates at a time.</p>*/}
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

const InvitationForm = (props) => {
    return (
        <div>
            <div className="row">
                <button type="button" className="default-btn resume-upload" onClick={uploadResume}>
                    <i className="bx bx-cloud-upload bx-sm"></i>
                        Upload Resume
                </button>
                <input id="resume" type="file" multiple style={{display: "none"}} accept=".pdf" />
                <div style={{marginLeft: "1rem", marginTop: "1rem"}}>
                    <span className="upload-txt">
                    Bulk Upload (.pdf only; max:10)
                    </span>
                </div>
                {/*parsed &&
                    <div style={{display: "flex", alignItems: "center", marginLeft: "1rem"}}>
                        <span className="upload-txt">
                            <i className="bx bx-file"></i>
                            {cvUploaded}
                            <i className="bx bxs-check-circle" style={{color: "#13C4A1", marginLeft: "0.5rem"}}></i>
                        </span>
                    </div>*/}
                <button type="button" className="default-btn" style={{backgroundColor: "#090D3A", paddingLeft: "25px", marginLeft: "2rem"}} onClick={props.autofill}>Autofill</button>
            </div>
            <div className="form-row">
                <div className="form-group col-6">
                    <label style={{ fontSize: "17px", margin:"2%"}}>
                        Candidate Name
                    </label>
                    <input type="text" name="name1" className="form-control candidate-name"/>
                </div>
                <div className="form-group col-6">
                    <label style={{ fontSize: "17px", margin:"2%"}}>
                        Candidate Email
                    </label>
                    <input type="email" name="email1" className="form-control candidate-email"/>
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name2" className="form-control candidate-name"/>
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email2" className="form-control candidate-email"/>
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name3" className="form-control candidate-name"/>
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email3" className="form-control candidate-email"/>
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name4" className="form-control candidate-name"/>
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email4" className="form-control candidate-email"/>
                </div>
                <div className="form-group col-6">
                    <input type="text" name="name5" className="form-control candidate-name"/>
                </div>
                <div className="form-group col-6">
                    <input type="email" name="email5" className="form-control candidate-email"/>
                </div>
            </div>
        </div>
    )
}

const ApplicantList = (props) => {
    // get current page applicants(8)
    //let index = props.offset; // start index at applicants array
    //let applicants = props.applicants.slice(index, index + 8); // each page has 8 candidates at most
    return (
        <div>
            {props.applicants.map((a) => {
                // filter applicants by status
                if (props.category.value != "All") {
                    switch (props.category.value) {
                        case "Pending":
                            if (a.is_recorded) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Withdrawn":
                            if (!a.is_recorded || (a.is_recorded && a.video_count > 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Completed":
                            if (!a.is_recorded || (a.is_recorded && a.video_count <= 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                    }
                }
                else if (props.keyWords != "") {
                    var canEmail = a.email.split("@")[0];
                    var canName = a.name;
                    if((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                }
                return (
                    <Applicant
                        recordTime={props.recordTime}
                        interviewResume={props.interviewResume}
                        getResumeURL={props.getResumeURL}
                        resumeURL={props.resumeURL}
                        isClosed={props.isClosed}
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
                        id_candidate={props.id_candidate}
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
    );
}

const Applicant = (props) => {
    let email = props.email;
    let positionId = props.positionId;
    let companyName = props.companyName;
    let jobTitle = props.jobTitle;
    let name = props.name;

    function viewResult() {
        // get videos and info
        props.getResumeURL(positionId, props.id_candidate);
        props.getApplicantsVideos(email, positionId);
        props.getApplicantsInfo(email);
        setTimeout(()=>{setShow(true);}, 200)
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
                if (props.videoCount > 0){
                return <button className="btn btn-success" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => viewResult()}>
                    Shortlist
                </button>}
                else{
                return <button className="btn btn-success" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}}>
                    Shortlist
                </button>
                }
            case 2:
                if (props.videoCount > 0){
                return <button className="btn btn-warning"  style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => viewResult()}>
                    Hold
                </button>}
                else{
                return <button className="btn btn-warning"  style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}}>
                    Hold
                </button>
                }
            case 3:
                if (props.videoCount > 0){
                return <button className="btn btn-danger" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}} onClick={() => viewResult()}>
                    Reject
                </button>}
                else{
                return <button className="btn btn-danger" style={{minWidth:"7rem", maxHeight:"2.4rem", paddingTop:"0.6rem"}}>
                    Reject
                </button>
                }
            default:
        }
    }

    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);

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
                {props.videoCount > 0 ? 
                <div className="col-2 mt-2">
                    <button className="title-button1" onClick={() => viewResult()}>
                        {props.name}</button></div>
                : <div className="col-2 interview-txt9 mt-2">{props.name}</div>
                }
                {props.videoCount > 0 ? 
                <div className="col-4 mt-2">
                    <button className="title-button1" onClick={() => viewResult()}>
                        {props.email}</button></div>
                : <div className="col-4 interview-txt9 mt-2">{props.email}</div>
                }
                <div className="col-3">
                    {props.isRecorded ?
                        (props.videoCount > 0 ?
                            <div>
                            <div className="interview-txt9">
                                <p style={{color: "#090d3a", display:"inline-block"}}><strong>Completed</strong></p>
                            
                            <button
                                onClick={() => viewResult()}
                                className="interview-txt9"
                                style={{color: "#67A3F3", border: "none", background: "white", display:"inline-block"}}
                            >
                                <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> View
                            </button>
                            </div>
                            </div> :
                            <div className="interview-txt9">
                                <p style={{color: "#7D7D7D"}}>Withdrawn</p>
                            </div>) :
                        <div className="row" style={{alignItems: "center"}}>
                            <div className="interview-txt9">
                                <p style={{color: "#7D7D7D"}}>Pending</p>
                            </div>
                            {!props.isClosed && 
                            <div>
                                <button
                                    onClick={ () => inviteAgain()}
                                    className="interview-txt9"
                                    style={{color: "#67A3F3", border: "none", background: "white"}}
                                >
                                    <i className="bx bx-redo interview-txt9" style={{color: "#67A3F3"}}></i>
                                    Invite Again
                                </button>
                            </div>}
                        </div>
                    }
                </div>
                <div className="col-3" >
                    {renderStatus(props.comment_status)}
                </div>
            </div>
            {/* Interview Result */}
            <MyVerticallyCenteredModal
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                comment_status={props.comment_status}
                show={show}
                setShowResume={setShowResume}
                setShowEva={setShowEva}
                onHide={()=>{setShow(false);}}
                int_ques={props.int_ques}
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                positionId={props.positionId}
                updateCommentStatus={props.updateCommentStatus}
            />
            <MyModal80
                show={showResume}
                onHide={()=>{setShowResume(false); setShow(true);}}
            >
                <div class="iframe-container">
                    <iframe className="responsive-iframe" src={props.resumeURL}/>
                </div>
            </MyModal80>
            <MyModal80
                show={showEva}
                onHide={()=>{setShowEva(false); setShow(true);}}
            >
                <ResumeEva interviewResume={props.interviewResume}/>
            </MyModal80>
        </div>
    )
};

function MyVerticallyCenteredModal(props) {
  const { ...rest } = props;
  return (
    <MyModal80 {...rest}>
      <ReviewApplication
        recordTime={props.recordTime}
        interviewResume={props.interviewResume}
        setShowResume={props.setShowResume}
        setShowEva={props.setShowEva}
        comment_status={props.comment_status}
        set_comment_status={props.set_comment_status}
        hide={props.onHide}
        int_ques={props.int_ques}
        id_candidate={props.id_candidate}
        username_candidate={props.username_candidate}
        email_candidate={props.email_candidate}
        phone_candidate={props.phone_candidate}
        location_candidate={props.location_candidate}
        positionId={props.positionId}
        updateCommentStatus={props.updateCommentStatus}
      />
    </MyModal80>
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

function alertSuccess() {
    confirmAlert({
      title: "Invitation Sent",
      message: "Invitation of Reviewer successfully",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function overwhelm() {
    confirmAlert({
      title: "Too Many Resumes",
      message: "You can only upload 10 resumes at most each time",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function uploadFirst() {
    confirmAlert({
      title: "Upload Resume First",
      message: "Please upload resumes to autofill candidate information",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function uploadSuccess(num, fileNames, autofill) {
    confirmAlert({
      title: "Upload Resume Success",
      message: "You have uploaded " + num + " resumes：" + fileNames,
      buttons: [
        {
          label: 'Auto Fill Now',
          onClick: () => autofill()
        }
      ]
    });
};

function nameError() {
    confirmAlert({
      title: "Name Error",
      message: "The candidate name in the resume file is invalid, please type it manually",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function emailError() {
    confirmAlert({
      title: "Email Error",
      message: "The candidate email in the resume file is invalid, please type it manually",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function sendSuccessAlert() {
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