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


