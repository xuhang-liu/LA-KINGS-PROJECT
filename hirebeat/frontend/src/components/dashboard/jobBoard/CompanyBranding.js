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
                    <div className="py-5" style={{ background: "#F3F6F9", minWidth: "140px", fontFamily: "Inter, Segoe UI" }}>
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "84.5%", minHeight: "900px", borderRadius: "8px", background: "white", position: "relative", paddingBottom: "4rem" , marginBottom: "45px" , marginTop: "30px"}}>
                            <img style={{height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon" />
                            {(props.company_logo != "" && props.company_logo != null) &&
                                <img style={{ width: "7rem", marginLeft: "8%", marginTop: "-3.5rem" }} src={props.company_logo} alt="icon" />}
                            <h1 style={{ marginTop: "32px", marginLeft: "8%", fontWeight: "600", fontSize: "42px", color: "#090D3A" }}>{companyName}</h1>
                            <h2 style={{ marginLeft: "8%", fontWeight: "600", fontSize: "1.5rem", color: "#67a3f3" , marginTop: "12px", marginBottom: "27px"}}>{ props.company_type } </h2>                    
                            <div className="row" style={{paddingLeft: "8%", paddingRight: "8%"}}>
                                <div style={{width: "62%", marginRight: "8%"}}>
                                    <div className="card container-xl pt-3 pb-3" style={{marginLeft:"15px", width:"98%"}}>
                                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem", paddingLeft:"12px", paddingTop:"6px", fontSize:"21px"}}>Company Overview</h3>
                                        {(props.summary != null && props.summary != "") &&
                                            <div className="mb-3 mr-3" style={{color:"#090D3A", fontWeight:"500", marginTop:"2px" , paddingLeft:"12px"}}>
                                                {parse('' + props.summary + '')}
                                            </div>}
                                    </div>
                                    {(props.video_url != null && props.video_url != "") &&
                                        <div className="card container-xl pt-3 pb-3" style={{marginLeft:"15px", width:"98%", marginTop:"45px"}}>
                                            <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" , paddingLeft:"12px", paddingTop:"6px", fontSize:"21px"}}>Company Info</h3>
                                            <div className="mb-3 mt-3 ml-5 mr-5">
                                                <ReactPlayer id="company-branding-player" controls={true} width={"100%"} height={"100%"} url={props.video_url} />
                                            </div>
                                        </div>}
                                    <div className="card container-xl pt-3 pb-3" style={{marginLeft:"15px", width:"98%", marginTop:"45px"}}>
                                        <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" , paddingLeft:"12px", paddingTop:"6px", fontSize:"21px"}}>Jobs</h3>
                                        {props.jobs_branding?.length > 0 ?
                                            <div>
                                                {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                                                    return (
                                                        <div className="container-xl">
                                                            <div className="mt-4 ml-3">
                                                                <div className="row">
                                                                    <div className="col-9" style={{ color: "#67a3fa" }}>
                                                                        <div className="row">
                                                                            <a target="_blank" rel="noreferrer" href={j.job_url} className="title-button ml-4" style={{ float: "left", textDecoration: "none", color: "#090D3A" , fontWeight: "700", fontSize:"15px"}}>
                                                                                {j.job_title}
                                                                            </a>
                                                                        </div>
                                                                        <div className="row mb-2">
                                                                            <div className="col-12 ml-2" style={{ float: "left", marginTop: "-12px"}}>
                                                                                <p style={{ color: "#4F5E74", fontWeight: "500" , fontSize:"12px"}}>{j.job_location?.replace(",", " ")?.split(",")[0]} • {j.job_level}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-3">
                                                                        <div className="row">
                                                                            <a target="_blank" rel="noreferrer" href={j.job_url} className="default-btn" style={{ paddingLeft: "25px", marginTop: "0.6rem", textDecoration: "none", width: "70%" , fontSize:"12px"}}>Apply</a>
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
                                                                    marginTop: "0.5rem",
                                                                    width:"95%",
                                                                    marginLeft: "10px"
                                                                }}
                                                            />
                                                        </div>
                                                    )
                                                })}
                                            </div> :
                                            <div>
                                                <p className="px-5">Thank you for your interest, but there are no job openings available at this time.</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div style={{ width: "30%" }}>
                                    <div className='col' style={{background: "#F3F6F9" }}>
                                    <div className='col' style={{background: "#F3F6F9", paddingLeft: "5%", paddingRight: "5%" }}>
                                        <h3 style={{ color: "#090D3A", fontWeight: "650", fontSize: "1.5rem" , paddingTop: "24px" , marginBottom: "21px"}}>About the Company</h3>
                                        {props.website != "" &&
                                            <div>
                                                <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Website</p>
                                                <a className="website" target="_blank" rel="noreferrer" style={{ color: "##090d3a", fontWeight: "500", fontSize: "12px" }} href={props.website?.startsWith("https://")?props.website:"https://"+props.website}>{props.website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                            </div>
                                        }
                                        {props.location != "" &&
                                            <div>
                                                <br />
                                                <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Location</p>
                                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "12px" }}>{props.location}</p>
                                            </div>
                                        }
                                        {props.company_size != "" &&
                                            <div>
                                                <br />
                                                <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Company Size</p>
                                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "12px" }}>{props.company_size}</p>
                                            </div>
                                        }
                                        {props.company_type != "" &&
                                            <div>
                                                <br />
                                                <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Industry</p>
                                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "12px" }}>{props.company_type}</p>
                                            </div>
                                        }
                                        {props.contact_email != "" &&
                                            <div>
                                                <br />
                                                <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Contact Email</p>
                                                <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "12px" }}>{props.contact_email}</p>
                                            </div>
                                        }
                                        <br />
                                        <p style={{ color: "#090D3A", fontWeight: "600", fontSize: "15px", marginBottom: "0rem" }}>Social Media</p>
                                        <div className="row pl-3" style={{paddingBottom: "24px"}}>
                                            {(props.facebook != null && props.facebook != "") && <a target="_blank" rel="noreferrer" href={props.facebook}><FacebookIcon size={30} round={true} /></a>}
                                            {(props.linkedin != null && props.linkedin != "") && <a target="_blank" rel="noreferrer" className="ml-2" href={props.linkedin}><LinkedinIcon size={30} round={true} /></a>}
                                            {(props.twitter != null && props.twitter != "") && <a target="_blank" rel="noreferrer" className="ml-2" href={props.twitter}><TwitterIcon size={30} round={true} /></a>}
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="py-5" style={{ background: "#E8EDFC", fontFamily: "Inter, Segoe UI" }}>
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
                                {props.website != "" &&
                                    <div>
                                        <br />
                                        <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Website</p>
                                        <a className="website" target="_blank" rel="noreferrer" href={props.website?.startsWith("https://")?props.website:"https://"+props.website}>{props.website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                    </div>
                                }
                                {props.location != "" &&
                                    <div>
                                        <br />
                                        <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Location</p>
                                        <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.location}</p>
                                    </div>
                                }
                                {props.company_size != "" &&
                                    <div>
                                        <br />
                                        <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Company Size</p>
                                        <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_size}</p>
                                    </div>
                                }
                                {props.company_type != "" &&
                                    <div>
                                        <br />
                                        <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Industry</p>
                                        <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.company_type}</p>
                                    </div>
                                }
                                {props.contact_email != "" &&
                                    <div>
                                        <br />
                                        <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Contact Email</p>
                                        <p style={{ color: "##090d3a", fontWeight: "500", fontSize: "0.9rem" }}>{props.contact_email}</p>
                                    </div>
                                }
                                <br />
                                <p style={{ color: "##4A6F8A", fontWeight: "600", fontSize: "1.1rem", marginBottom: "0rem" }}>Social Media</p>
                                <div className="row pl-3">
                                    {(props.facebook != null && props.facebook != "") && <a target="_blank" rel="noreferrer" href={props.facebook}><FacebookIcon size={30} round={true} /></a>}
                                    {(props.linkedin != null && props.linkedin != "") && <a target="_blank" rel="noreferrer" className="ml-2" href={props.linkedin}><LinkedinIcon size={30} round={true} /></a>}
                                    {(props.twitter != null && props.twitter != "") && <a target="_blank" rel="noreferrer" className="ml-2" href={props.twitter}><TwitterIcon size={30} round={true} /></a>}
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
                                {props.jobs_branding?.length > 0 ?
                                    <div>
                                        {props.jobs_branding?.sort((a, b) => b.id - a.id)?.map((j, index) => {
                                            return (
                                                <div className="container-fluid">
                                                    <div className="mt-4">
                                                        <div className="row">
                                                            <div className="col-12" style={{ color: "#67a3fa" }}>
                                                                <div className="row">
                                                                    <a target="_blank" rel="noreferrer" href={j.job_url} className="title-button ml-4" style={{ float: "left", textDecoration: "none", color: "#67a3fa" }}>
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
                                                                    <a target="_blank" rel="noreferrer" href={j.job_url} className="default-btn mb-2 ml-4" style={{ paddingLeft: "25px", textDecoration: "none" }}>Apply</a>
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
                                    </div> :
                                    <div>
                                        <p className="px-5">Thank you for your interest, but there are no job openings available at this time.</p>
                                    </div>
                                }
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