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
import PageTitleArea from '../Common/PageTitleArea';
import Switch from "react-switch";

export class SelectParam extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    type: "behavior",
    paramsAreSet: false,
    audioParamIsSet: false,
    checked: true,
    deviceTested: false,
    numberOfQuestions: { value: 3, label: "3" },
    lengthOfResponse: { value: 1, label: "60s" },
    categoryOfQuestion: { value: 1, label: "Positive Attitude"},
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

  selectMedia = () => {
    if (this.state.checked === true) {
      this.setParams();
    }
    else {
      this.setAudioParam();
    }
  }

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

  handleChange(checked) {
    this.setState({ checked });
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
      <div>
        <PageTitleArea
          pageTitle="Set Up Your Exercise"
          pageDescription="Create A New Mock Interview"
          style={{marginBottom: "2rem"}}
        />
        {selectParam(
          "Select one specific category",
          this.state.categoryOfQuestion,
          this.handleChangeCatogary,
          categoryOfQuestionOptions,
          "select-category"
          )}
        {selectParam(
          "How many questions do you want to practice?",
          this.state.numberOfQuestions,
          this.handleChangeNumber,
          numberOfQuestionOptions,
          "select-question-count"
        )}
        {selectParam(
          "How long should each response be?",
          this.state.lengthOfResponse,
          this.handleChangeLength,
          lengthOfResponseOptions,
          "select-time"
        )}
        <CardRow>
          <h4 className="practice-txt2">This will cost you {this.getEstimateTime()} on average</h4>
        </CardRow>
        <CardRow>
          <h3 className="practice-txt3" style={{marginRight: "1rem"}}>Start with video? </h3>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </CardRow>
        <CardRow>
          <button className="start-btn" onClick={this.selectMedia}>Start Exercise</button>
        </CardRow>
      </div>
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
                isSimulate={false}
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
                isSimulate={false}
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
          <div>
            { this.getQuestionsParams() }
          </div>
        );
    }
  }
}

export default SelectParam;
