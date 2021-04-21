import React,  { Component } from "react";
import 'boxicons';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import Select from 'react-select'

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
    }

    onChange = (jobDescription) => {
        this.setState({jobDescription});
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
        let data = {
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel,
            jobLocation: this.state.jobLocation,
            userId: this.props.user.id,
            jobType: this.state.jobType
        };
        this.props.addNewJob(data);
        setTimeout(() => {this.props.getAllJobs(this.props.user.id);}, 300);
        e.preventDefault();
        this.props.renderJobs();
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

                <div className="row" >
                    <div className="col d-flex align-items-center" style={{marginTop:"0%"}}>
                        <p className="db-txt1">
                            Create New Position
                        </p>
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
                                <input type="text" name="jobLevel" value={this.state.jobLevel} placeHolder="Entry Level"
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