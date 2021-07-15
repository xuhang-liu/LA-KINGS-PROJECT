import React, {useState} from "react";
import AudioRecorder from "./AudioRecorder";
import { CardButton, TestDeviceCard } from "./../practice/CardComponents";
import { audioRecorderOptions } from "./../../constants/constants";
import Modal from "react-bootstrap/Modal";

function TestAudioDevice(props) {
  const [showAlert, setShowAlert] = useState(false);

  function enableAlert() {
    setShowAlert(true);
  }

  function disableAlert() {
    setShowAlert(false);
  }

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
    <React.Fragment>
      <ReadBeforeStart
          showAlert={showAlert}
          hideAlert={disableAlert}
          prepareTime={props.prepareTime}
          beginRecord={props.beginRecord}
      />
      <TestDeviceCard>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ paddingTop: 20 }}
          >
            <h3>Test Your Device</h3>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
              <AudioRecorder {...audioRecorderOptions} isTesting={true} retry={true} testDeviceDone={enableAlert}/>
          </div>
      </TestDeviceCard>
    </React.Fragment>
  );
}

const ReadBeforeStart = (props) => {
  return(
      <Modal show={props.showAlert} onHide={props.hideAlert} centered={true} size="lg">
          <div className="container mt-5" style={{textAlign:"center"}}>
              <h3 style={{color:"#090D3A"}}>
                  <b>Read carefully before start</b>
              </h3>
          </div>
          <div className='container mt-3 mb-3' style={{width:"69%"}}>
              <div className="row">
                  <div className="col-1 mt-2">
                      <i style={{color:"#56a3fa"}} className="bx bx-bullseye pr-1"></i>
                  </div>
                  <div className="col-11">
                      <p style={{fontSize:"18px"}}>
                          You <span style={{color:"#FF6B00"}}>cannot go back or re-record again</span> once you start recording the video.
                      </p>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-1 mt-2">
                      <i style={{color:"#56a3fa"}} className="bx bx-bullseye pr-1"></i>
                  </div>
                  <div className="col-11">
                      <p style={{fontSize:"18px"}}>
                          You <span style={{color:"#FF6B00"}}>cannot refresh or exit the page</span> until you complete the interview.
                      </p>
                  </div>
              </div>
              <div className="row mt-2">
                  <div className="col-1 mt-2">
                      <i style={{color:"#56a3fa"}} className="bx bx-bullseye pr-1"></i>
                  </div>
                  <div className="col-11">
                      <p style={{fontSize:"18px"}}>
                          You have <span style={{color:"#FF6B00"}}>{props.prepareTime} seconds</span> to prepare and take notes for each question.
                      </p>
                  </div>
              </div>
          </div>
          <div className="row mt-1 mb-4">
              <div class="col text-center">
                  <button
                      onClick={props.beginRecord}
                      className="default-btn mt-3"
                      style={{color:"white", backgroundColor:"#56a3fa", width: "13rem"}}
                  >
                     <i className="bx bx-rocket"></i>Confirm and Start
                    <span></span>
                </button>
              </div>
          </div>
      </Modal>
  )
}

export default TestAudioDevice;
