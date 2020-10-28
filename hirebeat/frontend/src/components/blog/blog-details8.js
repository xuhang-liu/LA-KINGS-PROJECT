import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent8 from './BlogDetailsContent8';
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
                    <title>HireBeat Blog – The Best Video Interview Prep Tool For Jobseekers</title>
                    <meta name="Description" CONTENT="Keywords to Include on A Resume"></meta>
                    <link rel="canonical" href="https://hirebeat.co"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent8 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetails;