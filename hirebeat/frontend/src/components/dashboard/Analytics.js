import React, { Component } from "react";
import { RateScore, InterviewChart } from "./DashboardComponents";
import 'boxicons';
//import { connect } from "react-redux";
import Chart from "react-apexcharts";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export class Analytics extends Component {
    constructor(props) {
        super(props);
        this.props.getAnalyticsInfo(this.props.user.id);
      }

    state = { 
        jobId1: Object.keys(this.props.position_list)[0],
        jobId2: Object.keys(this.props.position_list)[0],
        jobId3: Object.keys(this.props.position_list)[0],
        //chart        
        chartseries: [{
          name: 'Invitation',
          data: this.props.analyticsInfo.invitation_list
        }, {
          name: 'Shortlist',
          data: this.props.analyticsInfo.shortlist_list
        }, {
          name: 'Hold',
          data: this.props.analyticsInfo.hold_list
        },{
            name: 'Reject',
            data: this.props.analyticsInfo.reject_list
        }],
        chartoptions: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
          },
          plotOptions: {
            bar: {
              borderRadius: 8,
              horizontal: true,
            },
          },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: [""],
            labels: {
              formatter: function (val) {
                return val
              }
            }
          },
          yaxis: {
            title: {
              text: undefined
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val
              }
            }
          },
          fill: {
            opacity: 1
          },
          legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 40
          }
        },

        //pie-chart
        pieseries: this.props.position_list[0].rate,
        pieoptions: {
            colors:['#13C4A1', '#FFCD00', '#FF0000'],
            labels: ['Shortlist', 'Hold', 'Reject'],
              chart: {
                type: 'pie',
              },
              fill: {
                type: 'gradient',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'center'
                  },
                }
              }]
            },
      };

      selectPosition1 = (key) => {
        this.setState({
            jobId1: key,
            pieseries: this.props.position_list[key].rate,
        });
      }
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
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"1px"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "0.6rem"}}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Overview</h3>
                                    <div className="row ml-5">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#e8edfc"></box-icon>
                                        <p className="analytics_text" style={{marginLeft:"0.5rem"}}>Total invitation sent
                                        <span className="analytics_preview" style={{minWidth:"6rem"}}>The number of invitation: {this.props.analyticsInfo.invitation_total}</span></p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"2rem"}}>
                                            <p style={{fontSize:"12px"}}>Interview received</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>{this.props.analyticsInfo.interview_received}</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={Math.round(this.props.analyticsInfo.interview_received_rate)} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"2rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Shortlist</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>{this.props.analyticsInfo.shortlist_num}</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={Math.round(this.props.analyticsInfo.shortlist_num_rate)} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"2rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Hold</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>{this.props.analyticsInfo.hold_num}</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={Math.round(this.props.analyticsInfo.hold_num_rate)} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"2rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Reject</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>{this.props.analyticsInfo.reject_num}</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={Math.round(this.props.analyticsInfo.reject_num_rate)} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={200}/>
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
                                    <box-icon type="solid" name="shopping-bags" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Positions</h3>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem", marginBottom:"2.5rem"}}>Position title</p>
                                        {this.props.position_list.map((pl) => {return(
                                        <div style={{marginTop:"1rem"}}>
                                            <h3 className="chart-legend" style={{marginLeft:"0.5rem"}}>{pl.title}</h3>
                                            <p style={{fontSize:"12px", marginTop:"2px", marginLeft:"0.5rem"}}>(ID: {pl.jobid})</p>
                                        </div>
                                        )})}
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <Chart options={this.state.chartoptions} series={this.state.chartseries} type="bar" height={100+(this.props.position_list.length*57)} width={500}/>
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
                                    <box-icon type="solid" name="pie-chart" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Position chart</h3>
                                </div>
                                <div className="row mb-4">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                    <DropdownButton variant="white" id="dropdown-basic" size="lg" title={(this.props.position_list[this.state.jobId1].title).substring(0,16)}>
                                        {Object.keys(this.props.position_list).map((key) => {
                                            return <Dropdown.Item as="button" onClick={() => {this.selectPosition1(key)}}>{this.props.position_list[key].title} {this.props.position_list[key].jobid}</Dropdown.Item>
                                        })}
                                    </DropdownButton>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <Chart options={this.state.pieoptions} series={this.state.pieseries} type="donut" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="user-pin" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Interview Conversion</h3>
                                </div>
                                <div className="row mb-2">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                    <DropdownButton variant="white" id="dropdown-basic" size="lg" title={(this.props.position_list[this.state.jobId2].title).substring(0,22)} >
                                        {Object.keys(this.props.position_list).map((key) => {
                                            return <Dropdown.Item as="button" onClick={() => {this.selectPosition2(key)}}>{this.props.position_list[key].title} {this.props.position_list[key].jobid}</Dropdown.Item>
                                        })}
                                    </DropdownButton>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-6" style={{marginTop:"3.6rem"}}>
                                        <div className="row ml-2">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#e8edfc"></box-icon>
                                        <p className="analytics_text" style={{marginLeft:"0.5rem", display:"block"}}>Total invitation sent
                                        <span className="analytics_preview" style={{minWidth:"6rem", display:"block"}}>Number: {this.props.position_list[this.state.jobId2].total_sent}</span></p>
                                        </div>
                                        <div className="row ml-2">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#56a3fa"></box-icon>
                                        <p className="analytics_text" style={{marginLeft:"0.5rem", display:"block"}}>Total interview received
                                        <span className="analytics_preview" style={{minWidth:"6rem", display:"block"}}>Number: {this.props.position_list[this.state.jobId2].total_received}</span></p>
                                        </div>
                                    </div>
                                    <div className="col-6" style={{marginLeft:"-2rem"}}>
                                        <RateScore percent={this.props.position_list[this.state.jobId2].conversion} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={250}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.2rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="chart" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Interview Sessions</h3>
                                </div>
                                <div className="row mb-2">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                    <DropdownButton variant="white" id="dropdown-basic" size="lg" title={(this.props.position_list[this.state.jobId3].title).substring(0,30)} >
                                        {Object.keys(this.props.position_list).map((key) => {
                                            return <Dropdown.Item as="button" onClick={() => {this.selectPosition3(key)}}>{this.props.position_list[key].title} {this.props.position_list[key].jobid}</Dropdown.Item>
                                        })}
                                    </DropdownButton>
                                    </div>
                                </div>
                                <div className="row ml-1">
                                    <InterviewChart dates={this.props.interview_session.date} videos={this.props.position_list[this.state.jobId3].recorded} height={200} width={600} />
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