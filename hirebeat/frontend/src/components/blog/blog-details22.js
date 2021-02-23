import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent22 from './BlogDetailsContent22';
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
                    <title>HireBeat Blog – How to Answer the Question: 'Where do you see yourself in 5 years?'</title>
                    <meta name="description" CONTENT="If you want to ace this question of “Where do you see yourself in 5 years?”, this article is something that you can’t miss. In this article, you will find a detailed breakdown of how to structure your responses base on different situation"></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-how-to-answer-the-question-where-do-you-see-yourself-in-5-years"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent22 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;