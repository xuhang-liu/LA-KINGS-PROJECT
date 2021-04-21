import React from 'react';
import {IconText} from "../DashboardComponents";

const ReviewCandidate = (props) => {    

    const renderResume = (resumes) => {
        return(
            <div>
                <div className="row">
                        <div className="ml-3" />
                        {(resumes>=75 && resumes <=100) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/1.png" alt="img" />}
                        {(resumes>=51 && resumes <=75) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/2.png" alt="img" />}
                        {(resumes>=25 && resumes <=50) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/3.png" alt="img" />}
                        {(resumes>=0 && resumes <=25) && 
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/4.png" alt="img" />}            
                </div>
            </div>
        )
    }   

    return(
        <div className="fluid-container ml-5 mb-5" style={{width:'92%'}}>
            <div className="col d-flex align-items-center pl-0">
                <button
                    type="button"
                    className="panel-button"
                    onClick={props.onHide}
                    style={{outline: "none", margin:"0%", padding:"0px", background:"#e8edfc"}}
                >
                    <div className="center-items">
                        <i style={{color: "#67A3F3"}} className="bx bx-arrow-back bx-sm"></i>
                        <p style={{color: "#67A3F3", fontSize: "1.25rem"}}>Back To List</p>
                    </div>
                </button>
            </div>
            <div className="row" style={{display:"flex"}}>
                <div className="col-3 pl-3 mt-3 pr-2">
                    <div className="resume-box p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"35%"}}>
                        <div className="row mb-3" style={{marginBottom:"2%"}}>
                                    <div className="col d-flex align-items-center">
                                    <h2
                                        style={{
                                        fontWeight: "600",
                                        marginRight: "0.8rem",
                                        wordWrap: "break-word",
                                        wordBreak: "break-all",
                                        color: "#090D3A",
                                        }}
                                    >
                                        props.username
                                    </h2>
                                    </div>
                                </div>
                                <div className="row mb-2" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-phone bx-sm"}
                                            textDisplayed={" this.props.phone_candidate"}
                                            textSize={"1rem"}
                                            textColor={"#4A6F8A"}
                                            iconMargin={"3px"}
                                            />
                                    </div>
                                </div>
                                <div className="row mb-2" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-envelope bx-sm"}
                                            textDisplayed={" this.props.email_candidate"}
                                            textSize={"1rem"}
                                            textColor={"#4A6F8A"}
                                            iconMargin={"5px"}
                                            />
                                </div>
                                </div>
                                <div className="row" style={{marginTop:"1%"}}>
                                    <div className="col d-flex align-items-center">
                                            <IconText
                                            iconName={"bx bx-location-plus bx-sm"}
                                            textDisplayed={" this.props.location_candidate"}
                                            textSize={"1rem"}
                                            textColor={"#4A6F8A"}
                                            iconMargin={"3px"}
                                            />
                                    </div>
                                </div>
                    </div>
                    <div className="resume-box mt-4 p-4" style={{background:"white", borderRadius:"10px", width:"100%", height:"61.6%", position:"relative"}}>
                        <h2
                            style={{
                            fontWeight: "600",
                            marginRight: "0.8rem",
                            wordWrap: "break-word",
                            wordBreak: "break-all",
                            color: "#090D3A",
                            }}
                        >
                            Evaluation Scale
                        </h2>
                        <div className="mt-5 px-4">
                            {renderResume(80)}
                        </div>
                        <div>
                            <img src="">
                            </img>
                        </div>
                        <div className="row" style={{cursor:"pointer", display:"flex", justifyContent:"space-around"}}>
                            <IconText
                                iconName={"bx bx-arrow-to-right bx-sm"}
                                textDisplayed={"Resume Evaluation"}
                                textSize={"1.3rem"}
                                textColor={"#67A3F3"}
                                iconMargin={"3px"}
                            />
                        </div>
                        <div className="row" style={{display:"flex", justifyContent:"space-around", position:"absolute", bottom:"2rem", left:"0.9rem", width:"100%"}}>
                            <button className="default-btn1" style={{paddingLeft:"25px"}}>
                                Invite to Interview
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-9" className="resume-box mt-3 ml-3 p-4" style={{background:"white", borderRadius:"10px", height:"44rem", width:"73%"}}>
                    <h2
                        style={{
                        fontWeight: "600",
                        marginRight: "0.8rem",
                        wordWrap: "break-word",
                        wordBreak: "break-all",
                        color: "#090D3A",
                        }}
                    >
                        Resume
                    </h2>
                    <div className="light-blue-border" style={{width:"100%", height:"90%"}}>
                        <object data="https://hirebeat-user-resume.s3.amazonaws.com/1617374226000.pdf" 
                                style={{width:"100%", height:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default ReviewCandidate;