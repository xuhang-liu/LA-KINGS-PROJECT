import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent1 from './BlogDetailsContent1';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1 extends Component {
    render() {
        let title = "HireBeat Blog – Why video interview practice platforms are essential for landing your dream job";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Why video interview practice platforms are essential for landing your dream job";
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
                <BlogDetailsContent1 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1;