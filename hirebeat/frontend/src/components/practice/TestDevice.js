import React from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, TestDeviceCard } from "./CardComponents";
import { videoRecorderOptions } from "../../constants/constants";
import safariAlert from "../basic/SafariAlert";

function TestDevice(props) {
  videoRecorderOptions.plugins.record.maxLength = 15;
  videoRecorderOptions.width = window.innerWidth / 2.4;
  videoRecorderOptions.height = window.innerWidth / 3.6;
  safariAlert();
  return (
    <TestDeviceCard>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ paddingTop: 20 }}
      >
        <h3>To Test Your Device</h3>
        <h4>
          A 15-second video clip will be recorded. Please replay the clip to
          ensure your microphone and camera are working.
        </h4>
      </div>
      <div style={{ marginTop: 20 }}>
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
            <p className="text-muted">Everything goes well?</p>
            <CardButton
              onTap={props.testDeviceDone}
              textDisplayed={"Start Practice"}
              buttonWidth={"75%"}
            />
          </div>
        </div>
      </div>
    </TestDeviceCard>
  );
}

export default TestDevice;
