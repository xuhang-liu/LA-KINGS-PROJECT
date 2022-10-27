import React from "react";
import "boxicons";
import { MyModal80 } from "../DashboardComponents";
import { EmailSending } from "../applications/EmailSending";
import SourcingRequestModal from "./SourcingRequestModal";
import axios from "axios";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react';

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
    };

    handleStatusChange2 = (id) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "is_approval": false, "cid": id, "c_status": 2 };
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
                approval_select: 0
            });
        } else {
            this.setState({
                approval_select: 2
            });
        }
        this.setState({ showModal: false });
        if (this.props.sourcing.status == 0) {
            this.setState({ view_status: 1 });
        }
        this.props.refresh();
    }

    hideEmailSending = () => {
        this.setState({ showEmailSending: false })
    }

    openEmailSending = () => {
        this.setState({ showEmailSending: true })
    }

    render() {
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
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center">
                    {(this.props.sourcing.approval == null ? this.state.approval_select : this.props.sourcing.approval) === 0 && <span style={{ color: "#01CFA6" }}>Approve</span>}
                    {(this.props.sourcing.approval == null ? this.state.approval_select : this.props.sourcing.approval) === 1 && <span style={{ color: "#FAC046" }}>On Hold</span>}
                    {(this.props.sourcing.approval == null ? this.state.approval_select : this.props.sourcing.approval) === 2 && <span style={{ color: "#FF4D4F" }}>Reject</span>}
                </div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{(this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.length > 29 ? (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.substring(0, 27) + "..." : (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)}</span></div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{this.props.sourcing.current_title?.length > 29 ? this.props.sourcing.current_title?.substring(0, 27) + "..." : this.props.sourcing.current_title}</span></div>
                <div className="col-2 interview-txt9 mt-2 d-flex justify-content-center" style={{ cursor: "pointer" }} onClick={() => { this.setState({ showModal: true }), this.handleStatusChange(this.props.sourcing.id) }}><span className="title-button3">{this.props.sourcing.current_company_name?.length > 29 ? this.props.sourcing.current_company_name?.substring(0, 27) + "..." : this.props.sourcing.current_company_name}</span></div>
                {(this.props.sourcing.status == null ? this.state.view_status : this.props.sourcing.status) === 0 &&
                    <div
                        className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                        style={{ paddingLeft: "25px", color: "#FF6B00" }}
                    >
                        New
                    </div>}
                {(this.props.sourcing.status == null ? this.state.view_status : this.props.sourcing.status) === 1 &&
                    <div
                        className="col-2 interview-txt9 mt-2 d-flex justify-content-center"
                        style={{ paddingLeft: "25px" }}
                    >
                        Viewed
                    </div>}
                {(this.props.sourcing.status == null ? this.state.view_status : this.props.sourcing.status) === 2 &&
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
                <Modal onClose={() => { this.setState({ showModal: false }), this.props.refresh() }} size={"7xl"} isOpen={this.state.showModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <SourcingRequestModal
                                onHide={() => { this.setState({ showModal: false }) }}
                                handelApproval={this.handelApproval}
                                openEmailSending={this.openEmailSending}
                                job={this.props.job}
                                user={this.props.user}
                                profile={this.props.profile}
                                sourcing={this.props.sourcing}
                                refresh={this.props.refresh}
                                approval_select={(this.state.approval_select != null ? this.state.approval_select : this.props.sourcing.approval)}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
                {/* <div style={{ background: "#E8EDFC" }}>
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
                            approval_select={(this.state.approval_select != null ? this.state.approval_select : this.props.sourcing.approval)}
                        />
                    </MyFullModal1>
                </div> */}
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