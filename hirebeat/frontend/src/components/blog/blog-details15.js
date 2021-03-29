import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent15 from './BlogDetailsContent15';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail15 extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Top 3 Jobs You Should Apply For Finance Major</title>
                    <meta name="description" CONTENT="You can capitalize on the various exciting opportunities in the ever-expanding financial sector."></meta>
                    <link rel="canonical" href="https://hirebeat.co/blog-top-3-jobs-you-should-apply-for-finance-major"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent15 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail15;