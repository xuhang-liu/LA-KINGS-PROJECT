import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import safariAlert from "../basic/SafariAlert";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class ResumeScan extends Component {
  comingAlert = () => {
    confirmAlert({
      title: 'Feature is coming soon',
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
    //const { history } = this.props;
    //if (history) history.push(`/techfields/`);
  };

  componentDidMount() {
    safariAlert();
  }

  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="row" style={{marginLeft:"7%", width: "90%", marginTop: "4%"}}>
            <div className="col">
                <div className="row">
                    <h4 className="resume-subtitle">Paste Your Resume  | </h4>
                    <Link style={{marginLeft:"3%"}} onClick={this.comingAlert}>
                        <a className="default-btn" 
                        style={{color:"white", backgroundColor:"#67A3F3", height:"80%", width:"105%",fontWeight:"bold", marginTop:"3%"}}>
                        <i className="bx bx-cloud-upload bx-sm"></i> 
                            Upload
                        <span></span>
                        </a>
                    </Link>
                </div>
                <div className="row">
                  <form style={{marginTop:"3%"}}>
                    <textarea className="resume-textarea" placeholder="  Paste your resume."></textarea>
                  </form>
                </div>
            </div>

            <div className="col">
              <div className="row">
                  <h4 className="resume-subtitle">Paste Your Job Description </h4>
                </div>
                <div className="row">
                  <form style={{marginTop:"6%"}}>
                    <textarea className="resume-textarea" placeholder="Paste job description. Include the job title and exclude the “About Company” section."></textarea>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="row" style={{marginTop:"25%"}}>
              <div className="free-trial-content">
                  <Link onClick={this.comingAlert}>
                      <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A", fontWeight:"bold"}}>
                      <i className="bx bxs-hot"></i>
                        Scan
                        <span></span>
                      </a>
                  </Link>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ResumeScan);
