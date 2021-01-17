import React, { Component } from "react";
import { IconText } from "./DashboardComponents";
import { connect } from "react-redux";
import { updateProfile, updateUserPassword } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import emailjs from 'emailjs-com';
import axios from "axios";


export class SubpageSetting extends Component {
    state = {
        phone_number: "",
        location: "",
        useremail: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        company_name: "",
    };

    componentDidMount() {
        this.setState({
          phone_number: this.props.profile.phone_number,
          location: this.props.profile.location,
          company_name: this.props.profile.company_name,
        });
      }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        console.log(e.target.value);
      };
    
    saveChanges = () => {
        var profile = this.makeProfile();
        this.props.updateProfile(profile);
    };

    makeProfile = () => {
        return {
          user: this.props.user.id,
          id: this.props.profile.id,
          phone_number: this.state.phone_number,
          location: this.state.location,
          company_name: this.state.company_name,
        };
      };
    
    PasswordCheck = (event) => {
        event.preventDefault();
        console.log(this.state);
        if(this.state.newPassword !== this.state.confirmPassword)
        {
            alert('Password do not match!');
        }
        else if(this.state.newPassword.length < 8)
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
            let user_pw = { "id": this.props.user.id , "password": this.state.oldPassword };
            
            axios.post("api/check_password", user_pw, config).then((res)=>{
            //console.log(res);
            const is_matching = res.data[0];
            if(is_matching)
            {
                let user = {"id": this.props.user.id , "newPassword": this.state.newPassword};
                this.props.updateUserPassword(user);
                this.setState({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: ""
                });
                alert("Changed Password Successfully!");
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
        if(this.state.useremail == this.props.user.email){
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


    render() {
        return(
            <div className="container" style={{width:'60%'}}>
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                        <button type="button" style={{backgroundColor:"#e8edfc", border:"none"}} onClick={this.props.renderApplications}>
                            <IconText
                                iconName={"bx bx-arrow-back bx-sm"}
                                textDisplayed={"Back"}
                                textSize={"18px"}
                                textColor={"#56a3fa"}
                                iconMargin={"3px"}
                            />
                        </button>
                    </div>
                </div>
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                            <IconText
                                iconName={"bx bx-user bx-md"}
                                textDisplayed={"Profile Change"}
                                textSize={"24px"}
                                textColor={"#090D3A"}
                                iconMargin={"3px"}
                            />
                    </div>
                </div>

                <div className="card container">
                    <form style={{ marginBottom: "3%" }} onSubmit={this.saveChanges}>
                            <div className="form-row" style={{marginTop:"1%"}}>
                                {!this.props.profile.is_employer &&
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px" }}>Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name={"phone_number"}
                                        value={this.state.phone_number}
                                        onChange={this.handleInputChange}
                                        placeholder={"Phone Number"}
                                        required="required"
                                    />
                                </div>}
                                {this.props.profile.is_employer &&
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px" }}>Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={"company_name"}
                                        value={this.state.company_name}
                                        onChange={this.handleInputChange}
                                        placeholder={"Company Name"}
                                        required="required"
                                    />
                                </div>}
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px" }}>Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={"location"}
                                        value={this.state.location}
                                        onChange={this.handleInputChange}
                                        placeholder={"Location"}
                                        required="required"
                                        pattern="[0-9 a-z A-Z ]+"
                                        title="Alphabet letters only!"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit Profile
                            </button>
                    </form>
                </div>

                <div className="row" >
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                            <IconText
                                iconName={"bx bx-key bx-md"}
                                textDisplayed={"Change Password"}
                                textSize={"24px"}
                                textColor={"#090D3A"}
                                iconMargin={"3px"}
                            />
                    </div>
                </div>

                <div className="card container">
                    <form style={{ marginBottom: "3%" }} onSubmit={this.PasswordCheck}>
                            <div className="form-row" style={{marginTop:"1%"}}>
                                <div className="form-group col">
                                    <label style={{ fontSize: "17px" }}>Old Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name={"oldPassword"}
                                            value={this.state.oldPassword}
                                            onChange={this.handleInputChange}
                                            placeholder={"old password"}
                                            required="required"
                                        />
                                </div>
                            </div>
                            <div className="form-row" style={{marginTop:"1%"}}>
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px" }}>New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name={"newPassword"}
                                        value={this.state.newPassword}
                                        onChange={this.handleInputChange}
                                        placeholder={"new password"}
                                        required="required"
                                    />
                                </div>
                                <div className="form-group col-6">
                                    <label style={{ fontSize: "17px" }}>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"    
                                        name={"confirmPassword"}
                                        value={this.state.confirmPassword}
                                        onChange={this.handleInputChange}
                                        placeholder={"confirm new password"}
                                        required="required"
                                        pattern="[0-9 a-z A-Z ]+"
                                        title="Alphabet letters only!"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Change Password
                            </button>
                    </form>
                </div>
                {this.props.profile.plan_interval == "Premium" && <div>
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{marginTop:"1%"}}>
                            <IconText
                                iconName={"bx bx-key bx-md"}
                                textDisplayed={"Membership"}
                                textSize={"24px"}
                                textColor={"#090D3A"}
                                iconMargin={"3px"}
                            />
                    </div>
                </div>
                <div className="card container">
                    <form style={{ marginBottom: "3%" }} onSubmit={this.cancelSub}>
                            <div className="form-row" style={{marginTop:"1%"}}>
                                <div className="form-group col">
                                    <label style={{ fontSize: "17px" }}>Type your email to cancel the membership</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name={"useremail"}
                                        value={this.state.useremail}
                                        onChange={this.handleInputChange}
                                        placeholder={"email"}
                                        required="required"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Cancel Membership    
                            </button>
                    </form>
                </div>
                </div>}
            </div>
        )
    };
}

export default connect(null, { updateProfile, updateUserPassword}) (SubpageSetting);