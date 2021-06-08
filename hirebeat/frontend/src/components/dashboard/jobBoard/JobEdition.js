import React,  { Component } from "react";
import 'boxicons';
import { confirmAlert } from 'react-confirm-alert';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import {getByZip} from 'zcs';
import Select from 'react-select';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getZRFeedXML } from "../../../redux/actions/job_actions";

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
      {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
      {label: 'Italic', style: 'ITALIC'},
      {label: 'Underline', style: 'UNDERLINE'}
    ],
    BLOCK_TYPE_DROPDOWN: [
      {label: 'Normal', style: 'unstyled'},
      {label: 'Heading Large', style: 'header-one'},
      {label: 'Heading Medium', style: 'header-two'},
      {label: 'Heading Small', style: 'header-three'}
    ],
    BLOCK_TYPE_BUTTONS: [
      {label: 'UL', style: 'unordered-list-item'},
      {label: 'OL', style: 'ordered-list-item'}
    ]
  };

export class JobEdition extends Component{
    static propTypes = {
        onChange: PropTypes.func,
    };

    state = {
        city: this.props.jobInfo.job_location.split(",")[0],
        state: this.props.jobInfo.job_location.split(",")[1],
        jobTitle: this.props.jobInfo.job_title,
        jobId: this.props.jobInfo.job_id,
        jobLocation: this.props.jobInfo.job_location.split(",")[2],
        jobDescription: RichTextEditor.createValueFromString(this.props.jobInfo.job_description, 'html'),
        loc_req: this.props.jobInfo.loc_req,
        pho_req: this.props.jobInfo.pho_req,
        lin_req: this.props.jobInfo.lin_req,
        job_post: this.props.jobInfo.job_post,
        jobType: { value: this.props.jobInfo.job_type, label: this.props.jobInfo.job_type },
        jobLevel: { value: this.props.jobInfo.job_level, label: this.props.jobInfo.job_level },
    }

    onFilter = (jobType) => {
        this.setState({jobType: jobType})
    };
    onFilter1 = (jobLevel) => {
        this.setState({jobLevel: jobLevel})
    };
    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff'}),
        singleValue: styles => ({    ...styles,
                                     color: '#4a6f8a',
                                     fontSize: '0.9375rem',
                                     fontFamily: 'Avenir Next,Segoe UI, sans-serif',
                                     fontWeight: '500'}),
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
    setJobPostTure = () => {
        this.setState({
            job_post: true
        });
    };
    setJobPostFalse = () => {
        this.setState({
            job_post: false
        });
    };
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

    handleZipcode = (e) => {
        let citytstate = "";
        this.setState({
            [e.target.name]: e.target.value,
        });
        if(e.target.value.length == 5){
            citytstate = getByZip(e.target.value);
            this.setState({
                city: citytstate["city"],
                state: citytstate["state"],
            });
        }
    };

    handleZipcodeInputKeyDown = e => {
        var key = e.which ? e.which : e.keyCode;
        if (
          (e.target.value.length >= 5 &&
            key !== 8 &&
            key !== 37 &&
            key !== 38 &&
            key !== 39 &&
            key !== 40) ||
          (key === 18 || key === 189 || key === 229)
        ) {
          e.preventDefault();
        }
    };

