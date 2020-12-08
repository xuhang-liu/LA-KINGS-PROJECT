import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent14 from './BlogDetailsContent14';
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
                    <title>HireBeat Blog – "Why do you want to work here?" Your Ultimate Interview Tips</title>
                    <meta name="description" CONTENT="'Why do you want to work here?' seems to be a simple but challenging question. Lack of proper preparation for this question can be risky because you will lower the chances of acquiring the job."></meta>
                    <link rel="canonical" href="https://hirebeat.co/why-do-you-want-to-work-here"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent14 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;