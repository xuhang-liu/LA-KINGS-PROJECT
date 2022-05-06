import React, { Component } from "react";
import { IconText } from "./DashboardComponents";
import { connect } from "react-redux";
import { updateProfile, updateUserPassword, logout } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import emailjs from 'emailjs-com';
import axios from "axios";
import { MessageClient } from "cloudmailin";
import { MyModalUpgrade } from "./DashboardComponents";
import 'boxicons';

export class SubpageSetting extends Component {
    state = {
        phone_number: "",
        location: "",
        useremail: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
        company_name: "",
        change_name_switch: false,
        code: "",
        codeMsg: "",
        codeErr: "",
        codePlan: "",
        confirmShow: false,
        infoShow: false,
        matchemail: "",
        emailerr: false,
        deleteEnable: true,
    };

    componentDidMount() {
        this.setState({
            phone_number: this.props.profile.phone_number,
            location: this.props.profile.location,
            company_name: this.props.profile.company_name,
        });

        if (this.props.profile.request_delete == true){
            this.setState({deleteEnable: false})
        }
    }

    componentDidUpdate(){
        if (this.state.checkInactivate){
            // setTimeout(() => {this.props.logout()}, 300); 
            setTimeout(() => window.location.reload(),250);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.codeMsgDisappear);
    }

    stripeCustomerPortal = () => {
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "id": this.props.user.id };

