import React, { Component } from "react";
import Select from 'react-select';

export class ApplyQuestion extends Component {
    state = {
        ans: {value: "", label: ""},
    }

    ansOptions = [
        {"value": "Yes", "label": "Yes"},
        {"value": "No", "label": "No"},
    ];

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)" }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        menuPortal: provided => ({ ...provided, zIndex: 99 }),
        menu: provided => ({ ...provided, zIndex: 99 })
    };

    selectAns = (e, index) => {
        this.setState({ ans: {value: e.value, label: e.value} });
        this.props.handleBooleanInput(e, index);
    };

    render() {
        let questionObj = this.props.questionObj;
        let index = this.props.index;
        return (
            <React.Fragment>
                <div style={{marginLeft: "1rem"}}>
                    <div className="form-row" style={{paddingLeft: "5px", paddingRight: "5px"}}>
                        <label className="job-apply-char1">{this.props.qIndex} &nbsp; {questionObj.question}<span className="job-apply-char2">*</span></label>
                    </div>
                    <div className="form-row" style={{marginBottom: "0.5rem"}}>
                        <div className="col-lg-2 col-md-6 col-sm-12 align-center ">
                            <label className="job-apply-char1">Answer: </label>
                        </div>
                        {questionObj.answer_type != "boolean" ?
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <input type="number" min="0" onChange={(e) => this.props.handleNumInput(e, index)} className="job-creation-input" required />
                            </div> :
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <Select value={this.state.ans} onChange={(e) => this.selectAns(e, index)} options={this.ansOptions} styles={this.customStyles} menuPortalTarget={document.body}/>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ApplyQuestion