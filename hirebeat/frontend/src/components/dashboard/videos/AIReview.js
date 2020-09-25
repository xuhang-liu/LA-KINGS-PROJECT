import React from "react";
import Chart from "react-apexcharts";
import {
  radialChartOptions,
  infillChartData,
  convertStringToArray,
} from "../../../constants/constants";
import {
  ReviewHeader,
  QuestionTitle,
  CategoryTitle,
} from "../DashboardComponents";

export function AIReview(props) {
  var categoryArray = convertStringToArray(props.v.ai_review_categories);
  var percentArray = convertStringToArray(props.v.ai_category_score);
  infillChartData(categoryArray, percentArray);
  return (
    <div className="container height-700">
      <ReviewHeader setSubPage={() => props.setSubPage("status")} />
      <QuestionTitle title={props.v.q_description} />
      <CategoryTitle title={"Overall Score"} />
      <ProgressBar color={"blue"} height={15} percent={props.v.ai_score} />
      <div className="row">
        <div className="col-5">
          <div id="chart">
            <Chart
              options={radialChartOptions.options}
              series={radialChartOptions.series}
              type="radar"
              height={350}
            />
          </div>
        </div>
        <div className="col-7">
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
    return <p className="text-warning text-10">You Can Improve</p>;
  } else {
    return <p className="text-danger text-10">Needs Attention!</p>;
  }
};

const AICategoryReview = (props) => {
  // category, percent
  return (
    <div>
      <br />
      <div className="row">
        <div className="col-3 d-flex align-items-center">
          <p style={{ fontFamily: "Poppins",
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
