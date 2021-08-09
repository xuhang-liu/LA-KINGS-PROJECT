import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent8 from './BlogDetailsContent8';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail8 extends Component {
    render() {
        let title = "HireBeat Blog – Keywords to Include on A Resume";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Hiring managers look for words in resumes that show that a candidate is ideal for a role. Learn about the different keywords to include in your resume and what they mean.";
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
                <BlogDetailsContent8 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail8;