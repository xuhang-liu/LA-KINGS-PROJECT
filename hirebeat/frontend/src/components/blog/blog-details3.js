import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent3 from './BlogDetailsContent3';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail3 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – How to Prepare for an AI Interview</title>
                    <meta name="description" CONTENT="How to Prepare for an AI Interview"></meta>
                    <link rel="canonical" href="https://hirebeat.co/how-to-prepare-for-an-AI-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent3 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail3;