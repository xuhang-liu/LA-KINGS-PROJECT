import React, { Component } from "react";
import { Link } from "react-router-dom";
//import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
//import { SetupCard, CardRow, ButtonContainer } from "./CardComponents";
import { useEffect } from "react";
import SmallPageTitleArea from '../Common/SmallPageTitleArea';
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import { confirmAlert } from 'react-confirm-alert';
import PropTypes from "prop-types";
import DocumentMeta from 'react-document-meta';
//import 'react-confirm-alert/src/react-confirm-alert.css';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export class QuestionTypeChoices extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  redirectToRegister = () => {
      const { history } = this.props;
      if (history) history.push(`/register`);
  };

  redirectToEmailVerification = () => {
      const { history } = this.props;
      if (history) history.push(`/email-verification`);
  };

  redirectToBehaviorQuestions = () => {
      // check save limit
      if (this.props.saved_video_count >= this.props.save_limit) {
          return upgradeMessage();
      }
      if (!this.props.isAuthenticated) {
          return this.redirectToRegister();
      }
      else if (this.props.profile.email_confirmed) {
          const { history } = this.props;
          if (history) history.push(`/practice-modes`);
      }
      else {
          this.redirectToEmailVerification();
          return alert();
      }
  };

  redirectToTechQuestions = () => {
      // check save limit
      if (this.props.saved_video_count >= this.props.save_limit) {
          return upgradeMessage();
      }
      if (!this.props.isAuthenticated) {
          return this.redirectToRegister();
      }
      else if (this.props.profile.email_confirmed) {
          const { history } = this.props;
          if (history) history.push(`/techfields`);
      }
      else {
          this.redirectToEmailVerification();
          return alert();
      }
  };

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
        }
  };

  componentDidMount() {
    if(this.props.user != null){
      this.activateEmail();
    }
  }

  render() {
    const meta = {
      title: 'HireBeat – Practice',
      description: 'Practice Info',
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
      <section className="pricing-area pb-100 bg-f4f5fe">
      <ScrollToTopOnMount />
      <div style={{marginBottom:"6%"}}>
      <MediaQuery minDeviceWidth={1224}>
        <SmallPageTitleArea
          pageTitle="Step 1: Choose Question Type"
          style={{marginBottom: "2rem"}}
        />
        <div className="row" style={{margin: "auto", width: "70%", marginTop: "3%"}}>
          <button className="col features-box" style={{marginLeft: "5%", backgroundColor:"#ffffff"}} onClick={this.redirectToBehaviorQuestions}>
            <div style={{padding: "10%", textAlign: "left"}}>
            <div className="icon" style={{borderRadius: "15px"}}>
              <img src="https://hirebeat-assets.s3.amazonaws.com/bq-logo.png" />
            </div>
              <h3 className="practice-h3">Behavioral Question</h3>
              <p className="mode-col-text1">
                You will practice answering how you <br/>
                performed in certain situations and <br/>
                the ways you handled issues.
              </p>
              <p style={{fontSize:"12px", color:"#7d7d7d"}}>"Tell me about how you work within a group."</p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
          </button>
          <button className="col features-box" style={{marginLeft: "6rem", backgroundColor:"#ffffff"}} onClick={this.redirectToTechQuestions}>
            <div style={{padding: "10%", textAlign: "left"}}>
            <div className="icon" style={{borderRadius: "15px"}}>
              <img src="https://hirebeat-assets.s3.amazonaws.com/tq-logo.png" />
            </div>
              <h3 className="practice-h3">Technical Question</h3>
              <p className="mode-col-text1">
                You will practice industry-specific <br/>
                questions that show your skills and <br/>
                knowledge.
              </p>
              <p style={{fontSize:"12px", color:"#7d7d7d"}}>"Pitch me a stock"</p>
              <p className="mode-col-text2">Next Step -> </p>
            </div>
          </button>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1223}>
        <SmallPageTitleArea
          pageTitle="Welcome to Hirebeat!"
          pageDescription="Our mobile functionality for interview practice is currently under construction, we apologized for the inconvenience.Please login on your PC to get the full experience."
        />
        <div style={{textAlign: "center"}}>
          <Link to="/">
            <a className="default-btn" style={{color:"white", backgroundColor:"#FF6B00", marginTop:"1rem"}}>
              <i className="bx bxs-hot"></i>
                Back to Home Page
            </a>
          </Link>
        </div>
      </MediaQuery>
      </div>
      </section>
      </React.Fragment>
      </DocumentMeta>
    );
  }
}

function alert() {
    confirmAlert({
          title: "Account Activation Needed",
          message: "Please check the activation email and activate your account",
          buttons: [
                {
                  label: 'Ok'
                }
          ]
    });
}

function upgradeMessage() {
  confirmAlert({
    title: 'Upgrade',
    message: 'No more free practice left.😢 Upgrade now to get unlimited practice',
    buttons: [
      {label: 'Upgrade Now', onClick: () => redirectPricing()},
      {label: 'OK'},
    ]
  });
}

function redirectPricing() {
  window.location.href = "/pricing";
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  isAuthenticated: state.auth_reducer.isAuthenticated,
  save_limit: state.auth_reducer.profile.save_limit,
  saved_video_count: state.auth_reducer.profile.saved_video_count,
});

export default connect(mapStateToProps, { updateProfile })(QuestionTypeChoices);
