import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import behaviorIcon from "../../assets/behavior_icon.png";
import techIcon from "../../assets/tech_icon.png";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";

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
      <div className="dashboard-container" style={{marginBottom:"10%"}}>
      <MediaQuery minDeviceWidth={1224}>
      <SetupCard>
        <CardRow>
          <h5>Create A New Mock Interview</h5>
        </CardRow>
        <CardRow>
          <h1>Choose Interview Category</h1>
        </CardRow>
        <div className="row setup-card-row-bottom">
          {ButtonContainer(
            behaviorIcon,
            this.redirectToBehaviorQuestions,
            "Behavioral Question"
          )}
          {ButtonContainer(
            techIcon,
            this.redirectToTechQuestions,
            "Technical Question"
          )}
        </div>
      </SetupCard>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div style={{fontSize:"1.6rem"}}><b>Please Login with your computer for the full functionalities.</b></div>
      </MediaQuery>
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(QuestionTypeChoices);
