import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
//import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";
import SmallPageTitleArea from '../Common/SmallPageTitleArea';

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
        <SmallPageTitleArea
          pageTitle="Step 2: Choose Practice Mode"
          style={{marginBottom: "2rem"}}
        />
        <div className="row" style={{margin: "auto", width: "70%", marginTop: "3%"}}>
          <div className="col features-box" style={{marginLeft: "5%", backgroundColor:"#ffffff"}}>
              <button onClick={this.redirectToBQPracticeMode} style={{border: "none", background: "white", width: "21.6rem"}}>
                <div style={{padding: "10%", textAlign: "left"}}>
                <div className="icon" style={{borderRadius: "15px"}}>
                  <img src="https://hirebeat-assets.s3.amazonaws.com/single-type.png" />
                </div>
                  <h3 className="practice-h3">Single Category</h3>
                  <p className="mode-col-text1">Select one specific category and <br/> practice to perfect.</p>
                  <p className="mode-col-text2">Next Step -> </p>
                </div>
              </button>
          </div>
          <div className="col features-box" style={{marginLeft: "6rem", backgroundColor:"#ffffff"}}>
              <button onClick={this.redirectToBQSimulateMode} style={{border: "none", background: "white", width: "21.6rem"}} >
                <div style={{padding: "10%", textAlign: "left"}}>
                <div className="icon" style={{borderRadius: "15px"}}>
                  <img src="https://hirebeat-assets.s3.amazonaws.com/mix-type.png" />
                </div>
                  <h3 className="practice-h3">Mixed Categories</h3>
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
