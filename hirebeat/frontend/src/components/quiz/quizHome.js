import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Quizdetail1 from './quizdetail1';
import {Helmet} from "react-helmet";
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Quiz – The Best Video Interview Prep Tool For Jobseekers</title>
                    <meta name="Description" CONTENT="Recommend positions according to your personality!"></meta>
                    <link rel="canonical" href="https://hirebeat.co/quiz"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Take Your Quiz Here" 
                    pageDescription="Recommend positions according to your personality" 
                />
                <Quizdetail1/>
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default QuizHome;