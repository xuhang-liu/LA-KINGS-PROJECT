import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';
import {getCompanyBrandingInfo} from "../../../redux/actions/job_actions";
import MediaQuery from 'react-responsive';

const CompanyBranding = (props) =>{
    const { companyName } = useParams()
    useEffect(() => {
        if(companyName != "undefined" && companyName != "" && companyName != null){
            props.getCompanyBrandingInfo(companyName);
        };
    }, []);

    if( companyName == "undefined" || companyName == "" || companyName == null) {
        return <h3>Invalid URL</h3>
    }else{
        return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
            <div className="py-5" style={{background:"#E8EDFC", minWidth:"1290px", fontFamily:"Avenir Next, Segoe UI"}}>
                <div style={{marginLeft:"auto", marginRight:"auto", width:"70%", minHeight:"900px", borderRadius:"10px", background:"white", position:"relative"}}>
                    <img style={{height:"12rem", width:"100%"}} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon"/>
                    {(props.company_logo != "" && props.company_logo != null) &&
                    <img style={{width:"7rem", marginLeft:"2rem", marginTop:"-3.5rem"}} src={props.company_logo} alt="icon"/>}
                    <h1 className="ml-5 mt-5" style={{fontWeight:"600", fontSize:"2.5rem", color:"#090D3A"}}>{companyName}</h1>
                    <div className="card container-xl mt-5 pt-3 pb-3" style={{width:"90%", marginLeft:"auto", marginRight:"auto"}}>
                    <h3 style={{color:"#090d3a", fontWeight:"600", fontSize:"1.6rem"}}>Jobs</h3>
                    {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                        return(
                            <div className="container-xl">
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-10" style={{color:"#090D3A"}}>
                                        <div className="row">
                                            <a target="_blank" href={j.job_url} className="title-button ml-4" style={{float: "left", textDecoration:"none"}}>
                                                {j.job_title}
                                            </a>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12 ml-3" style={{float: "left"}}>
                                                <p style={{color:"#95A8C3"}}>{j.job_location?.replace(","," ")?.split(",")[0]} • {j.job_level}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="row">
                                            <a target="_blank" href={j.job_url} className="default-btn" style={{paddingLeft:"25px", marginTop:"1rem", textDecoration:"none"}}>Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr
                            style={{
                                color: "#E8EDFC",
                                backgroundColor: "#E8EDFC",
                                height: 3,
                                marginBottom: "0.5rem",
                                marginTop: "0.5rem"
                            }}
                            />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <div className="py-5" style={{background:"#E8EDFC", fontFamily:"Avenir Next, Segoe UI"}}>
                <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", minHeight:"700px", borderRadius:"10px", background:"white", position:"relative"}}>
                    <img style={{height:"12rem", width:"100%"}} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="img"/>
                    {(props.company_logo != "" && props.company_logo != null) &&
                    <img style={{width:"7rem", marginLeft:"34%", marginTop:"-3.5rem"}} src={props.company_logo} alt="icon"/>}
                    <h1 className="ml-5 mt-5" style={{fontWeight:"600", fontSize:"2.5rem", color:"#090D3A"}}>{companyName}</h1>
                    <div className="card container mt-5 pt-3 pb-3">
                    <h3 style={{color:"#090d3a", fontWeight:"600", fontSize:"1.6rem"}}>Jobs</h3>
                    {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                        return(
                            <div className="container-xl">
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-12" style={{color:"#090D3A"}}>
                                        <div className="row">
                                            <a target="_blank" href={j.job_url} className="title-button ml-4" style={{float: "left", textDecoration:"none"}}>
                                                {j.job_title}
                                            </a>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-12 ml-3" style={{float: "left"}}>
                                                <p style={{color:"#95A8C3"}}>{j.job_location?.replace(","," ")?.split(",")[0]} • {j.job_level}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <a target="_blank" href={j.job_url} className="default-btn mb-2 ml-4" style={{paddingLeft:"25px", textDecoration:"none"}}>Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr
                            style={{
                                color: "#E8EDFC",
                                backgroundColor: "#E8EDFC",
                                height: 3,
                                marginBottom: "0.5rem",
                                marginTop: "0rem"
                            }}
                            />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
            </MediaQuery>
        </React.Fragment>
        )
    }

};

const mapStateToProps = (state) => ({
    jobs_branding: state.job_reducer.jobs_branding,
    company_logo: state.job_reducer.company_logo,
});

export default connect(mapStateToProps, {getCompanyBrandingInfo})(CompanyBranding);