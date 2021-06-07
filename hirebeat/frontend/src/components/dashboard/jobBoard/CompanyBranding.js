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
        }
    }, []);

    if( companyName == "undefined" || companyName == "" || companyName == null) {
        return <h3>Invalid URL</h3>
    }else{
        return (
        <React.Fragment>
            <MediaQuery minDeviceWidth={1224}>
            <div className="py-5" style={{background:"#E8EDFC", minWidth:"1290px"}}>
                <div style={{marginLeft:"auto", marginRight:"auto", width:"70%", minHeight:"900px", borderRadius:"10px", background:"white", position:"relative"}}>
                    <img style={{height:"12rem", width:"100%"}} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png"/>
                    <h1 className="ml-5 mt-5" style={{fontWeight:"600", fontSize:"2.5rem", color:"#090D3A"}}>{companyName?.replace("-", " ")}</h1>
                    {props.companyName}
                </div>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <div className="py-5" style={{background:"#E8EDFC"}}>
                <div style={{marginLeft:"auto", marginRight:"auto", width:"90%", minHeight:"700px", borderRadius:"10px", background:"white", position:"relative"}}>
                    <img style={{height:"12rem", width:"100%"}} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png"/>
                    <h1 className="ml-5 mt-5" style={{fontWeight:"600", fontSize:"2.5rem", color:"#090D3A"}}>{companyName?.replace("-", " ")}</h1>
                </div>
            </div>
            </MediaQuery>
        </React.Fragment>
        )
    }

};

const mapStateToProps = (state) => ({
    companyName: state.job_reducer.companyName,
});

export default connect(mapStateToProps, {getCompanyBrandingInfo})(CompanyBranding);