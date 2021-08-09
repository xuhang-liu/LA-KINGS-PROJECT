import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent9 from './BlogDetailsContent9';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail9 extends Component {
    render() {
        let title = "HireBeat Blog – Tips for Getting Your Resume Past an Applicant Tracking System";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Most employers are using tracking systems for their recruitment. Get tips for getting your resume past an applicant tracking system.";
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
                <BlogDetailsContent9 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail9;