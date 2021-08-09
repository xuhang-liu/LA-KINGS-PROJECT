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

class BlogDetail12 extends Component {
    render() {
        let title = "HireBeat Blog – How To Answer 'What Is Your Weakness' Question In An Interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "'What is your weakness?' is one of the most common interview questions. Get tips on how to answer the question in an interview.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{titile}</title>
                    <meta name="description" CONTENT={description}></meta>
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

export default BlogDetail12;