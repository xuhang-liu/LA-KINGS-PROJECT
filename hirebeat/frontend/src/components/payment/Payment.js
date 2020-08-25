import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
        return <Redirect to='/' />
      }

    render() {
        return (
            <div>{this.renderRedirect()}</div>
        );
    }
}

export default Payment;