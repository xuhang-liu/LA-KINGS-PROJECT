import React, { useState } from "react";
import JobList from "./JobList";
const decideClassName = (filter, text) => {
    return filter == text ? "btn-selected2" : "btn-unselected2";
};

export const JobCover = (props) => {
  const [filter, setFilter] = useState("active");
  const [curJob, setCurJob] = useState([]);
  const [view, setView] = useState(false);
  const [jobKey, setJobKey] = useState(0);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div style={{marginBottom: "5%"}} className="container min-width-980" >
      <div style={{marginBottom: "30px"}}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs</span></b></h3></div>
      <div style={{marginBottom: "20px"}} className="container min-width-980">
        <button
          className={decideClassName(filter, "active")}
          onClick={() => {setView(false); setFilter("active")}}
        >
          Active
        </button>
        <button
          className={decideClassName(filter, "closed")}
          style={{marginLeft: "2rem"}}
          onClick={() => {setView(false); setFilter("closed")}}
        >
          Archived
        </button>
        <button className="default-btn" onClick={props.renderJobCreation}
          style={{color:"white", float:"right", marginBottom:"1rem"}}>
            <i className="bx bx-plus"></i>
              Create New Position
            <span></span>
        </button>
        {/*<button onClick={refreshPage} style={{border:"none", backgroundColor:"#e8edfc", float:"right", paddingTop:"1rem"}}><p style={{color:"#56a3fa"}}><box-icon name="refresh" color="#56a3fa" size="1.2rem"></box-icon>Refresh</p></button>*/}
      </div>
      <JobList
        jobs={props.jobs}
        user={props.user}
        filter={filter}
        curJob={curJob}
        setCurJob={setCurJob}
        renderJobEdition={props.renderJobEdition}
        setJobInfo={props.setJobInfo}
        isLoaded={props.isLoaded}
        getAllJobs={props.getAllJobs}
        getPJobs={props.getPJobs}
        view={view}
        setView={setView}
        jobKey={jobKey}
        setJobKey={setJobKey}
      />
    </div>
  );
};
