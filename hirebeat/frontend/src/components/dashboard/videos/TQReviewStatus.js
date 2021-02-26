import React, { useState } from "react";
//import aiIcon from "../../../assets/ai_icon.png";
//import expertIcon from "../../../assets/expert_icon.png";
//import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, renderWaitTag, MyModal } from "../DashboardComponents";
import { SampleAnswer } from "./SampleAnswer";
import { AIReview } from "./AIReview";
import MediaQuery from 'react-responsive';
import { connect } from "react-redux";
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

function redirectPricing() {
  window.location.href = "/pricing";
}

function upgradeMessage() {
  confirmAlert({
    title: 'Upgrade',
    message: 'No more free review left.😢 Upgrade now to get unlimite reviews',
    buttons: [
      {label: 'Upgrade Now', onClick: () => redirectPricing()},
      {label: 'OK'},
    ]
  });
}


  function reviewToggle() {
    // view result
    if (text == "View AI Result") {
      if (props.feedback_count >= props.feedback_limit) {
        if(props.v.is_tq_ai_clicked == true){
            setSubPage("ai");
            setShow(true);
        }else{upgradeMessage();}
      }else{
          props.addTQVideoLimit(props.v.owner, props.v.id, "ai");
          setSubPage("ai");
          setTimeout(()=>{setShow(true);}, 300)
      }
    } else if (text == "Sample Answer")  {
      if (props.feedback_count >= props.feedback_limit) {
        if(props.v.is_tq_sample_clicked == true){
          setSubPage("sampleAns");
          setShow(true);
      }else{
        upgradeMessage();
      }
      }else{
          props.addTQVideoLimit(props.v.owner, props.v.id, "sample");
          setSubPage("sampleAns");
          setTimeout(()=>{setShow(true);}, 300)
      }
  }
  }

  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
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
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1223}>
        <div className="height-30">
        <button
          onClick={reviewToggle}
          className={className}
          style={{ color: "#FFFFFF", marginBottom: "0px", display: "inline-block", outline: "none", width: "8.8rem" }}
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
      </MediaQuery>
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

const mapStateToProps = (state) => ({
  feedback_limit: state.auth_reducer.profile.feedback_limit,
  feedback_count: state.auth_reducer.profile.feedback_count,
});


export default connect(mapStateToProps)(TQReviewStatus);