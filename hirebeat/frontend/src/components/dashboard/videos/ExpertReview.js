import React from "react";
import {
  ReviewHeader,
  QuestionTitle,
  Comments,
  CategoryTitle,
} from "../DashboardComponents";
import Chart from "react-apexcharts";
import {
  infillOverallData,
  infillBarData,
  convertStringToArray,
} from "../../../constants/constants";

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
    <div className="container height-550">
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
    </div>
  );
}
