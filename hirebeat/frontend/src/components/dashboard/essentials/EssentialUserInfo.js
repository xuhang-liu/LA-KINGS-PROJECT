import React, { Component, useState } from "react";
import axios from "axios";
//import Input, { isPossiblePhoneNumber } from 'react-phone-number-input';

import {
  DbCenterRow,
  IconText,
  MyModal,
  IconEmployerText,
  IconUserText,
  IconUserText1
} from "../DashboardComponents";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import emailjs from 'emailjs-com';
//import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { updateUserPassword } from "../../../redux/actions/auth_actions";


export class EssentialUserInfo extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    // changemaking: I am adding the state to control the show/hide of the password chaning Modal
    passwordChanging: false,
    // changefinishes
    show: false,
    phone_number: "",
    location: "",
    membership: "",
    email_match: "",
    plan_interval: "",
  };

  componentDidMount() {
    this.setState({
      phone_number: this.props.profile.phone_number,
      location: this.props.profile.location,
      membership: this.props.profile.membership,
      plan_interval: this.props.profile.plan_interval,
    });
  };


  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  finishEditing = () => {
    this.setState({ ...this.state, show: false });
  };

  saveChanges = () => {
    var profile = this.makeProfile();
    this.props.updateProfile(profile);
    this.finishEditing();
  };

  finishedPasswordChanging = () => {
    this.setState({ ...this.state, passwordChanging: false });
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_s8700fg', 'template_992v1vd', e.target, 'user_5R8aVH2nC9mnh7SdUOC1S')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  cancelSub = (e) => {
    e.preventDefault();
    if (this.state.email_match == this.props.user.email) {
      this.sendEmail(e);
      var profile = this.makeCancelConfirm();
      this.props.updateProfile(profile);
      confirmAlert({
        title: 'Cancel Success',
        message: 'Your subscriptions will stop at the end of this cycle.',
        buttons: [
          {
            label: 'Ok',
          }
        ]
      });
    } else {
      confirmAlert({
        title: 'Sure to cancel?',
        message: 'Your email does not match what you type',
        buttons: [
          {
            label: 'OK'
          }
        ]
      });
    }
    e.target.reset()
  };

  makeCancelConfirm = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      plan_interval: 'Regular'
    };
  };

  renderApplications = () => {
    this.props.renderAnalytics();
    /*if (this.props.profile.membership == "Premium") {
      this.props.renderAnalytics();
    } else {
      confirmAlert({
        title: 'Upgrade Now!',
        message: <div><h5>Upgrade now to access analytics page!</h5><img src="https://hirebeat-assets.s3.amazonaws.com/analytics-mohu.webp" alt="img"></img></div>,
        buttons: [
          { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
          { label: 'OK' },
        ],
        afterClose: () => { this.props.renderApplications() }
      });
      this.props.renderAnalytics();
    }*/
  };

  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      phone_number: this.state.phone_number,
      location: this.state.location
    };
  };

  render() {

    var selectEColor = "#e8edfc";
    var defaultEColor = "#CAD9FC";
    var selectBack = "#090d3a";
    var defaultBack = "none";
    //var selectDecoration = "underline";
    //var defaultDecoration = "none";
    var selectDash = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-microphone-select.png";
    var nonselectDash = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-microphone-non.png";
    var selectSetting = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-cog-select.png";
    var nonselectSetting = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-cog-non.png";
    var selectIntergration = "https://hirebeat-assets.s3.amazonaws.com/Employer/eos-icons_api-outlined-select.png";
    var nonselectIntergration = "https://hirebeat-assets.s3.amazonaws.com/Employer/eos-icons_api-outlined.png";
    var nonselectHelp = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-help-circle.png";
    var selectShortlist = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-bookmark-plus-select.png";
    var nonSelectShortlist = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-bookmark-plus-non.png";
    var selectVideos = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-slideshow-select.png";
    var nonSelectVideos = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-slideshow-non.png";
    var selectResume = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-file-select.png";
    var nonselectResume = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-file-non.png";
    var selectInterview = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-briefcase-select.png";
    var nonselectInterview = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bx-briefcase-non.png";
    var selectAnalytics = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-bar-chart-select.png";
    var nonselectAnalytics = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-bar-chart-non.png";
    var selectProfile = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-select.png";
    var nonselectProfile = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-non.png";
    var selectJobs = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-briefcase.png";
    var nonselectJobs = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-briefcase-non.png";
    var selectEmployerDash = "https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-dashboard-select.png";
    var nonSelectEmployerDash = "https://hirebeat-assets.s3.amazonaws.com/Employer/bxs-dashboard-non.png";
    var selectSourcing = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-sourcing-select.png";
    var nonselectSourcing = "https://hirebeat-assets.s3.amazonaws.com/Employer/bx-sourcing-non.png";
    return (
      <React.Fragment>
        <div className="container">
          <DbCenterRow>
            <div>
              {(this.props.profile.is_employer && !this.props.profile.is_external_reviewer) &&
                <div>
                  <div className="row" style={{ marginTop: "2rem", textAlign: "center" }}>
                    <div className="col d-flex align-items-center" style={{ justifyContent: "center" }}>
                      <IconText
                        textMarginLeft={"1rem"}
                        textDisplayed={this.props.profile.company_name}
                        textSize={"1rem"}
                        textColor={"#ffffff"}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <div className="col d-flex align-items-center">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderEmployerProfile}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText
                          textSize={"12px"}
                          textDisplayed={"Dashboard"}
                          backColor={this.props.subpage == "employerProfile" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "employerProfile" ? selectEmployerDash : nonSelectEmployerDash}
                          textColor={this.props.subpage == "employerProfile" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  {/*this.props.profile.membership == "Premium" ?
                <div style={{marginLeft:"1.4rem", marginRight:"1.4rem"}}>
                  {this.props.profile.plan_interval == "Pro" ?
                  <div className="row">
                    <div className="col d-flex align-items-center mt-2">
                        <IconText
                          iconName={"bx bx-diamond bx-sm"}
                          textDisplayed={"Pro Plan"}
                          textSize={"12px"}
                          textColor={"#fac046"}
                          iconMargin={"2px"}
                        />
                    </div>
                  </div>:
                   <div className="row">
                   <div className="col d-flex align-items-center mt-2">
                       <IconText
                         iconName={"bx bx-diamond bx-sm"}
                         textDisplayed={"Premium"}
                         textSize={"12px"}
                         textColor={"#fac046"}
                         iconMargin={"2px"}
                       />
                   </div>
                 </div>}
                </div>:
                <div style={{marginLeft:"1.4rem", marginRight:"1.4rem"}}>
                  {this.props.profile.is_subreviwer ?
                  <div>
                    <div className="row">
                      <div className="col d-flex align-items-center mt-2">
                        <IconText
                          iconName={""}
                          textDisplayed={"Sub-Reviewer"}
                          textSize={"14px"}
                          textColor={"#cad9fc"}
                          iconMargin={"2px"}
                        />
                      </div>
                    </div>
                  </div> :
                  <div>
                    <div className="row">
                      <div className="col d-flex align-items-center mt-2">
                        <IconText
                          iconName={""}
                          textDisplayed={"Free Member"}
                          textSize={"14px"}
                          textColor={"#cad9fc"}
                          iconMargin={"2px"}
                        />
                      </div>
                    </div>
                  <div className="row" style={{textAlign:"center"}}>
                    <div className="col align-items-center mt-1">
                      <Link to="/employer-pricing" style={{textDecoration:"none"}}><p style={{color:"#fac046", fontSize:"14px"}}>Upgrade</p></Link>
                    </div>
                  </div>
                </div>}
              </div>*/}
                  <hr style={{ border: "1px solid rgba(232, 237, 252, 0.25)" }}></hr>
                </div>}
              {this.props.profile.is_employer ?
                <div style={{ marginLeft: "1.4rem", marginRight: "1.4rem" }}>
                  {(!this.props.profile.is_subreviwer && !this.props.profile.is_external_reviewer) &&
                    <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                      <div className="col d-flex align-items-center">
                        <button
                          type="button"
                          className="panel-button"
                          onClick={this.props.renderJobs}
                          style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                        >
                          <IconEmployerText
                            textSize={"12px"}
                            textDisplayed={"Jobs"}
                            job_dots={this.props.job_dots}
                            backColor={this.props.subpage == "jobs" ? selectBack : defaultBack}
                            iconSrc={this.props.subpage == "jobs" ? selectJobs : nonselectJobs}
                            textColor={this.props.subpage == "jobs" ? selectEColor : defaultEColor}
                          />
                        </button>
                      </div>
                    </div>}
                  {!this.props.profile.is_external_reviewer &&
                    <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                      <div className="col d-flex align-items-center">
                        <button
                          type="button"
                          className="panel-button"
                          onClick={this.props.renderApplications}
                          style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                        >
                          <IconEmployerText
                            textSize={"12px"}
                            textDisplayed={"Interview"}
                            int_dots={this.props.int_dots}
                            backColor={this.props.subpage == "applications" ? selectBack : defaultBack}
                            iconSrc={this.props.subpage == "applications" ? selectDash : nonselectDash}
                            textColor={this.props.subpage == "applications" ? selectEColor : defaultEColor}
                          />
                        </button>
                      </div>
                    </div>}
                  {/*Only Main Employer*/}
                  {(!this.props.profile.is_subreviwer && !this.props.profile.is_external_reviewer) &&
                    <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                      <div className="col d-flex align-items-center">
                        <button
                          type="button"
                          className="panel-button"
                          onClick={this.props.renderShortlist}
                          style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                        >
                          <IconEmployerText
                            textSize={"12px"}
                            textDisplayed={"Shortlist"}
                            backColor={this.props.subpage == "shortlist" ? selectBack : defaultBack}
                            iconSrc={this.props.subpage == "shortlist" ? selectShortlist : nonSelectShortlist}
                            textColor={this.props.subpage == "shortlist" ? selectEColor : defaultEColor}
                          />
                        </button>
                      </div>
                    </div>
                  }
                  {/*Only External Reviewer*/}
                  {this.props.profile.is_external_reviewer &&
                    <div className="row" style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
                      <div className="col d-flex align-items-center">
                        <button
                          type="button"
                          className="panel-button"
                          onClick={this.props.renderShortlist}
                          style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                        >
                          <IconEmployerText
                            textSize={"12px"}
                            textDisplayed={"Shortlist"}
                            backColor={this.props.subpage == "shortlist" ? selectBack : defaultBack}
                            iconSrc={this.props.subpage == "shortlist" ? selectShortlist : nonSelectShortlist}
                            textColor={this.props.subpage == "shortlist" ? selectEColor : defaultEColor}
                          />
                        </button>
                      </div>
                    </div>
                  }
                  <hr style={{ border: "1px solid rgba(232, 237, 252, 0.25)" }}></hr>
                  {(this.props.profile.is_employer && !this.props.profile.is_external_reviewer && !this.props.profile.is_subreviwer) &&
                    <div className="row" style={{ marginTop: "0rem", textAlign: "center", marginBottom: "0.5rem" }}>
                        <div className="col d-flex align-items-center">
                          <button
                            type="button"
                            className="panel-button"
                            onClick={this.props.renderEmployerSourcing}
                            style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                          >
                            <IconUserText
                              textSize={"12px"}
                              textDisplayed={"Sourcing"}
                              width={"56px"}
                              height={"42px"}
                              marginL={"1rem"}
                              backColor={this.props.subpage == "employerSourcing" ? selectBack : defaultBack}
                              iconSrc={this.props.subpage == "employerSourcing" ? selectSourcing : nonselectSourcing}
                              textColor={this.props.subpage == "employerSourcing" ? selectEColor : defaultEColor}
                              paddingRight={"1rem"}
                            />
                          </button>
                        </div>
                    </div>
                  }
                  {(!this.props.profile.is_subreviwer && !this.props.profile.is_external_reviewer) &&
                    <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                      <div className="col d-flex align-items-center">
                        <button
                          type="button"
                          className="panel-button"
                          onClick={this.renderApplications}
                          style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                        >
                          <IconEmployerText
                            textSize={"12px"}
                            textDisplayed={"Analytics"}
                            backColor={this.props.subpage == "analytics" ? selectBack : defaultBack}
                            iconSrc={this.props.subpage == "analytics" ? selectAnalytics : nonselectAnalytics}
                            textColor={this.props.subpage == "analytics" ? selectEColor : defaultEColor}
                          />
                        </button>
                      </div>
                    </div>}
                  <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                    <div className="col d-flex align-items-center">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderSetting}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconEmployerText
                          textSize={"12px"}
                          textDisplayed={"Settings"}
                          backColor={this.props.subpage == "settings" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "settings" ? selectSetting : nonselectSetting}
                          textColor={this.props.subpage == "settings" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  {(!this.props.profile.is_subreviwer && !this.props.profile.is_external_reviewer) &&
                    <div className="row" style={{ marginTop: "0%", marginBottom: "0.5rem" }}>
                    <div className="col d-flex align-items-center">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderMergeIntergration}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconEmployerText
                          textSize={"12px"}
                          textDisplayed={"Integration"}
                          backColor={this.props.subpage == "mergeintergration" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "mergeintergration" ? selectIntergration : nonselectIntergration}
                          textColor={this.props.subpage == "mergeintergration" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>}
                </div> :
                <div style={{ minHeight: "58rem" }}>
                  <div className="row" style={{ marginTop: "30%", marginBottom: "1rem" }}>
                    <div className="col d-flex align-items-center">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderProfile}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText
                          textSize={"12px"}
                          textDisplayed={"My Profile"}
                          profileRate={this.props.profileDetail.profile_rate}
                          backColor={this.props.subpage == "profile" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "profile" ? selectProfile : nonselectProfile}
                          textColor={this.props.subpage == "profile" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
                    <div className="col d-flex align-items-center" data-tut="reactour-myInterview">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderInterview}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText
                          textSize={"12px"}
                          textDisplayed={"My Interview"}
                          backColor={this.props.subpage == "interview" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "interview" ? selectInterview : nonselectInterview}
                          textColor={this.props.subpage == "interview" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  <hr style={{ border: "1px solid rgba(232, 237, 252, 0.25)", width: "100%" }}></hr>
                  <div className="row" style={{ marginTop: "30%", marginBottom: "2rem" }}>
                    <div className="col d-flex align-items-center" data-tut="reactour-myVideo">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderVideos}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText
                          textSize={"12px"}
                          textDisplayed={"My Video"}
                          backColor={this.props.subpage == "videos" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "videos" ? selectVideos : nonSelectVideos}
                          textColor={this.props.subpage == "videos" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "30%", marginBottom: "2rem" }}>
                    <div className="col d-flex align-items-center" data-tut="reactour-myResume">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderResume}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText
                          textSize={"12px"}
                          textDisplayed={"My Resume"}
                          backColor={this.props.subpage == "resume" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "resume" ? selectResume : nonselectResume}
                          textColor={this.props.subpage == "resume" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  {this.props.profile.membership == "Premium" ?
                    <div className="row">
                      <div className="col d-flex align-items-center mt-2">
                        <IconText
                          iconName={"bx bx-diamond bx-sm"}
                          textDisplayed={"Premium"}
                          textSize={"14px"}
                          textColor={"#fac046"}
                          iconMargin={"2px"}
                        />
                      </div>
                    </div> :
                    <div>
                      <div className="row" style={{ marginTop: "4rem", marginBottom: "1rem" }}>
                        <div className="col d-flex align-items-center mt-2">
                          <IconText
                            iconName={""}
                            textDisplayed={"Free Member"}
                            textSize={"14px"}
                            textColor={"#cad9fc"}
                            iconMargin={"2px"}
                          />
                        </div>
                      </div>
                      <div className="row" style={{ textAlign: "center" }}>
                        <div className="col align-items-center mt-1">
                          <Link to="/pricing" style={{ textDecoration: "none" }}><p style={{ color: "#fac046", fontSize: "14px" }}>Upgrade</p></Link>
                        </div>
                      </div>
                    </div>}
                  <div className="row" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <div className="col d-flex align-items-center">
                      <button
                        type="button"
                        className="panel-button"
                        onClick={this.props.renderSetting}
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none" }}
                      >
                        <IconUserText1
                          textSize={"12px"}
                          textDisplayed={""}
                          backColor={this.props.subpage == "settings" ? selectBack : defaultBack}
                          iconSrc={this.props.subpage == "settings" ? selectSetting : nonselectSetting}
                          textColor={this.props.subpage == "settings" ? selectEColor : defaultEColor}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <div className="col d-flex align-items-center">
                      <a
                        className="panel-button"
                        href="/contact"
                        style={{ outline: "none", margin: "1%", padding: "0px", background: "none", textDecoration:"none" }}
                      >
                        <IconUserText1
                          textSize={"12px"}
                          textDisplayed={""}
                          backColor={defaultBack}
                          iconSrc={nonselectHelp}
                          textColor={defaultEColor}
                        />
                      </a>
                    </div>
                  </div>
                  {/*<div className="row" style={{marginTop:"20%"}}>
                <div className="col d-flex align-items-center">
                  <button
                    type="button"
                    className="panel-button"
                    onClick={this.props.renderVideos}
                    style={{outline: "none", margin:"1%", padding:"0px", background:"none"}}
                  >
                    <IconText
                      textSize={"15px"}
                      textDisplayed={"Practiced Interview"}
                      iconName={"bx bx-slideshow bx-sm"}
                      iconMargin={"2px"}
                      textColor={this.props.subpage == "videos" ? selectColor : defaultColor}
                      textDecoration={this.props.subpage == "videos" ? selectDecoration : defaultDecoration}
                    />
                  </button>
                </div>
              </div>      
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                  <button
                    type="button"
                    className="panel-button"
                    onClick={this.props.renderResume}
                    style={{outline: "none", margin:"1%", padding:"0px", background:"none"}}
                  >
                    <IconText
                      textSize={"15px"}
                      textDisplayed={"Scanned Resume"}
                      iconName={"bx bx-file bx-sm"}
                      iconMargin={"2px"}
                      textColor={this.props.subpage == "resume" ? selectColor : defaultColor}
                      textDecoration={this.props.subpage == "resume" ? selectDecoration: defaultDecoration}
                    />
                  </button>
                </div>
              </div>
              <div className="row" style={{marginTop:"1%", marginBottom:"2rem"}}>
                <div className="col d-flex align-items-center">
                  <button
                    type="button"
                    className="panel-button"
                    onClick={this.props.renderInterview}
                    style={{outline: "none", margin:"1%", padding:"0px", background:"none"}}
                  >
                    <IconText
                      textSize={"15px"}
                      textDisplayed={"Received Interview"}
                      iconName={"bx bx-briefcase bx-sm"}
                      iconMargin={"2px"}
                      textColor={this.props.subpage == "interview" ? selectColor : defaultColor}
                      textDecoration={this.props.subpage == "interview" ? selectDecoration: defaultDecoration}
                    />
                  </button>
                </div>
              </div>
              {this.props.subpage == 'videos' &&
                <Link to="/practice">
                  <a className="default-btn" 
                  style={{color:"white", backgroundColor:"#090D3A"}}>
                    <i className="bx bxs-hot"></i> 
                    New Practice
                    <span></span>
                  </a>
                </Link>
              }

              {this.props.subpage == 'resume' &&
                <Link to="/resume">
                  <a className="default-btn" 
                  style={{color:"white", backgroundColor:"#090D3A", marginLeft:"4%"}}>
                    <i className="bx bxs-hot"></i> 
                    New Scan
                    <span></span>
                  </a>
                </Link> 
              }

              {this.props.profile.membership == 'Regular' &&
              <div>
                <div className="row">
                  <div className="col">            
                    {this.props.subpage == "videos" ? <p style={{color:"#CAD9FC", fontSize:"12px"}}>Reviews Left: 
                    {(this.props.profile.save_limit - this.props.profile.saved_video_count)>0?(this.props.profile.save_limit - this.props.profile.saved_video_count):0}</p> : null}
                    {this.props.subpage == "resume" ? <p style={{color:"#CAD9FC", fontSize:"12px"}}>Saves Left: 
                    {(this.props.profile.save_resume_limit - this.props.profile.saved_resume_count)>0?(this.props.profile.save_resume_limit - this.props.profile.saved_resume_count):0}</p> : null}
                  </div>
                    <div className="col">
                      <Link to="/pricing" style={{textDecoration: "none"}}>
                        {this.props.subpage == "videos" &&
                        <p style={{color:"#fac046", fontSize:"12px"}}>Upgrade -></p>}
                        {this.props.subpage == "resume" &&
                        <p style={{color:"#fac046", fontSize:"12px"}}>Upgrade -></p>}
                      </Link>
                    </div>
                </div>     
              </div>}*/}
                </div>}
            </div>
          </DbCenterRow>
        </div>
      </React.Fragment>
    );
  }
}

