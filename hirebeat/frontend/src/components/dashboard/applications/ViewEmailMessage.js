import React, { Component } from "react";
import axios from "axios";

export class ViewEmailMessage extends Component {

    constructor(props) {
        super(props);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "applicantEmail": this.props.applicantEmail, "companyname": this.props.employerProfileDetail.name };
        axios.post("jobs/get-email-message-list", data, config).then((res) => {
            this.setState({
                emailList: res.data.data
            })
        }).catch(error => {
            console.log(error)
        });
    }

    state = {
        emailList: []
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "40rem", overflow: "auto" }}>
                    <div className="py-5 px-4">
                        {this.state.emailList.sort((a, b) => (b?.create_date === null) - (a?.create_date === null) || (new Date(b?.create_date) - new Date(a?.create_date))).map((eml, index) => {
                            if (!eml?.is_received) {
                                if (window?.atob(eml?.from_email?.split("@")[0]?.split("<")[1]?.split("-")[1]) == this.props.jobid) {
                                    return (
                                        <div className="row mb-3">
                                            <div className="col-7">
                                                <div className="d-flex justify-content-start">
                                                    <i className='bx-fw bx bxs-user-circle bx-md' style={{ color: "#006dff" }}></i>
                                                    <h3 className="profile-h3" style={{ fontSize: "1rem" }}>{window?.atob(eml?.from_email?.split("@")[0]?.split("<")[1]?.split("-")[0])}</h3>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <div className="p-3" style={{ borderRadius: "0px 21px 21px 21px", backgroundColor: "#F5F5F5" }}>
                                                        <h3 className="profile-h3" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Subject: Next step</h3>
                                                        <h3 className="profile-p" style={{ fontSize: "0.9rem" }}>My name is Yunning Tian. I’m from XXXX. I ‘m here to XXXXX. Before the interview, you still need to xxxxxxxxxx. You can access the evaluation at xxxxxxx.com.</h3>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <p style={{ fontSize: "0.6rem", color: "#7E8993", paddingLeft: "1rem" }}>17:39 on 03/04/2022(EST)</p>
                                                </div>
                                            </div>
                                            <div className="col-5" />
                                        </div>
                                    )
                                }
                            } else {
                                if (window?.atob(eml?.to_email?.split("@")[0]?.split("<")[1]?.split("-")[1]) == this.props.jobid) {
                                    return (
                                        <div className="row mb-3">
                                            <div className="col-5" />
                                            <div className="col-7">
                                                <div className="d-flex justify-content-end">
                                                    <h3 className="profile-h3" style={{ fontSize: "1rem" }}>{eml?.from_email?.split("<")[0]}</h3>
                                                    <i className='bx-fw bx bxs-user-circle bx-md' style={{ color: "#ff6b00" }}></i>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <div className="p-3" style={{ borderRadius: "0px 21px 21px 21px", backgroundColor: "#F5F5F5" }}>
                                                        <h3 className="profile-h3" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Subject: Next step</h3>
                                                        <h3 className="profile-p" style={{ fontSize: "0.9rem" }}>My name is Yunning Tian. I’m from XXXX. I ‘m here to XXXXX. Before the interview, you still need to xxxxxxxxxx. You can access the evaluation at xxxxxxx.com.</h3>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <p style={{ fontSize: "0.6rem", color: "#7E8993", paddingLeft: "1rem" }}>17:39 on 03/04/2022(EST)</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ViewEmailMessage;