import React, { Component, useReducer, useRef, useState } from "react";
import S3FileUpload from "react-s3";
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
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { PasswordChanging } from "../../../redux/actions/auth_actions";

const config = {
    bucketName: 'hirebeat-avatar',
    dirName: '',
    region: 'us-east-1',
    accessKeyId: '',
    secretAccessKey: '',
}


export class EssentialUserInfo extends Component {
  state = {
    // changemaking: I am adding the state to control the show/hide of the password chaning Modal
    passwordChanging: false,
    // changefinishes
    show: false,
    phone_number: "",
    location: "",
    filePhoto: "https://hirebeat-assets.s3.amazonaws.com/user.png",
    avatar_url:"https://hirebeat-assets.s3.amazonaws.com/user.png",
    isActive: true,
    membership: "",
    email_confirmed: this.props.profile.email_confirmed,
    email_match: "",
    saved_video_count: "",
    plan_interval: "",
  };

  componentDidMount() {
    this.setState({
      phone_number: this.props.profile.phone_number,
      location: this.props.profile.location,
      membership: this.props.profile.membership,
      plan_interval: this.props.profile.plan_interval,
      email_confirmed: this.props.profile.email_confirmed,
      saved_video_count: this.props.profile.saved_video_count,
      filePhoto: this.props.profile.avatar_url
    });
  }

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

  savePasswordChanging = (event) => {
    // working on the backend logic here.
    event.preventDefault();
    console.log(event);
   
/*    if(newPassword !== confirmPassword)
      console.log("Password don't match");
    else if(newPassword.length < 8)
      console.log('the Password is too short');
    else
      console.log('I just need to check the original password now!');
    this.finishedPasswordChanging();*/
  }


  /*sendEmail = () => {
    //alert
    confirmAlert({
      title: 'Activation Code Sent!',
      message: 'Please check your email for the activation code.(Make sure to check spam also)',
      buttons: [
        {
          label: 'OK'
        }
      ]
    });
    //email
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tech@hirebeat.co",
      Password : "599A223E6635EB53171C06E9D1747653A5E7",
      To : this.props.user.email,
      From : "Hirebeat<tech@hirebeat.co>",
      Subject : "Welcome Email From Hirebeat",
      Body : "<html><h1>Hi Welcome!</h1><br></br>Please copy the activation code below and apply into the Dashboard page to verify your email address: <br></br> <strong>DAHF@-13123-#@B@V-ADADA</strong></html>",
  });
  }*/

  /*verifyEmail = (props) => {
    if(this.state.active_code == "DAHF@-13123-#@B@V-ADADA"){
      confirmAlert({
        title: 'Email Verified',
        message: 'You can save up to 5 videos now.',
        buttons: [
          {
            label: 'OK'
          }
        ]
      });
      var profile = this.makeEmailConfirm();
      this.props.updateProfile(profile);
      this.finishEditing();
    }else{
      //alert
    confirmAlert({
      title: 'Code Invalid',
      message: 'Click [Get Code] to get the activation code.',
      buttons: [
        {
          label: 'OK'
        }
      ]
    });
    }
  };*/

  /*makeEmailConfirm = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      email_confirmed: true,
      save_limit: 5,
    };
  };*/
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



  upload = (e) => {
    console.log("upload starts");
    e.persist();
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then(data => {
        this.setState({
          filePhoto: URL.createObjectURL(e.target.files[0]),
          avatar_url: data.location
        });
        console.log(this.state.avatar_url);

        this.saveChanges();
        console.log(this.props.profile.avatar_url);

      })
      .catch((err) => console.error(err));
    // this.setState({});

  };

  render() {
    return (
      <React.Fragment>
      <MediaQuery minDeviceWidth={1224}>
      <div className="container">
          <DbCenterRow>
            {/* <div className="col-2">
                <div className="row justify-content-center">
                  <img
                    style = {{width:"100px",
                              height:"100px",
                              objectFit:"cover"}}

                    src={this.state.filePhoto}

                    className = {"d-flex mb-2"}/>

                </div>

                <div className="row justify-content-center">
                  <input
                    style={{display:"none"}}
                    type="file"
                    onChange={this.upload}
                    ref={fileInput => this.fileInput = fileInput}
                  />

                  <button
                    type = "button"
                    onClick={() => this.fileInput.click()}
                    className = {"btn btn-sm"}
                    style={{color: "#FFFFFF",
                            fontSize: "0.8rem"
                    }}
                    >
                  Upload Image
                  </button>
                </div>

            </div> */}



            <div className="col-9">
              <div className="row">
                <div className="col d-flex align-items-center">
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginRight: "0.8rem",
                    }}
                  >
                    {this.props.user.username}
                  </h1>
                </div>
              </div>