        axios.post("api/go_stripe_customer_portal", data, config).then((res) => {
            //console.log(res);
            const session_url = res['data']['session_url'];
            window.location.href = session_url;
        }).catch(error => {
            console.log(error)
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

    codeCheck = (event) => {
        event.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        };
        let user_code = { "id": this.props.user.id, "code": this.state.code };
        this.setState({
            codeErr: "",
            codeMsg: ""
        })
        axios.post("api/check_code", user_code, config).then(res => {
            let result = res.data
            if (result["error"] != null) {
                this.setState({ codeErr: result["error"] })
            }
            else if (result["msg"] != null) {
                this.setState({ codeMsg: result["msg"] })
                if (result["plan"] != null) {
                    this.setState({ codePlan: result["plan"] })
                    this.props.updateProfile({
                        user: this.props.user.id,
                        id: this.props.profile.id,
                        plan_interval: this.state.codePlan
                    });
                    if (this.props.profile.membership == "Premium" && (!this.props.profile.is_freetrial)) {
                        const client = new MessageClient({ username: "f70b2f948c506dea", apiKey: "QGkNZHiEHn5VfDqez9RkspVa" });
                        client.sendMessage({
                            to: "xuhang.liu@hirebeat.co",
                            from: "HireBeat_Team@hirebeat.email",
                            plain: this.props.user.email+" redeem a code.",
                            subject: "HireBeat System notification"
                        });
                    }
                }
                this.codeMsgDisappear = setTimeout(() => this.setState({ codeMsg: "" }), 4000)
            }

        }).catch(error => console.log(error))
        this.setState({code:""})
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

    switch_name_change_on = () => {
        this.setState({
            change_name_switch: true
        });
    }

    switch_name_change_off = () => {
        this.setState({
            change_name_switch: false
        });
    }

    save_name_change = () => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = {
            "user_id": this.props.user.id,
            "firstname": firstName,
            "lastname": lastName
        };

        axios.post("update-employer-name", data, config).then((res) => {
            console.log(res);
            this.props.getEmployerProfileDetail(this.props.user.id);
            this.setState({
                change_name_switch: false
            });
        }).catch(error => {
            console.log(error)
        });
    }

    handleConfirm = () => {
        this.setState({confirmShow: true})
    }

    setHideConfirm =() => {
        this.setState({confirmShow: false, matchemail: "", emailerr: false})
    }

    handleInfo = () => {
        this.setState({infoShow: true})
    }

    setHideInfo =() => {
        this.setState({infoShow: false})
    }

    confirmDelete =(e) => {
        e.preventDefault()
        this.setState({matchemail: event.target.matchemail.value})
        if (this.state.matchemail?.toLowerCase() !== this.props.user.email?.toLowerCase()){
            this.setState({emailerr: true})
            setTimeout(() => this.setState({matchemail: ""}), 1000)
        }
        else{
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            let user_email = {"id": this.props.user.id, "email": this.state.matchemail}
            axios.post("api/delete_account", user_email, config).then((res) => {
                if (res.data["msg"] != null){                  
                    this.setState({confirmShow: false, infoShow: true, matchemail: "", deleteEnable: false})                 
                }
            }).catch(err => console.log(err))           
        }
        
        setTimeout(() => this.setState({emailerr: false}), 4000)
    }

    render() {
        return (
            <>
            <div className="container">
                <div style={{ marginBottom: "30px" }}><h3><b><i className="bx-fw bx bx-cog"></i><span className="ml-2">Setting</span></b></h3></div>
                <div className="row" >
                    <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                        {!this.props.profile.is_employer &&
                            // (this.props.profile.is_external_reviewer || this.props.profile.is_subreviwer) ?
                            //     <button
                            //         type="button"
                            //         className="panel-button"
                            //         onClick={this.props.renderJobs}
                            //         style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            //     >
                            //         <div className="center-items back-to-text">
                            //             <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back</p>
                            //         </div>
                            //     </button> :
                            //     <button
                            //         type="button"
                            //         className="panel-button"
                            //         onClick={this.props.renderEmployerProfile}
                            //         style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            //     >
                            //         <div className="center-items back-to-text">
                            //             <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back</p>
                            //         </div>
                            //     </button> :
                            <button
                                type="button"
                                className="panel-button"
                                onClick={this.props.renderVideos}
                                style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                            >
                                <div className="center-items back-to-text">
                                    <p className="back-to-text"><i className="bx-fw bx bx-arrow-back"></i> Back</p>
                                </div>
                            </button>}
                    </div>
                </div>
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
                                <p style={{ fontSize: "17px", color: "#090d3a" }}>Email</p>
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
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Name <i className="bx bx-edit-alt" style={{ cursor: "pointer", color: "#006dff", marginLeft: "1rem" }} onClick={() => this.switch_name_change_on()}></i></p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        {!this.state.change_name_switch ?
                                            <p style={{ display: 'inline-block', fontSize: "15px" }}>{this.props.employerProfileDetail?.f_name + " " + this.props.employerProfileDetail?.l_name}</p> :
                                            <div>
                                                <p style={{ display: 'inline-block', fontSize: "15px" }}>First Name</p>
                                                <input id="firstName" defaultValue={this.props.employerProfileDetail?.f_name}></input>
                                                <p style={{ display: 'inline-block', fontSize: "15px", marginLeft: "1rem" }}>Last Name</p>
                                                <input id="lastName" defaultValue={this.props.employerProfileDetail?.l_name}></input>
                                                <div className="profile-edit">
                                                    <span style={{ cursor: "pointer" }} onClick={() => this.save_name_change()}>Save</span>
                                                    <span style={{ cursor: "pointer", color: "#979797", marginLeft: "1rem" }} onClick={() => this.switch_name_change_off()}>Cancel</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {/* <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                    <div className="form-group col">
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Company Job Portal</p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <a target="_blank" href={"https://app.hirebeat.co/company-branding/" + this.props.profile.company_name}>https://app.hirebeat.co/company-branding/{this.props.profile.company_name}<i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                    </div>
                                </div> */}
                            </div>
                        }
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
                </div>
                {(!this.props.profile.is_external_reviewer && !this.props.profile.is_subreviwer && this.props.profile.is_employer) &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Hiring Team"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="chart-bg1 container">
                            <div className="row pb-4 pt-2" style={{ marginTop: "1%" }}>
                                <div className="col-6 h-100">
                                    <p style={{ fontSize: "17px", color: "#090d3a" }}>Reviewers</p>
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
                                    <p style={{ fontSize: "17px", color: "#090d3a" }}>Hiring Managers</p>
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
                                <p style={{ fontSize: "17px", color: "#090d3a" }}>Current Password</p>
                                <input
                                    type="password"
                                    className="form-control"
                                    name={"oldPassword"}
                                    value={this.state.oldPassword}
                                    onChange={this.handleInputChange}
                                    placeholder={"current password"}
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
                {(((this.props.profile.plan_interval == "Premium") || (this.props.profile.plan_interval == "Pro")) && (!this.props.profile.is_employer)) &&
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
                {(((this.props.profile.plan_interval == "Premium") || (this.props.profile.plan_interval == "Pro")) && (!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer) && (this.props.profile.is_employer)) &&
                    <div>
                        <div className="row" >
                            <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                <IconText
                                    textDisplayed={"Subscription"}
                                    textSize={"24px"}
                                    textColor={"#090D3A"}
                                    iconMargin={"3px"}
                                />
                            </div>
                        </div>
                        <div className="chart-bg1 container">
                            <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                <div className="form-group col">
                                    <p style={{ fontSize: "17px", color: "#090d3a", display: "inline-block" }}>Current Plan</p>
                                    {this.props.profile.plan_interval == "Premium" &&
                                        <div style={{ borderColor: "#FF6B00", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                            <p style={{ color: "#FF6B00", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                <i className="bx-fw bx bx-diamond bx-xs"></i><span>Premium</span>
                                            </p>
                                        </div>}
                                    {this.props.profile.plan_interval == "Pro" &&
                                        <div style={{ borderColor: "#fac046", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                            <p style={{ color: "#fac046", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                <i className="bx-fw bx bx-diamond bx-xs"></i>
                                                {this.props.profile.position_limit == 5 &&
                                                    <span>Pro</span>}
                                                {this.props.profile.position_limit == 1 &&
                                                    <span>Basic Plan</span>}
                                                {this.props.profile.position_limit == 10 &&
                                                    <span>Pro Plus</span>}
                                                {this.props.profile.position_limit == 50 &&
                                                    <span>Premium Lite</span>}
                                            </p>
                                        </div>}
                                    {this.props.profile.is_freetrial &&
                                        <p className="ml-2">Free trial ends in {parseInt((new Date(this.props.profile.datejoined).getDate() + 14) - (new Date().getDate())) >= 0 ? parseInt((new Date(this.props.profile.datejoined).getDate() + 14) - (new Date().getDate())) : "0"} days</p>}
                                </div>
                            </div>

                            {this.state.codeMsg.length != 0 ? <div style={{ border: "1px solid #B7EB8F", backgroundColor: "#F6FFED", padding: "10px", verticalAlign: "middle" }}><i className="bx bxs-check-circle" style={{ color: "green" }}></i><span className="ml-2" style={{ color: "#000", fontWeight: "bolder" }}>{this.state.codeMsg}</span></div> : null}

                            <div className="form-row">
                                <div className="form-group col">
                                    {((this.props.profile.customer_id != "" && this.props.profile.customer_id != null && this.props.profile.customer_id != "none") && (!this.props.profile.is_freetrial)) &&
                                        <div>
                                            <button className="default-btn" style={{ paddingLeft: "25px" }} onClick={this.stripeCustomerPortal}>Manage Subscription</button>
                                        </div>
                                    }
                                </div>
                            </div>
                            <form style={{ marginBottom: "3%" }} onSubmit={this.codeCheck}>
                                <div className="form-row" style={{ marginTop: "1%" }}>
                                    <div className="form-group col">
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Redeem a Promo Code</p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            value={this.state.code}
                                            onChange={this.handleInputChange}
                                            placeholder="Enter promo code"
                                            required="required"
                                        />

                                        {this.state.codeErr.length != 0 ? <><i className="bx bxs-x-circle" style={{ color: '#FB0000' }}></i><span className="ml-2">{this.state.codeErr}</span></> : null}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="default-btn"
                                    style={{ paddingLeft: "25px", textDecoration: "none" }}
                                >
                                    Apply
                                </button>
                            </form>
                        </div>
                    </div>}
                {(this.props.profile.membership == "Regular" && (!this.props.profile.is_external_reviewer) && (!this.props.profile.is_subreviwer)) &&
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
                            <form style={{ marginBottom: "3%" }}>
                                <div className="form-row" style={{ marginTop: "1%", marginBottom: "-1.6%" }}>
                                    {(this.props.profile.is_employer) ?
                                        <div className="form-group col">
                                            <p style={{ fontSize: "17px", color: "#090d3a", display: "inline-block" }}>Current User Group</p>
                                            <div style={{ borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                                <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                    <span>Free</span>
                                                </p>
                                            </div>
                                        </div> :
                                        <div className="form-group col">
                                            <p style={{ fontSize: "17px", color: "#090d3a", display: "inline-block" }}>Current User Group</p>
                                            <div style={{ borderColor: "#7D7D7D", borderWidth: "2px", borderRadius: "5px", borderStyle: "solid", display: "inline-block", marginLeft: "1rem" }}>
                                                <p style={{ color: "#7D7D7D", fontSize: "14px", paddingLeft: "3px", paddingRight: "3px" }}>
                                                    <span>Free</span>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                {this.props.profile.is_employer ?
                                    <div>
                                        {!this.props.profile.is_subreviwer &&
                                            <a
                                                href="/employer-pricing"
                                                className="default-btn"
                                                style={{ paddingLeft: "25px", textDecoration: "none" }}
                                            >
                                                Upgrade Plan
                                            </a>}</div> :
                                    <a
                                        href="/pricing"
                                        className="default-btn"
                                        style={{ paddingLeft: "25px", textDecoration: "none" }}
                                    >
                                        Upgrade Plan
                                    </a>}
                            </form>

                            <form style={{ marginBottom: "3%" }} onSubmit={this.codeCheck}>
                                <div className="form-row" style={{ marginTop: "1%" }}>
                                    <div className="form-group col">
                                        <p style={{ fontSize: "17px", color: "#090d3a" }}>Redeem a Promo Code</p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            value={this.state.code}
                                            onChange={this.handleInputChange}
                                            placeholder="Enter promo code"
                                            required="required"
                                        />

                                        {this.state.codeErr.length != 0 ? <><i className="bx bxs-x-circle" style={{ color: '#FB0000' }}></i><span className="ml-2">{this.state.codeErr}</span></> : null}
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="default-btn"
                                    style={{ paddingLeft: "25px", textDecoration: "none" }}
                                >
                                    Apply
                                </button>
                            </form>
                        </div>
                    </div>}                 
            </div> 
            {this.props.profile.is_employer ? <div className="container" style={{marginTop:" 30px"}}>
                {this.state.deleteEnable ? <button type="submit" onClick={this.handleConfirm} className="default-btn" style={{ paddingLeft: "50px", "paddingRight": "50px", textDecoration: "none", color: "#7A7A7A", backgroundColor: "rgb(243, 246, 249)", border: "1px solid #7A7A7A", float:"right"}}>Delete Account</button>
                : <button disabled className="default-btn" style={{ cursor: "not-allowed", paddingLeft: "50px", "paddingRight": "50px", textDecoration: "none", color: "#7A7A7A", backgroundColor: "rgb(243, 246, 249)", border: "1px solid #7A7A7A", float:"right"}}>Deletion Scheduled</button>}
            </div> : null}
            {/* confirm email modal */}
            {<MyModalUpgrade
                show={this.state.confirmShow}
                onHide={this.setHideConfirm}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem", textAlign: "center"}}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem"}}>Are you sure?</h3>
                  <i className="bx bxs-help-circle text-55" style={{ color: '#FAC046' }}></i>
                  <p style={{color: "#7A7A7A"}}>
                  This action cannot be undone. This will permanently wipe all information and data under your account, including job postings, candidate information, notes, etc, and remove all collaborator associations.
                  <br />
                  <br />
                  If this is the super admin account (primary subscriber for the company), a permanent deletion will also remove all your collaborator's accounts associated with your company. We will cancel all future billings but we do not refund past payments.
                  <br />
                  <br />
                  Please type your account email below to confirm deleting this account.
                  </p>
                  <form onSubmit={this.confirmDelete}>
                      <div className="row" style={{margin: "auto", width: "70%", paddingBottom: "10px"}}>
                      <input
                        type="email"
                        className="form-control inputInModal"
                        name="matchemail"
                        value={this.state.matchemail}
                        onChange = {this.handleInputChange}
                        placeholder="type your account email here"
                        required="required"
                        style={{border: "1px solid #cecfdf", padding: "0 15px"}}
                      />
                      {this.state.emailerr ? 
                      <div style={{colo: "#C9C9C9"}}>
                        <div>
                            <i className="bx-fw bx bxs-x-circle" style={{ color: '#FF4D4F' }}></i>
                            <span>Email does not match your account.</span>
                        </div>
                        <div style={{textAlign: "left", paddingLeft: "1.6em"}}>Please try again.</div> 
                      </div>: null}
                  </div>
                  <div style={{ margin: "auto", width: "70%", display: "flex", justifyContent: "space-between"}}>                    
                      <button type="submit" className="default-btn" style={{ width: "45%", paddingLeft: "18px",paddingTop: "8px", paddingBottom: "8px", textDecoration: "none", color: "#7A7A7A", backgroundColor: "rgb(243, 246, 249)", border: "1px solid #7A7A7A", whiteSpace: "nowrap"}}>Delete Forever</button>
                      <button onClick={this.setHideConfirm} className="default-btn" style={{ width: "45%", paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px"}}>Cancel</button>
                  </div>
                  </form>
                </div>
            </MyModalUpgrade> }
            {/* Delete Info */}
            {<MyModalUpgrade
                show={this.state.infoShow}
                onHide={this.setHideInfo}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem", textAlign: "center"}}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem"}}>We are sorry that you leave...</h3>
                  <i className="bx bxs-check-circle text-55" style={{ color: '#01CFA6' }}></i>
                  <p style={{color: "#7A7A7A"}}>
                  You have requested a permanent deletion of your account. The data self-destruct is scheduled, and your data will be completely deleted within one business day.
                  <br />
                  <br />
                  You will not have access to this account after the deletion process is complete.
                  </p>
                  <button onClick={this.setHideInfo} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px"}}>Got it</button>
                </div>
            </MyModalUpgrade> }
            </>
        )
    };
}

export default connect(null, { updateProfile, updateUserPassword, logout })(SubpageSetting);