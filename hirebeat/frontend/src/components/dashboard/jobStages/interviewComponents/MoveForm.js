import React, { Component } from 'react';
import { MyModalUpgrade } from "./../../DashboardComponents";

class MoveForm extends Component {
    state = {
        currentStage: this.props.currentStage
    }

    updateCurrentStage = (currentStage) => {
        this.setState({currentStage:currentStage });
    }

    render() {
        return(
            <MyModalUpgrade
                    show={this.props.showMoveForm}
                    onHide={this.props.hideMoveForm}
                >
                    <div className="container chart-bg1" style={{ padding: "2rem" }}>
                        <h3 style={{ fontSize: "1.25rem", color: "#090d3a", fontWeight: "600", textAlign: "center" }}>Move to Another Stage</h3>
                        {this.state.currentStage == "Resume Review" ?
                            <div className="row d-flex justify-content-center mt-5">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Resume Review</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-5">
                                <button onClick={() => { this.props.setNextStage("Resume Review"); this.updateCurrentStage("Resume Review")}} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Resume Review</button>
                            </div>
                        }
                        {this.state.currentStage == "Video Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Video Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.props.setNextStage("Video Interview"); this.updateCurrentStage("Video Interview")}} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Video Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Live Interview" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Live Interview</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.props.setNextStage("Live Interview"); this.updateCurrentStage("Live Interview")}} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Live Interview</button>
                            </div>
                        }
                        {this.state.currentStage == "Short List" ?
                            <div className="row d-flex justify-content-center mt-2">
                                <button className="default-btn w-50" style={{ backgroundColor: "#1E5EFF", paddingRight: "50px" }}>Shortlist</button>
                            </div> :
                            <div className="row d-flex justify-content-center mt-2">
                                <button onClick={() => { this.props.setNextStage("Short List"); this.updateCurrentStage("Short List")}} className="default-btn w-50" style={{ backgroundColor: "#E8EDFC", color: "#090d3a", paddingRight: "50px" }}>Shortlist</button>
                            </div>
                        }
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-6 d-flex justify-content-end">
                                <button onClick={this.props.moveCandidates} className="default-btn" style={{ backgroundColor: "#090d3a", paddingLeft: "25px" }}>Confirm</button>
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <button onClick={() =>{this.props.hideMoveForm(); this.setState({currentStage:this.props.currentStage })}} className="default-btn" style={{ backgroundColor: "#979797", paddingLeft: "25px" }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </MyModalUpgrade>
        )
    }
}

export default MoveForm;