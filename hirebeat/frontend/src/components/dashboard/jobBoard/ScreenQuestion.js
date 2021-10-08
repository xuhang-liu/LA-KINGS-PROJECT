import React, { Component } from "react";
import Select from 'react-select';

export class ScreenQuestion extends Component {
    state = {
        responseType:  {value: this.props.questionObj?.responseType, label: this.props.questionObj?.responseType} ||{value: "Yes/No", label: "Yes/No"},
        ans: {value: this.props.questionObj?.ans, label: this.props.questionObj?.ans}|| {value: "Yes", label: "Yes"},
    }

    responseOptions = [
        {"value": "Yes/No", "label": "Yes/No"},
        {"value": "Numeric", "label": "Numeric"},
    ];

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

    filterResponseType = (responseType) => {
        this.setState({ responseType: responseType });
        this.props.handleQFormChange2(this.props.index, "responseType", responseType.value);
    };

    filterAnsType = (ans) => {
        this.setState({ ans: ans });
        this.props.handleQFormChange2(this.props.index, "ans", ans.value);
    };

    render() {
        let questionObj = this.props.questionObj;
        let index = this.props.index;
        return (
            <React.Fragment>
                <div>
                    <div className="profile-bg2">
                        <div style={{padding: "1rem"}}>
                            <div className="row">
                                <div className="col-8">
                                    <p className="profile-p" style={{margin: "0rem"}}>Write a custom screening question:</p>
                                </div>
                                <div className="ml-auto col-2 form-group center-items">
                                    <i className="bx bx-trash bx-sm" style={{color: "#F36F67"}}></i>
                                    <span className="candidate-txt2" style={{ cursor: "pointer", color: "#F36F67" }} onClick={() => this.props.removeQuestion(index)} >Delete</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <textarea
                                        value={questionObj?.question}
                                        onChange={(e) => this.props.handleQFormChange(index, "question", e)}
                                        className="profile-input profile-p4" style={{width: "100%"}}
                                    />
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "0.5rem"}}>
                                <div className="col-2">
                                    <p className="profile-p" style={{margin: "0rem"}}>Response Type</p>
                                    <Select value={this.props.responseType} onChange={this.filterResponseType} options={this.responseOptions} styles={this.customStyles} menuPortalTarget={document.body}/>
                                </div>
                                <div className="col-2">
                                    <p className="profile-p" style={{margin: "0rem"}}>Ideal Answer</p>
                                    {this.props.responseType.value == "Numeric" ?
                                        <input type="number" min="0" className="job-creation-input" value={this.props.questionObj?.numAns} onChange={(e) => this.props.handleQFormChange(index, "numAns", e)}/> :
                                        <Select value={this.props.ans} onChange={this.filterAnsType} options={this.ansOptions} styles={this.customStyles} menuPortalTarget={document.body}/>
                                    }
                                </div>
                                <div className="col-3">
                                    <p className="profile-p" style={{margin: "0rem", visibility: "hidden"}}>Must Have</p>
                                    <p  className="profile-p" style={{marginTop: "0.5rem"}}>
                                        <input type="checkbox" onChange={(e) => this.props.handleQFormChange(index, "isMustHave", e)} value="true"/>
                                        &nbsp; Must-have qualification
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ScreenQuestion