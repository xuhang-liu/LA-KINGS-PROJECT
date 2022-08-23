import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';
import axios from "axios";

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class SourcingPayment extends Component {
    componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        axios.post("jobs/sourcing-request-payment-suc", config).then((res) => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
        this.renderRedirect();
        //Segment info
        window?.analytics?.track("Job - Sourcing Paid Success", {
            paymentTime: Date().toLocaleString(),
        });
    }

    renderRedirect = () => {
        confirmAlert({
            closeOnEscape: true,
            closeOnClickOutside: false,
            customUI: ({ onClose }) => {
                return (
                    <div>
                        <div onClick={() => { onClose(); }} style={{ float: "right", cursor: "pointer" }}><i className="bx bx-x bx-md"></i></div>
                        <div className="container py-5 px-5" style={{ fontFamily: "Inter, Segoe UI", backgroundColor: "#ffffff", borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)" }}>
                            <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "1rem" }}>Request Received!</h3>
                            <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "1rem" }}><i className='bx bxs-check-circle bx-md' style={{ color: "#01cfa6" }}></i></h3>
                            <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem", color: "#7a7a7a" }}>Thank you for submitting the sourcing request.</h3>
                            <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem", color: "#7a7a7a" }}>We will notify you via email when your candidate list is ready,</h3>
                            <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem", color: "#7a7a7a" }}>which usually takes less than 24 hours.</h3>
                        </div>
                    </div>
                );
            },
            overlayClassName: "overlay",
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


export default SourcingPayment;