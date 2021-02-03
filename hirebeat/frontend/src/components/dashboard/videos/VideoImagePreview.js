import React from "react";
import ReviewStatusButton from "./ReviewStatusButton";
import TQReviewStatus from "./TQReviewStatus";
import { renderQDes } from "../DashboardComponents";
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import MediaQuery from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";
import { retryBQuestion } from "../../../redux/actions/question_actions";
import { useDispatch } from 'react-redux';
//import { renderWaitTag } from "../DashboardComponents";


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
  function removeVideo() {
    let id = props.v.id;
    props.deleteVideo({"id": id});
    window.location.reload();
  }

  function deleteAlert() {
    confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this video/audio?",
        buttons: [
            {
              label: 'Yes',
              onClick: () => removeVideo()
            },
            {
              label: 'No'
            }
        ]
    });

  }

  function retry() {
    retryBQuestion(props.v, props.isAudio, dispatch);
  }

  const dispatch = useDispatch();
  // control status, render modal
  return (
    <div className="height-20 mt-6">
      <div className="row">
        <MediaQuery minDeviceWidth={1224}>
        <div className="col-5">
          {
            (props.isAudio) ?
                <div className="d-flex align-items-center" style={{height: "100%"}} >
                    <AudioPlayer url={props.v.url} />
                </div>
                : <VideoPlayer url={props.v.url} />
          }
        </div>
        </MediaQuery>
        <div className="col d-flex flex-column justify-content-start container" style={{backgroundColor: "white", "border-radius": "0.5rem"}}>
        <MediaQuery minDeviceWidth={1224}>
          <h3 className="height-50 mt-5">Q:{renderQDes(props.v.q_description)}</h3>
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
                <div className="row mb-6">
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
                    <div className="col-1">
                      <button onClick={deleteAlert} className="delete-btn btn-margin">
                        <i className="bx bx-trash bx-sm" style={{color:'#bbbbbb', paddingTop:'30%'}}></i>
                      </button>
                    </div>
                    <div className="col-2" style={{marginRight: "1rem"}}>
                        <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}} />
                        <Link to={"/practice/modes/retry"} onClick={retry} style={{ marginTop: "8%"}}>
                            <a
                                className="default-btn" style={{color:"white", backgroundColor:"#090D3A", height: "30px", width: "80px", paddingLeft:"32px"}}
                            >
                                <i className="bx bx-revision text-30" style={{left:"10px"}}></i>
                                <p className={"text-15"} style={{height: "100%", color: "white", marginRight: "10%"}}>Retry</p>
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>) : (  // TQ
                <div className="row mb-6">
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                      addTQVideoLimit={props.addTQVideoLimit}
                    />
                  </div>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                      isSampleAns={true}
                      addTQVideoLimit={props.addTQVideoLimit}
                    />
                  </div>
                  <div className="col-1">
                    <button onClick={deleteAlert} className="delete-btn btn-margin">
                      <i className="bx bx-trash bx-sm" style={{color:'#bbbbbb', paddingTop:'30%'}}></i>
                    </button>
                  </div>
                  <div className="col-2" style={{marginRight: "1rem"}}>
                      <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}} />
                      <Link to={"/practice/modes/retry"} onClick={retry} style={{ marginTop: "8%"}}>
                          <a
                              className="default-btn " style={{color:"white", backgroundColor:"#090D3A", height: "30px", width: "80px", paddingLeft:"32px"}}
                          >
                              <i className="bx bx-revision text-30" style={{left:"10px"}}></i>
                              <p className={"text-15"} style={{height: "100%", color: "white", marginRight: "10%"}}>Retry</p>
                              <span></span>
                          </a>
                      </Link>
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
                      addTQVideoLimit={props.addTQVideoLimit}
                    />
                  </div>
                  <div className="col">
                    <TQReviewStatus
                      v={props.v}
                      aiReview={true}  // review type： AI
                      isTQ={true}
                      isSampleAns={true}
                      addTQVideoLimit={props.addTQVideoLimit}
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
