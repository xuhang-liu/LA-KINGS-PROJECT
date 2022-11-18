import React, { Component } from "react";
import axios from "axios";
import parse from 'html-react-parser';

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
                <div className="container-fluid" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "32rem", overflow: "auto" }}>
                    <div className="py-5 px-4">
                        {this.state.emailList.sort((a, b) => (b?.create_date === null) - (a?.create_date === null) || (new Date(b?.create_date) - new Date(a?.create_date))).map((eml, index) => {
                            let new_date = new Date(eml?.create_date)
                            let timehour = new_date?.toLocaleString('en-US', { timeZone: 'EST' });
                            let time = timehour?.split(",")[1]
                            let date = timehour?.split(",")[0]
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
                                                    <div className="p-3" style={{ borderRadius: "0px 21px 21px 21px", backgroundColor: "#F5F5F5", minWidth:"40rem", marginLeft:"2rem" }}>
                                                        <h3 className="profile-h3" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Subject: {eml?.subject}</h3>
                                                        <h3 className="profile-p" style={{ fontSize: "0.9rem" }}>{parse(""+eml?.plain_text+"")}</h3>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <p style={{ fontSize: "0.6rem", color: "#7E8993", paddingLeft: "3rem" }}>{time} on {date}(EST)</p>
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
                                                    <h3 className="profile-h3" style={{ fontSize: "1rem" }}>{this.props.first_name+" "+this.props.last_name}</h3>
                                                    <i className='bx-fw bx bxs-user-circle bx-md' style={{ color: "#ff6b00" }}></i>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <div className="p-3" style={{ borderRadius: "21px 0px 21px 21px", backgroundColor: "#F5F5F5", width:"41rem" }}>
                                                        <h3 className="profile-h3" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Subject: {eml?.subject}</h3>
                                                        <h3 className="profile-p" style={{ fontSize: "0.9rem", whiteSpace:"pre-line" }}>{eml?.plain_text}</h3>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-start">
                                                    <p style={{ fontSize: "0.6rem", color: "#7E8993", paddingLeft: "1rem" }}>{time} on {date}(EST)</p>
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