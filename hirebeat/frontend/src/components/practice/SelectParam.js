import React, { Component } from "react";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
  categoryOfQuestionOptions,
  difficultyOfQuestionOptions
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";
import AudioResponseWindow from "./AudioResponseWindow";
import TestDevice from "./TestDevice";
import TestAudioDevice from "./TestAudioDevice";
import { CardRow, selectParam } from "./CardComponents";
import PageTitleArea from '../Common/PageTitleArea';
import Switch from "react-switch";
import LoadingForAi from "../shared/LoadingForAi";

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
    numberOfQuestions: { value: 2, label: "2" },
    lengthOfResponse: { value: 1, label: "60s" },
    categoryOfQuestion: { value: 1, label: "Positive Attitude"},
    difficultyOfQuestion: { value: 1, label: "Common Question"},
    loading: false,
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

  handleChangeDifficulty = (difficultyOfQuestion) => {
    this.setState({ difficultyOfQuestion });
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  getEstimateTime = () => {
    return (
      <a style={{ color: "#f3a340", textDecorationLine: "underline" }}>
        {(this.state.lengthOfResponse.value + 0.5) *
          (this.state.numberOfQuestions.value) + 0.5}
        mins
      </a>
    );
  };

  getQuestionsParams = () => {
    var notSafari = true;
    if (
      (navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")) != -1
    ) {
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
      notSafari = false;
    };
    return (
      <div>
        <PageTitleArea
          pageTitle="Set Up Your Exercise"
          pageDescription="Create A New Mock Interview"
          style={{marginBottom: "2rem"}}
        />
        {selectParam(
          "Choose the difficulty for your questions",
          this.state.difficultyOfQuestion,
          this.handleChangeDifficulty,
          difficultyOfQuestionOptions,
          "select-difficulty"
          )}
        {selectParam(
          "Select one specific category",
          this.state.categoryOfQuestion,
          this.handleChangeCatogary,
          categoryOfQuestionOptions,
          "select-category1"
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
        {notSafari &&
        <CardRow>
          <h3 className="practice-txt3" style={{marginRight: "1rem"}}>Start with video? </h3>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </CardRow>}
        <CardRow>
          <button className="start-btn" onClick={this.selectMedia}>Start Exercise</button>
        </CardRow>
      </div>
    );
  };

  render() {
    const { paramsAreSet, audioParamIsSet } = this.state
    // video test
    if(this.state.loading){
      return <div>
        <LoadingForAi interview={true}/>
      </div> 
    }
    else if (paramsAreSet === true) {
        return (
          <div className="container-fluid">
            {this.state.deviceTested ? (
              <ResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
                questionDifficulty={this.state.difficultyOfQuestion.value}
                isSimulate={false}
                goLoading={()=>{this.setState({loading: true})}}
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
          <div className="container-fluid">
            {this.state.deviceTested ? (
              <AudioResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
                questionDifficulty={this.state.difficultyOfQuestion.value}
                isSimulate={false}
                goLoading={()=>{this.setState({loading: true})}}
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
          <div style={{marginBottom:"5%"}}>
            { this.getQuestionsParams() }
          </div>
        );
    }
  }
}

export default SelectParam;
