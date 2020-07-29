import React, { Component } from "react";
import {
  IconButton,
  DbCenterRow,
  IconText,
  MyModal,
} from "../DashboardComponents";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class EssentialUserInfo extends Component {
  state = {
    show: false,
    phone_number: "",
    location: "",
    filePhoto: "https://hirebeat-assets.s3.amazonaws.com/user.png",
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

  render() {
    return (
      <div className="card container">
        <div className="card-body">
          <DbCenterRow>
            <div className="col-2">
            <img src={this.state.filePhoto} />
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col d-flex align-items-center">
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginRight: "30px",
                    }}
                  >
                    {this.props.user.username}
                  </h1>
                  <div
                    className="d-flex justify-content-end"
                    style={{ width: "100%" }}
                  >
                    <IconButton
                      iconName={"edit"}
                      iconSize={"28px"}
                      iconColor={"#98b8f6"}
                      onTap={() => {
                        this.setState({ ...this.state, show: true });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <IconText
                    iconName={"phone"}
                    textDisplayed={this.props.profile.phone_number}
                    textSize={"15px"}
                  />
                </div>
                <div className="col-3">
                  <IconText
                    iconName={"location_on"}
                    textDisplayed={this.props.profile.location}
                    textSize={"15px"}
                  />
                </div>
                <div className="col-3">
                  <IconText
                    iconName={"card_membership"}
                    textDisplayed={"Membership: " + this.props.profile.membership}
                    textSize={"15px"}
                  />
                  </div>
              </div>
              <div className="row">
                <div className="col">
                  <IconText
                    iconName={"email"}
                    textDisplayed={this.props.user.email}
                    textSize={"15px"}
                  />
                </div>
                {this.props.profile.membership == "Regular" &&
                <div className="col"></div>}
                {this.props.profile.membership == "Regular" &&
                <div className="col">
                {this.props.profile.membership == "Regular" && <Link className="btn" to="/pricing">Upgrade Now</Link>}
              </div>}
              <div className="col">
                  {this.props.profile.membership == "Premium" &&
                  <input
                    className="form-control"
                    type="text"
                    name={"email_match"}
                    placeholder={"Type and confirm your email to cancel"}
                    onChange={this.handleInputChange}
                />}
                {this.props.profile.membership == "Premium" &&
                  <button className="btn" type="button" onClick={this.cancelSub}>Cancel Subscriptions</button>
                }
                </div>
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
          cancelSub={this.cancelSub}
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
