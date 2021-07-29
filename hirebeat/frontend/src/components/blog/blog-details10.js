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
                    <meta name="description" CONTENT="'where do you see yourself in 5 years' is a common interview question. Learn about why employers ask the question and get tips on how to answer it"></meta>
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