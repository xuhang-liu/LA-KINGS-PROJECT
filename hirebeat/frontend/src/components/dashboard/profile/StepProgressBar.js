import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={this.props.percent}
        filledBackground="linear-gradient(to right, #A3EEFF, #4556F3)"
      >
        <Step transition="scale">
          {({ accomplished, index }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://hirebeat-assets.s3.amazonaws.com/profile-icon1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://hirebeat-assets.s3.amazonaws.com/profile-icon1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://hirebeat-assets.s3.amazonaws.com/profile-icon1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://hirebeat-assets.s3.amazonaws.com/profile-icon1.png"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className="row">
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://hirebeat-assets.s3.amazonaws.com/profile-icon2.png"
              />
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;