import React, { useState } from 'react';
import { MyModal80 } from './../DashboardComponents';
import { ResumeEva } from "./interviewComponents/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../../redux/actions/question_actions';
import { checkUserExistence } from './../../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { MyVerticallyCenteredModal } from "./interviewComponents/MyVerticallyCenteredModal";
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import axios from "axios";

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
        window.scrollTo(0, 0);
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
                    employerProfileDetail={props.employerProfileDetail}
                    reviewerStageLength={props.reviewerStageLength}
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
    const [category3, setCategory3] = useState({ value: 'All', label: 'All' });
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;

    function onFilter3(category) {
        setCategory3(category)
    }

    const options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ]

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }
    return (
        <div>
            <div style={{ marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem", paddingTop: '1.4rem' }} className="mt-4 pb-3">
                <div className="row" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                    <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem" }}>
                        <label style={{ position: "absolute", marginLeft: "0.5rem", marginTop: "0.25rem" }}><i className="bx bx-search bx-sm"></i></label>
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
                <div className="container-fluid chart-bg1" style={{ marginTop: "1.3rem", boxShadow: "none" }}>
                    <div style={{ color: "#7D7D7D", height: "2rem", marginTop: "1rem", paddingBottom: "2.5rem" }} className="ml-3 d-flex justify-content-start container-fluid row interview-txt7 interview-center">
                        <div className="col-3">Name</div>
                        {/* <div className="col-3">Video Average Score</div> */}
                        <div className="col-2">Resume Score</div>
                        {(props.reviewerStageLength > 0) &&
                            <div className="col-3"> <div style={{ display: "inline-block", marginRight: "0.2rem" }}>Status</div>
                                <div style={{ display: "inline-block" }}>
                                    <Select value={category3} onChange={onFilter3} options={options3} className="select-category" styles={customStyles} />
                                </div>
                            </div>
                        }
                        {(props.reviewerStageLength == 0) &&
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
                        {(props.reviewerStageLength == 0) &&
                            <div className="col-3">Offer Status</div>
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
                                    resume_list={Math.max(props.resume_list[applicant.email] ? props.resume_list[applicant.email] : 0, applicant.result_rate ? applicant.result_rate : 0)} // get max resume score
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
                                    employerProfileDetail={props.employerProfileDetail}
                                    reviewerStageLength={props.reviewerStageLength}
                                />
                            </div>
                        )
                    })}
                </div>
                {props.totalPage > 1 &&
                    <div className="d-flex justify-content-end" style={{ marginTop: "1rem" }}>
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
    const [category1, setCategory1] = useState({ value: null, label: null });
    const start = 0;
    const end = props.applicants.length - 1;

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#fff', border: "none" }),
        singleValue: styles => ({
            ...styles,
            color: '#979797',
            fontSize: '0.8rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }

    const options1 = [
        { value: "TBD", label: "TBD" },
        { value: "Offer to be Made", label: "Offer to be Made" },
        { value: "Offer Extended", label: "Offer Extended" },
        { value: "In Negotiation", label: "In Negotiation" },
        { value: "Declined", label: "Declined" },
    ];

    function onFilter1(category1) {
        if (props.livcat != category1) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let data = {
                "candidate_id": props.applicant.id,
                "category": category1.value
            };
            axios.post("questions/update-shortlist-candidate-offer-status", data, config).then((res) => {
                console.log(res.data);
            }).catch(error => {
                console.log(error)
            });
            setCategory1(category1);
            alert2();
        }
    }

    // useEffect(() => {
    //     if (sessionStorage.getItem("showShortListModal" + props.current) === "true") {
    //         setShow(true);
    //     }
    // }, [setShow]);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email, "Short List");
        //sessionStorage.setItem(("showShortListModal" + props.current), "true");
        setShow(true);
    };

    function getReviewPageData(index) {
        props.getApplicantsVideos(props.applicants[index].email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicants[index].email);
        props.getResumeURL(props.applicant.positions_id, props.applicants[index]?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicants[index].email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email, props.user.email, "Short List");
        setCurrent(index);
    }

    function getReviewPageData1(index) {
        props.getApplicantsVideos(props.applicants[index].email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicants[index].email);
        props.getResumeURL(props.applicant.positions_id, props.applicants[index]?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicants[index].email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicants[index].email, props.user.email, "Short List");
    }

    function getNextResult(curIndex) {
        getReviewPageData1(curIndex + 1);
    };

    function viewNextResult(curIndex) {
        getReviewPageData(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        getReviewPageData(curIndex - 1);
    };


    const refresh = () => {
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant?.apply_candidate_id);
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
            <div style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600" }} className="ml-3 d-flex justify-content-start container-fluid row h-100">
                <div className="col-3 title-button2" onClick={() => { viewResult(); }} style={{ cursor: "pointer" }}>
                    {props.applicant.name.length > 18 ? props.applicant.name.substring(0, 15) + "..." : props.applicant.name}
                </div>

                {/* <div className="col-3">
                    {renderStars(props.stars)}
                </div> */}
                <div className="col-2">
                    {renderResume(props.resume_list)}
                </div>
                {(props.reviewerStageLength > 0) &&
                    <div className="col-3">
                        {props.applicant?.reviewer_review_status ?
                            <p style={{ fontWeight: "600", color: "#4A6F8A" }}>Reviewed</p> :
                            <p style={{ fontWeight: "600", color: "#090D3A" }}>Pending</p>
                        }
                    </div>
                }
                {(props.reviewerStageLength == 0) &&
                    <div className="col-2">
                        {props.applicant?.num_votes > 0 &&
                            <p style={{ fontWeight: "600", color: "#090D3A", paddingLeft: "1.4rem" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</p>
                        }
                    </div>
                }
                {(props.reviewerStageLength == 0) &&
                    <div className="col-3" style={{marginLeft:"-0.6rem"}}>
                        <Select value={category1.value != null ? category1 : { value: props.applicant.shortcat, label: props.applicant.shortcat }} onChange={onFilter1} options={options1} className="select-category" styles={customStyles} isSearchable={false} />
                    </div>}
                {!props.profile.is_external_reviewer && !props.profile.is_subreviwer &&
                    <div className="col-2">
                        <a
                            target="_blank"
                            href={mailTo}
                            className="interview-txt9"
                            style={{ color: "#006dff", border: "none", background: "white", display: "inline-block", fontSize: "0.9375rem" }}
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
                getNextResult={getNextResult}
                employerProfileDetail={props.employerProfileDetail}
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

function alert2() {
    confirmAlert({
        title: "Interview Status",
        message: "Updated successfully!",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};