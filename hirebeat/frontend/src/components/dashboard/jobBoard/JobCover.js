import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import JobPortalPage from "./JobPortalPage";
import {tourConfigEmployer} from "../DashboardComponents";
import Tour from 'reactour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const decideClassName = (filter, text) => {
  return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const JobCover = (props) => {
  const [filter, setFilter] = useState((sessionStorage.getItem("filter") == "closed") ? "closed" : "active");
  const [curJob, setCurJob] = useState([]);
  const [jobKey, setJobKey] = useState(0);
  const [view, setView] = useState((sessionStorage.getItem("view") == "true") ? true : false);
  const [viewPortal, setViewPortal] = useState((sessionStorage.getItem("viewPortal") == "true") ? true : false);
  const [keyWords, setKeyWords] = useState("");
  const [isOpenTour, setOpenTour] = useState(false);

  const onChange = (e) => {
    setKeyWords(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  // tour functions
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);

  const closeTour = () => {
    setOpenTour(false)
    this.enableBody();
  };

  const openTour = () => {
    setOpenTour(true)
  }

  return (
    <div>
      <Tour
        onRequestClose={closeTour}
        steps={tourConfigEmployer}
        isOpen={isOpenTour}
        className="helper"
        rounded={6}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
        showNumber={false}
        disableDotsNavigation={true}
        showNavigation={false}
        showNavigationNumber={false}
        nextButton={<i className="tour-next-btn" style={{color: "#006dff", border: "1px solid #006dff",backgroundColor: "transparent"}}>Next</i>}
        prevButton={<i className="tour-next-btn" style={{display: "none"}}></i>}
        lastStepNextButton={<i className="tour-next-btn" style={{color: "#fff", background: "#006dff"}}>Congrats! You're ready now!</i>}
      />

      {((!viewPortal) || (props.job_back_home)) ?
        <div style={{ marginBottom: "5%" }} className="container-fluid min-width-980">
          <div style={{ paddingBottom: "1rem" }}><h3><b><i className="bx-fw bx bx-briefcase"></i><span className="ml-2">Jobs</span></b>{props.profile.viewed_employer_tutorial && (parseInt((new Date(props.profile.datejoined).getDate() + 30) - (new Date().getDate())) >= 0)  && <i className="bx bxs-error-circle" style={{ paddingLeft: "5px", color: "red", fontSize: "15px", fontFamily: "Inter", cursor: "pointer"}} onClick={openTour}>Get Started!</i>}</h3>
            <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem", display: "inline-block", float:"left", marginTop:"0.5rem" }}>
              <div style={{ position: "absolute", left: "1.3rem", marginTop: "0.2rem" }}><i className="bx bx-search bx-sm"></i></div>
              <div>
                <input placeholder="Search" className="search-candidate-input" style={{ height: "auto", border:"2px solid #006dff" }} value={keyWords} onChange={onChange}></input>
              </div>
            </div>
            <button className="default-btn" onClick={props.renderJobCreation} data-tut="reactour-createjob"
              style={{ color: "white", float: "right", marginBottom: "2rem" }}>
              <i className="bx bx-plus"></i>
              Create New Position
              <span></span>
            </button>
          </div>
          {/* <div style={{ paddingBottom: "2rem", paddingTop:"-2rem" }}>
        <button
          className={decideClassName(filter, "active")}
          onClick={() => { setView(false); setFilter("active"); sessionStorage.setItem("filter", "active"); sessionStorage.removeItem("view"); sessionStorage.removeItem("jobKey")}}
        >
          Active
        </button>
        <button
          className={decideClassName(filter, "closed")}
          style={{ marginLeft: "2rem" }}
          onClick={() => { setView(false); setFilter("closed"); sessionStorage.setItem("filter", "closed"); sessionStorage.removeItem("view"); sessionStorage.removeItem("jobKey")}}
        >
          Archived
        </button>
        <button className="default-btn" onClick={props.renderJobCreation}
          style={{ color: "white", float: "right", marginBottom: "2rem" }}>
          <i className="bx bx-plus"></i>
          Create New Position
          <span></span>
        </button>
      </div> */}
          <JobList
            jobs={props.jobs}
            user={props.user}
            profile={props.profile}
            filter={filter}
            curJob={curJob}
            setCurJob={setCurJob}
            renderJobEdition={props.renderJobEdition}
            setJobInfo={props.setJobInfo}
            isLoaded={props.isLoaded}
            getAllJobs={props.getAllJobs}
            getPJobs={props.getPJobs}
            jobKey={parseInt(sessionStorage.getItem("jobKey")) || jobKey}
            setJobKey={setJobKey}
            view={view}
            setView={setView}
            setViewPortal={setViewPortal}
            employerProfileDetail={props.employerProfileDetail}
            setJob_back_home={props.setJob_back_home}
            keyWords={keyWords}
          />
        </div> :
        <JobPortalPage
          setViewPortal={setViewPortal}
          job={props.jobs[parseInt(sessionStorage.getItem("jobKey")) || jobKey]}
          user={props.user}
          profile={props.profile}
          filter={filter}
          getAllJobs={props.getAllJobs}
          getPJobs={props.getPJobs}
          postedJobs={props.postedJobs}
          companyName={props.profile.company_name}
          loaded={props.loaded}
          addInterviews={props.addInterviews}
          getReceivedInterview={props.getReceivedInterview}
          getApplicantsVideos={props.getApplicantsVideos}
          getApplicantsInfo={props.getApplicantsInfo}
          getRecordStatus={props.getRecordStatus}
          dataLoaded={props.dataLoaded}
          isRecorded={props.isRecorded}
          int_ques={props.int_ques}
          id_candidate={props.id_candidate}
          username_candidate={props.username_candidate}
          email_candidate={props.email_candidate}
          phone_candidate={props.phone_candidate}
          location_candidate={props.location_candidate}
          resendInvitation={props.resendInvitation}
          updateCommentStatus={props.updateCommentStatus}
          renderPosition={props.renderPosition}
          updateViewStatus={props.updateViewStatus}
          subreviewerUpdateComment={props.subreviewerUpdateComment}
          checkUserExistence={props.checkUserExistence}
          user_existence={props.user_existence}
          getPostedJobs={props.getPostedJobs}
          employerProfileDetail={props.employerProfileDetail}
        />
      }
    </div>
  );
};
