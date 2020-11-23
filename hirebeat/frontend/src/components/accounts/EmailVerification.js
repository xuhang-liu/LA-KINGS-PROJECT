import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import { useEffect } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {resendActivationEmail} from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
//import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class EmailVerification extends Component {
    static propTypes = {
        resendActivationEmail: PropTypes.func.isRequired,
    };

    redirectToContact = () => {
        const { history } = this.props;
        if (history) history.push(`/contact`);
    };

    resendEmail = () => {
        var userId = this.props.user.id;
        var user = {"id": userId};
        this.props.resendActivationEmail(user);
        alert();
    }

    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Verify Your Email"
                    pageDescription="You will need to verify toyr email to complete registration"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div className="justify-items">
                        <i className="bx bx-mail-send" style={{fontSize: "9.375rem", color: "#67A3F3"}}></i>
                    </div>
                    <p className="email-text">
                        An email has been sent to <span style={{color: "#2196F3", textDecoration: "underline"}}>{this.props.user.email} </span>
                        with a link to verify your account. If you have notreceived the email after a few minutes, please check your spam folder.
                    </p>
                    <div className="email-btns" style={{marginBottom: "10%", marginTop: "3rem"}}>
                        <button
                            onClick={this.resendEmail}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#090D3A", paddingLeft: "1.5625rem", marginRight: "3rem"}}
                        >
                            Resend Email
                            <span></span>
                        </button>
                        <button
                            onClick={this.redirectToContact}
                            className="default-btn"
                            style={{color:"white", backgroundColor:"#67A3F3", paddingLeft: "1.5625rem"}}
                        >
                            Contact Us
                            <span></span>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
});

function alert() {
    confirmAlert({
          title: "Email Has Sent",
          message: "Please check the activation email and activate your account",
          buttons: [
                {
                  label: 'Ok'
                }
          ]
    });
}

export default connect(mapStateToProps, {resendActivationEmail})(EmailVerification);
