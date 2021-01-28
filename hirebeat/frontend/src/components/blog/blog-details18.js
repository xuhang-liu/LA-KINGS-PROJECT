import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent18 from './BlogDetailsContent18';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail10 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – How to answer the teamwork type question in an interview</title>
                    <meta name="description" CONTENT="How to answer the teamwork type question in an interview"></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-how-to-answer-the-teamwork-type-question-in-an-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent18 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;