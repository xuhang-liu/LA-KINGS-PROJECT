import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer19 from './BlogDetailsContentEmployer19';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer19 extends Component {
    render() {
        return (
            <React.Fragment>
              <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – Employer Branding vs Recruitment Marketing</title>
                    <meta name="description" CONTENT="Employer branding and recruitment marketing are two terms that are used relatively interchangeably by a lot of people although there is a clear distinction between the two."></meta>
                    <link rel="canonical" href="https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing"/>
                    <meta property="og:title" content="HireBeat Blog – Employer Branding vs Recruitment Marketing" />
                    <meta property="og:description" content="Employer branding and recruitment marketing are two terms that are used relatively interchangeably by a lot of people although there is a clear distinction between the two." />
                    <meta property="og:image" content="https://hirebeat-assets.s3.amazonaws.com/blog/blog-employer19.jpg" />
                    <meta property="og:url" content="https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing" />
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer19 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1_Employer19;