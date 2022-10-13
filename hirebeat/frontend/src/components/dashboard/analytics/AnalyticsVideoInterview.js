import React, { Component } from "react";
import { RateScore, InterviewChart } from "../DashboardComponents";
import 'boxicons';
//import { connect } from "react-redux";
//import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Box, Text } from '@chakra-ui/react';

export class AnalyticsVideoInterview extends Component {
    constructor(props) {
        super(props);
        this.props.getAnalyticsInfo(this.props.user.id);
    }

    state = {
        jobId2: Object.keys(this.props.position_list)[0],
        jobId3: Object.keys(this.props.position_list)[0],

        // Response Time
        res_time_series: [{
            name: 'Count',
            data: [this.props.analyticsInfo?.day1_count, this.props.analyticsInfo?.day2_count, this.props.analyticsInfo?.day3_count, this.props.analyticsInfo?.day4_count, this.props.analyticsInfo?.day5_count, this.props.analyticsInfo?.day6_count, this.props.analyticsInfo?.day7_count]
        }],
        res_time_options: {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,

                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                    columnWidth: '50%'
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#7e8993"]
                }
            },
            xaxis: {
                categories: ["1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7+ days"],
                position: 'bottom',
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                }

            },
        },
    };

    selectPosition2 = (key) => {
        this.setState({
            jobId2: key,
        });
    }
    selectPosition3 = (key) => {
        this.setState({
            jobId3: key,
        });
    }

    render() {
        let userAgent = navigator.userAgent;
        let browserName;
        if (userAgent.match(/firefox|fxios/i)) {
            browserName = "firefox";
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Interview Question Summary</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A summary of interview question configuration and their effectiveness broken down by job.</p>
                                </div>
                                <div className="row pl-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "600", color: "muted" }}>
                                    <div className="col-3" style={{ borderRight: "1px solid #090d3a" }}>Job Title</div>
                                    <div className="col-1" style={{ textAlign: 'center', borderRight: "1px solid #090d3a", fontSize: "0.8rem" }}>No. Qs</div>
                                    <div className="col-2" style={{ textAlign: 'center', borderRight: "1px solid #090d3a", fontSize: "0.8rem" }}>Prep Time</div>
                                    <div className="col-2" style={{ textAlign: 'center', borderRight: "1px solid #090d3a", fontSize: "0.8rem" }}>Re Length</div>
                                    <div className="col-1" style={{ textAlign: 'center', borderRight: "1px solid #090d3a", fontSize: "0.8rem" }}>Video</div>
                                    <div className="col-1" style={{ textAlign: 'center', borderRight: "1px solid #090d3a", fontSize: "0.8rem" }}>Re Rate</div>
                                    <div className="col-2" style={{ textAlign: 'center', fontSize: "0.8rem" }}>Avg Re Time</div>
                                </div>
                                <hr />
                                <div className="row pl-2 pb-2" style={{ fontFamily: "Inter, Segoe UI", fontWeight: "500", color: "muted" }}>
                                    <div className="col-3" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.job_titles?.map((t, index) => {
                                            return (
                                                <div className="pt-2">{(t?.length > 46) ? (t?.substring(0, 44) + "...") : t}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-1" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.no_of_ques?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-2" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.prep_times?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t}s</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-2" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.resp_times?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t}s</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-1" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.video_on?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t ? "On" : "Off"}</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-1" style={{ borderRight: "1px solid #090d3a " }}>
                                        {this.props.alljobAnaInfo?.resp_rate?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t}%</div>
                                            )
                                        })}
                                    </div>
                                    <div className="col-2">
                                        {this.props.alljobAnaInfo?.avg_res_time?.map((t, index) => {
                                            return (
                                                <div className="pt-2" style={{ textAlign: 'center' }}>{t} days</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-7">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Response Time</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>Response time is the number of days since the invitation was sent until the video is submitted. Here is a summary of response time from all jobs. Non-complete videos are not included.</p>
                                </div>
                                <div className="row px-2">
                                    {browserName == "firefox" ?
                                        <ReactApexChart options={this.state.res_time_options} series={this.state.res_time_series} type="bar" height={300} /> :
                                        <ReactApexChart options={this.state.res_time_options} series={this.state.res_time_series} type="bar" height={300} width={600} />
                                    }
                                </div>
                            </div>
                        </Box>
                    </div>
                    <div className="col-5">
                        <Box
                            bg="bg-surface"
                            boxShadow='sm'
                            borderRadius="lg"
                            p={{
                                base: '4',
                                md: '6',
                            }}
                        >
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Average Response Rate</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A summary of total videos submitted out of total invitations sent.</p>
                                </div>
                                <div className="row px-5">
                                    <div className="col-6">
                                        <p style={{ fontSize: "12px" }}>Interview sent</p>
                                        <Text fontSize='xl' color="muted" style={{ fontSize: "3rem", marginTop: "0.6rem" }}>{this.props.analyticsInfo?.invitation_total}</Text>
                                        <p style={{ fontSize: "12px" }}>Interview received</p>
                                        <Text fontSize='xl' color="muted" style={{ fontSize: "3rem", marginTop: "0.6rem" }}>{this.props.analyticsInfo?.interview_received}</Text>
                                    </div>
                                    <div className="col-6">
                                        <RateScore percent={Math.round(this.props.analyticsInfo?.interview_received_rate)} bgColor={"#FFFFFF"} barColor={"#006dff"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={200} />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="row mt-5">
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
                            <div style={{ padding: "0.6rem", paddingBottom: "0.1rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="user-pin" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Response Rate</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A summary of response rate broken down by jobs.</p>
                                </div>
                                <div className="row mb-2">
                                    <p style={{ fontSize: "14px", marginLeft: "2rem", paddingTop: "0.4rem" }}>Filter By</p>
                                    <div style={{ marginLeft: "1.5rem" }}>
                                        <DropdownButton variant="white" id="dropdown-basic" size="lg" title={(this.props?.position_list[this.state.jobId2]?.title)?.substring(0, 22)} >
                                            {Object.keys(this.props?.position_list).map((key) => {
                                                return <Dropdown.Item as="button" onClick={() => { this.selectPosition2(key) }}>{this.props?.position_list[key]?.title} {this.props?.position_list[key]?.jobid}</Dropdown.Item>
                                            })}
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-6" style={{ marginTop: "3.6rem" }}>
                                        <div className="row ml-2">
                                            <box-icon type="solid" name="rectangle" size="12px" color="#e8edfc"></box-icon>
                                            <p className="analytics_text" style={{ marginLeft: "0.5rem", display: "block" }}>Invitation sent
                                                <span className="analytics_preview" style={{ minWidth: "6rem", display: "block" }}>Number: {this.props?.position_list[this.state.jobId2]?.total_sent}</span></p>
                                        </div>
                                        <div className="row ml-2">
                                            <box-icon type="solid" name="rectangle" size="12px" color="#006dff"></box-icon>
                                            <p className="analytics_text" style={{ marginLeft: "0.5rem", display: "block" }}>Interview received
                                                <span className="analytics_preview" style={{ minWidth: "6rem", display: "block" }}>Number: {this.props?.position_list[this.state.jobId2]?.total_received}</span></p>
                                        </div>
                                    </div>
                                    <div className="col-6 px-2" style={{ marginLeft: "-2rem" }}>
                                        <RateScore percent={this.props?.position_list[this.state.jobId2]?.conversion} bgColor={"#FFFFFF"} barColor={"#006dff"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={250} />
                                    </div>
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
                            <div style={{ padding: "0.6rem", paddingBottom: "0.2rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="chart" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Video Interviews Over Time</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>A trend of video interview invitations and submissions over the selected timespan.</p>
                                </div>
                                <div className="row mb-2">
                                    <p style={{ fontSize: "14px", marginLeft: "2rem", paddingTop: "0.4rem" }}>Filter By</p>
                                    <div style={{ marginLeft: "1.5rem" }}>
                                        <DropdownButton variant="white" id="dropdown-basic" size="lg" title={(this.props?.position_list[this.state.jobId3]?.title)?.substring(0, 30)} >
                                            {Object.keys(this.props?.position_list).map((key) => {
                                                return <Dropdown.Item as="button" onClick={() => { this.selectPosition3(key) }}>{this.props?.position_list[key]?.title} {this.props?.position_list[key]?.jobid}</Dropdown.Item>
                                            })}
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div className="row ml-1">
                                    <InterviewChart dates={this.props?.interview_session?.date} videos_comp={this.props?.position_list[this.state.jobId3]?.recorded} videos_sent={this.props?.position_list[this.state.jobId3]?.vidsent} height={250} />
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="row mt-5">
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
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Current Pipeline Pass-Through Rate</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>Percentage of applicants moved forward from Video Interview stage, for all active jobs.</p>
                                </div>
                                <div className="row px-5">
                                    <div className="col">
                                        <RateScore percent={Math.round(this.props?.alljobAnaInfo?.liv_active_pass_rate)} bgColor={"#FFFFFF"} barColor={"#006dff"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={300} width={300} />
                                    </div>
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
                            <div style={{ padding: "0.6rem" }}>
                                <div className="row" style={{ alignItems: "center", marginBottom: "0.6rem" }}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#006dff" style={{ marginLeft: "1rem" }}></box-icon>
                                    <Text fontSize='md' color="muted">Historical Pipeline Pass-Through Rate</Text>
                                </div>
                                <div className="row px-4" style={{ alignItems: "center", marginBottom: "1.6rem" }}>
                                    <p style={{ color: "#7e8993", fontSize: "0.8rem" }}>Percentage of applicants moved forward from Video Interview stage, for all archived jobs.</p>
                                </div>
                                <div className="row px-5">
                                    <div className="col">
                                        <RateScore percent={Math.round(this.props?.alljobAnaInfo?.liv_pass_rate)} bgColor={"#FFFFFF"} barColor={"#006dff"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={300} width={300} />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        );

    };

}

export default AnalyticsVideoInterview;