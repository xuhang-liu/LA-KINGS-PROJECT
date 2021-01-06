import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent11 from './BlogDetailsContent11';
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
                    <title>HireBeat Blog – Guidelines on How to Answer "What Is Your Biggest Strength" In An Interview with a List of Strength</title>
                    <meta name="description" CONTENT="'What is your greatest strength' is a common question in interviews. Learn why employers ask the question and the best way to answer it."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-guidelines-on-how-to-answer-what-is-your-biggest-strength"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent11 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail10;