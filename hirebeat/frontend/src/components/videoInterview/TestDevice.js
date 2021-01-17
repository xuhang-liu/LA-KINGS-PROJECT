import React from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, TestDeviceCard } from "./../practice/CardComponents";
import { videoRecorderOptions } from "./../../constants/constants";
import NotePad from "./../practice/NotePad";
import safariAlert from "./../basic/SafariAlert";

function TestDevice(props) {
  videoRecorderOptions.plugins.record.maxLength = 15;
//  videoRecorderOptions.width = window.innerWidth / 2.4;
//  videoRecorderOptions.height = window.innerWidth / 3.6;
  videoRecorderOptions.controlBar.recordToggle = true;
  safariAlert();
  return (
    <TestDeviceCard>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ paddingTop: 20}}
      >
        <h4 className="interview-txt3">
          <span style={{color: "#67A3F3"}}>Sample Question:</span> Tell me about yourself.
        </h4>
        <p className="interview-txt4">Your answer will not be evaluated. Replay the video to ensure that your microphone and camera are working</p>
      </div>
      <div style={{ marginTop: "2rem" }}>
          <VideoRecorder {...videoRecorderOptions} isTesting={true} retry={true} testDeviceDone={props.testDeviceDone} />
      </div>
      <NotePad />
    </TestDeviceCard>
  );
};

export default TestDevice;
