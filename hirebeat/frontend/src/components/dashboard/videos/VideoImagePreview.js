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
  const medal_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/gold-medal.png";
  const medal_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/silver-medal.png";
  const medal_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bronze-medal.png";
  var medal_url = "";
    if((Number(props.v.ai_performance_total_score) > 0) && (Number(props.v.ai_performance_total_score) <= 33)){
        medal_url=medal_url_3;
    }else if((Number(props.v.ai_performance_total_score) >= 34) && (Number(props.v.ai_performance_total_score) <= 66)){
        medal_url=medal_url_2;
    }else if((Number(props.v.ai_performance_total_score) >= 67) && (Number(props.v.ai_performance_total_score) <= 100)){
        medal_url=medal_url_1;
    }

  return (
    <div className="pt-3">
      <div className="row">
        <div className="col-2 interview-txt9 interview-center">
          {renderQDes(props.v.q_description)}
        </div>
        <div className="col-2 interview-txt7 interview-center pt-3">
          {props.v.created_at.substring(0, 10)}
        </div>
        <div className="col-1">
          {(Number(props.v.ai_performance_total_score) > 0) &&
          <img src={medal_url} alt="icon" style={{width:"3rem"}}></img>}
        </div>
        { props.isBQ ? (
        <div className="col-2 pt-2">
          <TQReviewStatus
            v={props.v}
            aiReview={true}  // Performance
            isTQ={true}
            addTQVideoLimit={props.addTQVideoLimit}
            width={"8rem"}
            isAudio={props.isAudio}
            retry={retry}
          />
        </div>

        ):
        (<div className="col-2 pt-2">
        <TQReviewStatus
          v={props.v}
          aiReview={true}  // Performance
          isTQ={true}
          addTQVideoLimit={props.addTQVideoLimit}
          width={"8rem"}
          isAudio={props.isAudio}
          retry={retry}
        />
        </div>
        )}
        { props.isBQ &&
        <div className="col-2 pt-2">
          <ReviewStatusButton
            v={props.v}
            sendVideoForReview={props.sendVideoForReview}
            aiReview={true}  // review type： AI
            width={"7.5rem"}
            isAudio={props.isAudio}
            retry={retry}
          />
        </div>}
        { props.isBQ &&
        <div className="col-2 pt-2">
          <ReviewStatusButton
            v={props.v}
            sendVideoForReview={props.sendVideoForReview}
            aiReview={false}  // review type： Expert
            width={"9.5rem"}
            isAudio={props.isAudio}
            retry={retry}
          />
        </div>}
        { !props.isBQ &&
        <div className="col-3 pt-2">
          <TQReviewStatus
            v={props.v}
            aiReview={true}  // Sample Answer
            isTQ={true}
            isSampleAns={true}
            addTQVideoLimit={props.addTQVideoLimit}
            width={"12rem"}
            isAudio={props.isAudio}
            retry={retry}
          />
        </div>}
        { props.isBQ &&
        <div className="col-1 pt-2">
          <button onClick={deleteAlert} className="delete-btn">
            <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
          </button>
        </div>}
        { !props.isBQ &&
        <div className="col-1 pt-2">
          <Link to={"/practice/modes/retry"} onClick={retry}>
            <i className="bx bx-revision text-30"></i>
          </Link>
        </div>}
        { !props.isBQ &&
        <div className="col-1 pt-2">
          <button onClick={deleteAlert} className="delete-btn">
            <i className="bx bx-trash text-30" style={{color:'#56a3fa'}}></i>
          </button>
        </div>}
        {/*<div className="col-5">
          {
            (props.isAudio) ?
                <div className="d-flex align-items-center" style={{height: "100%"}} >
                    <AudioPlayer url={props.v.url} />
                </div>
                : <VideoPlayer url={props.v.url} />
          }
        </div>*/}
        {/*<div className="col d-flex flex-column justify-content-start container" style={{backgroundColor: "white", "border-radius": "0.5rem"}}>
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
          </div>*/}
      </div>
    </div>
  );
}

export default VideoImagePreview;
