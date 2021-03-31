import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent20 from './BlogDetailsContent20';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail20 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – How to Handle the Question You don’t Know How to Answer in an Interview</title>
                    <meta name="description" CONTENT="Preparing for an interview is time-consuming and hard, and we can still miss preparing some questions that are going to be asked on the day of the interview. Here we have provided you with some magical tips that are going to help you answer such questions for sure."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-how-to-handle-the-question-you-donot-know"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent20 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail20;