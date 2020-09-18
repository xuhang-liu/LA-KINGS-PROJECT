import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import QuizResultDetail from './quizResultDetail';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class QuizResultPage extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="View Your Results" 
                    pageDescription="Your suitable position is" 
                />
                <QuizResultDetail />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default QuizResultPage;