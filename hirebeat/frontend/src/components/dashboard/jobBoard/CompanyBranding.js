import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { getCompanyBrandingInfo } from "../../../redux/actions/job_actions";
import MediaQuery from 'react-responsive';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

const CompanyBranding = (props) => {
    const { companyName } = useParams()
    useEffect(() => {
        if (companyName != "undefined" && companyName != "" && companyName != null) {
            props.getCompanyBrandingInfo(companyName);
        };
    }, []);

    if (companyName == "undefined" || companyName == "" || companyName == null) {
        return <h3>Invalid URL</h3>
    } else {
        return (
            <React.Fragment>
                <MediaQuery minDeviceWidth={1224}>
                    <div className="container-fluid py-5" style={{ background: "#E8EDFC", minWidth: "1290px", fontFamily: "Avenir Next, Segoe UI" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "70%", minHeight: "900px", borderRadius: "10px", background: "white", position: "relative", paddingBottom: "4rem" }}>
                            <img style={{ height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon" />
                            {(props.company_logo != "" && props.company_logo != null) &&
                                <img style={{ width: "7rem", marginLeft: "2rem", marginTop: "-3.5rem" }} src={props.company_logo} alt="icon" />}
                            <h1 className="ml-5 mt-5" style={{ fontWeight: "600", fontSize: "2.5rem", color: "#090D3A" }}>{companyName}</h1>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="card container-xl mt-5 pt-3 pb-3 ml-3">
                                            <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Company Overview</h3>
                                            {(props.summary != null && props.summary != "") &&
                                                <div className="mb-3 mt-2 ml-5 mr-5">
                                                    {parse('' + props.summary + '')}
                                                </div>}
                                        </div>
                                        {(props.video_url != null && props.video_url != "") &&
                                            <div className="card container-xl mt-3 pt-3 pb-3 ml-3">
                                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Company Info</h3>
                                                <div className="mb-3 mt-2 ml-5 mr-5">
                                                    <ReactPlayer id="company-branding-player" controls={true} width={"100%"} height={"100%"} url={props.video_url} />
                                                </div>
                                            </div>}
                                        <div className="card container-xl mt-3 pt-3 pb-3 ml-3">
                                            <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Jobs</h3>
                                            {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                                                return (
                                                    <div className="container-xl">
                                                        <div className="mt-4">
                                                            <div className="row">
                                                                <div className="col-10" style={{ color: "#67a3fa" }}>
                                                                    <div className="row">
                                                                        <a target="_blank" href={j.job_url} className="title-button ml-4" style={{ float: "left", textDecoration: "none", color: "#67a3fa" }}>
                                                                            {j.job_title}
                                                                        </a>
                                                                    </div>
                                                                    <div className="row mb-2">
                                                                        <div className="col-12 ml-3" style={{ float: "left" }}>
                                                                            <p style={{ color: "#95A8C3" }}>{j.job_location?.replace(",", " ")?.split(",")[0]} • {j.job_level}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2">
                                                                    <div className="row">
                                                                        <a target="_blank" href={j.job_url} className="default-btn" style={{ paddingLeft: "25px", marginTop: "1rem", textDecoration: "none" }}>Apply</a>
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
                                    <div className="col-4">
                                        <div className="card container-xl mt-5 pt-3 pb-3">
                                            <h3 style={{ color: "#95A8C3", fontWeight: "700", fontSize: "1.1rem" }}>ABOUT THE COMPANY</h3>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Website</p>
                                            <a className="website" target="_blank" href={props.website}>{props.website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Location</p>
                                            <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.location}</p>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Company Size</p>
                                            <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_size}</p>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Industry</p>
                                            <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_type}</p>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Contact Email</p>
                                            <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.contact_email}</p>
                                            <br />
                                            <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Social Media</p>
                                            <div className="row pl-3">
                                                {(props.facebook != null && props.facebook != "") && <a target="_blank" href={props.facebook}><FacebookIcon size={30} round={true} /></a>}
                                                {(props.linkedin != null && props.linkedin != "") && <a target="_blank" className="ml-2" href={props.linkedin}><LinkedinIcon size={30} round={true} /></a>}
                                                {(props.twitter != null && props.twitter != "") && <a target="_blank" className="ml-2" href={props.twitter}><TwitterIcon size={30} round={true} /></a>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="py-5" style={{ background: "#E8EDFC", fontFamily: "Avenir Next, Segoe UI" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%", minHeight: "700px", borderRadius: "10px", background: "white", position: "relative", paddingBottom: "3rem" }}>
                            <img style={{ height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="img" />
                            {(props.company_logo != "" && props.company_logo != null) &&
                                <img style={{ width: "7rem", marginLeft: "34%", marginTop: "-3.5rem" }} src={props.company_logo} alt="icon" />}
                            <h1 className="ml-5 mt-5" style={{ fontWeight: "600", fontSize: "2.5rem", color: "#090D3A" }}>{companyName}</h1>
                            <div className="container mt-3 pt-3 pb-3 ml-3 mr-5">
                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Company Overview</h3>
                                {(props.summary != null && props.summary != "") &&
                                    <div className="mb-3 mt-2 mr-5">
                                        {parse('' + props.summary + '')}
                                    </div>}
                            </div>
                            <div className="container mt-3 pt-3 pb-3 ml-3 mr-5">
                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>About The Company</h3>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Website</p>
                                <a className="website" target="_blank" href={props.website}>{props.website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Location</p>
                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.location}</p>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Company Size</p>
                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_size}</p>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Industry</p>
                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_type}</p>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Contact Email</p>
                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.contact_email}</p>
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Social Media</p>
                                <div className="row pl-3">
                                    {(props.facebook != null && props.facebook != "") && <a target="_blank" href={props.facebook}><FacebookIcon size={30} round={true} /></a>}
                                    {(props.linkedin != null && props.linkedin != "") && <a target="_blank" className="ml-2" href={props.linkedin}><LinkedinIcon size={30} round={true} /></a>}
                                    {(props.twitter != null && props.twitter != "") && <a target="_blank" className="ml-2" href={props.twitter}><TwitterIcon size={30} round={true} /></a>}
                                </div>
                            </div>
                            {(props.video_url != null && props.video_url != "") &&
                                <div className="container mt-3 pt-3 pb-3 ml-3 mr-5">
                                    <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Company Info</h3>
                                    <div className="mb-3 mt-2 mr-5">
                                        <ReactPlayer id="company-branding-player" controls={true} width={"100%"} height={"100%"} url={props.video_url} />
                                    </div>
                                </div>}
                            <div className="container mt-3 pt-3 pb-3 ml-3 pr-5">
                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Jobs</h3>
                                {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                                    return (
                                        <div className="container-fluid">
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-12" style={{ color: "#67a3fa" }}>
                                                        <div className="row">
                                                            <a target="_blank" href={j.job_url} className="title-button ml-4" style={{ float: "left", textDecoration: "none", color: "#67a3fa" }}>
                                                                {j.job_title}
                                                            </a>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col-12 ml-3" style={{ float: "left" }}>
                                                                <p style={{ color: "#95A8C3" }}>{j.job_location?.replace(",", " ")?.split(",")[0]} • {j.job_level}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <a target="_blank" href={j.job_url} className="default-btn mb-2 ml-4" style={{ paddingLeft: "25px", textDecoration: "none" }}>Apply</a>
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
    summary: state.job_reducer.summary,
    video_url: state.job_reducer.video_url,
    website: state.job_reducer.website,
    location: state.job_reducer.location,
    company_size: state.job_reducer.company_size,
    company_type: state.job_reducer.company_type,
    linkedin: state.job_reducer.linkedin,
    twitter: state.job_reducer.twitter,
    facebook: state.job_reducer.facebook,
    contact_email: state.job_reducer.contact_email,
});

export default connect(mapStateToProps, { getCompanyBrandingInfo })(CompanyBranding);