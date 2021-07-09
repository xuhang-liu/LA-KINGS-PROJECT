import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import MediaQuery from 'react-responsive';
import { connect } from "react-redux";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
import PageTitleArea2 from '../Common/PageTitleArea2';
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";

const PrettoSlider = withStyles({
    root: {
      color: '#67A3F3',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

class ROICalculator extends Component {
    state = {
        rec_value: 3,
        numofhire: 3,
        numofresume: 150,
    }

    onChange = (event, newValue) => {
        this.setState({
            rec_value: newValue,
        });
    };

    onChangeNumOfHires = (event, newValue) => {
        this.setState({
            numofhire: newValue,
        });
    };

    onChangeNumOfResumes = (event, newValue) => {
        this.setState({
            numofresume: newValue,
        });
    };

    onChange1 = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    render() {
        var a1 = this.state.numofresume*8;
        var a2 = this.state.numofresume*20*0.3;
        var a3 = this.state.numofresume*30*0.15;
        var c1 = a1+a2+a3;
        var c2 = (this.state.rec_value*55000/2080)/60;
        var costperhire = c1*c2;
        var costpermonth = this.state.numofhire*costperhire;
        var b1 = this.state.numofresume*30*0.06;
        var b2 = this.state.numofresume*20*0.15;
        var d1 = b1+b2+(a1*0.7);
        var hcostperhire = d1*c2;
        var hcostpermonth = hcostperhire*this.state.numofhire;

        var moneysaving = costpermonth-hcostpermonth;
        var timesaving = ((c1-d1)/60)*this.state.numofhire*this.state.rec_value;
        var roi = (moneysaving-599)/599;

        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            canonical: 'https://hirebeat.co/employer-roi-calculator',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
              }
            }
          };

        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    <PageTitleArea2
                        pageTitle="HireBeat Savings Calculator"
                        pageDescription="Find out how much HireBeat can save your organization"
                    />
                    <section className="video-presentation-area ptb-100" style={{backgroundColor:"#f4f7ff"}}>
                        <div className="container">
                           <div className="row">
                               <div className="col-lg-12 col-md-12">
                                    <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                        <a style={{textDecoration:'none'}} id="id-interview-practice-feedback">
                                        <div className="features-box-one">
                                            <div className="row mt-3 mb-3">
                                                <div className="col-lg-6 col-md-6" style={{borderRight:"3px solid #E8EDFC"}}>
                                                    <form style={{marginLeft:"1rem"}}>
                                                        <div className="row">
                                                            <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>Number of Hires per month</label>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-10 col-md-10 form-group">
                                                                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1} value={this.state.numofhire} onChange={this.onChangeNumOfHires} name="numofhire" min={1} max={2000}/>
                                                            </div>
                                                            <MediaQuery minDeviceWidth={1224}>
                                                                <div className="col-lg-1 col-md-1 form-group" style={{display: "flex", alignItems: "center"}}>
                                                                    <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>{this.state.numofhire}</label>
                                                                </div>
                                                            </MediaQuery>
                                                        </div>
                                                        <div className="row">
                                                            <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>Total Recruiters</label>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-10 col-md-10 form-group">
                                                                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={3} value={this.state.rec_value} onChange={this.onChange} name="rec_value" min={1} max={50}/>
                                                            </div>
                                                            <MediaQuery minDeviceWidth={1224}>
                                                                <div className="col-lg-1 col-md-1 form-group" style={{display: "flex", alignItems: "center"}}>
                                                                    <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>{this.state.rec_value}</label>
                                                                </div>
                                                            </MediaQuery>
                                                        </div>
                                                        <div className="row">
                                                            <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>Number of Resumes per job</label>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-10 col-md-10 form-group">
                                                                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={1} value={this.state.numofresume} onChange={this.onChangeNumOfResumes} name="numofresume" min={1} max={1000}/>
                                                            </div>
                                                            <MediaQuery minDeviceWidth={1224}>
                                                                <div className="col-lg-1 col-md-1 form-group" style={{display: "flex", alignItems: "center"}}>
                                                                    <label style={{float:"left", fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>{this.state.numofresume}</label>
                                                                </div>
                                                            </MediaQuery>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                                            <h5 style={{fontWeight:"600", fontSize:"1.5rem", color:"#090d3a"}}>Your savings</h5>
                                                            <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>${moneysaving.toFixed(0)}</h5>
                                                            <p style={{fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>per month</p>
                                                        </div>
                                                        <div className="col-lg-5 col-md-5 col-sm-12">
                                                            <h5 style={{fontWeight:"600", fontSize:"1.5rem", color:"#090d3a", marginTop:"0.5rem"}}>ROI</h5>
                                                        {roi.toFixed(0) <= 0 ?
                                                            <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>---</h5> :
                                                            <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>{roi.toFixed(0)}X</h5>
                                                        }
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-7 col-md-7 col-sm-12">
                                                            <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>{timesaving.toFixed(0)}</h5>
                                                            <p style={{fontWeight:"600", fontSize:"1rem", color:"#090d3a"}}>hours per month</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <MediaQuery minDeviceWidth={1224}>
                                            {this.props.isAuthenticated ?
                                            <a href="/employer-pricing" className="default-btn" style={{paddingLeft:"25px", position:"absolute", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none", left:"44%"}}>Select Your Plan</a> :
                                            <a href="/employer_register" className="default-btn" style={{paddingLeft:"25px", position:"absolute", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none", left:"44%"}}>Start for Free</a>
                                            }
                                            </MediaQuery>
                                            <MediaQuery maxDeviceWidth={1223}>
                                            {this.props.isAuthenticated ?
                                            <a href="/employer-pricing" className="default-btn" style={{paddingLeft:"25px", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none"}}>Select Your Plan</a>:
                                            <a href="/employer_register" className="default-btn" style={{paddingLeft:"25px", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none"}}>Start for Free</a>
                                            }
                                            </MediaQuery>
                                        </div>
                                        </a>
                                    </ReactWOW>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FreeTrialArea />
                    <Footer />
                </React.Fragment>
            </DocumentMeta>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth_reducer.isAuthenticated,
});

export default connect(mapStateToProps, null) (ROICalculator);