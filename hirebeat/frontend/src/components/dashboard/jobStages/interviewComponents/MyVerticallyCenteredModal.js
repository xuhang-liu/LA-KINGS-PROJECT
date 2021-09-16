import React from "react";
import { MyFullModal1 } from "./../../DashboardComponents";
import ReviewApplication from "./ReviewApplication";

export function MyVerticallyCenteredModal(props) {
    const { ...rest } = props;
    return (
        <div style={{ background: "#E8EDFC" }}>
            <MyFullModal1 className="light-blue-modal" {...rest}>
                <ReviewApplication
                    refresh={props.refresh}
                    getPJobs={props.getPJobs}
                    recordTime={props.recordTime}
                    interviewResume={props.interviewResume}
                    setShowResume={props.setShowResume}
                    setShowEva={props.setShowEva}
                    commentStatus={props.commentStatus}
                    set_comment_status={props.set_comment_status}
                    hide={props.onHide}
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
                    current={props.current}
                    setCurrent={props.setCurrent}
                    start={props.start}
                    end={props.end}
                    viewPrevResult={props.viewPrevResult}
                    viewNextResult={props.viewNextResult}
                    applicants={props.applicants}
                    hasSwitch={true}
                    filter={props.filter}
                />
            </MyFullModal1>
        </div>
    );
};