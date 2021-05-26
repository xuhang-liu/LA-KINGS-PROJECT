import React, { Component, useState } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./QuestionForm";
import { MyModal80 } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus } from "../../../redux/actions/job_actions";
import { MyModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import Select from 'react-select';
import EditQuestion from "./EditQuestion"

export class ApplicantList extends Component{
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
        category: { value: 'All', label: 'All' },
        editQuestion: false,
    }

    onFilter = (category) => {
        this.setState({category: category})
    }
    // filter selections
    options = [
        { value: 'Invited', label: 'Invited' },
        { value: 'Hold', label: 'Hold' },
        { value: 'Rejected', label: 'Rejected' },
        { value: 'All', label: 'All' },
    ];

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({    ...styles,
                                     color: '#090D3A',
                                     fontSize: '0.9375rem',
                                     fontFamily: 'Avenir Next,Segoe UI, sans-serif',
                                     fontWeight: '500'}),
    }

    onChange = (e) => {
        this.setState({keyWords: e.target.value});
    };

    setTempQuestion = (questions) => {
        this.setState({tempQuestion: questions});
    }

    hideQForm = () => {
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs();}, 300);
        this.setState({showQForm: false});

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

    disableQuestionEdition = () => {
        this.setState({editQuestion: false});
    }

    editQuestions = () => {
        this.setState({editQuestion: true});
    }

    inviteCandidates = () => {
        let candidateCount = 0;
        let companyName = this.props.curJob.job_details.company_name;
        let jobTitle = this.props.curJob.job_details.job_title;
        let positionId = this.props.curJob.job_details.positions_id;
        // collect input name and email
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                let candidate = JSON.parse(candidates[i].value);
                // name
                names.push(candidate.first_name + " " + candidate.last_name);
                // email
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount+=1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if (this.props.curJob.questions.length == 0 && this.state.tempQuestion.length == 0) {
                return this.showQForm();
            }
            if(candidateCount > (this.props.profile.candidate_limit)){
                alert('Upgrade Now! You can only add ' +parseInt(this.props.profile.candidate_limit)+ ' more candidates for this position!');
            } else{
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
                // save data to db
                this.props.addInterviews(meta);
                let data = {
                    "candidates": invitedCandidates,
                    "isInvited": 1,
                }
                let viewedData = {
                    "applyIds": invitedCandidates,
                    "isViewed": true,
                }
                this.props.updateInviteStatus(data);
                this.props.updateCandidateViewedStatus(viewedData);
                // update
                setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs()}, 600);
                this.sendSuccessAlert();
            }
        }
        else {
            this.noCandidateAlert();
        }
    }

    selectAllCandidates = () => {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
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
                                onClick={this.editQuestions}
                                style={{border:"none", backgroundColor:"#ffffff", fontSize:"0.9rem", fontWeight:"500", color:'#7d7d7d'}}
                            >
                                <i className="bx bx-info-circle pr-1"></i> Edit Questions
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
                            <div style={{marginLeft: "1rem"}}>
                                <input id="select-all" type="checkbox" onClick={this.selectAllCandidates} style={{display: (this.props.curJob.all_invited ? "none" : "inline")}} />
                            </div>
                            <div className="col-2">Name</div>
                            <div className="col-3">Email</div>
                            <div className="col-2">Applied On</div>
                            <div className="col-2">Application</div>
                            <div className="col-1" style={{padding: "0rem", zIndex: "9999"}}>
                                <Select value={this.state.category} onChange={this.onFilter} options={this.options} className="select-category" styles={this.customStyles}/>
                            </div>
                        </div>
                        {this.props.curJob.applicants.sort((a, b) => new Date(b.apply_date) - new Date(a.apply_date)).map((a, index) => {
                            if (this.state.keyWords != "") {
                                let name = a.first_name + " " + a.last_name;
                                if (!name.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
                            }
                            if (this.state.category.value != "All") {
                                switch (this.state.category.value) {
                                    case "Invited":
                                        if (a.is_invited != 1) return null;
                                        break;
                                    case "Hold":
                                        if (a.is_invited != 2) return null;
                                        break;
                                    case "Rejected":
                                        if (a.is_invited != 3) return null;
                                        break;
                                }
                            }
                            return (
                                <ApplicantRow
                                    applicant={a}
                                    index={index}
                                    applicants={this.props.curJob.applicants}
                                    curJob={this.props.curJob}
                                    tempQuestion={this.state.tempQuestion}
                                    setTempQuestion={this.setTempQuestion}
                                    profile={this.props.profile}
                                    addInterviews={this.props.addInterviews}
                                    updateInviteStatus={this.props.updateInviteStatus}
                                    updateCandidateViewedStatus={this.props.updateCandidateViewedStatus}
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
                {/* add new questions */}
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
                        addInterviews={this.props.addInterviews}
                        updateInviteStatus={this.props.updateInviteStatus}
                    />
                </MyModal80>
                {/* Edit Questions */}
                <MyModal80
                    show={this.state.editQuestion}
                    onHide={()=>{this.disableQuestionEdition()}}
                >
                    <EditQuestion
                        curJob={this.props.curJob}
                        questions={this.props.curJob.questions}
                        disableQuestionEdition={this.disableQuestionEdition}
                        getAllJobs={this.props.getAllJobs}
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
    const [current, setCurrent] = useState(props.index);
    let applicants = props.applicants;
    let name = props.applicant.first_name + " " + props.applicant.last_name;
    function onView() {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        setTimeout(() => {props.getAllJobs(props.user.id); props.getPJobs()}, 300);
        setShowPreview(true);
    }

    function hideModal() {
        setTimeout(() => {props.getAllJobs(props.user.id); props.getPJobs()}, 300);
        setShowPreview(false);
    }
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
            <div className="row interview-txt7 interview-center candidate-row" style={{color: "#7D7D7D", height: "2rem", marginTop:"0.5rem", paddingBottom: "3rem"}}>
                <div className="interview-txt9 mt-2" style={{marginLeft: "1rem"}}>
                    {(props.applicant.is_invited != 1) ?
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox"/>
                        </div> :
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" style={{visibility: "hidden"}}/>
                        </div>
                    }
                </div>
                <div className="col-2 interview-txt9 mt-2" style={{cursor:"pointer", color: "#67A3F3", paddingLeft: "0.3rem"}}>
                     {(!props.applicant.is_viewed && props.applicant.is_invited != 1) ?
                        <div>
                            <span className="dot"></span>
                            <span className="applicant-name" type="button" onClick={()=>{setCurrent(props.index); onView()}}>
                                {name.length > 11 ? name.substring(0, 9) + "..." : name}
                            </span>
                        </div> :
                        <div>
                            <span className="dot" style={{visibility: "hidden"}}></span>
                            <span className="applicant-name" type="button" onClick={()=>{setCurrent(props.index); onView()}}>
                                {name.length > 11 ? name.substring(0, 9) + "..." : name}
                            </span>
                        </div>
                    }
                </div>
                <div className="col-3 interview-txt9 mt-2">{props.applicant.email.length > 25 ? props.applicant.email.substring(0, 23) + "..." : props.applicant.email}</div>
                <div className="col-2 interview-txt9 mt-2">{props.applicant.apply_date.substring(0, 10)}</div>
                <div className="col-2 interview-txt9 mt-2" style={{cursor:"pointer", color: "#67A3F3"}} onClick={()=>{setCurrent(props.index); onView()}}>View</div>
                <div className="col-1 interview-txt9 mt-2" style={{padding: "0rem"}}>
                    {(props.applicant.is_invited == 1) &&
                        <button className="default-btn invite-btn"
                            style={{backgroundColor: "#13C4A1", padding: "5px", width: "5rem", textAlign: "center"}}
                        >
                            Invited
                        </button>
                    }
                    {(props.applicant.is_invited == 2) &&
                        <button className="default-btn invite-btn"
                            style={{backgroundColor: "#FF6B00", padding: "5px", width: "5rem", textAlign: "center"}}
                        >
                            Hold
                        </button>
                    }
                    {(props.applicant.is_invited == 3) &&
                        <button className="default-btn invite-btn"
                            style={{backgroundColor: "#FF0000", padding: "5px", width: "5rem", textAlign: "center"}}
                        >
                            Rejected
                        </button>
                    }
                </div>
            </div>
            <div style={{background:"#E8EDFC"}}>
                <MyModal className="light-blue-modal" show={showPreview} onHide={hideModal}>
                        <ReviewCandidate
                            phone={applicants[current].phone}
                            email={applicants[current].email}
                            location={applicants[current].location}
                            resume_url={applicants[current].resume_url}
                            first_name={applicants[current].first_name}
                            last_name={applicants[current].last_name}
                            applicant={applicants[current]}
                            curJob={props.curJob}
                            tempQuestion={props.tempQuestion}
                            setTempQuestion={props.setTempQuestion}
                            profile={props.profile}
                            addInterviews={props.addInterviews}
                            candidateId={applicants[current].id}
                            updateInviteStatus={props.updateInviteStatus}
                            getAllJobs={props.getAllJobs}
                            getPJobs={props.getPJobs}
                            user={props.user}
                            setStatus={setStatus}
                            is_invited={applicants[current].is_invited}
                            style={{backgroundColor:"black"}}
                            onHide={()=>{setShowPreview(false)}}
                            current={current}
                            setCurrent={setCurrent}
                            applicants={applicants}
                            status={status}
                            updateCandidateViewedStatus={props.updateCandidateViewedStatus}
                            linkedin={applicants[current].linkedinurl}
                        />
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

export default withRouter(connect(mapStateToProps, { addInterviews, updateInviteStatus, updateCandidateViewedStatus })(
  ApplicantList
));