const EditModal = (props) => {
  return (
    <MyModal show={props.show} onHide={props.hide}>
      <div className="container">
        <form style={{ marginBottom: "3%" }} onSubmit={props.saveChanges}>
          <fieldset>
            <div className="form-group">
              <label style={{ fontSize: "20px" }}>Phone Number</label>
              <input
                type="number"
                className="form-control"
                name={"phone_number"}
                value={props.phone_number}
                placeholder={"Phone Number"}
                onChange={props.handleInputChange}
                required="required"
              />
              <br />
              <label style={{ fontSize: "20px" }}>Location</label>
              <input
                type="text"
                className="form-control"
                name={"location"}
                value={props.location}
                placeholder={"Location"}
                onChange={props.handleInputChange}
                required="required"
                pattern="[0-9 a-z A-Z ]+"
                title="Alphabet letters only!"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </MyModal>
  );
};

const PasswordChangingInterface = (props) => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const PasswordCheck = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Password do not match!');
    }
    else if (newPassword.length < 8) {
      alert('Password needs to be longer than 8 characters.');
    }
    else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let user_pw = { "id": props.user.id, "password": oldPassword };

      axios.post("api/check_password", user_pw, config).then((res) => {
        //console.log(res);
        const is_matching = res.data[0];
        if (is_matching) {
          let user = { "id": props.user.id, "newPassword": newPassword };
          props.updateUserPassword(user);
          setOldPassword('');
          setNewPassword('');
          setConfirmPassword('');
          alert("Changed Password Successfully!");
          props.hide();
          console.log(props.show);
        } else {
          alert("Incorrect Password");
        }
      })
        .catch(error => {
          console.log(error)
        });

      // user login judgement, third partiy login.
      // user email /go to database user social auth. Matching function. filter(same user id.) question view.(objects.filter)
    }

  }

  return (
    <MyModal show={props.show} onHide={props.hide}>
      <div className="container">
        <form style={{ marginBottom: "3%" }} onSubmit={PasswordCheck}>
          <fieldset>
            <div className="form-group">
              <label style={{ fontSize: "20px" }}>Current Password</label>
              <input placeholder="Current password"
                className="form-control"
                type="password"
                value={oldPassword}
                required
                onChange={(event) => { setOldPassword(event.target.value) }}
              />
              <br />
              <label style={{ fontSize: "20px" }}>New Password</label>
              <input placeholder="New password"
                className="form-control"
                type="password"
                value={newPassword}
                required
                onChange={(event) => { setNewPassword(event.target.value) }}
              />
              <br />
              <label style={{ fontSize: "20px" }}>Confirm New Password</label>
              <input placeholder="New password"
                className="form-control"
                type="password"
                value={confirmPassword}
                required
                onChange={(event) => { setConfirmPassword(event.target.value) }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Update Password
            </button>
          </fieldset>
        </form>
      </div>
    </MyModal>
  );
}

export default connect(null, { updateUserPassword })(EssentialUserInfo);