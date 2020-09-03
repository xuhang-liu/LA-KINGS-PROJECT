import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import behaviorIcon from "../../assets/behavior_icon.png";
import techIcon from "../../assets/tech_icon.png";
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
    if (history) history.push(`/practice/behavior`);
  };

  redirectToTechQuestions = () => {
    const { history } = this.props;
    if (history) history.push(`/techfields/`);
  };

  render() {
    return (
      <React.Fragment>
      <ScrollToTopOnMount />
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
      </React.Fragment>
    );
  }
}

export default withRouter(QuestionTypeChoices);
