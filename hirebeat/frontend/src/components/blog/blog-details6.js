import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent6 from './BlogDetailsContent6';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail6 extends Component {
    render() {
        let title = "HireBeat Blog – 4 Common Interview Questions and How to Answer Them";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Get information on the common questions asked in interviews. Get tips on the appropriate answers for common interview questions.";
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
                <BlogDetailsContent6 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail6;