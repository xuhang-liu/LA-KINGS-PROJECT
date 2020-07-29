import React, { useState } from "react";
import aiIcon from "../../../assets/ai_icon.png";
import expertIcon from "../../../assets/expert_icon.png";
import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag, MyModal } from "../DashboardComponents";
import { ExpertReview } from "./ExpertReview";
import { AIReview } from "./AIReview";

function ReviewStatusButton(props) {
  const [show, setShow] = useState(false);
  var text = "";
  var className = "";

  // decide text, className based on review status
  if (props.v.is_expert_reviewed && props.v.is_ai_reviewed) {
    text = "Reviews Ready";
    className = "btn btn-success";
  } else if (!props.v.needed_expert_review || !props.v.needed_ai_review) {
    text = "Send for review";
    className = "btn btn-primary";
  } else {
    text = "Under Review";
    className = "btn btn-warning";
  }

  return (
    <div>
      <div className="height-30 d-flex justify-content-start align-items-end">
        {props.v.is_expert_reviewed ? renderSuccessTag("Expert") : null}
        {props.v.is_ai_reviewed ? renderSuccessTag("AI") : null}
      </div>
      <div className="height-30">
        <button
          onClick={() => setShow(true)}
          className={className}
          style={{ borderRadius: "20px", width: "200px" }}
        >
          {text}
        </button>
      </div>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
        v={props.v}
        sendVideoForReview={props.sendVideoForReview}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  const [subPage, setSubPage] = useState("status");
  const { sendVideoForReview, v, ...rest } = props;
  return (
    <MyModal {...rest}>
      {subPage == "status" ? (
        <ReviewStatus
          v={v}
          sendVideoForReview={sendVideoForReview}
          setSubPage={setSubPage}
        />
      ) : subPage == "expert" ? (
        <ExpertReview v={v} setSubPage={setSubPage} />
      ) : (
        <AIReview v={v} setSubPage={setSubPage} />
      )}
    </MyModal>
  );
}

function ReviewStatus(props) {
  const [btnClassNameExpert, onTapExpert] = decideClassNameAndOnTap(
    "expert",
    props.v,
    props.sendVideoForReview,
    props.setSubPage
  );
  const [btnClassNameAI, onTapAI] = decideClassNameAndOnTap(
    "ai",
    props.v,
    props.sendVideoForReview,
    props.setSubPage
  );
  var btnTextExpert = "Human Analytics";
  var btnTextAI = "AI Data Analytics";
  return (
    <div className="container height-400">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="text-secondary">Create Your Interview Result</p>
        <h3 className="h3" style={{ fontSize: "40px", fontWeight: "normal"}}>
          Choose Analysis Method
        </h3>
        <p className="review-text">
          Q:{renderQDes(props.v.q_description)}
        </p>
      </div>
      <div className="row setup-card-row-bottom">
        {ButtonContainer(
          expertIcon,
          onTapExpert,
          btnTextExpert,
          btnClassNameExpert
        )}
        {ButtonContainer(aiIcon, onTapAI, btnTextAI, btnClassNameAI)}
      </div>
    </div>
  );
}

function decideClassNameAndOnTap(type, v, sendVideoForReview, setSubPage) {
  // returns a tuple [btnClassName, onTap]
  if (type == "expert") {
    if (v.is_expert_reviewed) {
      return ["btn btn-success", () => setSubPage("expert")];
    } else if (v.needed_expert_review) {
      return ["btn btn-warning disabled", null];
    } else {
      return ["btn btn-warning", () => sendVideoForReview("expert", v.id)];
    }
  } else {
    // ai
    if (v.is_ai_reviewed) {
      return ["btn btn-success", () => setSubPage("ai")];
    } else if (v.needed_ai_review) {
      return ["btn btn-warning disabled", null];
    } else {
      return ["btn btn-warning", () => sendVideoForReview("ai", v.id)];
    }
  }
}

export default ReviewStatusButton;
