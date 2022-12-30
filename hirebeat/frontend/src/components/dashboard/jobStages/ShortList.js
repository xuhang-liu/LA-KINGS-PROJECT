import React, { useState, useEffect } from 'react';
import { MyModal80, AlertModal } from './../DashboardComponents';
import MoveForm from "./interviewComponents/MoveForm";
import { ResumeEva } from "./interviewComponents/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../../redux/actions/question_actions';
import { checkUserExistence } from './../../../redux/actions/auth_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import { MyVerticallyCenteredModal } from "./interviewComponents/MyVerticallyCenteredModal";
import { EmailSending } from '../applications/EmailSending';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import axios from "axios";
import {
    Box, Container, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Text, Table, Tbody, Th, Thead, Td, Tr, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Tooltip
} from '@chakra-ui/react';
import { FiSearch, FiInfo } from 'react-icons/fi';

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(props.positionId);
    const theJob = props.postedJobs[selectedId.toString()];

    //    useEffect(() => {
    //        props.getPostedJobs(props.user.id, 1, "Short List");
    //        props.loadStarList(props.positionId);
    //    }, [])


    useEffect(() => {
        if (props.filterReset > 0) {
            setkeyWords("");
        }
    }, [props.filterReset]);

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
        props.getPostedJobs(props.user.id, page, "Short List", "", "", "", "", props.jobsId, keyWords);
        window.scrollTo(0, 0);
    };

    return (
        <AcceptedCandidate
            filter={props.filter}
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
            handlePageClick={handlePageClick}
            currentPage={props.currentPage}
            totalPage={props.totalPage}
            selectedPage={selectedPage}
            reviewer_type={props.reviewer_type}
            jobsId={props.jobsId}
            employerProfileDetail={props.employerProfileDetail}
            reviewerStageLength={props.reviewerStageLength}
            updateInviteStatus={props.updateInviteStatus}
            moveCandidateToInterview={props.moveCandidateToInterview}
            positionId={props.positionId}
            filterReset={props.filterReset}
        />
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
    const [category5, setCategory5] = useState({ value: 'All', label: 'All' });
    const [showMoveSuccessAlert, setShowMoveSuccessAlert] = useState(false);
    const [showRejectSuccessAlert, setShowRejectSuccessAlert] = useState(false);
    const [showMoveForm, setShowMoveForm] = useState(false);
    const [currentStage, setCurrentStage] = useState("Short List");
    const [nextStage, setNextStage] = useState("Live Interview");
    const [showEmailSending, setShowEmailSending] = useState(false);
    const [email_list, setEmail_list] = useState(null);
    const [select_all, setSelect_all] = useState(false);
    const [candidates_count, setCandidates_count] = useState(0);
    const jobTitle = props.theJob.job_title;
    const jobId = props.theJob.job_id;
    const [selectedAllCandidates, setSelectedAllCandidates] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [detailIndex, setDetailIndex] = useState(0);

    useEffect(() => {
        if (props.filterReset > 0) {
            setCategory3({ value: 'All', label: 'All' });
            setCategory5({ value: 'All', label: 'All' });
        }
    }, [props.filterReset]);

    function onFilter3(category3) {
        setCategory3(category3)
    }

    function onFilter5(category5) {
        setCategory5(category5)
        let page = 1;
        let userId = props.user.id;
        props.getPostedJobs(userId, page, "Short List", "", category3.value, "", category5.value, props.jobsId, props.keyWords);
    }


    const onKeyPress = (e) => {
        //setkeyWords(e.target.value);
        if (e.key === 'Enter') {
            let userId = props.user.id;
            props.getPostedJobs(userId, 1, "Short List", "", category3.value, "", category5.value, props.jobsId, e.target.value);
        }
    };
    const onSearch = (e) => {
        let userId = props.user.id;
        props.getPostedJobs(userId, 1, "Short List", "", category3.value, "", category5.value, props.jobsId, props.keyWords);
    };

    const options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ]

    const options5 = [
        { value: 'Offer to be Made', label: 'Offer to be Made' },
        { value: 'Offer Extended', label: 'Offer Extended' },
        { value: 'In Negotiation', label: 'In Negotiation' },
        { value: 'Declined', label: 'Declined' },
        { value: 'TBD', label: 'TBD' },
        { value: 'All', label: 'All' },
    ]

    const customStyles = {
        control: styles => ({ ...styles, background: useColorModeValue("#ffffff", "#1a202c"), borderRadius: "5px" }),
        singleValue: styles => ({
            ...styles,
            color: useColorModeValue("#090d3a", "#ffffff"),
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500',
            background: useColorModeValue("#ffffff", "#1a202c")
        }),
        menuList: styles => ({
            ...styles,
            backgroundColor: useColorModeValue('#ffffff', '#090d3a'),
            color: useColorModeValue('#090d3a', '#7a7a7a'),
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    }

    function selectAllCandidates() {
        let checkbox = document.getElementById("select-all");
        let candidates = document.getElementsByClassName("selected-candidate");
        if (candidates.length <= 0) { return }
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
        setCandidates_count(0);
        setSelect_all(false);
    }

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

    const enableSuccessAlert = () => {
        setShowMoveSuccessAlert(true);
    }

    const enableRejectSuccessAlert = () => {
        setShowRejectSuccessAlert(true);
    }

    const hideSuccessAlert = () => {
        handleAlertChoice();
        setShowMoveSuccessAlert(false);
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
                names.push(candidate.name);
                emails.push(candidate.email.toLowerCase());
                invitedCandidates.push(candidate.id);
                candidateCount += 1;
            }
        }
        // check candidates selected or not
        if (candidateCount > 0) {
            if ((nextStage != "") && (nextStage != "Short List")) {
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
                setTimeout(() => {
                    props.getAllJobs(userId, page, "Short List");
                    props.getPostedJobs(userId, page, "Short List", "", category3.value, "", category5.value, props.jobsId, props.keyWords)
                }, 300);
                unSelectAllCandidates();
                let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
                setSelectedAllCandidates(false);
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
            } else if (nextStage == "Short List") {
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
                names.push(candidate.name);
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
            setTimeout(() => {
                props.getAllJobs(userId, page, "Short List");
                props.getPostedJobs(userId, page, "Short List", "", category3.value, "", category5.value, props.jobsId, props.keyWords)
            }, 300);
            unSelectAllCandidates();
            let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
            setSelectedAllCandidates(false);
            if (!noShowAgainReject) {
                enableRejectSuccessAlert();
            }
            //Segment info
            window?.analytics?.track("Reject - Short List", {
                eventTime: Date()?.toLocaleString()
            });
        } else {
            noCandidateAlert();
        }
        window.scrollTo(0, 0);
    };

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
            //Segment info
            window?.analytics?.track("View Email - Short List", {
                eventTime: Date()?.toLocaleString()
            });
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
            {!showDetails ?
                <Container
                    py={{
                        base: '4',
                        md: '8',
                    }}
                    px={{
                        base: '0',
                        md: 8,
                    }}
                >
                    <Box bg="bg-surface" borderRadius="lg" boxShadow="sm">
                        <Stack spacing="5">
                            <Box
                                px={{
                                    base: '4',
                                    md: '6',
                                }}
                                pt="5"
                            >
                                <HStack spacing='3'>
                                    <InputGroup maxW="xs" onKeyUp={onSearch}>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon as={FiSearch} color="muted" boxSize="5" />
                                        </InputLeftElement>
                                        <Input placeholder="Search candidate" value={props.keyWords} onChange={props.onChange} onKeyPress={onKeyPress} />
                                    </InputGroup>
                                </HStack>
                            </Box>
                            <Box
                                px={{
                                    base: '4',
                                    md: '6',
                                }}
                            >
                                <HStack spacing="3" justify="space-between">
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
                                            forcePage={props.currentPage}
                                        />
                                    </div>
                                </HStack>
                            </Box>
                            <Box overflowX="auto" minH='96'>
                                <Table>
                                    <Thead>
                                        <Tr>
                                            <Th>
                                                <HStack spacing='6'>
                                                    {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                                        <input id="select-all" type="checkbox" checked={selectedAllCandidates} onClick={selectAllCandidates} style={{ display: (props.allInvited ? "none" : "inline") }} />
                                                    }
                                                    <HStack spacing='1'><Text color="muted">Name</Text></HStack>
                                                </HStack>
                                            </Th>
                                            <Th><Text color="muted">Resume Score</Text></Th>
                                            {(props.reviewerStageLength > 0) &&
                                                <Th>
                                                    <HStack>
                                                        <Text color="muted">Status</Text>
                                                        <Select isSearchable={false} value={category3} onChange={onFilter3} options={options3} className="select-category" styles={customStyles} />
                                                    </HStack>
                                                </Th>
                                            }
                                            {(props.reviewerStageLength == 0) &&
                                                <Th>
                                                    <Tooltip label='Affirmative Votes over Total Votes. Pending votes are not included.' aria-label='A tooltip' fontSize='sm'>
                                                        <HStack>
                                                            <Text color="muted">
                                                                Team Review
                                                            </Text>
                                                            <FiInfo style={{ color: "#dfdfdf" }} />
                                                        </HStack>
                                                    </Tooltip>
                                                </Th>
                                            }
                                            {(props.reviewerStageLength == 0) &&
                                                <Th>
                                                    <HStack>
                                                        <Text color="muted">Offer Status</Text>
                                                        <Select isSearchable={false} value={category5} onChange={onFilter5} options={options5} className="select-category" styles={customStyles} />
                                                    </HStack>
                                                </Th>
                                            }
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {props.theJob.applicants.map((applicant, index) => {
                                            return (
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
                                                    keyWords={props.keyWords}
                                                    getAllJobs={props.getAllJobs}
                                                    reviewer_type={props.reviewer_type}
                                                    selectedPage={props.selectedPage}
                                                    jobsId={props.jobsId}
                                                    employerProfileDetail={props.employerProfileDetail}
                                                    reviewerStageLength={props.reviewerStageLength}
                                                    category3={category3}
                                                    category5={category5}
                                                    CheckListCheckbox={CheckListCheckbox}
                                                    showDetails={showDetails}
                                                    setShowDetails={setShowDetails}
                                                    setDetailIndex={setDetailIndex}
                                                />
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                            </Box>
                            <Box
                                px={{
                                    base: '4',
                                    md: '6',
                                }}
                                pb="5"
                            >
                                <HStack spacing="3" justify="space-between">
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
                                            forcePage={props.currentPage}
                                        />
                                    </div>
                                </HStack>
                            </Box>
                        </Stack>
                    </Box>
                    {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer && props.filter == "active") &&
                        <Box pt='3'>
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
                        </Box>
                    }
                </Container> :
                <Container
                    py={{
                        base: '4',
                        md: '8',
                    }}
                    px={{
                        base: '0',
                        md: 8,
                    }}
                >
                    <CandidateCard
                        getPJobs={props.getPJobs}
                        refreshPage={props.refreshPage}
                        stars={props.stars[props.theJob.applicants[detailIndex]?.email]}
                        resume_list={Math.max(props.resume_list[props.theJob.applicants[detailIndex]?.email] ? props.resume_list[props.theJob.applicants[detailIndex]?.email] : 0, props.theJob.applicants[detailIndex]?.result_rate ? props.theJob.applicants[detailIndex]?.result_rate : 0)} // get max resume score
                        applicant={props.theJob.applicants[detailIndex]}
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
                        current={detailIndex}
                        getReviewNote={props.getReviewNote}
                        getReviewerEvaluation={props.getReviewerEvaluation}
                        getCurrentReviewerEvaluation={props.getCurrentReviewerEvaluation}
                        user={props.user}
                        getPostedJobs={props.getPostedJobs}
                        keyWords={props.keyWords}
                        getAllJobs={props.getAllJobs}
                        reviewer_type={props.reviewer_type}
                        selectedPage={props.selectedPage}
                        jobsId={props.jobsId}
                        employerProfileDetail={props.employerProfileDetail}
                        reviewerStageLength={props.reviewerStageLength}
                        category3={category3}
                        category5={category5}
                        CheckListCheckbox={CheckListCheckbox}
                        showDetails={showDetails}
                        setShowDetails={setShowDetails}
                        setDetailIndex={setDetailIndex}
                    />
                </Container>
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
            <Modal onClose={hideEmailSending} size={"7xl"} isOpen={showEmailSending}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
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
                    </ModalBody>
                </ModalContent>
            </Modal>
        </React.Fragment>
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
        control: styles => ({ ...styles, background: useColorModeValue("#ffffff", "#1a202c"), borderRadius: "5px" }),
        singleValue: styles => ({
            ...styles,
            color: useColorModeValue("#090d3a", "#ffffff"),
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500',
            background: useColorModeValue("#ffffff", "#1a202c")
        }),
        menuList: styles => ({
            ...styles,
            backgroundColor: useColorModeValue('#ffffff', '#090d3a'),
            color: useColorModeValue('#090d3a', '#7a7a7a'),
        }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
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

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.applicant?.apply_candidate_id);
        props.getReviewNote(props.applicant.positions_id, props.applicant.email);
        props.getReviewerEvaluation(props.applicant.positions_id, props.applicant.email);
        props.getCurrentReviewerEvaluation(props.applicant.positions_id, props.applicant.email, props.user.email, "Short List");
        //sessionStorage.setItem(("showShortListModal" + props.current), "true");
        // setShow(true);
        props.setShowDetails(true);
        props.setDetailIndex(current);
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
        props.setDetailIndex(curIndex + 1);
    };

    function viewNextResult(curIndex) {
        getReviewPageData(curIndex + 1);
        props.setDetailIndex(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        getReviewPageData(curIndex - 1);
        props.setDetailIndex(curIndex - 1);
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
        setShow(false);
        setCurrent(props.current);
        props.getPostedJobs(props.user.id, props.currentPage, "Short List", "", props.category3.value, "", props.category5.value, props.jobsId, props.keyWords);
    }
    return (
        <React.Fragment>
            {!props.showDetails ?
                <Tr>
                    <Td className="interview-txt9" style={{ cursor: "pointer", color: "#006dff" }}>
                        <HStack spacing='3'>
                            <Stack>
                                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                    <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" onClick={props.CheckListCheckbox} />
                                }
                            </Stack>
                            <Stack>
                                <button className="title-button2" style={{ wordBreak: "break-all" }} onClick={() => { viewResult(); }}>
                                    {props.applicant.name.length > 30 ? props.applicant.name.substring(0, 28) + "..." : props.applicant.name}
                                </button>
                            </Stack>
                        </HStack>
                    </Td>
                    <Td>
                        {renderResume(props.resume_list)}
                    </Td>
                    {(props.reviewerStageLength > 0) &&
                        <Td className="interview-txt9">
                            {props.applicant?.reviewer_review_status ?
                                <Text style={{ fontWeight: "600" }}>Reviewed</Text> :
                                <Text color='muted' style={{ fontWeight: "600" }}>Pending</Text>
                            }
                        </Td>}
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            {props.applicant?.num_votes > 0 &&
                                <Text color='muted' style={{ fontWeight: "600" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</Text>
                            }
                        </Td>
                    }
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            <Select value={category1.value != null ? category1 : { value: props.applicant.shortcat, label: props.applicant.shortcat }} onChange={onFilter1} options={options1} className="select-category5" styles={customStyles} isSearchable={false} />
                        </Td>}
                </Tr> :
                <span>
                    {/* Shortlist Result */}
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
                        keyWords={props.keyWords}
                        currentStage={"Short List"}
                        reviewer_type={props.reviewer_type}
                        jobsId={props.jobsId}
                        selectedPage={props.selectedPage}
                        viewPrevResult={viewPrevResult}
                        viewNextResult={viewNextResult}
                        getNextResult={getNextResult}
                        employerProfileDetail={props.employerProfileDetail}
                        category3={props.category3}
                        category5={props.category5}
                        setShowDetails={props.setShowDetails}
                    />
                </span>
            }
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
        title: "Offer Status",
        message: "Updated successfully!",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};