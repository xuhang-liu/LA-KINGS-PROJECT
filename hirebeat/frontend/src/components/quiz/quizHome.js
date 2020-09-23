import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Quizdetail1 from './quizdetail1';
import { useEffect } from "react";


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class QuizHome extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Take Your Quiz Here" 
                    pageDescription="Recommend positions according to your personaility" 
                />
                <Quizdetail1/>
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default QuizHome;