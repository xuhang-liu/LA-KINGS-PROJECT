import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./../jobBoard/QuestionForm";
import { MyModal80 } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews, moveCandidateToInterview, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, updateViewStatus, updateCommentStatus } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus, updateApplicantBasicInfo } from "../../../redux/actions/job_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../../redux/actions/video_actions";
import { subreviewerUpdateComment } from "../../../redux/actions/auth_actions";
import { MyFullModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import Select from 'react-select';
import EditQuestion from "./../jobBoard/EditQuestion";
import ReactPaginate from 'react-paginate';
import NewCandidateAdditionForm from "./interviewComponents/NewCandidateAdditionForm";

export class AllCandidates extends Component {
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
        category: { value: '', label: 'All' },
        editQuestion: false,
        selectedPage: 0,
        stage: { value: '', label: 'All' },
        isAddNewCandidate: false,
    }

    onFilter = (category) => {
        this.setState({ category: category })
        let page = this.state.selectedPage + 1;
        let stage = this.state.stage.value;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, stage, category.value, "")}, 300);
    }

    filterStage = (stage) => {
        this.setState({ stage: stage });
        let page = this.state.selectedPage + 1;
        let status = this.state.category.value;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, stage.value, status, "")}, 300);
    }
    // filter selections
    options = [
        { value: "True", label: 'Active' },
        { value: "False", label: 'Rejected' },
        { value: '', label: 'All' },
    ];

    // filter selections
    stageOptions = [
        { value: 'Resume Review', label: 'Resume Review' },
        { value: 'Video Interview', label: 'Video Interview' },
        { value: 'Live Interview', label: 'Live Interview' },
        { value: 'Short List', label: 'Short List' },
        { value: 'Unqualified', label: 'Unqualified' },
        { value: '', label: 'All' },
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
        let page = this.state.selectedPage + 1;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, "", "", ""); this.props.getPostedJobs(this.props.user.id, page, ""); }, 300);
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
                let page = this.state.selectedPage + 1;
                setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, "", "", ""); this.props.getPostedJobs(this.props.user.id, page, "") }, 300);
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

    handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        this.setState({ selectedPage: selectedPage });
        let page = selectedPage + 1;
        this.props.getAllJobs(this.props.user.id, page, "", "", "");
    };

    addNewCandidates = () => {
        if ((this.props.curJob.applicant) >= (this.props.profile.candidate_limit)) {
            this.candidateLimitAlert();
        } else {
            this.setState({isAddNewCandidate: true});
        }
    }

    hideAdditionForm = () => {
        this.setState({isAddNewCandidate: false});
    }

    candidateLimitAlert = () => {
        confirmAlert({
            title: 'Upgrade Now!',
            message: 'Exceed max number of candidates! Upgrade now to invite more candidates',
            buttons: [
                { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                { label: 'OK' },
            ]
        });
    };

    render() {
        return (
            <React.Fragment>
                {!this.state.isAddNewCandidate ?
                    <div>
                        <div className="container-fluid mt-3 pt-2 pb-3">
                            <div className="row interview-center" style={{ color: "#56a3fa", fontSize: "1rem", display: "flex", paddingLeft: "15px", paddingRight: "15px", marginTop: "1rem" }}>
                                <div>
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <i style={{ position: "absolute", marginLeft: "0.5rem", marginTop: "0.2rem" }} className="bx bx-search bx-sm"></i>
                                        <input placeholder="Search candidate" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                                    </span>
                                </div>
                                <div>
                                    {(!this.props.profile.is_subreviwer && (this.props.curJob.job_details.gh_current_stage_id == "" || this.props.curJob.job_details.gh_current_stage_id == null)) &&
                                        <div>
                                            {!this.props.isClosed &&
                                                <button
                                                    className="default-btn1 interview-txt6"
                                                    style={{ paddingLeft: "25px", marginLeft: "2rem" }}
                                                    onClick={this.addNewCandidates}
                                                >
                                                    + Candidates
                                                    <span></span>
                                                </button>
                                            }
                                        </div>
                                    }
                                </div>
                                {this.props.curJob.total_page > 1 &&
                                    <div className="ml-auto">
                                        <ReactPaginate
                                            previousLabel={'< Prev'}
                                            nextLabel={'Next >'}
                                            breakLabel={'...'}
                                            breakClassName={'break-me'}
                                            pageCount={this.props.curJob.total_page}
                                            marginPagesDisplayed={1}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={'pagination3'}
                                            activeClassName={'active'}
                                            forcePage={this.state.selectedPage}
                                        />
                                    </div>
                                }
                            </div>
                            <div className="container-fluid chart-bg1" style={{ marginTop: "1rem" }}>
                                <div className="row interview-txt7 interview-center pl-3" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                                    <div className="col-4"><span>Name</span></div>
                                    <div className="col-2">Applied On</div>
                                    <div className="col-3" style={{ padding: "0rem", zIndex: "9999" }}>
                                        <div className="row" style={{ padding: "0rem" }}>
                                            <span className="job-status">Current Stage</span>
                                            <Select value={this.state.stage} onChange={this.filterStage} options={this.stageOptions} className="select-category" styles={this.customStyles} />
                                        </div>
                                    </div>
                                    <div className="col-2" style={{ padding: "0rem", zIndex: "9999" }}>
                                        <div className="row" style={{ padding: "0rem" }}>
                                            <span className="job-status">Status</span>
                                            <Select value={this.state.category} onChange={this.onFilter} options={this.options} className="select-category" styles={this.customStyles} />
                                        </div>
                                    </div>
                                </div>
                                {this.props.curJob.applicants.map((a, index) => {
                                    if (this.state.keyWords != "") {
                                        let name = a.first_name + " " + a.last_name;
                                        if (!name.toLowerCase().includes(this.state.keyWords.toLowerCase())) return null;
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
                                            selectedPage={this.state.selectedPage}
                                            getReviewNote={this.props.getReviewNote}
                                            addOrUpdateReviewerEvaluation={this.props.addOrUpdateReviewerEvaluation}
                                            getReviewerEvaluation={this.props.getReviewerEvaluation}
                                            getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
                                            evaluations={this.props.evaluations}
                                            curEvaluation={this.props.curEvaluation}
                                            getApplicantsVideos={this.props.getApplicantsVideos}
                                            getApplicantsInfo={this.props.getApplicantsInfo}
                                            int_ques={this.props.int_ques}
                                            quesiton_array={this.props.quesiton_array}
                                            video_array={this.props.video_array}
                                            stars={this.props.stars}
                                            comments={this.props.comments}
                                            pk={this.props.pk}
                                            transcripts={this.props.transcripts}
                                            updateViewStatus={this.props.updateViewStatus}
                                            updateCommentStatus={this.props.updateCommentStatus}
                                            subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                                            reviews={this.props.reviews}
                                            positionId={this.props.curJob.job_details.positions_id}
                                            selectedCurrentStage={this.state.stage.value}
                                            selectedStatus={this.state.category.value}
                                            updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                                        />
                                    )
                                })}
                            </div>
                            {this.props.curJob.total_page > 1 &&
                                <div className="d-flex justify-content-end" style={{ marginTop: "1rem" }}>
                                    <ReactPaginate
                                        previousLabel={'< Prev'}
                                        nextLabel={'Next >'}
                                        breakLabel={'...'}
                                        breakClassName={'break-me'}
                                        pageCount={this.props.curJob.total_page}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={5}
                                        onPageChange={this.handlePageClick}
                                        containerClassName={'pagination3'}
                                        activeClassName={'active'}
                                        forcePage={this.state.selectedPage}
                                    />
                                </div>
                            }
                        </div>
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
                    </div> :
                    <NewCandidateAdditionForm
                        hideAdditionForm={this.hideAdditionForm}
                        getAllJobs={this.props.getAllJobs}
                        getPostedJobs={this.props.getPostedJobs}
                        jobId={this.props.curJob.job_details.id}
                        user={this.props.user}
                    />
                }
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
        // if (sessionStorage.getItem("showPreview" + props.index) === "true") {
        //     setShowPreview(true);
        // }
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
    }, []);
    function onView() {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        let page = props.selectedPage + 1;
        // setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, "");}, 300);
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email);
        //sessionStorage.setItem(("showPreview" + props.index), "true");
        setShowPreview(true);
    }

    function hideModal() {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, "");}, 300);
        //sessionStorage.removeItem("showPreview" + props.index);
        //sessionStorage.removeItem("showPreview" + current);
        //sessionStorage.removeItem("current");
        setShowPreview(false);
    }

    function getBackgroundColor() {
        let backgroundColor = "";
        if (props.applicant.current_stage == "Resume Review") {
            backgroundColor = "#1E5EFF";
        }
        else if (props.applicant.current_stage == "Video Interview") {
            backgroundColor = "#259EF1";
        }
        else if (props.applicant.current_stage == "Live Interview") {
            backgroundColor = "#09C6F3";
        }
        else if (props.applicant.current_stage == "Unqualified") {
            backgroundColor = "#979797";
        }
        else {
            backgroundColor = "#0DC68E";
        }
        return backgroundColor;
    }
    const backgroundColor = getBackgroundColor();

    function getReviewPageData(index) {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[index].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[index].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[index].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[index].email, props.user.email);
        //sessionStorage.setItem(("showPreview" + index), "true");
        //sessionStorage.setItem("current", index);
    }

    function viewNextResult(curIndex) {
        //sessionStorage.removeItem("showPreview" + curIndex);
        let next = curIndex + 1;
        getReviewPageData(next);
        setCurrent(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        //sessionStorage.removeItem("showPreview" + curIndex);
        let prev = curIndex - 1;
        getReviewPageData(prev);
        setCurrent(curIndex - 1);
    };

    const refresh = () => {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", ""); props.getPostedJobs(props.user.id, page, "Resume Review") }, 300);
        props.updateViewStatus({ "candidate_id": applicants[current].id });
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email);
    }

    return (
        <div className="container-fluid">
            <hr
                style={{
                    border: props.index == 0 ? "1px solid #E8EDFC" : "1px solid #E5E5E5",
                    boxShadow: props.index == 0 ? "0px 1px 2px #E8EDFC" : "",
                }}
            />
            <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem" }}>
                <div className="col-4 interview-txt9 mb-2" style={{ cursor: "pointer", color: "#67A3F3", paddingLeft: "0.3rem" }}>
                    {(!props.applicant.is_viewed && props.applicant.is_invited != 1) ?
                        <div>
                            <span className="dot"></span>
                            <span className="applicant-name" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div> :
                        <div>
                            <span className="dot" style={{ visibility: "hidden" }}></span>
                            <span className="applicant-name" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                {name.length > 29 ? name.substring(0, 27) + "..." : name}
                            </span>
                        </div>
                    }
                </div>
                <div className="col-2 interview-txt9 mb-2"><span style={{ marginLeft: "0.6rem" }}>{props.applicant.apply_date.substring(0, 10)}</span></div>
                <div className="col-3 interview-txt9 mb-2" style={{ padding: "0rem" }}>
                    <div className="row" style={{ padding: "0rem" }}>
                        {/* place holder */}
                        <span className="job-status" style={{ marginLeft: "15px", visibility: "hidden" }}>Status</span>
                        <span>
                            {props.applicant.current_stage !== "" &&
                                <button className="default-btn invite-btn"
                                    style={{ backgroundColor: `${backgroundColor}`, padding: "5px", width: "8rem", textAlign: "center", cursor: "auto" }}
                                >
                                    {props.applicant.current_stage}
                                </button>
                            }
                        </span>
                    </div>
                </div>
                <div className="col-2 interview-txt9 mb-2" style={{ padding: "0rem" }}>
                    <div className="row" style={{ padding: "0rem" }}>
                        {/* place holder */}
                        <span className="job-status" style={{ marginLeft: "15px", visibility: "hidden" }}>Status</span>
                        <span>
                            {(props.applicant.is_active) &&
                                <button className="default-btn invite-btn"
                                    style={{ backgroundColor: "#0DC68E", padding: "5px", width: "5rem", textAlign: "center", cursor: "auto" }}
                                >
                                    Active
                                </button>
                            }
                            {(!props.applicant.is_active) &&
                                <button className="default-btn invite-btn"
                                    style={{ backgroundColor: "#FF0000", padding: "5px", width: "5rem", textAlign: "center", cursor: "auto" }}
                                >
                                    Rejected
                                </button>
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ background: "#E8EDFC" }}>
                <MyFullModal className="light-blue-modal" show={showPreview} onHide={hideModal}>
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
                        style={{ backgroundColor: "black" }}
                        onHide={hideModal}
                        current={current}
                        setCurrent={setCurrent}
                        applicants={applicants}
                        status={status}
                        updateCandidateViewedStatus={props.updateCandidateViewedStatus}
                        linkedin={applicants[current].linkedinurl}
                        moveCandidateToInterview={props.moveCandidateToInterview}
                        filter={props.filter}
                        selectedPage={props.selectedPage}
                        getReviewNote={props.getReviewNote}
                        addOrUpdateReviewerEvaluation={props.addOrUpdateReviewerEvaluation}
                        getReviewerEvaluation={props.getReviewerEvaluation}
                        getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                        evaluations={props.evaluations}
                        curEvaluation={props.curEvaluation}
                        int_ques={props.int_ques}
                        quesiton_array={props.quesiton_array}
                        video_array={props.video_array}
                        stars={props.stars}
                        comments={props.comments}
                        pk={props.pk}
                        transcripts={props.transcripts}
                        viewNextResult={viewNextResult}
                        viewPrevResult={viewPrevResult}
                        refresh={refresh}
                        updateCommentStatus={props.updateCommentStatus}
                        subreviewerUpdateComment={props.subreviewerUpdateComment}
                        reviews={props.reviews}
                        currentStage={"All Candidates"}
                        positionId={props.positionId}
                        selectedCurrentStage={props.selectedCurrentStage}
                        selectedStatus={props.selectedStatus}
                        updateApplicantBasicInfo={props.updateApplicantBasicInfo}
                    />
                </MyFullModal>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    var quesiton_array = [];
    var video_array = [];
    var stars = [];
    var comments = [];
    var transcripts = [];
    var pk = [];

    state.video_reducer.int_ques.map((i) => {
        stars.push(i.video_stars);
        comments.push(i.video_comment)
        quesiton_array.push(i.question_desc);
        video_array.push(i.url);
        transcripts.push(i.transcripts);
        pk.push(i.id)
    });
    return {
        quesiton_array: quesiton_array,
        video_array: video_array,
        stars: stars,
        comments: comments,
        pk: pk,
        transcripts: transcripts,
        profile: state.auth_reducer.profile,
        user: state.auth_reducer.user,
        jobs: state.job_reducer.jobs,
        evaluations: state.question_reducer.evaluations,
        curEvaluation: state.question_reducer.curEvaluation,
        int_ques: state.video_reducer.int_ques,
        reviews: state.question_reducer.reviews,
    }
};

export default withRouter(connect(mapStateToProps, {
    addInterviews, updateInviteStatus, updateCandidateViewedStatus, moveCandidateToInterview,
    getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, getApplicantsVideos,
    updateViewStatus, getApplicantsInfo, updateCommentStatus, subreviewerUpdateComment, updateApplicantBasicInfo
})(
    AllCandidates
));