import React from "react";
import Select from "react-select";
import "boxicons";
import { MyFullModal1, MyModal80 } from "../DashboardComponents";
import { EmailSending } from "../applications/EmailSending";
import SourcingRequestModal from "./SourcingRequestModal";
import axios from "axios";

export class SourcingRequestCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        showModal: false,
        showEmailSending: false,
        view_status: null,
        approval_select: null,
    }

    handleStatusChange = (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "is_approval": false, "cid": id, "c_status": 1 };
        axios.post("jobs/switch-sourcing-candidate-status", data, config).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
        // if (this.props.sourcing.status == 0) {
        //     this.setState({ view_status: 1 });
        // }
    };

    handleStatusChange2 = (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "is_approval": false, "cid": id,  "c_status": 2 };
        axios.post("jobs/switch-sourcing-candidate-status", data, config).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
        this.setState({ view_status: 2 });
    };

    handelApproval = (id, approval) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "is_approval": true, "cid": id, "approval": approval };
        axios.post("jobs/switch-sourcing-candidate-status", data, config).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
        if (approval == 0) {
            this.setState({
                approval_select: {
                    value: 0,
                    text: "Approve",
                    icon: "bx bxs-circle",
                    color: "#01CFA6",
                    c_id: this.props.sourcing.id,
                }
            });
        } else {
            this.setState({
                approval_select: {
                    value: 2,
                    text: "Reject",
                    icon: "bx bxs-circle",
                    color: "#FF4D4F",
                    c_id: this.props.sourcing.id,
                }
            });
        }
        this.setState({ showModal: false });
    }

    hideEmailSending = () => {
        this.setState({ showEmailSending: false })
    }

    openEmailSending = () => {
        this.setState({ showEmailSending: true })
    }

    render() {
        var approval_select = {};
        if (this.props.sourcing.approval === 0) {
            approval_select = {
                value: 0,
                text: "Approve",
                icon: "bx bxs-circle",
                color: "#01CFA6",
                c_id: this.props.sourcing.id,
            }
        } else if (this.props.sourcing.approval === 1) {
            approval_select = {
                value: 1,
                text: "On Hold",
                icon: "bx bxs-circle",
                color: "#FAC046",
                c_id: this.props.sourcing.id,
            }
        } else if (this.props.sourcing.approval === 2) {
            approval_select = {
                value: 2,
                text: "Reject",
                icon: "bx bxs-circle",
                color: "#FF4D4F",
                c_id: this.props.sourcing.id,
            }
        }
        let options = [
            { value: 0, text: "Approve", icon: "bx bxs-circle", color: "#01CFA6", c_id: this.props.sourcing.id },
            { value: 1, text: "On Hold", icon: "bx bxs-circle", color: "#FAC046", c_id: this.props.sourcing.id },
            { value: 2, text: "Reject", icon: "bx bxs-circle", color: "#FF4D4F", c_id: this.props.sourcing.id },
        ];
        let customStyles = {
            control: (styles) => ({
                ...styles,
                border: "none",
                width: "8.6rem",
            }),
            singleValue: (styles) => ({
                ...styles,
                color: "#090d3a",
                fontSize: "0.9375rem",
                fontFamily: "Inter,Segoe UI, sans-serif",
                fontWeight: "600",
            }),
            indicatorSeparator: (styles) => ({ ...styles, visibility: "hidden" }),
        };

        return (
            <div
                className="row interview-txt7 interview-center sourcingrow"
                style={{ height: "4em" }}
            >
                <div className="interview-txt9 mt-2" style={{ paddingLeft: "10px" }}>
                    <input
                        type="checkbox"
                        key={this.props.sourcing.id}
                        // onClick={this.props.handleCheck}
                        onChange={this.props.handleCheck}
                        checked={this.props.sourcing.isChecked}
                        value={this.props.sourcing.id}
                    />
                </div>
                <div
                    className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                >
                    <Select
                        onChange={this.props.handleApprovalChange}
                        isSearchable={false}
                        value={this.state.approval_select != null?this.state.approval_select:approval_select}
                        // onChange={this.onFilter}
                        options={options}
                        styles={customStyles}
                        className="select-category-jobs-closed"
                        getOptionLabel={(e) => (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <i style={{ color: e.color }} class={e.icon}></i>
                                <span style={{ marginLeft: "0.5rem" }}>{e.text}</span>
                            </div>
                        )}
                    />
                </div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{(this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.length > 29 ? (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.substring(0, 27) + "..." : (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)}</span></div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{this.props.sourcing.current_title?.length > 29 ? this.props.sourcing.current_title?.substring(0, 27) + "..." : this.props.sourcing.current_title}</span></div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{this.props.sourcing.current_company_name?.length > 29 ? this.props.sourcing.current_company_name?.substring(0, 27) + "..." : this.props.sourcing.current_company_name}</span></div>
                {(this.state.view_status != null ? this.state.view_status : this.props.sourcing.status) === 0 &&
                    <div
                        className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                        style={{ paddingLeft: "25px", color: "#FF6B00" }}
                    >
                        New
                    </div>}
                {(this.state.view_status != null ? this.state.view_status : this.props.sourcing.status) === 1 &&
                    <div
                        className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                        style={{ paddingLeft: "25px" }}
                    >
                        Viewed
                    </div>}
                {(this.state.view_status != null ? this.state.view_status : this.props.sourcing.status) === 2 &&
                    <div
                        className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                        style={{ paddingLeft: "25px" }}
                    >
                        Contacted
                    </div>}
                <div
                    className="col-1 interview-txt9 mt-2 d-flex justify-content-center"
                >
                    {this.props.sourcing.email != null ? (
                        <a href={"mailto:" + this.props.sourcing.email + ""} target="_blank">
                            <i
                                className="bx-fw bx bx-envelope"
                                style={{ color: "#000", paddingTop: "4px" }}
                            ></i>
                        </a>
                    ) : null}
                    {this.props.sourcing.linkedin_url != null ? (
                        <a href={this.props.sourcing.linkedin_url} target="_blank">
                            <i
                                className="bx-fw bx bxl-linkedin-square"
                                style={{ paddingTop: "4px", paddingLeft: "20px" }}
                            ></i>
                        </a>
                    ) : null}
                </div>
                <div style={{ background: "#E8EDFC" }}>
                    <MyFullModal1 className="light-blue-modal" show={this.state.showModal} onHide={() => { this.setState({ showModal: false }), this.props.refresh() }}>
                        <SourcingRequestModal
                            onHide={() => { this.setState({ showModal: false }) }}
                            handelApproval={this.handelApproval}
                            openEmailSending={this.openEmailSending}
                            job={this.props.job}
                            user={this.props.user}
                            profile={this.props.profile}
                            sourcing={this.props.sourcing}
                            refresh={this.props.refresh}
                            approval_select={this.state.approval_select != null?this.state.approval_select:approval_select}
                        />
                    </MyFullModal1>
                </div>
                <MyModal80 show={this.state.showEmailSending} onHide={this.hideEmailSending}>
                    <EmailSending
                        hideEmailSending={this.hideEmailSending}
                        employerProfileDetail={this.props.employerProfileDetail}
                        user={this.props.user}
                        profile={this.props.profile}
                        email={this.props.sourcing.email}
                        jobid={this.props.job.id}
                        first_name={this.props.sourcing.first_name}
                        last_name={this.props.sourcing.last_name}
                        handleStatusChange2={() => this.handleStatusChange2(this.props.sourcing.id)}
                    />
                </MyModal80>
            </div>
        );
    }
}


export default SourcingRequestCard;