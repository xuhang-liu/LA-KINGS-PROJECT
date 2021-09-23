import React, { useState } from "react";
import {Applicant} from "./Applicant";

export const ApplicantList = (props) => {
    return (
        <div>
            {props.applicants.sort((a, b) => new Date(b.invite_date) - new Date(a.invite_date)).map((a, index) => {
                // filter applicants by status
                if (props.category.value != "All") {
                    switch (props.category.value) {
                        case "Uninvited":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (a.is_invited || a.is_recorded) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Pending":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (a.is_recorded || !a.is_invited) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Withdrawn":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (!a.is_recorded || (a.is_recorded && a.video_count > 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Completed":
                            if (props.category2.value != "All") {
                                switch (props.category2.value) {
                                    case "Unreviewed":
                                        if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Shortlist":
                                        if (a.comment_status != 1) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Hold":
                                        if (a.comment_status != 2) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                    case "Reject":
                                        if (a.comment_status != 3) return null;
                                        if (props.keyWords != "") {
                                            var canEmail = a.email.split("@")[0];
                                            var canName = a.name;
                                            if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                                        };
                                        break;
                                }
                            }
                            if (!a.is_recorded || (a.is_recorded && a.video_count <= 0)) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                    }
                }
                else if (props.keyWords != "") {
                    var canEmail = a.email.split("@")[0];
                    var canName = a.name;
                    if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                }
                else if (props.category2.value != "All") {
                    switch (props.category2.value) {
                        case "Unreviewed":
                            if (a.comment_status != 0 || a.is_viewed || a.video_count == 0) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Shortlist":
                            if (a.comment_status != 1) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Hold":
                            if (a.comment_status != 2) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                        case "Reject":
                            if (a.comment_status != 3) return null;
                            if (props.keyWords != "") {
                                var canEmail = a.email.split("@")[0];
                                var canName = a.name;
                                if ((!canEmail.toLowerCase().includes(props.keyWords.toLowerCase())) && (!canName.toLowerCase().includes(props.keyWords.toLowerCase()))) return null;
                            };
                            break;
                    }
                }
                {/*else if(props.profile.is_subreviwer && !a.is_recorded){
                    return null;
                }*/}
                return (
                    <Applicant
                        filter={props.filter}
                        index={index}
                        applicants={props.applicants}
                        getPJobs={props.getPJobs}
                        profile={props.profile}
                        recordTime={props.recordTime}
                        interviewResume={props.interviewResume}
                        getResumeURL={props.getResumeURL}
                        resumeURL={props.resumeURL}
                        isClosed={props.isClosed}
                        name={a.name}
                        date={a.invite_date.substring(0, 10)}
                        email={a.email}
                        comment_status={a.comment_status}
                        positionId={a.positions_id}
                        isRecorded={a.is_recorded}
                        videoCount={a.video_count}
                        candidateId={a.id}
                        isViewed={a.is_viewed}
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
                        currentStage={props.currentStage}
                        getPostedJobs={props.getPostedJobs}
                        getAllJobs={props.getAllJobs}
                    />
                )
            })}
        </div>
    );
}