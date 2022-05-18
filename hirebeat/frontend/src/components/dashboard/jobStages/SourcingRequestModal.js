import React from "react";
import axios from "axios";

export class SourcingRequestModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: this.props.sourcing.notes,
        };
    }

    onChange = (e) => {
        this.setState({ notes: e.target.value });
    }

    addSourcingNotes = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "cid": this.props.sourcing.id, "notes": this.state.notes };
        axios.post("jobs/add-sourcing-candidate-notes", data, config).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid pl-5 mb-4">
                    <button
                        type="button"
                        className="panel-button"
                        onClick={() => { this.props.onHide(), this.props.refresh() }}
                        style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                    >
                        <div className="center-items back-to-text1">
                            <p className="back-to-text1"><i className="bx-fw bx bx-chevron-left"></i> Prospect List</p>
                        </div>
                    </button>
                </div>
                <div className="chart-bg1 container-fluid px-5 py-4 mb-5" style={{ width: '95%' }}>
                    <div
                        className="row pb-4"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <div style={{ color: "#7A7A7A" }}>{this.props.sourcing.current_location}</div>
                        <div style={{ display: "flex" }}>
                            {(this.props.sourcing.phone != null && this.props.sourcing.phone != "") &&
                                <div>
                                    <i className="bx-fw bx bx-phone"></i>
                                    {this.props.sourcing.phone}
                                </div>}
                            {(this.props.sourcing.email != null && this.props.sourcing.email != "") &&
                                <div style={{ paddingLeft: "1rem" }}>
                                    <i className="bx-fw bx bx-envelope"></i>
                                    {this.props.sourcing.email}
                                </div>}
                            {(this.props.sourcing.linkedin_url != null && this.props.sourcing.linkedin_url != "") &&
                                <a
                                    href={this.props.sourcing.linkedin_url}
                                    target="_blank"
                                    style={{ paddingLeft: "1rem" }}
                                >
                                    <i className="bx-fw bx bxl-linkedin-square"></i>
                                    Go to LinkedIn Page
                                </a>}
                        </div>
                    </div>
                    <div
                        className="row pb-2"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "2fr 2fr 1fr",
                            columnGap: "1.2rem",
                        }}
                    >
                        <div>
                            <h1
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: "700",
                                    color: "#090D3A",
                                }}
                            >
                                {(this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.length > 29 ? (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)?.substring(0, 27) + "..." : (this.props.sourcing.first_name + " " + this.props.sourcing.last_name)}
                            </h1>
                            <div
                                style={{
                                    color: "#090D3A",
                                    fontWeight: "500",
                                    fontSize: "1.1rem",
                                }}
                            >
                                {this.props.sourcing.current_title} at <b>{this.props.sourcing.current_company_name}</b>
                            </div>
                            {(this.props.sourcing.current_company_size != null && this.props.sourcing.current_company_size != "") &&
                                <div style={{ paddingBottom: "2rem" }}>
                                    <span
                                        style={{
                                            backgroundColor: "#F3F6F9",
                                            paddingLeft: "0.7rem",
                                            paddingRight: "0.7rem",
                                            paddingTop: "0.2rem",
                                            paddingBottom: "0.2rem",
                                            marginRight: "0.5rem"
                                        }}
                                    >
                                        {this.props.sourcing.current_company_size} Employees
                                    </span>
                                    <span style={{
                                        backgroundColor: "#F3F6F9",
                                        paddingLeft: "0.7rem",
                                        paddingRight: "0.7rem",
                                        paddingTop: "0.2rem",
                                        paddingBottom: "0.2rem",
                                        marginRight: "0.5rem"
                                    }}>
                                        {this.props.sourcing.current_industry}
                                    </span>
                                </div>}
                            <div className={(this.props.sourcing.current_company_size != null && this.props.sourcing.current_company_size != "") ? "" : "mt-5"}>
                                <h3
                                    style={{
                                        fontFamily: "Inter",
                                        fontWeight: "700",
                                        fontSize: "1.6rem",
                                        color: "rgb(9, 13, 58)",
                                    }}
                                >
                                    Previous Experience
                                </h3>
                                <ul
                                    style={{
                                        backgroundColor: "#F3F6F9",
                                        listStyle: "none",
                                        margin: 0,
                                        padding: "0.7rem",
                                        maxWidth: "28rem"
                                    }}
                                >
                                    {(this.props.sourcing.prev_title1 != null && this.props.sourcing.prev_title1 != "") &&
                                        <li style={{ padding: "0.5rem" }}>
                                            <div
                                                style={{ fontWeight: "500", fontSize: "1.1rem" }}
                                            >
                                                {this.props.sourcing.prev_title1} at <b>{this.props.sourcing.prev_company_name1}</b>
                                            </div>
                                            {(this.props.sourcing.prev_company_size1 != null && this.props.sourcing.prev_company_size1 != "") &&
                                                <div>
                                                    <span style={{
                                                        backgroundColor: "#fff",
                                                        paddingLeft: "0.7rem",
                                                        paddingRight: "0.7rem",
                                                        paddingTop: "0.2rem",
                                                        paddingBottom: "0.2rem",
                                                        marginRight: "0.5rem"
                                                    }}>
                                                        {this.props.sourcing.prev_company_size1} Employees
                                                    </span>
                                                    <span style={{
                                                        backgroundColor: "#fff",
                                                        paddingLeft: "0.7rem",
                                                        paddingRight: "0.7rem",
                                                        paddingTop: "0.2rem",
                                                        paddingBottom: "0.2rem",
                                                        marginRight: "0.5rem"
                                                    }}>{this.props.sourcing.prev_company_industry1}</span>
                                                </div>}
                                        </li>}
                                    {(this.props.sourcing.prev_title2 != null && this.props.sourcing.prev_title2 != "") &&
                                        <li style={{ padding: "0.5rem" }}>
                                            <div
                                                style={{ fontWeight: "500", fontSize: "1.1rem" }}
                                            >
                                                {this.props.sourcing.prev_title2} at <b>{this.props.sourcing.prev_company_name2}</b>
                                            </div>
                                            {(this.props.sourcing.prev_company_size2 != null && this.props.sourcing.prev_company_size2 != "") &&
                                                <div>
                                                    <span style={{
                                                        backgroundColor: "#fff",
                                                        paddingLeft: "0.7rem",
                                                        paddingRight: "0.7rem",
                                                        paddingTop: "0.2rem",
                                                        paddingBottom: "0.2rem",
                                                        marginRight: "0.5rem"
                                                    }}>
                                                        {this.props.sourcing.prev_company_size2} Employees
                                                    </span>
                                                    <span style={{
                                                        backgroundColor: "#fff",
                                                        paddingLeft: "0.7rem",
                                                        paddingRight: "0.7rem",
                                                        paddingTop: "0.2rem",
                                                        paddingBottom: "0.2rem",
                                                        marginRight: "0.5rem"
                                                    }}>{this.props.sourcing.prev_company_industry2}</span>
                                                </div>}
                                        </li>}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: "700",
                                    fontSize: "1.6rem",
                                    color: "rgb(9, 13, 58)",
                                }}
                            >
                                Skills
                            </h3>
                            <div
                                style={{
                                    height: "25rem",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    border: "2px solid #F3F6F9",
                                    overflowY: "auto",
                                    padding: "2rem",
                                    alignContent: "start",
                                }}
                            >
                                {this.props.sourcing.skillsets.split(",")?.map((skill) => {
                                    return (
                                        <div
                                            style={{
                                                backgroundColor: "#F3F6F9",
                                                paddingLeft: "0.7rem",
                                                paddingRight: "0.7rem",
                                                paddingTop: "0.2rem",
                                                paddingBottom: "0.2rem",
                                                marginRight: "0.5rem"
                                            }}
                                        >
                                            {skill}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <h3
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: "700",
                                    fontSize: "1.6rem",
                                    color: "rgb(9, 13, 58)",
                                }}
                            >
                                Notes
                            </h3>
                            <textarea
                                style={{
                                    height: "25rem",
                                    width: "100%",
                                    border: "2px solid #F3F6F9",
                                    overflowY: "auto",
                                    padding: "2rem",
                                }}
                                value={this.state.notes}
                                onChange={this.onChange}
                                onBlur={this.addSourcingNotes}
                            ></textarea>
                            <div
                                style={{
                                    marginTop: "0.5rem",
                                }}
                            >
                                {this.props.approval_select.value == 0 ?
                                    <button
                                        className="default-btn1 col-6"
                                        style={{
                                            paddingLeft: "25px",
                                            backgroundColor: "#01CFA6",
                                        }}
                                        onClick={() => this.props.handelApproval(this.props.sourcing.id, 0)}
                                    >
                                        Approve
                                    </button> :
                                    <button
                                        className="default-btn6 col-6"
                                        onClick={() => this.props.handelApproval(this.props.sourcing.id, 0)}
                                    >
                                        Approve
                                    </button>}
                                {this.props.approval_select.value == 2 ?
                                    <button
                                        className="default-btn1 col-6"
                                        style={{
                                            paddingLeft: "25px",
                                            backgroundColor: "rgb(239, 74, 83)",
                                        }}
                                        onClick={() => this.props.handelApproval(this.props.sourcing.id, 2)}
                                    >
                                        Reject
                                    </button> :
                                    <button
                                        className="default-btn7 col-6"
                                        onClick={() => this.props.handelApproval(this.props.sourcing.id, 2)}
                                    >
                                        Reject
                                    </button>}
                            </div>
                            <button
                                className="default-btn1"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    marginTop: "0.5rem",
                                }}
                                onClick={this.props.openEmailSending}
                            >
                                <i className="bx-fw bx bx-envelope"></i>
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SourcingRequestModal;