    onChange = (jobDescription) => {
        this.setState({jobDescription});
    };

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    savePosition = (e) => {
        let data = {
            id: this.props.jobInfo.id,
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel["value"],
            jobLocation: this.state.city+","+this.state.state+","+this.state.jobLocation,
            jobType: this.state.jobType["value"],
            loc_req: this.state.loc_req,
            pho_req: this.state.pho_req,
            lin_req: this.state.lin_req,
            job_post: this.state.job_post,
        };
        this.props.updateJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getZRFeedXML()}, 300);
        e.preventDefault();
        this.props.renderJobs();
    }

    hideJob = (e) => {
        let isFilled = this.checkRequiredInputs();
        if (isFilled) {
            this.props.getQuestionList();
            this.setState({position_added: false});
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
        this.setState({position_added: true})
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
        return(
            <div className="container" style={{width:'95%'}}>
                <div style={{marginBottom: "30px"}}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs / Edit</span></b></h3></div>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={this.props.renderJobs}
                            style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                        >
                            <div className="center-items">
                                <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                                <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back to Jobs</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="card container" style={{marginTop:"1%"}}>
                    <form onSubmit={this.savePosition}>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
                                    Job Title
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="jobTitle" value={this.state.jobTitle}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                    Job ID
                                </label>
                                <input type="text" name="jobId" value={this.state.jobId}
                                onChange={this.handleInputChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
                                    Employment Type
                                </label><span className="job-apply-char2">*</span>
                                <div style={{zIndex: "9999"}}>
                                    <Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles}/>
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                    Experience Level
                                </label><span className="job-apply-char2">*</span>
                                <div style={{zIndex: "9999"}}>
                                    <Select value={this.state.jobLevel} onChange={this.onFilter1} options={this.options1} styles={this.customStyles}/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Zipcode
                                </label><span className="job-apply-char2">*</span>
                                <input type="number" name="jobLocation" value={this.state.jobLocation} inputmode="numeric"
                                    onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
                                    pattern="\d*"
                                onChange={this.handleZipcode} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"3.5rem"}}>
                                    {this.state.city != "" &&
                                    <div><span>{this.state.city}</span>, <span>{this.state.state}</span></div>}
                                    {this.state.city == "" &&
                                    <div><span>City</span>, <span>State</span></div>}
                                </label>
                            </div>
                        </div>
                        <div className="form-row mt-3">
                            <div className="col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Description
                                </label><span className="job-apply-char2">*</span>
                            </div>
                            <div className="form-group col-12">
                                <RichTextEditor
                                    value={this.state.jobDescription}
                                    onChange={this.onChange}
                                    toolbarConfig={toolbarConfig}
                                    editorClassName="editor-height"
                                />
                            </div>
                        </div>
                        <hr style={{border:"1.5px solid #E8EDFC"}}/>
                        <div className="form-row mt-4 ml-2">
                            <h5 style={{color:"#090d3a"}}><b>Application Form</b></h5>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                Name
                                </label>
                            </div>
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                Email Address
                                </label>
                            </div>
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                Resume
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>
                            </div>
                            <div className="form-group col-4">
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>
                            </div>
                            <div className="form-group col-4">
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>
                            </div>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                Location
                                </label>
                            </div>
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                Phone Number
                                </label>
                            </div>
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                LinkedIn URL
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                                {this.state.loc_req == 0 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLocReq0}>Required</button>
                                }
                                {this.state.loc_req == 1 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Optional</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLocReq1}>Optional</button>
                                }
                                {this.state.loc_req == 2 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLocReq2}>Disabled</button>
                                }
                            </div>
                            <div className="form-group col-4">
                                {this.state.pho_req == 0 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setPhoReq0}>Required</button>
                                }
                                {this.state.pho_req == 1 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Optional</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setPhoReq1}>Optional</button>
                                }
                                {this.state.pho_req == 2 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setPhoReq2}>Disabled</button>
                                }
                            </div>
                            <div className="form-group col-4">
                                {this.state.lin_req == 0 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Required</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLinReq0}>Required</button>
                                }
                                {this.state.lin_req == 1 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Optional</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLinReq1}>Optional</button>
                                }
                                {this.state.lin_req == 2 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setLinReq2}>Disabled</button>
                                }
                            </div>
                        </div>
                        <hr style={{border:"1.5px solid #E8EDFC"}}/>
                        <div className="form-row mt-4 ml-2">
                            <h5 style={{color:"#090d3a"}}><b>Broadcast Your Job Posting</b></h5>
                        </div>
                        <div className="form-row mt-2 ml-1">
                            <div className="form-group col-12">
                                <label className="db-txt2">
                                Once enabled, your position will appear on: Indeed, Glassdoor, Google for Jobs, WayUp, JobRapido, ZipRecruiter and many more within 24 hours.
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-4">
                                {this.state.job_post ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Enable</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setJobPostTure}>Enable</button>
                                }
                                {!this.state.job_post ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setJobPostFalse}>Disabled</button>
                                }
                            </div>
                        </div>
                        <div style={{float: "right", marginBottom: "1rem"}}>
                            <button
                                type="submit"
                                className="default-btn1" style={{marginBottom:"1.5%", paddingLeft:"25px"}}
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

export default withRouter(connect(null, { getZRFeedXML })(
  JobEdition
));