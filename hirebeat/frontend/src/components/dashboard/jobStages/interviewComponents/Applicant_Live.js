import React, { useState } from "react";
import { MyModal80 } from "../../DashboardComponents";
import { ResumeEva } from "./ResumeEva";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";
import { confirmAlert } from 'react-confirm-alert';
import Select from 'react-select';
import axios from "axios";
import {
    HStack, Stack, Text, Td, Tr, useColorModeValue
} from '@chakra-ui/react';

export const Applicant_Live = (props) => {
    const [current, setCurrent] = useState(props.index);
    const [show, setShow] = useState(props.showCandidateModal);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);
    const [category1, setCategory1] = useState({ value: null, label: null });
    //const [next, setNext] = useState(null);
    //const [prev, setPrev] = useState(null);
    let applicants = props.applicants;
    let email = applicants[current].email;
    let positionId = props.positionId;
    let companyName = props.companyName;
    let jobTitle = props.jobTitle;
    let name = props.name;
    let candidateId = applicants[current].id;
    let isInvited = applicants[current].is_invited;
    const [isViewed, setIsViewed] = useState(props.isViewed);
    const commentStatus = applicants[current].comment_status;
    const start = 0;
    const end = applicants.length - 1;

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
        { value: props.livcat1, label: props.livcat1 },
        { value: props.livcat2, label: props.livcat2 },
        { value: props.livcat3, label: props.livcat3 },
        { value: props.livcat4, label: props.livcat4 },
        { value: props.livcat5, label: props.livcat5 },
    ];

    function onFilter1(category1) {
        if (props.livcat != category1) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let data = {
                "candidate_id": applicants[props.index].id,
                "category": category1.value
            };
            axios.post("questions/update-live-interview-candidate-status", data, config).then((res) => {
                console.log(res.data);
            }).catch(error => {
                console.log(error)
            });
            setCategory1(category1);
            alert2();
        }
    }

    function viewResult() {
        if (!isViewed) {
            props.updateViewStatus({ "candidate_id": applicants[props.index].id });
            setIsViewed(true);
        }
        // get videos and info
        props.getApplicantsVideos(applicants[props.index].email, positionId);
        props.getApplicantsInfo(applicants[props.index].email);
        props.getResumeURL(positionId, applicants[props.index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[props.index].email);
        props.getReviewerEvaluation(positionId, applicants[props.index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[props.index].email, props.user.email, props.currentStage);

        props.setShowDetails(true);
        props.setDetailIndex(current);
    };

    function getReviewPageData(index) {
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, positionId);
        props.getApplicantsInfo(applicants[index].email);
        props.getResumeURL(positionId, applicants[index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[index].email);
        props.getReviewerEvaluation(positionId, applicants[index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[index].email, props.user.email, props.currentStage);
        setCurrent(index);
    }

    function getReviewPageData1(index) {
        props.updateViewStatus({ "candidate_id": applicants[index].id });
        props.getApplicantsVideos(applicants[index].email, positionId);
        props.getApplicantsInfo(applicants[index].email);
        props.getResumeURL(positionId, applicants[index]?.apply_candidate_id);
        props.getReviewNote(positionId, applicants[index].email);
        props.getReviewerEvaluation(positionId, applicants[index].email);
        props.getCurrentReviewerEvaluation(positionId, applicants[index].email, props.user.email, props.currentStage);
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
        props.getResumeURL(positionId, applicants[props.index]?.apply_candidate_id);
        props.getApplicantsVideos(email, positionId);
        props.getApplicantsInfo(email);
    }

    function inviteAgain() {
        // encode url
        let url = "";
        //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
        let prefix = "https://app.hirebeat.co/candidate-login?";  // online
        let params = "email=" + email + "&" + "positionId=" + positionId;
        let encode = window.btoa(params);
        url = prefix + encode;

        let meta = {
            company_name: companyName,
            job_title: jobTitle,
            email: email,
            name: name,
            url: url,
            expire: 7,
            candidate_id: candidateId,
        };

        props.resendInvitation(meta);
        alert1();
    }

    function hideModal() {
        setCurrent(props.index);
        setTimeout(() => {
            props.getAllJobs(props.user.id, 1, props.currentStage);
            props.getPostedJobs(props.user.id, (props.selectedPage + 1), props.currentStage, "", "", props.category4.value, "", props.jobsId, props.keyWords)
        }, 300);
        setShow(false);
    }

    return (
        <React.Fragment>
            {!props.showDetails ?
                <Tr>
                    <Td className="interview-txt9" style={{ cursor: "pointer", color: "#006dff" }}>
                        <HStack spacing='3'>
                            <Stack>
                                {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                                    <input className="selected-candidate" value={JSON.stringify(applicants[current])} type="checkbox" onClick={props.CheckListCheckbox} />
                                }
                            </Stack>
                            <Stack>
                                <button className="title-button2" style={{ wordBreak: "break-all" }} onClick={(() => viewResult())}>
                                    {(!isViewed && commentStatus == 0) ? <span class="dot"></span> : <span class="dot" style={{ background: "none" }}></span>}
                                    {props.name.split("(")[0].length > 30 ? props.name.split("(")[0].substring(0, 28) + "..." : props.name.split("(")[0]}
                                </button>
                            </Stack>
                        </HStack>
                    </Td>
                    {(props.reviewerStageLength > 0) &&
                        <Td className="interview-txt9">
                            {applicants[current]?.reviewer_review_status ?
                                <Text style={{ fontWeight: "600" }}>Reviewed</Text> :
                                <Text color='muted' style={{ fontWeight: "600" }}>Pending</Text>
                            }
                        </Td>}
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            {applicants[current]?.num_votes > 0 &&
                                <Text color='muted' style={{ fontWeight: "600" }}>{applicants[current]?.num_vote_yes + "/" + applicants[current]?.num_votes}</Text>
                            }
                        </Td>
                    }
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            <Select value={category1.value != null ? category1 : { value: props.livcat, label: props.livcat }} onChange={onFilter1} options={options1} className="select-category2" styles={customStyles} isSearchable={false} />
                        </Td>}
                </Tr> :
                <span>
                    {/* Interview Result */}
                    <MyVerticallyCenteredModal
                        refresh={refresh}
                        getPJobs={props.getPJobs}
                        recordTime={props.recordTime}
                        interviewResume={props.interviewResume}
                        commentStatus={commentStatus}
                        show={show}
                        setShowResume={setShowResume}
                        setShowEva={setShowEva}
                        onHide={hideModal}
                        int_ques={props.int_ques}
                        id_candidate={props.id_candidate}
                        username_candidate={props.username_candidate}
                        email_candidate={props.email_candidate}
                        phone_candidate={props.phone_candidate}
                        location_candidate={props.location_candidate}
                        positionId={props.positionId}
                        updateCommentStatus={props.updateCommentStatus}
                        profile={props.profile}
                        subreviewerUpdateComment={props.subreviewerUpdateComment}
                        current={current}
                        setCurrent={setCurrent}
                        start={start}
                        end={end}
                        viewPrevResult={viewPrevResult}
                        viewNextResult={viewNextResult}
                        getNextResult={getNextResult}
                        applicants={applicants}
                        filter={props.filter}
                        currentStage={props.currentStage}
                        getPostedJobs={props.getPostedJobs}
                        keyWords={props.keyWords}
                        getAllJobs={props.getAllJobs}
                        reviewer_type={props.reviewer_type}
                        gh_current_stage_id={props.gh_current_stage_id}
                        jobsId={props.jobsId}
                        selectedPage={props.selectedPage}
                        employerProfileDetail={props.employerProfileDetail}
                        category3={props.category3}
                        category4={props.category4}
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
                <ResumeEva
                    interviewResume={(props.interviewResume.result_rate != "-1") ? props.interviewResume : applicants[current]} />
            </MyModal80>
        </React.Fragment>
    )
};

function alert1() {
    confirmAlert({
        title: "Invitation Sent",
        message: "You resend the interview invitation successfully",
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