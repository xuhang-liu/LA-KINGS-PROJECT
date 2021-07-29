import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import { useEffect } from "react";
import {connect} from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import PropTypes from "prop-types";
import {resendActivationEmail} from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import {CountdownButton} from "./CountdownButton";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';
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

    makeProfile = () => {
        return {
          user: this.props.user.id,
          id: this.props.profile.id,
          email_confirmed: true,
        };
      };
    
      activateEmail = () => {
        // only for FB social login
        if (this.props.user.email == "" || this.props.user.email == null ) {
          var profile = this.makeProfile();
          this.props.updateProfile(profile);
          const { history } = this.props;
          if (history) history.push(`/dashboard`);
        }
      };

      componentDidMount() {
        this.activateEmail();
      }

    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
              }
            }
        };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Verify Your Email"
                    pageDescription="You will need to verify your email to complete the registration"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div className="justify-items">
                        <i className="bx bx-mail-send" style={{fontSize: "9.375rem", color: "#67A3F3"}}></i>
                    </div>
                    <p className="email-text">
                        An email has been sent to <span style={{color: "#2196F3", textDecoration: "underline"}}>{this.props.user.email} </span>
                        with a link to verify your account. If you have not received the email after a few minutes, please check your spam folder.
                    </p>
                    <div className="email-btns" style={{marginBottom: "10%", marginTop: "3rem"}}>
                        <CountdownButton resendEmail={this.resendEmail} />
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
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  profile: state.auth_reducer.profile,
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

export default connect(mapStateToProps, {resendActivationEmail, updateProfile})(EmailVerification);
