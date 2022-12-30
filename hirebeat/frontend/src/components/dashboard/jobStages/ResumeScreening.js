import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import QuestionForm from "./../jobBoard/QuestionForm";
import { MyModal80, MyModalUpgrade, AlertModal } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews, moveCandidateToInterview, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, updateViewStatus, updateCommentStatus } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus, updateApplicantBasicInfo } from "../../../redux/actions/job_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../../redux/actions/video_actions";
import { subreviewerUpdateComment } from "../../../redux/actions/auth_actions";
// import { MyFullModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import EditQuestion from "./../jobBoard/EditQuestion";
import { EmailSending } from '../applications/EmailSending';
import ReactPaginate from 'react-paginate';
import Select from 'react-select';
import {
    Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Box, Container, HStack, Icon,
    Input, InputGroup, InputLeftElement, Stack, Text, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue, Tooltip
} from '@chakra-ui/react';
import { FiSearch, FiInfo } from 'react-icons/fi';

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

export class ResumeScreening extends Component {
    state = {
        keyWords: "",
        showQForm: false,
        tempQuestion: [],
        category: { value: 'All', label: 'All' },
        category3: { value: 'All', label: 'All' },
        editQuestion: false,
        isSortByScore: true, // true means descending by resume score
        selectedPage: 0,
        showMoveForm: false,
        nextStage: "",
        currentStage: "Resume Review",
        showMoveSuccessAlert: false,
        showRejectSuccessAlert: false,
        showEmailSending: false,
        email_list: null,
        select_all: false,
        candidates_count: 0,
        selectAllCandidates: false,
        showDetails: false,
        detailIndex: 0,
    }

    componentDidMount() {
        let page = this.state.selectedPage + 1;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", this.state.isSortByScore); this.props.getPJobs(); }, 300);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.filterReset > 0) {
            return {
                keyWords: "",
            };
        }
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

    options3 = [
        { value: 'Pending', label: 'Pending' },
        { value: 'Reviewed', label: 'Reviewed' },
        { value: 'All', label: 'All' },
    ];

    onFilter3 = (category) => {
        this.setState({ category3: category })
    }

