import React, { Component } from 'react';
//import Chart from "react-apexcharts";
import ReactWOW from 'react-wow';
import ShowMoreText from 'react-show-more-text';
import StarRatings from 'react-star-ratings';
import { GrowthChart } from "./Components";

export class Overview extends Component{

    constructor(props) {
        super(props);
    }

    executeOnClick(isExpanded) {
        console.log(isExpanded);
    }
    
    render(){
        return(
            <ReactWOW animation='fadeInLeft' delay='0.1s' >
                <div>
                    <h3 className="companydata-text1">Overview</h3>
                     <ShowMoreText
                        /* Default options */
                        lines={2}
                        more='Show more'
                        less='Show less'
                        className='content-css companydata-text2'
                        anchorClass='my-anchor-css-class'
                        onClick={this.executeOnClick}
                        expanded={false}
                     >
                        {this.props.overview}
                    </ShowMoreText>
                    <div className="row"> 
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Type</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <p className="companydata-text2">{this.props.type}</p>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Founded</p>
                        </div>
                        <div className="col-lg-7 col-md-7 ">
                            <p className="companydata-text2">{this.props.founded}</p>
                        </div>
                        <div className="col-lg-5 col-md-5 ">
                            <p className="companydata-text3">HQ</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <p className="companydata-text2">{this.props.hq}</p>
                        </div>
                        <div className="col-lg-5 col-md-5 ">
                            <p className="companydata-text3">Website</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <a href={this.props.website}  target="_blank">
                                {this.props.website}
                            </a>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3" style={{marginBottom: "0rem"}}>Company Growth</p>
                            <p className="companydata-text3">(employees)</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <GrowthChart
                                growthLabels={this.props.growthLabels}
                                growthData={this.props.growthData}
                            />
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <p className="companydata-text3">Employee Ratings</p>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="rating">
                                <StarRatings
                                    rating={this.props.ratings}
                                    starDimension="1.25rem"
                                    starRatedColor="#FF6B00"
                                />
                                <span style={{color: "#FF6B00", marginLeft: "1rem"}}>{this.props.ratings}</span>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5" style={{marginTop: '3%'}}>
                            <a className="default-btn"
                                target="_blank"
                                style={{color:"white", backgroundColor:"#090D3A", marginLeft:"4%", textDecoration: "none"}}
                                href={this.props.jobPage}
                            >
                                <i className="bx bxs-hot"></i> 
                                View Jobs
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </ReactWOW>
        )
    }
}

export default Overview;


