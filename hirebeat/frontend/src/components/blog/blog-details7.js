import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent7 from './BlogDetailsContent7';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail7 extends Component {
    render() {
        let title = "HireBeat Blog – How to Write a Thank-You Email After a Job Interview (Example Included)";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Thank you, emails can go a long way in making you stand out from other candidates. Get tips for writing a good thank you email and a thank-you email sample.";
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
                <BlogDetailsContent7 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail7;