import React,  { Component } from "react";
import 'boxicons';
import { confirmAlert } from 'react-confirm-alert';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";

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
        jobTitle: this.props.jobInfo.job_title,
        jobId: this.props.jobInfo.job_id,
        jobLocation: this.props.jobInfo.job_location,
        jobLevel: this.props.jobInfo.job_level,
        jobDescription: RichTextEditor.createValueFromString(this.props.jobInfo.job_description, 'html'),
        jobType: this.props.jobInfo.job_type,
    }

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
            jobLevel: this.state.jobLevel,
            jobLocation: this.state.jobLocation,
            jobType: this.state.jobType,
        };
        this.props.updateJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id);}, 300);
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
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Title
                                </label>
                                <input type="text" name="jobTitle" value={this.state.jobTitle}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                    Job ID (optional)
                                </label>
                                <input type="text" name="jobId" value={this.state.jobId}
                                onChange={this.handleInputChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Location
                                </label>
                                <input type="text" name="jobLocation" value={this.state.jobLocation}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ marginTop:"2%" }}>
                                    Job Level
                                </label>
                                <input type="text" name="jobLevel" value={this.state.jobLevel}
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2" style={{ margin:"2%"}}>
                                    Job Type
                                </label>
                                <input type="text" name="jobType" value={this.state.jobType} placeHolder="Full Time"
                                onChange={this.handleInputChange} className="form-control" required="required"/>
                            </div>
                        </div>
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
                                Save
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    };
};

export default JobEdition;