              <div className="row" style={{marginTop:"1%"}}>
                <div className="col d-flex align-items-center">
                  <div className="col-12" style={{padding:"0%"}}>
                    <div className="row">
                      <div className="col-3">
                        <IconText
                          iconName={"bx bx-phone bx-sm"}
                          textDisplayed={this.props.profile.phone_number}
                          textSize={"15px"}
                          textColor={"#FFFFFF"}
                          iconMargin={"3px"}
                        />
                      </div>
                      <div className="col-4">
                        <IconText
                          iconName={"bx bx-envelope bx-sm"}
                          textDisplayed={this.props.user.email}
                          textSize={"15px"}
                          textColor={"#FFFFFF"}
                          iconMargin={"5px"}
                        />
                      </div>
                      <div className="col-3">
                        <IconText
                          iconName={"bx bx-location-plus bx-sm"}
                          textDisplayed={this.props.profile.location}
                          textSize={"15px"}
                          textColor={"#FFFFFF"}
                          iconMargin={"3px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* for premium user */}
              {
                this.props.profile.plan_interval == "Premium" &&
                <div className="row">
                  <div className="col-2" style={{marginTop:"0.8rem", paddingRight:"5%", fontSize:'1rem', fontWeight:'600'}}>
                    <i className='bx bx-diamond' style={{display:'inline', fontSize:'1.5rem'}}></i> 
                    <span style={{marginLeft: "6px", display:'inline'}}>Premium</span>
                  </div>
                  <div className="col-8">
                    <input
                    className="form-control"
                    type="text"
                    name={"email_match"}
                    placeholder={"Type your email to cancel subscription."}
                    onChange={this.handleInputChange}
                    style={{
                      backgroundColor:"#FFFFFF",
                      fontSize: "12px",
                      borderRadius: "5px",
                      paddingLeft: "20px",
                      color:"grey"
                    }}
                  />
                  </div>
                </div>
              }
              {
                this.props.profile.plan_interval == "Regular" &&
                <div className="row">
                  <div className="col-2" style={{marginTop:"0.8rem", paddingRight:"5%", fontSize:'1rem', fontWeight:'600'}}>
                    <i className='bx bx-diamond' style={{display:'inline', fontSize:'1.5rem'}}></i> 
                    <span style={{marginLeft: "6px", display:'inline'}}>Premium</span>
                  </div>
                </div>
              }        
            </div>

          {/* for premium user */}
          {
            this.props.profile.plan_interval == "Premium" &&
            <div className="col-2" style={{marginTop:"2%"}}>
                <div className="row" style={{marginTop:"8%"}}>
                  <Link>
                      <a 
                      onClick={() => {
                      this.setState({ ...this.state, show: true });
                      }}
                      className="default-btn" style={{color:"white", backgroundColor:"#090D3A", width:"127%"}} 
                      >
                        <i className="bx bx-edit 2"></i>
                          Edit
                          <span></span>
                      </a>
                    </Link>
                </div>
                <div className="row" style={{marginTop:"8%"}}>
                  <form onSubmit={this.cancelSub}>
                  <input type="email" value={this.props.user.email} name='useremail' style={{display:"none"}}/>
                    <button
                    type="submit"
                    className="default-btn" style={{color:"white", backgroundColor:"#FF6B00"}} 
                    >
                      <i className="bx bxs-hot"></i>
                        Confirm
                        <span></span>
                    </button>
                  </form>
                </div>
            </div>
          }

{
            this.props.profile.plan_interval == "Regular" &&
            <div className="col-2" style={{marginTop:"2%"}}>
                <div className="row" style={{marginTop:"8%"}}>
                  <Link>
                      <a 
                      onClick={() => {
                      this.setState({ ...this.state, show: true });
                      }}
                      className="default-btn" style={{color:"white", backgroundColor:"#090D3A", width:"127%"}} 
                      >
                        <i className="bx bx-edit 2"></i>
                          Edit
                          <span></span>
                      </a>
                    </Link>
                </div>
            </div>
          }

          {/* for regular user */}
            {
              this.props.profile.membership == "Regular" &&
              <div className="col-2">
                <div className="row">
                  <Link to="/pricing">
                    <a className="default-btn" style={{color:"white", backgroundColor:"#FF6B00"}}>
                      <i className="bx bxs-hot"></i>
                        Upgrade
                        <span></span>
                    </a>
                  </Link>
                </div>

                <div className="row" style={{marginTop:"8%"}}>
                  <Link>
                    <a 
                    onClick={() => {
                    this.setState({ ...this.state, show: true });
                    }}
                    className="default-btn" style={{color:"white", backgroundColor:"#090D3A", width:"133%"}} 
                    >
                      <i className="bx bx-edit 2"></i>
                        Edit
                        <span></span>
                    </a>
                  </Link>
                </div>
{/* Here is the change made: I have added another buttom as password editing*/}
                <div className="row" style={{marginTop:"8%"}}>
                  <Link>
                    <a 
                    onClick={() => {
                    this.setState({ ...this.state, passwordChanging: true });
                    }}
                    className="default-btn" style={{color:"white", backgroundColor:"#090D3A", width:"133%"}} 
                    >
                      <i className="bx bxs-key"></i>
                        Change Password
                        <span></span>
                    </a>
                  </Link>
                </div>
{/* Changes end here #################### Finished */}
              </div>
            }                
          </DbCenterRow>
        <EditModal
          show={this.state.show}
          location={this.state.location}
          phone_number={this.state.phone_number}
          saveChanges={this.saveChanges}
          handleInputChange={this.handleInputChange}
          hide={this.finishEditing}
        />

{/* Making Changes Here */}
        <PasswordChangingInterface
          show={this.state.passwordChanging}
          savePasswordChanging={this.savePasswordChanging}
          hide={this.finishedPasswordChanging}
          user={this.props.user}
          profile={this.props.profile}
          PasswordChanging={this.props.PasswordChanging}
        />
{/* Changes Ends here */}


      </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1223}>
        <DbCenterRow>
          <div className="container">
            <div className="col-9">
              <div className="row">
                <div className="col d-flex align-items-center">
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginRight: "0.8rem",
                    }}
                  >
                    {this.props.user.username}
                  </h1>
                </div>
              </div>
                {/* for regular user */}
                {
                    this.props.profile.membership == "Regular" &&
                      <div className="row">
                        <div style={{paddingLeft:'10px', paddingBottom:'5px'}}>
                        <Link to="/pricing">
                          <a className="default-btn" style={{color:"white", backgroundColor:"#FF6B00"}}>
                          <i className="bx bxs-hot"></i>
                            Upgrade
                            <span></span>
                          </a>
                        </Link>
                        </div>
                        <div style={{paddingLeft:'10px'}}>
                        <Link to="/practice">
                        <a className="default-btn" 
                          style={{color:"white", backgroundColor:"#090D3A"}}>
                          <i className="bx bxs-hot"></i> 
                            New Practice
                          <span></span>
                        </a>
                      </Link>
                      </div>
                      </div>
                  }
                  {/* for premium user */}
                  {
                    this.props.profile.membership == "Premium" &&
                    <div className="row">
                      <div style={{marginTop:"0.5rem", paddingRight:'20px', paddingLeft:'10px'}}>
                        <i className='bx bx-diamond'></i>
                          <span style={{marginLeft: "2px"}}>Premium</span>
                      </div>
                      <Link to="/practice">
                        <a className="default-btn" 
                          style={{color:"white", backgroundColor:"#090D3A"}}>
                          <i className="bx bxs-hot"></i> 
                            New Practice
                          <span></span>
                        </a>
                      </Link>
                    </div>
                  }
            </div>
          </div>
        </DbCenterRow>
      </MediaQuery>
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
      console.log(props.user);
      console.log(props.profile);
      props.PasswordChanging(props.user.username, oldPassword);
        // if condition is fine, we pass the old password and new password to the backend.
        // If user password match and are longer than 8 chars. we will do the change here.
        // call an action creater, then get the res.data. if login faill. alert. Otherwise, call change password API in Django.

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


export default connect(null, {PasswordChanging})(EssentialUserInfo);