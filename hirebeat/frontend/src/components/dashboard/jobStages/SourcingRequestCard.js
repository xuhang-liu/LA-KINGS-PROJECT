import React from "react";
import Select from "react-select";
import "boxicons";
import { MyFullModal1 } from "../DashboardComponents";
import SourcingRequestModal from "./SourcingRequestModal";

export class SourcingRequestCard extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        showModal: false
    }

    render() {
        let draft_select = {};
        if (this.props.sourcing.approval === 0) {
            draft_select = {
                value: 0,
                text: "Approve",
                icon: "bx bxs-circle",
                color: "#01CFA6",
            };
        } else if (this.props.sourcing.approval === 1) {
            draft_select = {
                value: 1,
                text: "On Hold",
                icon: "bx bxs-circle",
                color: "#FAC046",
            };
        } else if (this.props.sourcing.approval === 2) {
            draft_select = {
                value: 2,
                text: "Reject",
                icon: "bx bxs-circle",
                color: "#FF4D4F",
            };
        }

        let options = [
            { value: 0, text: "Approve", icon: "bx bxs-circle", color: "#01CFA6" },
            { value: 1, text: "On Hold", icon: "bx bxs-circle", color: "#FAC046" },
            { value: 2, text: "Reject", icon: "bx bxs-circle", color: "#FF4D4F" },
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
                        isSearchable={false}
                        value={draft_select}
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
                <div className="col-2 interview-txt9 mt-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ showModal: true })}><span className="title-button3">{(this.props.sourcing.first_name+" "+this.props.sourcing.last_name)?.length > 29 ? (this.props.sourcing.first_name+" "+this.props.sourcing.last_name)?.substring(0, 27) + "..." : (this.props.sourcing.first_name+" "+this.props.sourcing.last_name)}</span></div>
                <div className="col-2 interview-txt9 mt-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ showModal: true })}><span className="title-button3">{this.props.sourcing.current_title?.length > 29 ? this.props.sourcing.current_title?.substring(0, 27) + "..." : this.props.sourcing.current_title}</span></div>
                <div className="col-2 interview-txt9 mt-2" style={{ cursor: "pointer" }} onClick={() => this.setState({ showModal: true })}><span className="title-button3">{this.props.sourcing.current_company_name?.length > 29 ? this.props.sourcing.current_company_name?.substring(0, 27) + "..." : this.props.sourcing.current_company_name}</span></div>
                {this.props.sourcing.status === 0 &&
                    <div
                        className="col-2 interview-txt9 mt-2"
                        style={{ paddingLeft: "25px", color: "#FF6B00" }}
                    >
                        New
                    </div>}
                {this.props.sourcing.status === 1 &&
                    <div
                        className="col-2 interview-txt9 mt-2"
                        style={{ paddingLeft: "25px" }}
                    >
                        Viewed
                    </div>}
                {this.props.sourcing.status === 2 &&
                    <div
                        className="col-2 interview-txt9 mt-2"
                        style={{ paddingLeft: "25px" }}
                    >
                        Contacted
                    </div>}
                <div
                    className="col-1 interview-txt9 mt-2 d-flex justify-content-center"
                >
                    {this.props.sourcing.email != null ? (
                        <a href={"mailto: " + this.props.sourcing.email + ""} target="_blank">
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
                    <MyFullModal1 className="light-blue-modal" show={this.state.showModal} onHide={() => { this.setState({ showModal: false }) }}>
                        <SourcingRequestModal
                            onHide={() => { this.setState({ showModal: false }) }}
                            job={this.props.job}
                            user={this.props.user}
                            profile={this.props.profile}
                            sourcing={this.props.sourcing}
                        />
                    </MyFullModal1>
                </div>
            </div>
        );
    }
}


export default SourcingRequestCard;