import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent18 from './BlogDetailsContent18';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail18 extends Component {
    render() {
        let title = "HireBeat Blog – How to answer the teamwork type question in an interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "How to answer the teamwork type question in an interview";
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
                <BlogDetailsContent18 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail18;