import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent16 from './BlogDetailsContent16';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail16 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – 10 Tips to Deal with Job Hunting Stress</title>
                    <meta name="description" CONTENT="The job-hunting process can be stressful. Here are the 10 tips that can help you to better navigate yourself through this process and land the job you want with a peace of mind."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-10-tips-to-deal-with-job-hunting-stress"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent16 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail16;