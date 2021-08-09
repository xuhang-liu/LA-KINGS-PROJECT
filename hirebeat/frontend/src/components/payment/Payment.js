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

class Payment extends Component {
    componentDidMount() {
        this.renderRedirect();
      }

    renderRedirect = () => {
        //alert
    confirmAlert({
        title: 'Congratulation!',
        message: 'You are [Premium] member now.',
        buttons: [
          {
            label: 'Sure'
          }
        ]
        });
        return <Redirect to='/login' />
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

export default Payment;