import React, { Component } from 'react';
import { Text } from '@chakra-ui/react';

export class ReviewApplicationTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const total = this.props.qualifications?.length || 0;
        let qualifiedNum = 0;
        for (let i = 0; i < this.props.qualifications?.length; i++) {
            if (this.props.qualifications[i]) {
                qualifiedNum++;
            }
        }

        return (
            <React.Fragment>
                <div style={{ border: "2px solid #E8EDFC", boxSizing: "border-box", borderRadius: "5px" }}>
                    <div className="container-fluid pb-5 pt-3">
                        <Text style={{ fontSize: "1.2rem", fontWeight: "600" }} color='muted'>Screening Questions ({qualifiedNum} /{total})</Text>
                        {this.props.questions?.map((q, index) => {
                            return (
                                <div>
                                    <div className="row pl-5 pt-3">
                                        <Text style={{ fontSize: "1rem", fontWeight: "600" }} color='muted'>Question {index + 1}
                                            {this.props.mustHaves[index] &&
                                                <span style={{ marginLeft: "1rem", fontSize: "0.8rem", fontWeight: "600", color: "#006dff" }}>Must-have qualification</span>
                                            }
                                        </Text>
                                    </div>
                                    <div className="row pl-5 pt-2">
                                        <Text>{q}</Text>
                                    </div>
                                    <div className="row pl-5 pt-2">
                                        <Text style={{ fontSize: "1rem", fontWeight: "600"}} color='muted'>Answer</Text>
                                    </div>
                                    <div className="row pl-5 pt-2">
                                        <div style={{ border: "2px solid #006dff", boxSizing: "border-box", borderRadius: "3px", width: "8rem", paddingLeft: "1rem", display: "inline-block" }}>
                                            <Text>{this.props.answers[index]}</Text>
                                        </div>
                                        <div style={{ display: "inline-block", marginLeft: "1rem" }}>
                                            {this.props.qualifications[index] ?
                                                <p style={{ color: "#13C4A1", fontWeight: "500", fontSize: "0.8rem", paddingTop: "0.3rem" }}><i className="bx-fw bx bx-check-circle bx-sm"></i> Qualified</p> :
                                                <p style={{ color: "#FF5050", fontWeight: "500", fontSize: "0.8rem", paddingTop: "0.3rem" }}><i className="bx-fw bx bx-x-circle bx-sm"></i> Unqualified</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default ReviewApplicationTab;