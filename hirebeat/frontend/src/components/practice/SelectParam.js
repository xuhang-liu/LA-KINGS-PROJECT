import React, { Component } from "react";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";
import TestDevice from "./TestDevice";
import { SetupCard, CardRow, CardButton, selectParam } from "./CardComponents";

export class SelectParam extends Component {
  state = {
    type: "behavior",
    paramsAreSet: false,
    deviceTested: false,
    numberOfQuestions: { value: 3, label: "3" },
    lengthOfResponse: { value: 1, label: "60s" },
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      type: this.props.match.params.type, // get param from url
    });
  }

  setParams = () => {
    this.setState({ ...this.state, paramsAreSet: true });
  };

  testDeviceDone = () => {
    this.setState({ ...this.state, deviceTested: true });
  };

  handleChangeNumber = (numberOfQuestions) => {
    this.setState({ numberOfQuestions });
  };

  handleChangeLength = (lengthOfResponse) => {
    this.setState({ lengthOfResponse });
  };

  getEstimateTime = () => {
    return (
      <a style={{ color: "#f3a340", textDecorationLine: "underline" }}>
        {(3 * this.state.lengthOfResponse.value + 0.5) *
          this.state.numberOfQuestions.value}
        mins
      </a>
    );
  };

  getQuestionsParams = () => {
    return (
      <SetupCard>
        <CardRow>
          <h5>Create A New Mock Interview</h5>
        </CardRow>
        <CardRow>
          <h1>Set Your Practice Time</h1>
        </CardRow>
        {selectParam(
          "How many questions do you want to practice?",
          this.state.numberOfQuestions,
          this.handleChangeNumber,
          numberOfQuestionOptions
        )}
        {selectParam(
          "How long should each response be?",
          this.state.lengthOfResponse,
          this.handleChangeLength,
          lengthOfResponseOptions
        )}
        <CardRow>
          <h4>This will cost you {this.getEstimateTime()} on average</h4>
        </CardRow>
        <CardRow>
          <CardButton
            onTap={this.setParams}
            textDisplayed={"Test & Start"}
            buttonWidth={"30%"}
            fontFamily={"Lato"}
          />
        </CardRow>
      </SetupCard>
    );
  };

  render() {
    return (
      <div className="container">
        {this.state.paramsAreSet ? (
          this.state.deviceTested ? (
            <ResponseWindow
              questionType={this.state.type}
              questionNumber={this.state.numberOfQuestions.value}
              responseLength={this.state.lengthOfResponse.value}
            />
          ) : (
            <TestDevice testDeviceDone={this.testDeviceDone} />
          )
        ) : (
          this.getQuestionsParams()
        )}
      </div>
    );
  }
}

export default SelectParam;
