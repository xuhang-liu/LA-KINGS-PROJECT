import React from "react";
//import Chart from "react-apexcharts";

import {
  DbRow
} from "../DashboardComponents";
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import { Link } from "react-router-dom";

export function SampleAnswer(props) {
  var explain = props.v.q_explain;
  var answer = props.v.q_answer;
  const medal_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/gold-medal.png";
    const medal_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/silver-medal.png";
    const medal_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bronze-medal.png";
    const medal_comment_1 = "Exceptional Congratulations! Based on our analysis, you did very well on this question!";
    const medal_comment_2 = "Good! Some work may be needed. Based on our analysis, you could make some improvements in some areas.";
    const medal_comment_3 = "weak answer. Based on our analysis, you need to make improvements in a few important areas.";
    var medal_comment = "";
    var medal_url = "";
    if((Number(props.v.ai_performance_total_score) >= 0) && (Number(props.v.ai_performance_total_score) < 70)){
        medal_url=medal_url_3;
        medal_comment=medal_comment_3;
    }else if((Number(props.v.ai_performance_total_score) >= 70) && (Number(props.v.ai_performance_total_score) < 85)){
        medal_url=medal_url_2;
        medal_comment=medal_comment_2;
    }else if((Number(props.v.ai_performance_total_score) >= 85) && (Number(props.v.ai_performance_total_score) <= 100)){
        medal_url=medal_url_1;
        medal_comment=medal_comment_1;
    }
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-5 pl-3">
            <h3 className="ml-4 mb-3" style={{color:"#4A6F8A"}}>{props.v.q_description} </h3>
            <div className="ml-4" style={{maxWidth:"40rem"}}>
            {
            (props.isAudio) ?
                    <AudioPlayer url={props.v.url} />
                : <VideoPlayer url={props.v.url} />
            }
            </div>
            <div className="row ml-3 my-4">
                <div className="col-2">
                    <img src={medal_url} alt="icon" style={{width:"3rem"}}></img>
                </div>
                <div className="col-10">
                <h6 style={{color:"#13C4A1"}}>
                    {medal_comment}
                </h6>
                </div>
            </div>
            <h6 className="ml-4" style={{color:"#4A6F8A"}}>
                Review your score breakdown by category to learn more about what you’re doing well what could be improved.
            </h6>
            <hr className="ml-4" style={{height:"1px", borderWidth:"2", color:"E8EDFC",backgroundColor:"E8EDFC"}}></hr>
            <h6 className="ml-4" style={{color:"#4A6F8A "}}>
                Check our personalized action plan to help you improve.
            </h6>
            <div className="row pl-4">
                <Link to={"/practice/modes/retry"}>
                  <button className='default-btn ml-5 my-4' onClick={props.retry}><i class='bx bx-revision'></i>Re-practice</button>
                </Link>
            </div>
        </div>
        <div className="col-7 my-4">
          <DbRow>
            <div className="col-2"/>
            <div className="col-8 d-flex justify-content-center align-items-center">
              <strong className="text-20" style={{color: "#7D7D7D"}}>See Your Sample Answer</strong>
            </div>
            <div className="col-2"/>
          </DbRow>
          <div style={{marginBottom: "3rem", marginLeft: "1rem"}}>
            <h3>Sample Answer: </h3>
            <p style={{marginLeft: "1rem"}}>{answer}</p>
            <h3>Explanation: </h3>
            <p style={{marginLeft: "1rem"}}>{explain}</p>
          </div>
        </div>
      </div>
    {/*<div className="container">
      <DbRow>
        <div className="col-2"/>
        <div className="col-8 d-flex justify-content-center align-items-center">
            <strong className="text-20" style={{color: "#7D7D7D"}}>See Your Sample Answer</strong>
        </div>
        <div className="col-2"/>
      </DbRow>
      <QuestionTitle title={props.v.q_description} />
      <div style={{marginBottom: "3rem", marginLeft: "1rem"}}>
        <h3>Sample Answer: </h3>
        <p style={{marginLeft: "1rem"}}>{answer}</p>
        <h3>Explanation: </h3>
        <p style={{marginLeft: "1rem"}}>{explain}</p>
      </div>
    </div>*/}
  </div>
  );
}

