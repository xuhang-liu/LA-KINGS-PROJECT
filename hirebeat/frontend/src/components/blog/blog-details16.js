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
        let title = "HireBeat Blog – 10 Tips to Deal with Job Hunting Stress";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "The job-hunting process can be stressful. Here are the 10 tips that can help you to better navigate yourself through this process and land the job you want with a peace of mind.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title></title>
                    <meta name="description" CONTENT={description}></meta>
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