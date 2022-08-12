import React, { Component } from 'react';
import { useEffect } from "react";
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import PropTypes from "prop-types";
import { resendActivationEmail } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import { CountdownButton } from "./CountdownButton";
import DocumentMeta from 'react-document-meta';
import { Redirect } from "react-router-dom";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class EmailVerificationEmployerMini extends Component {
  static propTypes = {
    resendActivationEmail: PropTypes.func.isRequired,
  };

  redirectToContact = () => {
    // const { history } = this.props;
    // if (history) history.push(`https://hirebeat.co/contact/`);
    window.location.href = "https://hirebeat.co/contact/";
  };

  resendEmail = () => {
    var userId = this.props.user.id;
    var user = { "id": userId };
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
    if (this.props.user.email == "" || this.props.user.email == null) {
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
      title: 'HireBeat – Email Verification(Employer) On Login',
      description: 'Email Verification for registration(Employer)',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
        }
      }
    };
    if (this.props?.profile?.email_confirmed) {
      return <Redirect to="/employer_dashboard" />;
    }
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          <section className="signup-area min-width-1290">
            <div className="row pt-5 d-flex justify-content-center"><img src="https://hirebeat-assets.s3.amazonaws.com/employer_progress_step4.png" alt="image"></img></div>
            <div className="row d-flex justify-content-center m-0">
              <div className="signup-content" style={{ marginTop: "6rem", marginLeft:"0rem", width:"100%" }}>
                <div className="signup-form">
                  <h1 className="email-verify-title" style={{ color: "#090d3a" }}>One More Step</h1>
                  <p className="email-verify-txt" style={{ color: "#090d3a" }}>You will need to verify your email to complete registration  </p>
                  <div className="justify-items">
                    <i className="bx bx-mail-send" style={{ fontSize: "9.375rem", color: "#090d3a" }}></i>
                  </div>
                  <p className="email-text" style={{ color: "#090d3a" }}>
                    An email has been sent to <span style={{ color: "#090d3a", textDecoration: "underline" }}>{this.props.user.email} </span>
                    with a link to verify your account. If you have not received the email after a few minutes, please check your spam folder.
                  </p>
                  <div style={{ marginBottom: "10%", marginTop: "3rem" }}>
                    <CountdownButton resendEmail={this.resendEmail} />
                    <button
                      onClick={this.redirectToContact}
                      className="default-btn4"
                      style={{ paddingLeft: "25px" }}
                    >
                      Contact Us
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default connect(mapStateToProps, { resendActivationEmail, updateProfile })(EmailVerificationEmployerMini);
