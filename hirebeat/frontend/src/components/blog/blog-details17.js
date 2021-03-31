import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent17 from './BlogDetailsContent17';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail17 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – 11 Mistakes Made by The Most Interviewees According to HR</title>
                    <meta name="description" CONTENT="What are the common interview mistakes? What should you avoid doing during an interview? We have listed 11 common mistakes in interviews for your reference."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-11-mistakes-made-by-the-most-interviewees-according-to-hr"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent17 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail17;