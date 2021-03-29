import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent21 from './BlogDetailsContent21';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail21 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – 4 Amazing Tips to Effectively Networking During Covid-19</title>
                    <meta name="description" CONTENT="Wondering how you can network effectively and expand your professional network? Here are the four most amazing tips through which you can ace any interview or land your most desirable job without much effort."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-4-amazing-tips-to-effectively-networking-during-covid-19"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent21 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail21;