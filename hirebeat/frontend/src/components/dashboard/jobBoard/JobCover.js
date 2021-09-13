import React, { useState } from "react";
import JobList from "./JobList";
import JobPortalPage from "./JobPortalPage";

const decideClassName = (filter, text) => {
  return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const JobCover = (props) => {
  const [filter, setFilter] = useState((sessionStorage.getItem("filter") == "closed") ? "closed":"active");
  const [curJob, setCurJob] = useState([]);
  const [jobKey, setJobKey] = useState(0);
  const [view, setView] = useState((sessionStorage.getItem("view") == "true") ? true : false);
  const [viewPortal, setViewPortal] = useState((sessionStorage.getItem("viewPortal") == "true") ? true : false);
  return (
    <div>
    {!viewPortal ?
    <div style={{ marginBottom: "5%" }} className="container-fluid min-width-980">
      <div style={{ marginBottom: "30px" }}><h3><b><i className="bx-fw bx bx-briefcase"></i><span className="ml-2">Jobs</span></b></h3></div>
      <div style={{ marginBottom: "20px" }}>
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
      </div>
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
      />
    </div>:
    <JobPortalPage
      setViewPortal={setViewPortal}
      job={props.jobs[parseInt(sessionStorage.getItem("jobKey")) || jobKey]}
      user={props.user}
      profile={props.profile}
      filter={filter}
      getAllJobs={props.getAllJobs}
      getPJobs={props.getPJobs}
    />
    }
    </div>
  );
};
