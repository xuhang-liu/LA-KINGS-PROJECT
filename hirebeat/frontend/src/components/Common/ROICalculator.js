import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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

    onChange1 = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    render() {
        return (
            <React.Fragment>
                <section className="video-presentation-area ptb-100" style={{backgroundColor:"#f4f7ff"}}>
                    <div className="container">
                        <div className="section-title">
                            <h2>HireBeat Savings Calculator</h2>
                            <p style={{color:"#090d3a"}}>Find out how much HireBeat can save your organization</p>
                       </div>
                       <div className="row">
                           <div className="col-lg-12 col-md-12">
                                <ReactWOW animation='fadeInLeft' delay='0.1s'>
                                    <a style={{textDecoration:'none'}} id="id-interview-practice-feedback">
                                    <div className="features-box-one">
                                        <div className="row mt-3 mb-3">
                                            <div className="d-flex col-lg-6 col-md-6" style={{borderRight:"3px solid #E8EDFC"}}>
                                                <form style={{marginLeft:"1rem"}}>
                                                    <div className="form-group">
                                                        <label style={{float:"left", fontWeight:"500", fontSize:"1rem", color:"#090d3a"}}>Numbers of hires per month</label>
                                                        <input style={{fontWeight:"500", fontSize:"1rem"}} type="number" className="form-control" name="numofhire" value={this.state.numofhire} onChange={this.onChange1}></input>
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{float:"left", fontWeight:"500", fontSize:"1rem", color:"#090d3a"}}>Recruiters per team</label>
                                                        <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={3} value={this.state.rec_value} onChange={this.onChange} name="rec_value"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label style={{float:"left", fontWeight:"500", fontSize:"1rem", color:"#090d3a"}}>Numbers of Resume per job</label>
                                                        <input style={{fontWeight:"500", fontSize:"1rem"}} type="number" className="form-control" name="numofresume" value={this.state.numofresume} onChange={this.onChange1}></input>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div style={{marginTop:"2rem"}}>
                                                    <h5 style={{fontWeight:"600", fontSize:"1.5rem", color:"#090d3a"}}>You’ll be saving...</h5>
                                                    <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>${this.state.rec_value*this.state.numofresume*this.state.numofhire}</h5>
                                                    <p style={{fontWeight:"500", fontSize:"1rem", color:"#090d3a"}}>per month</p>
                                                    <h5 style={{fontWeight:"600", fontSize:"3rem", color:"#67a3f3"}}>${this.state.rec_value*this.state.numofresume*this.state.numofhire}</h5>
                                                    <p style={{fontWeight:"500", fontSize:"1rem", color:"#090d3a"}}>hours per month</p>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="/employer_register" className="default-btn" style={{paddingLeft:"25px", position:"absolute", backgroundColor:"#ff6b00", color:"#ffffff", textDecoration:"none", left:"44%"}}>Start for Free</a>
                                    </div>
                                    </a>
                                </ReactWOW>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default ROICalculator;