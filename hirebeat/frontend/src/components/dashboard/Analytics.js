import React, { Component } from "react";
import { RateScore } from "./DashboardComponents";
import 'boxicons';
//import { connect } from "react-redux";

export class Analytics extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Overview</h3>
                                </div>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px"}}>Interview received</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#67A3F3"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px"}}>Shortlist</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>54</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#67A3F3"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px"}}>Hold</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#67A3F3"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px"}}>Reject</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#67A3F3"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Positions</h3>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Position title</p>
                                        <div style={{marginTop:"1rem"}}>
                                            <h3 className="chart-legend" style={{marginLeft:"0.5rem"}}>Product Designer</h3>
                                            <p style={{fontSize:"10px", marginTop:"2px", marginLeft:"0.5rem"}}>(ID: 10001)</p>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="row">
                                                <box-icon type="solid" name="rectangle" size="12px" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                                <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Invitation</p>
                                                </div>
                                            </div>
                                            <div className="col-3" style={{marginLeft:"-1rem"}}>
                                                <div className="row">
                                                <box-icon type="solid" name="rectangle" size="12px" color="#13c4a1" style={{marginLeft:"1rem"}}></box-icon>
                                                <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Shortlist</p>
                                                </div>
                                            </div>
                                            <div className="col-3" style={{marginLeft:"-2rem"}}>
                                                <div className="row">
                                                <box-icon type="solid" name="rectangle" size="12px" color="#ff6b00" style={{marginLeft:"1rem"}}></box-icon>
                                                <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Hold</p>
                                                </div>
                                            </div>
                                            <div className="col-3" style={{marginLeft:"-3rem"}}>
                                                <div className="row">
                                                <box-icon type="solid" name="rectangle" size="12px" color="#ff0000" style={{marginLeft:"1rem"}}></box-icon>
                                                <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Reject</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="pie-chart" size="sm" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Position chart</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="user-pin" size="sm" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Interview Conversion</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="chart" size="sm" color="#67A3F3" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Interview Sessions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    };

}

export default Analytics;