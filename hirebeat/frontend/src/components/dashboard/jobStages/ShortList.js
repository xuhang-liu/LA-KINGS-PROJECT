import React, { useEffect, useState } from 'react';
import { MyModal80 } from './../DashboardComponents';
import { ResumeEva } from "./interviewComponents/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../../redux/actions/question_actions';
import { checkUserExistence } from './../../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import {MyVerticallyCenteredModal} from "./interviewComponents/MyVerticallyCenteredModal";
import ReactPaginate from 'react-paginate';

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(props.positionId);
    const theJob = props.postedJobs[selectedId.toString()];

//    useEffect(() => {
//        props.getPostedJobs(props.user.id, 1, "Short List");
//        props.loadStarList(props.positionId);
//    }, [])

    function refreshPage() {
        props.loadStarList(curJobId);
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };

    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        setSelectedPage(selectedPage);
        let page = selectedPage + 1;
        props.getPostedJobs(props.user.id, page, "Short List");
    };

    return (
        <div>
            <div className="container-fluid min-width-980">
                <AcceptedCandidate
                    getPJobs={props.getPJobs}
                    refreshPage={refreshPage}
                    id_candidate={props.id_candidate}
                    username_candidate={props.username_candidate}
                    email_candidate={props.email_candidate}
                    phone_candidate={props.phone_candidate}
                    location_candidate={props.location_candidate}
                    theJob={theJob}
                    getApplicantsVideos={props.getApplicantsVideos}
                    getApplicantsInfo={props.getApplicantsInfo}
                    int_ques={props.int_ques}
                    stars={props.star_list}
                    resume_list={props.resume_list}
                    resumeURL={props.resumeURL}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    getResumeURL={props.getResumeURL}
                    updateCommentStatus={props.updateCommentStatus}
                    profile={props.profile}
                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                    getReviewNote={props.getReviewNote}
                    getReviewerEvaluation={props.getReviewerEvaluation}
                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                    user={props.user}
                    getPostedJobs={props.getPostedJobs}
                    getAllJobs={props.getAllJobs}
                    keyWords={keyWords}
                    onChange={onChange}
                    totalPage={props.totalPage}
                    selectedPage={selectedPage}
                    reviewer_type={props.reviewer_type}
                    jobsId={props.jobsId}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    star_list: state.question_reducer.star_list,
    resume_list: state.question_reducer.resume_list,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
    user_existence: state.auth_reducer.user_existence,
});


export default withRouter(connect(mapStateToProps, { loadStarList, getResumeURL, addExReviewer, delExReviewer, checkUserExistence })(ShortList));

