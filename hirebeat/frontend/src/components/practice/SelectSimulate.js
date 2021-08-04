import React, { Component } from "react";
import {
  numberOfQuestionOptions,
  lengthOfResponseOptions,
} from "../../constants/constants";
import ResponseWindow from "./ResponseWindow";
import AudioResponseWindow from "./AudioResponseWindow";
import TestDevice from "./TestDevice";
import TestAudioDevice from "./TestAudioDevice";
import { CardRow, selectParam } from "./CardComponents";
import SmallPageTitleArea from '../Common/SmallPageTitleArea';
import Switch from "react-switch";
import LoadingForAi from "../shared/LoadingForAi";
import DocumentMeta from 'react-document-meta';

export class SelectParam extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  state = {
    type: "behavior",
    paramsAreSet: false,
    audioParamIsSet: false,
    checked: true,
    deviceTested: false,
    numberOfQuestions: { value: 2, label: "2" },
    lengthOfResponse: { value: 1, label: "60s" },
    categoryOfQuestion: { value: 1, label: "Random"},
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

  getEstimateTime = () => {
    return (
      <a style={{ color: "#f3a340", textDecorationLine: "underline" }}>
        {(this.state.lengthOfResponse.value + 0.5) *
          (this.state.numberOfQuestions.value)} minutes
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
        <SmallPageTitleArea
          pageTitle="Step 3: Set up Your Practice"
          style={{marginBottom: "2rem"}}
        />
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
          <h4 className="practice-txt2">This will take you {this.getEstimateTime()} on average</h4>
        </CardRow>
        {notSafari &&
        <CardRow>
          <h3 className="practice-txt3" style={{marginRight: "1rem"}}>Start with video? </h3>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </CardRow>}
        <CardRow>
          <button className="start-btn" onClick={this.selectMedia}>Start Practice</button>
        </CardRow>
      </div>
    );
  };

  render() {
    const meta = {
      title: 'HireBeat – Simulate Practice Mode',
      description: 'Simulate Practice Mode Info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Interview Practice, Behavioral Question, Technical Question, Mock Interview'
        }
      }
    };
    const { paramsAreSet, audioParamIsSet } = this.state
    // video test
    if(this.state.loading){
      return
      <DocumentMeta {...meta}>
      <div>
        <LoadingForAi interview={true}/>
      </div>
      </DocumentMeta>
    }
    if (paramsAreSet === true) {
        return (
          <DocumentMeta {...meta}>
          <div className="container">
            {this.state.deviceTested ? (
              <ResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
                isSimulate={true}
                goLoading={()=>{this.setState({loading: true})}}
              />
              ) : (
                <TestDevice testDeviceDone={this.testDeviceDone} />
              )
            }
          </div>
          </DocumentMeta>
        );
    }
    // audio test
    else if (audioParamIsSet === true) {
        return (
          <DocumentMeta {...meta}>
          <div className="container">
            {this.state.deviceTested ? (
              <AudioResponseWindow
                questionType={this.state.type}
                questionNumber={this.state.numberOfQuestions.value}
                responseLength={this.state.lengthOfResponse.value}
                questionCategory={this.state.categoryOfQuestion.label}
                isSimulate={true}
                goLoading={()=>{this.setState({loading: true})}}
              />
              ) : (
                <TestAudioDevice testDeviceDone={this.testDeviceDone} />
              )
            }
          </div>
          </DocumentMeta>
        );
    }
    else {
        return(
          <DocumentMeta {...meta}>
          <div style={{marginBottom:"5%"}}>
            { this.getQuestionsParams() }
          </div>
          </DocumentMeta>
        );
    }
  }
}

export default SelectParam;
