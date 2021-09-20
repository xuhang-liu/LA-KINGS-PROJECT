import React, { useState } from 'react';
import { IconText } from "../DashboardComponents";
import { MyModal80, MyModalUpgrade } from "./../DashboardComponents";
import { ResumeEvaJobs } from "./ResumeEvaJobs";
import EmbedQuestionForm from "./../jobBoard/EmbedQuestionForm"

const ReviewCandidate = (props) => {
    const [showEva, setShowEva] = useState(false);
    const [showEmbedQForm, setShowEmbedQForm] = useState(false);
    const [showMoveForm, setShowMoveForm] = useState(false);
    const [nextStage, setNextStage] = useState("");
    const [currentStage, setCurrentStage] = useState(props.applicant.current_stage);

    function openMoveForm() {
        setShowMoveForm(true);
    }

    function moveCandidates() {
        let candidateCount = 1;
        let positionId = props.curJob.job_details.positions_id;
        let jobId = props.curJob.job_details.id;
        const emails = [];
        const names = [];
        const invitedCandidates = [];
        emails.push(props.email);
        names.push(props.first_name + " " + props.last_name);
        invitedCandidates.push(props.candidateId);
        if (nextStage != "") {
            let data = {
                "positionId": props.curJob.job_details.positions_id,
                "candidates": invitedCandidates,
                "nextStage": nextStage,
                "is_reject": false,
            }
            let meta = {
                position_id: positionId,
                job_id: jobId,
                emails: emails,
                names: names,
                "candidates": invitedCandidates,
                "nextStage": nextStage,
            }
            if (props.applicant.current_stage == "Resume Review") {
                props.moveCandidateToInterview(meta);
            }
            props.updateInviteStatus(data);
            setShowMoveForm(false);
            // update
            let page = sessionStorage.getItem("jobAppPage") ? parseInt(sessionStorage.getItem("jobAppPage")) + 1 : props.selectedPage + 1;
            setTimeout(() => { props.getAllJobs(props.user.id, page); props.getPJobs() }, 300);
            alert("Move Stage Success!");
            props.onHide();
        } else {
            alert("Please select a stage to move.");
        }
    };

    function rejectCandidates() {
        const invitedCandidates = [];
        invitedCandidates.push(props.candidateId);
        let data = {
            "positionId": props.curJob.job_details.positions_id,
            "candidates": invitedCandidates,
            "nextStage": nextStage,
            "is_reject": true,
        }
        props.updateInviteStatus(data);
        // update
        setTimeout(() => { props.getAllJobs(props.user.id); props.getPJobs() }, 300);
        if (props.applicant.is_active){
            alert("Candidate Rejected!");
        } else {
            alert("Candidate Unrejected!");
        }
    };

    //    function inviteCandidates() {
    //        if (props.curJob.questions.length == 0 && props.tempQuestion.length == 0) {
    //            setShowEmbedQForm(true);
    //        }
    //        else {
    //            let candidateCount = 1;
    //            let companyName = props.curJob.job_details.company_name;
    //            let jobTitle = props.curJob.job_details.job_title;
    //            let positionId = props.curJob.job_details.positions_id;
    //            // collect input name and email
    //            const emails = [];
    //            const names = [];
    //            const invitedCandidates = [];
    //            emails.push(props.email);
    //            names.push(props.first_name+" "+props.last_name);
    //            invitedCandidates.push(props.candidateId);
    //            props.setStatus(true);
    //            let urls = [];
    //            for (let i = 0; i < emails.length; i++) {
    //                // make sure urls have the same size of emails and names
    //                let url = "";
    //                if (emails[i] != "" && names[i] != "") {
    //                    //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
    //                    let prefix = "https://hirebeat.co/candidate-login?";  // online
    //                    let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
    //                    let encode = window.btoa(params);
    //                    url = prefix + encode;
    //                }
    //                urls.push(url);
    //            }
    //            let meta = {
    //                company_name: companyName,
    //                job_title: jobTitle,
    //                position_id: positionId,
    //                emails: emails,
    //                names: names,
    //                expire: 14,
    //                urls: urls,
    //            }
    //            if(candidateCount > (props.profile.candidate_limit)){
    //                alert('Upgrade Now! You can only add ' +parseInt(props.profile.candidate_limit)+ ' more candidates for this position!');
    //            }else{
    //                // save data to db
    //                props.addInterviews(meta);
    //                let data = {
    //                    "candidates": invitedCandidates,
    //                    "isInvited": 1,
    //                }
    //                props.updateInviteStatus(data);
    //                // update
    //                setTimeout(() => {props.getAllJobs(props.user.id); props.getPJobs()}, 300);
    //                alert("Send Invitation Success!");
    //            }
    //        }
    //    };

    function nextOrPreUpdate() {
        props.getAllJobs(props.user.id);
        props.getPJobs();
        sessionStorage.removeItem("current");
    }

    function updateIsViewed(index) {
        let applyIds = [];
        applyIds.push(props.applicants[index].id);
        let data = {
            "applyIds": applyIds,
            "isViewed": true,
        }
        props.updateCandidateViewedStatus(data);
        setTimeout(() => { props.getAllJobs(props.user.id); props.getPJobs() }, 300);
    }

    function showResumeEva() {
        if (props.profile.membership == "Premium") {
            setShowEva(true);
        } else {
            alert("Upgrade to unlock Resume Evaluation.");
        }
    }

    const renderResume = (resumes) => {
        if (resumes == "-1") {
            return;
        }
        return (
            <div>
                <div className="row">
                    <div className="ml-3" />
                    {(resumes >= 76 && resumes <= 100) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="img" />}
                    {(resumes >= 51 && resumes <= 75) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="img" />}
                    {(resumes >= 26 && resumes <= 50) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="img" />}
                    {(resumes >= 0 && resumes <= 25) &&
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="img" />}
                </div>
            </div>
        )
    }

    function jobClosedAlert() {
        alert("Current job is closed, you can't make any change");
    }

    return (
        <div className="container-fluid ml-5 pb-5" style={{ width: '92%' }}>
            <div style={{ marginBottom: "30px" }}><h3><b><i className="bx-fw bx bx-briefcase"></i><span className="ml-2">Jobs / Review Candidate</span></b></h3></div>
            <div className="col d-flex align-items-center pl-0">
                <button
                    type="button"
                    className="panel-button"
                    onClick={props.onHide}
                    style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                >
                    <div className="center-items back-to-text">
                        <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back to List</p>
                    </div>
                </button>
            </div>
            <div className="row" style={{ display: "flex" }}>
                <div className="col-3 pl-3 mt-3 pr-2">
                    <div className="resume-box p-4" style={{ background: "white", borderRadius: "10px", width: "100%", height: "35%" }}>
                        <div className="row mb-3" style={{ marginBottom: "2%" }}>
                            <div className="col d-flex align-items-center">
                                <h2
                                    style={{
                                        fontWeight: "600",
                                        marginRight: "0.8rem",
                                        wordWrap: "break-word",
                                        wordBreak: "break-all",
                                        color: "#090D3A",
                                    }}
                                >
                                    {(props.first_name + " " + props.last_name).length > 12 ? (props.first_name + " " + props.last_name).substring(0, 10) + "..." : (props.first_name + " " + props.last_name)}
                                </h2>
                            </div>
                        </div>
                        <div className="row mb-2" style={{ marginTop: "1%" }}>
                            <div className="col d-flex align-items-center">
                                <IconText
                                    iconName={"bx bx-phone bx-sm"}
                                    textDisplayed={props.phone}
                                    textSize={"0.7rem"}
                                    textColor={"#4A6F8A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="row mb-2" style={{ marginTop: "1%" }}>
                            <div className="col d-flex align-items-center">
                                <IconText
                                    iconName={"bx bx-envelope bx-sm"}
                                    textDisplayed={props.email}
                                    textSize={"0.7rem"}
                                    textColor={"#4A6F8A"}
                                    iconMargin={"5px"}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "1%" }}>
                            <div className="col d-flex align-items-center">
                                <IconText
                                    iconName={"bx bx-location-plus bx-sm"}
                                    textDisplayed={props.location}
                                    textSize={"0.7rem"}
                                    textColor={"#4A6F8A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        {props.linkedin != null && props.linkedin != "" ?
                            <div style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                                <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#67A3F3", marginRight: "3px" }}></i>
                                <a style={{ fontSize: "0.7rem", color: "#67A3F3", fontWeight: "500" }} href={props.linkedin} target="_blank" rel="noreferrer">Go To LinkedIn Page</a>
                            </div> :
                            <div style={{ display: "flex", alignItems: "center", marginTop: "1%" }}>
                                <i class='bx bxl-linkedin-square bx-sm' style={{ color: "#979797", marginRight: "3px" }}></i>
                                <p style={{ fontSize: "0.7rem", color: "#979797", fontWeight: "500" }}>LinkedIn not available</p>
                            </div>
                        }
                    </div>
                    <div className="resume-box mt-4 p-4" style={{ background: "white", borderRadius: "10px", width: "100%", height: "61.6%", position: "relative" }}>
                        <h2
                            style={{
                                fontWeight: "600",
                                marginRight: "0.8rem",
                                wordWrap: "break-word",
                                wordBreak: "break-all",
                                color: "#090D3A",
                                fontSize: "1.5rem",
                            }}
                        >
                            Evaluation Scale
                        </h2>
                        <div className="mt-5 px-4" style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}>
                            {renderResume(props.applicant.result_rate)}
                        </div>
                        {(props.applicant.result_rate != "-1") &&
                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                <button
                                    onClick={() => { setTimeout(() => { showResumeEva() }, 200) }}
                                    className="interview-txt9 mt-3 ml-3"
                                    style={{ color: "#67A3F3", border: "none", background: "white" }}
                                >
                                    <i className="bx bx-arrow-to-right interview-txt9" style={{ color: "#67A3F3" }}></i> Resume Evaluation
                                </button>
                            </div>
                        }
                        <div style={{ paddingBottom: "2rem" }}>
                            <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}><p style={{ color: "#090d3a" }}>Current Stage: {props.applicant.current_stage}</p></div>
                            {props.applicant.is_active &&
                                <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                    <button onClick={props.filter == "active" ? openMoveForm : jobClosedAlert} className="default-btn1" style={{ paddingLeft: "25px", width: "13rem" }}>
                                        Move Stage
                                    </button>
                                </div>}
                            {props.applicant.is_active ?
                                <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                    <button
                                        onClick={props.filter == "active" ? rejectCandidates : jobClosedAlert}
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", width: "13rem", background: "#E8EDFC", color: "#090D3A" }}
                                    >
                                        <i class='bx-fw bx bxs-x-circle' style={{ color: "#090D3A" }}></i> Reject
                                    </button>
                                </div> :
                                <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                    <button
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", width: "13rem", background: "#FF0000", color: "#ffffff" }}
                                    >
                                        <i class='bx-fw bx bxs-x-circle' style={{ color: "#ffffff" }}></i> Rejected
                                    </button>
                                </div>
                            }
                            {!props.applicant.is_active &&
                                <div className="row" style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                                    <button
                                        onClick={props.filter == "active" ? rejectCandidates : jobClosedAlert}
                                        className="default-btn1"
                                        style={{ paddingLeft: "25px", width: "13rem", background: "#fff", color: "#090D3A", textDecoration:"underline" }}
                                    >
                                        Unreject
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="col-9" className="resume-box mt-3 ml-3 p-4" style={{ background: "white", borderRadius: "10px", height: "46rem", width: "73%" }}>
                    <h2
                        style={{
                            fontWeight: "600",
                            marginRight: "0.8rem",
                            wordWrap: "break-word",
                            wordBreak: "break-all",
                            color: "#090D3A",
                            borderBottom: '4px solid #4689FA',
                            paddingBottom: "0.2rem",
                            display: "inline-block",
                        }}
                    >
                        Resume
                    </h2>
                    <div className="light-blue-border" style={{ width: "100%", height: "90%" }}>
                        {props.resume_url != null && props.resume_url != "" &&
                            <object data={props.resume_url}
                                style={{ width: "100%", height: "100%" }} />
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-9" style={{ marginTop: "1.5rem" }}>
                    <div style={{ textAlign: "center" }}>
                        <button
                            className={props.current == 0 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == 0 ? true : false}
                            onClick={() => { nextOrPreUpdate(); updateIsViewed(props.current - 1); setTimeout(() => { props.setCurrent(props.current - 1); sessionStorage.setItem("current", props.current - 1) }, 200) }}
                        >
                            &lt; Prev
                        </button>
                        <button
                            className={props.current == props.applicants.length - 1 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == props.applicants.length - 1 ? true : false}
                            onClick={() => { nextOrPreUpdate(); updateIsViewed(props.current + 1); setTimeout(() => { props.setCurrent(props.current + 1); sessionStorage.setItem("current", props.current + 1) }, 200) }}
                            style={{ marginLeft: "2rem" }}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
            <MyModalUpgrade
                show={showMoveForm}
                onHide={() => { setShowMoveForm(false) }}
            >
                <div className="container chart-bg1" style={{ padding: "2rem" }}>
                    <h3 style={{ fontSize: "1.25rem", color: "#090d3a", fontWeight: "600", textAlign: "center" }}>Move to Another Stage</h3>
                    {currentStage == "Resume Review" ?
                        <div className="row d-flex justify-content-center mt-5">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Resume Review</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-5">
                            <button onClick={() => { setNextStage("Resume Review"); setCurrentStage("Resume Review") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Resume Review</button>
                        </div>
                    }
                    {currentStage == "Video Interview" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Video Interview</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Video Interview"); setCurrentStage("Video Interview") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Video Interview</button>
                        </div>
                    }
                    {currentStage == "Live Interview" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Live Interview</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Live Interview"); setCurrentStage("Live Interview") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Live Interview</button>
                        </div>
                    }
                    {currentStage == "Short List" ?
                        <div className="row d-flex justify-content-center mt-2">
                            <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Shortlist</button>
                        </div> :
                        <div className="row d-flex justify-content-center mt-2">
                            <button onClick={() => { setNextStage("Short List"); setCurrentStage("Short List") }} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Shortlist</button>
                        </div>
                    }
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-6 d-flex justify-content-end">
                            <button onClick={moveCandidates} className="default-btn" style={{ backgroundColor: "#090d3a", paddingLeft: "25px" }}>Confirm</button>
                        </div>
                        <div className="col-6 d-flex justify-content-start">
                            <button onClick={() => { setShowMoveForm(false) }} className="default-btn" style={{ backgroundColor: "#979797", paddingLeft: "25px" }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </MyModalUpgrade>
            <MyModal80
                show={showEva}
                onHide={() => { setShowEva(false) }}
            >
                <ResumeEvaJobs interviewResume={props.applicant} />
            </MyModal80>
            <MyModal80
                show={showEmbedQForm}
                onHide={() => setShowEmbedQForm(false)}
            >
                <EmbedQuestionForm
                    email={props.email}
                    first_name={props.first_name}
                    last_name={props.last_name}
                    curJob={props.curJob}
                    tempQuestion={props.tempQuestion}
                    setTempQuestion={props.setTempQuestion}
                    profile={props.profile}
                    addInterviews={props.addInterviews}
                    candidateId={props.candidateId}
                    updateInviteStatus={props.updateInviteStatus}
                    getAllJobs={props.getAllJobs}
                    getPJobs={props.getPJobs}
                    user={props.user}
                    setStatus={props.setStatus}
                    is_invited={props.is_invited}
                    hideEmbedQForm={() => setShowEmbedQForm(false)}
                />
            </MyModal80>
        </div>
    )

};

export default ReviewCandidate;