const AcceptedCandidate = (props) => {
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;
    return (
        <div>
            <div style={{ marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem" }} className="container-fluid mt-4 pt-3 pb-3">
                <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                    <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem" }}>
                        <label style={{position:"absolute", left:"2.5rem", marginTop:"0.25rem"}}><i className="bx bx-search bx-sm"></i></label>
                        <input placeholder={"Search candidate"} className="search-candidate-input" value={props.keyWords} onChange={props.onChange} style={{ height: "auto" }}></input>
                    </div>
                    {props.totalPage > 1 &&
                        <div className="ml-auto">
                            <ReactPaginate
                                  previousLabel={'< Prev'}
                                  nextLabel={'Next >'}
                                  breakLabel={'...'}
                                  breakClassName={'break-me'}
                                  pageCount={props.totalPage}
                                  marginPagesDisplayed={1}
                                  pageRangeDisplayed={5}
                                  onPageChange={props.handlePageClick}
                                  containerClassName={'pagination3'}
                                  activeClassName={'active'}
                                  forcePage={props.selectedPage}
                            />
                        </div>
                    }
                </div>
                <div className="container-fluid chart-bg1" style={{ marginTop: "2%"}}>
                    <div style={{color: "#4A6F8A", fontSize: "1rem", fontWeight: "500", fontFamily: "Avenir Next, Segoe UI" }} className="ml-0 d-flex justify-content-start container-fluid row">
                        <div className="col-3">Name</div>
                        <div className="col-3">Video Average Score</div>
                        <div className="col-2">Resume Score</div>
                        {!props.profile.is_subreviwer &&
                            <div className="col-2">
                                Team Review
                                <span className="tool_tip ml-2">
                                    <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                    <p className="tool_submenu container" style={{ width: "14rem" }}>
                                        <div>
                                            Affirmative Votes over Total Votes. Pending votes are not included.
                                        </div>
                                    </p>
                                </span>
                            </div>
                        }
                        {(!props.profile.is_external_reviewer && !props.profile.is_subreviwer) && <div className="col-2">Contact</div>}
                    </div>
                    {props.theJob.applicants.map((applicant, index) => {
                        if (props.keyWords != "") {
                                let name = applicant.name;
                                if (!name.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                            }
                        return (
                            <div>
                                <CandidateCard
                                    getPJobs={props.getPJobs}
                                    refreshPage={props.refreshPage}
                                    stars={props.stars[applicant.email]}
                                    resume_list={Math.max(props.resume_list[applicant.email], applicant.result_rate)} // get max resume score
                                    applicant={applicant}
                                    getApplicantsVideos={props.getApplicantsVideos}
                                    getApplicantsInfo={props.getApplicantsInfo}
                                    int_ques={props.int_ques}
                                    id_candidate={props.id_candidate}
                                    username_candidate={props.username_candidate}
                                    email_candidate={props.email_candidate}
                                    phone_candidate={props.phone_candidate}
                                    location_candidate={props.location_candidate}
                                    resumeURL={props.resumeURL}
                                    recordTime={props.recordTime}
                                    interviewResume={props.interviewResume}
                                    getResumeURL={props.getResumeURL}
                                    updateCommentStatus={props.updateCommentStatus}
                                    profile={props.profile}
                                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                                    applicants={props.theJob.applicants}
                                    current={index}
                                    getReviewNote={props.getReviewNote}
                                    getReviewerEvaluation={props.getReviewerEvaluation}
                                    getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                    user={props.user}
                                    getPostedJobs={props.getPostedJobs}
                                    getAllJobs={props.getAllJobs}
                                    reviewer_type={props.reviewer_type}
                                    selectedPage={props.selectedPage}
                                    jobsId={props.jobsId}
                                />
                            </div>
                        )
                    })}
                </div>
                {props.totalPage > 1 &&
                    <div className="d-flex justify-content-end" style={{marginTop: "1rem"}}>
                        <ReactPaginate
                              previousLabel={'< Prev'}
                              nextLabel={'Next >'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={props.totalPage}
                              marginPagesDisplayed={1}
                              pageRangeDisplayed={5}
                              onPageChange={props.handlePageClick}
                              containerClassName={'pagination3'}
                              activeClassName={'active'}
                              forcePage={props.selectedPage}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

const CandidateCard = (props) => {
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);
    const [current, setCurrent] = useState(props.current);
    const start = 0;
    const end = props.applicants.length - 1;

    // useEffect(() => {
    //     if (sessionStorage.getItem("showShortListModal" + props.current) === "true") {
    //         setShow(true);
    //     }
    // }, [setShow]);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant.user_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email, "Short List");
        //sessionStorage.setItem(("showShortListModal" + props.current), "true");
        setShow(true);
    };

    function getReviewPageData(index) {
        props.getApplicantsVideos(props.applicants[index].email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicants[index].email);
        props.getResumeURL(props.applicant.positions_id, props.applicants[index].user_id);
        props.getReviewNote(props.applicant.positions_id, props.applicants[index].email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email, props.user.email, "Short List");
        setCurrent(index);
    }

    function viewNextResult(curIndex) {
        getReviewPageData(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        getReviewPageData(curIndex - 1);
    };


    const refresh = () => {
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant.user_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email);
    }

    const renderStars = (stars) => {
        if (stars < 1) {
            return <div className="short-list-text2">N/A</div>
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {stars >= 1 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 2 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 3 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars >= 4 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                    {stars == 5 &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}
                    <div className="ml-2" />
                </div>
            </div>
        )
    }

    const renderResume = (resumes) => {
        if (resumes == "-1") {
            return <div className="short-list-text2">N/A</div>
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {(resumes >= 76 && resumes <= 100) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_1.png" alt="img" />}
                    {(resumes >= 51 && resumes <= 75) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_2.png" alt="img" />}
                    {(resumes >= 26 && resumes <= 50) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_3.png" alt="img" />}
                    {(resumes >= 0 && resumes <= 25) &&
                        <img style={{ width: "55%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_4.png" alt="img" />}
                </div>
            </div>
        )
    }

    const mailTo = "mailto:" + props.applicant.email;
    function hideModal() {
        //sessionStorage.removeItem("showShortListModal" + props.current);
        setShow(false);
        setCurrent(props.current);
    }
    return (
        <React.Fragment>
            <div className="px-4">
                <hr
                    style={{
                        border: props.current == 0 ? "1px solid #E8EDFC" : "1px solid #E5E5E5",
                        boxShadow: props.current == 0 ? "0px 1px 2px #E8EDFC" : "",
                    }}
                />
            </div>
            <div style={{ fontFamily: "Avenir Next, Segoe UI", fontWeight: "600" }} className="ml-0 d-flex justify-content-start container-fluid row h-100">
                <div className="col-3 short-list-text" onClick={() => { viewResult(); }}>
                    {props.applicant.name.length > 18 ? props.applicant.name.substring(0, 15) + "..." : props.applicant.name}
                </div>

                <div className="col-3">
                    {renderStars(props.stars)}
                </div>
                <div className="col-2">
                    {renderResume(props.resume_list)}
                </div>
                {!props.profile.is_subreviwer &&
                    <div className="col-2">
                        {props.applicant?.num_votes > 0 &&
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</p>
                        }
                    </div>
                }
                {!props.profile.is_external_reviewer && !props.profile.is_subreviwer &&
                    <div className="col-2">
                        <a
                            target="_blank"
                            href={mailTo}
                            className="interview-txt9"
                            style={{ color: "#67A3F3", border: "none", background: "white", display: "inline-block", fontSize: "0.9375rem" }}
                        >
                            <i className="bx-fw bx bx-mail-send"></i> Send Email
                        </a>
                    </div>
                }
            </div>
            <MyVerticallyCenteredModal
                refresh={refresh}
                getPJobs={props.getPJobs}
                applicant={props.applicant}
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                int_ques={props.int_ques}
                secondround_status={props.applicant.secondround_status}
                show={show}
                setShowResume={setShowResume}
                setShowEva={setShowEva}
                onHide={hideModal}
                int_ques={props.int_ques}
                positionId={props.applicant.positions_id}
                resumeURL={props.resumeURL}
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                updateCommentStatus={props.updateCommentStatus}
                profile={props.profile}
                subreviewerUpdateComment={props.subreviewerUpdateComment}
                applicants={props.applicants}
                current={current}
                setCurrent={setCurrent}
                start={start}
                end={end}
                filter={"active"}
                getPostedJobs={props.getPostedJobs}
                getAllJobs={props.getAllJobs}
                currentStage={"Short List"}
                reviewer_type={props.reviewer_type}
                jobsId={props.jobsId}
                selectedPage={props.selectedPage}
                viewPrevResult={viewPrevResult}
                viewNextResult={viewNextResult}
            />
            <MyModal80
                show={showResume}
                onHide={() => { setShowResume(false); }}
            >
                <div class="iframe-container">
                    <iframe className="responsive-iframe" src={props.resumeURL} />
                </div>
            </MyModal80>
            <MyModal80
                show={showEva}
                onHide={() => { setShowEva(false); }}
            >
                <ResumeEva interviewResume={(props.interviewResume.result_rate != "-1") ? props.interviewResume : props.applicants[props.current]} />
            </MyModal80>
        </React.Fragment>
    )
}

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

function sendFailAlert() {
    confirmAlert({
        title: "Send Invitation Fail",
        message: "Looks like this email is already registered at HireBeat and therefore cannot be invited as an external reviewer. Please enter a different email. Personal email also works.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function deleteSuccessAlert() {
    confirmAlert({
        title: "Remove Success",
        message: "You have removed reviewer successfully.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};