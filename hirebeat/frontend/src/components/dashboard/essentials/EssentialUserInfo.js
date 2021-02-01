import React, { Component, useReducer, useRef, useState } from "react";
import axios from "axios";
//import Input, { isPossiblePhoneNumber } from 'react-phone-number-input';

import {
  DbCenterRow,
  IconText,
  MyModal,
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
    this.setState({...this.state, passwordChanging: false});
  }

  sendEmail (e) {
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
    if(this.state.email_match == this.props.user.email){
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
    }else{
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

  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      phone_number: this.state.phone_number,
      location: this.state.location
    };
  };

  render() {

    var selectColor = "#ffffff";
    var defaultColor = "#CAD9FC";
    var selectDecoration = "underline";
    var defaultDecoration = "none";
    return (
      <React.Fragment>
      <div className="container">
          <DbCenterRow>
            <div className="col-9">
              <div className="row" style={{marginTop:"20%", marginBottom:"10%"}}>
                <div className="col d-flex align-items-center">
                  <h3
                    style={{
                      fontWeight: "bold",
                      marginRight: "0.8rem",
                      wordWrap: "break-word",
                      wordBreak: "break-all",
                      color:"#CAD9FC"
                    }}
                  >
                    {this.props.user.username}
                  </h3>
                </div>
              </div>
              {this.props.profile.membership == "Premium" &&
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                        <IconText
                          iconName={"bx bx-diamond bx-sm"}
                          textDisplayed={"Premium Member"}
                          textSize={"15px"}
                          textColor={"#fac046"}
                          iconMargin={"3px"}
                        />
                </div>
              </div>}
              {this.props.profile.is_employer &&
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                        <IconText
                          iconName={"bx bx-briefcase  bx-sm"}
                          textDisplayed={this.props.profile.company_name}
                          textSize={"15px"}
                          textColor={"#CAD9FC"}
                          iconMargin={"3px"}
                        />
                </div>
              </div>}
              {!this.props.profile.is_employer &&
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                        <IconText
                          iconName={"bx bx-phone bx-sm"}
                          textDisplayed={this.props.profile.phone_number}
                          textSize={"15px"}
                          textColor={"#CAD9FC"}
                          iconMargin={"3px"}
                        />
                </div>
              </div>}
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                        <IconText
                          iconName={"bx bx-envelope bx-sm"}
                          textDisplayed={this.props.user.email}
                          textSize={"15px"}
                          textColor={"#CAD9FC"}
                          iconMargin={"5px"}
                        />
                </div>
              </div>
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                        <IconText
                          iconName={"bx bx-location-plus bx-sm"}
                          textDisplayed={this.props.profile.location}
                          textSize={"15px"}
                          textColor={"#CAD9FC"}
                          iconMargin={"3px"}
                        />
                </div>
              </div>
              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                  <button
                    type="button"
                    className="panel-button"
                    onClick={this.props.renderSetting}
                    style={{outline: "none", margin:"1%", padding:"0px", backgroundColor:"#5b92d9"}}
                  >
                    <IconText
                      textSize={"15px"}
                      textDisplayed={"Settings"}
                      iconName={"bx bx-wrench 1 bx-xs"}
                      iconMargin={"3px"}
                      textColor={"#ffffff"}
                    />
                  </button>
                </div>
              </div>
              {this.props.profile.is_employer ? 
              <div>
              <div className="row" style={{marginTop:"20%", marginBottom:"2rem"}}>
              <div className="col d-flex align-items-center">
                <button
                  type="button"
                  className="panel-button"
                  onClick={this.props.renderApplications}
                  style={{outline: "none", margin:"1%", padding:"0px", backgroundColor:"#5b92d9"}}
                >
                  <IconText
                    textSize={"16px"}
                    textDisplayed={"Job Applications"}
                    iconName={"bx bx-slideshow 1 bx-sm"}
                    iconMargin={"3px"}
                    textColor={this.props.subpage == "applications" ? selectColor : defaultColor}
                    textDecoration={this.props.subpage == "applications" ? selectDecoration : defaultDecoration}
                  />
                </button>
              </div>
            </div> 
                <button className="default-btn" onClick={this.props.renderPosition}
                  style={{color:"white", backgroundColor:"#090D3A"}}>
                  <i className="bx bxs-hot"></i> 
                    New Position
                  <span></span>
                </button></div> : 
              <div> 
              <div className="row" style={{marginTop:"20%"}}>
                <div className="col d-flex align-items-center">
                  <button
                    type="button"
                    className="panel-button"
                    onClick={this.props.renderVideos}
                    style={{outline: "none", margin:"1%", padding:"0px", backgroundColor:"#5b92d9"}}
                  >
                    <IconText
                      textSize={"16px"}
                      textDisplayed={"Practiced Interview"}
                      iconName={"bx bx-slideshow bx-sm"}
                      iconMargin={"3px"}
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
                    style={{outline: "none", margin:"1%", padding:"0px", backgroundColor:"#5b92d9"}}
                  >
                    <IconText
                      textSize={"16px"}
                      textDisplayed={"Scanned Resume"}
                      iconName={"bx bx-file bx-sm"}
                      iconMargin={"3px"}
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
                    style={{outline: "none", margin:"1%", padding:"0px", backgroundColor:"#5b92d9"}}
                  >
                    <IconText
                      textSize={"16px"}
                      textDisplayed={"Received Interview"}
                      iconName={"bx bx-briefcase bx-sm"}
                      iconMargin={"3px"}
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
              </div>}
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
              {/*
              <label style={{ fontSize: "20px" }}>Personal Website</label>
              <input
                type="url"
                className="form-control"
                name={"website"}
                value={props.website}
                placeholder={"Personal Website"}
                onChange={props.handleInputChange}
              />
              <br />
              <label style={{ fontSize: "20px" }}>About</label>
              <input
                type="text"
                className="form-control"
                name={"about"}
                value={props.about}
                placeholder={"About Yourself"}
                onChange={props.handleInputChange}
              />*/}
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
    if(newPassword !== confirmPassword)
    {
      alert('Password do not match!');
    }
    else if(newPassword.length < 8)
    {
      alert('Password needs to be longer than 8 characters.');
    }
    else
    {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let user_pw = { "id": props.user.id , "password": oldPassword };
      
      axios.post("api/check_password", user_pw, config).then((res)=>{
        //console.log(res);
        const is_matching = res.data[0];
        if(is_matching)
        {
          let user = {"id": props.user.id , "newPassword": newPassword};
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
                         onChange={(event) => {setOldPassword(event.target.value)}}
                  />
                  <br />
                  <label style={{ fontSize: "20px" }}>New Password</label>
                  <input placeholder="New password" 
                         className="form-control"
                         type="password"
                         value={newPassword}
                         required
                         onChange={(event) => {setNewPassword(event.target.value)}}
                  />
                  <br />
                  <label style={{ fontSize: "20px" }}>Confirm New Password</label>
                  <input placeholder="New password" 
                         className="form-control"
                         type="password"
                         value={confirmPassword}
                         required
                         onChange={(event) => {setConfirmPassword(event.target.value)}}
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