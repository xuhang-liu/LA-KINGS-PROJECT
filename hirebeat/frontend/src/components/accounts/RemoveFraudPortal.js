import React, { Component } from "react";
import axios from "axios";

export class RemoveFraudPortal extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        user_email: ""
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ user_email: e.target.value })
    }

    deactiveUser = () => {
        if (this.state.user_email != "") {
            const email = { email: this.state.user_email };
            axios
                .post("accounts/deactivate-fraud-user", email)
                .then((res) => {
                    if (res.data.user_found) {
                        alert(this.state.user_email + " User deactivated Success");
                    } else {
                        alert(this.state.user_email + " User deactivated Fail !!!");
                    }
                })
                .catch(error => {
                    console.log(error)
                });
            this.setState({ user_email: "" });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row p-5">
                        <input style={{width:"20rem", height:"3rem"}} value={this.state.user_email} onChange={this.onChange} type="email" placeholder="Enter email here"></input>
                    </div>
                    <div className="row p-5">
                        <button type="button" className="default-btn1" style={{ paddingLeft: "25px" }}
                            onClick={this.deactiveUser}>Confirm Remove</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default RemoveFraudPortal;