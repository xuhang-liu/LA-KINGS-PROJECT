import React, { Component } from "react";
import Select from 'react-select';
import { Box, Text, Textarea, Input, useColorModeValue } from '@chakra-ui/react';

const customStyles = {
    control: styles => ({ ...styles, background: useColorModeValue("#ffffff", "#1a202c"), borderRadius: "5px" }),
    singleValue: styles => ({
        ...styles,
        color: useColorModeValue("#090d3a", "#ffffff"),
        fontSize: '0.9375rem',
        fontFamily: 'Inter,Segoe UI, sans-serif',
        fontWeight: '500',
        background: useColorModeValue("#ffffff", "#1a202c")
    }),
    menuList: styles => ({
        ...styles,
        backgroundColor: useColorModeValue('#ffffff', '#090d3a'),
        color: useColorModeValue('#090d3a', '#7a7a7a'),
    }),
    indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
}

export class ScreenQuestion extends Component {
    state = {
        responseType: { value: this.props.questionObj?.responseType, label: this.props.questionObj?.responseType } || { value: "Yes/No", label: "Yes/No" },
        ans: { value: this.props.questionObj?.ans, label: this.props.questionObj?.ans } || { value: "Yes", label: "Yes" },
    }

    responseOptions = [
        { "value": "Yes/No", "label": "Yes/No" },
        { "value": "Numeric", "label": "Numeric" },
    ];

    ansOptions = [
        { "value": "Yes", "label": "Yes" },
        { "value": "No", "label": "No" },
    ];

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
                <Box
                    bg="bg-canvas"
                    boxShadow='sm'
                    borderRadius="lg"
                    p={{
                        base: '4',
                        md: '6',
                    }}
                >
                    <div>
                        <div className="row">
                            <div className="col-8">
                                <Text fontSize="md" color="muted">Write a custom screening question:</Text>
                            </div>
                            <div className="ml-auto col-2 form-group center-items">
                                <i className="bx bx-trash bx-sm" style={{ color: "#F36F67" }}></i>
                                <span className="candidate-txt2" style={{ cursor: "pointer", color: "#F36F67" }} onClick={() => this.props.removeQuestion(index)} >Delete</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Textarea
                                    value={questionObj?.question}
                                    onChange={(e) => this.props.handleQFormChange(index, "question", e)}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "0.5rem" }}>
                            <div className="col-2">
                                <Text fontSize="sm" color="muted">Response Type</Text>
                                <Select value={this.props.responseType} onChange={this.filterResponseType} options={this.responseOptions} styles={customStyles} menuPortalTarget={document.body} />
                            </div>
                            <div className="col-2">
                                <Text fontSize="sm" color="muted">Ideal Answer</Text>
                                {this.props.responseType.value == "Numeric" ?
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Input type="number" min="0" value={this.props.questionObj?.numAns} onChange={(e) => this.props.handleQFormChange(index, "numAns", e)} />
                                        <Text fontSize="sm" color="muted" style={{ marginLeft: "0.5rem" }}>minimum</Text>
                                    </div> :
                                    <Select value={this.props.ans} onChange={this.filterAnsType} options={this.ansOptions} styles={customStyles} menuPortalTarget={document.body} />
                                }
                            </div>
                            <div className="col-3">
                                <Text fontSize="sm" color="muted" style={{ margin: "0rem", visibility: "hidden" }}>Must Have</Text>
                                <Text fontSize="sm" color="muted" style={{ marginTop: "0.5rem" }}>
                                    <input type="checkbox" checked={this.props.questionObj?.isMustHave == "true"} onChange={(e) => this.props.handleQFormChange(index, "isMustHave", e)} value="true" />
                                    &nbsp; Must-have qualification
                                </Text>
                            </div>
                        </div>
                    </div>
                </Box>
            </React.Fragment>
        )
    }
}

export default ScreenQuestion