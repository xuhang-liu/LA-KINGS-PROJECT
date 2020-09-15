import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import practiceIcon from "../../assets/practice_icon.png";
import simulateIcon from "../../assets/simulate_icon.png";
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

export class BehaviorQuestionMode extends Component {
  redirectToBQPracticeMode = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/modes/practice`);
  };

   redirectToBQSimulateMode = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/modes/simulate`);
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
          pageTitle="Choose Exercise Mode"
          pageDescription="Create A New Mock Interview"
          style={{marginBottom: "2rem"}}
        />
        <div className="row" style={{margin: "auto", width: "70%"}}>
          <div className="col features-box" style={{marginLeft: "5%"}}>
            <div style={{padding: "10%"}}>
              <img src={practiceIcon} />
              <h3>Practice Mode</h3>
              <p className="mode-col-text1">Select one specific category and <br/> practice to perfect.</p>
              <Link style={{textDecoration: "none"}} onClick={this.redirectToBQPracticeMode}><p className="mode-col-text2">Next Step -> </p></Link>
            </div>
          </div>
          <div className="col features-box" style={{marginLeft: "6rem"}}>
            <div style={{padding: "10%"}}>
              <img src={simulateIcon} />
              <h3>Simulate Mode</h3>
              <p className="mode-col-text1">Include all categories and <br/> practice questions randomly.</p>
              <Link style={{textDecoration: "none"}} onClick={this.redirectToBQSimulateMode}><p className="mode-col-text2">Next Step -> </p></Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div style={{fontSize:"1.6rem"}}><b>Please Login with your computer for the full functionalities.</b></div>
      </MediaQuery>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(BehaviorQuestionMode);
