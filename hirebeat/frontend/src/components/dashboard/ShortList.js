import React, { useEffect, useState } from 'react';
//import SecondReview from './SecondReview';
import { MyModal80 } from './DashboardComponents';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
import ReviewApplication from './ReviewApplication';
import { ResumeEva } from "./applications/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList, getResumeURL, addExReviewer, delExReviewer } from './../../redux/actions/question_actions';
import { withRouter } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';

const ShortList = (props) => {
    const [curJobId, setCurJobId] = useState(Object.keys(props.postedJobs)[0]);
    const [selectedId, setSelectedId] = useState(-1);

    useEffect(() => {
        props.loadStarList(curJobId);
    }, [curJobId]);

    function refreshPage() {
        props.loadStarList(curJobId);
    }
    
    return(
        <div>
            <div className="container min-width-980">
                <div style={{marginBottom: "30px"}}>
                    <h3><b><i className="bx bx-list-ul"></i><span className="ml-2">Shortlist</span></b></h3>
                </div>
                {selectedId == -1 ?
                    <div>
                        {Object.keys(props.postedJobs).reverse().map((key) => {
                            let p = props.postedJobs[key];
                            if (!p.is_closed) {
                                return(
                                    <ShortListCard
                                        jobId={p.job_id}
                                        jobTitle={p.job_title}
                                        inviteDate={p.invite_date}
                                        applicants={p.applicants}
                                        exReviewers={p.ex_reviewers}
                                        profile={props.profile}
                                        refreshPage={refreshPage}
                                        positionId={p.position_id}
                                        setSelectedId={setSelectedId}
                                        addExReviewer={props.addExReviewer}
                                        delExReviewer={props.delExReviewer}
                                        getPJobs={props.getPJobs}
                                        user={props.user}
                                        invitedBy={p.company_name}
                                        companyName={props.companyName}
                                    />
                                )
                            }
                        })}
                    </div> :
                    <div>
                        <div className="d-flex align-items-center">
                            <button
                                type="button"
                                className="panel-button"
                                onClick={() => {setSelectedId(-1)}}
                                style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                            >
                            <div className="center-items">
                                <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                                <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back To List</p>
                            </div>
                            </button>
                        </div>
                        <AcceptedCandidate
                            getPJobs={props.getPJobs}
                            refreshPage={refreshPage}
                            id_candidate={props.id_candidate}
                            username_candidate={props.username_candidate}
                            email_candidate={props.email_candidate}
                            phone_candidate={props.phone_candidate}
                            location_candidate={props.location_candidate}
                            theJob={props.postedJobs[selectedId]}
                            getApplicantsVideos={props.getApplicantsVideos}
                            getApplicantsInfo={props.getApplicantsInfo}
                            int_ques={props.int_ques}
                            stars={props.star_list}
                            resume_list={props.resume_list}
                            resumeURL={props.resumeURL}
                            recordTime={props.recordTime}
                            interviewResume={props.interviewResume}
                            getResumeURL={props.getResumeURL}
                            updateCommentStatus={props.updateCommentStatus}
                            profile={props.profile}
                            subreviewerUpdateComment={props.subreviewerUpdateComment}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    star_list: state.question_reducer.star_list,
    resume_list: state.question_reducer.resume_list,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
  });
  

export default withRouter(connect(mapStateToProps , { loadStarList, getResumeURL, addExReviewer, delExReviewer })(ShortList));

function getQualifiedApplicants(applicants) {
    let len = applicants.length;
    let qualifiedApplicants = [];
    for (let i = 0; i < len; i++) {
        if (applicants[i].comment_status == 1) {
            qualifiedApplicants.push(applicants[i]);
        }
    }
    return qualifiedApplicants;
}

const ShortListCard = (props) => {
    const qualifiedApplicants = getQualifiedApplicants(props.applicants);

    function inviteExReviewer() {
        if((props.profile.membership == "Premium") && (props.profile.plan_interval == "Premium")){
            let ex_reviewer_name = "";
            let ex_reviewer_email = "";
            let encoded_email = "";
            function submitExReviewer(e) {
                ex_reviewer_name = document.getElementById("ex_reviewer_name").value;
                ex_reviewer_email = document.getElementById("ex_reviewer_email").value;
                encoded_email = window.btoa("email=" + ex_reviewer_email);
                let data = {
                    "ex_reviewer_name": ex_reviewer_name,
                    "ex_reviewer_email": ex_reviewer_email,
                    "encoded_email": encoded_email,
                    "company_name": props.companyName,
                    "position_id": props.positionId,
                    "master_email": props.user.email,
                };
                props.addExReviewer(data);
                props.getPJobs();
                e.preventDefault();
                sendSuccessAlert();
            }

            confirmAlert({
                customUI: ({ onClose }) => {
                  return (
                    <div className="interview-txt7" style={{backgroundColor:'#ffffff', borderRadius:"10px", border:"2px solid #E8EDFC", padding:"1rem", paddingLeft:"3rem", paddingRight:"3rem"}}>
                        <form onSubmit={submitExReviewer}>
                            <div className="form-row">
                                <h3 className="subreviewer-h3">Invite External Reviewer</h3>
                            </div>
                            <div className="form-row">
                                <p className="subreviewer-p">
                                    You can invite people outside your organization to join <br/>
                                    the recruiting process as an external reviewer. <br/>
                                    An external reviewer can only see the shortlisted <br/>
                                    candidates for the job position you shared, including <br/>
                                    their video interview and resume.
                                </p>
                            </div>
                            <div className="form-row" style={{marginTop: "1rem"}}>
                                <div className="form-group col-5">
                                    <label style={{ fontSize: "17px", margin:"0.5rem"}}>
                                        Enter Name
                                    </label>
                                    <input type="text" id="ex_reviewer_name" className="form-control" required="required" placeHolder="John"/>
                                </div>
                                <div className="form-group col-7">
                                    <label style={{ fontSize: "17px", margin:"0.5rem"}}>
                                        Enter Email
                                    </label>
                                    <input type="email" id="ex_reviewer_email" className="form-control" required="required" placeHolder="john@example.com"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-9">
                                    <h5>Support up to 3 reviewers</h5>
                                </div>
                            </div>
                            <div className="form-row justify-items">
                                <div className="form-group col-3" style={{marginRight: "3rem"}}>
                                    <button
                                        type="button"
                                        className="default-btn1"
                                        style={{paddingLeft:"25px", backgroundColor: "red"}}
                                        onClick={() => onClose()}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="form-group col-3">
                                    <button
                                        type="submit"
                                        className="default-btn1"
                                        style={{paddingLeft:"25px"}}
                                    >
                                        Invite
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                  );
                }
            });
        }
        else {
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'You need Premium Plan to unlock Team Collaboration.',
                buttons: [
                    {label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing"},
                    {label: 'OK'},
                ]
            });
        }
    }

    function deleteExReviewer(ex_reviewer_id) {
        let data = {ex_reviewer_id: ex_reviewer_id};
        confirmAlert({
            title: "Confirm to remove",
            message: "Do you want to remove this reviewer?",
            buttons: [
                {
                  label: 'Yes',
                  onClick: () => {props.delExReviewer(data); deleteSuccessAlert(); props.getPJobs();}
                },
                {
                  label: 'No'
                }
            ]
        });
    }

    return (
        <React.Fragment>
            <div className="container d-flex justify-content-start " style={{marginTop:"3rem", backgroundColor: "white", "border-radius": "0.5rem"}}>
                <div className="col-12" style={{fontFamily: "Avenir Next, Segoe UI" }}>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-7" style={{color:"#090D3A"}}>
                                <div className="row">
                                    <button className="title-button ml-2" style={{float: "left"}} onClick={() => {props.setSelectedId(props.positionId)}}>
                                        {props.jobTitle} {props.jobId == "" ? null : "(ID: " + props.jobId + ")"}
                                    </button>
                                </div>
                                <div className="row mb-2 mt-1">
                                    <div className="col-4">
                                        <p style={{color:"#4A6F8A"}}>Qualified Applicants: {qualifiedApplicants.length}</p>
                                    </div>
                                    {props.profile.is_external_reviewer ?
                                    <div className="col-8 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                                        <p>Invited By: {props.invitedBy.substring(0, 10)}</p>
                                    </div> :
                                    <div className="col-8 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                                        <p>Created On: {props.inviteDate.substring(0, 10)}</p>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-2 mt-4" style={{marginRight:"-2rem"}}>
                            {props.exReviewers?.map((sub, i) => {
                                return (
                                    <span onClick={() => {deleteExReviewer(sub.id)}} className={`sub_number${i}`} style={{color:"white"}}>{sub.r_name.substring(0,2).toUpperCase()}
                                    <p className="sub_submenu" style={{minWidth:"6rem"}}>{sub.r_name.split(" ")[0]}</p>
                                    </span>
                                )
                            })}
                            </div>
                            <div className="col-3">
                                {(!props.profile.is_subreviwer && !props.profile.is_external_reviewer) &&
                                <div>
                                    {qualifiedApplicants.length > 0 &&
                                    <div>
                                    {(props.exReviewers?.length < Number(props.profile.external_reviewer_count)) &&
                                    <button
                                        className="default-btn1 interview-txt6 mt-4"
                                        onClick={inviteExReviewer}
                                        style={{paddingLeft: "25px"}}
                                    >
                                        + Invite External Reviewer
                                        <span></span>
                                    </button>}
                                    </div>}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

const AcceptedCandidate = (props) => {
    return(
        <div>
            <div style={{marginBottom: "0.6rem", backgroundColor: "white", borderRadius: "0.5rem"}} className="container min-width-980 mt-4 py-4">
                <div style={{color:"#4A6F8A", fontSize:"1rem", fontWeight:"500", fontFamily: "Avenir Next, Segoe UI" }} className="ml-0 d-flex justify-content-start container-fluid row">
                    <div className="col-1">Name</div>
                    <div className="col-3">Email</div>
                    <div className="col-2">Recorded On</div>
                    <div className="col-3">Video Average Score</div>
                    <div className="col-2">Resume Score</div>
                    {(!props.profile.is_external_reviewer) && <div className="col-1">Contact</div>}
                </div>
                {props.theJob.applicants.map((applicant, index) => {
                    if(applicant.comment_status == 1) {
                        return(
                            <div>
                                <CandidateCard
                                    getPJobs={props.getPJobs}
                                    refreshPage={props.refreshPage}
                                    stars={props.stars[applicant.email]}
                                    resume_list={props.resume_list[applicant.email]}
                                    applicant={applicant}
                                    getApplicantsVideos={props.getApplicantsVideos}
                                    getApplicantsInfo={props.getApplicantsInfo}
                                    int_ques={props.int_ques}
                                    id_candidate={props.id_candidate}
                                    username_candidate={props.username_candidate}
                                    email_candidate={props.email_candidate}
                                    phone_candidate={props.phone_candidate}
                                    location_candidate={props.location_candidate}
                                    resumeURL={props.resumeURL}
                                    recordTime={props.recordTime}
                                    interviewResume={props.interviewResume}
                                    getResumeURL={props.getResumeURL}
                                    updateCommentStatus={props.updateCommentStatus}
                                    profile={props.profile}
                                    subreviewerUpdateComment={props.subreviewerUpdateComment}
                                    applicants={props.theJob.applicants}
                                    current={index}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

const CandidateCard = (props) => {
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const [showEva, setShowEva] = useState(false);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.id_candidate);
        setTimeout(()=>{setShow(true);}, 300)
    };

    const refresh = () =>
    {
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        props.getResumeURL(props.applicant.positions_id, props.id_candidate);
    }

    const renderStars = (stars) => {
            return(
                <div>
                    <div className="row">
                            <div className="ml-3" />
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />
                            <div className="ml-2" />
                            {stars >= 2 &&
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}        
                            <div className="ml-2" />         
                            {stars >= 3 &&
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}        
                            <div className="ml-2" />         
                            {stars >= 4 &&
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}    
                            <div className="ml-2" />             
                            {stars == 5 &&
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-star-blue.png" alt="Blue" />}     
                            <div className="ml-2" />            
                    </div>
                </div>
            )
    }

    const renderResume = (resumes) => {
        return(
            <div>
                <div className="row">
                        <div className="ml-3" />
                        {(resumes>=75 && resumes <=100) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_1.png" alt="img" />}
                        {(resumes>=51 && resumes <=75) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_2.png" alt="img" />}
                        {(resumes>=25 && resumes <=50) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_3.png" alt="img" />}
                        {(resumes>=0 && resumes <=25) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/resume_result_4.png" alt="img" />}            
                </div>
            </div>
        )
}

    const mailTo = "mailto:" + props.applicant.email;
    return (       
    <React.Fragment>
        <div className="px-4">
            <hr/>
        </div>
        <div style={{fontFamily: "Avenir Next, Segoe UI", fontWeight:"600" }} className="ml-0 d-flex justify-content-start container-fluid row h-100">
                <div className="col-1 short-list-text" onClick={()=>{viewResult();}}> 
                    {props.applicant.name.length>6?props.applicant.name.substring(0,4)+"...":props.applicant.name}
                </div>

                <div className="col-3 short-list-text" onClick={()=>{viewResult();}}> 
                    {props.applicant.email.length>24? props.applicant.email.substring(0,22)+"...":props.applicant.email}
                </div>

                <div className="col-2" style={{color:"#7D7D7D", fontSize:"1rem"}}> 
                    {props.applicant.invite_date.substring(0, 10)}
                </div>

                <div className="col-3"> 
                        { renderStars(props.stars) }
                </div>
                <div className="col-2"> 
                        { renderResume(props.resume_list) }
                </div>
                {!props.profile.is_external_reviewer &&
                    <div className="col-1">
                        <a
                                href={mailTo}
                                className="interview-txt9"
                                style={{color: "#67A3F3", border: "none", background: "white", display:"inline-block", fontSize:"0.8rem"}}
                            >
                                <i className="bx bx-mail-send"></i> Email
                        </a>
                    </div>
                }
        </div>
        <MyVerticallyCenteredModal
            refresh={refresh}
            getPJobs={props.getPJobs}
            applicant={props.applicant}
            id_candidate={props.id_candidate}
            username_candidate={props.username_candidate}
            email_candidate={props.email_candidate}
            phone_candidate={props.phone_candidate}
            location_candidate={props.location_candidate}
            int_ques={props.int_ques}
            secondround_status={props.applicant.secondround_status}
            show={show}
            setShowResume={setShowResume}
            setShowEva={setShowEva}
            onHide={()=>{setShow(false); props.refreshPage();}}
            int_ques={props.int_ques}
            positionId={props.applicant.positions_id}
            resumeURL={props.resumeURL}
            recordTime={props.recordTime}
            interviewResume={props.interviewResume}
            updateCommentStatus={props.updateCommentStatus}
            profile={props.profile}
            subreviewerUpdateComment={props.subreviewerUpdateComment}
            applicants={props.applicants}
            current={props.current}
        /> 
        <MyModal80
                show={showResume}
                onHide={()=>{setShowResume(false); setShow(true);}}
            >
                <div class="iframe-container">
                    <iframe className="responsive-iframe" src={props.resumeURL}/>
                </div>
            </MyModal80>
            <MyModal80
                show={showEva}
                onHide={()=>{setShowEva(false); setShow(true);}}
            >
                <ResumeEva interviewResume={props.interviewResume}/>
            </MyModal80>
    </React.Fragment>     
)}


function MyVerticallyCenteredModal(props) {
    const { ...rest } = props;
    return (
      <MyModal80 {...rest}>
        <ReviewApplication
          {...rest}
          refresh={props.refresh}
          getPJobs={props.getPJobs}
          setShowResume={props.setShowResume}
          setShowEva={props.setShowEva}
          hide={props.onHide}
          int_ques={props.int_ques}
          id_candidate={props.id_candidate}
          username_candidate={props.username_candidate}
          email_candidate={props.email_candidate}
          phone_candidate={props.phone_candidate}
          location_candidate={props.location_candidate}
          positionId={props.positionId}
          updateCommentStatus={props.updateCommentStatus}
          comment_status={props.applicant.comment_status}
          resumeURL={props.resumeURL}
          recordTime={props.recordTime}
          interviewResume={props.interviewResume}
          profile={props.profile}
          subreviewerUpdateComment={props.subreviewerUpdateComment}
          applicants={props.applicants}
          current={props.current}
          hasSwitch={false}
        />
      </MyModal80>
    );
  };

  function sendSuccessAlert() {
    confirmAlert({
      title: "Send Invitation Success",
      message: "You have sent the invitation successfully.",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};

function deleteSuccessAlert() {
    confirmAlert({
      title: "Remove Success",
      message: "You have removed reviewer successfully.",
      buttons: [
        {
          label: 'Ok'
        }
      ]
    });
};