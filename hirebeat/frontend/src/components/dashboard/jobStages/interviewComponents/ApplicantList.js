import React, { useState } from "react";
import { Applicant } from "./Applicant";

export const ApplicantList = (props) => {
    return (
        <div>
            {props.applicants.sort((a, b) => (b.invite_date===null)-(a.invite_date===null) || (new Date(b.invite_date) - new Date(a.invite_date))).map((a, index) => {
                if (props.keyWords != "") {
                    let name = a.name;
                    if (!name.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                }
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
                        date={a?.invite_date?.substring(0, 10)}
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
                        showCandidateModal={false}
                        reviewer_type={props.reviewer_type}
                        gh_current_stage_id={props.gh_current_stage_id}
                        jobsId={props.jobsId}
                        selectedPage={props.selectedPage}
                        employerProfileDetail={props.employerProfileDetail}
                        reviewerStageLength={props.reviewerStageLength}
                        setShowNoQuestionAlert={props.setShowNoQuestionAlert}
                        questions={props.questions}
                        category={props.category}
                        category2={props.category2}
                        category3={props.category3}
                    />
                )
            })}
        </div>
    );
}