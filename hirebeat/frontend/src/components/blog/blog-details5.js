import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent5 from './BlogDetailsContent5';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail5 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Things to Do Before an Interview</title>
                    <meta name="description" CONTENT="To have a successful interview, you need to be prepared. Learn about the things you should do before an interview to help you stay prepared."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-things-to-do-before-an-interview"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent5 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail5;