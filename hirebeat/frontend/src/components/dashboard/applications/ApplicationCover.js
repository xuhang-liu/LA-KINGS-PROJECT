import React, { useState } from "react";
import JobApplication from "./JobApplication";

const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const ApplicationCover = (props) => {
  const [filter, setFilter] = useState("active");
  const [selectedId, setselectedId] = useState(0);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div style={{marginBottom: "5%"}} className="container min-width-980" >
      <div style={{marginBottom: "30px"}}><h3><b><i className="bx-fw bx bx-microphone"></i><span className="ml-2">Interview</span></b></h3></div>
      <div style={{marginBottom: "20px"}} className="container min-width-980">
        <button
          className={decideClassName(filter, "active")}
          onClick={() => (setFilter("active"), setselectedId(0))}
        >
          Active
        </button>
        <button
          className={decideClassName(filter, "closed")}
          style={{marginLeft: "2rem"}}
          onClick={() => (setFilter("closed"), setselectedId(0))}
        >
          Archived
        </button>
        {/*!props.profile.is_subreviwer &&
        <button className="default-btn" onClick={props.renderPosition}
          style={{color:"white", marginLeft:"5%"}}>
            <i className="bx bx-plus"></i> 
              Create New Interview
            <span></span>
        </button>*/}
      </div>
      <JobApplication
        getPJobs={props.getPJobs}
        selectedId={selectedId}
        setselectedId={setselectedId}
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
        id_candidate={props.id_candidate}
        username_candidate={props.username_candidate}
        email_candidate={props.email_candidate}
        phone_candidate={props.phone_candidate}
        location_candidate={props.location_candidate}
        resendInvitation={props.resendInvitation}
        updateCommentStatus={props.updateCommentStatus}
        user={props.user}
        profile={props.profile}
        updateViewStatus={props.updateViewStatus}
        subreviewerUpdateComment={props.subreviewerUpdateComment}
        checkUserExistence={props.checkUserExistence}
        user_existence={props.user_existence}
      />
    </div>
  );
};
