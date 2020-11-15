import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent7 from './BlogDetailsContent7';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail7 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – How to Write a Thank-You Email After a Job Interview (Example Included)</title>
                    <meta name="Description" CONTENT="How to Write a Thank-You Email After a Job Interview (Example Included)"></meta>
                    <link rel="canonical" href="https://hirebeat.co/how-to-write-a-thank-you-email-after-a-job-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent7 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail7;