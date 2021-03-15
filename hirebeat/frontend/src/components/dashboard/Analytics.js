import React, { Component } from "react";
import { RateScore, InterviewChart } from "./DashboardComponents";
import 'boxicons';
//import { connect } from "react-redux";
import Chart from "react-apexcharts";
import Select from 'react-select'

export class Analytics extends Component {
    state = { 
        category: { value: 'All', label: 'All' },
        //chart        
        chartseries: [{
          name: 'Invitation',
          data: [35, 42, 38]
        }, {
          name: 'Shortlist',
          data: [20, 17, 17]
        }, {
          name: 'Hold',
          data: [10,3,3]
        },{
            name: 'Reject',
            data: [3,4,4]
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
        pieseries: [60.1, 30, 9.9],
            pieoptions: {
            labels: ['Shortlist', 'Hold', 'Reject'],
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'center'
                  }
                }
              }]
            },
      };

      onFilter = (e) => {
          this.setState({
              category: {value: e.value, label: e.label}
          })
      }

    render() {
        const options = [
            { value: 'Completed', label: 'Completed' },
            { value: 'Pending', label: 'Pending' },
            { value: 'Withdrawn', label: 'Withdrawn' },
            { value: 'All', label: 'All' },
        ];
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "0.6rem"}}>
                                    <box-icon type="solid" name="category-alt" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Overview</h3>
                                    <div className="row ml-5">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#e8edfc"></box-icon>
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Total invitation sent</p>
                                    </div>
                                </div>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px"}}>Interview received</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Shortlist</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>54</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Hold</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-3" style={{borderRight:"1px solid #E8EDFC"}}>
                                        <div className="row">
                                        <div className="col-6" style={{marginTop:"1rem"}}>
                                            <p style={{fontSize:"12px", marginLeft:"0.8rem"}}>Reject</p>
                                            <h3 className="chart-legend" style={{fontSize:"3rem", marginTop:"1rem"}}>81</h3>
                                        </div>
                                        <div className="col-6" style={{marginLeft:"-3rem"}}>
                                            <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
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
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Position title</p>
                                        <div style={{marginTop:"3rem"}}>
                                            <h3 className="chart-legend" style={{marginLeft:"0.5rem"}}>Product Designer</h3>
                                            <p style={{fontSize:"10px", marginTop:"2px", marginLeft:"0.5rem"}}>(ID: 10001)</p>
                                        </div>
                                        <div style={{marginTop:"3rem"}}>
                                            <h3 className="chart-legend" style={{marginLeft:"0.5rem"}}>Product Designer 2021 Intern</h3>
                                            <p style={{fontSize:"10px", marginTop:"2px", marginLeft:"0.5rem"}}>(ID: 10001)</p>
                                        </div>
                                        <div style={{marginTop:"3rem"}}>
                                            <h3 className="chart-legend" style={{marginLeft:"0.5rem"}}>Software Engineer</h3>
                                            <p style={{fontSize:"10px", marginTop:"2px", marginLeft:"0.5rem"}}>(ID: 10001)</p>
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <div className="row">
                                            <Chart options={this.state.chartoptions} series={this.state.chartseries} type="bar" height={350} width={500}/>
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
                                <div className="row mb-2">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                        <Select value={this.state.category} onChange={this.onFilter} options={options} className="select-category2"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
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
                                <div className="row mb-3">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                        <Select value={this.state.category} onChange={this.onFilter} options={options} className="select-category2"/>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-6" style={{marginTop:"3.6rem"}}>
                                        <div className="row ml-2">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#e8edfc"></box-icon>
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Total invitation sent</p>
                                        </div>
                                        <div className="row ml-2">
                                        <box-icon type="solid" name="rectangle" size="12px" color="#56a3fa"></box-icon>
                                        <p style={{fontSize:"12px", marginLeft:"0.5rem"}}>Total interview received</p>
                                        </div>
                                    </div>
                                    <div className="col-6" style={{marginLeft:"-2rem"}}>
                                        <RateScore percent={70.4} bgColor={"#FFFFFF"} barColor={"#56a3fa"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={200} width={250}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="chart-bg" style={{marginTop:"2rem"}}>
                            <div style={{padding: "0.6rem", paddingBottom:"0.1rem"}}>
                                <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                    <box-icon type="solid" name="chart" size="sm" color="#56a3fa" style={{marginLeft:"1rem"}}></box-icon>
                                    <h3 className="chart-legend">Interview Sessions</h3>
                                </div>
                                <div className="row mb-2">
                                    <p style={{fontSize:"14px", marginLeft:"2rem", paddingTop:"0.4rem"}}>Filter By</p>
                                    <div style={{marginLeft:"1.5rem"}}>
                                        <Select value={this.state.category} onChange={this.onFilter} options={options} className="select-category2"/>
                                    </div>
                                </div>
                                <div className="row ml-1">
                                    <InterviewChart dates={["Mar-11", "Mar-12", "Mar-13", "Mar-14", "Mar-15", "Mar-16", "Mar-17"]} videos={[1,2,3,3,2,4,1]} height={200} width={600} />
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