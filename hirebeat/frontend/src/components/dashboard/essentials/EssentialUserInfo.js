import React, { Component } from "react";
import S3FileUpload from "react-s3";

import {
  IconButton,
  DbCenterRow,
  IconText,
  MyModal,
} from "../DashboardComponents";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import premiumIcon from "../../../assets/premium.png"

const config = {
    bucketName: 'hirebeat-avatar',
    dirName: '', 
    region: 'us-east-1',
    accessKeyId: 'AKIAINMYVZ5BEO5PVMZQ',
    secretAccessKey: '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',
}


export class EssentialUserInfo extends Component {
  state = {
    show: false,
    phone_number: "",
    location: "",
    filePhoto: "https://hirebeat-assets.s3.amazonaws.com/user.png",
    avatar:null,
    isActive: true,
    membership: "",
    email_confirmed: this.props.profile.email_confirmed,
    email_match: "",
    saved_video_count: "",
  };

  componentDidMount() {
    this.setState({
      phone_number: this.props.profile.phone_number,
      location: this.props.profile.location,
      membership: this.props.profile.membership,
      email_confirmed: this.props.profile.email_confirmed,
      saved_video_count: this.props.profile.saved_video_count,
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
  cancelSub = () => {
    this.finishEditing();
    if(this.state.email_match == this.props.user.email){
      confirmAlert({
        title: 'Are you sure?',
        message: 'Subscriptions will cancel immediatelly',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              var profile = this.makeCancelConfirm();
              this.props.updateProfile(profile);
            }
          },
          {
            label: 'No'
          }
        ]
        });
    }else{
      confirmAlert({
        title: 'Your email does not match what you type',
        message: '',
        buttons: [
          {
            label: 'OK'
          }
        ]
        });
    }
  };

  makeCancelConfirm = () => {
    if(this.state.saved_video_count>5){
      return {
        user: this.props.user.id,
        id: this.props.profile.id,
        membership: 'Regular',
        save_limit: 5,
        saved_video_count: 5,
      };
    }
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      membership: 'Regular',
      save_limit: 5,
    };
  };

  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      phone_number: this.state.phone_number,
      location: this.state.location,
      membership: this.state.membership
    };
  };



  upload = (e) => {
    console.log("upload starts");
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then(data => {
        this.setState({
          filePhoto : data.location
        })
      })
      .catch((err) => console.error(err));
    // this.setState({filePhoto: URL.createObjectURL(e.target.files[0])});
    console.log(this.state.filePhoto);

  };
  
  render() {
    return (
      <div className="card container">
        <div className="card-body">
          <DbCenterRow>
            <div className="col-2">
              
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
                    style={{color: "#98b8f6",
                            fontSize: "15px"
                    }}
                    >
                  Upload Image
                  </button>
                </div>
              
            </div>
            
            
            
            <div className="col-10">
              <div className="row">
                <div className="col d-flex align-items-center">
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginRight: "10px",
                    }}
                  >
                    {this.props.user.username}
                  </h1>
                  <div
                    className="d-flex justify-content-end"
                  >
                    <IconButton
                      iconName={"facebook"}
                      iconSize={"20px"}
                      iconColor={"#98b8f6"}
                    />
                    
                    {/*<p style={{fontSize: "18px", fontFamily: "Lato", paddingTop: "10px", color: "#98b8f6", marginLeft: "20px"}}>
                        Edit
                    </p>*/}
                    
                    <IconButton
                      iconName={"edit"}
                      iconSize={"20px"}
                      iconColor={"#98b8f6"}
                      textDisplayed={"Edit"}
                      onTap={() => {
                        this.setState({ ...this.state, show: true });
                      }}
                    />
                  </div>
                  <div className="col"></div><div className="col"></div>
                  {/* for regular user */}
                  {
                    this.props.profile.membership == "Regular" &&
                    <div className="col">
                      <IconText
                        style={{marginRight: "10px"}}
                        iconName={"card_membership"}  
                        iconMargin={"6px"}
                        textDisplayed={this.props.profile.membership}
                        textSize={"18px"}
                        fontFamily={"Lato"}
                      />
                    </div>
                  }
                  {
                    this.props.profile.membership == "Regular" &&
                    <div className="upgrade" style={{marginBottom:"10px"}}>
                      {
                        this.props.profile.membership == "Regular" && 
                        <Link className="text-15" style={{color: "#ffffff", textDecoration: "none", lineHeight: "34px", marginLeft: "30px"}} to="/pricing">Upgrade</Link>
                      }
                    </div>
                  }
                  {/* for premium user */}
                  {
                    this.props.profile.membership == "Premium" &&
                    <div className="col" style={{marginLeft:"10px"}}>
                      <img src={premiumIcon} alt="premiumIcon"/>
                      <span style={{marginLeft: "6px"}}>Premium</span>
                    </div>
                  }
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col">
                      <IconText
                        iconName={"phone"}
                        textDisplayed={this.props.profile.phone_number}
                        textSize={"15px"}
                        iconMargin={"3px"}
                      />
                    </div>
                    <div className="col">
                      <IconText
                        iconName={"location_on"}
                        textDisplayed={this.props.profile.location}
                        textSize={"15px"}
                        iconMargin={"3px"}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <IconText
                        iconName={"email"}
                        textDisplayed={this.props.user.email}
                        textSize={"15px"}
                        iconMargin={"3px"}
                      />
                    </div>
                  </div>
                  {this.props.profile.membership == "Premium" &&
                    
                    <input
                      className="form-control"
                      type="text"
                      name={"email_match"}
                      placeholder={"Type and confirm your email to cancel"}
                      onChange={this.handleInputChange}
                      style={{
                        fontSize: "12px",
                        borderRadius: "5px",
                        paddingLeft: "20px",
                      }}
                    />}
                    {this.props.profile.membership == "Premium" &&
                      <button className="btn" type="button" onClick={this.cancelSub}>Cancel Subscriptions</button>
                    }
                  {/*<div className="row">
                    <div className="col">
                      <IconText
                        iconName={"language"}
                        textDisplayed={this.props.user.website}  // todo: enable user website attribute
                        textSize={"15px"}
                        iconMargin={"3px"}
                      />
                    </div>
                </div>*/}
                </div>
                {/*<div className="col-7">
                  <h3 className="text-15">About</h3>
                    <p>{this.props.user.about}</p>  
                </div>*/}
              </div>
            </div>
          </DbCenterRow>
        </div>
        <EditModal
          show={this.state.show}
          location={this.state.location}
          phone_number={this.state.phone_number}
          saveChanges={this.saveChanges}
          handleInputChange={this.handleInputChange}
          hide={this.finishEditing}
        />
      </div>
    );
  }
}

const EditModal = (props) => {
  return (
    <MyModal show={props.show} onHide={props.hide}>
      <div className="container">
        <form style={{ marginBottom: "3%" }}>
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
              type="button"
              className="btn btn-primary"
              onClick={props.saveChanges}
            >
              Submit
            </button>
          </fieldset>
        </form>
        </div>
    </MyModal>
  );
};

export default EssentialUserInfo;