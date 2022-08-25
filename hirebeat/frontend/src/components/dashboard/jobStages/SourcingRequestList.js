import React from "react";
import Select from "react-select";
import "boxicons";
import { SourcingRequestCard } from "./SourcingRequestCard";
import { SourcingRequestForm } from "./SourcingRequestForm";
import axios from "axios";
import { MyModal80 } from "../DashboardComponents";
import { confirmAlert } from 'react-confirm-alert';
import { EmailSending } from '../applications/EmailSending';

export class SourcingRequestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: { value: 3, label: "Prospect Status" },
            approval: { value: 3, label: "Approval" },
            sourcings: [],
            isAllChecked: false,
            countCheck: 0,
            showRequestForm: false,
            keyWords: "",
            showEmailSending: false,
            email_list: null,
        };
    }

    filteredSourcings = []

    componentDidMount() {
        axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
            setTimeout(() => {
                this.filteredSourcings = res.data.data.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                this.setState({
                    sourcings: this.filteredSourcings,
                });
            }, 100);
        })
            .catch(error => {
                console.log(error)
            });
    }

    hideEmailSending = () => {
        this.setState({showEmailSending: false})
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

    handleApprovalChange = (approval) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "is_approval": true, "cid": approval.c_id, "approval": approval.value };
        axios.post("jobs/switch-sourcing-candidate-status", data, config).then((res) => {
            confirmAlert({
                title: "Approval Changed Successful!",
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        }).catch(error => {
            console.log(error)
        });
        var status = this.state.status.value;
        var approval = this.state.approval.value;
        setTimeout(() => {
            axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                var sourcing = res.data.data.filter(function (s) {
                    if (status != 3 && approval != 3) {
                        return s.status === status && s.approval === approval;
                    } else if (approval != 3) {
                        return s.approval === approval;
                    } else if (status != 3) {
                        return s.status === status;
                    } else {
                        return s;
                    }
                });
                this.setState({
                    sourcings: sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false })),
                    isAllChecked: false,
                    countCheck: 0,
                    keyWords: ""
                });
            })
                .catch(error => {
                    console.log(error)
                })
        }, 300);
    };

    handleEmailSend = () => {
        var email_list = []
        this.state.sourcings.map((sourcing) => {
            if (sourcing.isChecked) {
                email_list.push({"email":sourcing.email, "id":sourcing.id, "first_name":sourcing.first_name, "last_name":sourcing.last_name});
            }
        });
        this.setState({email_list: email_list, showEmailSending: true})
    }

    // filter approval selections
    approvalOptions = [
        { value: 3, label: "All" },
        { value: 0, label: "Approve" },
        { value: 1, label: "On Hold" },
        { value: 2, label: "Reject" },
    ];

    // filter selections
    statusOptions = [
        { value: 3, label: "All" },
        { value: 0, label: "New" },
        { value: 1, label: "Viewed" },
        { value: 2, label: "Contacted" },
    ];

    customStyles = {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ?"#fff":"#090D3A",
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
            color: state.isSelected ?"#fff":"#090D3A",
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
        var keyWords = e.target.value.toLowerCase();
        var sourcing = this.filteredSourcings.filter(function (s) {
            return (s.first_name.toLowerCase() + s.last_name.toLowerCase()).includes(keyWords) || s.current_title?.toLowerCase().includes(keyWords) || s.current_company_name?.toLowerCase().includes(keyWords);
        });
        this.setState({
            sourcings: sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false })),
        });

            
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

    onFilter = (approval) => {
        this.setState({ approval: approval });
        var status = this.state.status.value;
        switch (approval.value) {
            case 0:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (status === 0) {
                            return s.approval === 0 && s.status === 0;
                        } else if (status === 1) {
                            return s.approval === 0 && s.status === 1;
                        } else if (status === 2) {
                            return s.approval === 0 && s.status === 2;
                        } else {
                            return s.approval === 0;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            case 1:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (status === 0) {
                            return s.approval === 1 && s.status === 0;
                        } else if (status === 1) {
                            return s.approval === 1 && s.status === 1;
                        } else if (status === 2) {
                            return s.approval === 1 && s.status === 2;
                        } else {
                            return s.approval === 1;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            case 2:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (status === 0) {
                            return s.approval === 2 && s.status === 0;
                        } else if (status === 1) {
                            return s.approval === 2 && s.status === 1;
                        } else if (status === 2) {
                            return s.approval === 2 && s.status === 2;
                        } else {
                            return s.approval === 2;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            default:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (status === 0) {
                            return s.status === 0;
                        } else if (status === 1) {
                            return s.status === 1;
                        } else if (status === 2) {
                            return s.status === 2;
                        } else {
                            return s;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
        }
    }

    onFilter1 = (status) => {
        this.setState({ status: status });
        var approval = this.state.approval.value;
        switch (status.value) {
            case 0:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (approval === 0) {
                            return s.status === 0 && s.approval === 0;
                        } else if (approval === 1) {
                            return s.status === 0 && s.approval === 1;
                        } else if (approval === 2) {
                            return s.status === 0 && s.approval === 2;
                        } else {
                            return s.status === 0;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            case 1:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (approval === 0) {
                            return s.status === 1 && s.approval === 0;
                        } else if (approval === 1) {
                            return s.status === 1 && s.approval === 1;
                        } else if (approval === 2) {
                            return s.status === 1 && s.approval === 2;
                        } else {
                            return s.status === 1;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            case 2:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (approval === 0) {
                            return s.status === 2 && s.approval === 0;
                        } else if (approval === 1) {
                            return s.status === 2 && s.approval === 1;
                        } else if (approval === 2) {
                            return s.status === 2 && s.approval === 2;
                        } else {
                            return s.status === 2;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
            default:
                axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                    var sourcing = res.data.data.filter(function (s) {
                        if (approval === 0) {
                            return s.approval === 0;
                        } else if (approval === 1) {
                            return s.approval === 1;
                        } else if (approval === 2) {
                            return s.approval === 2;
                        } else {
                            return s;
                        }
                    });
                    this.filteredSourcings = sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false }))
                    this.setState({
                        sourcings: this.filteredSourcings,
                        keyWords: ""
                    });
                })
                    .catch(error => {
                        console.log(error)
                    });
                break;
        }
    }

    handleStatusChange2 = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        for(let i = 0; i < this.state.email_list.length; i++){
            let data = { "is_approval": false, "cid": this.state.email_list[i].id,  "c_status": 2 };
            axios.post("jobs/switch-sourcing-candidate-status", data, config).then((res) => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
        }
        setTimeout(() => {
            this.refresh();
            /*
            axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                this.setState({
                    sourcings: res.data.data.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false })),
                });
            })
                .catch(error => {
                    console.log(error)
                })
            */
        }, 300);
    }

    refresh = () => {
        var status = this.state.status.value;
        var approval = this.state.approval.value;
        var keyWords = this.state.keyWords.toLowerCase();
        setTimeout(() => {
            axios.get(`jobs/get-sourcing-request-list-from-jobid?jobid=${this.props.job.id}`).then((res) => {
                var kwFilter = (s) => {
                    return((s.first_name.toLowerCase() + s.last_name.toLowerCase()).includes(keyWords) || s.current_title?.toLowerCase().includes(keyWords) || s.current_company_name?.toLowerCase().includes(keyWords));
                }
                var sourcing = res.data.data.filter(function (s) {
                    if (status != 3 && approval != 3) {
                        return s.status === status && s.approval === approval;
                    } else if (approval != 3) {
                        return s.approval === approval;
                    } else if (status != 3) {
                        return s.status === status;
                    } else {
                        return s;
                    }

                });
                this.filteredSourcings = sourcing;
                sourcing = sourcing.filter(function (s) { return kwFilter(s); })
                this.setState({
                    sourcings: sourcing.sort((a, b) => a.status - b.status).map((post) => ({ ...post, isChecked: false })),
                    isAllChecked: false,
                    countCheck: 0
                });
            })
                .catch(error => {
                    console.log(error)
                })
        }, 300);
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
                                    onChange={this.onFilter}
                                    value={this.state.approval}
                                    options={this.approvalOptions}
                                    styles={this.customStyles}
                                    className="select-category-jobs-closed"
                                    placeholder={"Approval"}
                                    isSearchable={false}
                                />
                            </div>
                            <div className="col-2 d-flex justify-content-center">
                                Prospect Name
                            </div>
                            <div className="col-2 d-flex justify-content-center">
                                Current Position
                            </div>
                            <div className="col-2 d-flex justify-content-center">
                                Current Company
                            </div>
                            <div className="col-2 d-flex justify-content-center" style={{ marginTop: "-8px" }}>
                                <Select
                                    onChange={this.onFilter1}
                                    value={this.state.status}
                                    options={this.statusOptions}
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
                        {sourcings.sort((a, b) => a.status - b.status).map((sourcing) => {
                            return (
                                <SourcingRequestCard
                                    handleCheck={() => this.handleCheck(sourcing.id)}
                                    handleApprovalChange={this.handleApprovalChange}
                                    sourcing={sourcing}
                                    job={this.props.job}
                                    user={this.props.user}
                                    profile={this.props.profile}
                                    employerProfileDetail={this.props.employerProfileDetail}
                                    refresh={this.refresh}
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
                {/* Open Email Sending */}
                <MyModal80 show={this.state.showEmailSending} onHide={this.hideEmailSending}>
                    <EmailSending
                        hideEmailSending={this.hideEmailSending}
                        employerProfileDetail={this.props.employerProfileDetail}
                        user={this.props.user}
                        profile={this.props.profile}
                        email={this.state.email_list}
                        jobid={this.props.job.id}
                        first_name={this.state.email_list}
                        last_name={this.state.email_list}
                        handleStatusChange2={this.handleStatusChange2}
                    />
                </MyModal80>
            </React.Fragment>
        );
    }
}

export default SourcingRequestList;
