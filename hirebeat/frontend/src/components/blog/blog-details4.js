import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent4 from './BlogDetailsContent4';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail4 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Questions to Ask at Career Fairs</title>
                    <meta name="Description" CONTENT="Questions to Ask at Career Fairs"></meta>
                    <link rel="canonical" href="https://hirebeat.co/questions-to-ask-at-career-fairs"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent4 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail4;