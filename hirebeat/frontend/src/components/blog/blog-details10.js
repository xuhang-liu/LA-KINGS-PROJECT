import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent10 from './BlogDetailsContent10';
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
                    <title>HireBeat Blog – How To Answer The Question "Where Do You To See Yourself In 5 Years" In An Interview  (Sample Answer Included)</title>
                    <meta name="Description" CONTENT="How To Answer The Question 'Where Do You To See Yourself In 5 Years' In An Interview  (Sample Answer Included)"></meta>
                    <link rel="canonical" href="https://hirebeat.co/how-to-answer-the-question-where-do-you-to-see-yourself-in-5-years-in-an-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent10 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;