import React, { useState } from "react";
//import aiIcon from "../../../assets/ai_icon.png";
//import expertIcon from "../../../assets/expert_icon.png";
//import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, renderWaitTag, MyModal } from "../DashboardComponents";
import { ExpertReview } from "./ExpertReview";
import { AIReview } from "./AIReview";
//import MediaQuery from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
//import {Link} from "react-router-dom";

function ReviewStatusButton(props) {
  const [show, setShow] = useState(false);
  var text = "";
  var className = "";

  const [subPage, setSubPage] = useState("status");
  var sendVideoForReview = props.sendVideoForReview;
  var video = props.v;

  // decide expert or ai review type by props.aiReview
  if (props.aiReview) {
    // decide text, className based on review status
    if (props.v.is_ai_reviewed) {
        text = "View AI Result";
        className = "reviewed text-15";
    } else if (!props.v.needed_ai_review) {
        text = "Get AI Review";
        className = "not-reviewed text-15";
    } else {
        text = "AI Requested";
        className = "under-review text-15 disabled";
    }
  } else {
    if (props.v.is_expert_reviewed) {
        text = "View Expert Result";
        className = "reviewed text-15";
    } else if (!props.v.needed_expert_review) {
        text = "Get Expert Review";
        className = "not-reviewed text-15";
    } else {
        text = "Expert Requested";
        className = "under-review text-15 disabled";
    }
  }

  function reviewToggle() {
    // send for review
    if (text == "Get AI Review") {
        if (props.feedback_count >= props.feedback_limit) {
          if(props.profile.membership == "Premium"){
            limitMessage();
          }else{
            upgradeMessage();
          }
        }
        else{
          sendVideoForReview("ai", video.id);
          //window.location.reload();
//          alert();
        }
    }
    else if (text == "Get Expert Review") {
        if (props.feedback_count >= props.feedback_limit) {
          if(props.profile.membership == "Premium"){
            limitMessage();
          }else{
            upgradeMessage();
          }
        }
        else {
          sendVideoForReview("expert", video.id);
          //window.location.reload();
//          alert();
        }
    }
    // view result
    else if (text == "View AI Result") {
        setSubPage("ai");
        setTimeout(()=>{setShow(true);}, 300);
    }
    else if (text == "View Expert Result") {
        setSubPage("expert");
        setTimeout(()=>{setShow(true);}, 300);
    }
  }

  return (
    <div>
      {/*props.aiReview ? (props.v.is_ai_reviewed ? renderSuccessTag("AI Reviewed") : (!props.v.needed_ai_review ? renderWaitTag("") : renderWaitTag("In Progress")))
        : (props.v.is_expert_reviewed ? renderSuccessTag("Expert Reviewed") : (!props.v.needed_expert_review ? renderWaitTag("") : renderWaitTag("In Progress")))*/}
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
        sendVideoForReview={props.sendVideoForReview}
        isAudio={props.isAudio}
        retry={props.retry}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const { subPage, setSubPage, v, ...rest } = props;
  return (
    <MyModal {...rest}>
      {subPage == "expert" ? (
        <ExpertReview v={v} setSubPage={setSubPage} isAudio={props.isAudio} retry={props.retry}/>
      ) : (
        <AIReview v={v} setSubPage={setSubPage} isAudio={props.isAudio} retry={props.retry}/>
      )}
    </MyModal>
  );
}

function alert() {
    confirmAlert({
        title: 'Submit Succeed!',
        message: 'Your feedback will be ready within 24 hours.',
        buttons: [
          {
            label: 'OK'
          }
        ]
    });
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

function limitMessage() {
  confirmAlert({
    title: 'Limit Exceed',
    message: 'You reach the max limit.😢',
    buttons: [
      {label: 'OK'},
    ]
  });
}

const mapStateToProps = (state) => ({
  feedback_limit: state.auth_reducer.profile.feedback_limit,
  feedback_count: state.auth_reducer.profile.feedback_count,
});


export default connect(mapStateToProps)(ReviewStatusButton);
