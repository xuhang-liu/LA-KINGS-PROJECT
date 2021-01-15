import React, { Component } from 'react';
import {connect} from "react-redux";
import PageTitleArea from '../Common/PageTitleArea';
import { confirmAlert } from 'react-confirm-alert';

export class InterviewCompletion extends Component {

    alertFeedback() {
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

    componentDidMount() {
        this.alertFeedback();
    }

    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Congratulations!" 
                    pageDescription="Your interview videos have been sucessfully sent to the employer" 
                />
            </React.Fragment>
        )
    }
}

export default connect(null)(InterviewCompletion);