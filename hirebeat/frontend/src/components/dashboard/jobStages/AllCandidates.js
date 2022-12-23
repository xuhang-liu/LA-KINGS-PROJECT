import React, { Component, useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
// import QuestionForm from "./../jobBoard/QuestionForm";
// import { MyModal80 } from "./../DashboardComponents";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addInterviews, moveCandidateToInterview, getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, updateViewStatus, updateCommentStatus } from "../../../redux/actions/question_actions";
import { updateInviteStatus, updateCandidateViewedStatus, updateApplicantBasicInfo } from "../../../redux/actions/job_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../../redux/actions/video_actions";
import { subreviewerUpdateComment } from "../../../redux/actions/auth_actions";
// import { MyFullModal } from "../DashboardComponents";
import ReviewCandidate from "../applications/ReviewCandidate";
import Select from 'react-select';
// import EditQuestion from "./../jobBoard/EditQuestion";
import ReactPaginate from 'react-paginate';
import NewCandidateAdditionForm from "./interviewComponents/NewCandidateAdditionForm";
import {
    Box, Button, Container, HStack, Icon, Input, InputGroup, InputLeftElement, Stack, Text, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue
} from '@chakra-ui/react';
import { FiSearch, FiPlus } from 'react-icons/fi';

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
        showDetails: false,
        detailIndex: 0,
    }

    onFilter = (category) => {
        this.setState({ category: category });
        let page = this.state.selectedPage + 1;
        let stage = this.state.stage.value;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, stage, category.value, "", this.state.keyWords); this.setState({ selectedPage: 0 }); }, 300);
    }

    filterStage = (stage) => {
        this.setState({ stage: stage });
        let page = this.state.selectedPage + 1;
        let status = this.state.category.value;
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, page, stage.value, status, "", this.state.keyWords); this.setState({ selectedPage: 0 }); }, 300);
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

    static getDerivedStateFromProps(props, state) {
        if (props.filterReset > 0) {
            return {
                stage: { value: '', label: 'All' },
                category: { value: '', label: 'All' },
                keyWords: "",
            };
        }
    }

    onChange = (e) => {
        this.setState({ keyWords: e.target.value });
        if (e.key === 'Enter') {
            this.props.getAllJobs(this.props.user.id, 1, this.state.stage.value, this.state.category.value, "", e.target.value);
        }
    };

    onSearch = () => {
        this.props.getAllJobs(this.props.user.id, 1, this.state.stage.value, this.state.category.value, "", this.state.keyWords);
    }

    setTempQuestion = (questions) => {
        this.setState({ tempQuestion: questions });
    }

    hideQForm = () => {
        let page = this.state.selectedPage + 1;
        setTimeout(() => {
            this.props.getAllJobs(this.props.user.id, page, "", "", "", this.state.keyWords);
            this.props.getPostedJobs(this.props.user.id, page, "", "", "", "", "", this.props.curJob.job_details.id);
        }, 300);
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
                setTimeout(() => {
                    this.props.getAllJobs(this.props.user.id, page, "", "", "", this.state.keyWords);
                    this.props.getPostedJobs(this.props.user.id, page, "", "", "", "", "", this.props.curJob.job_details.id)
                }, 300);
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
        this.props.getAllJobs(this.props.user.id, page, this.state.stage.value, this.state.category.value, "", this.state.keyWords);
        window.scrollTo(0, 0);
    };

    addNewCandidates = () => {
        if ((this.props.curJob.applicant) >= (this.props.profile.candidate_limit)) {
            this.candidateLimitAlert();
        } else {
            this.setState({ isAddNewCandidate: true });
            //Segment info
            window?.analytics?.track("View - Add Candidates", {
                eventTime: Date()?.toLocaleString()
            });
        }
    }

    hideAdditionForm = () => {
        this.setState({ isAddNewCandidate: false });
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
                {!this.state.isAddNewCandidate ?
                    <span>
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
                                            <Stack
                                                direction={{
                                                    base: 'column',
                                                    md: 'row',
                                                }}
                                                justify="space-between"
                                            >
                                                <InputGroup maxW="xs" onKeyUp={this.onSearch}>
                                                    <InputLeftElement pointerEvents="none">
                                                        <Icon as={FiSearch} color="muted" boxSize="5" />
                                                    </InputLeftElement>
                                                    <Input placeholder="Search candidate" value={this.state.keyWords} onChange={this.onChange} onKeyPress={this.onChange} />
                                                </InputGroup>
                                                <Box>
                                                    {(!this.props.profile.is_subreviwer && (this.props.curJob.job_details.gh_current_stage_id == "" || this.props.curJob.job_details.gh_current_stage_id == null)) &&
                                                        <div>
                                                            {!this.props.isClosed &&
                                                                <Button _hover={{ bg: "orange.500" }} colorScheme='blue' leftIcon={<FiPlus />} onClick={this.addNewCandidates}>Candidates</Button>
                                                            }
                                                        </div>
                                                    }
                                                </Box>
                                            </Stack>
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
                                                        <Th pl="10"><Text color="muted">Name</Text></Th>
                                                        <Th><Text color="muted">Applied On</Text></Th>
                                                        <Th>
                                                            <HStack>
                                                                <Text color="muted">Current Stage</Text>
                                                                <Select isSearchable={false} value={this.state.stage} onChange={this.filterStage} options={this.stageOptions} className="select-category" styles={customStyles} />
                                                            </HStack>
                                                        </Th>
                                                        <Th>
                                                            <HStack>
                                                                <Text color="muted">Status</Text>
                                                                <Select isSearchable={false} value={this.state.category} onChange={this.onFilter} options={this.options} className="select-category" styles={customStyles} />
                                                            </HStack>
                                                        </Th>
                                                        <Th><Text color="muted">Source</Text></Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    {this.props.curJob.applicants.map((a, index) => {
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
                                                                selectedCurrentStage={this.state.stage.value}
                                                                selectedStatus={this.state.category.value}
                                                                updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                                                                employerProfileDetail={this.props.employerProfileDetail}
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
                                    selectedCurrentStage={this.state.stage.value}
                                    selectedStatus={this.state.category.value}
                                    updateApplicantBasicInfo={this.props.updateApplicantBasicInfo}
                                    employerProfileDetail={this.props.employerProfileDetail}
                                    showDetails={this.state.showDetails}
                                    setshowDetailsTrue={this.setshowDetailsTrue}
                                    setshowDetailsFalse={this.setshowDetailsFalse}
                                    setdetailIndex={this.setdetailIndex}
                                />
                            </Container>
                        }
                    </span> :
                    <NewCandidateAdditionForm
                        hideAdditionForm={this.hideAdditionForm}
                        getAllJobs={this.props.getAllJobs}
                        getPostedJobs={this.props.getPostedJobs}
                        jobId={this.props.curJob.job_details.id}
                        user={this.props.user}
                        keyWords={this.state.keyWords}
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
    // useEffect(() => {
    //     props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
    // }, []);
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
        // setShowPreview(true);
        props.setdetailIndex(current);
        props.setshowDetailsTrue();
    }

    function hideModal() {
        let page = props.selectedPage + 1;
        setTimeout(() => { props.getAllJobs(props.user.id, page, props.selectedCurrentStage, props.selectedStatus, "", props.keyWords); }, 300);
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
        props.setdetailIndex(curIndex + 1);
    };

    function viewPrevResult(curIndex) {
        //sessionStorage.removeItem("showPreview" + curIndex);
        let prev = curIndex - 1;
        getReviewPageData(prev);
        setCurrent(curIndex - 1);
        props.setdetailIndex(curIndex - 1);
    };

    const refresh = () => {
        let page = props.selectedPage + 1;
        setTimeout(() => {
            props.getAllJobs(props.user.id, page, "", "", "", props.keyWords);
            props.getPostedJobs(props.user.id, page, "", "", "", "", "", this.props.curJob.job_details.id)
        }, 300);
        props.updateViewStatus({ "candidate_id": applicants[current].id });
        props.getApplicantsVideos(applicants[current].email, props.curJob.job_details.positions_id);
        props.getApplicantsInfo(applicants[current].email);
        props.getReviewNote(props.curJob.job_details.positions_id, applicants[current].email);
        props.getReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email);
        props.getCurrentReviewerEvaluation(props.curJob.job_details.positions_id, applicants[current].email, props.user.email);
    }

    return (
        <React.Fragment>
            {!props.showDetails ?
                <Tr>
                    <Td className="interview-txt9" style={{ cursor: "pointer", color: "#006dff" }}>
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
                    </Td>
                    <Td className="interview-txt9">
                        {props.applicant.apply_date.substring(0, 10)}
                    </Td>
                    <Td className="interview-txt9">
                        <span>
                            {props.applicant.current_stage !== "" &&
                                <Button style={{ color: "#ffffff", backgroundColor: `${backgroundColor}`, padding: "5px", width: "8rem", textAlign: "center", cursor: "auto" }} size="sm">{props.applicant.current_stage}</Button>
                            }
                        </span>
                    </Td>
                    <Td className="interview-txt9">
                        <span>
                            {(props.applicant.is_active) &&
                                <Button size="sm" style={{ color: "#ffffff", backgroundColor: "#0DC68E", padding: "5px", width: "5rem", textAlign: "center", cursor: "auto" }}>Active</Button>
                            }
                            {(!props.applicant.is_active) &&
                                <Button size="sm" style={{ color: "#ffffff", backgroundColor: "#FF0000", padding: "5px", width: "5rem", textAlign: "center", cursor: "auto" }}>Rejected</Button>
                            }
                        </span>
                    </Td>
                    <Td className="interview-txt9">
                        <span>
                            {props.applicant.apply_source === 'JobTarget' ? props.applicant.apply_referer : props.applicant.apply_source}
                        </span>
                    </Td>
                </Tr> :
                <span>
                    <ReviewCandidate
                        keyWords={props.keyWords}
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
    getReviewNote, addOrUpdateReviewerEvaluation, getReviewerEvaluation, getCurrentReviewerEvaluation, getApplicantsVideos,
    updateViewStatus, getApplicantsInfo, updateCommentStatus, subreviewerUpdateComment, updateApplicantBasicInfo
})(
    AllCandidates
));