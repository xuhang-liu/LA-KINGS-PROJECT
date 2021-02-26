import React, { Component } from "react";
import SocialButton from "./SocialButton";

export class SocialButtons extends Component {
  handleSocialLoginFailure = (err) => {
    console.error(err);
  };

  renderFacebookButton = () => {
    return (
      <SocialButton
        provider="facebook"
        appId="2133269236804598"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.handleSocialLoginFailure}
        type="facebook"
      >
        Login with Facebook
      </SocialButton>
    );
  };

  renderGoogleButton = () => {
    return (
      <SocialButton
        provider="google"
        appId="1060033467220-e88kdicq7lbj3pnftht2aife3f4n1psd.apps.googleusercontent.com"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.handleSocialLoginFailure}
        type="google"
      >
        Login with Google
      </SocialButton>
    );
  };

  renderLinkedinButton = () => {
    return (
      <SocialButton
        provider="linkedin"
        appId="LUJ9WPXjcmu5VxlC"
        onLoginSuccess={this.props.handleSocialLogin}
        onLoginFailure={this.handleSocialLoginFailure}
        type="linkedin"
      >
        Login with Linkedin
      </SocialButton>
    );
  };

  render() {
    return (
      <div style={{ marginTop: 15 , marginBottom: 50}}>
        {this.renderGoogleButton()}
        {this.renderFacebookButton()}
        {/*this.renderLinkedinButton()*/}
      </div>
    );
  }
}

export default SocialButtons;
