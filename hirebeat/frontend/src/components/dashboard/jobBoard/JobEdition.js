import React, { Component } from "react";
import 'boxicons';
import { confirmAlert } from 'react-confirm-alert';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getZRFeedXML, getZRPremiumFeedXML } from "../../../redux/actions/job_actions";
import {SkillSet} from "./Constants";
import Autocomplete from "react-google-autocomplete";
import Switch from "react-switch";

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' }
    ],
    // BLOCK_TYPE_DROPDOWN: [
    //     { label: 'Normal', style: 'unstyled' },
    //     { label: 'Heading Large', style: 'header-one' },
    //     { label: 'Heading Medium', style: 'header-two' },
    //     { label: 'Heading Small', style: 'header-three' }
    // ],
    BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' }
    ]
};

export class JobEdition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: this.props.jobInfo.job_title,
            jobId: this.props.jobInfo.job_id,
            jobLocation: this.props.jobInfo.job_location,
            jobDescription: RichTextEditor.createValueFromString(this.props.jobInfo.job_description, 'html'),
            loc_req: this.props.jobInfo.loc_req,
            pho_req: this.props.jobInfo.pho_req,
            lin_req: this.props.jobInfo.lin_req,
            eeo_req: this.props.jobInfo.eeo_req,
            eeo_ques_req: this.props.jobInfo.eeo_ques_req,
            job_post: this.props.jobInfo.job_post,
            jobType: { value: this.props.jobInfo.job_type, label: this.props.jobInfo.job_type },
            jobLevel: { value: this.props.jobInfo.job_level, label: this.props.jobInfo.job_level },
            skills: [],
            remote: this.props.jobInfo.job_location == "Remote" ? true : false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    static propTypes = {
        onChange: PropTypes.func,
    };

    componentDidMount() {
        if(this.props.jobInfo.skills!=null){
            this.props.jobInfo.skills.map((s) => {
                var skill = JSON.stringify(s);
                this.setState(previousState => ({
                    skills: [...previousState.skills, { value: (skill?.split(":")[1]?.split(",")[0]?.split("'")[1]), label: (skill?.split(":")[1]?.split(",")[0]?.split("'")[1]) }]
                }));
            });
        }
    }

    onFilter = (jobType) => {
        this.setState({ jobType: jobType })
    };
    onFilter1 = (jobLevel) => {
        this.setState({ jobLevel: jobLevel })
    };
    onFilter2 = (skills) => {
        this.setState({ skills: skills })
    };
    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff' }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    };
    options = [
        { value: 'Full-Time', label: 'Full-Time' },
        { value: 'Part-Time', label: 'Part-Time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Temporary', label: 'Temporary' },
        { value: 'Other', label: 'Other' },
    ];
    options1 = [
        { value: 'Entry Level', label: 'Entry Level' },
        { value: 'Mid Level', label: 'Mid Level' },
        { value: 'Senior', label: 'Senior' },
        { value: 'Director', label: 'Director' },
        { value: 'Executive', label: 'Executive' },
    ];

    setJobPost(type) {
        this.setState({ job_post: type });
    }

    //    setJobPostTure = () => {
    //        this.setState({
    //            job_post: true
    //        });
    //    };
    //    setJobPostFalse = () => {
    //        this.setState({
    //            job_post: false
    //        });
    //    };
    setLocReq0 = () => {
        this.setState({
            loc_req: 0
        });
    };
    setLocReq1 = () => {
        this.setState({
            loc_req: 1
        });
    };
    setLocReq2 = () => {
        this.setState({
            loc_req: 2
        });
    };
    setPhoReq0 = () => {
        this.setState({
            pho_req: 0
        });
    };
    setPhoReq1 = () => {
        this.setState({
            pho_req: 1
        });
    };
    setPhoReq2 = () => {
        this.setState({
            pho_req: 2
        });
    };
    setLinReq0 = () => {
        this.setState({
            lin_req: 0
        });
    };
    setLinReq1 = () => {
        this.setState({
            lin_req: 1
        });
    };
    setLinReq2 = () => {
        this.setState({
            lin_req: 2
        });
    };
    setEeoReq0 = () => {
        this.setState({
            eeo_req: 0
        });
    };
    setEeoReq1 = () => {
        this.setState({
            eeo_req: 1
        });
    };

    setEeoQuesReq0 = () => {
        this.setState({
            eeo_ques_req: 0
        });
    };
    setEeoQuesReq1 = () => {
        this.setState({
            eeo_ques_req: 1
        });
    };

    handleLocation = (location) => {
        this.setState({jobLocation: location});
    }

    handleChange() {
        this.setState({ remote: !this.state.remote });
    }

    onChange = (jobDescription) => {
        this.setState({ jobDescription });
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    savePosition = (e) => {
        e.preventDefault();
        if (this.props.profile.membership == "Regular" && this.state.job_post == 2) {
            return (
                confirmAlert({
                    title: 'Upgrade Now!',
                    message: 'Upgrade to broadcast your job posting with premium option, or change to standard mode without promotion!',
                    buttons: [
                        { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                        { label: 'OK' },
                    ]
                })
            )
        }
        let data = {
            id: this.props.jobInfo.id,
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel["value"],
            jobLocation: this.state.jobLocation,
            jobType: this.state.jobType["value"],
            loc_req: this.state.loc_req,
            pho_req: this.state.pho_req,
            lin_req: this.state.lin_req,
            eeo_req: this.state.eeo_req,
            eeo_ques_req: this.state.eeo_ques_req,
            job_post: this.state.job_post,
            skills: this.state.skills,
        };
        if (this.state.remote) {
            data = {
                id: this.props.jobInfo.id,
                jobTitle: this.state.jobTitle,
                jobId: this.state.jobId,
                jobDescription: this.state.jobDescription.toString('html'),
                jobLevel: this.state.jobLevel["value"],
                jobLocation: "Remote",
                jobType: this.state.jobType["value"],
                loc_req: this.state.loc_req,
                pho_req: this.state.pho_req,
                lin_req: this.state.lin_req,
                eeo_req: this.state.eeo_req,
                eeo_ques_req: this.state.eeo_ques_req,
                job_post: 0,
                skills: this.state.skills,
            };
        };
        this.props.updateJob(data);
        setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1); this.props.getPJobs(); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
        this.props.renderJobs();
    }

    hideJob = (e) => {
        let isFilled = this.checkRequiredInputs();
        if (isFilled) {
            this.props.getQuestionList();
            this.setState({ position_added: false });
        }
        else {
            this.incompleteAlert();
        }
    }

    checkRequiredInputs = () => {
        if (this.state.jobTitle == "" || this.state.jobDescription == "") {
            return false;
        }
        else {
            return true;
        }
    }

    showJob = (e) => {
        this.setState({ position_added: true })
    }

    incompleteAlert = () => {
        confirmAlert({
            title: "Required fields not completed",
            message: "Please fill Job Title and Job Description",
            buttons: [
                {
                    label: 'ok',
                },
            ]
        });
    }

    render() {
        return (
            <div className="container" style={{ width: '95%' }}>
                <div style={{ marginBottom: "30px" }}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs / Edit</span></b></h3></div>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={this.props.renderJobs}
                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#e8edfc" }}
                        >
                            <div className="center-items back-to-text">
                                <i className="bx bx-arrow-back bx-sm"></i>
                                <p className="back-to-text">Back to Jobs</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="chart-bg1 container" style={{ marginTop: "1%", paddingBottom: "4rem", paddingLeft: "1.2rem" }}>
                    <form onSubmit={this.savePosition}>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Job Title
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="jobTitle" value={this.state.jobTitle}
                                    onChange={this.handleInputChange} className="form-control" required="required" />
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Job ID
                                </label>
                                <span className="job-apply-char2" style={{visibility: "hidden"}}>*</span>
                                <input type="text" name="jobId" value={this.state.jobId}
                                    onChange={this.handleInputChange} className="form-control" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Employment Type
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles} />
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Experience Level
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.jobLevel} onChange={this.onFilter1} options={this.options1} styles={this.customStyles} />
                                </div>
                            </div>
                        </div>

                            <div className="form-row">
                                {!this.state.remote &&
                                <div className="form-group col-6">
                                    <label className="db-txt2">
                                        Job Location
                                    </label><span className="job-apply-char2">*</span>
                                    <Autocomplete
                                        className="form-control"
                                        language="en"
                                        apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                        onPlaceSelected={(place, inputRef, autocomplete) => {
                                            this.handleLocation(place.formatted_address);
                                        }}
                                        required="required"
                                        defaultValue={this.state.jobLocation}
                                    />
                                </div>}
                                <div className="form-group col-6">
                                    <label className="db-txt2">Remote Work?</label>
                                    <div style={{paddingTop: "0.7rem"}}>
                                        <Switch onChange={this.handleChange} checked={this.state.remote} />
                                    </div>
                                </div>
                            </div>

                        <div className="form-row">
                            <div className="col-6">
                                <label className="db-txt2">
                                    Job Description
                                </label><span className="job-apply-char2">*</span>
                            </div>
                            <div className="form-group col-12">
                                <RichTextEditor
                                    value={this.state.jobDescription}
                                    onChange={this.onChange}
                                    toolbarConfig={toolbarConfig}
                                    className="text-editor2"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    Preferred Skills
                                    <span className="tool_tip ml-2">
                                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                        <p className="tool_submenu container" style={{ width: "14rem", zIndex:"99999" }}>
                                            <div>
                                            These skills will be part of the resume evaluation and are not visible to applicants.
                                            </div>
                                        </p>
                                    </span>
                                </label>
                            </div>
                            <div className="form-group col-6" style={{ zIndex: "9999" }}>
                                <Select isMulti value={this.state.skills} onChange={this.onFilter2} options={SkillSet} styles={this.customStyles} defaultValue={this.state.skills} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    EEO Statement
                                </label>
                            </div>
                            <div className="form-group col-12">
                                {this.state.eeo_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Enabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoReq1}>Enabled</button>
                                }
                                {this.state.eeo_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoReq0}>Disabled</button>
                                }
                            </div>
                            {this.state.eeo_req == 1 &&
                                <div className="form-group col-12">
                                    <p style={{ color: "#000", fontWeight: "600", fontSize: "1rem", marginBottom: "0rem" }}>The following statement will be displayed at the bottom of your job description</p>
                                    <p className="ml-5">{this.props.profile.company_name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                                </div>}
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    EEO Question
                                </label>
                            </div>
                            <div className="form-group col-12">
                                {this.state.eeo_ques_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Enabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoQuesReq1}>Enabled</button>
                                }
                                {this.state.eeo_ques_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoQuesReq0}>Disabled</button>
                                }
                            </div>
                            {this.state.eeo_ques_req == 1 &&
                                <div className="col-12">
                                    <p style={{ color: "#000", fontWeight: "600", fontSize: "1rem" }}>Enabling EEO questions will allow you to collect EEO data from your candidates for use in compliance and diversity and inclusion efforts</p>
                                </div>}
                        </div>
                        <hr style={{ border: "1.5px solid #E8EDFC" }} />
                        <div className="form-row">
                            <h5 style={{ color: "#090d3a" }}><b>Application Form</b></h5>
                            <span className="tool_tip ml-2">
                                <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                <p className="tool_submenu container" style={{ width: "14rem", zIndex:"99999" }}>
                                    This will be filled out by applicants. Name, Email, and Resume are mandatory by default.
                                </p>
                            </span>
                        </div>
                        {/*<div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Name
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button>
                        </div>
                        <div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Email Address
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button>
                        </div>
                        <div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Resume
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button>
                        </div>
                        <hr style={{ border: "1.5px solid #E8EDFC" }} />*/}
                        <div className="form-row">
                            <label className="db-txt2">
                                Location
                            </label>
                        </div>
                        <div className="form-row" style={{marginBottom: "1rem"}}>
                            {this.state.loc_req == 0 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq0}>Required</button>
                            }
                            {this.state.loc_req == 1 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Optional</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq1}>Optional</button>
                            }
                            {this.state.loc_req == 2 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq2}>Disabled</button>
                            }
                        </div>
                        <div className="form-row">
                            <label className="db-txt2">
                                Phone Number
                            </label>
                        </div>
                        <div className="form-row" style={{marginBottom: "1rem"}}>
                            {this.state.pho_req == 0 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq0}>Required</button>
                            }
                            {this.state.pho_req == 1 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Optional</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq1}>Optional</button>
                            }
                            {this.state.pho_req == 2 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq2}>Disabled</button>
                            }
                        </div>
                        <div className="form-row">
                            <label className="db-txt2">
                                LinkedIn URL
                            </label>
                        </div>
                        <div className="form-row" style={{marginBottom: "1rem"}}>
                            {this.state.lin_req == 0 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Required</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq0}>Required</button>
                            }
                            {this.state.lin_req == 1 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Optional</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq1}>Optional</button>
                            }
                            {this.state.lin_req == 2 ?
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq2}>Disabled</button>
                            }
                        </div>
                        {!this.state.remote &&
                            <div>
                                <hr style={{ border: "1.5px solid #E8EDFC" }} />
                                <div className="form-row">
                                    <h5 style={{ color: "#090d3a" }}><b>Broadcast Your Job Posting</b></h5>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-4">
                                        {this.state.job_post == 0 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Disabled</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(0)}>Disabled</button>
                                        }
                                        {this.state.job_post == 1 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Standard</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(1)}>Standard</button>
                                        }
                                        {this.state.job_post == 2 ?
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #67A3F3" }}>Premium</button> :
                                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(2)}>Premium</button>
                                        }
                                    </div>
                                    <div className="form-group col-12">
                                        {this.state.job_post == 1 &&
                                            <label className="db-txt2" style={{ fontWeight: "500" }}>
                                                Standard advertising: your position will appear on ZipRecruiter within 24 hours.
                                            </label>
                                        }
                                        {this.state.job_post == 2 &&
                                            <label className="db-txt2" style={{ fontWeight: "500" }}>
                                                Premium advertising: your position will appear on: Indeed, Glassdoor, Google for Jobs, WayUp, JobRapido, ZipRecruiter and many more within 24 hours.
                                            </label>
                                        }
                                    </div>
                                </div>
                            </div>}
                        <div style={{ float: "left", marginBottom: "1rem", display: "inline-block" }}>
                            <button className="default-btn" type="button" style={{ paddingLeft: "25px", backgroundColor: "#E5E5E5", color: "#090d3a" }} onClick={this.props.renderJobs}>Cancel</button>
                        </div>
                        <div style={{ float: "right", marginBottom: "1rem" }}>
                            <button
                                type="submit"
                                className="default-btn1" style={{ marginBottom: "1.5%", paddingLeft: "25px" }}
                            >
                                Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    };
};

export default withRouter(connect(null, { getZRFeedXML, getZRPremiumFeedXML })(
    JobEdition
));