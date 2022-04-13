import React from "react";
import Select from "react-select";
import "boxicons";
import { SourcingRequestCard } from "./SourcingRequestCard";
import { SourcingRequestForm } from "./SourcingRequestForm";
import axios from "axios";
import { MyModal80 } from "../DashboardComponents";

export class SourcingRequestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: { value: "All", label: "All" },
            approval: { value: "All", label: "All" },
            sourcings: [],
            isAllChecked: false,
            countCheck: 0,
            showRequestForm: false,
        };
    }

    componentDidMount() {
        axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
            setTimeout(() => {
                this.setState({
                    sourcings: res.data.data.map((post) => ({ ...post, isChecked: false })),
                });
            }, 100);
        })
            .catch(error => {
                console.log(error)
            });
    }

    handleAllChecked = () => {
        this.setState((prevstate) => {
            const isAllChecked = !prevstate.isAllChecked;
            const sourcings = prevstate.sourcings.map((sourcing) => ({
                ...sourcing,
                isChecked: isAllChecked,
            }));
            //update countcheck after update state
            const countCheck = sourcings.reduce(
                (accu, cur) => (cur.isChecked ? (accu += 1) : accu),
                0
            );
            return { sourcings, isAllChecked, countCheck };
        });
    };

    handleCheck = (id) => {
        this.setState((prevstate) => {
            const sourcings = prevstate.sourcings.map((sourcing) =>
                sourcing.id == id
                    ? { ...sourcing, isChecked: !sourcing.isChecked }
                    : sourcing
            );
            const isAllChecked = sourcings.every((sourcing) => sourcing.isChecked);
            //update countcheck after update state
            const countCheck = sourcings.reduce(
                (accu, cur) => (cur.isChecked ? (accu += 1) : accu),
                0
            );
            return { sourcings, isAllChecked, countCheck };
        });
    };

    handleEmailSend = () => {
        var email_list = []
        this.state.sourcings.map((sourcing) => {
            if (sourcing.isChecked) {
                email_list.push(sourcing.email);
            }
        });
        console.log(email_list);
    }

    // filter approval selections
    options = [
        { value: "All", label: "All" },
        { value: 0, label: "Approve" },
        { value: 1, label: "On Hold" },
        { value: 2, label: "Reject" },
    ];

    // filter selections
    stageOptions = [
        { value: "All", label: "All" },
        { value: 0, label: "New" },
        { value: 1, label: "Viewed" },
        { value: 2, label: "Contacted" },
    ];

    customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: "#090D3A",
        }),
        control: (styles) => ({
            ...styles,
            backgroundColor: "#090D3A",
            border: "none",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#fff",
            fontSize: "0.9375rem",
            fontFamily: "Inter,Segoe UI, sans-serif",
            fontWeight: "500",
        }),
        indicatorSeparator: (styles) => ({ ...styles, visibility: "hidden" }),
        placeholder: (styles) => ({
            ...styles,
            color: "fff",
        }),
    };

    customStyles2 = {
        option: (provided, state) => ({
            ...provided,
            color: "#090D3A",
        }),
        control: (styles) => ({
            ...styles,
            backgroundColor: "#090D3A",
            border: "none",
            width: "170px",
        }),
        singleValue: (styles) => ({
            ...styles,
            color: "#fff",
            fontSize: "0.9375rem",
            fontFamily: "Inter,Segoe UI, sans-serif",
            fontWeight: "500",
        }),
        indicatorSeparator: (styles) => ({ ...styles, visibility: "hidden" }),
        placeholder: (styles) => ({
            ...styles,
            color: "fff",
        }),
    };

    onChange = (e) => {
        this.setState({ keyWords: e.target.value });
    };

    setShowRequest = () => {
        this.setState({
            showRequestForm: true
        })
    }

    setHideRequest = () => {
        this.setState({
            showRequestForm: false
        })
    }

    render() {
        const { sourcings, isAllChecked, countCheck } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid pb-5">
                    <div
                        style={{
                            fontSize: "1rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div
                            className="sourcingtitle-hover-orange"
                            style={{ cursor: "pointer", display: "flex", color: "#444" }}
                        >
                            <b>
                                <i
                                    className="bx-fw bx bx-chevron-left bx-sm"
                                    style={{ paddingTop: "2px" }}
                                ></i>
                                <span
                                    className="ml-2"
                                    style={{
                                        verticalAlign: "middle",
                                        fontSize: "20px",
                                    }}
                                    onClick={() => this.props.setrequestListHide()}
                                >
                                    Back to Pipeline
                                </span>
                            </b>
                        </div>
                        <div style={{ display: "flex" }}>
                            <span style={{ paddingTop: "5px" }}>
                                <i
                                    style={{
                                        position: "absolute",
                                        marginLeft: "0.5rem",
                                        marginTop: "0.5rem",
                                        color: "#7A7A7A",
                                    }}
                                    className="bx bx-search bx-sm"
                                ></i>
                                <input
                                    placeholder="Search candidate"
                                    className="search-candidate-input"
                                    style={{
                                        height: "auto",
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                    }}
                                    value={this.state.keyWords}
                                    onChange={this.onChange}
                                ></input>
                            </span>

                            <div>
                                <button
                                    className="default-btn1 interview-txt6 sourcingRequest"
                                    style={{
                                        paddingLeft: "50px",
                                        paddingRight: "50px",
                                        marginLeft: "2rem",
                                        backgroundColor: "#FF6B00",
                                        color: "#fff",
                                    }}
                                    onClick={this.setShowRequest}
                                >
                                    Request Again
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="chart-bg1 container-fluid py-2"
                        style={{
                            marginTop: "1rem",
                            backgroundColor: "#090D3A",
                        }}
                    >
                        <div
                            className="row interview-txt7"
                            style={{
                                height: "2rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0.5rem",
                                color: "#fff",
                            }}
                        >
                            <div style={{ paddingLeft: "10px" }}>
                                <input
                                    type="checkbox"
                                    checked={isAllChecked}
                                    onChange={this.handleAllChecked}
                                />
                            </div>
                            <div
                                className="col-2 d-flex justify-content-center"
                                style={{ marginTop: "-8px" }}
                            >
                                <Select
                                    // onChange={this.onFilter}
                                    options={this.options}
                                    styles={this.customStyles}
                                    className="select-category-jobs-closed"
                                    placeholder={"Approval"}
                                    isSearchable={false}
                                />
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                Prospect Name
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                Current Position
                            </div>
                            <div className="col-2 d-flex justify-content-start">
                                Current Company
                            </div>
                            <div className="col-2" style={{ marginTop: "-8px" }}>
                                <Select
                                    // onChange={this.onFilter}
                                    options={this.stageOptions}
                                    styles={this.customStyles2}
                                    className="select-category-jobs-closed"
                                    placeholder={"Prospect Status"}
                                    isSearchable={false}
                                />
                            </div>
                            <div className="col-1 d-flex justify-content-center">
                                Contact
                            </div>
                        </div>
                    </div>
                    <div
                        className="chart-bg1 container-fluid"
                        style={{ border: "none", height: "24rem", overflowY: "auto" }}
                    >
                        {sourcings.map((sourcing) => {
                            return (
                                <SourcingRequestCard
                                    handleCheck={() => this.handleCheck(sourcing.id)}
                                    sourcing={sourcing}
                                    job={this.props.job}
                                    user={this.props.user}
                                    profile={this.props.profile}
                                />
                            );
                        })}
                    </div>
                </div>
                {countCheck == 0 ? (
                    <button
                        className="default-btn"
                        style={{
                            paddingLeft: "25px",
                            border: "1px solid #006DFF",
                            backgroundColor: "#fff",
                            color: "#006DFF",
                            marginLeft: "1rem"
                        }}
                    >
                        Email
                    </button>
                ) : countCheck == 1 ? (
                    <button
                        className="default-btn"
                        style={{
                            paddingLeft: "25px",
                            marginLeft: "1rem"
                        }}
                        onClick={this.handleEmailSend}
                    >
                        Email
                    </button>
                ) : (
                    <button
                        className="default-btn"
                        style={{
                            paddingLeft: "25px",
                            marginLeft: "1rem"
                        }}
                        onClick={this.handleEmailSend}
                    >
                        Email All
                    </button>
                )}
                {/* Open Sourcing Form */}
                <MyModal80
                    show={this.state.showRequestForm}
                    onHide={this.setHideRequest}
                >
                    <SourcingRequestForm
                        setHideRequest={this.setHideRequest}
                        job={this.props.job}
                        user={this.props.user}
                        profile={this.props.profile}
                    />
                </MyModal80>
            </React.Fragment>
        );
    }
}

export default SourcingRequestList;
