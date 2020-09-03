import React, { Component } from "react";
import { CardButton, CardRow, StyledLink } from "./CardComponents";

export class PrepCountdown extends Component {
  state = {
    timeRemain: 30,
    intervalID: 0,
  };

  componentDidMount() {
    this.startCountDown();
  }

  startCountDown = () => {
    var intervalID = setInterval(this.countDown, 1000);
    this.setState({ ...this.state, intervalID: intervalID });
  };

  countDown = () => {
    if (this.state.timeRemain > 0) {
      this.setState({
        ...this.state,
        timeRemain: this.state.timeRemain - 1,
      });
    } else {
      clearInterval(this.state.intervalID);
      this.props.finishCountdown();
    }
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  render() {
    return (
      <div className="video-recorder-row">
        <div className="col-8">
          <div
            className="prep-countdown-container"
            style={{
              width: window.innerWidth / 2.4,
              backgroundColor: "black",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <br />
            <br />
            <CardRow>
              <CardButton
                onTap={this.props.finishCountdown}
                textDisplayed={"Start Recording"}
                buttonWidth={"30%"}
                fontFamily={"Lato"}
              />
            </CardRow>
          </div>
        </div>
        <div className="col-3" />
      </div>
    );
  }
}

export default PrepCountdown;
