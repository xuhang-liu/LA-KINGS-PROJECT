import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent13 from './BlogDetailsContent13';
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
                    <title>HireBeat Blog – 3 Fastest-growing Jobs You Might Not Know About</title>
                    <meta name="Description" CONTENT="3 Fastest-growing Jobs You Might Not Know About"></meta>
                    <link rel="canonical" href="https://hirebeat.co/3-fastest-growing-jobs-you-might-not-know-about"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent13 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;