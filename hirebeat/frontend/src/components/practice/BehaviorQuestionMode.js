import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
//import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
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

  render() {
    return (
      <React.Fragment>
      <section className="pricing-area pb-70 bg-f4f5fe">
      <ScrollToTopOnMount />
      <div style={{marginBottom:"10%"}}>
      <MediaQuery minDeviceWidth={1224}>
        <PageTitleArea
          pageTitle="Choose Exercise Mode"
          pageDescription="Create A New Mock Interview"
          style={{marginBottom: "2rem"}}
        />
        <div className="row" style={{margin: "auto", width: "70%", marginTop: "8%"}}>
          <div className="col features-box" style={{marginLeft: "5%", backgroundColor:"#ffffff"}}>
              <button onClick={this.redirectToBQPracticeMode} style={{border: "none", background: "white", width: "21.6rem"}}>
                <div style={{padding: "10%", textAlign: "left"}}>
                <div className="icon">
                  <i className='bx bx-bullseye'></i>
                </div>
                  <h3 className="practice-h3">Practice Mode</h3>
                  <p className="mode-col-text1">Select one specific category and <br/> practice to perfect.</p>
                  <p className="mode-col-text2">Next Step -> </p>
                </div>
              </button>
          </div>
          <div className="col features-box" style={{marginLeft: "6rem", backgroundColor:"#ffffff"}}>
              <button onClick={this.redirectToBQSimulateMode} style={{border: "none", background: "white", width: "21.6rem"}} >
                <div style={{padding: "10%", textAlign: "left"}}>
                <div className="icon">
                  <i className='bx bx-bolt-circle'></i>
                </div>
                  <h3 className="practice-h3">Simulate Mode</h3>
                  <p className="mode-col-text1">Include all categories and practice<br/> questions randomly.</p>
                  <p className="mode-col-text2">Next Step -> </p>
                </div>
              </button>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div style={{fontSize:"1.6rem"}}><b>Please Login with your computer for the full functionalities.</b></div>
      </MediaQuery>
      </div>
      </section>
      </React.Fragment>
    );
  }
}

export default withRouter(BehaviorQuestionMode);
