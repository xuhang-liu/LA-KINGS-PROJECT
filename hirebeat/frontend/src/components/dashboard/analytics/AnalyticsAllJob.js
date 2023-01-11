import React, { Component } from "react";
import 'boxicons';
import ReactApexChart from "react-apexcharts";
import { Box, Text } from '@chakra-ui/react';

export class AnalyticsAllJob extends Component {
    constructor(props) {
        super(props);
        this.props.getAnalyticsInfo(this.props.user.id);
        this.state = {
            // Jobs by status
            series1: [{
                data: [this.props.alljobAnaInfo?.draft_jobs, this.props.alljobAnaInfo?.active_jobs, this.props.alljobAnaInfo?.closed_jobs, this.props.alljobAnaInfo?.archived_jobs],
                name: "Count"
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
                    enabled: true
                },
                xaxis: {
                    categories: ['Draft', 'Published', 'Closed', 'Archived'],
                }
            },

            // Active Pipeline
            series2: [{
                data: [this.props.alljobAnaInfo?.res_act_count, this.props.alljobAnaInfo?.vid_act_count, this.props.alljobAnaInfo?.liv_act_count, this.props.alljobAnaInfo?.sho_act_count],
                name: "Count"
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
                    enabled: true
                },
                xaxis: {
                    categories: ['Resume Review', 'Video Interview', 'Live Interview', 'Short List'],
                }
            },

            // Historical Pass-Through Rate
            series3: [this.props.alljobAnaInfo?.sho_pass_rate, this.props.alljobAnaInfo?.liv_pass_rate, this.props.alljobAnaInfo?.vid_pass_rate, this.props.alljobAnaInfo?.res_pass_rate],
            options3: {
                fill: {
                    colors: ['#09c6f3', '#249ef1', "#1e5eff", "#ff9e47"]
                },
                chart: {
                    height: 100,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "40%"
                        },
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                                color: "#090d3a"
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: "Total Average",
                            },
                        }
                    }
                },
                labels: ['Live Interview', 'Video Interview', 'Resume Review', 'Application'],
            },
        };
    }

    selectPosition1 = (key) => {
        this.setState({
            job_index: key,
        });
    }

    render() {
        return (
            <Box>
                <div className="row">
                    <div className="col-6">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Jobs by status</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A summary of all jobs broken down by status.</p>
                                </div>
                                <div className="row pl-2">
                                    <ReactApexChart options={this.state.options1} series={this.state.series1} type="bar" height={250} width={500} />
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Active Pipeline</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A summary of all active applications broken down by stage.</p>
                                </div>
                                <div className="row pl-2">
                                    <ReactApexChart options={this.state.options2} series={this.state.series2} type="bar" height={250} width={500} />
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="row pb-3 mt-5">
                    <div className="col-6">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="user-pin" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Historical Pass-Through Rate</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>Pass-through rate is the percentage of applicants moved forward from the current stage to the next. Here is a summary of the pass-through rates of all archived jobs.</p>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <ReactApexChart options={this.state.options3} series={this.state.series3} type="radialBar" height={350} />
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Active Job Duration</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A list of all active jobs that haven't been filled. The number of days is from when the job was first published until now.</p>
                                </div>
                                <div className="row pl-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600", color: "muted" }}>
                                    <div className="col-9" style={{ borderRight: "1px solid #090d3a " }}>Job Title</div>
                                    <div className="col-3" style={{ textAlign: 'center' }}>Days Open</div>
                                </div>
                                <hr />
                                <div className="row pl-2 pb-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "500", color: "muted" }}>
                                    <div className="col-9" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.job_titles.map((t, index) => {
                                            return (
                                                <div className="pt-2">{(t?.length > 46) ? (t?.substring(0, 44) + "...") : t}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-3">
                                        {this.props.alljobAnaInfo?.job_open_days.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </Box>
        )
    }

}

export default AnalyticsAllJob;