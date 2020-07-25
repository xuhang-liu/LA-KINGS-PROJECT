import React from "react";
import ReviewStatusButton from "./ReviewStatusButton";
import { renderQDes } from "../DashboardComponents";
import VideoPlayer from "../../videos/VideoPlayer";

export function VideoImagePreview(props) {
  // control status, render modal
  return (
    <div className="height-20">
      <div className="row">
        <div className="col-5">
          <VideoPlayer url={props.v.url} />
        </div>
        <div className="col d-flex flex-column justify-content-start container">
          <h3 className="height-50">Q:{renderQDes(props.v.q_description)}</h3>
          <div className="d-flex justify-content-start">
            <p className="text-secondary">{props.v.q_type}</p>
            <p
              className="text-secondary"
              style={{ marginLeft: "10px", marginRight: "10px" ,fontSize:"15px"}}
            >
              {" | "}
            </p>
            <p className="text-secondary">
              {props.v.created_at.substring(0, 10)}
            </p>
          </div>
          <ReviewStatusButton
            v={props.v}
            sendVideoForReview={props.sendVideoForReview}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoImagePreview;
