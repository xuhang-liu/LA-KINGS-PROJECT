import React, {useState} from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, TestDeviceCard } from "./../practice/CardComponents";
import { videoRecorderOptions } from "./../../constants/constants";
import NotePad from "./../practice/NotePad";
//import safariAlert from "./../basic/SafariAlert";
import Modal from "react-bootstrap/Modal";

function TestDevice(props) {
  const [showFirst, setFirst] = useState(true);
  const hideFirst = () => {
    setFirst(false);
  };
  videoRecorderOptions.plugins.record.maxLength = 15;
//  videoRecorderOptions.width = window.innerWidth / 2.4;
//  videoRecorderOptions.height = window.innerWidth / 3.6;
  videoRecorderOptions.controlBar.recordToggle = true;
  const constraints = {
    audio: true,
    video: { width: 640, height: 480 }
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
    alert("No camera detected! Please turn on your camera!");
  };
  return (
    <React.Fragment>
      <ReadBeforeStart
        show={showFirst}
        hide={hideFirst}  
      />
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
    </React.Fragment>
  );
};

const ReadBeforeStart = (props) => {
  return(
      <Modal show={props.show} onHide={props.hide} centered={true} size="lg">
              <div className="container mt-5" style={{textAlign:"center"}}>
                  <h3 style={{color:"#090D3A"}}>
                      <b>Read carefully before start</b>
                  </h3>
              </div>
              <div className='container mt-3 mb-3' style={{width:"69%"}}>
                  <div className="row">
                      <div className="col-1 mt-2">
                          <i className='bx bx-chevron-right'></i>
                      </div>
                      <div className="col-11">
                          <p style={{fontSize:"18px"}}>
                              You <span style={{color:"#FF6B00"}}>cannot go back or re-record again</span> once you start recording the video.
                          </p>
                      </div>
                  </div>
                  <div className="row mt-2">
                      <div className="col-1 mt-2">
                          <i className='bx bx-chevron-right' style={{margin:"auto"}}></i>
                      </div>
                      <div className="col-11">
                          <p style={{fontSize:"18px"}}>
                              You <span style={{color:"#FF6B00"}}>cannot refresh or exit the page</span> until you complete the interview. 
                          </p>
                      </div>
                  </div>
                  <div className="row mt-2">
                      <div className="col-1 mt-2">
                          <i className='bx bx-chevron-right' style={{margin:"auto"}}></i>
                      </div>
                      <div className="col-11">
                          <p style={{fontSize:"18px"}}>
                              You have <span style={{color:"#FF6B00"}}>30 seconds</span> to prepare and take notes for each question.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="row mt-1 mb-4">
                  <div class="col text-center">
                      <button className="default-btn text-center" style={{paddingRight:"50px"}} onClick={props.hide}>
                          I Understand. Start Now
                      </button>
                  </div>
              </div>
          </Modal>
          )
}

export default TestDevice;
