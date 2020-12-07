import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent12 from './BlogDetailsContent12';
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
                    <title>HireBeat Blog – How To Answer "What Is Your Weakness" Question In An Interview</title>
                    <meta name="description" CONTENT="How To Answer 'What Is Your Weakness' Question In An Interview"></meta>
                    <link rel="canonical" href="https://hirebeat.co/how-to-answer-what-is-your-weakness-question-in-an-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent12 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;