import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import behaviorIcon from "../../assets/behavior_icon.png";
import techIcon from "../../assets/tech_icon.png";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";
import PageTitleArea from '../Common/PageTitleArea';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class QuestionTypeChoices extends Component {
  redirectToBehaviorQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/modes`);
  };

  redirectToTechQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/techfields/`);
  };

  componentDidMount() {
    safariAlert();
  }

  render() {
    return (
      <React.Fragment>
      <ScrollToTopOnMount />
      <div style={{marginBottom:"10%"}}>
      <MediaQuery minDeviceWidth={1224}>
        <PageTitleArea
          pageTitle="Choose Interview Category"
          pageDescription="Create A New Mock Interview"
          style={{marginBottom: "2rem"}}
        />
        <div className="row" style={{marginTop:"8%",marginLeft:"25%", width:"70%"}}>
          <div className="features-box" >
            <i className="bx bx-user-voice bx-md question-icon"></i>
            <br/>
            <h3 style={{fontFamily: "Poppins"}}> Behavioral Question</h3>
            <p style={{fontFamily: "Poppins"}}>
            Prepare about how you've<br/>
            overcome previous professional<br/>
            challenges, reached success and<br/>
            navigated difficult decisions.</p>
            <Link onClick={this.redirectToBehaviorQuestions}><p style={{fontFamily: "Poppins", color: '#13C4A1'}}>Next step -></p></Link>
          </div>
          <div className="features-box" style={{marginLeft: '10%'}}>
            <i className="bx bx-extension bx-md question-icon"></i>
            <h3 style={{fontFamily: "Poppins"}}>Technical Question</h3>
            <p style={{fontFamily: "Poppins"}}>
            Polish your hard skills from project<br/>
            management to analyzing<br/>
            business needs and executing<br/>
            quality testing.</p>
            <Link onClick={this.redirectToTechQuestions}><p style={{fontFamily: "Poppins", color: '#13C4A1'}}>Next step -></p></Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1223}>
        <div style={{fontSize:"1.6rem"}}><b>Please Login with your computer for the full functionalities.</b></div>
      </MediaQuery>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(QuestionTypeChoices);
