import React, { useState } from "react";
import { OverallScore, MyModal } from "./../DashboardComponents";
import { ResumeResult } from "./../../resume/ResumeResult";
import { confirmAlert } from 'react-confirm-alert';

export const ResumePreview = (props) => {
  var reviewed = false;
  const [show, setShow] = useState(false);

  if (props.resume.skills_keywords != null) {
    reviewed = true;
  }

  function reviewToggle() {
    props.getResumes();
    reviewed ? setShow(true) : alert();

  }

  return (
      <div className="container d-flex justify-content-start" style={{marginTop:"2%"}}>
        <div className="col-2">
          { reviewed ? <OverallScore percent={props.percent} bgColor={"#FAC046"} barColor={"#FF6B00"}/> : null }
        </div>
        <div className="col-10" style={{fontFamily: "Poppins" }}>
          <div>
            <h3>{props.jobTitle}</h3>
          </div>
          <div className="row">
            <div className="col-9">
              <p style={{color:"#7D7D7D"}}>{props.jdText.substring(0, 100)+'...'}</p>
            </div>
            <div className="col-3" style={{color:"#7D7D7D", borderLeft:"outset"}}>
              <p>{props.createdAt}</p>
            </div>
          </div>
          <div>
            <button onClick={reviewToggle} className="reviewed text-15 resume-btn">
              View Result
            </button>
          </div>
          <MyVerticallyCenteredModal
            show={show}
            onHide={() => setShow(false)}
            resume={props.resume}
          />
        </div>
      </div>
  );
};

function MyVerticallyCenteredModal(props) {
  const { resume, ...rest } = props;
  return (
    <MyModal {...rest} isResume={true}>
      <ResumeResult resume={resume} />
    </MyModal>
  );
};

function alert() {
    confirmAlert({
        title: "Result Processing!",
        message: "Please check again in 30 seconds",
        buttons: [
            {
              label: 'Ok'
            }
        ]
    });

}