import React from "react";
import ReviewStatusButton from "./ReviewStatusButton";
import TQReviewStatus from "./TQReviewStatus";
import { renderQDes } from "../DashboardComponents";
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import MediaQuery from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
import { renderWaitTag } from "../DashboardComponents";


function showAns(ans) {
     confirmAlert({
            title: 'Sample Answer',
            message: ans,
            buttons: [
              {
                label: 'OK'
              }
            ]
     });
}

export function VideoImagePreview(props) {
  // control status, render modal
  return (
    <div className="height-20">
      <div className="row">
        <MediaQuery minDeviceWidth={1224}>
        <div className="col-5">
          {
            (props.isAudio) ? <AudioPlayer url={props.v.url} />
                : <VideoPlayer url={props.v.url} />
          }
        </div>
        </MediaQuery>
        <div className="col d-flex flex-column justify-content-start container">
        <MediaQuery minDeviceWidth={1224}>
          <h3 className="height-50">Q:{renderQDes(props.v.q_description)}</h3>
          <div className="d-flex justify-content-start">
            <p className="text-secondary">{props.v.q_type}({props.v.q_category})</p>
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
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
          <h5 className="height-50">Q:{renderQDes(props.v.q_description)}</h5>
          <div className="d-flex justify-content-start">
            <p className="text-secondary" style={{fontSize:'11px'}}>{props.v.q_type}({props.v.q_category})</p>
            <p
              className="text-secondary"
              style={{ marginLeft: "10px", marginRight: "10px" ,fontSize:"11px"}}
            >
              {" | "}
            </p>
            <p className="text-secondary" style={{fontSize:'11px'}}>
              {props.v.created_at.substring(0, 10)}
            </p>
          </div>
          </MediaQuery>
          <MediaQuery minDeviceWidth={1224}>
            { props.isBQ ? (
                <div className="row" style={{width: "90%"}}>
                    <div className="col">
                      <ReviewStatusButton
                        v={props.v}
                        sendVideoForReview={props.sendVideoForReview}
                        aiReview={true}  // review type： AI
                      />
                    </div>
                    <div className="col">
                      <ReviewStatusButton
                        v={props.v}
                        sendVideoForReview={props.sendVideoForReview}
                        aiReview={false}  // review type： Expert
                      />
                    </div>
                </div>) : (  // TQ
                <div className="row" style={{width: "90%"}}>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                    />
                  </div>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                      isSampleAns={true}
                    />
                  </div>
                </div>)
            }
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            { props.isBQ ? (
                <div className="row" style={{width: "90%"}}>
                    <div className="col">
                      <ReviewStatusButton
                        v={props.v}
                        sendVideoForReview={props.sendVideoForReview}
                        aiReview={true}  // review type： AI
                      />
                    </div>
                    <div className="col">
                      <ReviewStatusButton
                        v={props.v}
                        sendVideoForReview={props.sendVideoForReview}
                        aiReview={false}  // review type： Expert
                      />
                    </div>
                </div>) : (  // TQ
                <div className="row" style={{width: "90%"}}>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                    />
                  </div>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                      isSampleAns={true}
                    />
                  </div>
                </div>)
            }
            </MediaQuery>
        </div>
      </div>
    </div>
  );
}

export default VideoImagePreview;
