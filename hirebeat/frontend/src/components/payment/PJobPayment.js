import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";
import axios from "axios";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class PJobPayment extends Component {
    componentDidMount() {
        this.renderRedirect();
    }

    copyAlert = () => {
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

    renderRedirect = () => {
        axios.get(`jobs/get-most-recent-job`).then((res) => {
            //alert
            confirmAlert({
                closeOnEscape: true,
                closeOnClickOutside: false,
                customUI: ({ onClose }) => {
                    return (
                        <div>
                            <div onClick={() => { onClose(); }} style={{ float: "right", cursor: "pointer" }}><i className="bx bx-x bx-md"></i></div>
                            <div className="container py-5 px-5" style={{ fontFamily: "Inter, Segoe UI", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)" }}>
                                <img src='https://hirebeat-assets.s3.amazonaws.com/Employer/pjob_payment_suc.png' alt="img" style={{ display:"block", margin:"auto", width:"50%" }}></img>
                                <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "1rem" }}>Your Premium Job Advertising is now active!</h3>
                                <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem" }}>Your job will appear on premium job boards within 24 hours.</h3>
                                <div className="row ml-2 mb-5" style={{ position: "relative", background: "#F4F5FD", borderRadius: "5px", border: "1px solid #006dff", width: "90%", height: "3rem" }}>
                                    <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                                        <p style={{ fontSize: "0.8rem" }} onClick={() => { this.copyAlert(); navigator.clipboard.writeText(res.data.data.job_url?.replaceAll(' ', '%20')); }}>{res.data.data.job_url}</p>
                                    </div>
                                    <div className="py-3">
                                        <button onClick={() => { this.copyAlert(); navigator.clipboard.writeText(res.data.data.job_url?.replaceAll(' ', '%20')); }}
                                            className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem", top:"3.4rem" }}>
                                            <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                        </button>
                                    </div>
                                </div>
                                <div id="resume-hr"><hr /></div>
                                <p className="share-p">Share on other platforms</p>
                                <div className="single-footer-widget1" style={{ textAlign: 'center' }}>
                                    <ul className="social">
                                        <li>
                                            <FacebookShareButton
                                                url={res.data.data.job_url}
                                                quote={res.data.data.job_title + " at " + res.data.data.company_name}
                                                hashtag={res.data.data.company_name}>
                                                <a target="_blank" rel="noreferrer">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <TwitterShareButton
                                                url={res.data.data.job_url}
                                                title={res.data.data.job_title + " at " + res.data.data.company_name}
                                                via={res.data.data.company_name}
                                                hashtag={res.data.data.company_name}>
                                                <a target="_blank" rel="noreferrer">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </TwitterShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton
                                                url={res.data.data.job_url}
                                                title={res.data.data.job_title + " at " + res.data.data.company_name}
                                                source={res.data.data.company_name}>
                                                <a target="_blank" rel="noreferrer">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </LinkedinShareButton>
                                        </li>
                                        <li>
                                            <WhatsappShareButton
                                                url={res.data.data.job_url}
                                                title={res.data.data.job_title + " at " + res.data.data.company_name}>
                                                <a target="_blank" rel="noreferrer">
                                                    <i className="bx bxl-whatsapp"></i>
                                                </a>
                                            </WhatsappShareButton>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                }
            });
        })
            .catch(error => {
                console.log(error)
            });
        return <Redirect to='/' />
    }

    render() {
        const meta = {
            title: 'HireBeat – Payment',
            description: 'Payment Info',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Interview Practice, Behavioral Question, Technical Question, Mock Interview'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    <ScrollToTopOnMount />
                    <div>{this.renderRedirect()}</div>
                </React.Fragment>
            </DocumentMeta>
        );
    }
}


export default PJobPayment;