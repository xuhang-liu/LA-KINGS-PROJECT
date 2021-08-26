import React, { Component } from "react";
import { IconText } from "./DashboardComponents";
import { connect } from "react-redux";
import { updateProfile, updateUserPassword } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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
    };

    saveChanges = (e) => {
        var profile = this.makeProfile();
        this.props.updateProfile(profile);
        e.preventDefault();
        alert('Update Success!');
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
        if (this.state.newPassword !== this.state.confirmPassword) {
            alert('Password do not match!');
        }
        else if (this.state.newPassword.length < 8) {
            alert('Password needs to be longer than 8 characters.');
        }
        else {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let user_pw = { "id": this.props.user.id, "password": this.state.oldPassword };

            axios.post("api/check_password", user_pw, config).then((res) => {
                //console.log(res);
                const is_matching = res.data[0];
                if (is_matching) {
                    let user = { "id": this.props.user.id, "newPassword": this.state.newPassword };
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
            }).catch(error => {
                    console.log(error)
            });
            // user login judgement, third partiy login.
            // user email /go to database user social auth. Matching function. filter(same user id.) question view.(objects.filter)
        }

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
        if (this.state.useremail == this.props.user.email) {
            this.sendEmail(e);
            if (!this.props.profile.is_employer) {
                var profile = this.makeCancelConfirm();
                this.props.updateProfile(profile);
            }
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

    removeReviewerFromList = (r_email, type) => {
        confirmAlert({
            title: 'Confirm To Remove',
            message: 'Do you want to remove this reviewer from all job positions?',
            buttons: [
                { label: 'Yes', onClick: () => { this.props.removeReviewerFromList({ "r_email": r_email, "type": type }); setTimeout(() => { this.props.getReviewersList(this.props.user.id) }, 300); setTimeout(() => { this.props.getPJobs() }, 300) } },
                { label: 'No' },
            ]
        });
    }


    render() {
        return (
            <div className="container">
                <div style={{ marginBottom: "30px" }}><h3><b><i className="bx-fw bx bx-cog"></i><span className="ml-2">Setting</span></b></h3></div>
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                        {this.props.profile.is_employer ?
                            <button type="button" style={{ backgroundColor: "#e8edfc", border: "none" }} onClick={this.props.renderEmployerProfile}>
                                <IconText
                                    iconName={"bx bx-arrow-back bx-sm"}
                                    textDisplayed={"Back"}
                                    textSize={"18px"}
                                    textColor={"#56a3fa"}
                                    iconMargin={"3px"}
                                />
                            </button> :
                            <button type="button" style={{ backgroundColor: "#e8edfc", border: "none" }} onClick={this.props.renderVideos}>
                                <IconText
                                    iconName={"bx bx-arrow-back bx-sm"}
                                    textDisplayed={"Back"}
                                    textSize={"18px"}
                                    textColor={"#56a3fa"}
                                    iconMargin={"3px"}
                                />
                            </button>}
                    </div>
                </div>
                {!this.props.profile.is_external_reviewer &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Account Information"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>

                        <div className="chart-bg1 container">
                            <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                <div className="form-group col">
                                    <p style={{ fontSize: "17px", color: "#090d3a" }}>Email:</p>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <p style={{ display: 'inline-block', fontSize: "15px" }}>{this.props.user.email}</p>
                                </div>
                            </div>
                            {this.props.profile.is_employer &&
                                <div>
                                    <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                        <div className="form-group col">
                                            <p style={{ fontSize: "17px", color: "#090d3a" }}>Company Job Portal</p>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <a target="_blank" href={"https://hirebeat.co/company-branding/" + this.props.profile.company_name}>https://hirebeat.co/company-branding/{this.props.profile.company_name}<i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                        </div>
                                    </div>
                                </div>}
                            {/*<form style={{ marginBottom: "3%" }} onSubmit={this.saveChanges}>
                                <div className="form-row" style={{ marginTop: "1%" }}>
                                    {!this.props.profile.is_employer &&
                                        <div className="form-group col-6">
                                            <p style={{ fontSize: "17px", color: "#090d3a" }}>Phone Number</p>
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
//                                    {this.props.profile.is_employer &&
//                                    <div className="form-group col-6">
//                                        <label style={{ fontSize: "17px" }}>Company Name</label>
//                                        <input
//                                            type="text"
//                                            className="form-control"
//                                            name={"company_name"}
//                                            value={this.state.company_name}
//                                            onChange={this.handleInputChange}
//                                            placeholder={"Company Name"}
//                                            required="required"
//                                        />
//                                    </div>}
                                    <div className="form-group col-6">
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Location</p>
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
                                    className="default-btn"
                                    style={{ paddingLeft: "25px", textDecoration: "none" }}
                                >
                                    Update Profile
                                </button>
                            </form>*/}
                        </div>
                    </div>}
                {(!this.props.profile.is_external_reviewer && !this.props.profile.is_subreviwer && this.props.profile.is_employer) &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Reviewer List"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="chart-bg1 container">
                            <div className="row pb-4 pt-2" style={{ marginTop: "1%" }}>
                                <div className="col-6 h-100">
                                    <p style={{ fontSize: "17px", color: "#090d3a" }}>Sub-Reviewers</p>
                                    {this.props.sub_r_list.map((s, i) => {
                                        return (
                                            <div className="row ml-1">
                                                <div className="col-1 pt-2">
                                                    <span className={`sub_number${i % 3}`} style={{ color: "white" }}>{s?.split("&")[0]?.substring(0, 2)?.toUpperCase()}</span>
                                                </div>
                                                <div className="col-8">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{s?.split("&")[0]}</p>
                                                    <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "#4a6f8a", marginTop: "0" }}>{s?.split("&")[1]?.toLowerCase()}</p>
                                                </div>
                                                <div className="col-3 pt-3">
                                                    <a onClick={() => this.removeReviewerFromList((s?.split("&")[1]?.toLowerCase()), "sub")} style={{ fontSize: "0.9rem", fontWeight: "600", color: "#87a3f3", textDecoration: "none", cursor: "pointer" }}>Remove</a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-6 h-100">
                                    <p style={{ fontSize: "17px", color: "#090d3a" }}>External Reviewers</p>
                                    {this.props.ext_r_list.map((s, i) => {
                                        return (
                                            <div className="row ml-1">
                                                <div className="col-1 pt-2">
                                                    <span className={`sub_number${i % 3}`} style={{ color: "white" }}>{s?.split("&")[0]?.substring(0, 2)?.toUpperCase()}</span>
                                                </div>
                                                <div className="col-8">
                                                    <p style={{ fontSize: "1rem", fontWeight: "600", color: "#000", marginBottom: "0" }}>{s?.split("&")[0]}</p>
                                                    <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "#4a6f8a", marginTop: "0" }}>{s?.split("&")[1]?.toLowerCase()}</p>
                                                </div>
                                                <div className="col-3 pt-3">
                                                    <a onClick={() => this.removeReviewerFromList((s?.split("&")[1]?.toLowerCase()), "ext")} style={{ fontSize: "0.9rem", fontWeight: "600", color: "#87a3f3", textDecoration: "none", cursor: "pointer" }}>Remove</a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                {(this.props.ext_r_list.length <= 0 && this.props.sub_r_list.length <= 0) &&
                                    <div className="col-12 mt-4">
                                        <p style={{ marginLeft: "25%", fontSize: "1.1rem", fontWeight: "500", color: "#7a7a7a" }}>You haven't invited any reviewers yet.</p>
                                    </div>}
                            </div>
                        </div>
                    </div>
                }
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                        <IconText
                            textDisplayed={"Change Password"}
                            textSize={"24px"}
                            textColor={"#090D3A"}
                            iconMargin={"3px"}
                        />
                    </div>
                </div>

                <div className="chart-bg1 container">
                    <form style={{ marginBottom: "3%" }} onSubmit={this.PasswordCheck}>
                        <div className="form-row" style={{ marginTop: "1%" }}>
                            <div className="form-group col">
                                <p style={{ fontSize: "17px", color: "#090d3a" }}>Old Password</p>
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
                        <div className="form-row" style={{ marginTop: "1%" }}>
                            <div className="form-group col-6">
                                <p style={{ fontSize: "17px", color: "#090d3a" }}>New Password</p>
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
                                <p style={{ fontSize: "17px", color: "#090d3a" }}>Confirm Password</p>
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
                            className="default-btn"
                            style={{ paddingLeft: "25px", textDecoration: "none" }}
                        >
                            Update Password
                        </button>
                    </form>
                </div>
                {(((this.props.profile.plan_interval == "Premium") || (this.props.profile.plan_interval == "Pro")) && (!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer)) &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Membership"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="chart-bg1 container">
                            <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                <div className="form-group col">
                                    <p style={{ fontSize: "17px", color: "#090d3a", display: "inline-block" }}>Current User Group</p>
                                    {this.props.profile.plan_interval == "Premium" &&
                                        <div style={{ borderColor: "#FF6B00", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                            <p style={{ color: "#FF6B00", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                <i className="bx-fw bx bx-diamond bx-xs"></i><span>Premium</span>
                                            </p>
                                        </div>}
                                    {this.props.profile.plan_interval == "Pro" &&
                                        <div style={{ borderColor: "#fac046", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                            <p style={{ color: "#fac046", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                <i className="bx-fw bx bx-diamond bx-xs"></i><span>Pro</span>
                                            </p>
                                        </div>}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col">
                                    <a
                                        href="/employer-pricing"
                                        type="submit"
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", textDecoration: "none" }}
                                    >
                                        Change Plan
                                    </a>
                                </div>
                            </div>
                            {!this.props.profile.is_freetrial &&
                            <form style={{ marginBottom: "3%" }} onSubmit={this.cancelSub}>
                                <div className="form-row" style={{ marginTop: "1%" }}>
                                    <div className="form-group col">
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Type your email to cancel the membership</p>
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
                                    className="default-btn"
                                    style={{ paddingLeft: "25px", textDecoration: "none" }}
                                >
                                    Cancel Membership
                                </button>
                            </form>}
                        </div>
                    </div>}
                {this.props.profile.membership == "Regular" && (!this.props.profile.is_external_reviewer) &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Membership"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="chart-bg1 container">
                            <form style={{ marginBottom: "3%" }} onSubmit={this.cancelSub}>
                                <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                    <div className="form-group col">
                                        <p style={{ fontSize: "17px", color: "#090d3a", display: "inline-block" }}>Current User Group</p>
                                        <div style={{ borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                            <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                <i className="bx-fw bx bx-diamond bx-xs"></i><span>Free Member</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {this.props.profile.is_employer ?
                                    <div>
                                        {!this.props.profile.is_subreviwer &&
                                            <a
                                                href="/employer-pricing"
                                                type="submit"
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", textDecoration: "none" }}
                                            >
                                                Upgrade Plan
                                            </a>}</div> :
                                    <a
                                        href="/pricing"
                                        type="submit"
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", textDecoration: "none" }}
                                    >
                                        Upgrade Plan
                                    </a>}
                            </form>
                        </div>
                    </div>}
            </div>
        )
    };
}

export default connect(null, { updateProfile, updateUserPassword })(SubpageSetting);