    customStyles = {
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

    onChange = (e) => {
        this.setState({ keyWords: e.target.value });
        if (e.key === 'Enter') {
            this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", this.state.isSortByScore, e.target.value);
        }
    };

    onSearch = () => {
        this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", this.state.isSortByScore, this.state.keyWords);
    };

    setTempQuestion = (questions) => {
        this.setState({ tempQuestion: questions });
    }

    hideQForm = () => {
        let page = this.state.selectedPage + 1;
        setTimeout(() => {
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", this.state.isSortByScore, this.state.keyWords);
            this.props.getPJobs();
        }, 300);
        this.setState({ showQForm: false });

    }

    showQForm = () => {
        this.setState({ showQForm: true });
    }

    sendSuccessAlert = () => {
        confirmAlert({
            title: "Move to next stage Success",
            message: "You have moved the candidates to selected stage successfully.",
            buttons: [
                {
                    label: 'Ok'
                }
            ]
        });
    };

    rejectSuccessAlert = () => {
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

    noCandidateAlert = () => {
        confirmAlert({
            title: "No Candidate Selected!",
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

    openMoveForm = () => {
        let candidateCount = 0;
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked) {
                candidateCount += 1;
            }
        };
        if (candidateCount > 0) {
            this.setState({
                showMoveForm: true
            })
        } else {
            this.noCandidateAlert();
        }
    }

    moveCandidates = () => {
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
            if ((this.state.nextStage != "") && (this.state.nextStage != "Resume Review")) {
                let viewedData = {
                    "applyIds": invitedCandidates,
                    "isViewed": true,
                }
                let meta = {
                    position_id: positionId,
                    job_id: jobId,
                    emails: emails,
                    names: names,
                    "candidates": invitedCandidates,
                    "nextStage": this.state.nextStage,
                }
                this.props.moveCandidateToInterview(meta);
                this.setState({
                    showMoveForm: false,
                    selectAllCandidates: false
                });
                // update
                let page = 1;
                let userId = this.props.user.id;
                setTimeout(() => {
                    this.props.getAllJobs(userId, page, "Resume Review", "True", this.state.isSortByScore, this.state.keyWords);
                    this.props.getPostedJobs(userId, page, "Resume Review", "", "", "", "", this.props.curJob.job_details.id)
                }, 300);
                this.unSelectAllCandidates();
                let noShowAgainMove = localStorage.getItem("noShowAgainMove") == "true";
                if (!noShowAgainMove) {
                    this.enableSuccessAlert();
                }
                //Segment
                window.scrollTo(0, 0);
                switch (this.state.nextStage) {
                    case "Resume Review":
                        return (window?.analytics?.track("Recruitment - Move to Resume Review", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: this.props.user.id
                        }));
                    case "Video Interview":
                        return (window?.analytics?.track("Recruitment - Move to Video Interview", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: this.props.user.id
                        }));
                    case "Live Interview":
                        return (window?.analytics?.track("Recruitment - Move to Live Interview", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: this.props.user.id
                        }));
                    case "Short List":
                        return (window?.analytics?.track("Recruitment - Move to Short List", {
                            eventTime: Date().toLocaleString(),
                            jobID: jobId,
                            employerID: this.props.user.id
                        }));
                }
            } else if (this.state.nextStage == "Resume Review") {
                alert("These candidates are already in this stage!");
            } else {
                alert("Please select a stage to move!");
            }
        }
        else {
            this.noCandidateAlert();
        }
        window.scrollTo(0, 0);
    }

    rejectCandidates = () => {
        let candidateCount = 0;
        let positionId = this.props.curJob.job_details.positions_id;
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
                "positionId": positionId,
                "candidates": invitedCandidates,
                "nextStage": this.state.nextStage,
                "is_reject": true,
            }
            this.props.updateInviteStatus(data);
            this.setState({
                selectAllCandidates: false
            });
            // update
            let page = 1;
            let userId = this.props.user.id;
            setTimeout(() => {
                this.props.getAllJobs(userId, page, "Resume Review", "True", this.state.isSortByScore, this.state.keyWords);
                this.props.getPostedJobs(userId, page, "Resume Review", "", "", "", "", this.props.curJob.job_details.id)
            }, 300);
            this.unSelectAllCandidates();
            let noShowAgainReject = localStorage.getItem("noShowAgainReject") == "true";
            if (!noShowAgainReject) {
                this.enableRejectSuccessAlert();
            }
            //Segment info
            window?.analytics?.track("Reject - Resume Review", {
                eventTime: Date()?.toLocaleString()
            });
        } else {
            this.noCandidateAlert();
        }
        window.scrollTo(0, 0);
    };
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
    //                        let prefix = "https://app.hirebeat.co/candidate-login?";  // online
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
        if (candidates.length <= 0) { return }
        if (checkbox.checked) {
            // select all candidates
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = true;
            }
            this.setState({ select_all: true, selectAllCandidates: true });
        }
        else {
            // cancel all candidates selection
            for (let i = 0; i < candidates.length; i++) {
                candidates[i].checked = false;
            }
            this.setState({ select_all: false, candidates_count: false, selectAllCandidates: false });
        }
    }

    unSelectAllCandidates = () => {
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            candidates[i].checked = false;
        }
        this.setState({ candidates_count: 0, select_all: false });
    }

    sortByScore = () => {
        if (!this.state.isSortByScore) {
            this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", "True", this.state.keyWords);
        }
        else {
            this.props.getAllJobs(this.props.user.id, 1, "Resume Review", "True", "False", this.state.keyWords);
        }
        this.setState({ isSortByScore: !this.state.isSortByScore });
    }

    handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        this.setState({ selectedPage: selectedPage });
        let page = selectedPage + 1;
        if (this.state.isSortByScore) {
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", "True", this.state.keyWords);
        }
        else {
            this.props.getAllJobs(this.props.user.id, page, "Resume Review", "True", "False", this.state.keyWords);
        }
        window.scrollTo(0, 0);
    };

    hideSuccessAlert = () => {
        this.handleAlertChoice();
        this.setState({ showMoveSuccessAlert: false });
    }

    enableSuccessAlert = () => {
        this.setState({ showMoveSuccessAlert: true });
    }

    handleAlertChoice = () => {
        let checkbox = document.getElementById("alertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainMove", "true");
        }
        else {
            localStorage.setItem("noShowAgainMove", "false");
        }
    }

    hideRejectSuccessAlert = () => {
        this.handleRejectAlertChoice();
        this.setState({ showRejectSuccessAlert: false });
    }

    enableRejectSuccessAlert = () => {
        this.setState({ showRejectSuccessAlert: true });
    }

    handleRejectAlertChoice = () => {
        let checkbox = document.getElementById("rejectAlertCheckbox");
        let isChecked = checkbox.checked;
        if (isChecked) {
            localStorage.setItem("noShowAgainReject", "true");
        }
        else {
            localStorage.setItem("noShowAgainReject", "false");
        }
    }

    openEmailForm = () => {
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
                    email_list.push({ "email": candidate?.email, "id": candidate?.id, "first_name": candidate?.first_name, "last_name": candidate?.last_name });
                }
            }
            this.setState({ email_list: email_list, showEmailSending: true })
            //Segment info
            window?.analytics?.track("View Email - Resume Review", {
                eventTime: Date()?.toLocaleString()
            });
        } else {
            this.noCandidateAlert();
        }
    }

    hideEmailSending = () => {
        this.setState({ showEmailSending: false })
    }

    CheckListCheckbox = () => {
        this.setState({ candidates_count: 0 })
        let candidates = document.getElementsByClassName("selected-candidate");
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i].checked == true) {
                this.setState(prevState => {
                    return { candidates_count: prevState.candidates_count + 1 }
                })
            }
        }
    }

    setshowDetailsTrue = () => {
        this.setState({ showDetails: true });
    }

    setshowDetailsFalse = () => {
        this.setState({ showDetails: false });
    }

    setdetailIndex = (detailIndex) => {
        this.setState({ detailIndex: detailIndex })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.showDetails ?
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
                                    <InputGroup maxW="xs" onKeyUp={this.onSearch}>
                                        <InputLeftElement pointerEvents="none">
                                            <Icon as={FiSearch} color="muted" boxSize="5" />
                                        </InputLeftElement>
                                        <Input placeholder="Search candidate" value={this.state.keyWords} onChange={this.onChange} onKeyPress={this.onChange} />
                                    </InputGroup>
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
                                                pageCount={this.props.curJob.total_page}
                                                marginPagesDisplayed={1}
                                                pageRangeDisplayed={5}
                                                onPageChange={this.handlePageClick}
                                                containerClassName={'pagination3'}
                                                activeClassName={'active'}
                                                forcePage={this.props.curJob.current_page}
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
                                                        {!this.props.profile.is_subreviwer &&
                                                            <input id="select-all" type="checkbox" checked={this.state.selectAllCandidates} onClick={this.selectAllCandidates} />
                                                        }
                                                        <HStack spacing='1'><Text color="muted">Name</Text></HStack>
                                                    </HStack>
                                                </Th>
                                                <Th><Text color="muted">Applied On</Text></Th>
                                                <Th>
                                                    <HStack>
                                                        <Text color="muted">Resume Score</Text>
                                                        <span onClick={this.sortByScore} style={{ color: "#006dff", cursor: "pointer" }}><i class='bx-fw bx bx-sort'></i></span>
                                                    </HStack>
                                                </Th>
                                                {(this.props.reviewerStageLength > 0) &&
                                                    <Th>
                                                        <HStack>
                                                            <Text color="muted">Status</Text>
                                                            <Select isSearchable={false} value={this.state.category3} onChange={this.onFilter3} options={this.options3} className="select-category" styles={customStyles} />
                                                        </HStack>
                                                    </Th>
                                                }
                                                {(this.props.reviewerStageLength == 0) &&
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
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {this.props.curJob.applicants.map((a, index) => {
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
                                                else if (this.state.category3.value != "All") {
                                                    switch (this.state.category3.value) {
                                                        case "Pending":
                                                            if (a.reviewer_review_status) return null;
                                                            break;
                                                        case "Reviewed":
                                                            if (!a.reviewer_review_status) return null;
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
                                                        keyWords={this.state.keyWords}
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
                                                        isSortByScore={this.state.isSortByScore}
                                                        selectedCurrentStage="Resume Review"
                                                        selectedStatus={this.state.isSortByScore ? "True" : "False"}
                                                        updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                                                        employerProfileDetail={this.props.employerProfileDetail}
                                                        reviewerStageLength={this.props.reviewerStageLength}
                                                        CheckListCheckbox={this.CheckListCheckbox}
                                                        showDetails={this.state.showDetails}
                                                        setshowDetailsTrue={this.setshowDetailsTrue}
                                                        setshowDetailsFalse={this.setshowDetailsFalse}
                                                        setdetailIndex={this.setdetailIndex}
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
                                                pageCount={this.props.curJob.total_page}
                                                marginPagesDisplayed={1}
                                                pageRangeDisplayed={5}
                                                onPageChange={this.handlePageClick}
                                                containerClassName={'pagination3'}
                                                activeClassName={'active'}
                                                forcePage={this.props.curJob.current_page}
                                            />
                                        </div>
                                    </HStack>
                                </Box>
                            </Stack>
                        </Box>
                        {(this.props.filter == "active" && !this.props.profile.is_subreviwer) &&
                            <Box pt='3'>
                                {this.state.select_all ?
                                    <button
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                        onClick={this.openMoveForm}
                                    >
                                        Move All
                                        <span></span>
                                    </button> :
                                    <span>
                                        {this.state.candidates_count > 0 ?
                                            <span>
                                                {this.state.candidates_count > 1 ?
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.openMoveForm}
                                                    >
                                                        Move ({this.state.candidates_count})
                                                        <span></span>
                                                    </button> :
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", backgroundColor: "#090d3a", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.openMoveForm}
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
                                {this.state.select_all ?
                                    <button
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                        onClick={this.rejectCandidates}
                                    >
                                        Reject All
                                        <span></span>
                                    </button> :
                                    <span>
                                        {this.state.candidates_count > 0 ?
                                            <span>
                                                {this.state.candidates_count > 1 ?
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.rejectCandidates}
                                                    >
                                                        Reject ({this.state.candidates_count})
                                                        <span></span>
                                                    </button> :
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#ff0000", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.rejectCandidates}
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
                                {this.state.select_all ?
                                    <button
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                        onClick={this.openEmailForm}
                                    >
                                        Email All
                                        <span></span>
                                    </button> :
                                    <span>
                                        {this.state.candidates_count > 0 ?
                                            <span>
                                                {this.state.candidates_count > 1 ?
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.openEmailForm}
                                                    >
                                                        Email ({this.state.candidates_count})
                                                        <span></span>
                                                    </button> :
                                                    <button
                                                        className="default-btn"
                                                        style={{ paddingLeft: "25px", marginLeft: "1rem", backgroundColor: "#006dff", paddingTop: "8px", paddingBottom: "8px" }}
                                                        onClick={this.openEmailForm}
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
                        <ApplicantRow
                            filter={this.props.filter}
                            applicant={this.props.curJob.applicants[this.state.detailIndex]}
                            index={this.state.detailIndex}
                            applicants={this.props.curJob.applicants}
                            curJob={this.props.curJob}
                            keyWords={this.state.keyWords}
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
                            isSortByScore={this.state.isSortByScore}
                            selectedCurrentStage="Resume Review"
                            selectedStatus={this.state.isSortByScore ? "True" : "False"}
                            updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                            employerProfileDetail={this.props.employerProfileDetail}
                            reviewerStageLength={this.props.reviewerStageLength}
                            CheckListCheckbox={this.CheckListCheckbox}
                            showDetails={this.state.showDetails}
                            setshowDetailsTrue={this.setshowDetailsTrue}
                            setshowDetailsFalse={this.setshowDetailsFalse}
                            setdetailIndex={this.setdetailIndex}
                        />
                    </Container>
                }
                <MyModalUpgrade
                    show={this.state.showMoveForm}
                    onHide={() => { this.setState({ showMoveForm: false }) }}
                >
                    <div className="container chart-bg1" style={{ padding: "2rem" }}>
                        <h3 style={{ fontSize: "1.25rem", color: "#090d3a", fontWeight: "600", textAlign: "center" }}>Move to Another Stage</h3>
                        {this.state.currentStage == "Resume Review" ?
                            <div className="row d-flex justify-content-center mt-5">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Resume Review</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-5">
                                <button onClick={() => { this.setState({ nextStage: "Resume Review" }); this.setState({ currentStage: "Resume Review" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Resume Review</button>
                            </div>
                        }
                        {this.state.currentStage == "Video Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Video Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Video Interview" }); this.setState({ currentStage: "Video Interview" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Video Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Live Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Live Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Live Interview" }); this.setState({ currentStage: "Live Interview" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Live Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Short List" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Shortlist</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.setState({ nextStage: "Short List" }); this.setState({ currentStage: "Short List" }) }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Shortlist</button>
                            </div>
                        }
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-6 d-flex justify-content-end">
                                <button onClick={this.moveCandidates} className="default-btn" style={{ backgroundColor: "#090d3a", paddingLeft: "25px" }}>Confirm</button>
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <button onClick={() => { this.setState({ showMoveForm: false }) }} className="default-btn" style={{ backgroundColor: "#979797", paddingLeft: "25px" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
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
                {/*  move success alert prompt */}
                <AlertModal show={this.state.showMoveSuccessAlert} onHide={this.hideSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Move to next stage Success</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have moved the candidates to selected stage successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="alertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={this.hideSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                {/*  reject success alert prompt */}
                <AlertModal show={this.state.showRejectSuccessAlert} onHide={this.hideRejectSuccessAlert}>
                    <div className="container" style={{ fontFamily: "Arial, Helvetica, sans-serif", margin: "auto", backgroundColor: "#ffffff", overflow: "auto", padding: "2rem" }}>
                        <h3 className="interview-h3">Candidate Rejected!</h3>
                        <p className="interview-p" style={{ marginBottom: "0.5rem" }}>You have rejected the candidates successfully.</p>
                        <div className="interview-p align-center" style={{ marginBottom: "1rem" }}>
                            <input id="rejectAlertCheckbox" type="checkbox" style={{ marginRight: "1rem" }} />
                            Don't show again
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button onClick={this.hideRejectSuccessAlert} className="default-btn1" style={{ paddingLeft: "25px", float: "right" }}>Ok</button>
                        </div>
                    </div>
                </AlertModal>
                <Modal onClose={this.hideEmailSending} size={"7xl"} isOpen={this.state.showEmailSending}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <EmailSending
                                hideEmailSending={this.hideEmailSending}
                                employerProfileDetail={this.props.employerProfileDetail}
                                user={this.props.user}
                                profile={this.props.profile}
                                email={this.state.email_list}
                                jobid={this.props.curJob.job_details.id}
                                first_name={this.state.email_list}
                                last_name={this.state.email_list}
                                handleStatusChange2={null}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
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
    // useEffect(() => {
    //     props.getApplicantsVideos(props.applicant.email, props.curJob.job_details.positions_id);
    // }, []);
    function onView() {
        let applyIds = [];
        applyIds.push(applicants[current].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        //        let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : props.selectedPage + 1;
        //        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore); props.getPJobs() }, 300);
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email, "Resume Review");
        //sessionStorage.setItem(("showPreview" + props.index), "true");
        // setShowPreview(true);
        props.setdetailIndex(current);
        props.setshowDetailsTrue();
    }

    function hideModal() {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore, props.keyWords); }, 300);
        //sessionStorage.removeItem("showPreview" + props.index);
        //sessionStorage.removeItem("showPreview" + current);
        setShowPreview(false);
    }

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
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[index].email, props.user.email, "Resume Review");
        //sessionStorage.setItem(("showPreview" + index), "true");
        //sessionStorage.setItem("current", index);
    }

    function viewNextResult(curIndex) {
        setCurrent(curIndex + 1);
        //sessionStorage.removeItem("show" + curIndex);
        let next = curIndex + 1;
        getReviewPageData(next);
        props.setdetailIndex(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        setCurrent(curIndex - 1);
        //sessionStorage.removeItem("show" + curIndex);
        let prev = curIndex - 1;
        getReviewPageData(prev);
        props.setdetailIndex(curIndex - 1);
    };

    const refresh = () => {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, "Resume Review", "True", props.isSortByScore, props.keyWords); props.getPJobs() }, 300);
        props.updateViewStatus({ "candidate_id": applicants[current].id });
        props.getApplicantsVideos(props.applicant.email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email, "Resume Review");
    }

    return (
        <React.Fragment>
            {!props.showDetails ?
                <Tr>
                    <Td className="interview-txt9" style={{ cursor: "pointer", color: "#006dff" }}>
                        <HStack spacing='3'>
                            <Stack>
                                {!props.profile.is_subreviwer &&
                                    <input className="selected-candidate" value={JSON.stringify(props.applicant)} type="checkbox" onClick={() => props.CheckListCheckbox()} />
                                }
                            </Stack>
                            <Stack>
                                {(!props.applicant.is_viewed && props.applicant.is_invited != 1) ?
                                    <div>
                                        <span className="dot"></span>
                                        <span className="title-button2" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                            {name.length > 29 ? name.substring(0, 27) + "..." : name}
                                        </span>
                                    </div> :
                                    <div>
                                        <span className="dot" style={{ visibility: "hidden" }}></span>
                                        <span className="title-button2" style={{ cursor: "pointer" }} onClick={() => { setCurrent(props.index); onView() }}>
                                            {name.length > 29 ? name.substring(0, 27) + "..." : name}
                                        </span>
                                    </div>
                                }
                            </Stack>
                        </HStack>
                    </Td>
                    <Td className="interview-txt9">
                        {props.applicant.apply_date.substring(0, 10)}
                    </Td>
                    <Td className="interview-txt9">
                        {resumeScore >= 76 && <img style={{ width: "50%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-great.png" />}
                        {resumeScore >= 51 && resumeScore < 76 && <img style={{ width: "50%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-good.png" />}
                        {resumeScore >= 26 && resumeScore < 51 && <img style={{ width: "50%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-avg.png" />}
                        {resumeScore >= 0 && resumeScore < 26 && <img style={{ width: "50%" }} src="https://hirebeat-assets.s3.amazonaws.com/cv-score-bad.png" />}
                    </Td>
                    {(props.reviewerStageLength > 0) &&
                        <Td className="interview-txt9">
                            {props.applicant?.reviewer_review_status ?
                                <Text style={{ fontWeight: "600" }}>Reviewed</Text> :
                                <Text color="muted" style={{ fontWeight: "600" }}>Pending</Text>
                            }
                        </Td>
                    }
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            {props.applicant?.num_votes > 0 &&
                                <Text color="muted" style={{ fontWeight: "600" }}>{props.applicant?.num_vote_yes + "/" + props.applicant?.num_votes}</Text>
                            }
                        </Td>
                    }
                </Tr> :
                <span>
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
                        keyWords={props.keyWords}
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
                        currentStage={"Resume Review"}
                        positionId={props.positionId}
                        selectedCurrentStage={props.selectedCurrentStage}
                        selectedStatus={props.selectedStatus}
                        isSortByScore={props.isSortByScore}
                        updateApplicantBasicInfo={props.updateApplicantBasicInfo}
                        employerProfileDetail={props.employerProfileDetail}
                        setshowDetailsFalse={props.setshowDetailsFalse}
                    />
                </span>
            }
        </React.Fragment>
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
    getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, getApplicantsVideos, updateViewStatus, getApplicantsInfo, updateCommentStatus,
    subreviewerUpdateComment, updateApplicantBasicInfo
})(
    ResumeScreening
));