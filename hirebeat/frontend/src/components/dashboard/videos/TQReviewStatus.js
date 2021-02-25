import React, { useState } from "react";
//import aiIcon from "../../../assets/ai_icon.png";
//import expertIcon from "../../../assets/expert_icon.png";
//import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, renderWaitTag, MyModal } from "../DashboardComponents";
import { SampleAnswer } from "./SampleAnswer";
import { AIReview } from "./AIReview";
import ReviewVideoResult from './ReviewVideoResult';
//import MediaQuery from 'react-responsive';
import { connect } from "react-redux";
import { confirmAlert } from 'react-confirm-alert';

function TQReviewStatus(props) {
  const [show, setShow] = useState(false);
  const [subPage, setSubPage] = useState("status");
  var text = "";
  var className = "";

// decide text, className based on review status
if (props.isSampleAns) {
    text = "View Sample Answer";
    className = "reviewed text-15";
} else {
    if (props.v.ai_performance_ready) {
      text = "View Result";
      className = "reviewed text-15";
    } else {
        text = "In Progress";
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
      {label: 'OK'},
      {label: 'Upgrade Now', onClick: () => redirectPricing()}
    ]
  });
}


  function reviewToggle() {
    // view result
    if (text == "View Result") {
        setSubPage("ai");
        setTimeout(()=>{setShow(true);}, 300);
    } else if (text == "View Sample Answer")  {
      if (props.saved_video_count >= props.save_limit) {
        if(props.v.is_tq_sample_clicked == true){
          setSubPage("sampleAns");
          setTimeout(()=>{setShow(true);}, 300);
      }else{
        upgradeMessage();
      }
      }else{
          props.addTQVideoLimit(props.v.owner, props.v.id, "sample");
          setSubPage("sampleAns");
          setTimeout(()=>{setShow(true);}, 300);
      }
  }
  }

  return (
    <div>
      {/*props.isSampleAns ? renderWaitTag("") : (props.v.ai_auto_ready ? renderSuccessTag("AI Reviewed") : renderWaitTag("In Progress"))*/}
      <div className="height-30">
        <button
          onClick={reviewToggle}
          className={className}
          style={{ color: "#FFFFFF", marginBottom: "0px", display: "inline-block", outline: "none", width: props.width }}
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
        isAudio={props.isAudio}
        retry={props.retry}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const { subPage, setSubPage, v, isTQ, ...rest } = props;
  return (
    <MyModal {...rest}>
      {subPage == "sampleAns" ? (
        <SampleAnswer v={v} setSubPage={setSubPage} retry={props.retry} isAudio={props.isAudio}/>
      ) : (
        <ReviewVideoResult v={v} setSubPage={setSubPage} isTQ={isTQ} isAudio={props.isAudio} retry={props.retry}/>
      )}
    </MyModal>
  );
}

const mapStateToProps = (state) => ({
  save_limit: state.auth_reducer.profile.save_limit,
  saved_video_count: state.auth_reducer.profile.saved_video_count,
});


export default connect(mapStateToProps)(TQReviewStatus);