import React, { useEffect, useState } from 'react';
import SecondReview from './SecondReview';
import { MyModal } from './DashboardComponents';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const ShortList = (props) => {
    const [jobId, setJobId] = useState(Object.keys(props.postedJobs)[0]);
    console.log("int_ques", props.int_ques);

    const selectPosition = key => {
        setJobId(key);
    }
    
    return <div>
            <div className="row">
                <h3 className="pt-2 mr-5 col-9">{props.postedJobs[jobId].job_title} {props.postedJobs[jobId].job_id}</h3>
                <DropdownButton id="dropdown-menu-align-left" size="lg" title="Select Position" >
                        {Object.keys(props.postedJobs).map((key) => {
                            return <Dropdown.Item as="button" onClick={() => {selectPosition(key)}}>{props.postedJobs[key].job_title} {props.postedJobs[key].job_id}</Dropdown.Item>
                        })}
                </DropdownButton>
            </div>
            <AcceptedCandidate 
                id_candidate={props.id_candidate}
                username_candidate={props.username_candidate}
                email_candidate={props.email_candidate}
                phone_candidate={props.phone_candidate}
                location_candidate={props.location_candidate}
                theJob={props.postedJobs[jobId]}
                getApplicantsVideos={props.getApplicantsVideos}
                getApplicantsInfo={props.getApplicantsInfo}
                int_ques={props.int_ques}
            />
        </div>
}

export default ShortList; 

const AcceptedCandidate = (props) => {

    const decideClassName = (filter, text) => {
        return filter == text ? "btn-selected2" : "btn-unselected2";
    };
    
    const [filter, setFilter] = useState("Waitlist");

    return <div>
              <div style={{marginBottom: "20px"}} className="container min-width-980 mt-3">
                <button
                className={decideClassName(filter, "Waitlist")}
                onClick={() => (setFilter("Waitlist"))}
                >
                Waitlist
                </button>
                <button
                className={decideClassName(filter, "Approved")}
                style={{marginLeft: "2rem"}}
                onClick={() => (setFilter("Approved"))}
                >
                Approved
                </button>
                <button
                className={decideClassName(filter, "Archived")}
                style={{marginLeft: "2rem"}}
                onClick={() => (setFilter("Archived"))}
                >
                Archived 
                </button>
                {props.theJob.applicants.map((applicant) => {
                    if(applicant.comment_status == 1 && (filter == "Waitlist" && applicant.secondround_status == 0 || filter == "Approved" && applicant.secondround_status == 1 || filter == "Archived" && applicant.secondround_status == 2))
                    {
                        return <div> 
                            <CandidateCard
                                applicant={applicant}
                                getApplicantsVideos={props.getApplicantsVideos}
                                getApplicantsInfo={props.getApplicantsInfo}
                                int_ques={props.int_ques}
                                id_candidate={props.id_candidate}
                                username_candidate={props.username_candidate}
                                email_candidate={props.email_candidate}
                                phone_candidate={props.phone_candidate}
                                location_candidate={props.location_candidate}
                            />
                        </div>
                    }
                })}
            </div>
        </div>
}

const CandidateCard = (props) => {

    console.log(props.applicant)
    const [show, setShow] = useState(false);
    const [showResume, setShowResume] = useState(false);

    function viewResult() {
        // get videos and info
        props.getApplicantsVideos(props.applicant.email, props.applicant.positions_id);
        props.getApplicantsInfo(props.applicant.email);
        setTimeout(()=>{setShow(true);}, 400)
    };

    const mailTo = "mailto:" + props.applicant.email;
    return (       
    <React.Fragment>
        <div onClick={()=>{viewResult();}} className="ml-0 d-flex justify-content-start container" style={{marginTop:"3rem", backgroundColor: "white", "border-radius": "0.5rem"}}>
            <div className="col-12" style={{fontFamily: "Avenir Next" }}>
                <div className="mt-4">
                    <div className="row">
                        <div className="col-9" style={{color:"#090D3A"}}>
                            <button className="title-button">
                                {props.applicant.name}
                            </button>
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
            id_candidate={props.id_candidate}
            username_candidate={props.username_candidate}
            email_candidate={props.email_candidate}
            phone_candidate={props.phone_candidate}
            location_candidate={props.location_candidate}
            int_ques={props.int_ques}
            secondround_status={props.applicant.secondround_status}
            show={show}
            setShowResume={setShowResume}
            onHide={()=>{setShow(false);}}
            int_ques={props.int_ques}
            positionId={props.applicant.positions_id}
        /> 
        {/* <MyModal
            show={showResume}
            onHide={()=>{setShowResume(false); setShow(true);}}
        >
            <div class="iframe-container">
                <iframe className="responsive-iframe" src={props.resumeURL}/>
            </div>
        </MyModal> */}
    </React.Fragment>     
)}


function MyVerticallyCenteredModal(props) {
    const { ...rest } = props;
    console.log(props.id_candidate);
    return (
      <MyModal {...rest}>
        <SecondReview
          {...rest}
          setShowResume={props.setShowResume}
          hide={props.onHide}
          int_ques={props.int_ques}
          id_candidate={props.id_candidate}
          username_candidate={props.username_candidate}
          email_candidate={props.email_candidate}
          phone_candidate={props.phone_candidate}
          location_candidate={props.location_candidate}
          positionId={props.positionId}
          updateCommentStatus={props.updateCommentStatus}
        />
      </MyModal>
    );
  };