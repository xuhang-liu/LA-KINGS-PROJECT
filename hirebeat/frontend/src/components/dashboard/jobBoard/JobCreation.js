import React,  { Component } from "react";
import 'boxicons';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import {getByZip} from 'zcs';
import Select from 'react-select';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Switch from "react-switch";

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

export class JobCreation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobId: "",
            jobLocation: "",
            jobDescription: RichTextEditor.createEmptyValue(),
            city: "",
            state: "",
            loc_req: 1,
            pho_req: 1,
            lin_req: 1,
            eeo_req: 1,
            job_post: false,
            jobType: { value: 'Full-Time', label: 'Full-Time' },
            jobLevel: { value: 'Entry Level', label: 'Entry Level' },
            remote: false,
        }
        this.props.getjobidlist(this.props.user.id);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        onChange: PropTypes.func,
    };

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
        if(this.props.profile.membership == "Regular"){
            confirmAlert({
                title: 'Upgrade Now!',
                message: 'Upgrade now to broadcast your job posting!',
                buttons: [
                    {label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing"},
                    {label: 'OK'},
                ]
            });
        }else{
            this.setState({
                job_post: true
            });
        }
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

    onChange = (jobDescription) => {
        this.setState({jobDescription});
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

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
      };

      handleChange(remote) {
        this.setState({ remote });
      }
    
//    handleChangeJobType = (jobType) => {
//        this.setState({ jobType });
//    }
    
    savePosition = (e) => {
        e.preventDefault();
        let data = {
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel["value"],
            jobLocation: this.state.city+","+this.state.state+","+this.state.jobLocation,
            userId: this.props.user.id,
            jobType: this.state.jobType["value"],
            loc_req: this.state.loc_req,
            pho_req: this.state.pho_req,
            lin_req: this.state.lin_req,
            eeo_req: this.state.eeo_req,
            job_post: this.state.job_post,
        };
        if(this.state.remote){
            data = {
                jobTitle: this.state.jobTitle,
                jobId: this.state.jobId,
                jobDescription: this.state.jobDescription.toString('html'),
                jobLevel: this.state.jobLevel["value"],
                jobLocation: "Remote",
                userId: this.props.user.id,
                jobType: this.state.jobType["value"],
                loc_req: this.state.loc_req,
                pho_req: this.state.pho_req,
                lin_req: this.state.lin_req,
                eeo_req: this.state.eeo_req,
                job_post: false,
            };
        }
        if(this.props.jobid_list.includes(this.state.jobId) && this.state.jobId != "" && this.state.jobId != null){
            alert("Duplicate Job ID detected.");
        }else{
            this.props.addNewJob(data);
            setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs(); this.props.getZRFeedXML();}, 300);
            this.props.renderJobs();
        }
    }

    render() {
//        const options = [
//            { value: "Full Time", label: "Full Time"},
//            { value: "Part Time", label: "Part Time"},
//            { value: "Contractor", label: "Contractor"},
//        ];
//        const customStyles = {
//            control: styles => ({ ...styles, backgroundColor: '#E8EDFC', marginBottom: "0.5rem" }),
//            singleValue: styles => ({    ...styles,
//                                         color: '#090D3A',
//                                         fontSize: '0.9375rem',
//                                         fontFamily: 'Avenir Next',
//                                         fontWeight: '500'}),
//        }

        return(
            <div className="container" style={{width:'95%'}}>
                <div style={{marginBottom: "30px"}}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs / Create New Position</span></b></h3></div>
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
                                <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="card container" style={{marginTop:"1%"}}>
                    <form onSubmit={this.savePosition}>
                        <div className="form-row mt-4 ml-2">
                            <h5 style={{color:"#090d3a"}}><b>Position Details</b></h5>
                        </div>
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
                            {!this.state.remote &&
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
                                    Zipcode
                                </label><span className="job-apply-char2">*</span>
                                <input type="number" name="jobLocation" value={this.state.jobLocation} inputmode="numeric"
                                    onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
                                    pattern="\d*"
                                onChange={this.handleZipcode} className="form-control" required="required"/>
                            </div>}
                            <div className="form-group col-6">
                                {!this.state.remote &&
                                <label className="db-txt2" style={{ marginTop:"3.5rem"}}>
                                    {this.state.city != "" &&
                                    <div><span>{this.state.city}</span>, <span>{this.state.state}</span></div>}
                                    {this.state.city == "" &&
                                    <div><span>City</span>, <span>State</span></div>}
                                </label>}
                                {!this.state.remote ?
                                <label className="db-txt2 ml-5">
                                    <div>Remote Work? <span style={{float:"right", top:"3.2rem", position:"absolute", marginLeft:"0.5rem"}}><Switch onChange={this.handleChange} checked={this.state.remote}/></span></div>
                                </label>:
                                <label className="db-txt2">
                                    <div>Remote Work? <span style={{marginLeft:"0.5rem"}}><Switch onChange={this.handleChange} checked={this.state.remote}/></span></div>
                                </label>
                                }
                            </div>
                        </div>
                        {/*<div className="form-row">
                            <div className="center-items db-txt2" style={{marginRight: "1rem", marginLeft: "1rem"}}>Job Type</div>
                            <Select value={this.state.jobType} onChange={this.handleChangeJobType} options={options} className="select-category3" styles={customStyles} />
                        </div>*/}
                        <div className="form-row mt-3">
                            <div className="col-6">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
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
                        <div className="form-row mt-3">
                            <div className="col-12">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
                                    EEO Statement
                                </label>
                            </div>
                            <div className="form-group col-12">
                                {this.state.eeo_req == 1 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Enabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setEeoReq1}>Enabled</button>
                                }
                                {this.state.eeo_req == 0 ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setEeoReq0}>Disabled</button>
                                }
                            </div>
                            {this.state.eeo_req == 1 &&
                            <div className="form-group col-12">
                                <p style={{color:"#000", fontWeight:"600", fontSize:"1rem"}}>The following statement will be displayed at the bottom of your job description</p>
                                <p className="ml-5">{this.props.profile.company_name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                            </div>}
                        </div>
                        <hr style={{border:"1.5px solid #E8EDFC"}}/>
                        <div className="form-row mt-4 ml-2">
                            <h5 style={{color:"#090d3a"}}><b>Application Form</b></h5>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-4">
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
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
                                <label className="db-txt2" style={{ marginTop:"2%"}}>
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
                        <div className="form-row pb-2">
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
                        {!this.state.remote &&
                        <div>
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
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Enabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setJobPostTure}>Enabled</button>
                                }
                                {!this.state.job_post ?
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#e8edfc", color:"#090d3a", border: "2px solid #67A3F3"}}>Disabled</button>:
                                <button type="button" className="default-btn2" style={{fontSize:"12px", backgroundColor:"#fff", color:"#090d3a", border: "2px solid #e8edfc"}} onClick={this.setJobPostFalse}>Disabled</button>
                                }
                            </div>
                        </div>
                        </div>}
                        <div style={{float: "right", marginBottom: "1rem"}}>
                            <button
                                type="submit"
                                className="default-btn1" style={{marginBottom:"1.5%", paddingLeft:"25px"}}
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
};

export default JobCreation;