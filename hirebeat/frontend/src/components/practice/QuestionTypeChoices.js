import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";
import PageTitleArea from '../Common/PageTitleArea';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 100);
  }, []);

  return null;
}

export class QuestionTypeChoices extends Component {
  redirectToBehaviorQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/practice/modes`);
  };

  redirectToTechQuestions = () => {
    confirmAlert({
      title: 'Feature is coming soon',
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
    //const { history } = this.props;
    //if (history) history.push(`/techfields/`);
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
        <div className="row" style={{margin: "auto", width: "70%", marginTop: "8%"}}>
        <div className="col features-box" style={{marginLeft: "5%"}}>
        <Link style={{textDecoration: "none"}} onClick={this.redirectToBehaviorQuestions}>
            <div style={{padding: "10%"}}>
            <div className="icon">
              <i className='bx bx-user-voice'></i>
            </div>
              <h3 className="practice-h3">Behavioral Question</h3>
              <p className="mode-col-text1">
                Prepare about how you’ve <br/>
                overcome previous professional <br/>
                challenges, reached success and <br/>
                navigated difficult decisions.
              </p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
            </Link>
          </div>
          <div className="col features-box" style={{marginLeft: "6rem"}}>
          <Link style={{textDecoration: "none"}} onClick={this.redirectToTechQuestions}>
            <div style={{padding: "10%"}}>
            <div className="icon">
              <i className='bx bx-extension'></i>
            </div>
              <h3 className="practice-h3">Technical Question</h3>
              <p className="mode-col-text1">
                Polish your hard skills from project <br/>
                management to analyzing <br/>
                 business needs and executing <br/>
                 quality testing.
              </p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
            </Link>
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
