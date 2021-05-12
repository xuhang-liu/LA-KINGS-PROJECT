import React, {useState} from 'react';
import {IconText} from "../DashboardComponents";
import { MyModal80 } from "./../DashboardComponents";
import { ResumeEvaJobs } from "./ResumeEvaJobs";
import EmbedQuestionForm from "./../jobBoard/EmbedQuestionForm"

const ReviewCandidate = (props) => {
    const [noshowInvite, setNoshowInvite] = useState(false);
    const [showEva, setShowEva] = useState(false);
    const [showEmbedQForm, setShowEmbedQForm] = useState(false);

    function inviteCandidates() {
        if (props.curJob.questions.length == 0 && props.tempQuestion.length == 0) {
            setShowEmbedQForm(true);
        }
        else {
            let candidateCount = 1;
            let companyName = props.curJob.job_details.company_name;
            let jobTitle = props.curJob.job_details.job_title;
            let positionId = props.curJob.job_details.positions_id;
            // collect input name and email
            const emails = [];
            const names = [];
            const invitedCandidates = [];
            emails.push(props.email);
            names.push(props.first_name+" "+props.last_name);
            invitedCandidates.push(props.candidateId);
            props.setStatus(true);
            setNoshowInvite(true);
            let urls = [];
            for (let i = 0; i < emails.length; i++) {
                // make sure urls have the same size of emails and names
                let url = "";
                if (emails[i] != "" && names[i] != "") {
                    //let prefix = "http://127.0.0.1:8000/candidate-login?" // local test
                    let prefix = "https://hirebeat.co/candidate-login?";  // online
                    let params = "email=" + emails[i] + "&" + "positionId=" + positionId;
                    let encode = window.btoa(params);
                    url = prefix + encode;
                }
                urls.push(url);
            }
            let meta = {
                company_name: companyName,
                job_title: jobTitle,
                position_id: positionId,
                emails: emails,
                names: names,
                expire: 14,
                urls: urls,
            }
            if(candidateCount > (props.profile.candidate_limit)){
                alert('Upgrade Now! You can only add ' +parseInt(props.profile.candidate_limit)+ ' more candidates for this position!');
            }else{
                // save data to db
                props.addInterviews(meta);
                let data = {
                    "candidates": invitedCandidates,
                    "isInvited": true,
                }
                props.updateInviteStatus(data);
                // update
                setTimeout(() => {props.getAllJobs(props.user.id); props.getPJobs()}, 300);
                alert("Send Invitation Success!");
            }
        }
    };

    function showResumeEva() {
        if(props.profile.membership == "Premium"){
            setShowEva(true);
        }else{
            alert("Upgrade to unlock Resume Evaluation.");
        }
    }

    const renderResume = (resumes) => {
        return(
            <div>
                <div className="row">
                        <div className="ml-3" />
                        {(resumes>=75 && resumes <=100) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="img" />}
                        {(resumes>=51 && resumes <=75) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="img" />}
                        {(resumes>=25 && resumes <=50) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="img" />}
                        {(resumes>=0 && resumes <=25) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="img" />}            
                </div>
            </div>
        )
    }

    return(
        <div className="fluid-container ml-5 mb-5" style={{width:'92%'}}>
            <div style={{marginBottom: "30px"}}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs / Review Candidate</span></b></h3></div>
            <div className="col d-flex align-items-center pl-0">
                <button
                    type="button"
                    className="panel-button"
                    onClick={props.onHide}
                    style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                >
                    <div className="center-items">
                        <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                        <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back To List</p>
                    </div>
                </button>
            </div>
            <div className="row" style={{display:"flex"}}>
                <div className="col-3 pl-3 mt-3 pr-2">
                    <div className="resume-box p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"35%"}}>
                        <div className="row mb-3" style={{marginBottom:"2%"}}>
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
                                        {(props.first_name+" "+props.last_name).length > 12 ? (props.first_name+" "+props.last_name).substring(0,10) + "..." : (props.first_name+" "+props.last_name)}
                                    </h2>
                                    </div>
                                </div>
                                <div className="row mb-2" style={{marginTop:"1%"}}>
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
                                <div className="row mb-2" style={{marginTop:"1%"}}>
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
                                <div className="row" style={{marginTop:"1%"}}>
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
                    </div>
                    <div className="resume-box mt-4 p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"61.6%", position:"relative"}}>
                        <h2
                            style={{
                            fontWeight: "600",
                            marginRight: "0.8rem",
                            wordWrap: "break-word",
                            wordBreak: "break-all",
                            color: "#090D3A",
                            }}
                        >
                            Evaluation Scale
                        </h2>
                        <div className="mt-5 px-4" style={{width:"75%"}}>
                            {renderResume(props.applicant.result_rate)}
                        </div>
                        {((props.applicant.result_rate != "") && (props.applicant.result_rate != null)) &&
                            <button
                                onClick={() => {setTimeout(()=>{showResumeEva()}, 200)}}
                                className="interview-txt9 mt-3 ml-3"
                                style={{color: "#67A3F3", border: "none", background: "white"}}
                            >
                                <i className="bx bx-arrow-to-right interview-txt9" style={{color: "#67A3F3"}}></i> Resume Evaluation
                            </button>}
                        {(!props.is_invited && !noshowInvite) &&
                        <div className="row" style={{display:"flex", justifyContent:"space-around", position:"absolute", bottom:"2rem", left:"0.9rem", width:"100%"}}>
                            <button onClick={inviteCandidates} className="default-btn1" style={{paddingLeft:"25px"}}>
                                Invite to Interview
                            </button>
                        </div>}
                    </div>
                </div>
                <div className="col-9" className="resume-box mt-3 ml-3 p-4" style={{background:"white", borderRadius:"10px", height:"44rem", width:"73%"}}>
                    <h2
                        style={{
                        fontWeight: "600",
                        marginRight: "0.8rem",
                        wordWrap: "break-word",
                        wordBreak: "break-all",
                        color: "#090D3A",
                        }}
                    >
                        Resume
                    </h2>
                    <div className="light-blue-border" style={{width:"100%", height:"90%"}}>
                        {props.resume_url != null && props.resume_url != "" &&
                            <object data={props.resume_url}
                                    style={{width:"100%", height:"100%"}}/>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-9" style={{marginTop: "1.5rem"}}>
                    <div style={{textAlign: "center"}}>
                        <button
                            className={props.current == 0 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == 0 ? true : false}
                            onClick={() => {props.setCurrent(props.current-1)}}
                        >
                            &lt; Prev
                        </button>
                        <button
                            className={props.current == props.applicants.length - 1 ? "disable-btn" : "enable-btn"}
                            disabled={props.current == props.applicants.length - 1 ? true : false}
                            onClick={() => {props.setCurrent(props.current+1)}}
                            style={{marginLeft: "2rem"}}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
            <MyModal80
                show={showEva}
                onHide={()=>{setShowEva(false)}}
            >
                <ResumeEvaJobs interviewResume={props.applicant}/>
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
                    setNoshowInvite={setNoshowInvite}
                    is_invited={props.is_invited}
                    hideEmbedQForm={() => setShowEmbedQForm(false)}
                />
            </MyModal80>
        </div>
    )

};

export default ReviewCandidate;