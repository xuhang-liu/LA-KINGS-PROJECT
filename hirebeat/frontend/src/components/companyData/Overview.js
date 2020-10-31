import React, { Component } from 'react';
import Chart from "react-apexcharts";
import ReactWOW from 'react-wow';

import { customBarData } from "../../constants/constants";
import { Link } from "react-router-dom";

export const OverallScore = (props) => {
  var options = customBarData(props.percent, props.bgColor, props.barColor);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="line"
      height={150}
      key={"overall"}
    />
  );
};

class Overview extends Component{
    
    render(){
        var numrows = 4;
        const stars = [];
        for (var i= 0; i<numrows; i++) {
            stars.push(<i key={i} className="bx bxs-star"></i>)
        };
        return(
            <ReactWOW animation='fadeInLeft' delay='0.1s' >
                <div>
                    <h3 className="companydata-text1">OverView</h3>
                    <p className="companydata-text2">Walmart is a retailing company that operates a chain of hypermarkets, discount departments, and...</p>
                    <div className="row"> 
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Type</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <p className="companydata-text2">Public</p> 
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Founded</p>
                        </div>
                        <div className="col-lg-7 col-md-7 ">
                            <p className="companydata-text2">1962</p> 
                        </div>
                        <div className="col-lg-5 col-md-5 ">
                            <p className="companydata-text3">HQ</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <p className="companydata-text2">Bentonville, US</p> 
                        </div>
                        <div className="col-lg-5 col-md-5 ">
                            <p className="companydata-text3">Website</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <a href="http://www.hirebeat.com" rel="nofollow noopener opreferer">
                            hirebeat.com
                            </a>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Company Growth</p>
                            <p className="companydata-text3">(employees)</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                        <Chart
                            options= {{
                                chart: {
                                    type: 'line',
                                },
                                grid: {
                                    show: false,
                                },
                                stroke: {
                                    curve: 'smooth',
                                },
                                dataLabels: {
                                enabled: true,
                                enabledOnSeries: [0]
                                },
                                labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
                                xaxis:{
                                    labels: {
                                        show: false,
                                    },
                                },
                                yaxis:{
                                    labels: {
                                        show:false,
                                    },
                                },
                                dataLabels: {
                                    enabled: false,
                                },
                            }}
                            series={[{
                                name: 'employees',
                                type: 'line',
                                data: [230, 420, 350, 270, 430, 220, 170, 310]
                                },
                            ]}
                            type="line"
                            />
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Employee Ratings</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="rating">
                            {stars}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5" style={{marginTop: '3%'}}>
                            <Link to="/resume">
                            <a className="default-btn" 
                            style={{color:"white", backgroundColor:"#090D3A", marginLeft:"4%"}}>
                                <i className="bx bxs-hot"></i> 
                                View Jobs
                                <span></span>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </ReactWOW>
            // <OverallScore percent={10} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
        )
    }
}

export default Overview;


