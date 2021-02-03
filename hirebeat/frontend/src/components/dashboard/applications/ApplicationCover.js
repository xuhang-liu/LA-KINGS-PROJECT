import React, { useState } from "react";
import JobApplication from "./JobApplication";

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const ApplicationCover = (props) => {
  const [filter, setFilter] = useState("active");
  return (
    <div>
      <div style={{marginBottom: "20px"}} className="container d-flex justify-content-start pl-0">
        <button
          className={decideClassName(filter, "active")}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={decideClassName(filter, "closed")}
          style={{marginLeft: "2rem"}}
          onClick={() => setFilter("closed")}
        >
          Closed
        </button>
      </div>
      <JobApplication
        filter={filter}
        companyName={props.companyName}
        loaded={props.loaded}
        postedJobs={props.postedJobs}
        addInterviews={props.addInterviews}
        getReceivedInterview={props.getReceivedInterview}
        getApplicantsVideos={props.getApplicantsVideos}
        getApplicantsInfo={props.getApplicantsInfo}
        getRecordStatus={props.getRecordStatus}
        renderVideos={props.renderVideos}
        dataLoaded={props.dataLoaded}
        isRecorded={props.isRecorded}
        int_ques={props.int_ques}
        setInt_ques={props.setInt_ques}
        username_candidate={props.username_candidate}
        email_candidate={props.email_candidate}
        phone_candidate={props.phone_candidate}
        location_candidate={props.location_candidate}
        resendInvitation={props.resendInvitation}
        updateCommentStatus={props.updateCommentStatus}
      />
    </div>
  );
};
