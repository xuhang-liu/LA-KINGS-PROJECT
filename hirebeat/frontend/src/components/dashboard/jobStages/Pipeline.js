import React, { Component } from "react";

export class Pipeline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid py-5 px-5">
                    <div className="row">
                        <div onClick={this.props.renderAllCandidates} style={{cursor:"pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage1.png")', width: "18.8rem", height:"7.8rem", boxSizing:"border-box", position:"relative", zIndex:5}}>
                            <p style={{textAlign:'center', color:"#fff", paddingTop:"2.5rem", fontWeight:"600", fontSize:"1rem"}}>All Candidates</p>
                            <p style={{textAlign:'center', color:"#fff", marginTop:"-1rem", fontWeight:"600", fontSize:"1rem"}}>100</p>
                        </div>
                        <div style={{boxShadow:"0px 0px 20px rgba(103, 163, 243, 0.2)", width:"12rem", height:"5.6rem", top:"0.3rem", position:"relative"}}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#0DC68E"}}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>75</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#FF5830"}}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"-1.7rem"}}>
                        <div onClick={this.props.renderResumeScreen} style={{cursor:"pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage2.png")', width: "18.8rem", height:"7.8rem", boxSizing:"border-box", position:"relative", zIndex:4}}>
                            <p style={{textAlign:'center', color:"#fff", paddingTop:"2.5rem", fontWeight:"600", fontSize:"1rem"}}>Resume Screening</p>
                            <p style={{textAlign:'center', color:"#fff", marginTop:"-1rem", fontWeight:"600", fontSize:"1rem"}}>30</p>
                        </div>
                        <div style={{boxShadow:"0px 0px 20px rgba(103, 163, 243, 0.2)", width:"12rem", height:"5.6rem", top:"0.3rem", position:"relative"}}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#0DC68E"}}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>25</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#FF5830"}}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"-1.7rem"}}>
                        <div onClick={this.props.renderVideoInterview} style={{cursor:"pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage3.png")', width: "18.8rem", height:"7.8rem", boxSizing:"border-box", position:"relative", zIndex:3}}>
                            <p style={{textAlign:'center', color:"#fff", paddingTop:"2.5rem", fontWeight:"600", fontSize:"1rem"}}>Video Interview</p>
                            <p style={{textAlign:'center', color:"#fff", marginTop:"-1rem", fontWeight:"600", fontSize:"1rem"}}>30</p>
                        </div>
                        <div style={{boxShadow:"0px 0px 20px rgba(103, 163, 243, 0.2)", width:"12rem", height:"5.6rem", top:"0.3rem", position:"relative"}}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#0DC68E"}}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#FF5830"}}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"-1.7rem"}}>
                        <div onClick={this.props.renderLiveInterview} style={{cursor:"pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage4.png")', width: "18.8rem", height:"7.8rem", boxSizing:"border-box", position:"relative", zIndex:2}}>
                            <p style={{textAlign:'center', color:"#fff", paddingTop:"2.5rem", fontWeight:"600", fontSize:"1rem"}}>Live Interview</p>
                            <p style={{textAlign:'center', color:"#fff", marginTop:"-1rem", fontWeight:"600", fontSize:"1rem"}}>38</p>
                        </div>
                        <div style={{boxShadow:"0px 0px 20px rgba(103, 163, 243, 0.2)", width:"12rem", height:"5.6rem", top:"0.3rem", position:"relative"}}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#0DC68E"}}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#FF5830"}}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"-1.7rem"}}>
                        <div onClick={this.props.renderShortList} style={{cursor:"pointer", backgroundImage: 'url("https://hirebeat-assets.s3.amazonaws.com/Employer/stage5.png")', width: "18.8rem", height:"7.8rem", boxSizing:"border-box", position:"relative", zIndex:1}}>
                            <p style={{textAlign:'center', color:"#fff", paddingTop:"2.5rem", fontWeight:"600", fontSize:"1rem"}}>Short List</p>
                            <p style={{textAlign:'center', color:"#fff", marginTop:"-1rem", fontWeight:"600", fontSize:"1rem"}}>2</p>
                        </div>
                        <div style={{boxShadow:"0px 0px 20px rgba(103, 163, 243, 0.2)", width:"12rem", height:"5.6rem", top:"0.3rem", position:"relative"}}>
                            <div className="row px-4 pt-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#0DC68E"}}></span>Active:</p>
                                </div>
                                <div className="col-4">
                                    <p>2</p>
                                </div>
                            </div>
                            <div className="row px-4 pb-3">
                                <div className="col-8">
                                    <p style={{fontWeight:"600"}}><span className="dot" style={{backgroundColor:"#FF5830"}}></span>Rejected:</p>
                                </div>
                                <div className="col-4">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Pipeline