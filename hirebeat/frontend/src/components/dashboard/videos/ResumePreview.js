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

  function deleteCV() {
    let id = props.resume.id;
    props.deleteResume({"id": id});
    window.location.reload();
  }

  function deleteAlert() {
    confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this resume?",
        buttons: [
            {
              label: 'Yes',
              onClick: () => deleteCV()
            },
            {
              label: 'No'
            }
        ]
    });

  }

  return (
      <div className="container d-flex justify-content-start " style={{marginTop:"2%", backgroundColor: "white", "border-radius": "0.5rem"}}>
        <div className="col-2 d-flex justify-content-center align-items-center pl-0 ml-0">
          { reviewed ? <OverallScore percent={props.percent} bgColor={"#FAC046"} barColor={"#FF6B00"}/> : null }
        </div>
        <div className="col-10" style={{fontFamily: "Inter, Segoe UI" }}>
          <div className="mt-3">
            <h3>{props.jobTitle}</h3>
          </div>
          <div className="row">
            <div className="col-9">
              <p style={{color:"#7D7D7D"}}>{props.jdText.substring(0, 60)+'...'}</p>
            </div>
            <div className="col-3" style={{color:"#7D7D7D", borderLeft:"outset"}}>
              <p>{props.createdAt}</p>
            </div>
          </div>
          <div className="row mb-3">
          <div className="col-9 d-flex align-items-center">
            <div>
              <button onClick={reviewToggle} className="reviewed text-15 resume-btn">
                View Result
              </button>
            </div>
            <div style={{marginLeft: "1rem"}}>
              <button onClick={deleteAlert} className="delete-btn">
                  <i className="bx bx-trash bx-sm" style={{color:'#bbbbbb', paddingTop:'30%'}}></i>
              </button>
            </div>
          </div>
          </div>
          <MyVerticallyCenteredModal
            className="resumeRes"
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
      <ResumeResult resume={resume} onHide={props.onHide}/>
    </MyModal>
  );
};

function alert() {
    confirmAlert({
        title: "Your result is on the way 🏃",
        message: "It will be ready within 30s",
        buttons: [
            {
              label: 'Ok'
            }
        ]
    });

}