import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent19 from './BlogDetailsContent19';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail19 extends Component {
    render() {
        let title = "HireBeat Blog – Acing Pandemic Job Interview Questions";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Since the pandemic, the interview format and content of many companies have changed. This article will give you a comprehensive introduction to how to deal with interview questions about the pandemic and how to stand out from these questions.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{title}</title>
                    <meta name="description" CONTENT={description}></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent19 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail19;