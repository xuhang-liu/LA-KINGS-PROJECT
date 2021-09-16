import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./../jobBoard/QuestionForm";
import { MyModal80 } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews, moveCandidateToInterview } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus } from "../../../redux/actions/job_actions";
import { MyFullModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import EditQuestion from "./../jobBoard/EditQuestion";
import ReactPaginate from 'react-paginate';

export class ResumeScreening extends Component {
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
        category: { value: 'All', label: 'All' },
        editQuestion: false,
        isSortByScore: true,
        selectedPage: 0,
    }

    onFilter = (category) => {
        this.setState({ category: category })
    }
    // filter selections
    options = [
        { value: 'Invited', label: 'Interview' },
        { value: 'Hold', label: 'Hold' },
        { value: 'Rejected', label: 'Rejected' },
        { value: 'Unreviewed', label: 'Unreviewed' },
        { value: 'All', label: 'All' },
    ];

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }

    onChange = (e) => {
        this.setState({ keyWords: e.target.value });
    };

    setTempQuestion = (questions) => {
        this.setState({ tempQuestion: questions });
    }

    hideQForm = () => {
        setTimeout(() => { this.props.getAllJobs(this.props.user.id); this.props.getPJobs(); }, 300);
        this.setState({ showQForm: false });

    }

    showQForm = () => {
        this.setState({ showQForm: true });
    }

    sendSuccessAlert = () => {
        confirmAlert({
            title: "Move to Interview Process Success",
            message: "You have moved the candidates to interview process successfully.",
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
        this.setState({ editQuestion: false });
    }

    editQuestions = () => {
        this.setState({ editQuestion: true });
    }

    inviteCandidates = () => {
        let candidateCount = 0;
        let positionId = this.props.curJob.job_details.positions_id;
        let jobId = this.props.curJob.job_details.id;
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                let candidate = JSON.parse(candidates[i].value);
                names.push(candidate.first_name + " " + candidate.last_name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount += 1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if (candidateCount > (this.props.profile.candidate_limit)) {
                alert('Upgrade Now! You can only add ' + parseInt(this.props.profile.candidate_limit) + ' more candidates for this position!');
            } else {
                let data = {
                    "candidates": invitedCandidates,
                    "isInvited": 1,
                }
                let viewedData = {
                    "applyIds": invitedCandidates,
                    "isViewed": true,
                }
                let meta = {
                    position_id: positionId,
                    job_id: jobId,
                    emails: emails,
                    names: names,
                }
                this.props.moveCandidateToInterview(meta);
                this.props.updateInviteStatus(data);
                this.props.updateCandidateViewedStatus(viewedData);
                // update
                setTimeout(() => { this.props.getAllJobs(this.props.user.id); this.props.getPJobs() }, 300);
                this.sendSuccessAlert();
            }
        }
        else {
            this.noCandidateAlert();
        }
    }
    // invite candidates with video interviews
    //    inviteCandidates = () => {
    //        let candidateCount = 0;
    //        let companyName = this.props.curJob.job_details.company_name;
    //        let jobTitle = this.props.curJob.job_details.job_title;
    //        let positionId = this.props.curJob.job_details.positions_id;
    //        // collect input name and email
    //        const emails = [];
    //        const names = [];
    //        const invitedCandidates = [];
    //        let candidates = document.getElementsByClassName("selected-candidate");
    //        for (let i = 0; i < candidates.length; i++) {
    //            if (candidates[i].checked) {
    //                let candidate = JSON.parse(candidates[i].value);
    //                // name
    //                names.push(candidate.first_name + " " + candidate.last_name);
    //                // email
    //                emails.push(candidate.email.toLowerCase());
    //                invitedCandidates.push(candidate.id);
    //                candidateCount+=1;
    //            }
    //        }
    //        // check candidates selected or not
    //        if (candidateCount > 0) {
    //            if (this.props.curJob.questions.length == 0 && this.state.tempQuestion.length == 0) {
    //                return this.showQForm();
    //            }
    //            if(candidateCount > (this.props.profile.candidate_limit)){
    //                alert('Upgrade Now! You can only add ' +parseInt(this.props.profile.candidate_limit)+ ' more candidates for this position!');
    //            } else{
    //                // generate interview urls and send emails
    //                let urls = [];
    //                for (let i = 0; i < emails.length; i++) {
    //                    // make sure urls have the same size of emails and names
    //                    let url = "";
    //                    if (emails[i] != "" && names[i] != "") {
    //                        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                        let prefix = "https://hirebeat.co/candidate-login?";  // online
    //                        let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                        let encode = window.btoa(params);
    //                        url = prefix + encode;
    //                    }
    //                    urls.push(url);
    //                }
    //                let meta = {
    //                    company_name: companyName,
    //                    job_title: jobTitle,
    //                    position_id: positionId,
    //                    emails: emails,
    //                    names: names,
    //                    expire: 14,
    //                    urls: urls,
    //                }
    //                // save data to db
    //                this.props.addInterviews(meta);
    //                let data = {
    //                    "candidates": invitedCandidates,
    //                    "isInvited": 1,
    //                }
    //                let viewedData = {
    //                    "applyIds": invitedCandidates,
    //                    "isViewed": true,
    //                }
    //                this.props.updateInviteStatus(data);
    //                this.props.updateCandidateViewedStatus(viewedData);
    //                // update
    //                setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs()}, 600);
    //                this.sendSuccessAlert();
    //            }
    //        }
    //        else {
    //            this.noCandidateAlert();
    //        }
    //    }

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

    sortByScore = () => {
        this.setState({isSortByScore: !this.state.isSortByScore});
    }

    handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        this.setState({selectedPage: selectedPage});
        let page = selectedPage + 1;
        this.props.getAllJobs(this.props.user.id, page);
        sessionStorage.setItem("jobAppPage", String(selectedPage));
    };

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid mt-3 pt-2 pb-3">
                    <div className="row interview-center" style={{ color: "#56a3fa", fontSize: "1rem", display: "flex", paddingLeft: "15px", paddingRight: "15px", marginTop: "1rem" }}>
                        <div>
                            <span style={{ display: "flex", alignItems: "center" }}>
                                <i style={{position:"absolute", marginLeft:"0.5rem", marginTop:"0.2rem"}} className="bx bx-search bx-sm"></i>
                                <input placeholder="Search candidate" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                            </span>
                        </div>
                        <div className="ml-auto">
                            <ReactPaginate
                                  previousLabel={'< prev'}
                                  nextLabel={'next >'}
                                  breakLabel={'...'}
                                  breakClassName={'break-me'}
                                  pageCount={this.props.curJob.total_page}
                                  marginPagesDisplayed={1}
                                  pageRangeDisplayed={5}
                                  onPageChange={this.handlePageClick}
                                  containerClassName={'pagination3'}
                                  activeClassName={'active'}
                                  forcePage={sessionStorage.getItem("jobAppPage")?parseInt(sessionStorage.getItem("jobAppPage")):this.state.selectedPage}
                            />
                        </div>
                    </div>
                    <div className="container-fluid" style={{ marginTop: "1rem", paddingLeft:"0px"}}>
                        <div className="row interview-txt7 interview-center " style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                            <div style={{ marginLeft: "2rem" }}>
                                <input id="select-all" type="checkbox" onClick={this.selectAllCandidates} style={{ display: (this.props.curJob.all_invited ? "none" : "inline") }} />
                            </div>
                            <div className="col-4"><span>Name</span></div>
                            <div className="col-2">Applied On</div>
                            <div className="col-2">Resume Score <span onClick={this.sortByScore} style={{color: "#67A3F3", cursor: "pointer"}}><i class='bx bx-sort'></i></span></div>
                        </div>
                        {/* sort by resume score descending */}
                        {this.state.isSortByScore && this.props.curJob.applicants.sort((a, b) => parseInt(b.result_rate) - parseInt(a.result_rate)).map((a, index) => {
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
                                    case "Unreviewed":
                                        if (a.is_invited != 0) return null;
                                        break;
                                }
                            }
                            return (
                                <ApplicantRow
                                    filter={this.props.filter}
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
                                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                                />
                            )
                        })}
                        {/* sort by resume score ascending*/}
                        {!this.state.isSortByScore && this.props.curJob.applicants.sort((a, b) => parseInt(a.result_rate) - parseInt(b.result_rate)).map((a, index) => {
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
                                    case "Unreviewed":
                                        if (a.is_invited != 0) return null;
                                        break;
                                }
                            }
                            return (
                                <ApplicantRow
                                    filter={this.props.filter}
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
                                    moveCandidateToInterview={this.props.moveCandidateToInterview}
                                />
                            )
                        })}
                    </div>
                    <div className="d-flex justify-content-end" style={{marginTop: "1rem"}}>
                        <ReactPaginate
                              previousLabel={'< prev'}
                              nextLabel={'next >'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={this.props.curJob.total_page}
                              marginPagesDisplayed={1}
                              pageRangeDisplayed={5}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination3'}
                              activeClassName={'active'}
                              forcePage={sessionStorage.getItem("jobAppPage")?parseInt(sessionStorage.getItem("jobAppPage")):this.state.selectedPage}
                        />
                    </div>
                </div>
                {this.props.filter == "active" &&
                    <div style={{ marginTop: "2rem", marginLeft:"2rem" }}>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", backgroundColor:"#090d3a", paddingTop:"8px", paddingBottom:"8px" }}
                            onClick={this.inviteCandidates}
                        >
                            Move All
                            <span></span>
                        </button>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor:"#ff0000", paddingTop:"8px", paddingBottom:"8px" }}
                            onClick={this.inviteCandidates}
                        >
                            Reject All
                            <span></span>
                        </button>
                    </div>
                }
                {/* add new questions */}
                <MyModal80
                    show={this.state.showQForm}
                    onHide={() => { this.hideQForm() }}
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
                    onHide={() => { this.disableQuestionEdition() }}
                >
                    <EditQuestion
                        curJob={this.props.curJob}
                        questions={this.props.curJob.questions}
                        position={this.props.curJob.position}
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
    let resumeScore = props.applicant.result_rate;
    useEffect(() => {
        if (sessionStorage.getItem("showPreview" + props.index) === "true") {
            setShowPreview(true);
        }
    }, []);
    function onView() {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        setTimeout(() => { props.getAllJobs(props.user.id); props.getPJobs() }, 300);
        sessionStorage.setItem(("showPreview" + props.index), "true");
        sessionStorage.setItem("current", props.index);
        setShowPreview(true);
    }

    function hideModal() {
        setTimeout(() => { props.getAllJobs(props.user.id); props.getPJobs() }, 300);
        sessionStorage.removeItem("showPreview" + props.index);
        sessionStorage.removeItem("current");
        setShowPreview(false);
    }
    return (
        <div className="container-fluid">
            <hr
                style={{
                    color: "#E8EDFC",
                    backgroundColor: "#E8EDFC",
                    height: 3,
                    marginBottom: "0.3rem",
                    marginTop: "0.8rem"
                }}
            />
            <div className="row interview-txt7 interview-center candidate-row" style={{ color: "#7D7D7D", height: "2rem"}}>
                <div className="interview-txt9 mb-2" style={{ marginLeft: "1rem" }}>
                    {(props.applicant.is_invited != 1) ?
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" />
                        </div> :
                        <div>
                            <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" style={{ visibility: "hidden" }} />
                        </div>
                    }
                </div>
                <div className="col-4 interview-txt9 mb-2" style={{ cursor: "pointer", color: "#67A3F3", paddingLeft: "0.3rem" }}>
                    {(!props.applicant.is_viewed && props.applicant.is_invited != 1) ?
                        <div>
                            <span className="dot"></span>
                            <span className="applicant-name" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView()}}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div> :
                        <div>
                            <span className="dot" style={{ visibility: "hidden" }}></span>
                            <span className="applicant-name" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView()}}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div>
                    }
                </div>
                <div className="col-2 interview-txt9 mb-2"><span style={{marginLeft:"0.6rem"}}>{props.applicant.apply_date.substring(0, 10)}</span></div>
                <div className="col-2 interview-txt9 mb-2" style={{marginLeft: "30px"}}>
                    {resumeScore >= 76 && <img style={{width: "75%"}} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-great.png" />}
                    {resumeScore >= 51 && resumeScore < 76 && <img style={{width: "75%"}} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-good.png" />}
                    {resumeScore >= 26 && resumeScore < 51 && <img style={{width: "75%"}} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-avg.png" />}
                    {resumeScore >= 0 && resumeScore < 26 && <img style={{width: "75%"}} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-bad.png" />}
                </div>
            </div>
            <div style={{ background: "#E8EDFC" }}>
                <MyFullModal className="light-blue-modal" show={showPreview} onHide={hideModal}>
                    <ReviewCandidate
                        phone={applicants[parseInt(sessionStorage.getItem("current")) || current].phone}
                        email={applicants[parseInt(sessionStorage.getItem("current")) || current].email}
                        location={applicants[parseInt(sessionStorage.getItem("current")) || current].location}
                        resume_url={applicants[parseInt(sessionStorage.getItem("current")) || current].resume_url}
                        first_name={applicants[parseInt(sessionStorage.getItem("current")) || current].first_name}
                        last_name={applicants[parseInt(sessionStorage.getItem("current")) || current].last_name}
                        applicant={applicants[parseInt(sessionStorage.getItem("current")) || current]}
                        curJob={props.curJob}
                        tempQuestion={props.tempQuestion}
                        setTempQuestion={props.setTempQuestion}
                        profile={props.profile}
                        addInterviews={props.addInterviews}
                        candidateId={applicants[parseInt(sessionStorage.getItem("current")) || current].id}
                        updateInviteStatus={props.updateInviteStatus}
                        getAllJobs={props.getAllJobs}
                        getPJobs={props.getPJobs}
                        user={props.user}
                        setStatus={setStatus}
                        is_invited={applicants[parseInt(sessionStorage.getItem("current")) || current].is_invited}
                        style={{ backgroundColor: "black" }}
                        onHide={hideModal}
                        current={parseInt(sessionStorage.getItem("current")) || current}
                        setCurrent={setCurrent}
                        applicants={applicants}
                        status={status}
                        updateCandidateViewedStatus={props.updateCandidateViewedStatus}
                        linkedin={applicants[parseInt(sessionStorage.getItem("current")) || current].linkedinurl}
                        moveCandidateToInterview={props.moveCandidateToInterview}
                        filter={props.filter}
                    />
                </MyFullModal>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    profile: state.auth_reducer.profile,
    user: state.auth_reducer.user,
    jobs: state.job_reducer.jobs,
});

export default withRouter(connect(mapStateToProps, { addInterviews, updateInviteStatus, updateCandidateViewedStatus, moveCandidateToInterview })(
    ResumeScreening
));