import React, { Component } from "react";

export class CountdownBar extends Component {
  state = {
    timeTotal: 45,
    timeRemain: 45,
    intervalID: 0,
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      timeTotal: this.props.timeTotal,
      timeRemain: this.props.timeTotal,
    });
    if (this.props.status == "Recording") {
      this.startCountDown();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status != this.props.status) {
      clearInterval(this.state.intervalID);
      this.setState(
        {
          ...this.state,
          timeRemain: this.props.timeTotal,
          timeTotal: this.props.timeTotal,
        },
        () => {
          // Callback to fire the timer
          if (
            this.props.status != "Your Answer" &&
            this.props.status != "Loading"
          ) {
            this.startCountDown();
          }
        }
      );
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
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
    }
  };

  render() {
    var percent = (this.state.timeRemain / this.state.timeTotal) * 100;
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="progress" style={{ width: "120px" }}>
          <div
            className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: percent.toString() + "%" }}
          />
        </div>
        <p
          className="text-warning"
          style={{ marginBottom: "2px", marginRight: "3px", marginLeft: "8px" }}
        >
          {this.state.timeRemain}s
        </p>
        <p style={{ color: "white", marginBottom: "2px" }}>left</p>
      </div>
    );
  }
}

export default CountdownBar;
