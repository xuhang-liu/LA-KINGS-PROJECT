import React from "react";
import {
  ReviewHeader,
  Comments,
  CategoryTitle,
} from "../DashboardComponents";
//import MediaQuery from 'react-responsive';
import Chart from "react-apexcharts";
import {
  infillOverallData,
  infillBarData,
  convertStringToArray,
} from "../../../constants/constants";
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import { Link } from "react-router-dom";

const OverallScore = (props) => {
  var options = infillOverallData(props.percent);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={140}
      key={"overall"}
    />
  );
};

export function ExpertReview(props) {
  var categoryArray = convertStringToArray(props.v.expert_review_categories);
  var percentArray = convertStringToArray(props.v.expert_category_score);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
            <h3 className="ml-4" style={{color:"#4A6F8A"}}>{props.v.q_description} </h3>
            <div className="ml-4" style={{maxWidth:"40rem"}}>
            {
            (props.isAudio) ?
                    <AudioPlayer url={props.v.url} />
                : <VideoPlayer url={props.v.url} />
            }
            </div>
            <h6 className="ml-5 my-5" style={{color:"#13C4A1"}}>
                You really aced this question!  You have scored higher than 90% of other candidates.
            </h6>
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
          <div className="row">
            <div className="col score-col">
              <CategoryTitle title={"Overall Score"} />
              <OverallScore percent={props.v.expert_score} />
            </div>
            {categoryArray.map((c, index) => {
              var options = infillBarData(percentArray[index]);
              return (
                <div className="col score-col" key={index + c}>
                  <CategoryTitle title={c} key={c} />
                  <Chart
                    options={options.options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
          <h3 className="text-20" style={{ color: "#4689FA", display: "flex" }}>Comments:</h3>
          <Comments comments={props.v.comments} />
        </div>
      </div>
    {/*<div className="container height-550">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <div className="row">
        <div className="col score-col">
          <CategoryTitle title={"Overall Score"} />
          <OverallScore percent={props.v.expert_score} />
        </div>
        {categoryArray.map((c, index) => {
          var options = infillBarData(percentArray[index]);
          return (
            <div className="col score-col" key={index + c}>
              <CategoryTitle title={c} key={c} />
              <Chart
                options={options.options}
                series={options.series}
                type="radialBar"
                height={150}
                key={index}
              />
            </div>
          );
        })}
      </div>
      <h3 className="text-20" style={{ color: "#4689FA", display: "flex" }}>Comments:</h3>
      <Comments comments={props.v.comments} />
    </div>*/}
  </div>
  );
}
