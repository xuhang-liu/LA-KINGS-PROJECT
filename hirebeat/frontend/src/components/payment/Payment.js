import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useEffect } from "react";

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
        return (
          <React.Fragment>
          <ScrollToTopOnMount />
            <div>{this.renderRedirect()}</div>
            </React.Fragment>
        );
    }
}

export default Payment;