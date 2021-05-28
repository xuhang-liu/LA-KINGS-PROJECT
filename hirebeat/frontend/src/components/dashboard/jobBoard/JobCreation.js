import React,  { Component } from "react";
import 'boxicons';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import {getByZip} from 'zcs';
//import Select from 'react-select'

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
        this.props.getjobidlist(this.props.user.id);
    }

    static propTypes = {
        onChange: PropTypes.func,
    };

    state = {
        jobTitle: "",
        jobId: "",
        jobLocation: "",
        jobLevel: "",
        jobDescription: RichTextEditor.createEmptyValue(),
        jobType: "",
        city: "",
        state: "",
    }

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
    
//    handleChangeJobType = (jobType) => {
//        this.setState({ jobType });
//    }
    
    savePosition = (e) => {
        e.preventDefault();
        let data = {
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel,
            jobLocation: this.state.city+","+this.state.state+","+this.state.jobLocation,
            userId: this.props.user.id,
            jobType: this.state.jobType
        };
        if(this.props.jobid_list.includes(this.state.jobId)){
            alert("Duplicate Job ID detected.");
        }else{
            this.props.addNewJob(data);
            setTimeout(() => {this.props.getAllJobs(this.props.user.id); this.props.getPJobs();}, 300);
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
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
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
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Type
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="jobType" value={this.state.jobType} placeHolder="Full Time"
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                    Job Level
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="jobLevel" value={this.state.jobLevel} placeHolder="Entry Level"
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Zipcode
                                </label><span className="job-apply-char2">*</span>
                                <input type="number" name="jobLocation" value={this.state.jobLocation} inputmode="numeric"
                                    onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
                                    onKeyUp={e => this.handleZipcodeInputKeyUp(e)}
                                    onPaste={e => this.handleZipcodeInputPaste(e)}
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
                        {/*<div className="form-row">
                            <div className="center-items db-txt2" style={{marginRight: "1rem", marginLeft: "1rem"}}>Job Type</div>
                            <Select value={this.state.jobType} onChange={this.handleChangeJobType} options={options} className="select-category3" styles={customStyles} />
                        </div>*/}
                        <div className="form-row">
                            <div className="col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Description
                                </label>
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