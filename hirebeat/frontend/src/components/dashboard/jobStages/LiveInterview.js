import React, { useState, useEffect } from "react";
import { AlertModal, MyShareModal, MyModal80 } from "./../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
//import { ResumeEva } from "./interviewComponents/ResumeEva";
import { ApplicantList_Live } from "./interviewComponents/ApplicantList_Live";
import 'boxicons';
import Select from 'react-select';
import ReactPaginate from 'react-paginate';
import MoveForm from "./interviewComponents/MoveForm";
import { EmailSending } from '../applications/EmailSending';
import axios from "axios";

export function LiveInterview(props) {

    useEffect(() => {
        props.getPostedJobs(props.user.id, 1, "Live Interview", "","","","", props.jobsId);
    }, [])

    //const [expire, setExpire] = useState({ value: 7, label: '7 days' });
    const [showMoveSuccessAlert, setShowMoveSuccessAlert] = useState(false);
    const [showRejectSuccessAlert, setShowRejectSuccessAlert] = useState(false);
    const [showConfigInt, setShowConfigInt] = useState(false);
    const [live1Edit, setlive1Edit] = useState(false);
    const [live2Edit, setlive2Edit] = useState(false);
    const [live3Edit, setlive3Edit] = useState(false);
    const [live4Edit, setlive4Edit] = useState(false);
    const [live5Edit, setlive5Edit] = useState(false);
    const [live1value, setlive1value] = useState(props.livcat1);
    const [live2value, setlive2value] = useState(props.livcat2);
    const [live3value, setlive3value] = useState(props.livcat3);
    const [live4value, setlive4value] = useState(props.livcat4);
    const [live5value, setlive5value] = useState(props.livcat5);
    const [showEmailSending, setShowEmailSending] = useState(false);
    const [email_list, setEmail_list] = useState(null);
    const [select_all, setSelect_all] = useState(false);
    const [candidates_count, setCandidates_count] = useState(0);
    const [selectedAllCandidates, setSelectedAllCandidates] = useState(false);

    // function onFilter1(expire) {
    //     setExpire(expire);
    // }

    // filter selections
    const options4 = [
        { value: live1value, label: live1value },
        { value: live2value, label: live2value },
        { value: live3value, label: live3value },
        { value: live4value, label: live4value },
        { value: live5value, label: live5value },
        { value: 'TBD', label: 'TBD' },
        { value: 'All', label: 'All' },
    ];
    const options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ];

    const [category4, setCategory4] = useState({ value: 'All', label: 'All' });
    function onFilter4(category4) {
        setCategory4(category4);
        let page = 1;
        let userId = props.user.id;
        props.getPostedJobs(userId, page, "Live Interview", "", category3.value, category4.value, "", props.jobsId);
    }
    
    const [category3, setCategory3] = useState({ value: 'All', label: 'All' });
    function onFilter3(category3) {
        setCategory3(category3);
        let page = 1;
        let userId = props.user.id;
        props.getPostedJobs(userId, page, "Live Interview", "", category3.value, "","", props.jobsId);
    }

    useEffect(() => {
        if (props.filterReset > 0){
            setCategory3({ value: 'All', label: 'All' });
            setCategory4({ value: 'All', label: 'All' });
        }
    }, [props.filterReset]); 

    // const [category2, setCategory2] = useState({ value: 'All', label: 'All' });

    const customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#E8EDFC' }),
        singleValue: styles => ({
            ...styles,
            color: '#090D3A',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    }

    const [keyWords, setkeyWords] = useState("");
    function onChange(e) {
        setkeyWords(e.target.value);
    };

    function selectAllCandidates() {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (candidates.length <= 0){ return }
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
            setSelect_all(true);
            setSelectedAllCandidates(true);
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
            }
            setSelect_all(false);
            setSelectedAllCandidates(false);
            setCandidates_count(0);
        }
    }

    function unSelectAllCandidates() {
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            candidates[i].checked = false;
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
        props.getPostedJobs(props.user.id, page, "Live Interview", "","","","", props.jobsId);
        window.scrollTo(0, 0);
    };

    const [showMoveForm, setShowMoveForm] = useState(false);
    const [currentStage, setCurrentStage] = useState("Live Interview");
    const [nextStage, setNextStage] = useState("Short List");

    const openMoveForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            setShowMoveForm(true);
        }
        else {
            noCandidateAlert();
        }

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
                setTimeout(() => { props.getAllJobs(userId, page, "Live Interview"); props.getPostedJobs(userId, page, "Live Interview", "", "", category4.value, "", props.jobsId) }, 300);
                unSelectAllCandidates();
                let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
                if (!noShowAgainMove) {
                    enableSuccessAlert();
                }
                //Segment
                window.scrollTo(0, 0);
                switch (nextStage) {
                    case "Resume Review":
                        return (window?.analytics?.track("Recruitment - Move to Resume Review", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: userId
                        }));
                    case "Video Interview":
                        return (window?.analytics?.track("Recruitment - Move to Video Interview", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: userId
                        }));
                    case "Live Interview":
                        return (window?.analytics?.track("Recruitment - Move to Live Interview", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: userId
                        }));
                    case "Short List":
                        return (window?.analytics?.track("Recruitment - Move to Short List", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: userId
                        }));
                }
                //let checkbox = document.getElementById("select-all");
                setSelectedAllCandidates(false);
            } else if (nextStage == "Live Interview") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            noCandidateAlert();
        }
        window.scrollTo(0, 0);
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
                invitedCandidates.push(candidate.apply_candidate_id);
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
            setTimeout(() => { props.getAllJobs(userId, page, "Live Interview"); props.getPostedJobs(userId, page, "Live Interview", "", "", category4.value, "", props.jobsId) }, 300);
            unSelectAllCandidates();
            let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
            setSelectedAllCandidates(false);
            if (!noShowAgainReject) {
                enableRejectSuccessAlert();
            }
        } else {
            noCandidateAlert();
        }
        window.scrollTo(0, 0);
    };

    const hideSuccessAlert = () => {
        handleAlertChoice();
        setShowMoveSuccessAlert(false);
    }

    const enableSuccessAlert = () => {
        setShowMoveSuccessAlert(true);
    }

    const handleAlertChoice = () => {
        let checkbox = document.getElementById("alertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainMove", "true");
        }
        else {
            localStorage.setItem("noShowAgainMove", "false");
        }
    }

    const hideRejectSuccessAlert = () => {
        handleRejectAlertChoice();
        setShowRejectSuccessAlert(false);
    }

    const enableRejectSuccessAlert = () => {
        setShowRejectSuccessAlert(true);
    }

    const handleRejectAlertChoice = () => {
        let checkbox = document.getElementById("rejectAlertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainReject", "true");
        }
        else {
            localStorage.setItem("noShowAgainReject", "false");
        }
    }

    const hideShowConfigInt = () => {
        setShowConfigInt(false);
        setlive1Edit(false);
        setlive2Edit(false);
        setlive3Edit(false);
        setlive4Edit(false);
        setlive5Edit(false);
    }

    function onConfigChange1(e) {
        if (e.target.value.length > 15) {
            alert("Text length too long");
        } else {
            setlive1value(e.target.value);
        }
    }
    function onConfigChange2(e) {
        if (e.target.value.length > 15) {
            alert("Text length too long");
        } else {
            setlive2value(e.target.value);
        }
    }
    function onConfigChange3(e) {
        if (e.target.value.length > 15) {
            alert("Text length too long");
        } else {
            setlive3value(e.target.value);
        }
    }
    function onConfigChange4(e) {
        if (e.target.value.length > 15) {
            alert("Text length too long");
        } else {
            setlive4value(e.target.value);
        }
    }
    function onConfigChange5(e) {
        if (e.target.value.length > 15) {
            alert("Text length too long");
        } else {
            setlive5value(e.target.value);
        }
    }

    const submitConfigInt = (e) => {
        e.preventDefault();
        let positionId = props.positionId;
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = {
            "liv1": live1value, "liv2": live2value, "liv3": live3value, "liv4": live4value, "liv5": live5value, "position_id": positionId,
            "oldliv1": props.livcat1, "oldliv2": props.livcat2, "oldliv3": props.livcat3, "oldliv4": props.livcat4, "oldliv5": props.livcat5
        };
        axios.post("questions/update-live-interview-categories", data, config).then((res) => {
            console.log(res.data);
            setTimeout(() => { props.getAllJobs(props.user.id, 1, "Live Interview"); props.getPostedJobs(props.user.id, 1, "Live Interview", "","","","", props.jobsId); }, 300);
            hideShowConfigInt();
        }).catch(error => {
            console.log(error)
        });
    }

    const openEmailForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            var email_list = []
            for (let i = 0; i < candidates.length; i++) {
                if (candidates[i].checked) {
                    let candidate = JSON.parse(candidates[i].value);
                    email_list.push({ "email": candidate?.email, "id": candidate?.apply_candidate_id, "first_name": candidate?.name?.split(" ")[0], "last_name": candidate?.name?.split(" ")[1] });
                }
            }
            setEmail_list(email_list);
            setShowEmailSending(true);
        } else {
            noCandidateAlert();
        }
    }

    const hideEmailSending = () => {
        setShowEmailSending(false);
    }

    const CheckListCheckbox = () => {
        let candidates = document.getElementsByClassName("selected-candidate");
        let prev_candidates = 0
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked == true) {
                prev_candidates++;
            }
        }
        setCandidates_count(prev_candidates);
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="mt-4 pb-3" style={{ paddingTop: "1.4rem" }}>
                    <div className="row" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem" }}>
                            <label style={{ position: "absolute", marginLeft: "0.5rem", marginTop: "0.25rem" }}><i className="bx bx-search bx-sm"></i></label>
                            <input placeholder={"Search candidate"} className="search-candidate-input" value={keyWords} onChange={onChange} style={{ height: "auto" }}></input>
                        </div>
                        {(props.reviewerStageLength == 0) &&
                            <div className="col-2 interview-txt7" style={{ textAlign: "right" }}>
                                <button
                                    type="button"
                                    className="read-more"
                                    style={{ border: "none", backgroundColor: "#ffffff", fontSize: "0.9rem", fontWeight: "500" }}
                                    onClick={() => setShowConfigInt(true)}
                                >
                                    <i className="bx bx-cog pr-1"></i> Config Interview
                                </button>
                            </div>
                        }
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
                                    onPageChange={handlePageClick}
                                    containerClassName={'pagination3'}
                                    activeClassName={'active'}
                                    forcePage={props.currentPage}
                                />
                            </div>
                        }
                    </div>
                    <div className="container-fluid chart-bg1" style={{ marginTop: "1.3rem", boxShadow: "none" }}>
                        <div className="row interview-txt7 interview-center" style={{ color: "#7D7D7D", height: "2rem", marginTop: "1rem", paddingBottom: "2.5rem" }}>
                            {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                <div style={{ marginLeft: "1rem", display: "flex" }}>
                                    <input id="select-all" type="checkbox" checked={selectedAllCandidates} onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                                </div>
                            }
                            <div className="col-3">
                                <span className="dot" style={{ background: "none", visibility: "hidden" }}></span>
                                Name
                            </div>
                            {(props.reviewerStageLength > 0) &&
                                <div className="row col-3">
                                    <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Status</div>
                                    <Select isSearchable={false} value={category3} onChange={onFilter3} options={options3} className="select-category" styles={customStyles} />
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
                                <div className="row col-3">
                                    <div style={{ display: "flex", alignItems: "center", marginRight: "0.5rem" }}>Interview</div>
                                    <Select isSearchable={false} value={category4} onChange={onFilter4} options={options4} className="select-category" styles={customStyles} />
                                </div>
                            }
                            {(props.reviewerStageLength == 0) &&
                                <div className="col-3">Contact</div>}
                        </div>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <ApplicantList_Live
                                filter={props.filter}
                                getPJobs={props.getPJobs}
                                profile={props.profile}
                                recordTime={props.recordTime}
                                interviewResume={props.interviewResume}
                                getResumeURL={props.getResumeURL}
                                resumeURL={props.resumeURL}
                                isClosed={props.isClosed}
                                keyWords={keyWords}
                                category3={category3}
                                category4={category4}
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
                                reviewer_type={props.reviewer_type}
                                jobsId={props.jobsId}
                                selectedPage={selectedPage}
                                employerProfileDetail={props.employerProfileDetail}
                                reviewerStageLength={props.reviewerStageLength}
                                livcat1={props.livcat1}
                                livcat2={props.livcat2}
                                livcat3={props.livcat3}
                                livcat4={props.livcat4}
                                livcat5={props.livcat5}
                                CheckListCheckbox={CheckListCheckbox}
                            />
                        </div>
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
                                onPageChange={handlePageClick}
                                containerClassName={'pagination3'}
                                activeClassName={'active'}
                                forcePage={props.currentPage}
                            />
                        </div>
                    }
                </div>
                {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter == "active") &&
                    <div style={{ marginTop: "2rem", marginLeft: "2rem" }}>
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={openMoveForm}
                            >
                                Move All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openMoveForm}
                                            >
                                                Move ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openMoveForm}
                                            >
                                                Move
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", color: "#090d3a", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #090d3a" }}
                                    >
                                        Move
                                        <span></span>
                                    </button>}
                            </span>
                        }
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={rejectCandidates}
                            >
                                Reject All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={rejectCandidates}
                                            >
                                                Reject ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={rejectCandidates}
                                            >
                                                Reject
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", color: "#ff0000", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #ff0000" }}
                                    >
                                        Reject
                                        <span></span>
                                    </button>}
                            </span>
                        }
                        {select_all ?
                            <button
                                className="default-btn"
                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                onClick={openEmailForm}
                            >
                                Email All
                                <span></span>
                            </button> :
                            <span>
                                {candidates_count > 0 ?
                                    <span>
                                        {candidates_count > 1 ?
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openEmailForm}
                                            >
                                                Email ({candidates_count})
                                                <span></span>
                                            </button> :
                                            <button
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                onClick={openEmailForm}
                                            >
                                                Email
                                                <span></span>
                                            </button>}
                                    </span> :
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", color: "#006dff", backgroundColor: "#ffffff", paddingTop: "8px", paddingBottom: "8px", border: "1px solid #006dff" }}
                                    >
                                        Email
                                        <span></span>
                                    </button>}
                            </span>
                        }
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
                {/*  move success alert prompt */}
                <AlertModal show={showMoveSuccessAlert} onHide={hideSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Move to next stage Success</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have moved the candidates to selected stage successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                {/*  reject success alert prompt */}
                <AlertModal show={showRejectSuccessAlert} onHide={hideRejectSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Candidate Rejected!</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have rejected the candidates successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={hideRejectSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                <MyShareModal
                    show={showConfigInt}
                    onHide={hideShowConfigInt}
                >
                    <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.2rem", textAlign: "center" }}>Configure Interviews</h3>
                        <p className="pt-1 interview-txt7" style={{ textAlign: "center" }}>Customize your interview names and label candidates for easier management.</p>
                        <form>
                            <div className="interview-txt7">
                                <div className="row">
                                    <div className="col-6" style={{ textAlign: "center", color: "#090d3a" }}>
                                        Interview 1:
                                    </div>
                                    {!live1Edit ?
                                        <div className="col-6" style={{ textAlign: "center", color: "#000" }}>
                                            <a onClick={() => setlive1Edit(true)}>{props.livcat1}</a>
                                            <a style={{ marginLeft: "2rem", color: "#7e8993" }} onClick={() => setlive1Edit(true)}><i class="bx bx-edit-alt"></i></a>
                                        </div> :
                                        <div className="col-6" style={{ textAlign: "center" }}>
                                            <input type="text" placeholder={props.livcat1} onChange={onConfigChange1}></input>
                                        </div>
                                    }
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6" style={{ textAlign: "center", color: "#090d3a" }}>
                                        Interview 2:
                                    </div>
                                    {!live2Edit ?
                                        <div className="col-6" style={{ textAlign: "center", color: "#000" }}>
                                            <a onClick={() => setlive2Edit(true)}>{props.livcat2}</a>
                                            <a style={{ marginLeft: "2rem", color: "#7e8993" }} onClick={() => setlive2Edit(true)}><i class="bx bx-edit-alt"></i></a>
                                        </div> :
                                        <div className="col-6" style={{ textAlign: "center" }}>
                                            <input type="text" placeholder={props.livcat2} onChange={onConfigChange2}></input>
                                        </div>
                                    }
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6" style={{ textAlign: "center", color: "#090d3a" }}>
                                        Interview 3:
                                    </div>
                                    {!live3Edit ?
                                        <div className="col-6" style={{ textAlign: "center", color: "#000" }}>
                                            <a onClick={() => setlive3Edit(true)}>{props.livcat3}</a>
                                            <a style={{ marginLeft: "2rem", color: "#7e8993" }} onClick={() => setlive3Edit(true)}><i class="bx bx-edit-alt"></i></a>
                                        </div> :
                                        <div className="col-6" style={{ textAlign: "center" }}>
                                            <input type="text" placeholder={props.livcat3} onChange={onConfigChange3}></input>
                                        </div>
                                    }
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6" style={{ textAlign: "center", color: "#090d3a" }}>
                                        Interview 4:
                                    </div>
                                    {!live4Edit ?
                                        <div className="col-6" style={{ textAlign: "center", color: "#000" }}>
                                            <a onClick={() => setlive4Edit(true)}>{props.livcat4}</a>
                                            <a style={{ marginLeft: "2rem", color: "#7e8993" }} onClick={() => setlive4Edit(true)}><i class="bx bx-edit-alt"></i></a>
                                        </div> :
                                        <div className="col-6" style={{ textAlign: "center" }}>
                                            <input type="text" placeholder={props.livcat4} onChange={onConfigChange4}></input>
                                        </div>
                                    }
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6" style={{ textAlign: "center", color: "#090d3a" }}>
                                        Interview 5:
                                    </div>
                                    {!live5Edit ?
                                        <div className="col-6" style={{ textAlign: "center", color: "#000" }}>
                                            <a onClick={() => setlive5Edit(true)}>{props.livcat5}</a>
                                            <a style={{ marginLeft: "2rem", color: "#7e8993" }} onClick={() => setlive5Edit(true)}><i class="bx bx-edit-alt"></i></a>
                                        </div> :
                                        <div className="col-6" style={{ textAlign: "center" }}>
                                            <input type="text" placeholder={props.livcat5} onChange={onConfigChange5}></input>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="row pt-4" style={{ margin: "auto", width: "50%" }}>
                                <div className="col-6">
                                    <button type="submit" onClick={submitConfigInt} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>Confirm</button>
                                </div>
                                <div className="col-6">
                                    <button type="button" onClick={hideShowConfigInt} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </MyShareModal>
                <MyModal80 show={showEmailSending} onHide={hideEmailSending}>
                    <EmailSending
                        hideEmailSending={hideEmailSending}
                        employerProfileDetail={props.employerProfileDetail}
                        user={props.user}
                        profile={props.profile}
                        email={email_list}
                        jobid={props.jobsId}
                        first_name={email_list}
                        last_name={email_list}
                        handleStatusChange2={null}
                    />
                </MyModal80>
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