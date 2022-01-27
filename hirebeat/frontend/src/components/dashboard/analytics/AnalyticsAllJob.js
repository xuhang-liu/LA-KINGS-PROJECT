import React, { Component } from "react";
import 'boxicons';
import ReactApexChart from "react-apexcharts";

export class AnalyticsAllJob extends Component {
    constructor(props) {
        super(props);
        this.props.getAnalyticsInfo(this.props.user.id);
        this.state = {
            // Jobs by status
            series1: [{
                data: [this.props.alljobAnaInfo?.active_jobs, this.props.alljobAnaInfo?.archived_jobs, this.props.alljobAnaInfo?.closed_jobs, this.props.alljobAnaInfo?.draft_jobs]
            }],
            options1: {
                chart: {
                    type: 'bar',
                    height: 250
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Active', 'Archived', 'Closed', 'Draft'],
                }
            },
            // Active Pipeline
            series2: [{
                data: [this.props.alljobAnaInfo?.res_act_count, this.props.alljobAnaInfo?.vid_act_count, this.props.alljobAnaInfo?.liv_act_count, this.props.alljobAnaInfo?.sho_act_count]
            }],
            options2: {
                chart: {
                    type: 'bar',
                    height: 250
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Resume Review', 'Video Interview', 'Live Interview', 'Short List'],
                }
            },
        };
    }

    render() {
        return (
            <div className="container-xl">
                <div className="row">
                    <div className="col-6">
                        <div className="chart-bg" style={{ marginTop: "2rem" }}>
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "1rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <h3 className="chart-legend">Jobs by status</h3>
                                </div>
                                <div className="row pl-2">
                                    <ReactApexChart options={this.state.options1} series={this.state.series1} type="bar" height={250} width={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="chart-bg" style={{ marginTop: "2rem" }}>
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "1rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <h3 className="chart-legend">Active Pipeline</h3>
                                </div>
                                <div className="row pl-2">
                                    <ReactApexChart options={this.state.options2} series={this.state.series2} type="bar" height={250} width={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="chart-bg" style={{ marginTop: "2rem" }}>
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ marginBottom: "2rem" }}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <h3 className="chart-legend">Active Job Duration</h3>
                                </div>
                                <div className="row pl-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600", color: "#090d3a" }}>
                                    <div className="col-9" style={{ borderRight: "1px solid #090d3a " }}>Job Title</div>
                                    <div className="col-3" style={{textAlign:'center'}}>Days Open</div>
                                </div>
                                <hr />
                                <div className="row pl-2 pb-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "500", color: "#090d3a" }}>
                                    <div className="col-9" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.job_titles.map((t, index) => {
                                            return(
                                                <div className="pt-2">{t}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-3">
                                        {this.props.alljobAnaInfo?.job_open_days.map((t, index) => {
                                            return(
                                                <div className="pt-2" style={{textAlign:'center'}}>{t}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="chart-bg" style={{ marginTop: "2rem" }}>
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "1rem" }}>
                                    <box-icon type="solid" name="user-pin" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <h3 className="chart-legend">Historical Pass-Through Rate</h3>
                                </div>
                                <div className="row pl-2">
                                    <ReactApexChart options={this.state.options2} series={this.state.series2} type="bar" height={250} width={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AnalyticsAllJob;