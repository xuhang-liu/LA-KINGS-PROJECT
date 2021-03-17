import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer1 from './BlogDetailsContentEmployer1';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Blog – How does a one-way interview help a company in its hiring?</title>
                    <meta name="description" CONTENT="One-way interviews are convenient for employers in various ways. A recruiter can invite a large number of applicants to participate. Completed interviews are in-boxed to the recruiter for review and evaluation by the hiring team"></meta>
                    <link rel="canonical" href="https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer1 />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default BlogDetail1_Employer;