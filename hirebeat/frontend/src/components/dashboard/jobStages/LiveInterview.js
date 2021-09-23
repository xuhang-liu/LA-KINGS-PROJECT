import React, { Component, useEffect, useState } from "react";
import { MyModal80 } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import { ResumeEva } from "./interviewComponents/ResumeEva";
import {ApplicantList} from "./interviewComponents/ApplicantList";
import 'boxicons';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import MoveForm from "./interviewComponents/MoveForm";

export function LiveInterview(props){
    useEffect(() => {
        props.getPostedJobs(props.user.id, 1, "Live Interview");
    }, [])

    const [expire, setExpire] = useState({ value: 7, label: '7 days' });

    function onFilter1(expire) {
        setExpire(expire);
    }

    // filter selections
    const options = [
        { value: 'Uninvited', label: 'Not Invited' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Pending', label: 'Pending' },
        { value: 'Withdrawn', label: 'N/A' },
        { value: 'All', label: 'All' },
    ];

    const [category, setCategory] = useState({ value: 'All', label: 'All' });
    function onFilter(category) {
        setCategory(category);
    }

    const [category2, setCategory2] = useState({ value: 'All', label: 'All' });

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };

    function selectAllCandidates() {
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

    function noCandidateAlert() {
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

    const [selectedPage, setSelectedPage] = useState(0);
    const handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        setSelectedPage(selectedPage);
        let page = selectedPage + 1;
        props.getPostedJobs(props.user.id, page);
        sessionStorage.setItem("intAppPage", String(selectedPage));
    };

    const [showMoveForm, setShowMoveForm] = useState(false);
    const [currentStage, setCurrentStage] = useState("Live Interview");
    const [nextStage, setNextStage] = useState("Short List");

    const openMoveForm = () => {
        setShowMoveForm(true);
    }

    const hideMoveForm = () => {
        setShowMoveForm(false);
    }

    const moveCandidates = () => {
        let candidateCount = 0;
        let positionId = props.positionId;
        let jobId = props.jobsId;
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
            if ((nextStage != "") && (nextStage != "Live Interview")) {
                let meta = {
                    position_id: positionId,
                    job_id: jobId,
                    emails: emails,
                    names: names,
                    candidates: invitedCandidates,
                    nextStage: nextStage,
                }
                props.moveCandidateToInterview(meta);
                hideMoveForm();
                // update
                let page = 1;
                let userId = props.user.id;
                setTimeout(() => {props.getAllJobs(userId, page, "Live Interview"); props.getPostedJobs(userId, page, "Live Interview") }, 300);
                sendSuccessAlert(nextStage);
            } else if (nextStage == "Live Interview") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            noCandidateAlert();
        }
    }

    const rejectCandidates = () => {
        let candidateCount = 0;
        let positionId = props.positionId;
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
        if (candidateCount > 0) {
            let data = {
                positionId: positionId,
                candidates: invitedCandidates,
                nextStage: nextStage,
                is_reject: true,
            }
            props.updateInviteStatus(data);
            // update
            let page = 1;
            let userId = props.user.id;
            setTimeout(() => { props.getAllJobs(userId, page, "Video Interview"); props.getPostedJobs(userId, page,"Video Interview" ) }, 300);
            rejectSuccessAlert();
        } else {
            noCandidateAlert();
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="chart-bg1 container-fluid mt-4 pt-3 pb-3">
                    <div className="row">
                        <div className="col-6 interview-center mt-2">
                            <h3 className="interview-txt5" style={{ wordWrap: "break-word", wordBreak: "break-all", }}>{props.jobTitle}</h3>
                        </div>
                    </div>
                    <div className="row" style={{paddingLeft: "15px", paddingRight: "15px"}}>
                        <div className="interview-txt7 interview-center" style={{ color: "#56a3fa", fontSize: "1rem" }}>
                            <label style={{position:"absolute", left:"3.5rem", marginTop:"0.25rem"}}><i className="bx bx-search bx-sm"></i></label>
                            <input placeholder={"Search candidate"} className="search-candidate-input" value={keyWords} onChange={onChange} style={{ height: "auto" }}></input>
                        </div>
                        <div className="ml-auto interview-txt7">
                            <ReactPaginate
                                  previousLabel={'< prev'}
                                  nextLabel={'next >'}
                                  breakLabel={'...'}
                                  breakClassName={'break-me'}
                                  pageCount={props.totalPage}
                                  marginPagesDisplayed={1}
                                  pageRangeDisplayed={5}
                                  onPageChange={handlePageClick}
                                  containerClassName={'pagination3'}
                                  activeClassName={'active'}
                                  forcePage={sessionStorage.getItem("intAppPage")?parseInt(sessionStorage.getItem("intAppPage")):selectedPage}
                            />
                        </div>
                    </div>
                    <div className="container-fluid" style={{ marginTop: "2%" }}>
                        <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "3rem" }}>
                            {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                <div style={{ marginLeft: "1rem", display: "flex" }}>
                                    <input id="select-all" type="checkbox" onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                                </div>
                            }
                            <div className="col-3">
                                <span className="dot" style={{ background: "none", visibility: "hidden" }}></span>
                                Name
                            </div>
                            {/*<div className="col-2">Email</div>*/}
                            <div className="col-2">Invited On</div>
                            <div className="col-3">
                                <div className="row">
                                    <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Video</div>
                                    <Select value={category} onChange={onFilter} options={options} className="select-category" styles={customStyles} />
                                </div>
                            </div>
                            {/*<div className="col-1">Action</div>*/}
                            {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                <div className="col-1">Reinvite</div>
                            }
                        </div>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <ApplicantList
                                filter={props.filter}
                                getPJobs={props.getPJobs}
                                profile={props.profile}
                                recordTime={props.recordTime}
                                interviewResume={props.interviewResume}
                                getResumeURL={props.getResumeURL}
                                resumeURL={props.resumeURL}
                                isClosed={props.isClosed}
                                keyWords={keyWords}
                                category={category}
                                category2={category2}
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
                                updateViewStatus={props.updateViewStatus}
                                subreviewerUpdateComment={props.subreviewerUpdateComment}
                                getReviewNote={props.getReviewNote}
                                getReviewerEvaluation={props.getReviewerEvaluation}
                                getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                                user={props.user}
                                currentStage={currentStage}
                                getPostedJobs={props.getPostedJobs}
                                getAllJobs={props.getAllJobs}
                            />
                        </div>
                    </div>
                    <div className="interview-txt7 d-flex justify-content-end" style={{marginTop: "1rem"}}>
                        <ReactPaginate
                              previousLabel={'< prev'}
                              nextLabel={'next >'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={props.totalPage}
                              marginPagesDisplayed={1}
                              pageRangeDisplayed={5}
                              onPageChange={handlePageClick}
                              containerClassName={'pagination3'}
                              activeClassName={'active'}
                              forcePage={sessionStorage.getItem("intAppPage")?parseInt(sessionStorage.getItem("intAppPage")):selectedPage}
                        />
                    </div>
                </div>
                {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter == "active") &&
                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                            onClick={openMoveForm}
                        >
                            Move All
                            <span></span>
                        </button>
                        <button
                            className="default-btn"
                            style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                        >
                            Reject All
                            <span></span>
                        </button>
                    </div>
                }
                <MoveForm
                    showMoveForm={showMoveForm}
                    hideMoveForm={hideMoveForm}
                    currentStage={currentStage}
                    setCurrentStage={setCurrentStage}
                    nextStage={nextStage}
                    setNextStage={setNextStage}
                    moveCandidates={moveCandidates}
                />
            </div>
        </React.Fragment>
    )
};

function sendSuccessAlert(nextStage) {
    confirmAlert({
        title: "Move Candidates Success",
        message: `You have moved candidates to ${nextStage} stage successfully.`,
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};

function rejectSuccessAlert() {
    confirmAlert({
        title: "Candidate Rejected!",
        message: "You have rejected the candidates successfully.",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};