import React, { useState } from "react";
import JobCard from "./JobCard";
import ApplicantList from "./ApplicantList";
import Select from 'react-select';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const JobList = (props) => {

    const [job_closed, setjob_closed] = useState({ value: "All", label: 'All' });

    const customStyles = {
        control: styles => ({ ...styles, border: "none", marginTop: "-1rem", width: "10rem", paddingLeft: "1.3rem", background: useColorModeValue("#ffffff", "#1a202c") }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500',
            background: useColorModeValue("#ffffff", "#1a202c")
        }),
        menu: provided => ({ ...provided, color: useColorModeValue("#1a202c", "#ffffff"), background: useColorModeValue("#ffffff", "#1a202c") }),
        indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
    };

    const options = [
        { value: 'All', label: 'All' },
        { value: 0, label: 'Published' },
        { value: 1, label: 'Archived' },
        { value: 2, label: 'Closed' },
        { value: 3, label: 'Draft' },
    ];

    const onFilter = (job_closed) => {
        setjob_closed(job_closed);
    };

    // onChange = (e) => {
    //     this.setState({ keyWords: e.target.value });
    // };

    const setViewTrue = () => {
        props.setView(true);
    };

    const setViewFalse = () => {
        props.setView(false);
    };

    return (
        <React.Fragment>
            {props.isLoaded &&
                <div>
                    {(!props.view) ?
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '3',
                                md: '4',
                            }}
                            mt="10"
                        >
                            {/* <div className="interview-txt7 interview-center" style={{ color: "#006dff", fontSize: "1rem", display: "flex", paddingLeft:"1rem" }}>
                                    <div style={{ position: "absolute", left: "3.2rem", marginTop: "0.4rem" }}><i className="bx bx-search bx-sm"></i></div>
                                    <div>
                                        <input placeholder="Search jobs" className="search-candidate-input" style={{ height: "auto" }} value={this.state.keyWords} onChange={this.onChange}></input>
                                    </div>
                                </div> */}
                            <div className="container-fluid" style={{ marginTop: "1rem" }}>
                                <div className="row interview-txt7" style={{ color: "#7D7D7D", height: "2rem", marginTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                    <div className="col-2"><Select onChange={onFilter} options={options} styles={customStyles} className="select-category-jobs-closed" placeholder={"Status"} isSearchable={false} /></div>
                                    <div className="col-4 d-flex justify-content-start" style={{ paddingLeft: '2.2rem' }}>Job Title</div>
                                    <div className="col-2 d-flex justify-content-center">ID</div>
                                    <div className="col-2 d-flex justify-content-center">Applicants</div>
                                    <div className="col-2 d-flex justify-content-center">Created On</div>
                                </div>
                                {(Object.keys(props.jobs)?.length < 1) ?
                                    <div className="row" style={{ paddingTop: "5rem", margin: "auto", width: "30%" }}>
                                        <img style={{ cursor: "pointer" }} onClick={props.renderJobCreation} src="https://hirebeat-assets.s3.amazonaws.com/Employer/no-job-display-icon1.png" alt="icon" />
                                    </div> :
                                    <span>
                                        {Object.keys(props.jobs).sort((a, b) => parseInt(b) - parseInt(a)).map((key, index) => {
                                            let job = props.jobs[key];
                                            let curJobKey = key;
                                            if (props.keyWords != "") {
                                                let jobTitle = job["job_details"].job_title;
                                                if (!jobTitle.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                                            }
                                            if (job_closed["value"] != "All") {
                                                switch (job_closed["value"]) {
                                                    case 0:
                                                        if (job["job_details"].is_closed != 0) return null;
                                                        if (props.keyWords != "") {
                                                            let jobTitle = job["job_details"].job_title;
                                                            if (!jobTitle.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                                                        }
                                                        break;
                                                    case 1:
                                                        if (job["job_details"].is_closed != 1) return null;
                                                        if (props.keyWords != "") {
                                                            let jobTitle = job["job_details"].job_title;
                                                            if (!jobTitle.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                                                        }
                                                        break;
                                                    case 2:
                                                        if (job["job_details"].is_closed != 2) return null;
                                                        if (props.keyWords != "") {
                                                            let jobTitle = job["job_details"].job_title;
                                                            if (!jobTitle.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                                                        }
                                                        break;
                                                    case 3:
                                                        if (job["job_details"].is_closed != 3) return null;
                                                        if (props.keyWords != "") {
                                                            let jobTitle = job["job_details"].job_title;
                                                            if (!jobTitle.toLowerCase().includes(props.keyWords.toLowerCase())) return null;
                                                        }
                                                        break;
                                                    default:
                                                        return null;
                                                }
                                            }
                                            return (
                                                <JobCard
                                                    filter={props.filter}
                                                    job={job}
                                                    user={props.user}
                                                    profile={props.profile}
                                                    setStatus={props.setStatus}
                                                    enableView={setViewTrue}
                                                    disableView={setViewFalse}
                                                    setCurJob={props.setCurJob}
                                                    renderJobEdition={props.renderJobEdition}
                                                    setJobInfo={props.setJobInfo}
                                                    getPJobs={props.getPJobs}
                                                    curJobKey={curJobKey}
                                                    setJobKey={props.setJobKey}
                                                    setViewPortal={props.setViewPortal}
                                                    setJob_back_home={props.setJob_back_home}
                                                />
                                            );
                                        })
                                        }
                                    </span>}
                            </div>
                        </Box> :
                        <div>
                            <div>
                                <div className="align-items-center">
                                    <button
                                        type="button"
                                        className="panel-button"
                                        onClick={() => { sessionStorage.removeItem("view"); sessionStorage.removeItem("jobKey"); sessionStorage.removeItem("jobAppPage"); this.setViewFalse(); props.getAllJobs(props.user.id, 1) }}
                                        style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                                    >
                                        <div className="center-items back-to-text">
                                            <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to Jobs</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <ApplicantList
                                filter={props.filter}
                                curJob={props.jobs[props.jobKey]}
                                setCurJob={props.setCurJob}
                                getAllJobs={props.getAllJobs}
                                getPJobs={props.getPJobs}
                                employerProfileDetail={props.employerProfileDetail}
                            />
                        </div>}
                </div>}
        </React.Fragment>
    )
}

export default JobList;