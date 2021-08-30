import React, { Component } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

export class ShareJob extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <img src="https://hirebeat-assets.s3.amazonaws.com/job-share-logo.png"/>
                </div>
                <p className="job-share-p">
                    Your position has been posted!
                </p>
                <p className="job-share-p" style={{marginBottom: "2rem"}}>
                    It will also appear on other job boards within 24 hours.
                </p>
                <div className="d-flex justify-content-center">
                    <div className="row ml-0" style={{ position: "relative", background: "#E8EDFC", borderRadius: "5px", border: "2px solid #67A3F3", width: "90%", height: "3rem" }}>
                        <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                            <p style={{ fontSize: "0.8rem" }} onClick={() => { copyAlert(); navigator.clipboard.writeText(this.props.shareLink); this.props.disableShowShare() }}>{this.props.shareLink}</p>
                        </div>
                        <div className="d-flex justify-content-center py-1">
                            <button onClick={() => { copyAlert(); navigator.clipboard.writeText(this.props.shareLink); this.props.disableShowShare() }}
                                className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                            </button>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: "2rem"}} />
                <p className="share-p">Don't forget to share!</p>
                <div className="d-flex justify-content-center">
                    <div className="single-footer-widget1">
                        <ul className="social">
                            <li>
                                <FacebookShareButton
                                    url={this.props.shareLink}
                                    quote={this.props.jobTitle + " at " + this.props.companyName}
                                    hashtag="#hirebeat">
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-facebook"></i>
                                    </a>
                                </FacebookShareButton>
                            </li>
                            <li>
                                <TwitterShareButton
                                    url={this.props.shareLink}
                                    title={this.props.jobTitle + " at " + this.props.companyName}
                                    via={"HireBeat"}
                                    hashtag="#hirebeat">
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-twitter"></i>
                                    </a>
                                </TwitterShareButton>
                            </li>
                            <li>
                                <LinkedinShareButton
                                    url={this.props.shareLink}
                                    title={this.props.jobTitle + " at " + this.props.companyName}
                                    source={"HireBeat"}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-linkedin"></i>
                                    </a>
                                </LinkedinShareButton>
                            </li>
                            <li>
                                <WhatsappShareButton
                                    url={this.props.shareLink}
                                    title={this.props.jobTitle + " at " + this.props.companyName}>
                                    <a target="_blank" rel="noreferrer">
                                        <i className="bx bxl-whatsapp"></i>
                                    </a>
                                </WhatsappShareButton>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

function copyAlert() {
    confirmAlert({
        title: "URL Coppied to Clipboard!",
        message: "",
        buttons: [
            {
                label: 'Ok'
            }
        ]
    });
}

export default ShareJob;