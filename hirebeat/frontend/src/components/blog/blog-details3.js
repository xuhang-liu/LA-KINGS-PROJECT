import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent3 from './BlogDetailsContent3';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail3 extends Component {
    render() {
        let title = "HireBeat Blog – How to Prepare for an AI Interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "AI interviews are taking momentum in the corporate world. Get tips on how you can prepare for a successful AI interview.";
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
                <BlogDetailsContent3 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail3;