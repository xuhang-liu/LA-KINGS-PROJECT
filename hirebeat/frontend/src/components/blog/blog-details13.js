import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent13 from './BlogDetailsContent13';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail13 extends Component {
    render() {
        let title = "HireBeat Blog – 3 Fastest-growing Jobs You Might Not Know About";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Learn about the careers experiencing high growth in the job market for insight on the paths you should pursue.";
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
                <BlogDetailsContent13 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail13;