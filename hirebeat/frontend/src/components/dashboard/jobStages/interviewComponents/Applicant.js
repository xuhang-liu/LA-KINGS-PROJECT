import React, { useState, useEffect } from "react";
import { MyModal80 } from "./../../DashboardComponents";
import { ResumeEva } from "./ResumeEva";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";
import { confirmAlert } from 'react-confirm-alert';
// import axios from "axios";
import {
    Button, HStack, Stack, Text, Td, Tr
} from '@chakra-ui/react';

export const Applicant = (props) => {
    const [current, setCurrent] = useState(props.index);
    const [show, setShow] = useState(props.showCandidateModal);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);
    const [emailStatus, setEmailStatus] = useState("");
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

    useEffect(() => {
        setIsViewed(props.isViewed)
    }, [props.isViewed]);

    useEffect(() => {
        setEmailStatus(applicants[current]?.emailStatus)
    }, []);

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
        if (props.questions.length <= 0) {
            props.setShowNoQuestionAlert(true);
        }
        else {
            //Segment info
            window?.analytics?.track("Recruitment - Video Interview Invitation Sent", {
                eventTime: Date().toLocaleString(),
                jobTitle: props.jobTitle,
                employerID: props.user.id
            });
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
            setTimeout(() => {
                props.getAllJobs(props.user.id, 1, props.currentStage);
                props.getPostedJobs(props.user.id, 1, props.currentStage, "", "", "", "", props.jobsId, props.keyWords)
            }, 300);
            alert1();
        }
    }

    function hideModal() {
        setCurrent(props.index);
        setTimeout(() => {
            props.getAllJobs(props.user.id, 1, props.currentStage);
            props.getPostedJobs(props.user.id, (props.selectedPage + 1), props.currentStage, props.category.value, props.category3.value, "", "", props.jobsId, props.keyWords)
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
                                    {props.name.split("(")[0].length > 20 ? props.name.split("(")[0].substring(0, 18) + "..." : props.name.split("(")[0]}
                                </button>
                            </Stack>
                        </HStack>
                    </Td>
                    <Td className="interview-txt9">
                        {(isInvited || props.isRecorded) && <span>{props.date ? props.date : ""}</span>}
                    </Td>
                    <Td className="interview-txt9">
                        {(isInvited || props.isRecorded) ?
                            (props.isRecorded ?
                                (props.videoCount > 0 ?
                                    <Text color='muted'><strong>Video Submitted</strong></Text> :
                                    <Text>N/A</Text>) :
                                (emailStatus == "" ?
                                    <Text>Invitation Sent</Text> :
                                    <Text>Invitation Sent ({emailStatus})</Text>)
                            ) :
                            <Text>Not Invited</Text>
                        }
                    </Td>
                    {(props.reviewerStageLength > 0) &&
                        <Td className="interview-txt9">
                            {applicants[current]?.reviewer_review_status ?
                                <Text style={{ fontWeight: "600" }}>Reviewed</Text> :
                                <Text color='muted' style={{ fontWeight: "600" }}>Pending</Text>
                            }
                        </Td>}
                    {!props.profile.is_subreviwer && !props.profile.is_external_reviewer &&
                        <Td className="interview-txt9">
                            {(isInvited && props.filter == "active") ?
                                (props.isRecorded && props.videoCount > 0 ?
                                    null
                                    :
                                    <Button
                                        onClick={() => inviteAgain()}
                                        size='sm'
                                        colorScheme='blue'
                                        _hover={{ bg: "orange.500" }}
                                    >
                                        Resend
                                    </Button>)
                                :
                                <Button
                                    onClick={() => inviteAgain()}
                                    size='sm'
                                    colorScheme='blue'
                                    _hover={{ bg: "orange.500" }}
                                >
                                    Invite
                                </Button>
                            }
                        </Td>
                    }
                    {(props.reviewerStageLength == 0) &&
                        <Td className="interview-txt9">
                            {applicants[current]?.num_votes > 0 &&
                                <Text color='muted' style={{ fontWeight: "600" }}>{applicants[current]?.num_vote_yes + "/" + applicants[current]?.num_votes}</Text>
                            }
                        </Td>
                    }
                </Tr> :
                <span>
                    {/* Interview Result */}
                    < MyVerticallyCenteredModal
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
                        category={props.category}
                        category3={props.category3}
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
        message: "You send the interview invitation successfully",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
};