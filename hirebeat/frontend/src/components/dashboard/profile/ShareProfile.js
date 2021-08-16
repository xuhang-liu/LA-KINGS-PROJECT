import React, {Component} from "react";
import { confirmAlert } from 'react-confirm-alert';
import {FacebookIcon, LinkedinIcon, TwitterIcon, EmailIcon} from "react-share";

export class ShareProfile extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="share-h1">Share your profile</h1>
                <div className="d-flex justify-content-center">
                    <div className="row ml-0" style={{ position: "relative", background: "#E8EDFC", borderRadius: "5px", border: "2px solid #67A3F3", width: "90%", height: "3rem" }}>
                        <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                            <p style={{ fontSize: "0.8rem" }}>{this.props.shareLink}</p>
                        </div>
                        <div className="d-flex justify-content-center py-1">
                            <button onClick={() => { copyAlert(); navigator.clipboard.writeText(this.props.shareLink) }}
                                className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                            </button>
                        </div>
                    </div>
                </div>
                <div id="resume-hr"><hr/></div>
                <p className="share-p">Share on other platforms</p>
                <div className="single-footer-widget d-flex justify-content-center">
                    <ul className="social1">
                        <li>
                            <a href="https://www.facebook.com/HireBeat" target="_blank" rel="noreferrer">
                            <FacebookIcon size={32} round={true}>
                            </FacebookIcon>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/hirebeat/" target="_blank" rel="noreferrer">
                            <LinkedinIcon size={32} round={true}>
                            </LinkedinIcon>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/hirebeat" target="_blank" rel="noreferrer">
                            <TwitterIcon size={32} round={true}>
                            </TwitterIcon>
                            </a>
                        </li>
                        <li>
                            <a href="mailto: info@hirebeat.co" target="_blank" rel="noreferrer">
                            <EmailIcon size={32} round={true}>
                            </EmailIcon>
                            </a>
                        </li>
                    </ul>
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

export default ShareProfile;