import React, {useState} from "react";
import AudioRecorder from "./AudioRecorder";
import { CardButton, TestDeviceCard } from "./../practice/CardComponents";
import { audioRecorderOptions } from "./../../constants/constants";
import NotePad from "./../practice/NotePad";
import Modal from "react-bootstrap/Modal";

function TestAudioDevice(props) {
  const [showFirst, setFirst] = useState(true);
  const hideFirst = () => {
    setFirst(false);
  };
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
        show={showFirst}
        hide={hideFirst}
        prepareTime={props.prepareTime}
      />
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
              <AudioRecorder {...audioRecorderOptions} isTesting={true} />
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
    </React.Fragment>
  );
}

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
                          You have <span style={{color:"#FF6B00"}}>{props.prepareTime} seconds</span> to prepare and take notes for each question.
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

export default TestAudioDevice;
