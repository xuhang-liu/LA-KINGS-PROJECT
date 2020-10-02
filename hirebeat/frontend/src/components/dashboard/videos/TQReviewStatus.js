import React, { useState } from "react";
import aiIcon from "../../../assets/ai_icon.png";
import expertIcon from "../../../assets/expert_icon.png";
import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, renderWaitTag, MyModal } from "../DashboardComponents";
import { SampleAnswer } from "./SampleAnswer";
import { AIReview } from "./AIReview";
import { confirmAlert } from 'react-confirm-alert';

function TQReviewStatus(props) {
  const [show, setShow] = useState(false);
  const [subPage, setSubPage] = useState("status");
  var text = "";
  var className = "";

// decide text, className based on review status
if (props.isSampleAns) {
    text = "Sample Answer";
    className = "reviewed text-15";
} else {
    if (props.v.ai_auto_ready) {
      text = "View AI Result";
      className = "reviewed text-15";
    } else {
        text = "Please Wait for Result";
        className = "under-review text-15 disabled";
    }
}



  function reviewToggle() {
    // view result
    if (text == "View AI Result") {
        setSubPage("ai");
        setShow(true);
    } else {
        setSubPage("sampleAns");
        setShow(true);
    }
  }

  return (
    <div>
      {props.isSampleAns ? renderWaitTag("") : (props.v.ai_auto_ready ? renderSuccessTag("AI Reviewed") : renderWaitTag("In Progress"))}
      <div className="height-30">
        <button
          onClick={reviewToggle}
          className={className}
          style={{ color: "#FFFFFF", marginBottom: "0px", display: "inline-block", outline: "none", width: "12rem" }}
        >
          {text}
        </button>
      </div>
      <MyVerticallyCenteredModal
        show={show}
        subPage={subPage}
        setSubPage={setSubPage}
        onHide={() => setShow(false)}
        v={props.v}
        isTQ={props.isTQ}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const { subPage, setSubPage, v, isTQ, ...rest } = props;
  return (
    <MyModal {...rest}>
      {subPage == "sampleAns" ? (
        <SampleAnswer v={v} setSubPage={setSubPage} />
      ) : (
        <AIReview v={v} setSubPage={setSubPage} isTQ={isTQ} />
      )}
    </MyModal>
  );
}

export default TQReviewStatus;
