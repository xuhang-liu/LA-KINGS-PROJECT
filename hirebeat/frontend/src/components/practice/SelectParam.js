import React, { Component } from "react";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
  categoryOfQuestionOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";
import AudioResponseWindow from "./AudioResponseWindow";
import TestDevice from "./TestDevice";
import TestAudioDevice from "./TestAudioDevice";
import { SetupCard, CardRow, CardButton, selectParam } from "./CardComponents";

export class SelectParam extends Component {
  state = {
    type: "behavior",
    paramsAreSet: false,
    audioParamIsSet: false,
    deviceTested: false,
    numberOfQuestions: { value: 3, label: "3" },
    lengthOfResponse: { value: 1, label: "60s" },
    categoryOfQuestion: { value: 1, label: "Random"},
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

  setAudioParam = () => {
    this.setState({ ...this.state, audioParamIsSet: true });
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

  handleChangeCatogary = (categoryOfQuestion) => {
    this.setState({ categoryOfQuestion });
  }

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
        {selectParam(
          "Which question catogary do you want to practice?",
          this.state.categoryOfQuestion,
          this.handleChangeCatogary,
          categoryOfQuestionOptions
        )}
        <CardRow>
          <h4>This will cost you {this.getEstimateTime()} on average</h4>
        </CardRow>
        <div className="row">
          <div className="col" style={{display: "flex", justifyContent: "center"}}>
            <CardButton
              onTap={this.setAudioParam}
              textDisplayed={"Start with Audio"}
              buttonWidth={"30%"}
            />
          </div>
          <div className="col" style={{display: "flex", justifyContent: "center"}}>
            <CardButton
              onTap={this.setParams}
              textDisplayed={"Start with Video"}
              buttonWidth={"30%"}
            />
          </div>
        </div>
      </SetupCard>
    );
  };

  render() {
    const { paramsAreSet, audioParamIsSet } = this.state
    // video test
    if (paramsAreSet === true) {
        return (
          <div className="container">
            {this.state.deviceTested ? (
              <ResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
              />
              ) : (
                <TestDevice testDeviceDone={this.testDeviceDone} />
              )
            }
          </div>
        );
    }
    // audio test
    else if (audioParamIsSet === true) {
        return (
          <div className="container">
            {this.state.deviceTested ? (
              <AudioResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
              />
              ) : (
                <TestAudioDevice testDeviceDone={this.testDeviceDone} />
              )
            }
          </div>
        );
    }
    else {
        return(
          <div className="container">
            { this.getQuestionsParams() }
          </div>
        );
    }
  }
}

export default SelectParam;
