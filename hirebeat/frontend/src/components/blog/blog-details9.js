import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent9 from './BlogDetailsContent9';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Tips for Getting Your Resume Past an Applicant Tracking System</title>
                    <meta name="Description" CONTENT="Keywords to Include on A Resume"></meta>
                    <link rel="canonical" href="https://hirebeat.co/tips-for-getting-your-resume-past-an-applicant-tracking-system"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent9 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;