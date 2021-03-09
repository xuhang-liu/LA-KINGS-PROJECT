import React, { useEffect, useState } from 'react';
//import SecondReview from './SecondReview';
import { MyModal80 } from './DashboardComponents';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ReviewApplication from './ReviewApplication';
import { ResumeEva } from "./applications/ResumeEva";
import { connect } from 'react-redux';
import { loadStarList } from './../../redux/actions/question_actions';
import { getResumeURL } from "../../redux/actions/question_actions";

const ShortList = (props) => {
    const [jobId, setJobId] = useState(Object.keys(props.postedJobs)[0]);


    const selectPosition = key => {
        setJobId(key);
    }

    useEffect(() => {
        props.loadStarList(jobId);
    }, [jobId]);

    function refreshPage() {
        props.loadStarList(jobId);
    }
    
    return <div>
            <div>
            <div className="row">
                <h3 className="pt-2 mr-5 col-9">{props.postedJobs[jobId].job_title} {props.postedJobs[jobId].job_id}</h3>
                <DropdownButton id="dropdown-menu-align-left" size="lg" title="Select Position" >
                        {Object.keys(props.postedJobs).map((key) => {
                            return <Dropdown.Item as="button" onClick={() => {selectPosition(key)}}>{props.postedJobs[key].job_title} {props.postedJobs[key].job_id}</Dropdown.Item>
                        })}
                </DropdownButton>
            </div>
            <AcceptedCandidate
                getPJobs={props.getPJobs}
                refreshPage={refreshPage} 
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                theJob={props.postedJobs[jobId]}
                getApplicantsVideos={props.getApplicantsVideos}
                getApplicantsInfo={props.getApplicantsInfo}
                int_ques={props.int_ques}
                stars={props.star_list}
                resumeURL={props.resumeURL}
                recordTime={props.recordTime}
                interviewResume={props.interviewResume}
                getResumeURL={props.getResumeURL}
                updateCommentStatus={props.updateCommentStatus}
                profile={props.profile}
            />
            </div>
        </div>
}

const mapStateToProps = (state) => ({
    star_list: state.question_reducer.star_list,
    resumeURL: state.video_reducer.resumeURL,
    recordTime: state.video_reducer.recordTime,
    interviewResume: state.video_reducer.interviewResume,
  });
  

export default connect(mapStateToProps , { loadStarList, getResumeURL })(ShortList); 

const AcceptedCandidate = (props) => {
    return <div>
              <div style={{marginBottom: "20px"}} className="container min-width-980 mt-3">
                {props.theJob.applicants.map((applicant) => {
                    if(applicant.comment_status == 1)
                    {   return <div> 
                                {console.log(props.stars, "and applicant", applicant)}

                                <CandidateCard
                                    getPJobs={props.getPJobs}
                                    refreshPage={props.refreshPage}
                                    stars={props.stars[applicant.email]}
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
                            />
                        </div>
                    }
                })}
            </div>
        </div>
}

const CandidateCard = (props) => {

    console.log(props.applicant);
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

    const renderStars = (stars) => {
            return(
                <div>
                    <div className="row">
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                            <div className="ml-2" />
                            {stars >= 2 ?
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                            : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                            }        
                            <div className="ml-2" />         
                            {stars >= 3 ?
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                            : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                            }        
                            <div className="ml-2" />         
                            {stars >= 4 ?
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                            : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                            }    
                            <div className="ml-2" />             
                            {stars == 5 ?
                            <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                            : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                            }     
                            <div className="ml-2" />            
                    </div>
                </div>
            )
    }

    const mailTo = "mailto:" + props.applicant.email;
    return (       
    <React.Fragment>
        <div onClick={()=>{viewResult();}} className="ml-0 d-flex justify-content-start container" style={{marginTop:"3rem", backgroundColor: "white", "border-radius": "0.5rem"}}>
            <div className="col-12" style={{fontFamily: "Avenir Next, Segoe UI" }}>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-9" style={{color:"#090D3A"}}>
                            <div className="row ml-2">
                                <button className="title-button">
                                    {props.applicant.name}
                                </button>
                                <div className="ml-5 mt-2">
                                    { renderStars(props.stars) }
                                </div>
                            </div>
                            <div className="row mb-2 mt-1">
                                <div className="col-6">
                                    <p style={{color:"#4A6F8A"}}>Video Recorded: {props.applicant.video_count}</p>
                                </div>
                                <div className="col-6 mb-4" style={{color:"#4A6F8A", borderLeft:"outset"}}>
                                    <p>Created On: {props.applicant.invite_date.substring(0, 10)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 center-items">
                        <a
                                href={mailTo}
                                className="interview-txt9"
                                style={{color: "#67A3F3", border: "none", background: "white", display:"inline-block"}}
                            >
                                <i className="bx bx-mail-send"></i> Send Email
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MyVerticallyCenteredModal
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
        />
      </MyModal80>
    );
  };