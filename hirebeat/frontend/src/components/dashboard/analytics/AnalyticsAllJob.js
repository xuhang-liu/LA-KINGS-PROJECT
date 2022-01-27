import React, { Component } from "react";
import 'boxicons';
import ReactApexChart from "react-apexcharts";

export class AnalyticsAllJob extends Component {
    constructor(props) {
        super(props);
        this.props.getAnalyticsInfo(this.props.user.id);
        alert(this.props.alljobAnaInfo.active_jobs);
        this.state = {

            series: [{
                data: [400, 430, 448, 470]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
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
            }
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
                                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} width={500} />
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
                                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} width={500} />
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