import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import { connect } from "react-redux";
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';
import { addCreditToUser } from "../../redux/actions/auth_actions";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class ProPayment extends Component {
    componentDidMount() {
        if(this.props.isAuthenticated){
            var data = {
                "plan": "pro",
                "user_id": this.props.user.id
            }
            this.props.addCreditToUser(data);
        }
        this.renderRedirect();
      }

    renderRedirect = () => {
        //alert
    confirmAlert({
        title: 'Congratulation!',
        message: 'You are [PRO] member now.',
        buttons: [
          {
            label: 'OK'
          }
        ]
        });
        return <Redirect to='/employer_dashboard' />
      }

    render() {
        const meta = {
          title: 'HireBeat – Credit Payment',
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

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth_reducer.isAuthenticated,
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { addCreditToUser })(ProPayment);