import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import 'boxicons';

class LeverageHireBeat extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc" style={{backgroundImage:"linear-gradient(103.24deg, rgba(103, 163, 243, 0.8) 18.41%, #E8EDFC 107.46%)"}}>
                <div style={{width:"85vw", margin:"auto"}}>
                    <div className="text-center" style={{color:"#090D3A"}}>
                        <h1><b>Leverage HireBeat to Enrich Your Recruiting Efforts</b></h1>
                        <div className="my-4">
                            <h5 style={{color:"#090D3A"}}>Set up the interview once and review hundreds of candidates anytime and anywhere.</h5>
                        </div>
                    </div>
                    <ReactWOW animation='fadeInRight' delay='0.1s'>
                    <div className="row my-5">
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='stopwatch' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#13C4A1", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3><b>Time</b></h3>
                                            <h5>Streamline screening process and reduce time up to 80%</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='money' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#FAC046", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3><b>Cost</b></h3>
                                            <h5>Save hiring and recruiting cost by up to 50% </h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='trip' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#FF6B00", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3><b>Engagement</b></h3>
                                            <h5>Review candidate with no time or place limitation</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mt-2" >
                            <div className="card h-100" style={{boxShadow:"2px 2px 4px 0px rgba(128,128,128,0.16)"}}>
                                    <div className="card-body">
                                        <div className="p-3">
                                            <box-icon name='devices' color="white" size="3em" animation='tada-hover' style={{backgroundColor:"#6E6BFF", borderRadius:"0.3em", padding:"1em"}}/>
                                        </div>
                                        <div className="px-3 employer-landing-card">
                                            <h3><b>Collaboration</b></h3>
                                            <h5>Invite team to work on candidate screening virtually</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </ReactWOW>
                </div>
            </section>
        );
    }
}

export default LeverageHireBeat;