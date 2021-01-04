import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent1 from './BlogDetailsContent1';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Why video interview practice platforms are essential for landing your dream job</title>
                    <meta name="description" CONTENT="Why video interview practice platforms are essential for landing your dream job"></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-why-video-inteview-practice-platforms-are-essential-for-landing-your-dream-job"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent1 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1;