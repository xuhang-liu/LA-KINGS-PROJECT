import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

class SourcingPayFail extends Component {
    componentDidMount() {
        this.renderRedirect();
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
                            <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "1rem" }}>Oops!</h3>
                            <h3 className="profile-h3" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "1rem" }}><i className='bx bxs-x-circle bx-md' style={{color:"#ff4d4f"}}></i></h3>
                            <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem", color:"#7a7a7a" }}>Looks like the payment was not successful.</h3>
                            <h3 className="profile-p" style={{ textAlign: "center", marginBottom: "2rem", marginTop: "-1rem", color:"#7a7a7a" }}>Please try again later.</h3>
                        </div>
                    </div>
                );
            }
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


export default SourcingPayFail;