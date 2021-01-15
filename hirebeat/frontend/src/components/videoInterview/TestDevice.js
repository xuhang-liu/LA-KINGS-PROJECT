import React from "react";
import VideoRecorder from "./../practice/VideoRecorder";
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
        <div
          className="video-recorder-row"
          style={{ marginLeft: 0, paddingLeft: 0 }}
        >
          <VideoRecorder {...videoRecorderOptions} isTesting={true} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
              width: "40%",
            }}
          >
            {/*<p className="text-muted">Test device again</p>
            <CardButton
              onTap={}
              textDisplayed={"Retry"}
              buttonWidth={"75%"}
              fontFamily={"Avenir Next"}
            />*/}
            <p className="text-muted">Everything goes well?</p>
            <CardButton
              onTap={props.testDeviceDone}
              textDisplayed={"Start Interview"}
              buttonWidth={"75%"}
              fontFamily={"Avenir Next"}
            />
          </div>
        </div>
      </div>
      <NotePad />
    </TestDeviceCard>
  );
};

export default TestDevice;
