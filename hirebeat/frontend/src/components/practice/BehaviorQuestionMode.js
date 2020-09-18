import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";
import PageTitleArea from '../Common/PageTitleArea';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 100);
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
        <div className="row" style={{margin: "auto", width: "70%", marginTop: "8%"}}>
          <div className="col features-box" style={{marginLeft: "5%"}}>
          <Link style={{textDecoration: "none"}} onClick={this.redirectToBQPracticeMode}>
            <div style={{padding: "10%"}}>
            <div className="icon">
              <i className='bx bx-bullseye'></i>
            </div>
              <h3 className="practice-h3">Practice Mode</h3>
              <p className="mode-col-text1">Select one specific category and <br/> practice to perfect.</p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
            </Link>
          </div>
          <div className="col features-box" style={{marginLeft: "6rem"}}>
          <Link style={{textDecoration: "none"}} onClick={this.redirectToBQSimulateMode}>
            <div style={{padding: "10%"}}>
            <div className="icon">
              <i className='bx bx-bolt-circle'></i>
            </div>
              <h3 className="practice-h3">Simulate Mode</h3>
              <p className="mode-col-text1">Include all categories and <br/> practice questions randomly.</p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
            </Link>
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
