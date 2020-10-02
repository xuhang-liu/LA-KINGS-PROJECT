import React from "react";
import Chart from "react-apexcharts";

import {
  DbRow,
  QuestionTitle,
} from "../DashboardComponents";

export function SampleAnswer(props) {
  var explain = props.v.q_explain;
  var answer = props.v.q_answer;
  return (
    <div className="container">
      <DbRow>
        <div className="col-2"/>
        <div className="col-8 d-flex justify-content-center align-items-center">
            <strong className="text-20" style={{color: "#7D7D7D"}}>Review Your Sample Answer</strong>
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
    </div>
  );
}

