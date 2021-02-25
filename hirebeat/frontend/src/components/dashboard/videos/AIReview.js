import React from "react";
import Chart from "react-apexcharts";
import {
  radialChartOptions,
  infillChartData,
  convertStringToArray,
} from "../../../constants/constants";
import {
  ReviewHeader,
  CategoryTitle,
} from "../DashboardComponents";
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import { Link } from "react-router-dom";
//import MediaQuery from 'react-responsive';

export function AIReview(props) {
  var categoryArray = convertStringToArray(props.v.ai_review_categories);
  var percentArray = convertStringToArray(props.v.ai_category_score);
  var wordArray = [];
  var talkSpeed = "";
  if (props.v.ai_filter_words != null) {
    wordArray = props.v.ai_filter_words;
  }
  if (props.v.ai_words_per_minute != null) {
    talkSpeed = props.v.ai_words_per_minute;
  } else {
      talkSpeed = "0";
  }
  infillChartData(categoryArray, percentArray);
  const medal_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/gold-medal.png";
  const medal_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/silver-medal.png";
  const medal_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bronze-medal.png";
  var medal_url = "";
    if((Number(props.v.ai_performance_total_score) >= 0) && (Number(props.v.ai_performance_total_score) <= 33)){
        medal_url=medal_url_3;
    }else if((Number(props.v.ai_performance_total_score) >= 34) && (Number(props.v.ai_performance_total_score) <= 66)){
        medal_url=medal_url_2;
    }else if((Number(props.v.ai_performance_total_score) >= 67) && (Number(props.v.ai_performance_total_score) <= 100)){
        medal_url=medal_url_1;
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
                    <img src={medal_url} alt="icon" style={{width:"6rem"}}></img>
                </div>
                <div className="col-10">
                <h6 style={{color:"#13C4A1"}}>
                    You really aced this question!  You have scored higher than 90% of other candidates.
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
        <div className="col-7 mb-4">
        <ReviewHeader setSubPage={() => props.setSubPage("status")} />
        <CategoryTitle title={"Overall Score"} />
          <ProgressBar color={"blue"} height={15} percent={props.v.ai_score} />
          <div className="row mr-2">
            <div className="col-6">
              <div id="chart">
                <Chart
                  options={radialChartOptions.options}
                  series={radialChartOptions.series}
                  type="radar"
                  height={350}
                />
              </div>
            </div>
            <div className="col-6">
              <CategoryTitle title={"Details"} />
              {categoryArray.map((c, index) => {
                return (
                  <AICategoryReview
                    category={c}
                    percent={percentArray[index]}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/*<ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <div>
          <CategoryTitle title={"Overall Score"} />
          <ProgressBar color={"blue"} height={15} percent={props.v.ai_score} />
          <div className="row">
            <div className="col-6">
              <div id="chart">
                <Chart
                  options={radialChartOptions.options}
                  series={radialChartOptions.series}
                  type="radar"
                  height={350}
                />
              </div>
            </div>
            <div className="col-6">
              <CategoryTitle title={"Details"} />
              {categoryArray.map((c, index) => {
                return (
                  <AICategoryReview
                    category={c}
                    percent={percentArray[index]}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>*/}
    </div>
  );
}

const ProgressBar = (props) => {
  // color, percent, height
  var barClassName =
    "progress-bar " +
    (props.color == "blue"
      ? "gradient-progress-blue"
      : "gradient-progress-orange");
  return (
    <div className="row d-flex align-items-center">
      <div className="col-10">
        <div
          className="progress"
          style={{ height: props.height, borderRadius: "20px" }}
        >
          <div
            className={barClassName}
            role="progressbar"
            style={{
              width: (props.percent * 10).toString() + "%",
            }}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <ProgressScore percent={props.percent} height={props.height * 2} />
      </div>
    </div>
  );
};

const WordProgressBar = (props) => {
  // color, percent, height
  var barClassName =
    "progress-bar " +
    (props.color == "green"
      ? "gradient-progress-green"
      : "gradient-progress-blue");
  return (
    <div className="row d-flex align-items-center">
      <div className="col-10">
        <div
          className="progress"
          style={{ height: props.height, borderRadius: "20px" }}
        >
          <div
            className={barClassName}
            role="progressbar"
            style={{
              width: (props.percent / 2).toString() + "%",
            }}
            aria-valuemin="0"
            aria-valuemax="240"
          ></div>
        </div>
      </div>
      <div className="col-2">
        <WordPercentTag percent={props.percent} />
      </div>
    </div>
  );
};

const ProgressScore = (props) => {
  //percent, height
  var scoreClassName = props.height == 30 ? "text-30 " : "text-15 ";
  if (props.percent > 8.5) {
    scoreClassName += "text-success";
  } else if (props.percent > 5) {
    scoreClassName += "text-primary";
  } else if (props.percent > 3) {
    scoreClassName += "text-warning";
  } else {
    scoreClassName += "text-danger";
  }
  return (
    <div className="d-flex align-items-end">
      <p className={scoreClassName}>{props.percent}</p>
      <p style={{ marginBottom: 5, fontSize: props.height / 1.5, fontWeight: "bold" }}>/10</p>
    </div>
  );
};

const PercentTag = (props) => {
  if (props.percent > 8.5) {
    return <p className="text-success text-10">Excellent!</p>;
  } else if (props.percent > 5) {
    return <p className="text-primary text-10">Well Done</p>;
  } else if (props.percent > 3) {
    return <p className="text-warning text-10">Improve It</p>;
  } else {
    return <p className="text-danger text-10">Attention!</p>;
  }
};

const WordPercentTag = (props) => {
  if (props.percent <= 40) {
    return <p className="text-danger ai-review-text2">Too Slow</p>;
  } else if (props.percent > 40 && props.percent <= 80) {
    return <p className="text-warning ai-review-text2">Slow</p>;
  } else if (props.percent > 80 && props.percent <= 160) {
    return <p className="text-success ai-review-text2">Just Right</p>;
  } else if (props.percent > 160 && props.percent <= 200) {
    return <p className="text-warning ai-review-text2">Fast</p>;
  } else {
    return <p className="text-danger ai-review-text2">Too Fast</p>;
  }
};

const SpeedDesc = (props) => {
  if (props.percent <= 40) {
    return <p className="ai-review-text2" style={{marginBottom: "2rem"}}>Your pace is <span style={{color: "red"}}>too slow</span>. Speak fast</p>;
  } else if (props.percent > 40 && props.percent <= 80) {
    return <p className="ai-review-text2" style={{marginBottom: "2rem"}}>Your pace is <span style={{color: "orange"}}>slow</span>. Talk quickly</p>;
  } else if (props.percent > 80 && props.percent <= 160) {
    return <p className="ai-review-text2" style={{marginBottom: "2rem"}}>Your pace is <span style={{color: "green"}}>just right</span>. Keep it up</p>;
  } else if (props.percent > 160 && props.percent <= 200) {
    return <p className="ai-review-text2" style={{marginBottom: "2rem"}}>Your pace is <span style={{color: "orange"}}>fast</span>. Talk slowly</p>;
  } else {
    return <p className="ai-review-text2" style={{marginBottom: "2rem"}}>Your pace is <span style={{color: "red"}}>too fast</span>. Speak smoothly</p>;
  }
};

const WordReview = (props) => {
  return (
      <div style={{width: "95%", margin: "auto", marginBottom: "3rem", backgroundColor: "#F4F5FE"}}>
        <div className="row" style={{padding: "2rem", paddingBottom: "0"}}>
          <div className="col-5">
            <p className="ai-review-text1">{props.talkSpeed} words/minute</p>
            <SpeedDesc percent={props.talkSpeed} />
          </div>
          <div className="col-7">
            <WordProgressBar
                color={"green"}
                height={"15px"}
                percent={props.talkSpeed}
            />
          </div>
        </div>
        <div style={{padding: "2rem", paddingTop: "0"}}>
          <p className="ai-review-text1">{props.wordArray.length} filter word(s)</p>
          <p className="ai-review-text2">Avoid using filter words to sound more confident and succinct in your delivery</p>
          {props.wordArray.map(word => {
            return (
                <li className="ai-review-text3">{word}</li>
            )
          })}
        </div>
      </div>
  );
};

const AICategoryReview = (props) => {
  // category, percent
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <p style={{ fontFamily: "Avenir Next, Segoe UI",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "15px",
                      lineHeight: "18px",
                      display: "flex",
                      alignItems: "center"}}>
            {props.category}
           </p>
        </div>
        <div className="col-7">
          <ProgressBar
            color={"orange"}
            height={"8px"}
            percent={props.percent}
          />
        </div>
        <div className="col-2">
          <PercentTag percent={props.percent} />
        </div>
      </div>
      <br />
    </div>
  );
};
