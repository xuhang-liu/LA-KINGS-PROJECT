import React from "react";
import AudioRecorder from "./AudioRecorder";
import { CardButton, TestDeviceCard } from "./CardComponents";
import { audioRecorderOptions } from "../../constants/constants";
//import safariAlert from "../basic/SafariAlert";

function TestAudioDevice(props) {
  audioRecorderOptions.plugins.record.maxLength = 15;
  audioRecorderOptions.controlBar.recordToggle = true;
  const constraints = {
    audio: true,
  };
  function openCamera() {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(success)
      .catch(error);
  };
  openCamera();
  function success() {
    console.log("Device Ready");
  };

  function error() {
    alert("No microphone detected！ Please turn on your microphone!");
  };
  return (
    <TestDeviceCard>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ paddingTop: 20 }}
      >
        <h3>To Test Your Device</h3>
        <h4>
          A 15-second audio clip will be recorded. Please replay the clip to
          ensure your microphone is working.
        </h4>
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        <div
          className="video-recorder-row"
          style={{ marginLeft: 0, paddingLeft: 0 }}
        >
          <AudioRecorder {...audioRecorderOptions} isTesting={true} retry={true} testDeviceDone={props.testDeviceDone}/>
        </div>
      </div>
    </TestDeviceCard>
  );
}

export default TestAudioDevice;
